import { test, expect } from '@playwright/test';

test('Handling Date picker in playwright', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
        await page.getByRole('button', { name: 'Login' }).first().click();

        await page.getByRole('link', { name: 'My Info' }).click();
        //await page.getByPlaceholder('yyyy-dd-mm').first().fill('2023-28-10');
        await page.locator('div').filter({ hasText: /^Driver's License NumberLicense Expiry Date$/ }).locator('i').click();
        await page.getByText('Today').click();
        await page.getByRole('button', { name: 'Save' }).first().click();

        await page.locator('div').filter({ hasText: /^Driver's License NumberLicense Expiry Date$/ }).locator('i').click();
        await page.getByRole('button', { name: '' }).nth(1).click();
        await page.getByText('30').click();

        await page.getByRole('button', { name: 'Save' }).first().click();

        
});