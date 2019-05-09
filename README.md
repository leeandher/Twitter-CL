# twitter-cl

A useful tool for those who prefer to interact with the terminal instead of the normal Twitter User Experience

 > 🚨 This project is still in development! Feel free to make PRs and Issues for mistakes and/or suggestions! 🚨

[![oclif](https://img.shields.io/badge/cli-oclif-blueviolet.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/twitter-cl.svg)](https://npmjs.org/package/twitter-cl)
[![CircleCI](https://circleci.com/gh/leeandher/twitter-cl/tree/master.svg?style=shield)](https://circleci.com/gh/leeandher/twitter-cl/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/twitter-cl.svg)](https://npmjs.org/package/twitter-cl)
[![License](https://img.shields.io/npm/l/twitter-cl.svg)](https://github.com/leeandher/twitter-cl/blob/master/package.json)

<!-- toc -->
* [twitter-cl](#twitter-cl)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [twitter-cl](#twitter-cl)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g twitter-cl
$ tcl COMMAND
running command...
$ tcl (-v|--version|version)
twitter-cl/0.0.1 win32-x64 node-v12.1.0
$ tcl --help [COMMAND]
USAGE
  $ tcl COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g twitter-cl
$ tcl COMMAND
running command...
$ tcl (-v|--version|version)
twitter-cl/0.0.1 darwin-x64 node-v10.13.0
$ tcl --help [COMMAND]
USAGE
  $ tcl COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`tcl config`](#tcl-config)
* [`tcl help [COMMAND]`](#tcl-help-command)
* [`tcl stream`](#tcl-stream)
* [`tcl tweet [FILE]`](#tcl-tweet-file)

## `tcl config`

Setup your account credentials.

```
USAGE
  $ tcl config

DESCRIPTION
  NOTE: This requires API keys from https://developer.twitter.com!
```

_See code: [src\commands\config.ts](https://github.com/leeandher/twitter-cl/blob/v0.0.1/src\commands\config.ts)_

## `tcl help [COMMAND]`

display help for tcl

```
USAGE
  $ tcl help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src\commands\help.ts)_

## `tcl stream`

Create a live feed of tweets you specify

```
USAGE
  $ tcl stream

OPTIONS
  -u, --user=user  Only show tweets by the given handles (or comma-separated handles, no @ symbol)
  -w, --word=word  Only show tweets containing the given word (or comma-separated words)
```

_See code: [src\commands\stream.ts](https://github.com/leeandher/twitter-cl/blob/v0.0.1/src\commands\stream.ts)_

## `tcl tweet [FILE]`

describe the command here

```
USAGE
  $ tcl tweet [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src\commands\tweet.ts](https://github.com/leeandher/twitter-cl/blob/v0.0.1/src\commands\tweet.ts)_
<!-- commandsstop -->
* [`tcl config`](#tcl-config)
* [`tcl hello [FILE]`](#tcl-hello-file)
* [`tcl help [COMMAND]`](#tcl-help-command)
* [`tcl stream [FILE]`](#tcl-stream-file)

## `tcl config`

Setup your account credentials.

```
USAGE
  $ tcl config

OPTIONS
  -h, --help  show CLI help

DESCRIPTION
  NOTE: This requires API keys from https://developer.twitter.com!
```

_See code: [src/commands/config.ts](https://github.com/leeandher/twitter-cl/blob/v0.0.1/src/commands/config.ts)_

## `tcl hello [FILE]`

describe the command here

```
USAGE
  $ tcl hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ tcl hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/leeandher/twitter-cl/blob/v0.0.1/src/commands/hello.ts)_

## `tcl help [COMMAND]`

display help for tcl

```
USAGE
  $ tcl help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src/commands/help.ts)_

## `tcl stream [FILE]`

describe the command here

```
USAGE
  $ tcl stream [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/stream.ts](https://github.com/leeandher/twitter-cl/blob/v0.0.1/src/commands/stream.ts)_
<!-- commandsstop -->
