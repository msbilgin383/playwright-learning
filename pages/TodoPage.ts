import { Locator, Page, expect } from '@playwright/test';

export class TodoPage {
  // 1. Değişkenleri ve tiplerini tanımlıyoruz
  readonly page: Page;
  readonly todoInput: Locator;
  readonly todoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    // 2. Locator'ları merkezi bir yerde topluyoruz
    this.todoInput = page.getByPlaceholder('What needs to be done?');
    this.todoItems = page.getByTestId('todo-item');
  }

  // 3. Sayfa üzerindeki eylemleri (Actions) metotlaştırıyoruz
  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc');
  }

  async addTodo(text: string) {
    await this.todoInput.fill(text);
    await this.todoInput.press('Enter');
  }

  async completeTodo(text: string) {
    await this.todoItems
      .filter({ hasText: text })
      .getByRole('checkbox')
      .check();
  }
}