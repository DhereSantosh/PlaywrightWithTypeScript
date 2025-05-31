import { test, expect } from '@playwright/test';

test('Read ENV file config in playwright', async ({ page }) => {

        await page.goto(`${process.env.ORANGEHRM_URL}`);

        
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
        await page.getByRole('button', { name: 'Login' }).first().click();

        await expect.soft(page).toHaveTitle('OrangeHRM');
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        
        //await expect(page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')).toHaveText('Invalid credentials');

});