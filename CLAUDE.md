# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

Early-stage scaffold for a venue booking web app. Currently a single static `App` component with placeholder venue cards; no routing, state management, data fetching, or backend integration exists yet.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check (`tsc -b`) then production build via Vite
- `npm run lint` — run ESLint over the whole project
- `npm run preview` — serve the production build locally

There is no test runner configured in this project yet.

## Architecture

- **Stack**: React 19 + TypeScript, built with Vite, styled with Tailwind CSS v4 (loaded via the `@tailwindcss/vite` plugin and `@import 'tailwindcss'` in `src/index.css` — there is no `tailwind.config.js`).
- **Entry point**: `src/main.tsx` mounts `App` from `src/App.tsx` into `#root` (defined in `index.html`) inside `StrictMode`.
- **TypeScript project layout**: `tsconfig.json` is a solution file referencing two project configs — `tsconfig.app.json` (app code under `src/`, targets DOM libs) and `tsconfig.node.json` (`vite.config.ts`, targets Node). When adding compiler options, edit the relevant sub-config, not the root `tsconfig.json`.
- **ESLint**: flat config (`eslint.config.js`) combining `@eslint/js` recommended rules, `typescript-eslint` recommended rules, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh` (Vite variant). Applies to `**/*.{ts,tsx}`; `dist` is ignored.
