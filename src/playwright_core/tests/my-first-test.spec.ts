import { test, expect } from '@playwright/test';

test('check rozetka search', async ({ page }) => {
    await page.goto('https://rozetka.com.ua/ua/');
    await expect(page.getByPlaceholder('Я шукаю', { exact: false })).toBeVisible();
})

test('check rozetka burger menu', async ({ page }) => {
    await page.goto('https://rozetka.com.ua/ua/');
    await expect(page.getByLabel('Відкрити меню', { exact: true })).toBeVisible();
})
test('check rozetka catalog', async ({ page }) => {
    await page.goto('https://rozetka.com.ua/ua/');
    await expect(page.getByLabel('Каталог', { exact: true })).toBeVisible();
})
test('check rozetka cart button', async ({ page }) => {
    await page.goto('https://rozetka.com.ua/ua/');
    await expect(page.locator('rz-cart').getByRole('button', { exact: true })).toBeVisible();
})
test('check rozetka account button', async ({ page }) => {
    await page.goto('https://rozetka.com.ua/ua/');
    await expect(page.locator('rz-user').getByRole('button', { exact: true })).toBeVisible();
})