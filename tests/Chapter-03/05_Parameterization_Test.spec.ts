import { test, expect } from '@playwright/test';

const usernames = ['Admin','PWTest']
//const password = ['admin123','Superuser@123']

for (const Usernam of usernames) {


  test(`Parametrize tests in playwright ${Usernam}`, async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await expect(page.getByRole('textbox', { name: 'Username' })).toBeEditable();
        await page.getByRole('textbox', { name: 'Username' }).fill(Usernam);

        await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

        await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();
        await page.getByRole('button', { name: 'Login' }).first().click();

        await expect.soft(page).toHaveTitle('OrangeHRM');
        //await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        
        //await expect(page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')).toHaveText('Invalid credentials');

});
  
}

