import { Locator, Page } from "@playwright/test"

export class LoginPage{

    readonly page : Page;
    readonly userName : Locator;
    readonly password : Locator;
    readonly loginBtn : Locator;

    constructor(page : Page){
        this.page=page;

        //Elements
        this.userName = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.getByRole('button', { name: 'Login' });
       
    }

        //Methods

        async goToURL() {
            //await this.page.goto(`${process.env.ORANGEHRM_URL}`)
            if(process.env.Test_Execution_Env == 'qa'){
                await this.page.goto(`${process.env.ORANGEHRM_URL}`);
                console.log()
                console.log(`Test are running in ${process.env.Test_Execution_Env} env.`);
            } else if (process.env.Test_Execution_Env == 'dev'){
                await this.page.goto(`${process.env.ORANGEHRM_URL}`);
                console.log(`Test are running in ${process.env.Test_Execution_Env} env.`);
            }
        }
        async enterUsername(keyword:string){
            await this.userName.clear();
            await this.userName.fill(keyword);
        }
        async enterPassword(keyword:string){
            await this.password.clear();
            await this.password.fill(keyword);
        }
        async clickLoginBtn(){
            await this.loginBtn.click();
        }
        

}