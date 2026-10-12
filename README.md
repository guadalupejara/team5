# Team 5: Chargebacks

Front-end foundation for a chargeback tool between retailers and suppliers.
Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Supabase.

## Getting started

```bash
git clone https://github.com/guadalupejara/team5.git
cd team5
npm install
```

### Supabase setup

1. Copy `.env.local.example` to `.env.local`.
2. Ask the team lead for the project URL and publishable key, and paste them in.
3. Start the app (see below).

> Never commit `.env.local`, and never use the Supabase `service_role` key in this project.

## Running the app

| Command | What it does |
|---|---|
| `npm run dev` | Starts the dev server at http://localhost:3000 with hot reload. Use this day to day. |
| `npm run build` | Makes a production build and checks for TypeScript and import errors. Run it before pushing. |
| `npm run start` | Serves the production build (run `npm run build` first). |
| `npm run lint` | Checks code style. |

Stop the dev server with `Ctrl+C`. Restart it after changing `.env.local`, since Next.js only reads env values at startup.
Once `npm run dev` is running, open **http://localhost:3000** in your browser. `localhost` means the app is running on your own computer, so only you can see it. Pages are at `/` (home), `/design` (style sheet), and `/todos` (playground), for example http://localhost:3000/design.

## Pages

| Route | What it is |
|---|---|
| `/` | Home (welcome page) |
| `/design` | Style sheet: previews every color, font, and component. Static, no database. |
| `/todos` | Playground: a simple to-do list that demonstrates create, read, update, delete |

## Project structure

```
app/
  globals.css          # colors and fonts (change the look here)
  layout.tsx           # shared layout, loads fonts, renders NavBar
  page.tsx             # home
  design/page.tsx      # style sheet
  todos/page.tsx       # CRUD playground
components/
  basic/               # reusable building blocks
  features/            # larger pieces built from basics (NavBar)
lib/
  supabase/client.ts   # the one Supabase client
  todo/index.ts        # CRUD functions for todos
```

## Components (`components/basic`)

Button, Card, Dropdown, EmptyState, StatusBadge, Table, TextField.
See `/design` for how each one looks.

## Learning CRUD: the to-do playground

New to databases? Start at `/todos`, then read two files:

1. `lib/todo/index.ts`: one small function per action
   (`getTodos`, `createTodo`, `updateTodo`, `deleteTodo`).
2. `app/todos/page.tsx`: how a page calls those functions and refreshes the list.

The pattern: **pages call functions in `lib/`, and only `lib/` talks to Supabase.**
Components never touch the database.

To add CRUD for a new table, copy `lib/todo/index.ts` into a new folder,
rename it, and change the table name and fields.

## Ground rules

- **Components are presentational.** Logic and data fetching live in pages and `lib/`.
- **Every new component gets added to `/design`.**
- **The style sheet stays independent of the database,** so it never breaks if Supabase is down.
- **File names are PascalCase** (`Button.tsx`), and imports must match exactly,
  because Mac, Linux, and Vercel are case-sensitive.

## Adding a component

1. Create `components/basic/YourComponent.tsx`.
2. Style it with the palette tokens in `globals.css`.
3. Add an example to `app/design/page.tsx`.

## Database security note

Row Level Security is on, but the current policies allow all reads and writes
so the team can move fast. The publishable key is visible in the browser, so
anyone can edit these tables. Use fake data only. Tighten the policies when auth is added.

## Git workflow

- Don't commit to `main` directly. Create a branch (`git checkout -b feature/your-thing`).
- Open a pull request and keep PRs small.
- Never commit `.env*` files (except `.env.local.example`).

## Roadmap

- [ ] Add `supabase/schema.sql` so new teammates can recreate the tables
- [ ] Move hardcoded chargeback data into Supabase (`lib/chargebacks/`)
- [ ] Usage comments on each component
- [ ] Auth
- [ ] Modal, Tabs, Textarea, Search, File upload (when a screen needs them)