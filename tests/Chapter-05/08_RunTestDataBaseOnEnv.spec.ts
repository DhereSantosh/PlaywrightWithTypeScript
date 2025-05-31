import {test} from "../../src/fixture/TestFixture";

test('Page Object Model Test in PLaywright', async ({ page,loginPage,homePage,testData}) => {

    // Create Object of Login Page
    await loginPage.goToURL();
    await loginPage.enterUsername(String(testData.Module1TestData?.Uname));
    await loginPage.enterPassword(String(testData.Module1TestData?.Pwd));
    await loginPage.clickLoginBtn();


    // Create Object of Home Page
    await homePage.checkDashboardText();
    await homePage.validatePageTitle(`${process.env.ExpPageTitle}`);
});