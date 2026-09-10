# Requirement Analysis

## 1. Purpose and Scope

This document records the approved requirements baseline for the SDET Practical Assignment using only the explicit assignment requirements and the verified corrections from the analysis/verification phase.

The purpose of this document is to:

- preserve the original assignment intent and terminology;
- identify confirmed requirements versus confirmed discrepancies;
- identify ambiguities and missing information without inventing solutions;
- establish a traceable basis for the later documentation and implementation stages.

This document does not add business rules, invented API endpoints, invented UI behavior, invented response fields, or additional assumptions.

Important distinction:

- Confirmed requirement: explicitly stated in the assignment baseline.
- Confirmed discrepancy: explicit mismatch between provided sample API response and the required contract.
- Ambiguity / Missing Information: not specified by the baseline and therefore not assumed.
- Example / Reference value: illustrative value used in the requirement, not a mandatory exact value.
- Implementation consideration: technical choice used only to enable the explicitly stated requirements without changing the requirements.

---

## 2. Technology / Environment Requirements

Implementation technology selected for this assignment:

- Playwright
- Modern JavaScript
- Node.js

Environment / test context specified by the assignment:

- Browser: Chrome on Windows 10
- Language configured as English
- Login user: <TEST_EMAIL>
- User location: India
- Local timezone: IST, UTC+05:30

Relevant scope note:

- Login and admin configuration are outside the scope of the assignment.
- The autocomplete form is assumed to be available at https://test.com/autocomplete-form after login.

---

## 3. Functional Requirements

### FR-01: Text Input

Requirement:

- Users can type any response in the text field.
- Users can click/tap a suggestion list item to select it.

Expected behavior:

- The input accepts free-form text.
- A suggestion item, when selected, populates the input field.

Testable behavior:

- Type arbitrary text.
- Select a suggestion and confirm the selected text is entered into the field.

Required test coverage:

- Text entry path.
- Suggestion selection path.

Ambiguities / missing information:

- No exact styling or special interaction behavior is specified beyond typing and click/tap selection.

---

### FR-02: Suggestion Filtering — Prefix Match Default

Requirement:

- If typed characters match the initial characters of a suggestion, that suggestion remains visible.
- If typed characters do not match the beginning of any suggestion, those suggestions disappear from the list.

Expected behavior:

- Suggestions are filtered by prefix match by default.

Testable behavior:

- Enter a prefix that matches the beginning of one or more suggestions.
- Enter a value that matches no suggestion prefix and verify suggestions disappear.

Required test coverage:

- Prefix-match positive case.
- Prefix-match negative case.

Ambiguities / missing information:

- No explicit case normalization rule is defined.
- No exact value trimming rule is defined.

---

### FR-03: Suggestion Filtering — Match Anywhere Configurable

Requirement:

- When enabled in backend configuration, suggestions remain visible if they contain the typed text anywhere in the string.

Example:

- Typing "agile method" keeps all three suggestions visible because all contain that substring.

Expected behavior:

- If configured as match-anywhere, substring matching applies instead of the default prefix-only behavior.

Testable behavior:

- Validate that, when enabled, a typed substring visible anywhere in the suggestion string keeps matching suggestions visible.

Required test coverage:

- Match-anywhere enabled scenario.
- Default prefix-only scenario when not enabled.

Ambiguities / missing information:

- Backend configuration mechanism is not specified.
- No API or UI control for toggling this behavior is specified.

---

### FR-04: Form Submission

Requirement:

- Selecting the Next button sends a REST API call to persist the response.
- A successful submission returns HTTP status code 200.
- On success, a success message is displayed.
- On invalid input, an error message is displayed.

Expected behavior:

- Submit valid input and receive success.
- Submit invalid input and receive error.

Testable behavior:

- Trigger form submission.
- Validate HTTP response status and displayed success/error message.

Required test coverage:

- Valid submission success path.
- Invalid-input error path.

Ambiguities / missing information:

- Exact API endpoint is not specified.
- Exact API request structure is not specified.
- Exact invalid-input criteria are not specified.

---

### FR-05: Backend Data Contract

Requirement:

The persisted response must contain the following properties:

- account_id — ID of the user account that completed the form
- account_email — Email of the user account that completed the form
- start_date — Timestamp in the user's local time when they reached the form
- end_date — Timestamp in the user's local time when they selected Next
- locale — IETF BCP 47 format of the user's locale (example: en-IN)
- text — Text given by the user in the input field
- suggestion_list — Comma-separated string of suggestions matching the value entered/selected
- completed — Boolean representing the status of form response upload

Expected behavior:

- API response includes all required properties.
- Values match the semantic meaning described in the requirement.

Testable behavior:

- Validate property presence.
- Validate value semantics and data types.
- Validate locale format.
- Validate suggestion_list contents relative to the entered or selected value.
- Validate completed is Boolean.

Required test coverage:

- Schema validation.
- Type validation.
- Timestamp validation relative to local time requirement.
- Locale format validation.
- suggestion_list matching validation.
- Negative API test cases for missing/invalid data.

Ambiguities / missing information:

- No endpoint is provided.
- Exact timestamp serialization format beyond “local time” is not specified.
- Whether a region subtag is mandatory in locale is not explicitly stated.

---

## 4. Supplied UI Structure and Explicit Selectors

The assignment explicitly provides the HTML structure with these selectors:

- #input-field
- .suggestions
- #next-button
- .error-message
- .success-container

The supplied structure also includes:

- a title
- a text input field
- a suggestion list
- a Next button
- an error message element
- a success container element

This means the selector definitions are explicit and are not missing from the requirement baseline.

What remains unspecified:

- exact focus order
- exact state transitions for showing/hiding success/error results
- exact Escape behavior
- exact Enter behavior beyond the explicit submit requirement

---

## 5. Task-by-Task Assignment Requirements

### Task 1 — Top 10 Test Scenarios

Objective:

- Identify the top 10 test scenarios ranked from highest to lowest risk.

Required output:

- A ranked list of 10 scenarios.
- Each scenario includes:
  - one-line summary
  - risk level: Critical / High / Medium / Low
  - one sentence explaining the ranking rationale

Dependency:

- Directly derived from the assignment requirement baseline and used to support later test-case design.

---

### Task 2 — API Response Defect Analysis

Objective:

- Compare the supplied sample API response with FR-05 and identify every discrepancy.

Required output:

- Field-by-field discrepancy analysis.

Dependency:

- Depends on FR-05 and the supplied sample response.

---

### Task 3 — Detailed Test Cases

Objective:

- Write detailed test cases for the key scenarios.

Required output:

- At least 8 detailed test cases.
- Cover both UI and API behavior.
- Include:
  - Test Case ID
  - Title
  - Preconditions
  - Test Steps
  - Expected Results
  - Test Data

Dependency:

- Depends on the scenario set from Task 1 and the API defect analysis from Task 2.

---

### Task 4 — Playwright Test Scripts

Objective:

- Create executable Playwright tests covering the required UI interactions.

Required output:

- Playwright scripts that include:
  - Tab Navigation
  - Keyboard Interaction using Enter to submit
  - Escape to clear/close
  - Suggestion Filtering
  - Suggestion Selection
  - Form Submission
  - Success/Error behavior
  - Page Object Model or equivalent design pattern
- README with setup instructions, dependencies, and run commands

Dependency:

- Depends on FR-01 through FR-05 and Task 3.

Important requirement clarification:

- Enter-to-submit is an explicit requirement and is not treated as ambiguous at the requirement level.
- Escape behavior remains ambiguous because the assignment does not define its exact semantics.

---

### Task 5 — API Automation

Objective:

- Automate response validation against the FR-05 contract.

Required output:

- API test scripts validating:
  - schema
  - field presence
  - data types, including Boolean for completed
  - timestamp validity consistent with local-time requirement
  - locale validity according to IETF BCP 47
  - suggestion_list contents relative to matching suggestions
  - at least 2 negative cases such as missing fields and invalid data

Dependency:

- Depends on FR-05 and the defect-analysis output.

---

### Task 6 — AI Usage Reflection

Objective:

- Document how AI tools were used during the assignment and how outputs were corrected or improved.

Required output:

- Tools Used
- Usage Areas
- Modifications Made
- AI Limitations

Dependency:

- Depends on all earlier assignment work.

---

## 6. Required Submission Structure

The assignment requires the repository to have the following structure exactly:

- README.md
- docs/
  - 1-requirement-analysis.md
  - 2-test-scenarios.md
  - 3-defect-identification.md
  - 4-test-cases.md
  - 7-ai-reflection.md
  - 8-architecture-discussion.md
- tests/
  - ui/
    - pages/
    - tests/
    - config/
  - api/
    - tests/
- package.json

No additional required directories or files are introduced by the baseline.

This requirement does not permit renaming required files or directories.

---

## 7. UI Automation Requirements

The UI automation scope explicitly required by the assignment includes:

- Tab Navigation
- Enter key submission
- Escape clear/close behavior
- Suggestion Filtering
- Suggestion Selection
- Form Submission
- Success/Error behavior
- Page Object Model or equivalent design pattern

Explicit requirement status:

- Enter-to-submit: explicit requirement.
- Escape behavior: ambiguous because exact semantics are not specified.
- Suggestion filtering: explicit from FR-02 and FR-03.
- Suggestion selection: explicit from FR-01.
- Form submission: explicit from FR-04.
- Success/error message behavior: explicit from FR-04.
- Page Object Model: explicit requirement for code structure design.

What is not required by the assignments beyond the explicit list:

- no extra UI patterns or flows
- no invented user journeys
- no invented observable behaviors beyond the defined requirement set

---

## 8. API Automation Requirements

The assignment requires API automation to validate the following:

- response schema matches FR-05
- required properties are present
- data types are correct, including Boolean for completed
- local-time timestamp requirement is checked against the stated environment
- locale is valid IETF BCP 47
- suggestion_list contains only matching suggestions and not all suggestions unless they actually match the entered or selected value
- at least 2 negative tests (for example: missing fields or invalid data)

Important constraints:

- No API endpoint is specified by the baseline.
- No request payload is specified by the baseline.
- No negative-test HTTP status code is specified by the baseline.
- No invented API contract may be introduced.

---

## 9. API Response Comparison Rules

The comparison against the sample API response must use the following rules:

1. Use FR-05 as the source of truth for required properties and semantics.
2. Treat examples as examples, not mandatory exact values, unless the requirement explicitly says otherwise.
3. Distinguish between:
   - confirmed requirement;
   - confirmed discrepancy;
   - example/reference value;
   - ambiguity/missing information.
4. Do not classify a value as defective solely because it differs from an example unless the requirement explicitly requires the exact value or format.
5. Do not invent additional timestamp format requirements beyond the explicit local-time requirement.
6. Do not normalize or convert invalid values before validation.

---

## 10. Confirmed API Discrepancies

The following discrepancies are confirmed based on the explicit assignment requirements and the approved verification:

### 1. start_date

- Actual value: "2024-03-15T10:30:00Z"
- Requirement: timestamp in the user's local time when they reached the form
- Confirmed discrepancy: the trailing Z indicates UTC, while the test environment states the user is in IST / UTC+05:30
- Reason: the value is not in the user's local time as stated by the environment

### 2. end_date

- Actual value: "2024-03-15T10:32:00Z"
- Requirement: timestamp in the user's local time when they selected Next
- Confirmed discrepancy: the trailing Z indicates UTC, while the test environment states the user is in IST / UTC+05:30
- Reason: the value is not in the user's local time as stated by the environment

### 3. completed

- Actual value: "true"
- Requirement: completed must be Boolean
- Confirmed discrepancy: the value is a string, not a Boolean
- Reason: FR-05 explicitly requires completed to be Boolean

### Explicitly not confirmed as defects

- locale = "en" is not a confirmed discrepancy.
  - Reason: "en" is a valid IETF BCP 47 language tag.
  - Example/reference value: "en-IN" is a reference example, not a mandatory exact value.
- suggestion_list is not a confirmed discrepancy for the selected value "agile methodology" under default prefix matching.
  - Reason: all three supplied suggestions begin with "agile methodology".
  - The UI requirement FR-02 states that such suggestions should remain visible.
- account_id = "98765" is not a confirmed discrepancy.
  - Reason: FR-05 defines account_id as an account ID but does not explicitly specify whether it must be numeric or string.

---

## 11. Ambiguities and Missing Information

The following items are not specified by the explicit requirements and therefore remain ambiguities or missing information rather than assumptions:

- API endpoint is not specified.
- API request structure is not specified.
- Backend configuration mechanism for enabling match-anywhere behavior in FR-03 is not specified.
- Exact Escape behavior is not specified; the assignment says "Escape to clear/close" but does not define whether this means clearing input, closing suggestions, or both.
- Exact invalid-input criteria are not specified.
- Exact serialization details for "local time" are not explicitly specified beyond the local-time requirement.
- Whether a locale region subtag is mandatory is not explicitly specified.
- Exact focus order is not specified.
- Exact state transitions for success/error message visibility are not fully specified.

---

## 12. Requirements That Must Not Be Assumed

The following must not be assumed or invented during this assignment:

- no new requirements may be added
- no requirements may be removed or modified
- no API endpoint may be invented
- no API request payload may be invented
- no response fields may be invented
- no business rules may be invented
- no UI behavior may be invented
- no exact Escape semantics may be invented
- no exact negative-test HTTP status codes may be invented
- no additional timestamp format requirement may be invented
- no example value may be treated as a mandatory exact requirement unless the requirement explicitly states that it is mandatory

This rule is essential to maintaining the integrity of the assigned requirements baseline.

---

## 13. Traceability / Requirement-to-Test-Area Mapping

The requirements map to the required analysis, testing, and automation areas as follows:

- Form requirement + HTML structure
  - Source: assignment baseline
  - Test area: UI analysis and UI automation

- FR-01
  - Source: functional requirement
  - Test area: UI behavior / suggestion selection / text input

- FR-02
  - Source: functional requirement
  - Test area: UI filtering / prefix match

- FR-03
  - Source: functional requirement
  - Test area: UI filtering / configurable substring matching

- FR-04
  - Source: functional requirement
  - Test area: UI submission / success-error behavior / API call validation

- FR-05
  - Source: functional requirement
  - Test area: API schema validation / data contract validation

- Test Environment
  - Source: assignment baseline
  - Test area: timezone, locale, browser, user configuration

- Task 1
  - Source: assignment task
  - Output area: test scenarios document

- Task 2
  - Source: assignment task
  - Output area: defect identification document

- Task 3
  - Source: assignment task
  - Output area: detailed test cases document

- Task 4
  - Source: assignment task
  - Output area: Playwright UI test scripts + README

- Task 5
  - Source: assignment task
  - Output area: API automation tests

- Task 6
  - Source: assignment task
  - Output area: AI usage reflection document

- Submission Structure
  - Source: assignment baseline
  - Output area: repository structure compliance

- AI Prompt/Transcript requirement
  - Source: assignment baseline
  - Output area: prompt file(s) and complete JSON transcript submission

---

## Summary

The approved baseline establishes a clear set of explicit requirements and a small set of confirmed discrepancies. The most important confirmed defects in the sample API response are:

- `start_date` is not in the user’s local time.
- `end_date` is not in the user’s local time.
- `completed` is a string instead of a Boolean.

The following items are not confirmed defects under the explicit baseline:

- locale = "en"
- suggestion_list for the selected value "agile methodology"
- account_id = "98765"
- missing or unspecified UI selectors
- Enter-to-submit ambiguity at the requirement level

The remaining gaps are treated as ambiguities or missing information and are not converted into assumptions.
