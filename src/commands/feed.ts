import {Command, flags} from '@oclif/command'
import chalk from 'chalk'

import {tclClient} from '../tcl-client'

export default class Feed extends Command {
  static description = 'Get the latest tweets in your timeline'
  static flags = {
    help: flags.help({char: 'h'})
  }

  async run() {
    const {flags} = this.parse(Feed)
    const T = tclClient(this.config.configDir)

    const stream = T.stream('statuses/filter')
    stream.on('error', error => this.error(error))
    stream.on('data', data => {
      this.log(data)
    })
  }
}
