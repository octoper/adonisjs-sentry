import type { ApplicationService } from '@adonisjs/core/types'
import * as Sentry from '@sentry/node'

declare module '@adonisjs/core/types' {
  export interface ContainerBindings {
    sentry: typeof Sentry
  }
}

/**
 * Sentry provider
 */
export default class SentryProvider {
  constructor(protected app: ApplicationService) {}

  async register() {
    this.app.container.singleton('sentry', () => {
      return { ...Sentry }
    })
  }

  async boot() {
    const config = this.app.config.get<Sentry.NodeOptions | undefined>('sentry')
    Sentry.init(config)
  }
}
