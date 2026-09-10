Modify ONLY this existing file:

`tests/ui/tests/autocomplete-form.spec.js`

Do not create, modify, or delete any other file.

Use the existing Page Object:

`tests/ui/pages/autocomplete-form.page.js`

Do not modify the Page Object.

## Source of truth
Use ONLY:

- `docs/1-requirement-analysis.md`
- `docs/2-test-scenarios.md`
- `docs/3-defect-identification.md`
- `docs/4-test-cases.md`
- `docs/8-architecture-discussion.md`
Do not invent behavior or requirements.

## Scope
Add ONLY these approved test cases to the existing test file:

- TC-UI-005 — Keyboard navigation and Enter-to-submit
- TC-UI-006 — Escape interaction
- TC-UI-007 — Valid submission and success message
- TC-UI-008 — Invalid input and error message
Do not add API tests or any other UI tests.

## TC-UI-005 — Keyboard navigation and Enter-to-submit
Cover the approved keyboard interaction requirement.

Verify that Tab keyboard interaction can be performed on the form.

Do NOT assert an exact focus order unless explicitly specified by the assignment, because the assignment does not define the complete focus order.

Also cover Enter-to-submit as required by Task 4.

Use the valid suggestion:

`agile methodology`

Do not invent API endpoint details.

The test may use the existing Page Object methods for Tab and Enter.

## TC-UI-006 — Escape interaction
Cover the required Escape keyboard interaction.

Use the existing Page Object's `pressEscape()` method.

IMPORTANT:

The assignment states "Escape to clear/close", but does not specify whether Escape must:

- clear the input,
- close the suggestions,
- or both.
Do NOT invent a specific semantic requirement.

The test should verify only that the Escape interaction can be performed without introducing an unsupported expected behavior.

If an exact assertion cannot be justified from the approved documentation, do not invent one. Clearly preserve the ambiguity in the test implementation/comments rather than asserting an unsupported outcome.

## TC-UI-007 — Valid submission and success message
Verify the valid form submission flow.

Use:

`agile methodology`

Select the valid suggestion as appropriate.

Submit using the Next button.

Verify the success behavior specified by the assignment, including the success message:

`Success! Your response has been recorded.`

Do not invent API endpoint, request payload, response body, or backend implementation details.

## TC-UI-008 — Invalid input and error message
Implement the approved invalid-input scenario only according to the definition in the existing approved test-case documentation.

IMPORTANT:

Do NOT assume that arbitrary text such as `zzz` is invalid for submission merely because it produces no suggestions. FR-01 explicitly allows users to type any response.

Do NOT invent an invalid-input business rule.

Do NOT invent an API status code.

If the approved documentation identifies a concrete invalid-input condition/test data, use it.

If the documentation explicitly identifies the invalid-input behavior as unresolved because the assignment does not define the rule, preserve that limitation rather than creating a false assertion.

Where the assignment does specify the error message, use:

`Error: Invalid input. Please select a valid suggestion.`

## General rules

- Keep assertions in the test file.
- Use the existing Page Object.
- Keep each test independent.
- Do not add arbitrary waits or timeouts.
- Do not add login steps.
- Do not add API automation.
- Do not create Playwright configuration.
- Do not modify package.json.
- Do not modify documentation.
- Do not create any additional files.
- Do not invent unspecified behavior.
After adding these four tests, stop.

Return only the modified `tests/ui/tests/autocomplete-form.spec.js` content.