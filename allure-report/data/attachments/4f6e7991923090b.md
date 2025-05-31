# Test info

- Name: RegressionSuite >> Test 4
- Location: F:\PlaywrightWithTypeScript\PlaywrightWithTS-Proj\tests\Chapter-04\04_TestReports_Test.spec.ts:72:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveTitle(expected)

Locator: locator(':root')
Expected string: "OrangeHRM1"
Received string: "OrangeHRM"
Call log:
  - expect.soft.toHaveTitle with timeout 5000ms
  - waiting for locator(':root')
    8 × locator resolved to <html>…</html>
      - unexpected value "OrangeHRM"

    at F:\PlaywrightWithTypeScript\PlaywrightWithTS-Proj\tests\Chapter-04\04_TestReports_Test.spec.ts:85:33
```

# Page snapshot

```yaml
- img "company-branding"
- heading "Login" [level=5]
- alert:
  - text: 
  - paragraph: Invalid credentials
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.7
- paragraph:
  - text: © 2005 - 2025
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test.describe('SmokeSuite',()=>{
   4 |
   5 | test('Test 1', async ({ page }) => {
   6 |
   7 |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   8 |
   9 |         await expect(page.getByRole('textbox', { name: 'Username' })).toBeEditable();
  10 |         await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  11 |
  12 |         await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
  13 |         await page.getByRole('textbox', { name: 'Password' }).fill('admin1234');
  14 |
  15 |         await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();
  16 |         await page.getByRole('button', { name: 'Login' }).first().click();
  17 |
  18 |         //await expect.soft(page).toHaveTitle('OrangeHRM1');
  19 |         //await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  20 |         //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  21 |         
  22 |         await expect(page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')).toHaveText('Invalid credentials');
  23 |
  24 | });
  25 |
  26 | })
  27 |
  28 | test.describe('RegressionSuite',()=>{
  29 |
  30 | test('Test 2', async ({ page }) => {
  31 |
  32 |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  33 |
  34 |         await expect(page.getByRole('textbox', { name: 'Username' })).toBeEditable();
  35 |         await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  36 |
  37 |         await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
  38 |         await page.getByRole('textbox', { name: 'Password' }).fill('admin1234');
  39 |
  40 |         await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();
  41 |         await page.getByRole('button', { name: 'Login' }).first().click();
  42 |
  43 |         //await expect.soft(page).toHaveTitle('OrangeHRM1');
  44 |         //await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  45 |         //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  46 |         
  47 |         await expect(page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')).toHaveText('Invalid credentials');
  48 |
  49 | });
  50 |
  51 | test('Test 3', async ({ page }) => {
  52 |
  53 |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  54 |
  55 |         await expect(page.getByRole('textbox', { name: 'Username' })).toBeEditable();
  56 |         await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  57 |
  58 |         await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
  59 |         await page.getByRole('textbox', { name: 'Password' }).fill('admin1234');
  60 |
  61 |         await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();
  62 |         await page.getByRole('button', { name: 'Login' }).first().click();
  63 |
  64 |         //await expect.soft(page).toHaveTitle('OrangeHRM1');
  65 |         //await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  66 |         //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  67 |         
  68 |         await expect(page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')).toHaveText('Invalid credentials');
  69 |
  70 | });
  71 |
  72 | test('Test 4', async ({ page }) => {
  73 |
  74 |   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  75 |
  76 |         await expect(page.getByRole('textbox', { name: 'Username' })).toBeEditable();
  77 |         await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  78 |
  79 |         await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
  80 |         await page.getByRole('textbox', { name: 'Password' }).fill('admin1234');
  81 |
  82 |         await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();
  83 |         await page.getByRole('button', { name: 'Login' }).first().click();
  84 |
> 85 |         await expect.soft(page).toHaveTitle('OrangeHRM1');
     |                                 ^ Error: Timed out 5000ms waiting for expect(locator).toHaveTitle(expected)
  86 |         //await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  87 |         //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  88 |         
  89 |         //await expect(page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')).toHaveText('Invalid credentials');
  90 |
  91 | });
  92 |     
  93 | })
  94 |
  95 |
  96 |
  97 |
```