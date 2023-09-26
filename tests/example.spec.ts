import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
  await page.goto('http://localhost:8000/login');
  expect(page).toHaveTitle(/Login/)
  await page.locator('input[name="username"]').fill('pythonista');
  await page.locator('input[name="password"]').fill('I<3testing');
  await page.getByTestId('login-button').click();
  await page.getByRole('button', { name: 'Logout' }).click();
});


test('invalid credentials', async ({ page }) => {
  await page.goto('http://localhost:8000/login');
  expect(page).toHaveTitle(/Login/)
  // app login
  await page.locator('input[name="username"]').fill('pythonista');
  await page.locator('input[name="password"]').fill('I<3Testing');
  await page.getByTestId('login-button').click();
  // verify error message is displayed
  const errorMessage = page.locator('div.invalid-login-warning>p')
  await expect(errorMessage).toHaveText("Invalid login! Please retry.")
  // verify user not navigated to dashboard page
  const logoutBtn = page.getByRole('button', { name: 'Logout' })    
  await expect(logoutBtn).not.toBeVisible()
});