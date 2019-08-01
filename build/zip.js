#!/usr/bin/env node
process.stdin.setEncoding('utf8');
const compressing = require('compressing');
var pjson = require('../package.json');

const prefixName = pjson.packPrefix || 'wvue-cli_';  //默认压缩包前缀

function formatDateToString(date){
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var hour = date.getHours();
	let fm = month < 10 ? '0' + month: month;
	let fd = day < 10 ? '0' + day: day;
	let fh = hour < 10 ? '0' + hour: hour;
  	return fm+fd+fh
}
function toZip(name){
	compressing.zip.compressDir('dist', `${name}.zip`)
  .then(() => {
    console.log( `${name}.zip`+'已保存至项目目录！');
		process.exit()
  })
  .catch(err => {
    console.error(err);
  });
}

const time = formatDateToString(new Date());

process.stdout.write(`请输入压缩文件名:`)
process.stdin.resume()
process.stdin.on('data', (chunk) => {
	chunk = chunk.toString().trim();  //输入的文件名
  var name = chunk || prefixName + time;
	toZip(name)
});



process.stdin.on('end', () => {
  process.stdout.write('结束');
});
