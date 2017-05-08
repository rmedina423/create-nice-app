#!/usr/bin/env node
var _chalk = require('chalk');
var readline = require('readline');
var child_process = require('child_process');
var fs = require('fs');
var path = require('path');



var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var packageJSON;
fs.readFile(path.join(__dirname, '../package.json'), function(err, data) {
  if (err) throw err;
  packageJSON = JSON.parse(data);
  var scripts = packageJSON.scripts;
  var dependencies = packageJSON.dependencies;
  var devDependencies = packageJSON.devDependencies;

  rl.question(_chalk.yellow.bold(`\n 🐕  do you want to create your nice app with ${_chalk.blue.underline('yarn')} or ${_chalk.red.underline('npm')} ${_chalk.magenta('(y/n)')} ? `), function(answer) {
    console.log(` 🐕`);
    console.log(` 🐕`);
    console.log(` 🐕`);
    var userInput = answer.toLowerCase();
    if (userInput.includes('y')) {
      console.log('wahhads');
      child_process.exec('cp -r /usr/local/lib/node_modules/create-nice-app/ . && rm .git README.md package.json && yarn init', function(error, stdout, stderr) {
        if (error) console.log('exec error: ', error);
        console.log('nice');
      });
    } else {
      rl.close();
    }
  });
});


