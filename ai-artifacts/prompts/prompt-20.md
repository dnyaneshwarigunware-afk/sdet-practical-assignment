Create ONLY this file:

`playwright.config.js`

Do not create, modify, or delete any other file.

## Source of truth
Use ONLY the approved assignment requirements and existing project documentation:

- `docs/1-requirement-analysis.md`
- `docs/2-test-scenarios.md`
- `docs/3-defect-identification.md`
- `docs/4-test-cases.md`
- `docs/7-ai-reflection.md`
- `docs/8-architecture-discussion.md`

## Purpose
Create the minimal Playwright configuration required to execute the existing UI and future API tests.

## Requirements
Use modern JavaScript ES module syntax.

Configure:

- Playwright Test
- test directory: `tests`
- Chromium as the browser project
- browser-visible execution appropriate for debugging during development
- reasonable default test timeout only if necessary
- standard Playwright test discovery
The assignment test environment specifies:

- Chrome
- Windows 10
- English
- India
- IST / UTC+05:30
Do NOT claim that the Playwright configuration can reproduce Windows 10 if the current execution environment is not Windows 10. The configuration should use Chromium to represent the required Chrome browser family.

## Important constraints

1. Do not create browser binaries or install anything.
2. Do not create fixtures.
3. Do not create global setup/teardown.
4. Do not add authentication.
5. Do not add login handling.
6. Do not add API configuration or API endpoints.
7. Do not invent backend configuration for match-anywhere behavior.
8. Do not add reporters unless required.
9. Do not add screenshots, videos, traces, retries, or parallelism configuration unless required by the approved documentation.
10. Do not modify existing tests.
11. Do not modify the Page Object.
12. Do not modify package.json.
13. Do not modify documentation.
14. Do not create any additional files.
Keep the configuration minimal and directly traceable to the approved architecture.

After creating the file, stop.

Return only the contents of:

`playwright.config.js`