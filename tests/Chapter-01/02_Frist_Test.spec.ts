 //import playwright module
 import {test, expect} from '@playwright/test'

 //Write test
 test('Login To OrangeHRM', async({page})=>{

        //goto URL
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
        await page.getByRole('button', { name: 'Login' }).first().click();
        await expect (page).toHaveTitle('OrangeHRM');

 });