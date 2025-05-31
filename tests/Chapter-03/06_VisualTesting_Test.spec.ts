import { test, expect } from '@playwright/test';

test('Visual Comparision in playwright', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await expect(page).toHaveScreenshot('OrangeHRMLoginPage.png');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

  await expect(page).toHaveScreenshot('OrangeHRMLoginPage.png');


});

test('Element Visual Comparision in playwright', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await expect(page).toHaveScreenshot('OrangeHRMLoginPage.png');

  const element = page.locator('[class="orangehrm-login-slot"]');

  await expect(element).toHaveScreenshot('OrangeHRMLoginPageForm.png');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin1');

  await expect(element).toHaveScreenshot('OrangeHRMLoginPageForm.png');


});