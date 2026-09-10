The requirement-analysis document has been reviewed and APPROVED.

The next stage is to create the test-scenarios document only.

## OBJECTIVE
Create ONLY this file:

`docs/2-test-scenarios.md`

Do NOT create or modify any other file.

Do NOT create:

- test cases
- Playwright scripts
- Page Objects
- API automation
- package.json
- README
- defect-identification document
- AI reflection
- architecture document
- configuration files
Do NOT implement any test automation.

## SOURCE OF TRUTH
Use:

1. The original assignment requirements baseline.
2. The APPROVED document:
`docs/1-requirement-analysis.md`
Treat the approved requirement-analysis document as the consolidated requirements reference.

Do not add requirements or business rules that are not supported by the assignment.

Do not silently resolve ambiguities identified in the approved requirement analysis.

## TASK
Implement the assignment's Task 1 only:

Identify the TOP 10 test scenarios and rank them from highest to lowest risk.

Each scenario MUST contain:

1. Scenario ID
2. One-line scenario summary
3. Risk level:

- Critical
- High
- Medium
- Low
4. One-sentence rationale explaining why the scenario has that risk ranking
5. Requirement / task traceability

## COVERAGE EXPECTATION
The 10 scenarios should collectively provide meaningful coverage of the explicitly stated requirements, including where appropriate:

- free-form text input
- suggestion selection
- default prefix filtering
- no-match filtering behavior
- configurable match-anywhere behavior
- valid form submission
- invalid-input behavior
- Enter-to-submit
- Escape clear/close behavior
- Tab navigation
- success/error messaging
- API persistence
- HTTP 200 success behavior
- FR-05 response/data contract
- timestamp/local-time behavior
- locale validation
- suggestion_list correctness
- completed Boolean type
- negative API validation
You do NOT have to create one scenario for every bullet above if the top 10 risk-ranked scenarios can cover multiple requirements efficiently.

## RISK RANKING RULES
Rank based on business/functional risk, data integrity risk, and likelihood/impact of failure.

Do not simply rank scenarios by the order in which requirements appear.

Give higher priority to scenarios where failure could:

- prevent form completion
- persist incorrect user data
- violate the backend contract
- cause incorrect suggestion behavior
- cause incorrect submission behavior
Use only the information supported by the assignment.

## IMPORTANT AMBIGUITY RULES
Do NOT invent behavior for these areas:

- API endpoint
- API request payload/structure
- exact invalid-input criteria
- backend mechanism for enabling match-anywhere configuration
- exact Escape semantics
- exact local timestamp serialization format
- mandatory locale region/subtag
- negative-test HTTP status codes
If a scenario touches an ambiguous area, describe the scenario at the requirement level without inventing the missing implementation detail.

For Escape specifically:

- The assignment explicitly requires “Escape to clear/close”.
- Do not decide whether this means clearing the input, closing suggestions, or both.
- Preserve the ambiguity in the scenario wording.
For locale:

- Do not require `en-IN` specifically.
- Validate against the stated IETF BCP 47 requirement.
For `suggestion_list`:

- Validate that suggestions correspond to the entered/selected value.
- Do not assume that all suggestions are always invalid.
- For `agile methodology`, all three provided suggestions match the prefix and therefore may legitimately appear.
For timestamps:

- Validate the requirement that timestamps represent the user's local time.
- Do not invent an additional mandatory serialization format.

## OUTPUT FORMAT
Create a professional Markdown document with:

# Test Scenarios

## 1. Scope and Approach
Briefly explain how the top 10 scenarios were selected and risk-ranked.

## 2. Top 10 Risk-Ranked Test Scenarios
Use a table with columns:

RankScenario IDScenarioRiskRationaleTraceabilityRanks must be exactly 1 through 10.

## 3. Coverage Summary
Show which functional requirements/tasks are covered by the 10 scenarios.

Use a concise mapping such as:

Requirement / TaskCovered By
## 4. Risk Prioritization Notes
Briefly explain why the highest-risk scenarios were prioritized above lower-risk scenarios.

Do not create detailed test steps in this document. Those belong to Task 3 / `docs/4-test-cases.md`.

Do not create implementation code.

## FILE CREATION RULE
Create only:

`docs/2-test-scenarios.md`

Before finishing, verify that no other files were created or modified.

After creating the file, report:

1. File created
2. Brief summary
3. Confirmation that no other files were created or modified
Then STOP and WAIT for my review.

Do not proceed to test cases, defect documentation, or implementation until I explicitly approve this file.