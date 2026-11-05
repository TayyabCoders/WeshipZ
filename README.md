# WeShipZ

Premium creative-tech agency portfolio built with Next.js App Router.

## Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS v4
- Motion, GSAP, Lucide
- React Hook Form + Zod

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Path | Page |
| --- | --- |
| `/` | Homepage |
| `/work` | Portfolio archive |
| `/work/[slug]` | Project case study |
| `/services` | Services overview |
| `/services/[slug]` | Service detail |
| `/about` | About |
| `/contact` | Project inquiry |
| `/privacy-policy` | Privacy placeholder |
| `/terms` | Terms placeholder |

## Structure

```
src/
  app/            routes + API
  components/     layout, hero, portfolio, services, forms, animations
  data/           projects, services, navigation
  lib/            utils
public/
  images/brand/   logo
  posters/        demo posters
  videos/         project media folders
```

## Notes

- Portfolio entries are marked **Demo project** until real case studies are added.
- Contact form posts to `/api/contact` and logs inquiries until email/CRM is wired.
- Replace placeholder team/contact details before launch.
