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
