import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('Rozetka Home Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    });

    test('Laptops story', async () => {
        await homePage.phonesButton.click();
        await homePage.navigateBack();
        await homePage.sportButton.click();
        await homePage.navigateBack();
        await homePage.laptopsButton.click();
        await homePage.categoryLabelToBe("Комп'ютери та ноутбуки")
    });

    test('Gaming story', async () => {
        await homePage.laptopsButton.click();
        await homePage.navigateBack();
        await homePage.sportButton.click();
        await homePage.navigateBack();
        await homePage.gamingButton.click();
        await homePage.categoryLabelToBe("Товари для геймерів")
    });

    test('Phones story', async () => {
        await homePage.gardenButton.click();
        await homePage.navigateBack();
        await homePage.houseButton.click();
        await homePage.navigateBack();
        await homePage.phonesButton.click();
        await homePage.categoryLabelToBe("Смартфони, ТВ і Електроніка")
    });

    test('House goods story', async () => {
        await homePage.laptopsButton.click();
        await homePage.navigateBack();
        await homePage.sportButton.click();
        await homePage.navigateBack();
        await homePage.houseButton.click();
        await homePage.categoryLabelToBe("Товари для дому")
    });

    test('Tools story', async () => {
        await homePage.laptopsButton.click();
        await homePage.navigateBack();
        await homePage.sportButton.click();
        await homePage.navigateBack();
        await homePage.gamingButton.click();
        await homePage.categoryLabelToBe("Інструменти та автотовари")
    });

    test('Plumbing story story', async () => {
        await homePage.laptopsButton.click();
        await homePage.navigateBack();
        await homePage.sportButton.click();
        await homePage.navigateBack();
        await homePage.gamingButton.click();
        await homePage.categoryLabelToBe("Сантехніка та ремонт")
    });

    test('Garden story', async () => {

        await homePage.laptopsButton.click();
        await homePage.navigateBack();
        await homePage.sportButton.click();
        await homePage.navigateBack();
        await homePage.gamingButton.click();
        await homePage.categoryLabelToBe("Дача, сад, город")
    });

    test('Sport story', async () => {
        await homePage.laptopsButton.click();
        await homePage.navigateBack();
        await homePage.sportButton.click();
        await homePage.navigateBack();
        await homePage.gamingButton.click();
        await homePage.categoryLabelToBe("Спорт і захоплення")
    });

    test('Clothes story', async () => {
        await homePage.laptopsButton.click();
        await homePage.navigateBack();
        await homePage.sportButton.click();
        await homePage.navigateBack();
        await homePage.gamingButton.click();
        await homePage.categoryLabelToBe("Fashion")
    });

    test('Beauty story', async () => {
        await homePage.laptopsButton.click();
        await homePage.navigateBack();
        await homePage.sportButton.click();
        await homePage.navigateBack();
        await homePage.gamingButton.click();
        await homePage.categoryLabelToBe("Краса та здоров'я")
    });

    test('Child goods story', async () => {
        await homePage.laptopsButton.click();
        await homePage.navigateBack();
        await homePage.sportButton.click();
        await homePage.navigateBack();
        await homePage.gamingButton.click();
        await homePage.categoryLabelToBe("Товари для дітей")
    });
});
