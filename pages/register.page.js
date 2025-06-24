export default class RegisterPage {
    constructor(driver) {
        this.driver = driver
    }

    async open() {
        await this.driver.get("https://www.demoblaze.com")
    }

    async register(username, password){
        await this.driver.findElement({id:"signin2"}).click()
        await this.driver.sleep(1000)
        await this.driver.findElement({id:"sign-username"}).sendKeys(username)
        await this.driver.findElement({id:"sign-password"}).sendKeys(password)
        await this.driver.findElement({ xpath: "//button[text()='Sign up']" }).click();
        await this.driver.sleep(2000)
    }

    async getWelcomeText() {
        const el = await this.driver.findElement({ id: 'nameofuser' });
        return await el.getText();
    }

    async logout() {
        const logoutButton = await this.driver.findElement({ id: 'logout2' });
        await logoutButton.click();
    }
}