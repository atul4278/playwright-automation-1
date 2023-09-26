import { Locator, Page, expect } from '@playwright/test'

export class LoginPage {
  readonly page: Page
  readonly userNameField: Locator
  readonly passwordField: Locator
  readonly loginButton: Locator
  readonly errorMessage: Locator

  constructor(page: Page) {
    this.page = page
    this.userNameField = page.locator('input[name="username"]')
    this.passwordField = page.locator('input[name="password"]')
    this.loginButton = page.getByTestId('login-button')
    this.errorMessage = page.locator('div.invalid-login-warning>p')
  }

  async open() {
    await this.page.goto('http://localhost:8000/login')
  }

  async login(userName: string, password: string) {
    await this.userNameField.fill(userName)
    await this.passwordField.fill(password)
    await this.loginButton.click()
  }

  async verifyErrorMessage(expectedText: string) {
    await expect(this.errorMessage).toHaveText(expectedText)
  }
}
