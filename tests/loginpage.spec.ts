import { test, expect } from '@playwright/test';
import { LoginPage } from './loginpage';
import { getCookies } from 'undici-types';



test('Login test', async ({ page }) => {
  const loginPage = new LoginPage(page);/*tento test funguje*/
  await loginPage.gotoLoginPage();
  await loginPage.login();
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
});

test('Login test bad credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);/*tento test funguje*/
  await loginPage.gotoLoginPage();
  await loginPage.loginBadCredentials();
  await expect(loginPage.invalidCredentialsMessage).toBeVisible();
});

test('Cannot login with valid username invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);/*tento test funguje*/
  await loginPage.gotoLoginPage();
  await loginPage.enterValidUsername();
  await loginPage.enterInvalidPassword();
  await loginPage.clickLoginButton();
  await expect(loginPage.invalidCredentialsMessage).toBeVisible();
});

test('Cannot login with invalid username valid password', async ({ page }) => {
  const loginPage = new LoginPage(page);/*tento test funguje*/
  await loginPage.gotoLoginPage();
  await loginPage.enterInvalidUsername();
  await loginPage.enterValidPassword();
  await loginPage.clickLoginButton();
  await expect(loginPage.invalidCredentialsMessage).toBeVisible();
});

test('Cannot login without username and password', async ({ page }) => {
  const loginPage = new LoginPage(page); // Tento test funguje
  await loginPage.gotoLoginPage();
  await loginPage.clickLoginButton();
  const errorMessages = page.locator('span.oxd-input-field-error-message:has-text("Required")');
  await expect(errorMessages).toHaveCount(2);
  for (let i = 0; i < await errorMessages.count(); i++) {
    await expect(errorMessages.nth(i)).toBeVisible();
  }
});


