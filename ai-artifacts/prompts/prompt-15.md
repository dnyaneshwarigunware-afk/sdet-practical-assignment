Modify ONLY this existing file:

`tests/ui/pages/autocomplete-form.page.js`

Do not create, modify, or delete any other file.

Change ONLY the implementation of `getVisibleSuggestionTexts()`.

It must return the text of only the currently visible suggestion `<li>` elements.

Use the existing `suggestionItems` locator and Playwright's visibility selector/filter correctly.

The resulting behavior should be equivalent to selecting:

`.suggestions li:visible`

and then retrieving their text contents.

Do not change:

- selectors elsewhere in the file
- class name
- URL
- any other method
- any test file
- package.json
- documentation
Do not add assertions, waits, or timeouts.

After making this single correction, stop.