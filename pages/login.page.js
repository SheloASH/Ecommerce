export default class LoginPage {
    constructor(driver){
        this.driver = driver
    }

    async open(){
        await this.driver.get('https://www.demoblaze.com')
    }

    async login(username, password) {
        await this.driver.findElement({id:'login2'}).click()
        await this.driver.sleep(1000)
        await this.driver.findElement({id: 'loginusername'}).sendKeys(username)
        await this.driver.findElement({id: 'loginpassword'}).sendKeys(password)
        await this.driver.findElement({ xpath: "//button[text()='Log in']" }).click();
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

