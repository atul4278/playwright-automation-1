import { LoginPage } from '../pages/loginPage'
import { HomePage } from '../pages/homePage'
import { test as base } from '@playwright/test'

type MyFixtures = {
  loginPage: LoginPage
  homePage: HomePage
}

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page)
    await use(loginPage)
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page)
    await use(homePage)
  },
})
