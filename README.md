# @octoper/adonisjs-sentry

<br />

[![gh-workflow-image]][gh-workflow-url] [![npm-image]][npm-url] ![][typescript-image] [![license-image]][license-url]

> [!WARNING]
> This package is under construction, use it at your own risk.

# Sentry SDK for AdonisJS
This is an unofficial Sentry SDK for AdonisJS framework

## Installation
Install the `@octoper/adonisjs-sentry` package from the NPM package registry
```bash
npm i @octoper/adonisjs-sentry

# pnpm
pnpm add @octoper/adonisjs-sentry
```

## Configure
Once done, you must run the following command to configure the Sentry SDK package.

```bash
node ace configure @octoper/adonisjs-sentry

# With Sentry DSN
node ace configure @octoper/adonisjs-sentry --dsn="https://..."
```

## Thanks
This projects uses the [adonisjs/pkg-starter-kit](https://github.com/adonisjs/pkg-starter-kit) template and relied on all the official AdonisJS packages on how to create it.

- [@thetutlage](https://github.com/thetutlage) - for creating AdonisJS
- [@reg2005](https://github.com/reg2005/adonis5-sentry) - for creating [adonis5-sentry](https://github.com/reg2005/adonis5-sentry)

## License
This package is open-sourced software licensed under the [MIT license](LICENSE.md).

[gh-workflow-image]: https://img.shields.io/github/actions/workflow/status/octoper/adonisjs-sentry/test.yml?style=for-the-badge
[gh-workflow-url]: https://github.com/octoper/adonisjs-sentry/actions/workflows/test.yml "Github action"

[npm-image]: https://img.shields.io/npm/v/@octoper/adonisjs-sentry/latest.svg?style=for-the-badge&logo=npm
[npm-url]: https://www.npmjs.com/package/@octoper/adonisjs-sentry/v/latest "npm"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript

[license-url]: LICENSE.md
[license-image]: https://img.shields.io/github/license/octoper/adonisjs-sentry?style=for-the-badge
