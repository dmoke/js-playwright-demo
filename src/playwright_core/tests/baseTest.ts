import { BrowserContext } from '@playwright/test';

class BaseTest {
    context?: BrowserContext;
    constructor(context: BrowserContext) {
        this.context = context
    }
}
