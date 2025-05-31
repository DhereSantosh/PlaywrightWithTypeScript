import { test, expect } from '@playwright/test';

test('Handling Mouse Actions in playwright', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
        await page.getByRole('button', { name: 'Login' }).first().click();

        await page.getByRole('link', { name: 'Claim' }).click({button:'right'});
        await page.getByRole('link', { name: 'Admin' }).click({button:'middle'});
        await page.getByRole('link', { name: 'PIM' }).click({button:'left'});

        await page.getByRole('link', { name: 'Reports' }).hover();

        await page.getByRole('link', { name: 'Reports' }).dblclick();
        


});