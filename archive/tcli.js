#!/usr/bin/env node
const program = require("commander");

// program
//   .version("0.1.0", "-v, --version")
//   .option("-t, --tweet", "Tweet through your account")
//   .option("-r, --reply", "This is how you reply!")
//   .option("-rt, --retweet", "This is how you retweet!")
//   .option("-s, --stream", "This is how you stream tweets!")
//   .option("-tl, --timeline", "This is how you see your timeline!")
//   .parse(process.argv);

program
  .version("0.1.0", "-v, --version")
  .option("-u, --username <username>", "The user's sign-in twitter handle")
  .option("-u, --username <username>", "The user's sign-in password")
  .action(() => {
    co(() => {
      const username = yield prompt('Username: ');
      const password =  yield prompt('Password: ');
    })
  })
