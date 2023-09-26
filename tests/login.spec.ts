import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { HomePage } from '../pages/homePage'

test.describe('', () => {
  test.beforeAll(() => {
    console.log('Connecting to some DATABASE')
  })

  test.beforeEach(async ({ page }) => {
    console.log('Initializing browser setup')
    await page.goto('http://localhost:8000/login')
  })

  test.afterEach(async ({ page }) => {
    console.log('Tearing down browser setup')
    await page.close()
  })

  test.afterAll(async () => {
    console.log('Closing connection to DATABASE')
  })

  test.only('error message shown for invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.login('pythonista', 'I<3testing1')
    await loginPage.verifyErrorMessage('Invalid login! Please retry.')
  })

  test.only('successful login for valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)
    await loginPage.login('pythonista', 'I<3testing')
    await expect(homePage.logoutButton).toBeVisible()
  })
})
