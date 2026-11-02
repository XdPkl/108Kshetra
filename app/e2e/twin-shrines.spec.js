/** The two Irattai Thirupathi shrines remain independently browsable and trackable. */
import { test, expect } from '@playwright/test';

test('plans and marks the Tholaivillimangalam twins independently', async ({ page }) => {
  await page.goto('kshetrams');
  await page.getByLabel(/search kshetrams/i).fill('Tholaivillimangalam');
  const cards = page.locator('.kshetram-card');
  await expect(cards).toHaveCount(2);
  await expect(page.locator('.result-count')).toHaveText('1 kshetram');
  await expect(page.getByText(/2 temple entries/)).toBeVisible();
  const aravinda = cards.filter({ hasText: /Aravindalochanar/ });
  const devapiran = cards.filter({ hasText: /Devapiran/ });
  await expect(aravinda.getByRole('link', { name: /view temple details/i }))
    .toHaveAttribute('href', /\/kshetram\/tholaivillimangalam$/);
  await expect(devapiran.getByRole('link', { name: /view temple details/i }))
    .toHaveAttribute('href', /\/kshetram\/tholaivillimangalam-devapiran$/);

  await aravinda.getByRole('button', { name: 'Mark visited' }).click();
  await expect(devapiran.getByRole('button', { name: 'Mark visited' })).toBeVisible();
  await aravinda.getByRole('button', { name: 'Add to trip' }).click();
  await expect(devapiran.getByRole('button', { name: 'Add to trip' })).toBeVisible();
  await devapiran.getByRole('button', { name: 'Mark visited' }).click();
  await devapiran.getByRole('button', { name: 'Add to trip' }).click();

  await devapiran.getByRole('link', { name: /view temple details/i }).click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Devapiran');
  await page.getByRole('tab', { name: 'Deities', exact: true }).click();
  await expect(page.getByText('Devapiran / Srinivasan', { exact: true })).toBeVisible();
  await expect(page.getByRole('img', { name: /Moolavar/ }).first())
    .toHaveAttribute('src', /photos\/desam-74-devapiran-moolavar\.jpg$/);

  await page.goto('kshetram/tholaivillimangalam');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Aravindalochanar');
  await expect(page.getByText('Irundha Thirukkolam (Seated posture facing East)', { exact: true }))
    .toBeVisible();
  await page.goto('');
  await expect(page.getByRole('progressbar')).toHaveAttribute('aria-label', '1 of 106 kshetrams visited');
  await expect(page.locator('header')).toContainText('1/108 Darshans');
});

test('shows 106 terrestrial and 18 Pandiya Nadu Divya Desams with both twin entries', async ({ page }) => {
  await page.goto('kshetrams?region=Pandiya%20Nadu');
  await expect(page.locator('.result-count')).toHaveText('18 kshetrams');
  await expect(page.locator('.kshetram-card')).toHaveCount(19);
  await expect(page.getByText(/19 temple entries/)).toBeVisible();
  await page.getByRole('button', { name: /toggle regional temples dropdown/i }).hover();
  await expect(page.locator('header').getByRole('button', { name: /Pandiya Nadu/ })).toContainText('18');
  await page.goto('map');
  await expect(page.getByLabel('Filter by region').getByRole('option', { name: 'All regions (106)' }))
    .toHaveCount(1);
  await expect(page.getByLabel('Filter by region').getByRole('option', { name: 'Pandiya Nadu (18)' }))
    .toHaveCount(1);
  await page.getByLabel('Filter by region').selectOption('Pandiya Nadu');
  await expect(page.getByText('18 of 106 terrestrial desams shown').first()).toBeVisible();
});
