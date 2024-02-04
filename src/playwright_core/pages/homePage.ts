import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly burgerMenu: Locator;
  readonly catalogLink: Locator;
  readonly cartButton: Locator;
  readonly accountButton: Locator;
  readonly gardenButton: Locator;
  readonly gardenGoodsButton: Locator;
  readonly plasticGoodsButton: Locator;
  readonly laptopsButton: Locator;
  readonly gamingButton: Locator;
  readonly phonesButton: Locator;
  readonly houseButton: Locator;
  readonly toolsButton: Locator;
  readonly plumbingButton: Locator;
  readonly sportButton: Locator;
  readonly clothesButton: Locator;
  readonly beautyButton: Locator;

  categoryLabel: Locator;

  constructor(page: Page) {
    super(page)
    this.page = page;
    this.searchInput = page.getByPlaceholder('Я шукаю', { exact: false });
    this.burgerMenu = page.getByLabel('Відкрити меню', { exact: false });
    this.catalogLink = page.getByLabel('Каталог', { exact: false });
    this.cartButton = page.locator('rz-cart').getByRole('button', { exact: false });
    this.accountButton = page.locator('rz-user').getByRole('button', { exact: false });
    this.gardenButton = page.locator('Дача, сад і город').getByRole('link', { exact: false });
    this.gardenGoodsButton = page.locator('Садовий інвентар').getByRole('link', { exact: false });
    this.plasticGoodsButton = page.locator('Пластикові ємності').getByRole('link', { exact: false });
    this.laptopsButton = page.locator('Ноутбуки та комп’ютери').getByRole('link', { exact: false });
    this.gamingButton = page.locator('Товари для геймерів').getByRole('link', { exact: false });
    this.phonesButton = page.locator('Смартфони, ТВ і електроніка').getByRole('link', { exact: false });
    this.houseButton = page.locator('Товари для дому').getByRole('link', { exact: false });
    this.toolsButton = page.locator('Інструменти та автотовари').getByRole('link', { exact: false });
    this.plumbingButton = page.locator('Сантехніка та ремонт').getByRole('link', { exact: false });
    this.sportButton = page.locator('Спорт і захоплення').getByRole('link', { exact: false });
    this.beautyButton = page.locator('Одяг, взуття та прикраси').getByRole('link', { exact: false });
  }

  async navigate() {
    await this.page.goto('https://rozetka.com.ua/ua/');
  }
  async categoryLabelToBe(text: string) {
    if (!this.categoryLabel) {
        throw new Error('Category label locator is not initialized');
    }

    await this.categoryLabel.waitFor({ state: 'attached' });

    const labelContent = await this.categoryLabel.textContent();

    expect(labelContent).toBe(text);
}
  async typeInSearchInput(text: string) {
    await this.page.fill('input[placeholder="Я шукаю"]', text);
  }
}
