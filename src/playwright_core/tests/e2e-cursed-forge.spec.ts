import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { PageChecks} from '../utils/checks'

test.describe('Cursed Forge Home Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    });

    test('browse category', async () => {
        await expect(homePage.browseButton).toBeVisible();
    });
});