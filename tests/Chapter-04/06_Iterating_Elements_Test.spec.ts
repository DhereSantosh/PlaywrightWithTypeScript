import { test, expect } from '@playwright/test';

test('Iterating matching elements in playwright', async ({ page }) => {

        await page.goto('https://github.com/DhereSantosh');

        const repositoryLinks = await page.$$('.repo');
        // for (const repositoryLink of repositoryLinks) {
        //         const text = await repositoryLink.textContent();
        //         const finalText = text?.trim();
        //         console.log(`Repo name: ${finalText}`);
        // }
        // for (let index = 0; index < repositoryLinks.length; index++) {
        //     const repoName = await repositoryLinks[index].textContent();
        //     const finalrepoName = repoName?.trim();
        //     console.log(`Repo name: ${finalrepoName}`);   
        // }

        const repositoryLinks1 = await page.locator('.repo');
        const count = await repositoryLinks1.count();
        
        for (let index = 0; index < count; index++) {
            const reponame=await repositoryLinks1.nth(index).textContent();
            const finalrepoName = reponame?.trim();
            console.log(`Repo name: ${finalrepoName}`);
        }


});