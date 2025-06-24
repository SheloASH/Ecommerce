import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import LoginPage from '../../pages/login.page.js'

let loginPage;

Given('I am on the Demoblaze login page', async function () {
    loginPage = new LoginPage(this.driver)
    await loginPage.open();
})

When('I login using username {string} and password {string}', async function (username, password) {
    await loginPage.login(username, password);
})

Then('I should see a login welcome message {string}', async function (text) {
  const welcomeText = await loginPage.getWelcomeText();
  expect(welcomeText).to.include(text);
});

Given('I am logged in through the login form', async function () {
    loginPage = new LoginPage(this.driver);
    await loginPage.open();
    await loginPage.login("test", "test");
    const welcomeText = await loginPage.getWelcomeText();
    expect(welcomeText).to.include('Welcome');
});

When('I trigger the logout from login', async function () {
    await loginPage.logout();
});

Then('I should not see the welcome message on login', async function () {
    const welcomeText = await loginPage.getWelcomeText();
    expect(welcomeText).to.equal('');
});

When('I attempt login with invalid username {string} and password {string}', async function (username, password) {
   await loginPage.login(username, password);
})

Then('I should see a login error alert', async function () {
    const alert = await this.driver.switchTo().alert();
    const alertText = await alert.getText();
    expect(alertText).to.include('Wrong password.');
    await alert.accept();
});