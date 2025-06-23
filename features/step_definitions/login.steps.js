import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import LoginPage from '../../pages/login.page.js'

let loginPage;

Given('I am on the Demoblaze homepage', async function () {
    loginPage = new LoginPage(this.driver)
    await loginPage.open();
})

When('I login with username {string} and password {string}', async function (username, password) {
    await loginPage.login(username, password);
})

Then('I should see {string}', async function (text) {
  const welcomeText = await loginPage.getWelcomeText();
  expect(welcomeText).to.include(text);
});

When('I click the logout button', async function () {
    await loginPage.logout();
});

Then('I should not see the welcome message', async function () {
    const welcomeText = await loginPage.getWelcomeText();
    expect(welcomeText).to.equal('');
});

When('I enter wrong password', async function (username, password) {
   await loginPage.login(username, password);
})

Then('I should see a login error alert', async function () {
    const alert = await this.driver.switchTo().alert();
    const alertText = await alert.getText();
    expect(alertText).to.include('Wrong password.');
    await alert.accept();
});