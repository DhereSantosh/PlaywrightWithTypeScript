import { test, expect } from '@playwright/test';

import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

type TestRecords = {
    Username:string,
    Password:string
}
const records = parse(
    fs.readFileSync(path.join(__dirname,'../../test-data/dev/qa/testData.csv')),
    {
        columns : true,
        skip_empty_lines : true
    }
) as TestRecords[];

for (const record of records) {

    test(`Data Driven Test Using CSV in playwright : ${record.Username}`, async ({ page }) => {

        await page.goto(`${process.env.ORANGEHRM_URL}`);

        
        await page.getByRole('textbox', { name: 'Username' }).fill(record.Username);
        await page.getByRole('textbox', { name: 'Password' }).fill(record.Password);
        await page.getByRole('button', { name: 'Login' }).first().click();

        //await expect.soft(page).toHaveTitle('OrangeHRM');
        
        //await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

        //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        
        await expect(page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')).toHaveText('Invalid credentials');
    });
    
}


