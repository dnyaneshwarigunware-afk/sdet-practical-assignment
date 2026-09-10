Create ONLY the following file:

tests/api/tests/autocomplete-form-api.spec.js

Do not create, modify, or delete any other file.

This is implementation for TASK 5 — API AUTOMATION.

Use ONLY these approved sources as the requirements baseline:

- docs/1-requirement-analysis.md
- docs/3-defect-identification.md
- docs/4-test-cases.md
- docs/8-architecture-discussion.md
- README.md

Technology:
- Playwright
- Modern JavaScript
- Node.js
- @playwright/test

TASK 5 REQUIREMENTS

The API automation must:

a. Validate response schema matches the data contract in FR-05.

b. Verify correct data types:
   - completed must be Boolean
   - timestamps must be valid timestamp values
   - other types must follow what FR-05 actually specifies
   - do not invent types where the requirement does not specify them

c. Validate IETF BCP 47 locale format.

d. Confirm suggestion_list contains ONLY matching suggestions, not all suggestions.

e. Include at least 2 negative test cases, such as missing fields and invalid data.

IMPORTANT API CONSTRAINT

The assignment does NOT specify the actual API endpoint, request URL, request payload, authentication mechanism, or complete API request contract.

Therefore:

- DO NOT invent an API endpoint.
- DO NOT invent an HTTP method.
- DO NOT invent a request payload.
- DO NOT invent authentication.
- DO NOT invent headers.
- DO NOT invent undocumented status codes.
- DO NOT use https://test.com/autocomplete-form as an API endpoint.
- DO NOT make a network request to a guessed URL.

Instead, implement the API contract automation using a clearly isolated response fixture/object representing the provided API response.

The provided response is:

{
  "account_id": "98765",
  "account_email": "<TEST_EMAIL>",
  "start_date": "2024-03-15T10:30:00Z",
  "end_date": "2024-03-15T10:32:00Z",
  "locale": "en",
  "text": "agile methodology",
  "suggestion_list": "agile methodology, agile methodology process, agile methodology process testing",
  "completed": "true"
}

FR-05 requires these properties:

- account_id
- account_email
- start_date
- end_date
- locale
- text
- suggestion_list
- completed

IMPLEMENT THE FOLLOWING API TEST COVERAGE

TEST 1 — FR-05 response schema

Validate that the response contains all required FR-05 properties:

account_id
account_email
start_date
end_date
locale
text
suggestion_list
completed

Do not require additional undocumented properties.

TEST 2 — Data types

Validate the data types required by the assignment.

In particular:
- completed must be Boolean
- suggestion_list must be a string
- start_date and end_date must be valid timestamp values

Do not declare account_id to be invalid merely because the supplied sample represents it as a string. The assignment does not explicitly define account_id's type.

Do not invent types for fields where the assignment does not specify them.

TEST 3 — Timestamp validation

Validate that start_date and end_date contain valid timestamp values.

Do not invent an unsupported timestamp serialization requirement.

Also preserve the known requirement discrepancy:
the sample uses "Z", which represents UTC, while FR-05 requires the timestamps to represent user local time.

The test should make this discrepancy visible where appropriate, without inventing a serialization format that the assignment does not specify.

TEST 4 — BCP 47 locale

Validate that the locale value conforms to IETF BCP 47.

Important:
- "en" is valid BCP 47.
- Do NOT mark "en" as invalid.
- "en-IN" is the assignment's environment/example locale, but the requirement does not explicitly require the region subtag IN in every API response.

TEST 5 — suggestion_list contains ONLY matching suggestions

Use the input value:

"agile methodology process"

Using the assignment's three supplied suggestions:

- agile methodology
- agile methodology process
- agile methodology process testing

the matching suggestions for this input should be:

- agile methodology process
- agile methodology process testing

The shorter "agile methodology" must NOT be included as a matching suggestion for this test value.

Validate that suggestion_list contains only those matching suggestions and does not contain the shorter non-matching suggestion.

Do not invent a different matching algorithm.

TEST 6 — Negative case: missing required field

Create a copy of the response fixture with one required FR-05 property removed.

Validate that schema validation fails because the required property is missing.

Do not mutate the original fixture.

TEST 7 — Negative case: invalid completed data type

Create a response object where:

completed: "true"

is supplied instead of:

completed: true

Validate that this fails the required Boolean data-type validation.

Do not silently convert the string to Boolean.

This negative test also reflects the confirmed defect identified in docs/3-defect-identification.md.

OPTIONAL ADDITIONAL NEGATIVE VALIDATION

If useful and still within this single file, add one additional negative validation for an invalid locale or invalid timestamp.

If you add one:
- keep it directly tied to an explicit Task 5 requirement
- do not invent business rules
- do not add unnecessary complexity

IMPLEMENTATION GUIDELINES

- Use @playwright/test.
- Keep the fixture data clearly separated from the validation logic.
- Prefer small reusable validation functions inside this same file if they improve clarity.
- Do not create helper files.
- Keep the test names traceable to Task 5 / FR-05.
- Use clear assertions with meaningful failure messages.
- Do not use arbitrary waits.
- Do not make real API calls because the endpoint/request contract is unavailable.
- Clearly comment that the fixture-based validation is the executable contract-validation portion and that real network automation requires the missing API contract.
- Do not modify package.json.
- Do not modify playwright.config.js.
- Do not modify any documentation.
- Do not create any other files.

IMPORTANT DISTINCTION

Do not treat the supplied sample response as fully correct.

The known confirmed discrepancies are:

1. start_date is represented with "Z" (UTC) although the requirement specifies user local time.
2. end_date is represented with "Z" (UTC) although the requirement specifies user local time.
3. completed is the string "true" instead of Boolean true.

Do not incorrectly report these as new defects; use the approved defect analysis.

Also do NOT report these as defects:

- locale "en" — it is valid BCP 47.
- account_id "98765" being a string — its type is not specified.
- suggestion_list containing all three suggestions for "agile methodology" — all three begin with that value under the default prefix behavior.

After creating the file, STOP.

Return only:
1. Confirmation that tests/api/tests/autocomplete-form-api.spec.js was created.
2. A short summary of the Task 5 coverage.
3. A statement explaining why a real API network call was not implemented.