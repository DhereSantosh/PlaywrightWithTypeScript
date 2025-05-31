//import { test, expect } from '@playwright/test';

import {test} from '../../src/fixture/TestFixture'
import { LoginPage } from '../../src/Pages/LoginPage';
import { HomePage } from '../../src/Pages/HomePage';

test('Implementing Fixture in PLaywright', async ({ page }) => {

    console.log('Test execution is started.');

    // Create Object of Login Page
    const loginPage = new LoginPage(page);
    await loginPage.goToURL();
    await loginPage.enterUsername(`${process.env.UName}`);
    await loginPage.enterPassword(`${process.env.Password}`);
    await loginPage.clickLoginBtn();


    // Create Object of Home Page
    const homePage = new HomePage(page);
    await homePage.checkDashboardText();
    await homePage.validatePageTitle(`${process.env.ExpPageTitle}`);

    console.log('Test execution is ended.');
});