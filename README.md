# Vite Vanilla TypeScript Starter with ESLint and Prettier

Initial directory setup for a Vite vanilla TS project.

**Note:** Because this library uses [Airbnb](https://github.com/airbnb/javascript) as a style guide, the `eslint-config-airbnb` dependency requires `eslint-plugin-react`.

## Setup

This guide uses `yarn`

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
yarn add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
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
