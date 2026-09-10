# Architecture Discussion

## 1. Purpose

This document defines the proposed automation architecture for the assignment before implementation begins.

The architecture is derived from the approved requirements, scenarios, defects, and test cases captured in the approved source documents:

- docs/1-requirement-analysis.md
- docs/2-test-scenarios.md
- docs/3-defect-identification.md
- docs/4-test-cases.md

The purpose is to describe the intended automation structure and responsibilities without adding new requirements or unsupported behavior.

---

## 2. Technology Stack

The implementation stack selected for this assignment is:

- Playwright
- Modern JavaScript
- Node.js

This stack is appropriate for the assignment because the approved requirements explicitly call for Playwright-based automation and the project is designed around browser automation and API validation using a JavaScript/Node.js environment.

No additional framework or language is introduced by the assignment baseline or by the approved documents.

---

## 3. Proposed Project Structure

The required repository structure is the baseline for the project layout:

```text
README.md
docs/
  1-requirement-analysis.md
  2-test-scenarios.md
  3-defect-identification.md
  4-test-cases.md
  7-ai-reflection.md
  8-architecture-discussion.md
tests/
  ui/
    pages/
    tests/
    config/
  api/
    tests/
package.json
```

This structure is the required submission baseline. The automation-related directories are responsible for the following:

- tests/ui/pages/: page-level abstraction for the autocomplete form and UI interactions
- tests/ui/tests/: Playwright UI test scripts aligned to the approved scenarios and test cases
- tests/ui/config/: browser and environment configuration relevant to the assignment context
- tests/api/tests/: API validation tests aligned to FR-05 and the Task 5 requirements
- docs/: approved requirements, scenario, defect, test-case, and architecture documentation
- package.json: Node.js project metadata and required dependency information when implementation begins

No additional mandatory directories or files are introduced by the approved assignment documents.

---

## 4. UI Automation Architecture

The UI automation architecture should follow the required Page Object Model or equivalent maintainable structure, as required by the assignment.

The UI automation design must support the approved requirement and scenario coverage, including:

- text entry and free-form input
- default prefix filtering
- no-match filtering
- suggestion selection
- keyboard interaction
- Tab navigation
- Enter-to-submit
- Escape behavior with the assignment’s unresolved exact semantics preserved
- valid submission and success message handling
- invalid input and error message handling

The known selectors explicitly supplied by the assignment and approved requirement analysis are:

- #input-field
- .suggestions
- #next-button
- .error-message
- .success-container

The Page Object layer should own page-level responsibilities such as:

- locating the form elements using the approved selectors
- interacting with the input field
- interacting with suggestion items
- initiating form submission
- reading the success/error container state

The UI test scripts should own:

- scenario intent
- assertions tied to approved requirements and test cases
- test data for the approved values and environments
- validation of approval-driven user flows

The browser/environment configuration should align to the assignment context:

- Chrome
- Windows 10
- English language
- India
- IST / UTC+05:30
- login account identity provided by the assignment context

No additional selectors or UI behavior are introduced here beyond the approved set.

---

## 5. API Automation Architecture

The API automation layer should be organized under tests/api/tests/ and should support the approved Task 5 requirements.

API validation must cover the approved contract in FR-05, including:

- response schema
- required properties
- correct data types
- Boolean completed
- timestamp validation against the local-time requirement
- IETF BCP 47 locale validation
- suggestion_list matching behavior
- negative API validation

The assignment documents explicitly prohibit inventing the following details:

- API endpoint URLs
- API request payloads
- authentication mechanisms
- headers
- HTTP status codes for negative cases
- API library selection beyond the general stack decision

These are implementation-time dependencies or unknowns that must be identified when actual API execution is prepared, but they are not allowed to be introduced as new requirements.

---

## 6. UI/API Separation

UI and API testing must remain separate concerns.

The separation should be as follows:

- tests/ui/: browser-based user interaction and form behavior validation
- tests/api/: response contract, schema, type, and negative validation checks

This separation keeps user-interaction validation distinct from data-contract validation and prevents the architecture from mixing UI assumptions with API contract assumptions.

The design should avoid duplication of the same validation logic in both areas unless a specific requirement requires both UI and API coverage of the same behavior.

---

## 7. Page Object Model Responsibilities

The Page Object layer should be responsible for page-level behavior and UI access, while the test scripts remain responsible for business/test intent.

Page Object responsibilities should include:

- locating and exposing the known form elements
- entering values into the input field
- selecting suggestions from the visible suggestion list
- clicking the Next button
- reading the success and error message states
- exposing reusable page-level actions tied to the assignment requirements

Test script responsibilities should include:

- applying approved test data
- exercising the test scenario
- asserting the expected result based on the approved requirements and test cases
- grouping scenario-specific validations without adding unsupported assumptions

This separation keeps the tests readable and maintainable while preserving traceability to the approved requirements.

---

## 8. Test Data and Environment Handling

The automation design must represent the assignment environment without inventing unsupported configuration practices.

The known environment context is:

- Chrome
- Windows 10
- English language
- India
- IST / UTC+05:30
- Account email: <TEST_EMAIL>

The project should treat these values as the known environment context for test design and validation.

Important constraints:

- Credentials or login details should not be exposed in sample architecture examples.
- No environment variable or configuration mechanism is specified by the assignment.
- If configuration details are not provided by the approved documents, they should be explicitly treated as implementation decisions to be resolved later, not as assignment requirements.

---

## 9. Requirement-to-Automation Traceability

The architecture supports the approved requirements and tasks as follows:

- FR-01: UI text entry and suggestion selection
- FR-02: UI prefix filtering
- FR-03: UI/API validation for match-anywhere behavior when configured
- FR-04: UI submission and success/error behavior
- FR-05: API response schema and contract validation

The architecture also supports the approved task structure:

- Task 4: UI Playwright automation
- Task 5: API automation

The design is aligned to the approved scenarios and test cases rather than inventing additional flows or validation rules.

---

## 10. Defect Validation Architecture

The automation design must support validation of the confirmed discrepancies documented in docs/3-defect-identification.md:

1. start_date local-time discrepancy
2. end_date local-time discrepancy
3. completed Boolean discrepancy

The architecture should allow the tests to validate those discrepancies without converting other approved non-defects into defects.

Specifically:

- start_date and end_date should be validated against the local-time requirement for the IST environment
- completed should be validated as a Boolean, not a string
- no other documented non-defects are treated as defects within the automation design

---

## 11. Handling Explicit Ambiguities

The automation architecture must not silently resolve the following explicit ambiguities from the approved requirements:

- exact API endpoint and request contract are unspecified
- exact invalid-input criteria are unspecified
- exact Escape behavior is unspecified beyond the requirement to clear/close
- backend configuration mechanism for match-anywhere is unspecified
- exact timestamp serialization details are not to be invented
- locale region subtag is not mandatory merely because en-IN appears as an example
- exact focus order is not specified

These remain constraints for the implementation and must be preserved in the automation design.

---

## 12. Design Principles

The architecture should follow the approved assignment constraints and documented project needs, including:

- traceability to approved requirements and test cases
- minimal implementation consistent with the assignment
- reuse through Page Object organization where appropriate
- separation of UI and API responsibilities
- maintainability and readability
- no invented behavior
- no unnecessary framework complexity
- explicit handling of ambiguity

These principles are design aids and should not be treated as new requirement sources.

---

## 13. Planned Automation File Responsibilities

The following table describes the planned responsibility of the automation-related files to be created after architecture approval. This is a plan only and not implemented functionality.

| Planned Area | Responsibility |
|---|---|
| tests/ui/pages/ | Page Object classes for the autocomplete form and reusable interactions |
| tests/ui/tests/ | Playwright UI test scripts for approved scenarios and test cases |
| tests/ui/config/ | Browser and environment configuration needed for the assignment context |
| tests/api/tests/ | API validation tests aligned to FR-05 and Task 5 |
| package.json | Node.js project metadata, dependency declaration, and scripts when implementation begins |
| README.md | Setup and execution guidance when implementation begins |

This table is a future implementation plan, not a statement that these files already exist or that additional requirements have been added.

---

## 14. Implementation Sequence

This architecture discussion describes the planned implementation sequence after approval:

1. Review architecture
2. Create package.json
3. Install or define required dependencies
4. Create UI Page Objects
5. Review
6. Create UI tests
7. Review
8. Create API tests
9. Review
10. Create or update README
11. Execute tests
12. Analyze failures/defects
13. Final review

This sequence is a future plan and is not being executed in this document.

---

## 15. Architecture Constraints

The architecture is subject to the following constraints:

- Approved assignment documents are the source of truth.
- No new requirements may be introduced.
- No unsupported behavior may be assumed.
- No API details may be invented.
- No unnecessary files should be created.
- Architecture must support the exact approved test cases.
- Implementation must happen only after architecture review and approval.

---

The architecture discussion remains intentionally constrained to the approved assignment documents and does not add unsupported implementation requirements.
