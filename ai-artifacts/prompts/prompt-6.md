You are now working on **Task 3 only** of the SDET practical assignment.

The following documents have already been reviewed and approved:

- `docs/1-requirement-analysis.md`
- `docs/2-test-scenarios.md`
- `docs/3-defect-identification.md`
Treat those approved documents, together with the original assignment requirements, as the source of truth.

## Objective
Create **ONLY**:

```
docs/4-test-cases.md
```
Do not create, modify, delete, or regenerate any other file.

Do not create Playwright scripts, Page Objects, API automation, configuration files, package files, README changes, or any other implementation artifact at this stage.

This stage is documentation only.

---

# Task 3 Requirement
Create detailed test cases for the scenarios identified in `docs/2-test-scenarios.md`.

The assignment requires a minimum of **8 test cases covering both UI and API**.

Each test case must contain:

1. Test Case ID
2. Title
3. Preconditions
4. Test Steps
5. Expected Results
6. Test Data
The test cases must provide meaningful coverage of the approved scenarios and the relevant requirements.

---

# Test Case Design Rules

## 1. Use the approved scenarios as the basis
Use the scenarios in:

```
docs/2-test-scenarios.md
```
as the starting point.

Do not invent unrelated scenarios.

Do not silently change the risk ranking or requirements.

Each test case should clearly trace back to one or more approved scenarios and/or requirements.

---

## 2. Minimum coverage
Create at least **8 detailed test cases**.

The set must cover both:

### UI coverage
Include appropriate coverage for:

- valid text entry
- suggestion filtering using the default prefix-match behavior
- no-match filtering
- suggestion selection
- keyboard interaction
- Tab navigation
- Enter-to-submit
- Escape behavior, while respecting the ambiguity identified in the approved requirements
- successful form submission
- invalid input/error behavior

### API coverage
Include appropriate coverage for:

- HTTP 200 for successful submission
- FR-05 response properties
- `start_date`
- `end_date`
- `locale`
- `text`
- `suggestion_list`
- `completed`
- correct data types
- timestamp validation
- BCP 47 locale validation
- suggestion-list matching behavior
- negative API validation
Do not create a separate test case for every field merely for the sake of increasing the count. Group logically related validations where appropriate.

---

# Important Requirement Constraints
Follow these rules exactly.

### Timestamp
The assignment requires:

- `start_date` = timestamp in the user's local time when they reached the form
- `end_date` = timestamp in the user's local time when they selected Next
The test environment is:

```
India
IST
UTC+05:30
```
Validate the requirement without inventing a serialization format that the assignment does not specify.

The defect identified in `docs/3-defect-identification.md` must be reflected appropriately in the relevant API test case.

---

### `completed`
The assignment explicitly requires:

```
completed = Boolean
```
Therefore, test cases must distinguish:

```
"completed": true
```
from:

```
"completed": "true"
```
The latter is a string and does not satisfy the requirement.

The confirmed discrepancy from `docs/3-defect-identification.md` must be represented accurately.

---

### `locale`
The requirement is:

```
locale must be in IETF BCP 47 format
```
Do NOT require the exact value `en-IN` merely because it appears as an example in the assignment.

`en` is a valid BCP 47 language tag and has already been explicitly determined **not to be a confirmed defect**.

The test case should validate BCP 47 compliance without inventing a mandatory region value.

---

### `suggestion_list`
The requirement is that `suggestion_list` contains the suggestions matching the entered/selected value.

The default behavior is prefix matching.

For:

```
agile methodology
```
all three supplied suggestions begin with that value, so the following is valid under the stated prefix behavior:

```
agile methodology,
agile methodology process,
agile methodology process testing
```
Do not create a test that incorrectly expects only the exact selected suggestion to appear in `suggestion_list`.

Also include appropriate coverage for a value where only a subset of suggestions matches, so that the requirement that unrelated suggestions must not be included can be validated.

---

### `account_id`
Do not require `account_id` to be numeric.

The assignment identifies it as an account ID but does not specify its JSON data type.

Do not turn this into a defect or a mandatory numeric-type validation.

---

### Escape behavior
The assignment explicitly mentions:

```
Escape to clear/close
```
However, the exact expected UI behavior is not fully specified.

Do not invent whether Escape must:

- clear the input,
- close suggestions,
- clear selection,
- blur the field,
- or perform multiple actions.
Create the test case so that it validates the explicit requirement while documenting the unresolved exact behavior rather than inventing an expected result.

---

### Negative API cases
The assignment requires at least **2 negative API cases**.

Use negative cases such as:

- missing required field
- invalid data type
- invalid value
but do not invent exact HTTP status codes unless the assignment explicitly specifies them.

Where the expected status code is unspecified, state that the API should reject/flag the invalid payload according to the actual API contract, and clearly mark the status code as requiring confirmation if necessary.

Do not invent undocumented API endpoints.

---

# Test Data
Use assignment-supported data wherever possible.

Primary valid suggestion:

```
agile methodology
```
Available suggestions:

```
agile methodology
agile methodology process
agile methodology process testing
```
Environment:

```
Browser: Chrome
OS: Windows 10
Language: English
Country: India
Timezone: IST (UTC+05:30)
Account email: <TEST_EMAIL>
```
For filtering tests, use values supported by the stated requirements.

Do not invent backend configuration mechanisms for FR-03. If a test requires match-anywhere mode, refer to the backend configuration as an existing/configured condition without specifying an undocumented endpoint, file, flag, or implementation mechanism.

---

# Traceability
For every test case, include a final traceability line such as:

```
Traceability: TS-02; FR-04; Task 3
```
Use the actual approved scenario IDs (`TS-01` through `TS-10`) and applicable requirement IDs (`FR-01` through `FR-05`).

Where applicable, also reference:

- Task 2
- Task 3
- Task 4
- Task 5
Do not reference requirements that the test case does not actually validate.

---

# Recommended Organization
Structure the document clearly, for example:

```
# Test Cases

## 1. Scope

## 2. Test Case Summary

## 3. Detailed UI Test Cases

### TC-UI-001 ...
### TC-UI-002 ...
...

## 4. Detailed API Test Cases

### TC-API-001 ...
### TC-API-002 ...
...

## 5. Traceability
```
The exact organization may be improved if it makes the document clearer, but do not add unrelated sections.

---

# Quality Requirements
Before writing the file, internally verify that:

1. There are at least 8 test cases.
2. Both UI and API are covered.
3. Every test case has:

- ID
- Title
- Preconditions
- numbered steps
- expected results
- test data
4. The approved scenarios are covered.
5. FR-01 through FR-05 have meaningful coverage.
6. At least 2 API negative cases exist.
7. `completed` is tested as a Boolean.
8. `start_date` and `end_date` are tested against the local-time requirement.
9. `locale` is tested for BCP 47 compliance without incorrectly requiring `en-IN`.
10. `suggestion_list` is tested according to matching behavior.
11. `account_id` is not incorrectly treated as requiring a numeric type.
12. Escape behavior does not contain invented semantics.
13. No undocumented API endpoints or response status codes are invented.
14. No automation code is created.
15. No other files are modified.

---

# Important Working Rule
Do not solve ambiguities by making assumptions.

If a requirement is incomplete or ambiguous, document the limitation in the relevant test case rather than silently inventing behavior.

Do not add new business requirements.

Do not add functionality that is not required by the assignment.

Do not generate implementation code at this stage.

---

# Final Action
Create only:

```
docs/4-test-cases.md
```
Then stop.

Do not proceed to Playwright implementation or API automation.

Wait for my review and approval before making any further changes.