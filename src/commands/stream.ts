import {Command, flags} from '@oclif/command'

import {tclClient as T} from '../tcl-client'

export default class Stream extends Command {
  // static description = 'Create a live feed of tweets you specify'
  static flags = {
    help: flags.help({char: 'h'}),
    word: flags.string({
      char: 'w',
      description:
        'Show live feed of tweets containing the given word (or comma-separated words)'
    }),
    delimited: flags.integer({
      char: 'd',
      description: 'Set a specific limit on tweet length to be returned'
    }),
    stall: flags.boolean({
      char: 's',
      description: 'Specifies whether or not stall warnings should be delivered'
    })
  }

  async run() {
    const {flags} = this.parse(Stream)
    T.stream('statuses/filter', {track: flags.word})
  }
}
