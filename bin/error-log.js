'use strict';

var chalk = require('chalk');

module.exports = function log(msg) {
  console.error(chalk.red('TRELLO WEBHOOK SERVER: ' + msg));
};