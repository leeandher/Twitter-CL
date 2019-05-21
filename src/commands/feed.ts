import {Command, flags} from '@oclif/command'
import chalk from 'chalk'

import {tclClient} from '../tcl-client'

export default class Feed extends Command {
  static description = 'Get the latest tweets in your timeline'
  static flags = {
    help: flags.help({char: 'h'}),
    count: flags.integer({
      char: 'c',
      description: 'Limit tweets to the specified number',
      default: 30
    })
  }

  async run() {
    const {flags} = this.parse(Feed)
    const T = tclClient(this.config.configDir)
    const feed = await T.get('statuses/home_timeline', {
      count: flags.count || 30
    })
    feed.map(
      ({
        id_str,
        text,
        user
      }: {
        id_str: string
        text: string
        user: {
          name: string
          screen_name: string
        }
      }) => {
        this.log(
          `\n${chalk.cyan(
            `${user.name} (@${user.screen_name})`
          )}:\n${text}\n${chalk.grey(
            `https://twitter.com/${user.screen_name}/status/${id_str}`
          )}`
        )
      }
    )
  }
}
