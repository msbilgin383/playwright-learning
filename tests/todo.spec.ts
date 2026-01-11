import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage'; // Sayfayı içeri aktar

test('POM ile Todo testi', async ({ page }) => {
  const todoPage = new TodoPage(page); // Nesne oluştur

  // Adımlar artık çok daha anlaşılır:
  await todoPage.goto();
  await todoPage.addTodo('Playwright Öğren');
  await todoPage.addTodo('TypeScript Pratiği Yap');

  await todoPage.completeTodo('Playwright Öğren');

  // Assertions (Doğrulamalar) hala test dosyasında kalmalı
  await expect(todoPage.todoItems).toHaveCount(2);
});