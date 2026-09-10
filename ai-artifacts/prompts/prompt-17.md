Modify ONLY this existing file:

`tests/ui/tests/autocomplete-form.spec.js`

Do not create, modify, or delete any other file.

Do not modify:

`tests/ui/pages/autocomplete-form.page.js`

## Corrections required

### TC-UI-005
The current test performs Tab and Enter but only verifies that the input still contains its value.

Correct the test so that it actually verifies the required Enter-to-submit behavior.

Use the valid suggestion-selection flow already supported by the approved requirements.

The test should:

1. Enter a valid value.
2. Select the valid suggestion where required.
3. Perform the required Tab interaction.
4. Use Enter to submit.
5. Verify the resulting success behavior specified by the assignment, including:
`Success! Your response has been recorded.`

Do not invent API details.

### TC-UI-006
The assignment says "Escape to clear/close" but does not define whether Escape clears the input, closes suggestions, or both.

Do NOT invent an expected behavior.

Do not leave this as an action-only test that can always pass.

Preserve the ambiguity explicitly in the test code/documentation and do not add an unsupported assertion.

If an executable assertion cannot be justified from the approved requirements, do not manufacture one.

### TC-UI-008
The current implementation uses:

`if (errorText)`

This can allow the test to pass even when the required error message is not displayed.

Do NOT use a conditional assertion that silently passes.

The assignment does not define the exact invalid-input rule, so do not invent one.

Use only an invalid-input condition explicitly supported by the approved documentation. If the approved documentation confirms that the invalid-input behavior remains unspecified, keep this test clearly marked as requiring the unresolved application validation rule rather than creating a false automated assertion.

Do not invent an API status code or endpoint.

## General constraints

- Keep TC-UI-001 through TC-UI-004 unchanged unless absolutely necessary for the above corrections.
- Do not add new test cases.
- Do not modify the Page Object.
- Do not modify package.json.
- Do not modify documentation.
- Do not create any other files.
- Do not add arbitrary waits or timeouts.
- Do not invent requirements.
After making these corrections, stop and return the complete contents of:

`tests/ui/tests/autocomplete-form.spec.js`