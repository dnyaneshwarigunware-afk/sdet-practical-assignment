# Test Cases

## 1. Scope

This document contains the approved detailed test cases for the scenarios identified in the approved test-scenarios document and the requirement baseline. The test cases are limited to documentation only and are aligned to the assignment requirements and approved analysis.

The set includes both UI and API coverage and is designed to trace to the approved scenarios and functional requirements without introducing new behavior or assumptions.

---

## 2. Test Case Summary

| Test Case ID | Area | Scenario / Requirement Coverage |
|---|---|---|
| TC-UI-001 | UI | Valid text entry and field interaction |
| TC-UI-002 | UI | Default prefix filtering |
| TC-UI-003 | UI | No-match filtering behavior |
| TC-UI-004 | UI | Suggestion selection populates the input |
| TC-UI-005 | UI | Keyboard navigation and Enter-to-submit |
| TC-UI-006 | UI | Escape behavior requirement with unspecified exact semantics |
| TC-UI-007 | UI | Valid form submission and success message |
| TC-UI-008 | UI | Invalid input and error message |
| TC-API-001 | API | Successful response schema and data contract |
| TC-API-002 | API | Local-time timestamp validation for start_date and end_date |
| TC-API-003 | API | locale BCP 47 validation and suggestion_list matching |
| TC-API-003A | API | Match-anywhere configuration enabled for substring matching |
| TC-API-004 | API | completed Boolean validation |
| TC-API-005 | API | Negative API validation: missing required field |
| TC-API-006 | API | Negative API validation: invalid completed data type |

Total: 15 test cases.

---

## 3. Detailed UI Test Cases

### TC-UI-001: Enter text into the input field

- Test Case ID: TC-UI-001
- Title: Enter text into the autocomplete input field
- Preconditions:
  - The user is logged in and navigated to the autocomplete form at https://test.com/autocomplete-form.
  - The input field is visible and enabled.
  - Suggestions are visible by default according to the supplied HTML structure.
- Test Steps:
  1. Locate the input element using the selector #input-field.
  2. Type a valid free-form value such as agile methodology.
  3. Observe the input field value and the visible suggestion list.
- Expected Results:
  - The entered text appears in the input field.
  - The form remains interactive.
  - Suggestion filtering updates according to the typed value.
- Test Data:
  - Input value: agile methodology
- Traceability: TS-09; FR-01; FR-02; Task 3; Task 4

### TC-UI-002: Default prefix filtering keeps matching suggestions visible

- Test Case ID: TC-UI-002
- Title: Verify default prefix filtering behavior
- Preconditions:
  - The autocomplete form is loaded.
  - The suggestion list contains the supplied suggestions.
- Test Steps:
  1. Click or focus the input field.
  2. Type agile methodology process.
  3. Observe the suggestions.
- Expected Results:
  - agile methodology process remains visible.
  - agile methodology process testing remains visible.
  - agile methodology is not visible because it does not begin with the complete typed value.
- Test Data:
  - Input value: agile methodology process
  - Available suggestions:
    - agile methodology
    - agile methodology process
    - agile methodology process testing
- Traceability: TS-06; FR-02; Task 3; Task 4

### TC-UI-003: No-match filtering removes all suggestions

- Test Case ID: TC-UI-003
- Title: Verify no-match filtering behavior
- Preconditions:
  - The autocomplete form is loaded.
  - The suggestion list is visible.
- Test Steps:
  1. Focus the input field.
  2. Type a value that does not match the beginning of any provided suggestion, for example zzz.
  3. Observe the suggestion list.
- Expected Results:
  - No suggestion remains visible because no suggestion begins with zzz.
  - The list is effectively empty or hidden according to the implementation.
- Test Data:
  - Input value: zzz
- Traceability: TS-07; FR-02; Task 3; Task 4

### TC-UI-004: Select a suggestion and populate the input field

- Test Case ID: TC-UI-004
- Title: Suggestion selection populates the input field
- Preconditions:
  - The autocomplete form is loaded.
  - Suggestions are visible.
- Test Steps:
  1. Type agile.
  2. Click the suggestion agile methodology.
  3. Observe the input field value.
- Expected Results:
  - The input field displays agile methodology.
  - The selection matches the clicked suggestion text.
- Test Data:
  - Typed value: agile
  - Clicked suggestion: agile methodology
- Traceability: TS-06; FR-01; Task 3; Task 4

### TC-UI-005: Keyboard navigation and Enter-to-submit

- Test Case ID: TC-UI-005
- Title: Navigate with Tab and submit with Enter
- Preconditions:
  - The autocomplete form is loaded.
  - The input field and Next button are visible.
- Test Steps:
  1. Press Tab to move focus between the available interactive elements in the form.
  2. Focus the input field.
  3. Type agile methodology.
  4. Press Enter to submit.
  5. Observe the form result.
- Expected Results:
  - Tab navigation can be exercised between the available interactive elements without asserting an exact focus order.
  - Enter triggers the required submit action.
  - The submission behavior follows the requirement to display success or error based on the actual form validity and backend result.
- Test Data:
  - Input value: agile methodology
  - Keyboard events: Tab, Enter
- Traceability: TS-09; FR-01; FR-04; Task 3; Task 4

### TC-UI-006: Escape behavior requirement with unspecified exact semantics

- Test Case ID: TC-UI-006
- Title: Validate Escape requirement while preserving the unspecified exact behavior
- Preconditions:
  - The autocomplete form is loaded.
  - The suggestion list is visible or may become visible after typing.
- Test Steps:
  1. Focus the input field.
  2. Type a partial value that reveals suggestions.
  3. Press Escape.
  4. Observe the resulting state of the input and suggestion list and record the actual clear/close behavior implemented by the application.
- Expected Results:
  - Pressing Escape must produce the application’s implementation of the assignment’s stated clear/close behavior.
  - The exact expected state is not specified by the assignment, so the test must not assume whether the input is cleared, suggestions are closed, both occur, or another exact UI state occurs.
  - The exact assertion requires clarification if the implementation behavior is not already defined by the application contract.
- Test Data:
  - Input value: agile
  - Keyboard event: Escape
- Traceability: TS-10; Task 4; Ambiguity / Missing Information

### TC-UI-007: Successful form submission displays success message

- Test Case ID: TC-UI-007
- Title: Submit a valid value and verify success message
- Preconditions:
  - The form is loaded.
  - A valid value is selected or entered.
  - The API success path is available.
- Test Steps:
  1. Focus the input field.
  2. Enter agile methodology.
  3. Click the Next button.
  4. Observe the HTTP result and success-state UI.
- Expected Results:
  - The form sends the persistence call.
  - HTTP status is 200 for a successful submission.
  - The success message container is displayed.
- Test Data:
  - Input value: agile methodology
- Traceability: TS-02; FR-04; Task 3; Task 4; Task 5

### TC-UI-008: Invalid input triggers the required error message

- Test Case ID: TC-UI-008
- Title: Submit invalid input and verify error messaging
- Preconditions:
  - The form is loaded.
  - The exact invalid-input criteria are not specified by the assignment and must be established by the actual application behavior.
- Test Steps:
  1. Focus the input field.
  2. Enter a value that the actual application identifies as invalid input.
  3. Click Next.
  4. Observe the error message and the form state.
- Expected Results:
  - The required error message is displayed: Error: Invalid input. Please select a valid suggestion.
  - The assignment does not define the precise invalid-input criteria, so the test does not invent one.
- Test Data:
  - Input value: TBD — invalid-input criteria are not specified in the assignment.
- Traceability: TS-01; FR-04; Task 3; Task 4

---

## 4. Detailed API Test Cases

### TC-API-001: Successful submission response matches FR-05 contract

- Test Case ID: TC-API-001
- Title: Validate successful API response schema and required properties
- Preconditions:
  - The user has completed the form with a valid selection or input value.
  - The API is available and returns the persisted response.
- Test Steps:
  1. Submit a valid value such as agile methodology.
  2. Capture the API response.
  3. Validate property presence and values against FR-05.
- Expected Results:
  - Response contains all required properties: account_id, account_email, start_date, end_date, locale, text, suggestion_list, completed.
  - text equals the submitted value.
  - suggestion_list reflects suggestions matching the selected value.
  - completed is Boolean.
- Test Data:
  - Input value: agile methodology
  - Expected account_email: <TEST_EMAIL>
  - Suggested list for prefix matching:
    - agile methodology
    - agile methodology process
    - agile methodology process testing
- Traceability: TS-03; FR-05; Task 2; Task 3; Task 5

### TC-API-002: start_date and end_date match local-time requirement for IST environment

- Test Case ID: TC-API-002
- Title: Validate local-time requirement for timestamp fields
- Preconditions:
  - The user is in India / IST / UTC+05:30.
  - A valid response has been submitted.
- Test Steps:
  1. Retrieve the persisted response.
  2. Inspect start_date and end_date.
  3. Compare their time zone context against the stated local-time requirement.
- Expected Results:
  - start_date and end_date reflect the user’s local time as required by FR-05.
  - The test must validate the local-time requirement without inventing an unsupported mandatory serialization format.
  - The confirmed discrepancy using trailing Z must be represented as a defect-analysis issue and not elevated into a broader invented format requirement.
- Test Data:
  - Required environment: IST / UTC+05:30
  - Sample-response discrepancy for review:
    - start_date: "2024-03-15T10:30:00Z"
    - end_date: "2024-03-15T10:32:00Z"
- Traceability: TS-04; FR-05; Test Environment; Task 2; Task 3; Task 5

### TC-API-003: locale is valid BCP 47 and suggestion_list matches the value entered

- Test Case ID: TC-API-003
- Title: Validate locale format and suggestion_list correctness
- Preconditions:
  - A valid user submission exists.
  - Locale is returned in the API response.
- Test Steps:
  1. Retrieve the locale value.
  2. Validate compliance with IETF BCP 47.
  3. Retrieve suggestion_list and compare to the entered value and matching suggestions.
- Expected Results:
  - locale is valid BCP 47.
  - The assignment provides en-IN as an example but does not require it as a mandatory exact value.
  - suggestion_list contains only matching suggestions for the entered/selected value.
  - For the selected value agile methodology process, only the matching suggestions should appear.
- Test Data:
  - locale examples valid under BCP 47: en, en-IN
  - Entered value: agile methodology process
  - Matching suggestions:
    - agile methodology process
    - agile methodology process testing
  - Non-matching suggestion to exclude:
    - agile methodology
- Traceability: TS-03; TS-06; FR-02; FR-05; Task 2; Task 3; Task 5

### TC-API-003A: Match-anywhere configuration enabled keeps substring matches visible

- Test Case ID: TC-API-003A
- Title: Validate FR-03 behavior when match-anywhere is enabled in backend configuration
- Preconditions:
  - The existing backend configuration is enabled for match-anywhere behavior.
  - The assignment does not specify how the configuration is enabled, so the actual supported mechanism must be used if available.
- Test Steps:
  1. Enter a value that occurs within the supplied suggestions but not at the beginning, such as methodology.
  2. Capture the visible suggestions.
  3. Validate the list against the supplied suggestion set.
- Expected Results:
  - When backend configuration enables match-anywhere behavior, all three supplied suggestions remain visible because methodology appears somewhere in each suggestion.
  - The assignment does not specify a configuration mechanism; the exact mechanism remains unspecified and must not be invented.
- Test Data:
  - Typed value: methodology
  - Available suggestions:
    - agile methodology
    - agile methodology process
    - agile methodology process testing
- Traceability: TS-08; FR-03; Task 3; Task 5

### TC-API-004: completed field is stored as Boolean, not string

- Test Case ID: TC-API-004
- Title: Validate completed field type
- Preconditions:
  - A persisted response exists.
- Test Steps:
  1. Retrieve the completed field from the response.
  2. Inspect its JSON type.
- Expected Results:
  - completed is Boolean.
  - The value true is valid.
  - The string value "true" is invalid because FR-05 requires Boolean.
- Test Data:
  - Valid completed value: true
  - Invalid completed value: "true"
- Traceability: TS-05; FR-05; Task 2; Task 3; Task 5

### TC-API-005: Negative API validation - missing required field

- Test Case ID: TC-API-005
- Title: Negative API validation for missing required field
- Preconditions:
  - The actual API request contract must be available or identified before execution.
  - A payload is prepared lacking one required property defined by FR-05.
- Test Steps:
  1. Create a request payload missing one required field, such as account_email or completed.
  2. Submit the payload through the actual API contract in use.
  3. Observe the server response.
- Expected Results:
  - The payload should be rejected or flagged as invalid according to the API contract.
  - The exact HTTP status code is not specified by the assignment and should be confirmed against the actual API contract if needed.
  - The defect should be recorded as a schema validation failure caused by a missing required field.
- Test Data:
  - Payload missing: required property such as completed or account_email
- Traceability: FR-05; Task 5; Task 3

### TC-API-006: Negative API validation - invalid completed data type

- Test Case ID: TC-API-006
- Title: Negative API validation for invalid completed data type
- Preconditions:
  - The actual API request contract must be available or identified before execution.
  - A payload is prepared with completed set to the invalid string value "true" instead of Boolean true.
- Test Steps:
  1. Create a payload in which completed is set to "true" instead of true.
  2. Submit the payload using the actual API contract.
  3. Observe the response.
- Expected Results:
  - The payload should be rejected or flagged as invalid according to the actual API contract.
  - The exact HTTP status code is not specified by the assignment and must not be invented.
  - The response should be treated as a contract-validation failure because completed must be Boolean.
- Test Data:
  - completed: "true"
- Traceability: FR-05; Task 5; Task 3

---

## 5. Traceability

This set of test cases traces to the approved requirement baseline and scenarios as follows:

- TS-01 → TC-UI-008
- TS-02 → TC-UI-007
- TS-03 → TC-API-001
- TS-04 → TC-API-002
- TS-05 → TC-API-004
- TS-06 → TC-UI-002, TC-UI-004
- TS-07 → TC-UI-003
- TS-08 → TC-API-003A
- TS-09 → TC-UI-001, TC-UI-005
- TS-10 → TC-UI-006

Requirement mapping:

- FR-01 → TC-UI-001, TC-UI-004, TC-UI-005
- FR-02 → TC-UI-002, TC-UI-003, TC-API-003
- FR-03 → TC-API-003A
- FR-04 → TC-UI-005, TC-UI-007, TC-UI-008
- FR-05 → TC-API-001, TC-API-002, TC-API-003, TC-API-004, TC-API-005, TC-API-006

Task mapping:

- Task 2 → TC-API-002, TC-API-004, TC-API-003
- Task 3 → All test cases in this document
- Task 4 → TC-UI-001 through TC-UI-008
- Task 5 → TC-API-001 through TC-API-006

---

## 6. Notes on Ambiguity Preservation

This document intentionally preserves ambiguity where the assignment does not specify exact behavior:

- API endpoint and request payload structure remain unspecified.
- Exact invalid-input criteria remain unspecified.
- Exact Escape semantics remain unspecified.
- Exact local timestamp serialization remains unspecified beyond the local-time requirement.
- Whether a locale region subtag is mandatory remains unspecified.
- Exact focus order remains unspecified.

These limitations are documented in the relevant tests rather than silently converted into assumptions.
