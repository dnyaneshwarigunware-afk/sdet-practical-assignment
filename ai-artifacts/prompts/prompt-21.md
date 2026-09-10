Modify ONLY this existing file:

`playwright.config.js`

Do not create, modify, or delete any other file.

## Source of truth
Use ONLY the approved assignment requirements and project documentation:

- `docs/1-requirement-analysis.md`
- `docs/2-test-scenarios.md`
- `docs/3-defect-identification.md`
- `docs/4-test-cases.md`
- `docs/7-ai-reflection.md`
- `docs/8-architecture-discussion.md`

## Required corrections
Keep the following configuration because it is directly relevant:

- `testDir: './tests'`
- Chromium / Desktop Chrome project
- `headless: false`
- `locale: 'en-IN'`
- `timezoneId: 'Asia/Kolkata'`
Remove configuration that was not required by the approved requirements:

- `trace: 'on-first-retry'`
- explicit `viewport`
- custom `timeout: 30000`
Do not replace them with alternative values.

Keep the configuration minimal.

## Important
Do NOT:

- create `tests/ui/config/` yet
- create any configuration file inside `tests/ui/config/`
- modify the existing Page Object
- modify the existing UI tests
- modify package.json
- modify documentation
- add retries
- add reporters
- add screenshots or video
- add authentication
- add API configuration
- add environment variables
- add fixtures
- add global setup/teardown
- invent Windows-specific configuration
The assignment specifies Chrome on Windows 10 as the test environment, but this configuration should use Chromium/Desktop Chrome rather than pretending to configure the operating system.

After making only these corrections, stop and return the complete contents of:

`playwright.config.js`