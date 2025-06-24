import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import RegisterPage from "../../pages/register.page.js";

let registerPage;

Given('I am on the Demoblaze register page', async function () {
    registerPage = new RegisterPage(this.driver)
    await registerPage.open();
})

When('I register with username {string} and password {string}', async function (username, password) {
    const uniqueUsername = `${username}_${Date.now()}`; // adds timestamp
    await registerPage.register(uniqueUsername, password);
})

Then("I should see a register welcome message {string}", async function (text) {
    const alert = await this.driver.switchTo().alert();
    const alertText = await alert.getText();
    expect(alertText).to.include(text);
    await alert.accept();
});

When("I attempt to register existing username {string} and password {string}", async function (username, password) {
   await registerPage.register(username, password);
})

Then('I should see a register error alert', async function () {
    const alert = await this.driver.switchTo().alert();
    const alertText = await alert.getText();
    expect(alertText).to.include('This user already exist.');
    await alert.accept();
});