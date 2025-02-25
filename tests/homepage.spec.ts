import { test, expect } from '@playwright/test';
import { LoginPage } from './loginpage';
import HomePage from './homepage';
import { exitCode } from 'process';
import exp from 'constants';

test('Successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homepage = new HomePage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await homepage.verifyAdminEmployeeNameIsVisible();
});

test('Dashboard checker', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homepage = new HomePage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await homepage.adminCheck();
    await homepage.pimCheck();
    await homepage.leaveCheck();
    await homepage.timeCheck();
    await homepage.recruitmentCheck();
    await homepage.myInfoCheck();
    await homepage.performanceCheck();
    await homepage.dashboardCheck();
    await homepage.directoryCheck();
    await homepage.claimCheck();
    await homepage.buzzCheck();
});


test.fixme('Searchbar', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homepage = new HomePage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await homepage.clickOnSearchBar();
    await homepage.searchBar.fill("Admin");
    await expect(homepage.adminIcon).toBeVisible();
    await homepage.searchBar.clear();
    await homepage.searchBar.fill("PIM");
    await expect(homepage.pimIcon).toBeVisible();
    await homepage.searchBar.clear();

    await homepage.searchBar.fill("Leave");
    
    await homepage.searchBar.clear();
    
    await homepage.searchBar.fill("Time"); 
    
    await homepage.searchBar.clear();
    await homepage.searchBar.fill("Recruitment");
    await expect(homepage.recruitmentIcon).toBeVisible();
    await homepage.searchBar.clear();
    await homepage.searchBar.fill("My info");
    await expect(homepage.myInfoIcon).toBeVisible();
    await homepage.searchBar.clear();
    await homepage.searchBar.fill("Performance");
    await expect(homepage.performanceIcon).toBeVisible();

    await homepage.searchBar.clear();
    await homepage.searchBar.fill("Dashboard");
    
    await homepage.searchBar.clear();
    await homepage.searchBar.fill("Directory");
    await expect(homepage.directoryIcon).toBeVisible();
    await homepage.searchBar.clear();
    await homepage.searchBar.fill("Claim");
    await expect(homepage.claimIcon).toBeVisible();
    await homepage.searchBar.clear();
    await homepage.searchBar.fill("Buzz");
    await expect(homepage.buzzIcon).toBeVisible();
});

test('Adding admin', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homepage = new HomePage(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('admin');
    await page.getByPlaceholder('Username').press('Tab');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.locator('.oxd-select-text').first().click();
    await page.getByRole('option', { name: 'Admin' }).click();
    await page.getByText('-- Select --').click();
    await page.getByRole('option', { name: 'Enabled' }).click();
    await page.getByPlaceholder('Type for hints...').click();
    await page.getByPlaceholder('Type for hints...').fill('a');
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('slniecko');
    await page.getByRole('textbox').nth(3).click();
    await page.getByRole('textbox').nth(3).fill('branislav123');
    await page.getByRole('textbox').nth(4).click();
    await page.getByRole('textbox').nth(4).fill('branislav123');
    await page.getByRole('button', { name: 'Save' }).click();
    

});
test('Editing admin', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homepage = new HomePage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await homepage.adminCheck();
    await homepage.pimCheck();
    await homepage.leaveCheck();
    await homepage.timeCheck();
    await homepage.recruitmentCheck();
    await homepage.myInfoCheck();
    await homepage.performanceCheck();
    await homepage.dashboardCheck();
    await homepage.directoryCheck();
    await homepage.claimCheck();
    await homepage.buzzCheck();
});



    
    
