
 //import playwright module
 import {test, expect} from '@playwright/test'

 test.beforeAll(async() => {
    console.log('Rynning Before all test....');
 });

  test.afterAll(async() => {
    console.log('Rynning After all test....');
 });

  test.beforeEach(async({page}) => {
    console.log('Rynning Before Each test....');
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 });

   test.afterEach(async() => {
    console.log('Rynning After Each test....');
 });

 test('TC1 - Login To OrangeHRM', async({page})=>{
     console.log('TC 1 started');
        //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
        await page.getByRole('button', { name: 'Login' }).first().click();
        await expect (page).toHaveTitle('OrangeHRM');
 });

  test('TC2 - Search Existing Employee - PIM - CodegenTC', async ({ page }) => {
    console.log('TC 2 started');
  //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Employee List' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).first().click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).first().fill('Admin');
  await page.getByRole('button', { name: 'Search' }).click();
  //await expect(page.getByRole('table')).toContainText('Admin');
});