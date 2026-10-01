/**
 * E2E user journeys (Playwright) — implements TC-02..TC-12 of TCS-108K-008.
 * Runs against the production build served by `vite preview` (see playwright.config.js).
 */
import { test, expect } from '@playwright/test';

test.describe('Home page (TC-02, TC-03, TC-11)', () => {
  test('shows hero, featured kshetrams and navigation', async ({ page }) => {
    await page.goto('');
    await expect(page.getByRole('heading', { name: /108 divya kshetrams/i })).toBeVisible();
    // 2026-09 refresh: the hero invocation stack renders the phrase exactly
    // once (removed entirely in PO round 3, restored by the approved mockup)
    await expect(page.getByText('Nalayira Divya Prabandham', { exact: true })).toHaveCount(1);
    // 2026-09 refresh: CTA is "Explore Kshetrams"; cards use the new
    // featured-card anatomy
    await expect(page.getByRole('link', { name: /explore kshetrams/i })).toBeVisible();
    expect(await page.locator('.featured-card').count()).toBeGreaterThanOrEqual(4);
    await expect(page.getByRole('link', { name: /azhwar darshan - featured/i })).toBeVisible();
    await expect(page.getByRole('link', { name: '108 Kshetras' })).toBeVisible();
    await expect(page.locator('footer')).toContainText(/good faith/i);
  });
});

test.describe('Browse (TC-04..TC-07)', () => {
  test('lists all 108 kshetrams with the result count', async ({ page }) => {
    await page.goto('kshetrams');
    await expect(page.getByText('108 kshetrams', { exact: true })).toBeVisible();
    expect(await page.locator('.kshetram-card').count()).toBe(108);
  });

  test('search narrows results (TC-05)', async ({ page }) => {
    await page.goto('kshetrams');
    await page.getByLabel(/search kshetrams/i).fill('kanchipuram');
    await expect(page.locator('.result-count')).not.toHaveText('108 kshetrams');
    const cards = page.locator('.kshetram-card');
    expect(await cards.count()).toBeGreaterThan(0);
  });

  test('state filter and combined search (TC-06)', async ({ page }) => {
    await page.goto('kshetrams');
    await page.getByRole('button', { name: /more filters/i }).click();
    await page.getByLabel(/^State$/i).selectOption('Kerala');
    await expect(page.getByText('11 kshetrams', { exact: true })).toBeVisible();
  });

  test('empty state and reset (TC-07)', async ({ page }) => {
    await page.goto('kshetrams');
    await page.getByLabel(/search kshetrams/i).fill('atlantis');
    await expect(page.getByText(/no kshetrams found/i)).toBeVisible();
    await page.getByRole('button', { name: /clear all filters/i }).click();
    await expect(page.getByText('108 kshetrams', { exact: true })).toBeVisible();
  });
});

test.describe('Kshetram detail (TC-08, TC-09, V2)', () => {
  test('shows all sections with a safe map link', async ({ page }) => {
    await page.goto('kshetram/srirangam');
    await expect(page.getByRole('heading', { name: /srirangam/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /temple timings/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /deities & consorts/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /^mangalasasanam$/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /sthala puranam/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /nearby divya desams/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /significance/i })).toBeVisible();
    const mapLink = page.getByRole('link', { name: /view on google maps/i });
    await expect(mapLink).toHaveAttribute('target', '_blank');
    await expect(mapLink).toHaveAttribute('rel', /noopener/);
  });

  test('offers share, print, distance and directions (V2)', async ({ page }) => {
    await page.goto('kshetram/srirangam');
    await expect(page.getByRole('button', { name: /share/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /print/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /distance from me/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /get directions/i })).toHaveAttribute('rel', /noopener/);
  });

  test('nearby list links to adjacent desams', async ({ page }) => {
    await page.goto('kshetram/srirangam');
    const nearby = page.locator('.nearby__list a');
    expect(await nearby.count()).toBeGreaterThan(0);
  });

  test('celestial desam hides earthly features', async ({ page }) => {
    await page.goto('kshetram/paramapadam');
    await expect(page.getByText(/celestial realm/i).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /distance from me/i })).toHaveCount(0);
  });

  test('unknown id shows the not-found state', async ({ page }) => {
    await page.goto('kshetram/unknown-id');
    await expect(page.getByText(/this kshetram was not found/i)).toBeVisible();
    await expect(page.getByRole('link', { name: /back to browse/i })).toBeVisible();
  });
});

test.describe('Azhwars (TC-10)', () => {
  test('lists twelve azhwars and pre-filters browse from the desams link', async ({ page }) => {
    await page.goto('azhwars');
    expect(await page.locator('.azhwar-card').count()).toBe(12);
    // PO round 12 snap: the per-card "N Divya Desams" link replaces the chips row
    const desams = page.locator('.azhwar-card a[href*="kshetrams?azhwar="]').first();
    await desams.click();
    await expect(page.locator('.result-count')).not.toHaveText('108 kshetrams');
    await expect(page).toHaveURL(/\/kshetrams\?azhwar=/);
  });
});

test.describe('Unknown routes (TC-12)', () => {
  test('renders the page-not-found state without crashing', async ({ page }) => {
    await page.goto('nonexistent');
    await expect(page.getByText(/page not found/i)).toBeVisible();
  });
});
