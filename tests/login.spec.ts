import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { HomePage } from '../pages/homePage'

test.only('error message shown for invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await page.goto('http://localhost:8000/login')
  await loginPage.login('pythonista', 'I<3testing1')
  await loginPage.verifyErrorMessage('Invalid login! Please retry.')
})

test.only('successful login for valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const homePage = new HomePage(page)
  await page.goto('http://localhost:8000/login')
  await loginPage.login('pythonista', 'I<3testing')
  await expect(homePage.logoutButton).toBeVisible()
})
