import { expect, Locator, Page } from "@playwright/test";
import { LoginPage } from "./loginpage";
import exp from "constants";
import { addAbortListener } from "events";

export default class HomePage {
    private page: Page;
    adminEmployeeName: Locator;
    adminIcon: Locator;
    adminChecker: Locator;
    pimIcon: Locator;
    pimChecker: Locator;    
    leaveIcon: Locator;
    leaveChecker: Locator;
    timeIcon:Locator;
    timeChecker: Locator;
    recruitmentIcon: Locator;
    recruitmentChecker: Locator;
    myInfoIcon: Locator;
    myInfoChecker: Locator;
    performanceIcon: Locator;
    performanceChecker: Locator;
    dashboardIcon: Locator;
    dashboardChecker: Locator;
    directoryIcon: Locator;
    directoryChecker: Locator;
    claimIcon: Locator;
    claimChecker: Locator;
    buzzIcon: Locator;
    buzzChecker: Locator;
    searchBar: Locator;
    addButton: Locator;
    userRoleSelect: Locator;    


    constructor(page: Page) {
        this.page = page;
        this.adminEmployeeName = page.getByText("User12345"); // Prvok, ktorý overíme
        this.adminIcon = page.getByText("Admin");
        this.adminChecker = page.getByText("System Users");
        this.pimIcon = page.getByText("PIM");
        this.pimChecker = page.getByText("Employee Information");
        this.leaveIcon = page.getByText("Leave");
        this.leaveChecker = page.getByText("Leave List");
        this.timeIcon = page.getByText("Time");
        this.timeChecker = page.getByText("Select Employee");
        this.recruitmentIcon = page.getByText("Recruitment");
        this.recruitmentChecker = page.getByText("Candidates");
        this.myInfoIcon = page.getByText("My Info");
        this.myInfoChecker = page.getByText("Francisco Farias");
        this.performanceIcon = page.getByText("Performance");
        this.performanceChecker = page.getByText("Employee Reviews");
        this.dashboardIcon = page.getByText("Dashboard");
        this.dashboardChecker = page.getByText("Time at Work");
        this.directoryIcon = page.getByText("Directory");
        this.directoryChecker = page.getByText("Directory");
        this.claimIcon = page.getByText("Claim");
        this.claimChecker = page.getByText("Employee Claims");
        this.buzzIcon = page.getByRole('link', { name: 'Buzz' });
        this.buzzChecker = page.getByText("Buzz Newsfeed");
        this.searchBar = page.getByPlaceholder('Search');
        this.addButton = page.getByRole('button', { name: ' Add' });
        this.userRoleSelect = page.locator('form i').first();
    }
    


    
    async gotoHomePage() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    }

    async verifyAdminEmployeeNameIsVisible() {
        await this.adminEmployeeName.isVisible();
    }

    async adminCheck(){
        await this.adminIcon.click();
        await this.adminChecker.isVisible();
    }

    async pimCheck(){
        await this.pimIcon.click();
        await this.pimChecker.isVisible();
    }

    async leaveCheck(){
        await this.leaveIcon.click();
        await this.leaveChecker.isVisible();
    }
    async timeCheck(){
        await this.timeIcon.click();
        await this.timeChecker.isVisible();
    }
    async recruitmentCheck(){
        await this.recruitmentIcon.click();
        await this.recruitmentChecker.isVisible();
    }
    async myInfoCheck(){
        await this.myInfoIcon.click();
        await this.myInfoChecker.isVisible();
    }
    async performanceCheck(){
        await this.performanceIcon.click();
        await this.performanceChecker.isVisible();
    }
    async dashboardCheck(){
        await this.dashboardIcon.click();
        await this.dashboardChecker.isVisible();
    }
    async directoryCheck(){
        await this.directoryIcon.click();
        await this.directoryChecker.isVisible();
    }
   
    async claimCheck(){
        await this.claimIcon.click();
        await this.claimChecker.isVisible();
    }
    async buzzCheck(){
        await this.buzzIcon.click();
        await this.buzzChecker.isVisible();
    }
    async clickOnSearchBar(){
        await this.searchBar.click();
    }
    
}
