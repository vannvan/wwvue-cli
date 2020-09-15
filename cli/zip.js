#!/usr/bin/env node

process.stdin.setEncoding('utf8');
const compressing = require('compressing');
const inquirer = require('inquirer');
const chalk = require('chalk');
const symbols = require('log-symbols');
const fs = require('fs');
const promptList = [{
    type: 'list',
    name: 'type',
    message: '部署环境:',
    choices: ['test', 'pre', 'prod']
}]

const prefixName = ''; //默认压缩包前缀
const time = formatDateToString(new Date());

inquirer.prompt(promptList).then((answers) => {
    let { type } = answers
    let packName = prefixName + type + '_' + time
    toPack(packName)
    // writeApiConfig(area,type)
})

// 执行打包
const toPack = async function(packName) {
    // await writeApiConfig()
    await writePackVersionToIndex(packName)
    await toZip(packName)
}

// 052910 格式
function formatDateToString(date) {
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    let fm = month < 10 ? '0' + month : month;
    let fd = day < 10 ? '0' + day : day;
    let fh = hour < 10 ? '0' + hour : hour;
    return fm.toString() + fd + fh
}


//执行压缩
function toZip(name) {
    compressing.zip.compressDir('dist', `${name}.zip`)
        .then(() => {
            console.log(symbols.success, chalk.green(`${name}.zip` + '已保存至项目目录！'));
            process.exit()
        })
        .catch(err => {
            console.error(err);
        });
}
//给index追加打包时间注释
function writePackVersionToIndex(packName) {
    var time = new Date().toLocaleString()
    var append = `\n <!--packTime: ${time} packName: ${packName} --> \n`;
    fs.appendFile('dist/index.html', append, 'utf8', function(err) {
        if (err) {
            console.log(err);
        }
        console.log(symbols.success, chalk.green('打包信息已追加至index.html'));
    });
}

process.on('SIGINT', function() {
    console.log('Exit now!');
    process.exit();
});