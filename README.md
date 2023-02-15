# Vite Vanilla TypeScript Starter with ESLint and Prettier

Initial directory setup for a Vite vanilla TS project with Airbnb code style.

## Setup

This guide uses `yarn` rather than `npm`.

### Vite

yarn create vite

> vite-typescript-eslint-prettier-example
> Vanilla
> TypeScript

### ESLint

```shell
cd vite-typescript-eslint-prettier-example
npm init @eslint/config
```

Options:

```
> To check syntax, find problems, and enforce code style
> JavaScript modules (import/export)
> None of these
> Yes
> Browser
> Use a popular style guide
> Standard: https://github.com/standard/eslint-config-standard-with-typescript
> JavaScript
> Yes
> yarn
```

```shell
yarn add -D eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Edit:

- `.eslintrc.cjs`
- `.eslintignore`

### Prettier

```shell
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

Edit:

- `.prettierrc`

## References

- https://stackoverflow.com/questions/68878189/eslint-definition-for-rule-import-extensions-was-not-found
- https://medium.com/@ErikKyleNielsen/setting-up-eslint-prettier-airbnb-base-and-typescript-27b3f9538f0d
- https://www.youtube.com/watch?v=ZXW6Jn6or1w
