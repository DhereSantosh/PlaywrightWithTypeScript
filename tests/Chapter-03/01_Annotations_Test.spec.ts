import { test, expect } from '@playwright/test';

test('Test 1', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await expect(page.getByRole('textbox', { name: 'Username' })).toBeEditable();
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

        await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
        await page.getByRole('textbox', { name: 'Password' }).fill('admin1234');

        await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();
        await page.getByRole('button', { name: 'Login' }).first().click();

        //await expect.soft(page).toHaveTitle('OrangeHRM1');
        //await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        
        await expect(page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')).toHaveText('Invalid credentials');

});

test.skip('Test 2', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await expect(page.getByRole('textbox', { name: 'Username' })).toBeEditable();
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

        await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
        await page.getByRole('textbox', { name: 'Password' }).fill('admin1234');

        await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();
        await page.getByRole('button', { name: 'Login' }).first().click();

        //await expect.soft(page).toHaveTitle('OrangeHRM1');
        //await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        
        await expect(page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')).toHaveText('Invalid credentials');

});

test.only('Test 3', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await expect(page.getByRole('textbox', { name: 'Username' })).toBeEditable();
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

        await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
        await page.getByRole('textbox', { name: 'Password' }).fill('admin1234');

        await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();
        await page.getByRole('button', { name: 'Login' }).first().click();

        //await expect.soft(page).toHaveTitle('OrangeHRM1');
        //await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        
        await expect(page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')).toHaveText('Invalid credentials');

});