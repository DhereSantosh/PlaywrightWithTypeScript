import { test, expect } from '@playwright/test';

test('Multiple Browsers/Tabs in playwright', async ({ page, browser }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await expect(page.getByRole('textbox', { name: 'Username' })).toBeEditable();
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

        await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

        await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();
        await page.getByRole('button', { name: 'Login' }).first().click();

        await expect.soft(page).toHaveTitle('OrangeHRM');

       // New Browser Session
       const context2 = await browser.newContext();
       const page2 = await context2.newPage();

       await page2.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await expect(page2.getByRole('textbox', { name: 'Username' })).toBeEditable();
        await page2.getByRole('textbox', { name: 'Username' }).fill('Admin');

        await expect(page2.getByRole('textbox', { name: 'Password' })).toBeEmpty();
        await page2.getByRole('textbox', { name: 'Password' }).fill('admin123');

        await expect(page2.getByRole('button', { name: 'Login' })).toBeEnabled();
        await page2.getByRole('button', { name: 'Login' }).first().click();

        await expect.soft(page2).toHaveTitle('OrangeHRM');

         const newTab = await context2.newPage();
         await newTab.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
         //await newTab.getByRole('textbox', { name: 'Username' }).fill('Admin');
         //await newTab.getByRole('textbox', { name: 'Password' }).fill('admin123');
         //await newTab.getByRole('button', { name: 'Login' }).first().click();



});