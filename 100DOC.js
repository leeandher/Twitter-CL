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

const templateTweet = `#100DaysOfCode Day 011: JS30 29, some 'Bi-directional Data Flow' through React, and got oriented with 'react-transition-group'. --Tweeted from CLI (https://github.com/leeandher/twitter-from-cli)`;
T.post("statuses/update", { status: templateTweet }, function(
  err,
  data,
  response
) {
  console.log(data);
});
