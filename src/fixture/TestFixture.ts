import { test as base } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';

import { loadTestData } from '../utils/JsonHelper';
import { TestData } from '../Interface/Module1TestData.interface';

export const test = base.extend<{ 
	
	saveLogs: void;
	loginPage: LoginPage;
	homePage: HomePage;
	testData: TestData;

}>({
	saveLogs: [async ({},use) => {
		console.log('Global before is running...');
		
		await use();
		
		console.log('Global afterEach is running...');
	},
	{ auto: true}],
	loginPage: async({ page }, use) => {
		const loginPage = new LoginPage(page);
		await use(loginPage);
	},
	homePage: async({ page }, use) => {
		const homePage = new HomePage(page);
		await use(homePage);
	},
	testData: async ({},use) => {
		const data = await loadTestData();
		await use(data);
	}
});

export {expect} from '@playwright/test';