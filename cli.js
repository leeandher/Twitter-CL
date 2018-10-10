#!/usr/bin/env node
require("dotenv").config();
const twit = require("twit");
const chalk = require("chalk");
const log = console.log;

const T = new twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

const track = "lit";
const stream = T.stream("statuses/filter", { track });

stream.on("tweet", function(tweet) {
  if (tweet.user.lang === "en") {
    log(
      chalk.cyanBright.bold(`${tweet.user.name} (@${tweet.user.screen_name})`)
    );

    log(tweet.text);
    log("");
  }
});
