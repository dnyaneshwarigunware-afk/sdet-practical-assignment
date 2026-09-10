# AI Usage Reflection

## 1. AI Usage Overview

AI assistance was used during the assignment to support the documentation and analysis stages, including:

- requirement analysis
- scenario identification and prioritization
- defect analysis
- detailed test case design
- architecture discussion

The workflow was incremental and controlled. AI-generated output was reviewed against the assignment requirements and approved project documents before it was accepted. The purpose was to improve productivity without allowing unsupported assumptions or invented behavior to be treated as requirements.

No implementation or execution work was claimed as complete during these stages.

---

## 2. Tools Used

The AI tool used in this workflow was:

- GitHub Copilot

No additional AI tool is claimed unless it was explicitly present in the actual assignment workflow and project history.

---

## 3. Usage Areas

AI was used during the completed documentation stages to help with:

- analyzing the assignment requirements and identifying explicit requirements versus ambiguities
- drafting the initial requirement-analysis document
- identifying and ranking the top 10 risk scenarios
- drafting the defect-identification analysis based on the sample API response and FR-05
- generating detailed test-case content for approved scenarios
- proposing an automation architecture consistent with the approved requirements and constraints
- helping maintain traceability between requirements, scenarios, defects, and test cases

The workflow was intentionally staged. AI was instructed to work incrementally rather than generating the entire project at once, and each stage was reviewed before proceeding.

---

## 4. Human Review and Validation

Human review remained the governing step throughout the assignment.

AI-generated content was checked against the approved source documents and the original assignment requirements before being accepted. When AI output introduced unsupported assumptions or misinterpreted requirements, the output was corrected.

Examples from the actual review process include:

- locale = "en" was initially treated incorrectly as a defect even though "en" is a valid IETF BCP 47 language tag and "en-IN" was only provided as an example reference value.
- suggestion_list containing all three suggestions for agile methodology was initially treated incorrectly as a defect even though all three supplied suggestions begin with that value under the default prefix-matching requirement.
- account_id = "98765" was initially treated as a type defect even though the assignment requires the field but does not specify whether the value must be string or number.
- exact UI selectors were initially treated as insufficiently specified even though selectors such as #input-field, .suggestions, #next-button, .error-message, and .success-container were explicitly provided in the assignment HTML.
- Enter-to-submit was initially treated as ambiguous even though Task 4 explicitly requires Enter to submit.
- Escape behavior was preserved as an ambiguity because the assignment states "Escape to clear/close" without defining the exact UI state change.

These corrections were necessary because the assignment rules explicitly prohibit inventing requirements, business rules, or behavior when the baseline does not specify them.

---

## 5. Modifications Made

The following are specific changes made to AI-generated output during this workflow and the reason each change was necessary.

### Modification 1 — Locale defect interpretation

AI initially treated:

- locale: "en"

as a defect because the assignment environment mentions en-IN.

This was corrected because:

- "en" is a valid IETF BCP 47 language tag.
- "en-IN" is an example/reference value, not an explicit mandatory value.
- The assignment does not require the region subtag to be present unless the requirement explicitly says so.

Therefore, the locale value "en" was not kept as a confirmed defect.

### Modification 2 — suggestion_list defect interpretation

AI initially treated the sample suggestion_list value:

- agile methodology, agile methodology process, agile methodology process testing

as a defect.

This was corrected because under FR-02 default prefix matching, all three supplied suggestions begin with agile methodology. The assignment specifically states that matching suggestions remain visible under prefix behavior, and the test-case documents were corrected to validate the matching behavior rather than invent a defect.

### Modification 3 — account_id type interpretation

AI initially treated:

- account_id: "98765"

as a type defect.

This was corrected because the assignment defines account_id as an account ID but does not explicitly require whether it must be a string or a number. Without that requirement, the field cannot be treated as a confirmed defect on type grounds.

### Modification 4 — timestamp discrepancy retention

The defect-analysis work retained the timestamp discrepancies because the sample response uses UTC timestamps ending in Z while FR-05 requires local-time timestamps and the environment identifies the user as in IST / UTC+05:30.

This was kept as a confirmed discrepancy because the issue is grounded in the stated requirement and environment, without inventing a new timestamp serialization rule beyond the requirement that the value must be in the user’s local time.

### Modification 5 — completed Boolean retention

The defect analysis retained:

- "completed": "true"

as a confirmed discrepancy because FR-05 explicitly requires completed to be Boolean.

This was not changed because the requirement itself is explicit and the observed value is a string rather than a Boolean.

### Modification 6 — test-case corrections and ambiguity preservation

The test-case review corrected several issues where AI-generated tests were too broad or were based on unsupported assumptions, including:

- changing the default prefix-filtering test to use a value that meaningfully differentiates the suggestions
- removing unsupported exact focus-order assertions for Tab navigation
- preserving Escape ambiguity rather than inventing exact clear/close behavior
- avoiding invented invalid-input values while still testing the required error-message path
- aligning suggestion_list checks with actual matching behavior rather than expecting only one suggestion
- ensuring FR-03 match-anywhere behavior had explicit coverage without inventing the backend configuration mechanism

These corrections were necessary to maintain alignment with the approved assignment requirements and to prevent unsupported assumptions from becoming part of the documentation.

---

## 6. AI Limitations

One concrete limitation observed during this assignment was AI’s tendency to infer a requirement from an example value rather than preserving the distinction between example and mandatory requirement.

For example:

- AI initially treated locale = "en" as a defect because the assignment example uses en-IN.
- This was incorrect because en is itself a valid IETF BCP 47 tag, and the assignment does not state that the region subtag is mandatory.

Another limitation was AI’s tendency to treat an unspecified type or unspecified behavior as a defect without enough support from the original requirements. This was evident in:

- the initial account_id type interpretation
- the initial suggestion_list defect classification
- the initial assumption that the UI selectors were missing when they were actually specified in the HTML

A third limitation was AI’s tendency to invent or assume implementation detail when the assignment is ambiguous. Examples include:

- inventing exact Escape behavior
- inventing exact invalid-input criteria
- inventing an API endpoint or request payload
- inventing exact focus order

These limitations showed why human review against the source-of-truth assignment documents was essential.

---

## 7. Controlled AI Workflow

The following staged workflow was used:

1. Assignment requirements were analyzed.
2. AI analysis was reviewed and corrected.
3. docs/1-requirement-analysis.md was approved.
4. docs/2-test-scenarios.md was generated and reviewed.
5. docs/3-defect-identification.md was created and reviewed.
6. docs/4-test-cases.md was generated and corrected.
7. docs/8-architecture-discussion.md was generated and reviewed.
8. Implementation was intentionally not performed until the documentation and architecture stages were approved.

This staged process reduced the risk of AI introducing unsupported requirements, invented behavior, or unnecessary files.

---

## 8. AI vs Human Responsibility

### AI assistance

AI was used to help with:

- organizing the requirements baseline
- proposing risk-ranked scenario coverage
- drafting documentation
- identifying possible defect areas
- proposing detailed test cases
- proposing architecture and separation of concerns

### Human responsibility

Human review was responsible for:

- validating the source requirements against the assignment baseline
- rejecting unsupported assumptions
- correcting incorrect defect classifications
- preserving ambiguities rather than solving them by invention
- checking traceability across requirements, scenarios, defects, and test cases
- controlling which files could be created or modified
- approving each stage before the next stage began

AI was an assistance tool, but it did not independently validate correctness against the assignment requirements.

---

## 9. Conclusion

AI accelerated the drafting of requirement analysis, test scenarios, defect analysis, test-case design, and architecture discussion, but the generated content required human validation against the assignment source of truth.

The controlled, incremental workflow helped prevent:

- requirement drift
- invented behavior
- unnecessary files
- unsupported API assumptions

This reflection documents the actual role of AI in the assignment: a productivity aid for drafting and organization, with human review and correction remaining essential to maintain compliance with the approved requirements.
