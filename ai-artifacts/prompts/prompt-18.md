Modify ONLY this existing file:

`tests/ui/tests/autocomplete-form.spec.js`

Do not create, modify, or delete any other file.

Do not modify:

`tests/ui/pages/autocomplete-form.page.js`

## TC-UI-006 — Escape interaction
Correct this test.

The current assertion:

`await expect(form.input).toBeVisible();`

must be removed because input visibility does not verify the required "clear/close" behavior.

The assignment only states:

"Escape to clear/close"

It does not define whether Escape must clear the input, close the suggestions, or both.

Do NOT invent an expected result.

Use Playwright's `test.fixme()` for this unresolved test so it remains documented in the automated test suite without pretending that an unsupported assertion is valid.

The test should clearly explain in its comment why it is currently blocked: the exact Escape outcome is unspecified by the assignment.

Do not remove the test entirely.

## TC-UI-008 — Invalid input and error message
Correct this test.

The current test uses:

`agile methodology`

as the invalid input candidate.

That is not justified because `agile methodology` is explicitly one of the valid supplied suggestions, and FR-01 allows users to type a response.

Do NOT invent an invalid-input rule.

Do NOT use a conditional assertion.

Do NOT create an arbitrary invalid value and declare it invalid.

Use `test.fixme()` for this unresolved test if the approved documentation does not provide a concrete invalid-input condition that can be safely automated.

The test should clearly explain in its comment that the assignment specifies the required error message but does not define the exact condition/data that makes a submitted response invalid.

Do not remove the test entirely.

## Preserve everything else
Keep TC-UI-001 through TC-UI-005 and TC-UI-007 unchanged unless a syntax adjustment is required by the `test.fixme()` implementation.

Do not modify the Page Object.

Do not modify package.json.

Do not modify documentation.

Do not add new tests.

Do not create any other files.

After making these corrections, stop and return the complete contents of:

`tests/ui/tests/autocomplete-form.spec.js`