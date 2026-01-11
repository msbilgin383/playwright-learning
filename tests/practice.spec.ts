import { test, expect } from '@playwright/test';

test('Form doldurma ve locator pratikleri', async ({ page }) => {
    // 1. Sayfaya git
    await page.goto('https://demoqa.com/text-box');

    // 2. getByPlaceholder kullanımı
    await page.getByPlaceholder('Full Name').fill('Ahmet Test');
    await page.getByPlaceholder('name@example.com').fill('ahmet@test.com');
    // 3. getByRole kullanımı (Textarea için)
    
    // Birden fazla textarea varsa 'label' ile ayırt edebiliriz
    await page.locator('#currentAddress').fill('İstanbul, Türkiye');

    // 4. Submit butonu (getByRole ile)
    const submitBtn = page.getByRole('button', { name: 'Submit' });
    await submitBtn.click();

    // 5. Doğrulama (Assertion)
    // Çıkan sonucun görünür olduğunu doğrula
    const output = page.locator('#output');
    await expect(output).toBeVisible();
    await expect(output).toContainText('Ahmet Test');
});