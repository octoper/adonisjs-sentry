/*
|--------------------------------------------------------------------------
| Configure hook
|--------------------------------------------------------------------------
|
| The configure hook is called when someone runs "node ace configure <package>"
| command. You are free to perform any operations inside this function to
| configure the package.
|
| To make things easier, you have access to the underlying "ConfigureCommand"
| instance and you can use codemods to modify the source files.
|
*/
import type Configure from '@adonisjs/core/commands/configure'

import { stubsRoot } from './stubs/main.js'

export async function configure(command: Configure) {
  let dsn: string | undefined = command.parsedFlags.dsn

  /**
   * If DSN is not defined, we prompt the user to enter it
   */
  if (!dsn) {
    dsn = await command.prompt.ask<string>('Enter your Sentry DSN', {
      validate: (value) => (value.trim() ? true : 'DSN is required'),
    })
  }

  const codemods = await command.createCodemods()

  /**
   * Publish the configuration file
   */
  await codemods.makeUsingStub(stubsRoot, 'config/sentry.stub', {})

  /**
   * Publish provider
   */
  await codemods.updateRcFile((rcFile) => {
    rcFile.addProvider('@octoper/adonisjs-sentry/sentry_provider')
  })

  /**
   * Update the .env file
   */
  /**
   * Define env variables for Sentry
   */
  await codemods.defineEnvVariables({
    SENTRY_DSN: dsn,
    SENTRY_ENABLED: true,
  })

  /**
   * Define env variables validation for Sentry package
   */
  await codemods.defineEnvValidations({
    leadingComment: 'Variables for configuring the Sentry package',
    variables: {
      SENTRY_DSN: `Env.schema.string()`,
    },
  })
}
