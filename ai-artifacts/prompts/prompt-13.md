Create ONLY this file:

`tests/ui/tests/autocomplete-form.spec.js`

Do not create, modify, or delete any other file.

## Source of truth
Use ONLY the approved assignment requirements and these existing project documents:

- `docs/1-requirement-analysis.md`
- `docs/2-test-scenarios.md`
- `docs/3-defect-identification.md`
- `docs/4-test-cases.md`
- `docs/8-architecture-discussion.md`
Use the existing Page Object:

`tests/ui/pages/autocomplete-form.page.js`

Do not modify the Page Object.

## Scope
Implement ONLY the following approved UI test cases in this file:

- TC-UI-001 — Valid text entry
- TC-UI-002 — Default prefix suggestion filtering
- TC-UI-003 — No-match suggestion filtering
- TC-UI-004 — Suggestion selection
Do not implement keyboard tests, submission tests, API tests, or negative submission tests yet.

## Test requirements

### TC-UI-001 — Valid text entry
Verify that a user can enter a response into the autocomplete input.

Use the approved input selector through the Page Object.

Test data may use:

`agile methodology`

Verify that the entered value is present in the input.

### TC-UI-002 — Default prefix suggestion filtering
Verify the default prefix-match behavior.

Use:

`agile methodology process`

Expected visible suggestions:

- `agile methodology process`
- `agile methodology process testing`
The shorter suggestion:

- `agile methodology`
must not be treated as a matching suggestion for this input.

Do not assume or implement any backend configuration.

### TC-UI-003 — No-match suggestion filtering
Verify that suggestions disappear when the entered text does not match the beginning of any supplied suggestion.

Use:

`zzz`

Verify that no suggestion items are visible.

Do not interpret `zzz` as an invalid form submission. This test is only about suggestion filtering.

### TC-UI-004 — Suggestion selection
Verify that the user can select a suggestion from the suggestion list.

Use the supplied suggestion:

`agile methodology`

After selecting it, verify that the input contains:

`agile methodology`

Do not add assertions about API persistence or submission in this test.

## Test design rules

- Use Playwright Test.
- Use the existing `AutocompleteFormPage` Page Object.
- Keep assertions in the test file, not the Page Object.
- Navigate using the Page Object's `goto()` method.
- Do not invent login steps.
- Do not invent API endpoints.
- Do not add fixtures.
- Do not add custom configuration.
- Do not add waits or arbitrary timeouts unless required by Playwright behavior.
- Do not add unrelated tests.
- Do not modify package.json.
- Do not modify documentation.

## Test data
Use only suggestion values explicitly provided by the assignment unless a test value is explicitly defined above.

## Output
Create only:

`tests/ui/tests/autocomplete-form.spec.js`

After creating the file, stop.

Do not generate any additional test files or project files.