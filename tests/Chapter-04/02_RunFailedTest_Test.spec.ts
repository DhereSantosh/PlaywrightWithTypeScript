import { test, expect } from '@playwright/test';

test('Re run failed TC in playwright', async ({ page, browser }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await expect(page.getByRole('textbox', { name: 'Username' })).toBeEditable();
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

        await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

        await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();
        await page.getByRole('button', { name: 'Login' }).first().click();

        await expect.soft(page).toHaveTitle('OrangeHRM');
});

test('Test 2', async ({ page, browser }) => {
    expect(true).toBe(false);
});

test('Test 3', async ({ page, browser }) => {
    expect(true).toBe(false);
});