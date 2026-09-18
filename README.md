# Venue Booking

Frontend for a venue booking app, built with React 19, TypeScript, and Vite. Users browse venues, pick an available time slot, and check out to create a booking.

## Stack

- [React 19](https://react.dev/) + TypeScript
- [Vite](https://vite.dev/) for dev server and build
- [React Router](https://reactrouter.com/) for client-side routing
- [Zustand](https://zustand.docs.pmnd.rs/) for booking flow state
- [Tailwind CSS v4](https://tailwindcss.com/) via the `@tailwindcss/vite` plugin
- [ESLint](https://eslint.org/) (flat config) with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`
- [Prettier](https://prettier.io/) for formatting

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

`VITE_API_URL` (see `.env.example`) points the app at the booking API and is read via `src/lib/api.ts`.

## Pages

- `/` — venue list (`HomePage`)
- `/availability/:venueId` — time slot picker for a venue (`AvailabilityPage`)
- `/checkout` — customer details and booking submission (`CheckoutPage`)
- `/confirmation` — booking confirmation (`ConfirmationPage`)

Booking selections (venue, slot, customer info) are held in the Zustand store at `src/store/bookingStore.ts` as the user moves between pages.

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
