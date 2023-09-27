import { test, expect, chromium } from '@playwright/test'

test('basic test without fixtures', async () => {
  const browser = await chromium.launch() // create a chrome browser
  const context = await browser.newContext() // create new isolated browser context
  const page = await context.newPage() // create new page

  await page.goto('http://www.google.com') // navigate to a page
  console.log(await context.cookies()) // print cookies
  await context.clearCookies() // clear cookies
  console.log(await context.cookies()) // print cookies
})
