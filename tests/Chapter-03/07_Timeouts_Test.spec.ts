import { test, expect } from '@playwright/test';
import { time } from 'console';

test('Timeouts in playwright', async ({ page }) => {

        test.setTimeout(1 * 60 * 1000); // timeout at test level for 1 min(test should execute within 1 min)

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await expect(page.getByRole('textbox', { name: 'Username' })).toBeEditable();
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

        await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

        await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();
        // action timout wait at test level
        await page.getByRole('button', { name: 'Login' }).first().click({timeout:5000});

        // timout wait at test assertion level
        await expect(page).toHaveTitle('OrangeHRM1',{timeout:5000});
        //await expect.soft(page).toHaveTitle('OrangeHRM1');

        //await page.waitForTimeout(60000);
        //await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        
        //await expect(page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')).toHaveText('Invalid credentials');

});