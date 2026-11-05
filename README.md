# WeshipZ

Next.js starter for WeshipZ — App Router, TypeScript, Tailwind CSS v4.

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- `next/font` (Syne + DM Sans)

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | What it does        |
| --------------- | ------------------- |
| `npm run dev`   | Local dev server    |
| `npm run build` | Production build    |
| `npm run start` | Serve production    |
| `npm run lint`  | ESLint              |

## Folder map

```
src/
  app/
    layout.tsx      # Root layout (Header + Footer + fonts)
    page.tsx        # Home
    globals.css     # Theme tokens + base styles
  components/
    layout/         # Header, Footer, Container
    ui/             # Button
  lib/
    utils.ts        # cn() helper
```

## Theme

Brand tokens in `src/app/globals.css`:

| Token | Hex | Use |
| --- | --- | --- |
| `--primary` | `#296BE5` | Electric Blue — buttons, links |
| `--midnight` | `#101116` | Hero, footer |
| `--background` | `#F7F8FA` | Off White — page ground |
| `--surface-dark` | `#22252D` | Dark sections / nav surfaces |
| `--muted` | `#A6B0C3` | Secondary text |
| `--violet` | `#6C63FF` | Optional AI / gradient accents |

Logo: `public/logo.jpg` via `src/components/ui/Logo.tsx`
