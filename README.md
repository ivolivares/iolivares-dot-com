[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fivolivares%2Fiolivares-dot-com)

# iolivares.com

This is my website for my personal brand (my name). This is the version from 2021, if you want to see [2017 version, please go to this repo](https://github.com/ivolivares/iolivares-dot-com-2017).

I'm moving to Vercel (ex now.sh) from Firebase and NextJS v10+, for different reasons (here maybe in the future you will see a link to a blog post).

I decide to split my websites in 3 domains: .com, .blog and .photos, where I'm sharing my latest work in different aspects and .com is the main hub, also to open me to use different code-bases and technologies (yest, just for fun).

If you have any doubt about this repo, [just tweet me @ivolivares](https://twitter.com/ivolivares).

## Overview

- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering features like Spotify now playing or how healthy is my week.
- `pages/*` - All (3 ones) static pages.

## Developing in your localhost

```bash
$ git clone https://github.com/ivolivares/iolivares-dot-com.git
$ cd iolivares-dot-com
$ yarn
$ yarn dev
```

To use the APIs, we need some keys, please create a `.env.local` file similar to [`.env.example`](https://github.com/ivolivares/iolivares-dot-com/blob/master/.env.example) file in the repo.

## Built Using

- [Vercel](https://vercel.com)
- [Next.js](https://nextjs.org)
-- [Next i18next](https://github.com/isaachinman/next-i18next)
-- [Tailwind CSS](https://tailwindcss.com)
- [Notion](https://www.notion.so)
