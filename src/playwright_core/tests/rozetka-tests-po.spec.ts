import { test } from '@playwright/test';
import {RozetkaPage} from '../pages/rozetkaPage';

test.describe('Rozetka Tests', () => {
    let rozetkaPage: any;

    test.beforeEach(async ({ page }) => {
        rozetkaPage = new RozetkaPage(page);
        await rozetkaPage.goToHomePage();
    });

    test('Check search input visibility', async () => {
        await rozetkaPage.searchInputIsVisible();
    });

    test('Check burger menu visibility', async () => {
        await rozetkaPage.burgerMenuIsVisible();
    });

    test('Check catalog visibility', async () => {
        await rozetkaPage.catalogIsVisible();
    });

    test('Check cart button visibility', async () => {
        await rozetkaPage.cartButtonIsVisible();
    });

    test('Check account button visibility', async () => {
        await rozetkaPage.accountButtonIsVisible();
    });
});
