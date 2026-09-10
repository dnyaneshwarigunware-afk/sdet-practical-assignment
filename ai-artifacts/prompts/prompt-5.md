Review and correct ONLY the existing file:

`docs/2-test-scenarios.md`

Do not create any new files.

Do not create test cases, automation, Page Objects, API scripts, package.json, README, or any other artifact.

The purpose of this edit is to correct requirement-overreach in the existing top-10 scenario document while preserving the valid risk ranking and overall structure.

## REQUIRED CORRECTIONS

### 1. Correct TS-01
Current wording includes the idea that invalid input must be rejected "without persisting a valid response."

The assignment explicitly requires an error message for invalid input, but it does NOT explicitly define persistence behavior for invalid input.

Therefore:

- Remove any requirement that a response must not be persisted unless explicitly supported by the assignment.
- Do not invent invalid-input criteria.
- Keep the scenario focused on the required invalid-input/error behavior.

### 2. Correct TS-10
The exact semantics of Escape are intentionally ambiguous in the assignment.

Do NOT decide that Escape:

- clears the input,
- closes the suggestions,
- or does both.
The scenario must preserve the ambiguity.

Remove wording such as:

- "clear or close the active suggestion state"
- "without changing the core form flow beyond the required behavior"
Use requirement-level wording that reflects the assignment's explicit "Escape to clear/close" requirement while acknowledging that the exact semantics are unspecified.

### 3. Correct TS-04
Do not turn timestamp serialization into an invented requirement.

The scenario should validate that `start_date` and `end_date` represent the user's local time as required by FR-05 for the stated IST / UTC+05:30 environment.

Do NOT introduce a mandatory timestamp serialization format.

The confirmed sample-response discrepancy that uses trailing `Z` should remain a defect-analysis issue, not become an invented general formatting requirement.

### 4. Improve TS-09
TS-09 currently combines too many behaviors.

Keep it as one risk-ranked scenario if appropriate, but make sure the scenario clearly covers the required keyboard/navigation interaction, especially:

- Tab Navigation
- Enter-to-submit
- interaction with text entry/suggestion selection where relevant
Do not create an additional scenario unless absolutely necessary because the assignment requires a top 10 list.

Do not add unsupported keyboard behavior.

## PRESERVE
Do NOT unnecessarily change the existing ranking or scenario IDs unless a correction genuinely requires it.

Preserve the valid conclusions:

- FR-01 text input and suggestion selection
- FR-02 prefix filtering
- FR-03 configurable match-anywhere behavior
- FR-04 submission and success/error behavior
- FR-05 data contract
- local-time timestamp validation
- Boolean `completed`
- suggestion-list matching
- keyboard interaction
- Escape requirement
- risk-based ranking
Continue treating these as NOT confirmed defects:

- locale = "en"
- all three suggestions for "agile methodology"
- account_id string type
Continue treating these as ambiguities:

- API endpoint
- API request structure
- match-anywhere backend configuration mechanism
- exact Escape semantics
- invalid-input criteria
- exact local timestamp serialization
- mandatory locale region subtag
- exact focus order

## IMPORTANT
Do not introduce any new requirement, business rule, API behavior, persistence rule, HTTP status code, selector, timestamp format, or keyboard behavior.

After editing, verify that ONLY:

`docs/2-test-scenarios.md`

was modified.

Then report:

1. What was corrected
2. Confirmation that no other files were created or modified
STOP and wait for my review.