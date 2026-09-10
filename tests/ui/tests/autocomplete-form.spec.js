import { test, expect } from '@playwright/test';
import { AutocompleteFormPage } from '../pages/autocomplete-form.page.js';

test.describe('Autocomplete form UI', () => {
  test('TC-UI-001 — Valid text entry', async ({ page }) => {
    const form = new AutocompleteFormPage(page);

    await form.goto();

    const value = 'agile methodology';
    await form.enterText(value);

    await expect(form.input).toHaveValue(value);
  });

  test('TC-UI-002 — Default prefix suggestion filtering', async ({ page }) => {
    const form = new AutocompleteFormPage(page);

    await form.goto();

    const value = 'agile methodology process';
    await form.enterText(value);

    const suggestions = await form.getVisibleSuggestionTexts();

    expect(suggestions).toContain('agile methodology process');
    expect(suggestions).toContain('agile methodology process testing');
    expect(suggestions).not.toContain('agile methodology');
  });

  test('TC-UI-003 — No-match suggestion filtering', async ({ page }) => {
    const form = new AutocompleteFormPage(page);

    await form.goto();
    await form.enterText('zzz');

    const suggestions = await form.getVisibleSuggestionTexts();

    expect(suggestions).toHaveLength(0);
  });

  test('TC-UI-004 — Suggestion selection', async ({ page }) => {
    const form = new AutocompleteFormPage(page);

    await form.goto();

    const selectedText = 'agile methodology';
    await form.enterText('agile');
    await form.selectSuggestionByText(selectedText);

    await expect(form.input).toHaveValue(selectedText);
  });

  test('TC-UI-005 — Keyboard navigation and Enter-to-submit', async ({ page }) => {
    const form = new AutocompleteFormPage(page);

    await form.goto();
    await form.enterText('agile');
    await form.selectSuggestionByText('agile methodology');

    // The assignment requires Tab navigation and Enter-to-submit, but does not define the
    // exact focus sequence or which element receives focus after a Tab. This test exercises the
    // required keyboard interactions without encoding an unsupported focus-order assumption.
    await form.pressTab();
    await form.pressEnter();

    const successText = await form.getSuccessMessageText();
    expect(successText).toContain('Success! Your response has been recorded.');
  });

  test.fixme('TC-UI-006 — Escape interaction', async ({ page }) => {
    const form = new AutocompleteFormPage(page);

    await form.goto();
    await form.enterText('agile');

    // The assignment states "Escape to clear/close" but does not define whether Escape must
    // clear the input, close suggestions, or both. Because the exact outcome is unspecified,
    // this remains an unresolved automation requirement and is intentionally marked as fixme.
    await form.pressEscape();
  });

  test('TC-UI-007 — Valid submission and success message', async ({ page }) => {
    const form = new AutocompleteFormPage(page);

    await form.goto();
    await form.enterText('agile');
    await form.selectSuggestionByText('agile methodology');
    await form.clickNext();

    const successText = await form.getSuccessMessageText();
    expect(successText).toContain('Success! Your response has been recorded.');
  });

  test.fixme('TC-UI-008 — Invalid input and error message', async ({ page }) => {
    // The assignment specifies the required error text:
    // "Error: Invalid input. Please select a valid suggestion."
    // but does not define the concrete invalid-input condition or data that triggers it.
    // This test remains blocked until the application provides the exact invalid-input rule.
  });
});
