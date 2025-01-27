import { Locator,Page } from '@playwright/test';

export class LoginPage {
  page: Page;
  usernameInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;
  invalidCredentialsMessage: Locator;
  missingCredentialsMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[placeholder="Username"]');/*tato lokalizacia funguje*/
    this.passwordInput = page.locator('[placeholder="Password"]');/*tato lokalizacia funguje*/
    this.loginButton = page.locator('button:has-text("Login")');/*tato lokalizacia funguje*/
    this.invalidCredentialsMessage = page.getByText('Invalid credentials');
    this.missingCredentialsMessage = page.getByText('Required');

    
  }
  async gotoLoginPage(){
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  }
  


  async enterValidUsername(){
    await this.usernameInput.fill("Admin");
  }
  async enterInvalidUsername(){
    await this.usernameInput.fill("x")
  }



  async enterValidPassword(){
    await this.passwordInput.fill("admin123");
  }
  async enterInvalidPassword(){
    await this.passwordInput.fill("x")
  }



  async clickLoginButton(){
    await this.loginButton.click();
  }



  async login(){
    await this.usernameInput.fill("admin");
    await this.passwordInput.fill("admin123");
    await this.loginButton.click();
    
  }
  async loginBadCredentials(){
    await this.usernameInput.fill("x")
    await this.passwordInput.fill("x")
    await this.loginButton.click();
  }
  
 
  
}
