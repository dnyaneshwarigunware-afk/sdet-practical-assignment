Create ONLY the following implementation file:

`tests/ui/pages/autocomplete-form.page.js`

Do not create, modify, or delete any other file.

## Source of truth
Use ONLY the approved assignment requirements and the already-created project documentation:

- `docs/1-requirement-analysis.md`
- `docs/2-test-scenarios.md`
- `docs/3-defect-identification.md`
- `docs/4-test-cases.md`
- `docs/8-architecture-discussion.md`
Do not introduce any requirement, behavior, selector, business rule, API detail, or assumption that is not supported by those sources.

## Technology
Use:

- Playwright
- Modern JavaScript
- Node.js
- ES modules

## Page Object responsibility
Create a Page Object representing the autocomplete form.

Use the exact selectors provided by the assignment:

- Input: `#input-field`
- Suggestions container: `.suggestions`
- Suggestion items: `li` within `.suggestions`
- Next button: `#next-button`
- Error message: `.error-message`
- Success container: `.success-container`
Do not invent alternative selectors.

## Required Page Object capabilities
Provide reusable methods needed by the approved UI test cases, such as:

- navigating to the specified autocomplete-form URL
- entering text into the input
- retrieving visible suggestion items
- selecting a suggestion by its visible text
- clicking the Next button
- retrieving the error message
- retrieving the success message/content
- performing the required keyboard interactions where appropriate, including Enter, Escape, and Tab
Keep the Page Object focused on browser interaction.

Do NOT put test assertions or test-case-specific validation logic into the Page Object unless the approved architecture explicitly requires it.

## Important constraints

1. Do not implement login. Login/admin configuration is explicitly out of scope.
2. Do not invent an API endpoint.
3. Do not implement backend configuration for match-anywhere behavior because the assignment does not specify how that configuration is controlled.
4. Do not decide or encode a specific interpretation of Escape behavior beyond exposing the keyboard interaction required by the assignment.
5. Do not add waits, timeouts, retry logic, fixtures, environment variables, or configuration unless already required by the approved documentation.
6. Do not create any test files yet.
7. Do not create Playwright configuration yet.
8. Do not create API automation yet.
9. Do not modify `package.json`.
10. Do not modify any documentation.
11. Do not add helper classes or utilities in separate files.
12. Keep the implementation minimal and directly traceable to the approved requirements.

## Output
Create only:

`tests/ui/pages/autocomplete-form.page.js`

After creating it, stop.

Do not generate the UI tests or any other project files.