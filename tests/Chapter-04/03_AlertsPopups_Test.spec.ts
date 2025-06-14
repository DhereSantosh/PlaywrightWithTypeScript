import { test, expect } from '@playwright/test';

test('Alerts Popups in playwright', async ({ page, browser }) => {

        await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
        
        page.once('dialog', dialog =>{
        dialog.accept();
        console.log(`Alert message is : ${dialog.message()}`);
        console.log(`Dialog type is : ${dialog.type()}`);
    })
    await page.getByText('See an example alert', {exact : true}).click();
});

test('Handling Popups in Playwright ', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog =>{
        console.log(`Dialog type is : ${dialog.type()}`);
        //dialog.accept();
        dialog.dismiss();
        console.log(`Popup message is : ${dialog.message()}`);
    })
    await page.getByText('See a sample confirm', {exact : true}).click();
});

test('Handling Prompt Popups in Playwright ', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', async(dialog) =>{
        console.log(`Dialog type is : ${dialog.type()}`);
        console.log(`Prompt popup message is : ${dialog.message()}`);
        await dialog.accept('playwright');
    })
    await page.getByText('See a sample prompt', {exact : true}).click();
});