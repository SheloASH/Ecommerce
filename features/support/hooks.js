import { Before, After } from '@cucumber/cucumber';
import { createDriver } from './driver.js';

Before(async function () {
  this.driver = await createDriver();
});

After(async function () {
  if (this.driver) {
    await this.driver.quit();
  }
});