import type { ApplicationService } from '@adonisjs/core/types'
import * as Sentry from '@sentry/node'

/**
 * Inertia provider
 */
export default class SentryProvider {
  constructor(protected app: ApplicationService) {}

  async register() {
    this.app.container.singleton(Sentry, () => {
      return { ...Sentry }
    })
  }

  async boot() {
    const config = this.app.config.get('sentry')
    Sentry.init(config)
  }
}
