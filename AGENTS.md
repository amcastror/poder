# Repository Instructions

## Runtime

- Use `nvm` for all Node.js commands.
- Use Node.js 24 as the project runtime.
- Run `nvm use` before installing dependencies, building, or serving the site.

## Commands

```bash
nvm use
npm install
```

```bash
nvm use
npm run dev
```

```bash
nvm use
npm run build
```

## GitHub Pages Publishing

- Build output is generated in `_site`; publish that directory as the GitHub Pages artifact.
- Prefer GitHub Actions for publishing. Configure the repository Pages source as `GitHub Actions`, then use a workflow that runs `nvm use`, `npm install`, `npm run build`, and uploads `_site`.
- Keep the workflow static-site only. Do not add server runtimes, backend deploy targets, or secrets unless a future static hosting requirement explicitly needs them.
- Before publishing changes, run:

```bash
nvm use
npm run build
```

- For a manual GitHub Pages setup, publish from the generated static files only. Do not commit `_site` unless the repository is intentionally configured to deploy from a branch/folder instead of Actions.

## Project Scope

- This repository is an Eleventy (11ty) static site.
- The site is a web alternative to a slide deck.
- The generated output must be static files suitable for GitHub Pages.
- Do not add backend services, authentication, user management, databases, terms and conditions, or any feature outside the presentation experience.

## Content And Design

- Base the published content on `slides-structure.md`.
- Use `deep-research-report.md` only as supporting context.
- Keep the site minimal, presentation-focused, and easy to scan.
- Follow the frontend skill direction: restrained composition, strong hierarchy, minimal chrome, and purposeful motion.

## Testing

- Do not add tests.
- Do not add a test runner.
- Do not execute test suites.
- Verification is limited to operational/manual checks such as building the static site and reviewing it locally.
