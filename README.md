# Convex + Turborepo Demo

This is an official Yarn v1 starter turborepo.

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `convex`: a [Convex](https://convex.dev/) app
- `web`: a [Next.js](https://nextjs.org/) app
- `mobile`: an [Expo](https://expo.deve/) [React Native](https://reactnative.dev/) app
- `utils`: a stub util library shared by both `web`, `mobile`, and `convex` applications

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Setup

Edit `apps/convex/convex.json` to your Convex app details.
Edit `apps/convex/.env.local` to `CONVEX_URL=[your-convex-url]`
Edit `apps/web/_app.tsx` to your Convex url
Edit `apps/mobile/App.tsx` to your Convex Url

`//TODO: unify CONVEX_URL env var to be sharable across apps`

Run `cd convex-turborepo && yarn install`

### Develop

To develop all apps and packages, run the following command:

```
cd convex-turborepo
yarn run dev
```
