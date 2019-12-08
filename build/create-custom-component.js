/*
* @Author: vannvan <https://github.com/vannvan>
* @Date:   2019-09-12 15:28:19
* @Last Modified by:   vannvan
* @Last Modified time: 2019-09-16 10:19:28
*/
const fs = require("fs");
const chalk = require('chalk');  //chalk组件建议安装在全局
const path = require('path')
let componentName = process.argv[2]   //组件名

if(!componentName) {
	console.log(chalk.red('组件名不可缺省'))
	return false
}else{
	componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1)
}

const componentFullPath = resolve('packages/') + componentName;

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

/*
* @ 新建组件文件夹
* @ dirName 文件夹名称
*/
const mkdir = (dirName) => {
	return new Promise((resolve,reject) => {
		fs.mkdir(dirName,function(error){
		    if(error){
		        console.log(error);
		        return false;
		    }
		    resolve(dirName)
		})
	})
}

/*
* @ 新建组件文件，写入模板内容
* @ componentName 组件名
* @ template 模板字符串
*/

const touchComponent = (componentName,template) => {
	return new Promise((resolve,reject) => {
		fs.writeFile(componentName,template,{flag:'w',encoding:'utf-8',mode:'0666'},function(error){
		     if(error){
		         console.log(chalk.red('模板文件写入失败'))
		     }else{
		         console.log(chalk.green(componentName + "模板文件写入成功"));
		     }
		})
	})
}

/*
* @ 根据文件类型获取模板内容
* @ fileType 文件类型
 */

const getTemplateType = (fileType) => {
		//读取模板，将模板中的componentName替换为当前组件名
		try{
			var templateModal =  fs.readFileSync("build/componentModal/Component."+fileType, "utf-8", function(error, data) {
			  if (error) return console.log(chalk.red("读取文件失败" + error.message));
			});
			var template = templateModal.toString()
		    return template.replace(new RegExp(/ComponentName/g), componentName)
		}catch(error) {
			console.log(error)
		}
}


(function() {
	mkdir(componentFullPath)
	.then(res => {
		mkdir(`${res}/src`)
	.then(src =>{
		touchComponent(`${componentFullPath}/index.js`,getTemplateType('js'))
		touchComponent(`${componentFullPath}/src/${componentName}.vue`,getTemplateType('vue'))
	})
 })
})()
