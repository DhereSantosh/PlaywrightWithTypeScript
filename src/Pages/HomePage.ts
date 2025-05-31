import { expect, Locator, Page } from "@playwright/test"

export class HomePage{

    readonly page : Page;
    readonly dashBoard : Locator;

    constructor(page : Page){
        this.page=page;

        //Elements
        this.dashBoard = page.getByRole('heading', { name: 'Dashboard' });       
    }

        //Methods
        async checkDashboardText(){
            await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        } 
        async validatePageTitle(keyword:string){
            await expect(this.page).toHaveTitle(keyword);
        }      
}