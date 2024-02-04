// basePage.ts
import { Page, Locator } from '@playwright/test';

export class BasePage {
    page?: Page;
    constructor(page: Page) {
        this.page = page
    }

    async initializePage(page: Page) {
        this.page = page;
    }
    async navigateBack() {
        if (this.page) {
            await this.page.goBack();
        } else {
            console.error('Page is not initialized. Cannot navigate back.');
        }
    }
}
