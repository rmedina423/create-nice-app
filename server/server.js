'use strict';
const express = require('express');
const chalk = require('chalk');
const index = require('../public/index.html.js');
var path = require('path');

module.exports = {
  getApp: (app = express()) => {
    app.use(express.static('public'));
    app.use('/*', (req, res) => res.send(index()));

    return app;
  },
  start: (port, app) => {
    app.listen(port, () =>
      console.log(`\n${chalk.black('~'.repeat(28))}`
        + `\n${chalk.yellow.underline.bold('Server started on port:' + port)}`
        + `\n${chalk.black('~'.repeat(28))}\n`))
  }
};