Review and correct ONLY the specific issues listed below in the existing file:

`docs/4-test-cases.md`

Do NOT regenerate the document.
Do NOT restructure the document.
Do NOT rewrite sections that are not affected by the corrections.
Do NOT create, delete, rename, or modify any other file.
Do NOT add new requirements, assumptions, API endpoints, business rules, selectors, or behavior.
Do NOT add anything based on your own interpretation when the assignment is ambiguous.

Use these approved documents as the source of truth:

- `docs/1-requirement-analysis.md`
- `docs/2-test-scenarios.md`
- `docs/3-defect-identification.md`
Make ONLY the following corrections:

### 1. Correct TC-UI-002 — Default Prefix Filtering
The current test does not demonstrate meaningful filtering because typing `agile` matches the beginning of all three supplied suggestions.

Change the test data to:

`agile methodology process`

Use only the suggestions explicitly provided in the assignment:

- `agile methodology`
- `agile methodology process`
- `agile methodology process testing`
Expected behavior:

- `agile methodology process` remains visible.
- `agile methodology process testing` remains visible.
- `agile methodology` is NOT visible because it does not begin with the complete typed value.
- Do not introduce any additional suggestions.
Keep the test focused on FR-02 default prefix matching.

### 2. Correct TC-UI-005 — Tab Navigation
The current wording says focus moves through interactive controls "in a valid sequence", which could imply an exact focus order that the assignment does not specify.

Modify the test so that it verifies that Tab navigation can be exercised between the available interactive elements, without asserting an exact focus order.

Do NOT invent or specify a required focus sequence.

Keep the explicit assignment requirement for:

- Tab Navigation
- Enter to submit
Do not remove either requirement.

### 3. Correct TC-UI-006 — Escape Behavior
The assignment explicitly requires:

"Escape to clear/close"

However, the exact meaning of "clear" or "close" is not defined.

Keep this ambiguity explicitly documented, but make the test case useful and measurable.

The expected result should state that pressing Escape must produce the application's implementation of the assignment's stated clear/close behavior, while the test must NOT assume whether:

- the input is cleared,
- the suggestions are closed,
- both occur,
- or another exact UI state occurs.
Record/verify which clear/close behavior the implementation actually provides.

Do NOT invent a specific Escape behavior.

If the exact expected state cannot be finalized because the assignment does not define it, clearly mark that the exact assertion requires clarification rather than inventing one.

### 4. Correct TC-UI-008 — Invalid Input Test Data
Do NOT invent an invalid value.

The assignment specifies the error message:

`Error: Invalid input. Please select a valid suggestion.`

But it does not define the exact criteria for what makes an input invalid.

Change the test data to explicitly state:

`TBD — invalid-input criteria are not specified in the assignment.`

The test should still verify the specified error message once a valid invalid-input condition is established by the actual application/assignment behavior.

Do NOT use `zzz` or another arbitrary value as proof of invalid input, because FR-01 allows users to type a response and the assignment does not state that a non-matching value is necessarily invalid.

### 5. Correct TC-API-003 — Locale and suggestion_list
Remove the unrelated `fr-FR` test data.

For locale, use only values supported by the assignment/context, such as:

- `en`
- `en-IN`
Do NOT claim that `en-IN` is mandatory. The assignment gives `en-IN` as an example, while the sample API response contains `en`.

For `suggestion_list`, make the test actually verify the requirement that it contains ONLY matching suggestions, rather than using a value where all suggestions match.

Use:

`agile methodology process`

Expected `suggestion_list`:

`agile methodology process, agile methodology process testing`

Expected behavior:

- Include only suggestions matching the entered/selected value according to the applicable matching behavior.
- Do NOT include `agile methodology`.
- Do NOT invent additional suggestions.
Also correct the traceability so TC-API-003 does NOT claim to test the FR-03 match-anywhere configuration unless the test actually tests that behavior.

### 6. Correct TC-API-006 — Negative API Case
Do not combine multiple unrelated negative validations into one test.

Keep TC-API-006 focused on ONE clear negative case:

`completed` has the invalid type `"true"` instead of Boolean `true`.

Expected:

- The response/data should be rejected or flagged as invalid according to the actual API contract.
- Do NOT invent an HTTP status code because the assignment does not specify one.
- Do NOT invent an API endpoint or request payload structure.
Remove the invalid locale and invalid `suggestion_list` examples from TC-API-006.

The existing TC-API-005 and corrected TC-API-006 together must still provide at least two negative API cases:

1. Missing required field.
2. Invalid `completed` data type.
For TC-API-005, preserve the existing negative-case intent, but make sure it clearly states that the actual API request contract must be available/identified before execution. Do not invent endpoint, payload, or HTTP status details.

---

## Additional required correction: FR-03 coverage
After making the six corrections above, check the existing test cases for coverage of TS-08 / FR-03.

The current document must contain an actual test case for:

- backend match-anywhere configuration enabled
- typed text occurs anywhere within the supplied suggestions
- suggestions remain visible when the match-anywhere configuration is enabled
Use only behavior explicitly supported by FR-03.

A suitable test value is:

`methodology`

because it occurs within the supplied suggestions but is not at the beginning.

Expected when match-anywhere is enabled:

All three supplied suggestions remain visible.

Also ensure the default/prefix behavior is not incorrectly claimed to support this case when match-anywhere is disabled.

The assignment does NOT specify how the backend configuration is enabled/disabled. Therefore:

- refer to the existing supported backend configuration mechanism when available;
- do not invent an endpoint, config file, API, environment variable, or implementation mechanism;
- clearly mark the configuration mechanism as unspecified if necessary.
If a new test case is necessary to properly cover TS-08/FR-03, add ONLY that test case to `docs/4-test-cases.md`. Do not restructure or regenerate the document.

---

## Final validation before stopping
After corrections, verify:

1. Only `docs/4-test-cases.md` was modified.
2. Existing test case IDs and document structure are preserved unless a new FR-03 coverage test is strictly necessary.
3. No unrelated wording was rewritten.
4. No requirements were added.
5. No API endpoint, payload, status code, selector, focus order, Escape behavior, invalid-input rule, or backend configuration mechanism was invented.
6. At least 8 total test cases remain.
7. Both UI and API coverage remain.
8. At least two negative API cases remain.
9. FR-01 through FR-05 have traceable test coverage.
10. TS-01 through TS-10 remain traceable.
11. Task 4 keyboard requirements remain covered.
12. Task 5 API requirements remain covered.
13. The three confirmed defects from `docs/3-defect-identification.md` remain represented where applicable:

- start_date local-time discrepancy
- end_date local-time discrepancy
- completed Boolean discrepancy
Do NOT create automation code yet.

Do NOT create or modify README, package.json, Page Objects, test scripts, configuration files, or any other documentation.

After completing the corrections, report ONLY:

- the file modified
- the test case IDs changed
- a brief bullet list of the corrections made
- whether any new test case was added for FR-03 coverage
- confirmation that no other files were modified