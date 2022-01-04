[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fivolivares%2Fiolivares-dot-com)

# iolivares.com

This is my website for my personal brand (my name). This is the version from 2021, if you want to see [2017 version, please go to this repo](https://github.com/ivolivares/iolivares-dot-com-2017).

I'm moving to Vercel (ex now.sh) from Firebase and NextJS, for different reasons (here maybe in the future you will see a link to a blog post).

If you have any doubt about this repo, [just tweet me @ivolivares](https://twitter.com/ivolivares).

## Overview

- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering features like Spotify now playing or how healthy is my week.
- `pages/_middleware.ts` - [Middleware](https://nextjs.org/docs/middleware) used to redirects, security headers, cors, among other important features. The only TS code here.
- `pages/[slug]*` - Static pre-rendered articles and content pages using [MDX](https://github.com/mdx-js/mdx).
- `pages/*` - All static pages .

## Developing in your localhost

```bash
$ git clone https://github.com/ivolivares/iolivares-dot-com.git
$ cd iolivares-dot-com
$ yarn
$ yarn dev
```

To use the APIs, we need some keys, please create a `.env` file similar to [`.env.example`](https://github.com/ivolivares/iolivares-dot-com/blob/main/.env.example) file in the repo.

## Built Using

- [Vercel](https://vercel.com)
- [Next.js](https://nextjs.org)
- [Next i18next](https://github.com/isaachinman/next-i18next)
- [MDX - Content](https://github.com/mdx-js/mdx)
- [Gray Matter - Content YAML parser for MDX files](https://github.com/jonschlinkert/gray-matter)
- [PlanetScale - Database](https://planetscale.com)
- [Prisma - ORM](https://prisma.io/)
- [Tailwind CSS](https://tailwindcss.com)
- [Headless UI - Tailwind Components](https://headlessui.dev)
- [Panel Bear Analytics - CookieLess Analytics](https://panelbear.com)
- [Sentry - Error & Performance Analysis](https://sentry.io)
- [Notion - Project & Ideas Management](https://www.notion.so)