export class AutocompleteFormPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://test.com/autocomplete-form');
  }

  get input() {
    return this.page.locator('#input-field');
  }

  get suggestions() {
    return this.page.locator('.suggestions');
  }

  get suggestionItems() {
    return this.suggestions.locator('li');
  }

  get nextButton() {
    return this.page.locator('#next-button');
  }

  get errorMessage() {
    return this.page.locator('.error-message');
  }

  get successContainer() {
    return this.page.locator('.success-container');
  }

  async enterText(value) {
    await this.input.fill(value);
  }

  async getVisibleSuggestionTexts() {
    return await this.suggestionItems.evaluateAll((items) =>
      items
        .filter((item) => {
          const style = window.getComputedStyle(item);
          return style.display !== 'none' && style.visibility !== 'hidden' && item.getClientRects().length > 0;
        })
        .map((item) => item.textContent.trim())
    );
  }

  async selectSuggestionByText(text) {
    const suggestion = this.suggestionItems.filter({ hasText: text }).first();
    await suggestion.click();
  }

  async clickNext() {
    await this.nextButton.click();
  }

  async getErrorMessageText() {
    return await this.errorMessage.textContent();
  }

  async getSuccessMessageText() {
    return await this.successContainer.textContent();
  }

  async pressTab() {
    await this.page.keyboard.press('Tab');
  }

  async pressEnter() {
    await this.page.keyboard.press('Enter');
  }

  async pressEscape() {
    await this.page.keyboard.press('Escape');
  }
}
