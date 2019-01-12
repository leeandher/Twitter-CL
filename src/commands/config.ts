import { Command, flags } from "@oclif/command";
import * as fs from "fs";
import { prompt } from "inquirer";
import chalk from "chalk";

export default class Config extends Command {
  static description = `Setup your account credentials.\n ${chalk.yellow(
    "NOTE:"
  )} This requires API keys from https://developer.twitter.com!`;

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" })
  };

  static args = [{ name: "file" }];

  static configQuestions = [
    {
      type: "input",
      name: "",
      message: "",
      default: ""
    }
  ];

  async run() {
    // Setup the user's configuration directory
    this.log("Setting up your configuration directory...");
    if (fs.existsSync(this.config.configDir)) {
      this.log(`Using: ${chalk.cyan(this.config.configDir)}`);
    } else {
      fs.mkdirSync(this.config.configDir);
      this.log(`Created: ${chalk.cyan(this.config.configDir)}`);
    }
    this.log(
      `${chalk.greenBright(
        "Success!"
      )} Your configuration directory has been setup!`
    );
    this.log();
    prompt([]);
  }
}
