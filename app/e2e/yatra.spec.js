/**
 * E2E journeys for the V3 yatra toolkit (US-ENG-08, TC-13..17):
 * visited tracking, the interactive map, trip planning and the new pages.
 * Complements journeys.spec.js (baseline V1/V2 flows). Navigation uses
 * baseURL-relative paths, matching journeys.spec.js.
 */
import { test, expect } from '@playwright/test';

test.describe('V3 yatra toolkit', () => {
  test('TC-13: mark visited → progress updates → visited filter narrows', async ({ page }) => {
    await page.goto('kshetram/srirangam');
    await page.getByRole('button', { name: /mark as visited/i }).click();
    await expect(page.getByRole('button', { name: /✓ visited/i })).toHaveAttribute('aria-pressed', 'true');

    await page.goto('');
    // Yatra progress counts only the 106 earthly kshetrams (PO 2026-09-25);
    // the 2026-09 refresh exposes the count via the progressbar contract.
    await expect(page.getByRole('progressbar')).toHaveAttribute('aria-label', '1 of 106 kshetrams visited');

    await page.goto('kshetrams');
    // 2026-09-30 restyle: the visited checkbox became the "Visited (N)" scope pill
    await page.getByRole('button', { name: /visited \(1\)/i }).click();
    await expect(page.getByText('1 kshetram', { exact: true })).toBeVisible();

    // Reset clears the marks (native confirm accepted via dialog handler).
    // UXD v3.0: Browse no longer carries the compact tracker — reset on Home.
    await page.goto('');
    page.once('dialog', (dialog) => dialog.accept());
    await page.getByRole('button', { name: /reset progress/i }).click();
    await expect(page.getByRole('progressbar')).toHaveAttribute('aria-label', '0 of 106 kshetrams visited');
  });

  test('TC-14: map renders desams, tooltips on hover, filters by region and opens a popup page', async ({ page }) => {
    await page.goto('map');
    await expect(page.getByRole('heading', { name: /plan your yatra/i })).toBeVisible();
    const markers = page.locator('.leaflet-interactive');
    await expect(markers.first()).toBeVisible();

    // 2026-09-30 merge: cluster bubbles form below zoom 9 — zoom in so the
    // individual desam markers (and their hover tooltips) are exposed
    const zoomIn = page.locator('.leaflet-control-zoom-in');
    for (let i = 0; i < 4; i += 1) {
      await zoomIn.click();
      await page.waitForTimeout(400); // let each zoom animation settle
    }
    await expect(page.locator('.map-cluster')).toHaveCount(0);

    // Round 23: selecting a result in the pane highlights its marker
    // (heavier gold stroke) — hover it for the tooltip (US-MAP-04) and
    // click it for the popup, exercising result/marker synchronization
    await page.getByRole('button', { name: /focus .* on the map/i }).first().click();
    const focused = page.locator('path[stroke-width="4"]');
    await expect(focused).toBeVisible();
    await focused.hover();
    await expect(page.locator('.leaflet-tooltip').last()).toBeVisible();

    // Region dropdown narrows the plotted markers
    const before = await markers.count();
    await page.getByLabel('Filter by region').selectOption('Pandiya Nadu');
    const after = await markers.count();
    expect(after).toBeLessThan(before);

    // Re-focus from the filtered list (the filter may drop the earlier
    // selection) and open its popup with the shared "View temple" link
    await page.getByRole('button', { name: /focus .* on the map/i }).first().click();
    await expect(focused).toBeVisible();
    await focused.click();
    await expect(page.locator('.leaflet-popup-content')).toBeVisible();
    await page.getByRole('link', { name: /view temple/i }).last().click();
    await expect(page).toHaveURL(/kshetram\/[a-z-]+$/);
  });

  test('TC-15: trip add → atlas lists stops → order → share-restore', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    for (const id of ['srirangam', 'tirupati', 'srivilliputhur']) {
      await page.goto(`kshetram/${id}`);
      await page.getByRole('button', { name: /add to trip/i }).click();
    }
    // PO 2026-09-30: header Map + My Yatra merged into one "Plan Yatra" pill
    await expect(page.getByRole('link', { name: /plan yatra 3/i })).toBeVisible();

    // The Plan Yatra pill lands on the Yatra Atlas (/map)
    await page.getByRole('link', { name: /plan yatra 3/i }).click();
    await expect(page).toHaveURL(/map$/);

    // PO round 10: the trip planner lives in a modal opened by the big
    // left-column button
    const dialog = page.getByRole('dialog', { name: /my yatra/i });
    await page.getByRole('button', { name: /my trip/i }).click();
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText(/3 stops/i)).toBeVisible();
    await dialog.getByRole('button', { name: 'Close' }).click();
    await expect(dialog).toBeHidden();

    // The route renders on the atlas itself once the In-trip scope is active
    await page.getByRole('button', { name: /in trip \(3\)/i }).click();
    await expect(page.locator('.leaflet-interactive')).toHaveCount(4); // 3 markers + 1 polyline

    // Route order + share run inside the reopened planner modal
    await page.getByRole('button', { name: /my trip/i }).click();
    await dialog.getByRole('button', { name: /order my route/i }).click();
    await expect(dialog.getByText(/nearest-first/i)).toBeVisible();

    // Share (clipboard fallback) produces a restorable URL
    await dialog.getByRole('button', { name: /share/i }).click();
    const shared = await page.evaluate(() => navigator.clipboard.readText());
    expect(shared).toContain('/map?t=');
    await page.evaluate(() => window.localStorage.clear());
    await page.goto(shared.replace(/https?:\/\/[^/]+\/108Kshetra\//, ''));
    // a shared link auto-opens the planner modal with the restore notice
    const restored = page.getByRole('dialog', { name: /my yatra/i });
    await expect(restored).toBeVisible();
    await expect(restored.getByText(/trip loaded from a shared link/i)).toBeVisible();
    await expect(restored.getByText(/3 stops/i)).toBeVisible();
  });

  test('TC-16: detail V3 shows the shrine template sections and yatra hooks', async ({ page }) => {
    await page.goto('kshetram/srirangam');
    // Round 16 mock: sections live behind the seven-tab switcher
    await expect(page.getByRole('heading', { name: 'Shrine at a glance' })).toBeVisible();
    for (const [label, heading] of [
      ['Deities', 'Deities & consorts'], ['History', 'Sthala Puranam & history'],
      ['Mangalasasanam', 'Mangalasasanam'], ['Visit info', 'Plan your darshan'],
      ['Location', 'Find the temple'], ['Media', 'Sacred features & resources'],
    ]) {
      await page.getByRole('tab', { name: label }).click();
      await expect(page.getByRole('heading', { name: heading }).first()).toBeVisible();
    }
    await page.getByRole('tab', { name: 'Mangalasasanam' }).click();
    await expect(page.getByText(/word-by-word meaning/i).first()).toBeVisible();
    await page.getByRole('tab', { name: 'Visit info' }).click();
    await expect(page.getByText(/additional travel and darshan details are not yet documented/i).first()).toBeVisible();
  });

  test('TC-17: nav shows Kshetra Tours, darshan strips render, About page opens', async ({ page }) => {
    await page.goto('');
    await expect(page.getByRole('link', { name: /kshetra tours/i })).toBeVisible();
    // PO request 2026-09-10: the hero "Azhwars" CTA became the darshan strips
    await expect(page.getByRole('main').getByRole('link', { name: /view all azhwars/i })).toBeVisible();
    await expect(page.getByRole('main').getByRole('link', { name: /view all acharyas/i })).toBeVisible();

    await page.getByRole('link', { name: /kshetra tours/i }).click();
    await expect(page).toHaveURL(/about$/);
    await expect(page.getByRole('heading', { name: /about us — kshetra tours/i })).toBeVisible();
  });

  test('TC-18: azhwar detail renders the snap hero with tabs and navigation', async ({ page }) => {
    await page.goto('azhwars');
    await page.getByRole('link', { name: /poigai azhwar/i }).click();
    await expect(page).toHaveURL(/azhwar\/poigai$/);
    // 2026-09-30 snap restyle: hero stats + tabs replace the spy-pill sections
    await expect(page.getByText(/the first of the mudhal azhwars/i)).toBeVisible();
    await expect(page.getByText(/100 pasurams/i)).toBeVisible();
    await expect(page.getByText('Sarovara Yogi')).toBeVisible();
    await expect(page.getByRole('heading', { name: /key moments/i })).toBeVisible();
    // Round 20: the lamp-of-knowledge band renders on the Life tab only —
    // jump to Hymns & meaning from there
    await page.getByRole('button', { name: /explore hymn & meaning/i }).click();
    await expect(page.getByText(/word-by-word meaning/i)).toBeVisible();
    // The featured desam card lives on the Sacred places tab
    await page.getByRole('tab', { name: /sacred places \(12\)/i }).click();
    await expect(page.getByRole('link', { name: /view kshetram/i })).toBeVisible();

    // Chronological prev/next navigation
    await page.getByRole('link', { name: /next: bhoothathazhwar/i }).click();
    await expect(page).toHaveURL(/azhwar\/bhoothath$/);
    await expect(page.getByRole('link', { name: /previous: poigai azhwar/i })).toBeVisible();
  });

  test('TC-19: acharyas index and acharya detail with pending markers', async ({ page }) => {
    await page.goto('acharyas');
    await expect(page.getByRole('heading', { name: /the acharyas/i })).toBeVisible();
    await expect(page.getByText(/The age of Ramanuja/i)).toBeVisible();
    // Round 22: era jump links anchor-scroll to the sections, which all
    // stay rendered; all 27 entries keep a single unique-named profile link
    await expect(page.getByRole('link', { name: 'Early masters' })).toBeVisible();
    await page.getByRole('link', { name: 'Later acharyas' }).click();
    await expect(page).toHaveURL(/acharyas#later-acharyas$/);
    await expect(page.getByRole('heading', { name: 'Later acharyas' })).toBeInViewport();
    // Ends-with match: the preview build serves under the /108Kshetra/ router basename.
    await page.locator('a[href$="/acharya/manavala-mamunigal"]').first().click();
    await expect(page).toHaveURL(/acharya\/manavala-mamunigal$/);
    await expect(page.getByRole('heading', { name: /life & miracles/i })).toBeVisible();
    // Round 14 mock: the full chronology collapses behind an expander — open it first.
    await page.getByText('Read the full chronology').click();
    await expect(page.getByText(/Eedu 36000 Padi/i).first()).toBeVisible();
    await expect(page.getByText(/Sreesailesa-dayaapaatram/i)).toBeVisible();

    // Dossier-populated acharya renders the full template without pending markers
    await page.goto('acharya/yamunacharya');
    await expect(page.getByRole('heading', { name: /chronology of life events/i })).toBeVisible();
    await expect(page.getByText(/Na Dharma Nishto/i).first()).toBeVisible();
    await expect(page.getByText(/\[Content pending — to be provided\]/i)).toHaveCount(0);
  });
});
