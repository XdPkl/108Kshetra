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
    await expect(page.getByText(/1 of 108 kshetrams visited/i)).toBeVisible();

    await page.goto('kshetrams');
    await page.getByLabel('Visit status').selectOption('visited');
    await expect(page.getByText(/showing 1 of 108 kshetrams/i)).toBeVisible();

    // Reset clears the marks (native confirm accepted via dialog handler)
    page.once('dialog', (dialog) => dialog.accept());
    await page.getByRole('button', { name: /reset progress/i }).click();
    await expect(page.getByText(/0 of 108 kshetrams visited/i)).toBeVisible();
  });

  test('TC-14: map renders desams, filters by region and opens a popup page', async ({ page }) => {
    await page.goto('map');
    await expect(page.getByRole('heading', { name: /map of the divya desams/i })).toBeVisible();
    const markers = page.locator('.leaflet-interactive');
    await expect(markers.first()).toBeVisible();

    // Region chip narrows the plotted markers
    const before = await markers.count();
    await page.getByRole('button', { name: /pandiya nadu/i }).first().click();
    const after = await markers.count();
    expect(after).toBeLessThan(before);

    // Clicking a marker opens a popup with a link to the detail page
    await markers.first().click();
    await expect(page.locator('.leaflet-popup-content')).toBeVisible();
    await page.getByRole('link', { name: /open page/i }).click();
    await expect(page).toHaveURL(/kshetram\/[a-z-]+$/);
  });

  test('TC-15: trip add → page lists stops → order → share-restore', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    for (const id of ['srirangam', 'tirupati', 'srivilliputhur']) {
      await page.goto(`kshetram/${id}`);
      await page.getByRole('button', { name: /add to trip/i }).click();
    }
    await expect(page.getByRole('link', { name: /trip · 3/i })).toBeVisible();

    await page.getByRole('link', { name: /trip · 3/i }).click();
    await expect(page).toHaveURL(/trip$/);
    await expect(page.getByText(/3 stops/i)).toBeVisible();

    await page.getByRole('button', { name: /order my route/i }).click();
    await expect(page.getByText(/nearest-first/i)).toBeVisible();

    // Share (clipboard fallback) produces a restorable URL
    await page.getByRole('button', { name: /share/i }).click();
    const shared = await page.evaluate(() => navigator.clipboard.readText());
    expect(shared).toContain('/trip?t=');
    await page.evaluate(() => window.localStorage.clear());
    await page.goto(shared.replace(/https?:\/\/[^/]+\/108Kshetra\//, ''));
    await expect(page.getByText(/trip loaded from a shared link/i)).toBeVisible();
    await expect(page.getByText(/3 stops/i)).toBeVisible();
  });

  test('TC-16: detail V3 shows the shrine template sections and yatra hooks', async ({ page }) => {
    await page.goto('kshetram/srirangam');
    for (const heading of [
      'Basic Shrine Profile', 'Deities & Consorts', 'Sthala Puranam & History',
      'Mangalasasanam', 'Visit Info', 'Location', 'Visuals & Media',
    ]) {
      await expect(page.getByRole('heading', { name: heading })).toBeVisible();
    }
    await expect(page.getByText(/word-by-word meaning/i).first()).toBeVisible();
    await expect(page.getByText(/not yet documented yet\./i).first()).toBeVisible();
  });

  test('TC-17: nav shows Kshetra Tours, About page renders, hero CTA reads Azhwars', async ({ page }) => {
    await page.goto('');
    await expect(page.getByRole('link', { name: 'Kshetra Tours' })).toBeVisible();
    await expect(page.getByRole('main').getByRole('link', { name: 'Azhwars', exact: true })).toBeVisible();

    await page.getByRole('link', { name: 'Kshetra Tours' }).click();
    await expect(page).toHaveURL(/about$/);
    await expect(page.getByRole('heading', { name: /about us — kshetra tours/i })).toBeVisible();
  });
});
