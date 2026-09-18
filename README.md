# Venue Booking

Frontend for a venue booking app, built with React 19, TypeScript, and Vite. Currently an early-stage scaffold: a single static `App` component rendering placeholder venue cards, with no routing, state management, or backend integration yet.

## Stack

- [React 19](https://react.dev/) + TypeScript
- [Vite](https://vite.dev/) for dev server and build
- [Tailwind CSS v4](https://tailwindcss.com/) via the `@tailwindcss/vite` plugin
- [ESLint](https://eslint.org/) (flat config) with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command                | Description                                    |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Start the Vite dev server                      |
| `npm run build`        | Type-check (`tsc -b`) and build for production |
| `npm run lint`         | Run ESLint over the project                    |
| `npm run preview`      | Serve the production build locally             |
| `npm run format`       | Format the project with Prettier               |
| `npm run format:check` | Check formatting without writing changes       |

No test runner is configured yet.
