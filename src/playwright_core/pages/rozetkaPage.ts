import { Locator, Page, expect } from '@playwright/test';

export class RozetkaPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly burgerMenu: Locator;
  readonly catalogLink: Locator;
  readonly cartButton: Locator;
  readonly accountButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder('Я шукаю', { exact: false });
    this.burgerMenu = page.getByLabel('Відкрити меню', { exact: true });
    this.catalogLink = page.getByLabel('Каталог', { exact: true });
    this.cartButton = page.locator('rz-cart').getByRole('button', { exact: true });
    this.accountButton = page.locator('rz-user').getByRole('button', { exact: true });
  }

  async goToHomePage() {
    await this.page.goto('https://rozetka.com.ua/ua/');
  }

  async searchInputIsVisible() {
    await expect(this.searchInput).toBeVisible();
  }

  async burgerMenuIsVisible() {
    await expect(this.burgerMenu).toBeVisible();
  }

  async catalogIsVisible() {
    await expect(this.catalogLink).toBeVisible();
  }

  async cartButtonIsVisible() {
    await expect(this.cartButton).toBeVisible();
  }

  async accountButtonIsVisible() {
    await expect(this.accountButton).toBeVisible();
  }
}
