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

test('add reminder', async ({ loginPage, homePage }) => {
  await loginPage.open()
  await loginPage.login('pythonista', 'I<3testing')
  await homePage.addReminder('Reminder1') // add new reminder
  await homePage.logout()
})
