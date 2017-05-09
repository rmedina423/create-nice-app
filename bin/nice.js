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
var projectName;

console.log(`\n 🕺   🐕   🐕   🐕   🐕   🐕   🐕   🐕   🐕   🐕   🐕   🐕   🐕   🐕   🐕   🕺 `);
rl.question(_chalk.yellow.bold(`\n 🐕  do you want to create your nice app with ${_chalk.blue.underline('yarn')} or ${_chalk.red.underline('npm')} ${_chalk.magenta('(y/n)')} ? `), function(answer) {

  rl.question(_chalk.yellow.bold(`\n 🐕  what do you want to name this project ${_chalk.red('(no spaces please)') + _chalk.cyan('(required)')} ? `), function(title) {
    projectName = title.trim();
    if(!projectName) {
      console.log(_chalk.black.bold('\n 👻  you have to enter a project name! 👻'));
      process.exit(1);
    }

    var userInput = answer.toLowerCase();
    var newPkgJsonValues = {
      name: projectName,
      description: `${projectName} is a really nice app 🕺`,
      version: '0.0.1'
    };

    // Questions for rebuilding the package json
    rl.question(_chalk.yellow.bold(`\n 🐕  what is the link to the github repository ${_chalk.cyan('(optional)')} ? `), function(repoUrl) {
      newPkgJsonValues.repository = repoUrl.trim();

      rl.question(_chalk.yellow.bold(`\n 🐕  who is the author ${_chalk.white('(optional)')} ? `), function(author) {
        newPkgJsonValues.author = author.trim();

        rl.question(_chalk.yellow.bold(`\n 🐕  What is the license ${_chalk.black('(MIT default)')} ? `), function(license) {
          newPkgJsonValues.license = license.toString() ? license.toString() : 'MIT';

          //create the new projects package.json
          fs.readFile(path.join(__dirname, '../package.json'), function(err, data) {
            console.log('yo');
            if (err) throw err;
            packageJSON = JSON.parse(data);
            delete packageJSON.bin;
            var newPackageJson = JSON.stringify(Object.assign({}, packageJSON, newPkgJsonValues), null, 2);

            // the source code for the shell project is in the global node_modules dir so we copy it's contents over
            if (userInput.includes('y')) {
              child_process.exec(
                `clear && mkdir ${projectName} && cd ${projectName} && ` +
                'cp -r ~/.config/yarn/global/node_modules/create-nice-app/. . && ' +
                'rm -r bin/ README.md package.json node_modules/ yarn.lock && ' +
                `echo '${newPackageJson}' > package.json && ` +
                `echo '#${projectName}\n![party-parrot](https://media.giphy.com/media/l3q2zVr6cu95nF6O4/giphy.gif)' > README.md && ` +
                'mv .npmignore .gitignore && ' +
                `yarn`,
                function(error, stdout, stderr) {
                  if (error) {
                    console.log('exec error: ', error);
                    process.exit(1);
                  }
                  console.log(_chalk.blue.bold(stdout))
                });
            } else {
              console.log(chalk.red.underline(` 💾  npm support is still in the works! sorry!  💾 `));
              process.exit(1);
            }
          });
          rl.close();
        });
      });
    });
  });
});
