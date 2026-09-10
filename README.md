# SDET Practical Assignment

## 1. Project Overview

This project is the SDET practical assignment for validating the autocomplete form workflow using approved requirement-driven automation. It covers browser-based UI automation and the planned API validation scope for the form response contract and persistence behavior.

## 2. Technology Stack

- Playwright
- Modern JavaScript
- Node.js
- Dependency from package.json: @playwright/test

## 3. Project Structure

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
playwright.config.js
```

This structure reflects the approved architecture. The working implementation includes the current Page Object and Playwright configuration, while the UI test directory and API test directory are part of the approved project layout to be populated according to the assignment requirements.

## 4. Environment

Assignment-specified environment:

- Browser: Chrome on Windows 10
- Language: English
- Location: India
- Time zone: IST / UTC+05:30
- Locale: en-IN
- Timezone ID: Asia/Kolkata
- Form URL: https://test.com/autocomplete-form

The Playwright configuration uses Chromium / Desktop Chrome to represent the required Chrome browser family while keeping execution within the current environment constraints.

## 5. Setup

Install the required Node.js dependencies:

```bash
npm install
```

Install the required Playwright browser binaries:

```bash
npx playwright install --with-deps chromium
```

## 6. How to Run Tests

The project currently defines the following npm scripts in package.json:

```bash
npm test
npm run test:ui
npm run test:api
```

These commands are available from the approved package manifest. The current project state is limited to the implemented UI scaffolding and Playwright configuration; API automation is planned rather than implemented.

## 7. UI Automation

The UI automation follows the approved Page Object Model approach.

Current responsibilities of the Page Object include:

- locating the autocomplete form elements using the approved selectors
- entering data into the input field
- reading visible suggestion values
- selecting a suggestion
- clicking Next
- reading success and error message content
- exposing keyboard actions such as Tab, Enter, and Escape

Current UI test coverage implemented in the approved project includes the valid text-entry, suggestion filtering, no-match filtering, and suggestion-selection scenarios. Escape and invalid-input scenarios are currently marked as unresolved/fixme because the assignment does not define their exact behavior or invalid-input condition.

## 8. API Automation

The approved API validation scope is focused on the FR-05 response contract and includes:

- response schema validation
- required property presence
- correct data types
- Boolean completed
- timestamp validation in local time
- locale validation using BCP 47 format
- suggestion_list matching behavior
- negative validation scenarios for missing or invalid data

The assignment does not specify the endpoint, request payload, authentication mechanism, or exact status-code behavior for these API validations, so these details are intentionally not assumed.

## 9. Known Assignment Ambiguities

The following requirement details remain unresolved by the approved assignment baseline and must be treated explicitly rather than assumed:

- exact invalid-input condition
- exact Escape behavior
- backend mechanism for enabling match-anywhere behavior
- API endpoint/request contract
- exact timestamp serialization expectation beyond local time
- exact focus order for keyboard navigation

## 10. Defects Identified

The approved defect analysis confirmed the following discrepancies in the provided sample API response:

- start_date is represented as UTC (`Z`) even though the requirement specifies user local time
- end_date is represented as UTC (`Z`) even though the requirement specifies user local time
- completed is returned as the string "true" instead of Boolean `true`

No additional defects were confirmed in the approved defect analysis.

## 11. AI Usage

The project followed a controlled AI-assisted workflow documented in the approved reflection notes. GitHub Copilot was used to generate and refine documentation and automation artifacts, but the outputs were reviewed and corrected by the human reviewer to keep them aligned with the assignment source of truth and approved requirements.

## 12. Notes

Undocumented behavior and requirements are not assumed. Unresolved ambiguities are tracked explicitly so the implementation remains traceable to the approved assignment baseline rather than to invented assumptions.
