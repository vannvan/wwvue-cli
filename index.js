#!/usr/bin/env node
const fs = require('fs');
const program = require('commander');
const download = require('download-git-repo');
const handlebars = require('handlebars');
const inquirer = require('inquirer');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');
const shell = require("shelljs");


var userEmail = shell.exec('git config user.email').toString().trim();
const promptList = [
        {
          name: 'description',
          message: 'Project description:',
          default: 'A Vue.js project'
        },
        {
          name: 'author',
          message: 'Project author:',
          default: userEmail
        }
      ]
program.version('1.0.5', '-v, --version')
  .command('init <name>')
  .action((name) => {
    if(!fs.existsSync(name)){
      inquirer.prompt(promptList).then((answers) => {
        const spinner = ora('正在下载模板...');
        spinner.start();
        download('https://github.com:vannvan/wvue-cli#master', name, {clone: true}, (err) => {
          if(err){
            spinner.fail();
            console.log(symbols.error, chalk.red(err));
          }else{
            spinner.succeed();
            const fileName = `${name}/package.json`;
            const meta = {
              "name":name,
              "description": answers.description,
              "author": answers.author
            }
            if(fs.existsSync(fileName)){
              const content = fs.readFileSync(fileName).toString();
              const result = handlebars.compile(content)(meta);
              // console.log(result)
              fs.writeFileSync(fileName, result);
            }
            console.log(symbols.success, chalk.green('项目初始化完成'));
          }
        })
      })
    }else{
      console.log(symbols.error, chalk.red('项目已存在'));
    }
  })
program.parse(process.argv);