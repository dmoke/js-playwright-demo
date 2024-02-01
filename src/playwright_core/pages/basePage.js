import { expect, Locator } from '@playwright/test';

export default class BasePage {
    constructor(page) {
        this.page = page;
    }

    async goTo(url) {
        await this.page.goto(url);
    }

    async assertElementVisible(selector, options) {
        const element = await this.page.locator(selector);
        await expect(element).toBeVisible(options);
    }
}
