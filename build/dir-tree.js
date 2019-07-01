#!/usr/bin/env node
/*
* @Author: wanwan
* @Date:   2019-06-29 15:25:17
* @Last Modified by:   wanwan
* @Last Modified time: 2019-06-29 16:57:48
* 生成项目目录树，排除一些不必要的文件夹
*/
const fs = require('fs');
const path = require('path');
/*
* @source 源数组
* @values 需要过滤掉的元素
*/

const pick = (source, values) => source.filter(srcItem => values.every(val => srcItem!=val))

const exclude =['node_modules', '.github','.git','dist','.gitignore','.editorconfig','.babelrc']   //排除项

var target = path.join(__dirname, process.argv[2] || '../');

function load(target, depth) {
  var prefix = new Array(depth + 1).join('│ ');// join()函数的妙用
  //  读取一个目录的内容,并过滤不需要的
  var dirinfos = pick(fs.readdirSync(target), exclude)
  var dirs = [];
  var files = [];
 
  dirinfos.forEach(info=> {
    var stats = fs.statSync(path.join(target, info));
    if (stats.isFile()) {
      files.push(info);
    } else {
      dirs.push(info);
    }
  });
 
  dirs.forEach(dir=> {
    console.log(`${prefix}├─ ${dir}`); 
    load(path.join(target, dir), depth + 1);
  });
 
  var count = files.length - 1;  
  files.forEach(file=> {
    var temp = count-- ? '├' : '└';  
    console.log(`${prefix}${temp}─${file}`);
  });
}
 

load(target, 0);

//usage: node tree.js  >>list.txt