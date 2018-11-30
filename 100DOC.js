#!/usr/bin/env node
require("dotenv").config({ path: "./twitter-config.env" });
const twit = require("twit");
const chalk = require("chalk");
const log = console.log;

const T = new twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

console.log;

// const templateTweet = `#100DaysOfCode Day 011: JS30 29, some 'Bi-directional Data Flow' through React, and got oriented with 'react-transition-group'. --Tweeted from CLI (https://github.com/leeandher/twitter-from-cli)`;
// T.post("statuses/update", { status: templateTweet }, function(data) {
//   console.log(data);
// });

//To-do: dive into the twit package and disect, see if i can make my own functions
