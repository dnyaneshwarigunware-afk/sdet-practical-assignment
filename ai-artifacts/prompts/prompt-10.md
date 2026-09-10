You are now at the implementation stage of the approved SDET practical assignment.

Create ONLY:

`package.json`

Then STOP and wait for human review.

## SOURCE OF TRUTH
Use the approved project documentation:

- `docs/1-requirement-analysis.md`
- `docs/2-test-scenarios.md`
- `docs/3-defect-identification.md`
- `docs/4-test-cases.md`
- `docs/7-ai-reflection.md`
- `docs/8-architecture-discussion.md`
These documents are the source of truth.

Do NOT introduce new requirements or functionality.

---

# TECHNOLOGY
The approved implementation stack is:

- Node.js
- Modern JavaScript
- Playwright
Use Playwright for the browser automation required by Task 4.

Use the Node.js package configuration appropriate for this stack.

Do not introduce another programming language or test framework.

---

# PACKAGE.JSON SCOPE
Create a minimal, clean `package.json` required for the approved Playwright + Node.js project.

It should contain only information necessary to establish the Node.js project and support the approved automation work.

Include the appropriate Playwright dependency required by the assignment.

Include appropriate npm scripts needed to run the Playwright automation later.

Keep the scripts minimal and directly related to the approved automation requirements.

Do NOT add unrelated dependencies, frameworks, utilities, reporters, plugins, linters, formatters, or helper packages unless they are explicitly required by the approved documents.

---

# IMPORTANT — DO NOT INVENT
Do NOT add:

- API client libraries unless explicitly required
- Axios
- Supertest
- Jest
- Mocha
- Chai
- Cucumber
- Selenium
- TypeScript
- ESLint
- Prettier
- dotenv
- Faker
- Allure
- additional Playwright plugins
- custom reporting frameworks
- unnecessary utilities
The assignment specifies Playwright + Modern JavaScript + Node.js. Keep the dependency set minimal.

Do not introduce a dependency merely because it is commonly used in Playwright projects.

---

# API AUTOMATION
The assignment requires API automation in Task 5, but the approved documents do NOT specify a separate API testing library.

Therefore, do not introduce a third-party API testing framework or client library simply because API tests are required.

Use the capabilities available within the approved Playwright/Node.js approach unless a dependency is explicitly required by the approved documentation.

Do not invent an API endpoint, payload, authentication mechanism, headers, or API-specific configuration.

---

# NPM SCRIPTS
Provide only the minimum useful scripts for the approved automation project.

Scripts should support the future execution of Playwright tests.

Do not create scripts for files or functionality that do not yet exist.

Do not create scripts for:

- deployment
- CI/CD
- linting
- formatting
- reporting
- code generation
- application startup
unless explicitly required by the approved documents.

---

# VERSIONING
Use a stable Playwright package version appropriate for the current Node.js ecosystem.

Do not add unnecessary version constraints or unrelated packages.

Do not claim a specific Node.js version is required unless the approved documents explicitly specify one.

If the exact Playwright version is an implementation choice, choose a current stable version appropriate for the project rather than presenting it as an assignment requirement.

---

# PROJECT METADATA
Use a simple appropriate project name and basic metadata.

Do not include personal information.

Do not include credentials.

Do not include the assignment login email/password.

Do not add repository-specific metadata that has not been provided.

---

# STRICT FILE RULE
You are authorized to create or modify ONLY:

`package.json`

You MUST NOT:

- create any `.js` file
- create any `.spec.js` file
- create Page Objects
- create API tests
- create UI tests
- create configuration files
- create README
- modify documentation
- modify `docs/8-architecture-discussion.md`
- modify `docs/4-test-cases.md`
- install packages
- run tests
- execute the application
- create additional directories
- create any other file
Do not perform any implementation beyond creating `package.json`.

---

# VALIDATION BEFORE STOPPING
Before finishing, verify:

1. `package.json` is valid JSON.
2. The project uses Node.js.
3. Playwright is the selected automation framework.
4. Modern JavaScript remains the implementation language.
5. Dependencies are minimal.
6. No unrelated testing framework was introduced.
7. No unsupported API library was introduced.
8. No unsupported plugin or reporting framework was introduced.
9. No credentials are included.
10. No API endpoint or payload is included.
11. No new requirements were added.
12. No other file was created or modified.
13. The package configuration is consistent with `docs/8-architecture-discussion.md`.
14. The package configuration supports the future UI and API automation stages.

## IMPORTANT
Do NOT generate the Page Objects or tests now.

Do NOT continue to the next implementation stage automatically.

After creating `package.json`, STOP.

Report only:

- `package.json` created/updated
- dependencies added
- npm scripts added
- confirmation that no other files were created or modified
- confirmation that no tests or implementation code were generated