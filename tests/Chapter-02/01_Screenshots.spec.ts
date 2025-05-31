

 //import playwright module
 import {test, expect} from '@playwright/test'

 //Write test
 test('Login To OrangeHRM', async({page})=>{

        //goto URL
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.locator('.orangehrm-login-container').screenshot({path:'./screenshots/ElementSS.png'});
        await page.screenshot({path:'./screenshots/PageSS.png'});
         await page.screenshot({path:'./screenshots/FullpageSS.png',fullPage:true});
        // await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
        // await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
        // await page.getByRole('button', { name: 'Login' }).first().click();
        // await expect (page).toHaveTitle('OrangeHRM');
        // await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        // await expect(page.locator('#app')).toContainText('Time at Work');

 });