# Assignment Requirements Baseline — Analysis Phase Only
You are assisting me with an SDET Practical Assignment.

The requirements below are the complete requirements baseline extracted from the assignment.

## SOURCE OF TRUTH
Treat ONLY the requirements explicitly provided below as the source of truth for this assignment.

Do NOT use your own assumptions, general best practices, external requirements, or invented behavior to extend or change these requirements.

You MUST NOT:

- add requirements;
- remove requirements;
- modify requirements;
- reinterpret requirements;
- invent functionality;
- invent business rules;
- invent API endpoints;
- invent API request/response fields;
- invent UI behavior;
- silently resolve ambiguities.
If information is not specified in the requirements below, identify it as:

- Ambiguity / Missing Information
Do NOT assume an answer unless I explicitly approve it.

## IMPLEMENTATION TECHNOLOGY
The implementation technology selected for this assignment is:

- Playwright
- Modern JavaScript
- Node.js
Technical implementation decisions are allowed ONLY when they are necessary to implement the explicitly stated requirements and make the project executable.

A technical implementation decision must NOT introduce a new business requirement or functionality.

---

# WORKING METHOD
We will complete this assignment in controlled stages.

The required workflow is:

Requirements
→ Analysis
→ My Verification
→ Documentation
→ My Verification
→ Implementation
→ My Review
→ Test Execution
→ Defect/Failure Analysis
→ Final Review

IMPORTANT:

Do NOT move to the next stage automatically.

I will explicitly instruct you when to proceed.

Do NOT generate the complete project at once.

Do NOT create files unless I explicitly request a specific file or logical group of files.

Do NOT modify previously approved files unless I explicitly instruct you to modify them.

---

# 1. AUTOCOMPLETE FORM REQUIREMENTS
After completing login, the user is redirected to an Autocomplete web form.

Login and admin configuration are outside the scope of this assignment.

Assume the URL:

[https://test.com/autocomplete-form](https://test.com/autocomplete-form)

The form contains:

- a title
- a text input field
- a suggestion list
- a Next button
HTML structure:
<html>
<head></head>v
<body>
<div class="form-container">
<label for="input-field">Enter a value:</label>
<input type="text" id="input-field" placeholder="Type here...">
<ul class="suggestions">
<li>agile methodology</li>
<li>agile methodology process</li>
<li>agile methodology process testing</li>
</ul>
<button id="next-button">Next</button>
<span class="error-message">Error: Invalid input. Please select a valid suggestion.</span>
<div class="success-container">
<p>Success! Your response has been recorded.</p>
</div>
</div>
</body>
</html>
---

# 2. FUNCTIONAL REQUIREMENTS

## FR-01: Text Input
Users can:

- type any response in the text field
OR
- click/tap a suggestion list item to select it.

## FR-02: Suggestion Filtering — Prefix Match Default
If the typed characters match the initial characters of a suggestion, that suggestion remains visible.

If the typed characters do NOT match the beginning of any suggestion, those suggestions disappear from the list.

## FR-03: Suggestion Filtering — Match Anywhere Configurable
When enabled in backend configuration, suggestions remain visible if they contain the typed text anywhere in the string.

Example:

Typing:

"agile method"

keeps all three suggestions visible since all contain that substring.

## FR-04: Form Submission
Selecting the Next button sends a REST API call to persist the response.

A successful submission returns HTTP status code 200.

On success, a success message is displayed.

On invalid input, an error message is displayed.

## FR-05: Backend Data Contract
The persisted response must contain the following properties:

- account_id — ID of the user account that completed the form
- account_email — Email of the user account that completed the form
- start_date — Timestamp in the user's local time when they reached the form
- end_date — Timestamp in the user's local time when they selected Next
- locale — IETF BCP 47 format of the user's locale (example: en-IN)
- text — Text given by the user in the input field
- suggestion_list — Comma-separated string of suggestions matching the value entered/selected
- completed — Boolean representing the status of form response upload

---

# 3. TEST ENVIRONMENT
Browser: Chrome on Windows 10, language configured as English
Login user: <TEST_EMAIL>
User location: India (local timezone: IST, UTC+05:30)


---

# 4. PRACTICAL EXERCISE

## Task 1 — Top 10 Test Scenarios
Identify the top 10 test scenarios ranked from highest to lowest risk.

For each scenario provide:

a. One-line summary
b. Risk level: Critical / High / Medium / Low
c. One sentence explaining the ranking rationale

## Task 2 — API Response Defect Analysis
After completing the form by selecting:

"agile methodology"

perform a GET request to the API and receive this response:

{
"account_id": "98765",
"account_email": "<TEST_EMAIL>",
"start_date": "2024-03-15T10:30:00Z",
"end_date": "2024-03-15T10:32:00Z",
"locale": "en",
"text": "agile methodology",
"suggestion_list": "agile methodology, agile methodology process, agile
methodology process testing",
"completed": "true"
}

Compare this response against FR-05.

Identify EVERY discrepancy.

## Task 3 — Detailed Test Cases
Write detailed test cases for the scenarios identified in Section 2.

Each test case must include:

a. Test Case ID
b. Title
c. Preconditions
d. Test Steps — numbered
e. Expected Results
f. Test Data

Minimum:

8 detailed test cases covering both UI and API behavior.

## Task 4 — Playwright Test Scripts
Write Playwright test scripts in the preferred programming language.

Scripts must cover:

- Tab Navigation — navigate between form elements using Tab key
- Keyboard Interaction — use Enter to submit, Escape to clear/close
- Suggestion Filtering — type text and verify correct suggestions appear/disappear
- Suggestion Selection — click a suggestion and verify input field is populated
- Form Submission — submit and verify success/error message display
- Code Structure — use Page Object Model or equivalent design pattern
Scripts must be executable.

Include a README with:

- setup instructions
- dependencies
- how to run the suite

## Task 5 — API Automation
Write API automation scripts that:

a. Validate response schema matches the data contract in FR-05.
b. Verify correct data types, including Boolean for completed and proper timestamp format.
c. Validate IETF BCP 47 locale format.
d. Confirm suggestion_list contains only matching suggestions, not all suggestions.
e. Include at least 2 negative test cases such as missing fields or invalid data.

## Task 6 — AI Usage Reflection
Answer:

a. Tools Used — Which AI tools were used during the assignment?

b. Usage Areas — What specifically were they used for?

c. Modifications Made — Provide at least 2 specific examples where AI-generated output was corrected, improved, or added to. Explain the reasoning.

d. AI Limitations — What did AI get wrong or fail to identify?

Minimum 1 example is required.

---

# 5. REQUIRED SUBMISSION STRUCTURE
The repository must have this structure:

├── README.md
├── docs/
│ ├── 1-requirement-analysis.md
│ ├── 2-test-scenarios.md
│ ├── 3-defect-identification.md
│ ├── 4-test-cases.md
│ ├── 7-ai-reflection.md
│ └── 8-architecture-discussion.md
├── tests/
│ ├── ui/
│ │ ├── pages/ (Page Object classes)
│ │ ├── tests/ (Test scripts)
│ │ └── config/ (Browser/environment config)
│ └── api/
│ └── tests/ (API test scripts)
└── package.json / pom.xml / requirements.txt

For this implementation I am using Playwright with modern JavaScript and Node.js.

Therefore, use the appropriate Node.js dependency file:

package.json

Do NOT change the required repository structure.

Do NOT rename the required files or directories.

---

# 6. AI PROMPT AND TRANSCRIPT REQUIREMENT
The assignment requires submission of:

- the prompt file(s) used to complete the assignment;
- the complete JSON transcript of the AI conversation(s).
Submissions without the prompt file(s) and complete JSON transcript are incomplete and will be rejected.

---

# 7. STRICT IMPLEMENTATION RULES
The following rules control all future implementation work.

1. Do not add requirements.
2. Do not remove requirements.
3. Do not invent functionality.
4. Do not invent API endpoints.
5. Do not invent API response fields.
6. Do not invent business rules.
7. Do not invent UI behavior.
8. Do not silently resolve ambiguity.
9. If information is missing, explicitly identify it.
10. Do not change the required repository structure.
11. Do not rename required files or directories.
12. Do not generate the entire project at once.
13. Generate files only when I explicitly request them.
14. Generate one file or one logical group of files at a time.
15. Do not modify previously approved files unless I explicitly request the modification.
16. Do not add unnecessary frameworks or libraries.
17. Do not add CI/CD, Docker, linting, formatting tools, reporting frameworks, or other tooling unless explicitly required or technically necessary.
18. Do not add extra tests simply to increase the test count.
19. Every test must trace to a stated requirement or task.
20. Every automation assertion must trace to a stated requirement or task.
21. Clearly distinguish between:

- Requirement
- Defect / Discrepancy
- Ambiguity / Missing Information
- Technical Implementation Decision
- Optional Recommendation

1. If something is only a recommendation, label it as a recommendation.
2. Do not implement a recommendation unless I explicitly approve it.
3. Do not silently change expected results because of implementation convenience.
4. Do not silently convert or normalize incorrect API values before validating them.
5. When an assignment requirement conflicts with implementation reality, report the conflict instead of changing the requirement.
6. Preserve the terminology used in the requirements.
7. Prefer the minimum implementation necessary to satisfy the stated requirements.

---

# 8. CURRENT REQUEST — ANALYSIS ONLY
IMPORTANT:

This is the ANALYSIS PHASE.

Do NOT create any files.

Do NOT modify any files.

Do NOT generate source code.

Do NOT generate test code.

Do NOT generate the complete project.

Do NOT install dependencies.

Do NOT make implementation changes.

Analyze ONLY the requirements provided in this prompt.

Return the following sections:

## 1. Requirement Inventory
List every explicit requirement and identify its source:

- Form requirement
- FR-01
- FR-02
- FR-03
- FR-04
- FR-05
- Test Environment
- Task 1
- Task 2
- Task 3
- Task 4
- Task 5
- Task 6
- Submission Structure
- AI Prompt/Transcript requirement
Do not omit any requirement.

## 2. FR-01 Through FR-05 Analysis
For each functional requirement provide:

- Requirement
- Expected behavior
- Testable behavior
- Required test coverage
- Required deliverable
- Ambiguities, if any
Do not invent behavior.

## 3. Task 1 Through Task 6 Analysis
For each task provide:

- Exact objective
- Required output
- Mandatory content
- Dependencies on other tasks
- Ambiguities/missing information

## 4. Required Deliverables
List every file/document/script that is explicitly required.

Separate:

- Explicitly required
- Technically necessary
- Not required
Do not create anything.

## 5. Exact Repository Structure
Reproduce the required structure exactly.

Do not propose additional directories or files.

If something is technically necessary but not explicitly listed, identify it separately rather than changing the required structure.

## 6. UI Automation Requirements
Map each required UI automation behavior to the relevant requirement/task:

- Tab Navigation
- Enter
- Escape
- Suggestion Filtering
- Suggestion Selection
- Form Submission
- Success/Error behavior
- Page Object Model
Identify anything whose expected behavior is not fully specified.

## 7. API Automation Requirements
Map each required API validation to FR-05 and Task 5.

Include:

- schema
- properties
- data types
- timestamp format
- locale format
- suggestion_list matching
- negative tests
Do not invent an API endpoint.

## 8. Required Test Case Fields
List the mandatory fields for every test case.

## 9. Known API Response Discrepancies
Compare the provided sample response against FR-05.

Identify EVERY discrepancy.

For each discrepancy show:

- Field
- Actual value
- Required value/type/format
- Pass/Fail
- Reason
Do not invent additional defects.

## 10. Ambiguities / Missing Information
Identify information that is genuinely not specified.

Examples to investigate:

- API endpoint
- API request structure
- backend configuration mechanism for FR-03
- exact Escape behavior
- exact Enter behavior
- exact focus order
- negative API expected status/response
Do NOT assume answers.

## 11. Requirement-to-Deliverable Traceability
Create:

Requirement/Task → Document/Test/Script → Evidence

Every requirement must have a traceability destination.

## 12. Proposed Implementation Sequence
Provide a proposed sequence ONLY.

Do not implement anything.

The sequence should respect:

Analysis
→ Verification
→ Documentation
→ Verification
→ Implementation
→ Review
→ Test
→ Defect/Failure Analysis
→ Final Review

For implementation, propose file/group order but do NOT create the files.

---

# FINAL INSTRUCTION
After completing the analysis:

STOP.

Wait for my explicit verification.

Do not create or modify any files.

Do not generate code.

Do not proceed to documentation or implementation automatically.