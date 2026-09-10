Review ONLY the existing `package.json`.

Make ONLY the following correction:

1. Remove the `engines` section:

```
"engines": {
  "node": ">=18"
}
```
Reason: the assignment specifies Node.js but does not specify a minimum Node.js version. Do not introduce an unsupported version requirement.

Keep all other existing `package.json` content unchanged.

In particular, do NOT:

- change the project name
- change the version
- change `"private": true`
- change `"type": "module"`
- change the existing npm scripts
- add dependencies
- remove `@playwright/test`
- add another test framework
- add an API library
- add ESLint
- add Prettier
- add dotenv
- add reporters/plugins
- add configuration
- create any other file
Do NOT run Playwright initialization.

Do NOT install dependencies.

Do NOT create tests or Page Objects.

Do NOT modify any documentation.

ONLY modify `package.json`.

After making the correction, STOP and report:

- that the `engines` section was removed
- the remaining dependency
- the existing npm scripts
- confirmation that no other files were modified