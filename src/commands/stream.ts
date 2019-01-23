import {Command, flags} from '@oclif/command'
import chalk from 'chalk'

import {tclClient} from '../tcl-client'

export default class Stream extends Command {
  static description = 'Create a live feed of tweets you specify'
  static flags = {
    help: flags.help({char: 'h'}),
    user: flags.string({
      char: 'u',
      description:
        'Only show tweets by the given handles (or comma-seperated handles, no @ symbol)'
    }),
    word: flags.string({
      char: 'w',
      description:
        'Only show tweets containing the given word (or comma-separated words)'
    })
  }

  async run() {
    const {flags} = this.parse(Stream)
    const T = tclClient(this.config.configDir)

    // Get the userIds from the handles
    let userHandles = ''
    if (flags.user) {
      const data = await T.get('users/lookup', {screen_name: flags.user})
      if (data.length) {
        data.forEach(
          (user: any, i: number) =>
            (userHandles =
              i === 0 ? user.id_str : `${userHandles},${user.id_str}`)
        )
      } else {
        userHandles = data.id_str
      }
    }

    // Stream the tweets
    const stream = T.stream('statuses/filter', {
      track: flags.word,
      follow: userHandles
    })
    stream.on('error', error => this.error(error))
    stream.on('data', data => {
      const styledText = flags.word
        ? data.text
            .split(' ')
            .map(
              (str: string) =>
                flags.word &&
                str.replace(
                  new RegExp(flags.word.replace(',', '|'), 'gm'),
                  chalk.yellow(str)
                )
            )
            .join(' ')
        : ''

      this.log(
        `\n${chalk.cyan(`@${data.user.screen_name}`)}: ${styledText ||
          data.text}`
      )
    })
  }
}
