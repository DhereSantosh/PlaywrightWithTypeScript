import {test, expect} from '@playwright/test'

 //Write test
 test('Locators in Playwright', async({page})=>{

        //goto URL
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //await page.getByRole('link',{name:'OrangeHRM, Inc'}).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
        await page.getByRole('button', { name: 'Login' }).first().click();
        //await page.getByLabel('Sidepanel',{exact:true}).first().click();
        //await page.getByAltText("client brand banner").click();
        //await page.getByText("Admin").click();
        //await page.getByPlaceholder('Search').fill('Time');
        //await page.locator('//input[@class="oxd-input oxd-input--active"]').fill('PIM');
        //await page.locator('input[class="oxd-input oxd-input--active"]').fill('PIM');
        await page.getByTitle('Help').click();

 });
