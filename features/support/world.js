import { setWorldConstructor } from "@cucumber/cucumber";
import { createDriver } from "./driver.js";

class CustomWorld {
    async init() {
        this.driver = await createDriver()
    }
}

setWorldConstructor(CustomWorld)