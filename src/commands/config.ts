import { Command, flags } from "@oclif/command";
import { prompt } from "inquirer";
import * as fs from "fs";
import chalk from "chalk";

export default class Config extends Command {
  static description = `Setup your account credentials.\n ${chalk.yellow(
    "NOTE:"
  )} This requires API keys from https://developer.twitter.com!`;

  static flags = {
    help: flags.help({ char: "h" })
  };

  static configQuestions = [
    {
      type: "input",
      name: "consumer_key",
      message: "Consumer API Key"
    },
    {
      type: "input",
      name: "consumer_secret",
      message: "Consumer API Secret Key"
    },
    {
      type: "input",
      name: "access_token_key",
      message: "Access Token Key"
    },
    {
      type: "input",
      name: "access_token_secret",
      message: "Access Token Secret"
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

    // Setup the user's Twitter API credentials
    this.log(`\nWe're going to setup the Twitter API credentials now!
      \nGet your keys from ${chalk.cyan(
        "https://developer.twitter.com/apps"
      )}\nWe strongly recommend using a seperate app for these credentials.\n`);
    const configAnswers: any = await prompt(Config.configQuestions);

    // Overwriting usercredentials
    if (fs.existsSync(`${this.config.configDir}/creds.json`)) {
      this.log(
        `\n${chalk.yellow(
          "Warning:"
        )} Found existing credentials. Continuing with setup will overwrite these.`
      );
      const { confirm } = await prompt({
        type: "confirm",
        name: "confirm",
        message: "Continue?"
      });
      if (!confirm) this.exit(0);
    }

    // Save the credentials
    this.log("\nCreating credentials file...");
    const credsFile: string = `${this.config.configDir}${
      this.config.windows ? "\\" : "/"
    }creds.json`;
    try {
      fs.writeFileSync(credsFile, JSON.stringify(configAnswers));
      this.log(
        `${chalk.greenBright(
          "Success!"
        )} Your configuration file has been created!`
      );
      this.log(chalk.cyan(credsFile));
    } catch {
      this.error(
        `Something went wrong with creating your file.\n${chalk.red(credsFile)}`
      );
      this.log(chalk.red(credsFile));
    }

    // Woot!
    this.log(
      `\nYou can now start using ${chalk.cyan("twitter-cl")}! 
      \nGo ahead and try the command: ${chalk.cyan.underline("tcl feed")}`
    );
  }
}
