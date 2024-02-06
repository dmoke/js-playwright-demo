import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
  readonly page: Page;
  readonly browseButton: Locator;

  categoryLabel: Locator;

  constructor(page: Page) {
    super(page)
    this.page = page;
    this.browseButton = page.getByRole('link', {name: 'Browse'});
  }

  async navigate() {
    await this.page.goto('https://www.curseforge.com/');
  }

}
