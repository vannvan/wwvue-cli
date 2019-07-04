## About

集成了`sass` 、`axios` 、`vuex`等vue项目必要依赖，同时完善了这些插件的使用配置，对vuex进行了模块化管理，集成了部分常用的方法，包含自定义指令的运用场景参考、全局混入的运用场景参考、接口封装等实际项目的标准化模块。

![](https://badgen.net/npm/dm/wwvue-cli)
![](https://badgen.net/npm/v/wwvue-cli)
![](https://badgen.net/npm/node/next)
![](https://badgen.net/github/commits/vannvan/wvue-cli)
![](https://badgen.net/github/last-commit/vannvan/wvue-cli)
## Install

> npm i wwvue-cli -g

## Usage

> wwvue init project-name

## Catelog

├─ build  
│ ...  
│ ├─dir-tree.js  
│ ├─push.js  
│ ├─zip.js  
├─ config  
│ ├─dev.env.js  
│ ├─get-ip.js  
│ ├─index.js  
│ └─prod.env.js  
├─ packages     //custom components  
│ ├─ icon  
│ │ ├─ src  
│ │ │ └─icon.vue  
│ │ └─index.js  
│ └─index.js  
├─ src  
│ ├─ assets  
│ │ ├─ fonts  
│ │ ├─ images  
│ │ │ └─Catalog.png    
│ │ ├─ js    
│ │ │ └─urlConfig.js  //global urlConfig  
│ │ ├─ scss  
│ │ │ ├─common.scss  
│ │ │ ├─icomoon.css  
│ │ │ └─wvue-cli.scss  
│ │ └─logo.png  
│ ├─ components  
│ │ ├─ common  
│ │ │ ├─ directive  
│ │ │ │ └─index.js  
│ │ │ ├─ mixins  
│ │ │ │ └─index.js  
│ │ ├─ views  
│ │ └─index.vue  
│ ├─ router  
│ │ └─index.js  
│ ├─ store  
│ │ ├─baseInfo.js  
│ │ └─main.js  
│ ├─App.vue  
│ └─main.js  
├─index.html  

<!-- ![](https://github.com/vannvan/wvue-cli/blob/master/src/assets/images/Catalog.png?raw=true) -->

## Command line deployment

运用命令行完成每次版本的更新,将本地更新推送至远程仓库。

> npm run push init

## Command line packaging

运用命令行完成每次需要交付的项目压缩文件。

> npm run pack

## Generate directory tree

运用命令行生成项目目录树，并保存为txt文件。

> npm run tree >>tree.txt
## 更多人性化功能还在不断迭代更新！
