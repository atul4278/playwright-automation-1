import { LoginPage } from '../pages/loginPage'
import { HomePage } from '../pages/homePage'
import { test } from '../pages/basePage'

test('add reminder', async ({ loginPage, homePage }) => {
  await loginPage.open()
  await loginPage.login('pythonista', 'I<3testing')
  await homePage.addReminder('Reminder1') // add new reminder
  await homePage.logout()
})
