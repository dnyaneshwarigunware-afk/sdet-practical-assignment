# Test Scenarios

## 1. Scope and Approach

This document applies Task 1 of the assignment: identify the top 10 test scenarios ranked from highest to lowest risk using the approved requirement analysis as the consolidated baseline.

The scenarios were prioritized by:

- risk of blocking form completion,
- risk of persisting incorrect user data,
- risk of violating the FR-05 data contract,
- risk of incorrect suggestion behavior,
- risk of incorrect submission behavior,
- impact of failure on the user experience and data integrity.

The ranking intentionally follows risk and impact rather than the order in which the requirements appear in the baseline.

---

## 2. Top 10 Risk-Ranked Test Scenarios

| Rank | Scenario ID | Scenario | Risk | Rationale | Traceability |
|---|---|---|---|---|---|
| 1 | TS-01 | Invalid user input submitted through the form should trigger the required error behavior. | Critical | This scenario directly threatens correct form completion because invalid input must display the required error message; the assignment does not define additional persistence behavior for invalid input. | FR-04; Task 3; Task 4 |
| 2 | TS-02 | Valid form submission should persist the response and return HTTP 200, followed by display of the success message. | Critical | A successful submission is the primary completion path; if it fails, the user cannot complete the business flow and the response may be lost or incorrectly recorded. | FR-04; FR-05; Task 3; Task 4; Task 5 |
| 3 | TS-03 | Submitted response should satisfy the FR-05 data contract for all required properties and values. | Critical | This scenario addresses the backend contract directly; incorrect fields, wrong types, or missing values create a high risk of bad data being stored and later misused. | FR-05; Task 2; Task 3; Task 5 |
| 4 | TS-04 | start_date and end_date should represent the user's local time for the stated IST / UTC+05:30 environment. | Critical | Timestamp mismatch is a direct contract failure and can cause incorrect user-session timing and audit issues; the requirement is to reflect local time, without inventing an additional mandatory serialization format. | FR-05; Test Environment; Task 2; Task 3; Task 5 |
| 5 | TS-05 | completed must be stored as a Boolean, not a string, in the persisted response. | Critical | This is a confirmed data-contract violation if returned as a string; it directly breaks the required type contract and can affect downstream processing. | FR-05; Task 2; Task 3; Task 5 |
| 6 | TS-06 | Default suggestion filtering should keep only suggestions that match the beginning of the typed value and hide others. | High | Incorrect filtering undermines user guidance and can cause the user to select values that do not align with the expected suggestion behavior or the entered text. | FR-02; FR-01; Task 3; Task 4 |
| 7 | TS-07 | No-match input should remove all suggestions from the list when no suggestion begins with the typed value. | High | This scenario verifies the negative filtering path; if suggestions remain visible when they should disappear, the user can be misled and select invalid input. | FR-02; Task 3; Task 4 |
| 8 | TS-08 | Match-anywhere behavior should only appear when backend configuration enables it; otherwise default prefix filtering remains in force. | High | This requirement is explicitly conditional and represents a high-risk configuration-dependent behavior that can result in incorrect suggestion visibility if misapplied. | FR-03; FR-02; Task 3; Task 4 |
| 9 | TS-09 | Keyboard navigation and Enter-to-submit should work with text entry and suggestion selection as required by the form interaction. | High | This scenario affects practical flow completion because the assignment explicitly requires Tab navigation and Enter-to-submit, and the interaction must function correctly with text entry and suggestion selection. | FR-01; FR-04; Task 4; Task 3 |
| 10 | TS-10 | Escape behavior should satisfy the explicit requirement to clear or close the active suggestion state as required by the assignment, while preserving the unspecified exact semantics. | Medium | The requirement explicitly includes Escape behavior, but the exact semantics are not defined; this scenario is important for interaction correctness but is lower-priority than direct contract and submission failures. | Task 4; Task 3; Ambiguity / Missing Information |

---

## 3. Coverage Summary

| Requirement / Task | Covered By |
|---|---|
| FR-01: Text input and suggestion selection | TS-06, TS-07, TS-09 |
| FR-02: Prefix filtering default behavior | TS-06, TS-07 |
| FR-03: Match-anywhere configurable behavior | TS-08 |
| FR-04: Form submission, HTTP 200, success/error message | TS-01, TS-02, TS-09 |
| FR-05: Response/data contract | TS-03, TS-04, TS-05 |
| Test Environment: Chrome, English, IST, <TEST_EMAIL> | TS-04, TS-03 |
| Task 1: Top 10 scenarios | All scenarios |
| Task 2: API response defect analysis | TS-03, TS-04, TS-05 |
| Task 3: Detailed test cases | All scenarios |
| Task 4: Playwright UI scripts | TS-06, TS-07, TS-08, TS-09, TS-10 |
| Task 5: API automation | TS-03, TS-04, TS-05 |
| Task 6: AI reflection | Not directly covered in this scenario set |
| Submission structure | Not directly covered in this scenario set |

---

## 4. Risk Prioritization Notes

The highest-priority scenarios were chosen based on the risk of incorrect user data, failed form completion, and contract violations rather than on the order in which requirements appear in the baseline.

The most severe risks focus on:

- invalid or incorrect persisted data,
- invalid HTTP success condition and resulting success/error state,
- incorrect timestamps in local time,
- a wrongly typed Boolean `completed` value,
- failures in suggestion filtering and submission flow that prevent users from completing the form correctly.

Lower-risk scenarios still matter, but they have less direct impact on persisted data integrity or the functional completion of the form itself. In particular, keyboard and Escape behavior are intentionally ranked below data-contract and submission risks because the explicit baseline makes the core contract and completion path more critical to successful operation.
