import { test, expect } from '@playwright/test'
import { loginData } from './login_data'

test.describe('Login Tests', () => {
    loginData.forEach(data => {
        test.skip(`@skip Login test for ${data.email}`, async ({ page }) => {
            await page.goto('https://lms.ithillel.ua/');
            await page.fill('input[name="email"]', data.email);
            await page.fill('input[name="password"]', data.pass);
            await Promise.all([
                page.waitForNavigation(),
                page.click('text=Увійти')
            ]);
            const validationMessage = await page.textContent(data.locator);
            expect(validationMessage).toContain(data.result);
        });
    });
});
