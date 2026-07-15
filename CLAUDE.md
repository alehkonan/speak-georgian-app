# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About

A mobile-first PWA for learning Georgian words and phrases (categories, a word-guessing game, favorites, profile/stats). Built with Vite + React + TypeScript, TanStack Router/Query, Supabase (Postgres + Auth), NextUI, and Tailwind.

## Commands

```sh
npm run dev            # start dev server (vite, port 3000)
npm run build          # tsc typecheck + vite build
npm run test           # run jest test suite
npm run test:watch     # jest --watch
npm run check:types    # tsc (no emit)
npm run check:lint     # biome check --write ./src
npm run check:deps     # knip (unused files/exports/deps)
```

Run a single test file: `npx jest src/utils/dates.test.ts`. Tests are colocated with source as `*.test.ts`.

The pre-push git hook (`.husky/pre-push`) runs `check:types`, `check:lint`, and `test` — expect these to gate any push.

Linting/formatting is done with **Biome** (`biome.json`), not ESLint — the `.eslintrc.yml`/`.eslintignore` files are legacy and not wired into any script.

Supabase types (`src/supabase/types.ts`) are regenerated from the live schema with `scripts/generate-types.sh` (requires `.env.local` with `PROJECT_ID` and `SUPABASE_ACCESS_TOKEN`).

## Architecture

### Data flow layers

Each domain (category, favorite, game, statistic, rule, word, auth, storage) follows a strict three-layer pattern:

1. **`src/supabase/<domain>/*.ts`** — raw Supabase calls (`.from().select()` or `.rpc()`), throws on `error`, validates/parses the response with a Zod schema from `src/supabase/schemas/*.ts` before returning.
2. **`src/cache/<domain>/use*.ts`** — TanStack Query hooks (`useQuery`/`useMutation`) that wrap the raw supabase functions. Query keys come from the single typed store in `src/cache/keys.ts` (`@lukemorales/query-key-factory`) — add new keys there, don't inline `queryKey` arrays.
3. **Components/routes** consume only the `src/cache` hooks, never `src/supabase` functions directly.

Postgres functions used via `.rpc(...)` (e.g. `get_game_word`, `set_word_learned`) are defined in `sql/*.sql` — that directory is the source of truth for backend schema/RPC signatures and isn't executed automatically; changes must be applied to the Supabase project manually/via migration.

The query client (`src/cache/client.ts`) disables refetch-on-focus/retry and persists the whole cache to IndexedDB (`src/cache/persister.ts`, via `idb-keyval`) so the app works offline-first as a PWA. Many list-style queries use `staleTime: Infinity` since data changes rarely and cache invalidation is manual.

### Routing (TanStack Router, file-based)

Routes live in `src/routes/**` and are compiled into `src/routeTree.gen.ts` by the TanStack Router Vite plugin — **never edit `routeTree.gen.ts` by hand**, it's regenerated on `dev`/`build` (it's also excluded from Biome).

- `__root.tsx` — app shell: on load, hydrates the Zustand user store from an existing Supabase session (`beforeLoad`), wraps everything in `PersistQueryClientProvider` + `NextUIProvider`.
- `_layout/route.tsx` — visual shell (page gradient, wave decoration, bottom `NavigationTabs`) shared by all in-app pages.
- `_layout/(private)/route.tsx` — auth guard: re-checks the Supabase session in `beforeLoad` and `redirect`s to `/login` if unauthenticated. Route groups under `(private)/` (favorites, game, new-word, profile) require login; siblings under `_layout/` (category, rules, login) don't.

### Auth & user state

`src/store/user.ts` (Zustand + devtools) holds the current user (`id`, `name`, `pictureUrl`, `provider`, `role`). It's populated from Supabase's `auth.getUser()` plus a role lookup (`getUserRole`), not by Supabase's own session object directly — components should read `useUserStore`, not call Supabase auth APIs ad hoc.

### Path aliases & module resolution

Absolute imports are written as `src/...` (e.g. `import { queryClient } from 'src/cache/client'`), enabled by `baseUrl: "."` in `tsconfig.json` plus the `vite-tsconfig-paths` Vite plugin. Relative imports (`../keys`) are also used within a domain folder — follow whichever the surrounding files in that directory already use.

### i18n

`i18next` is configured in `src/i18n/index.ts` with `en`/`ru` resources from `src/i18n/translations/*.json` and browser language detection. Supported languages are declared in the `langMap` there — add new locales in both places (resources + map) together.

### UI

NextUI (`@nextui-org/react`) is the component library; Tailwind (`tailwind.config.js`) supplies utility styling, including `tailwindcss-safe-area` for PWA safe-area insets and a custom `bg-page-gradient` theme token. Icons come from `lucide-react`.
