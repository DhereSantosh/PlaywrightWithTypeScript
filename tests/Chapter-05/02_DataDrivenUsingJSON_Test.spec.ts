import { test, expect } from '@playwright/test';
import testData from '../../test-data/dev/qa/test-data.json';

type TestData = {
    TestDataSet1:{
        Skill1:string,
        Skill2:string
    },
    TestDataSet2:{
        Skill1:string,
        Skill2:string
    }
}
const typedTestData = testData as TestData

for (const dataSetName in typedTestData) {

        const skill = typedTestData[dataSetName as keyof TestData];

        test(`Data Driven Test Using JSON in playwright : ${skill.Skill1}`, async ({ page }) => {

        await page.goto(`${process.env.ORANGEHRM_URL}`);

        
        await page.getByRole('textbox', { name: 'Username' }).fill(skill.Skill1);
        await page.getByRole('textbox', { name: 'Password' }).fill(skill.Skill2);
        await page.getByRole('button', { name: 'Login' }).first().click();

        //await expect.soft(page).toHaveTitle('OrangeHRM');
        
        //await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

        //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        
        await expect(page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')).toHaveText('Invalid credentials');

});
    
}


