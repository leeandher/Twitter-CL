import {Command, flags} from '@oclif/command'
import chalk from 'chalk'
import {prompt} from 'inquirer'

import {tweet as copy} from '../data/copy-en.json'
import {tclClient} from '../tcl-client'

export default class Tweet extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'})
  }

  static args = [
    {
      name: 'text',
      required: true,
      description: copy.help.description
    }
  ]

  async run() {
    const {args} = this.parse(Tweet)
    const T = tclClient(this.config.configDir)

    this.log(copy.preview)
    this.log(`\n${chalk.cyan(args.text)}\n`)
    const {confirm} = await prompt({
      type: 'confirm',
      name: 'confirm',
      message: copy.confirm
    })
    if (!confirm) this.exit(0)

    const post = await T.post('statuses/update', {
      status: args.text
    })
    const link = `https://twitter.com/${post.user.screen_name}/status/${
      post.id_str
    }`
    this.log(`\n${copy.complete}\n`)
    this.log(copy.prelink)
    this.log(chalk.cyan(link))
  }
}
