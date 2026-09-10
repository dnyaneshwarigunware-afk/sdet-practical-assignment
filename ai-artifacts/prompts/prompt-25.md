Modify ONLY:

tests/api/tests/autocomplete-form-api.spec.js

Do not create, modify, or delete any other file.

Make ONLY the following corrections.

1. IMPROVE COMPLETED BOOLEAN VALIDATION

Add a small reusable function in this same file:

validateDataTypes(response)

It must validate the explicitly required data types:

- account_email is a string
- locale is a string
- text is a string
- suggestion_list is a string
- completed is a Boolean
- start_date is a valid timestamp value
- end_date is a valid timestamp value

Do not invent a type requirement for account_id.

The positive TEST 2 must call this validation against validResponse.

The negative TEST 7 must create a copy of defectiveResponse and verify that:

completed: "true"

fails the Boolean validation.

Use an assertion such as:

expect(() => validateDataTypes(invalidResponse)).toThrow();

Do not merely assert that typeof completed is not boolean.

2. IMPROVE BCP 47 VALIDATION

Replace the custom locale regular expression with JavaScript's built-in Intl.getCanonicalLocales() validation.

Use a function equivalent to:

function isValidLocale(value) {
  if (typeof value !== 'string' || value.trim() === '') {
    return false;
  }

  try {
    Intl.getCanonicalLocales(value);
    return true;
  } catch {
    return false;
  }
}

The positive test must continue to accept:

'en'

Do NOT require 'en-IN'.

3. KEEP TEST 8 BUT CLARIFY ITS PURPOSE

Keep the UTC timestamp evidence because it documents the confirmed discrepancy from docs/3-defect-identification.md.

However, rename the test so it clearly represents defect evidence rather than claiming that UTC timestamps are inherently invalid timestamp values.

For example:

TEST 8 — Known sample discrepancy: timestamps use UTC serialization

The assertions may verify that the supplied defective sample contains 'Z'.

Do NOT claim that the 'Z' character itself is an invalid timestamp format.

Do NOT invent a required local timestamp serialization format.

4. DO NOT CHANGE

Keep the following behavior unchanged:

- fixture-based approach
- no real API endpoint
- no invented HTTP method
- no invented request payload
- no invented authentication
- no new dependencies
- no package.json changes
- no playwright.config.js changes
- no documentation changes
- no additional files

5. FINAL COVERAGE MUST INCLUDE

- FR-05 required-property/schema validation
- positive data-type validation
- timestamp validation
- BCP 47 locale validation
- suggestion_list containing only matching suggestions
- negative missing-field validation
- negative invalid Boolean validation
- evidence of the two timestamp discrepancies in the supplied sample

After making these corrections, STOP.

Confirm that only tests/api/tests/autocomplete-form-api.spec.js was modified.