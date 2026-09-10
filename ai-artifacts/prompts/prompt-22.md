Create ONLY the file:

README.md

Do not create, modify, or delete any other file.

Use the already approved project architecture, requirement analysis, test scenarios, test cases, architecture discussion, and current Playwright configuration as the source of truth.

The README must be concise but complete and suitable for submission of the SDET practical assignment.

Include ONLY information supported by the approved project documentation and current implementation.

The README must contain these sections:

1. Project Overview
   - Briefly describe the purpose of this SDET practical assignment project.
   - State that it covers UI and API automation for the autocomplete form.

2. Technology Stack
   - Playwright
   - Modern JavaScript
   - Node.js
   - Mention the relevant dependency from package.json.

3. Project Structure
   Document the current approved structure:

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

   Do not claim files exist if they have not actually been created yet.
   Clearly distinguish planned/required directories from currently implemented files where necessary.

4. Environment
   Document only the assignment-specified environment:
   - Chrome on Windows 10
   - English
   - India
   - IST / UTC+05:30
   - locale en-IN
   - timezone Asia/Kolkata
   - assignment URL: https://test.com/autocomplete-form

5. Setup
   Provide the Node.js dependency installation commands required by the current package.json.

   Include the appropriate Playwright browser installation command.

6. How to Run Tests
   Document the currently available npm test commands from package.json:
   - npm test
   - npm run test:ui
   - npm run test:api

   Do not claim API tests are implemented if they are not yet implemented.

7. UI Automation
   Briefly explain:
   - Page Object Model
   - current AutocompleteFormPage responsibilities
   - UI test coverage currently implemented
   - explicitly mention that Escape and invalid-input tests are currently unresolved/fixme because the assignment does not define their exact behavior.

8. API Automation
   Describe the planned API validation scope from the assignment:
   - FR-05 response contract
   - data types
   - Boolean completed
   - timestamp validation
   - BCP 47 locale
   - suggestion_list matching
   - negative cases

   Do NOT invent an API endpoint, request payload, authentication mechanism, or status codes that are not specified by the assignment.

9. Known Assignment Ambiguities
   Briefly list the important unresolved requirements:
   - exact invalid-input condition
   - exact Escape behavior
   - backend mechanism for enabling match-anywhere
   - API endpoint/request contract
   - exact timestamp serialization expectation
   - exact focus order for keyboard navigation

10. Defects Identified
    Summarize only the three confirmed discrepancies from docs/3-defect-identification.md:
    - start_date is represented as UTC (`Z`) despite the requirement specifying user local time
    - end_date is represented as UTC (`Z`) despite the requirement specifying user local time
    - completed is returned as the string "true" instead of Boolean true

    Do not add any additional defects.

11. AI Usage
    Briefly summarize the controlled GitHub Copilot workflow documented in docs/7-ai-reflection.md.
    Mention that AI-generated outputs were reviewed and corrected by the human reviewer.
    Do not claim AI completed implementation or execution if that has not happened yet.

12. Notes
    State that undocumented behavior and requirements are not assumed and that unresolved ambiguities are tracked explicitly.

Important constraints:
- Do not invent functionality.
- Do not invent API details.
- Do not claim tests have passed.
- Do not claim API automation exists unless it has actually been implemented.
- Do not create placeholder code or additional files.
- Do not modify package.json or playwright.config.js.
- Do not add badges, CI/CD configuration, reporting tools, or other unsupported extras.

After creating README.md, stop and provide:
1. Confirmation that only README.md was created.
2. A short summary of its sections.
3. Do not proceed to API implementation or create any additional files.