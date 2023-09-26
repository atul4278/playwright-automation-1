import { Locator, Page } from '@playwright/test'

export class HomePage {
    readonly page: Page
    readonly logoutButton: Locator

    constructor(page: Page) {
        this.page = page
        this.logoutButton = page.getByRole('button', { name: 'Logout' })
    }

    async logout() {
        await this.logoutButton.click()
    }
}
