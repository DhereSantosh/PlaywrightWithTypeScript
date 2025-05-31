import { test, expect } from '@playwright/test';

test('Handling dropdownlist in playwright', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Superuser');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Superuser@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'My Info' }).click();
  await page.locator('form').filter({ hasText: 'Employee Full' }).locator('i').nth(1).click();
  await page.getByRole('option', { name: 'Afghan' }).click();
  await page.locator('form').filter({ hasText: 'Employee Full' }).locator('i').nth(2).click();
  await page.getByRole('option', { name: 'Married' }).click();
  await page.locator('label').filter({ hasText: 'Female' }).locator('span').click();
  await page.locator('form').filter({ hasText: 'Blood Type-- Select --' }).locator('i').click();
  await page.getByRole('option', { name: 'B+', exact: true }).click();
  await page.locator('form').filter({ hasText: 'Blood TypeB+Test_Field Save' }).getByRole('button').click();
  await page.locator('form').filter({ hasText: 'Employee Full' }).getByRole('button').click();

  await expect(page.getByRole('option', { name: 'Afghan' })).toHaveText('Afghan');

});