import { test, expect } from '@playwright/test';

test('Google arama motoru testi', async ({ page }) => {
  await page.goto('https://www.google.com');

  // Çerez uyarısını handle et (Dil Türkçe ise)
  const cookieButton = page.getByRole('button', { name: 'Tümünü kabul et' });
  
  if (await cookieButton.isVisible()) {
    await cookieButton.click();
  }

  const searchBox = page.locator('textarea[name="q"]'); 
  await searchBox.fill('Playwright Testing');
  await page.keyboard.press('Enter');

  await expect(page).toHaveTitle(/Playwright Testing/);
});