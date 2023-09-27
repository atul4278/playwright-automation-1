import { Locator, Page, expect } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly logoutButton: Locator
  readonly addIcon: Locator
  readonly tickIcon: Locator
  readonly cancelIcon: Locator
  readonly reminderTextField: Locator
  readonly deleteIcon: Locator
  readonly editIcon: Locator

  readonly reminderHeader: Locator

  constructor(page: Page) {
    this.page = page
    this.logoutButton = page.locator('form#logout-form>button')
    this.addIcon = page.locator(
      'div[data-id="new-reminder-row"]>img[src*="icon-add.svg"]'
    )
    this.tickIcon = page.locator(
      'div[data-id="new-reminder-row"]>img[src*="icon-check-circle.svg"]'
    )
    this.cancelIcon = page.locator(
      'div[data-id="new-reminder-row"]>img[src*="icon-x-circle.svg"]'
    )
    this.reminderTextField = page.locator(
      'div[data-id="new-reminder-row"]>input'
    )
    this.editIcon = page.locator('div.reminder-row>img[src*="icon-edit.svg"]')
    this.deleteIcon = page.locator(
      'div.reminder-row>img[src*="icon-delete.svg"]'
    )
    this.reminderHeader = page.locator(
      'div.reminders-content-items>div.reminders-card>h3'
    )
  }

  async addReminder(reminderText: string) {
    await this.addIcon.click()
    await this.reminderTextField.fill(reminderText)
    await this.tickIcon.click()
    await expect(this.reminderHeader).toHaveText(reminderText)
  }

  async logout() {
    await this.logoutButton.click()
  }
}
