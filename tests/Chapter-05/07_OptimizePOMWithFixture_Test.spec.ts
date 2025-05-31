import {test} from "../../src/fixture/TestFixture";

test('Page Object Model Test in PLaywright', async ({ page,loginPage,homePage    }) => {

    // Create Object of Login Page
    await loginPage.goToURL();
    await loginPage.enterUsername(`${process.env.UName}`);
    await loginPage.enterPassword(`${process.env.Password}`);
    await loginPage.clickLoginBtn();


    // Create Object of Home Page
    await homePage.checkDashboardText();
    await homePage.validatePageTitle(`${process.env.ExpPageTitle}`);
});