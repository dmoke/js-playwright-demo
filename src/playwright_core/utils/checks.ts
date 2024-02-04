// checks.ts
import { Locator, expect } from '@playwright/test';

export class PageChecks {
    static async isVisible(element: Locator) {
        await expect(element).toBeVisible();
    }
    static async isChecked(element: Locator) {
        await expect(element).toBeChecked();
    }
    static async isFocused(element: Locator) {
        await expect(element).toBeFocused();
    }
}
