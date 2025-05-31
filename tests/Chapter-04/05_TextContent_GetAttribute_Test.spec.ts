import { test, expect } from '@playwright/test';

test('Get text in playwright', async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const uname = await page.locator('[class="oxd-label"]').first().textContent();
        console.log(`Username text is: ${uname}`);
        expect(uname).toBe('Username');

});

test('Get attribute in playwright', async ({ page }) => {

            // Get attribute value
        await page.goto('https://github.com/DhereSantosh');
        const attributeValue = await page.getByTestId('repositories').first().getAttribute('data-selected-links');
        console.log(`Attribute value is : ${attributeValue}`);
});