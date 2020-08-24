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
const getGitUser = require("../lib/git-user");

var author = getGitUser() || ''

if (!process.argv[2] || !process.argv[3]) {
    console.log(chalk.red('Maybe you need to initialize the project. Please input it as follows:'))
    console.log('wwvue init project-name')
    process.exit(1)
}
const promptList = [{
        name: 'description',
        message: 'Project description:',
        default: 'A Vue.js project'
    },
    {
        name: 'author',
        message: 'Project author:',
        default: author
    },
    {
        message: 'packagePrefix:',
        name: 'packPrefix',
        default: "wwvue-cli"
    },
    {
        type: "list",
        message: "TemplateType",
        name: "templateType",
        default: "simple",
        choices: [{
                key: 'simple',
                value: "simple"
            },
            {
                key: "1.x",
                value: "1.x"
            }
        ],
    }
]

const CLI_LIST = {
    "compress dist": "npm run pack",
    "fast push": "npm run push init",
    "creating directory tree": "npm run tree",
    "creating custom components": "npm run ccc Alert"
}

program.version('1.0.7', '-v, --version')
    .command('init <name>')
    .action((name) => {
        if (!fs.existsSync(name)) {
            inquirer.prompt(promptList).then((answers) => {
                const spinner = ora('Downloading template,please wait...');
                spinner.start();
                download(`https://github.com:vannvan/wvue-cli#${answers.templateType}`, name, { clone: true }, (err) => {
                    if (err) {
                        spinner.fail();
                        console.log(symbols.error, chalk.red(err));
                    } else {
                        spinner.succeed();
                        const fileName = `${name}/package.json`;
                        const meta = {
                            "name": name,
                            "description": answers.description,
                            "author": answers.author,
                            "packPrefix": answers.packPrefix
                        }
                        if (fs.existsSync(fileName)) {
                            const content = fs.readFileSync(fileName).toString();
                            const result = handlebars.compile(content)(meta);
                            fs.writeFileSync(fileName, result);
                        }
                        console.log(symbols.success, chalk.green('Project initialization complete'));
                        console.log('this project cli example:')
                        console.group()
                        console.table(CLI_LIST)
                        console.groupEnd()
                        console.log(chalk.green('Wish you a smooth development！！！'));
                    }
                })
            })
        } else {
            console.log(symbols.error, chalk.red('Project already exists'));
        }
    })
program.parse(process.argv);