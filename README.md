## About

集成了`sass` 、`axios` 、`vuex`等vue项目必要依赖，同时完善了这些插件的使用配置，对vuex进行了模块化管理，集成了部分常用的方法，包含自定义指令的运用场景参考、全局混入的运用场景参考、接口封装等实际项目的标准化模块。

![](https://badgen.net/npm/dm/wwvue-cli)
![](https://badgen.net/npm/v/wwvue-cli)
![](https://badgen.net/npm/node/next)
![](https://badgen.net/github/commits/vannvan/wvue-cli)
![](https://badgen.net/github/last-commit/vannvan/wvue-cli)

## Function List
- 静态资源存放位置统一管理
- 公共样式管理、字体库、第三方脚本统一管理
- 开箱即用的sass
- router统一管理
- vuex模块化管理 store
- 接口统一管理  urlconfig
- 公共指令基础配置 directive
- 全局混入基础配置 mixins
- 自定义组件导出和引入a
- 命令行打包压缩  
- 命令行生成项目目录树
- 命令行一步push本地仓库
- 自动获取局域网ip，打开局域网server
- 等待挖掘...

## Install

> npm i wwvue-cli -g

## Usage

> wwvue init project-name

## Command line deployment

运用命令行完成每次版本的更新,将本地更新推送至远程仓库。

> npm run push init

## Command line packaging

运用命令行完成每次需要交付的项目压缩文件。

> npm run pack

## Generate directory tree

运用命令行生成项目目录树

> npm run tree    //命令行查看  
> npm run tree >>tree.txt    //生成文件  
## Analog interface data
本地模拟数据接口  
此功能算不上刚需，如不需要可在初始化完毕后删除mock目录，如有模拟数据的需要，可采取mock的方案，此方案可以避免`mock`插件的某些坑，当然任何方案都不可能是完美的，可按需选择。  
因为可能不算刚需，故采取将此功能做独立配置，不与主项目依赖产生交集，需在mock目录下单独安装依赖,安装完依赖后，运行命令：
> npm run serve


### 2019-12-08大版本更新说明
1.对项目结构进行了进一步规划，去除之前不合理的结构形式；  
2.改写api配置形式，实行api分模块管理，避免大项目中单个api配置文件过长的问题，同时新增了请求/响应拦截的基本配置形式；  
3.新增多生产环境下的自动化配置api的方法，能够采取优雅的方式应对多环境打包的接口地址管理，而不用在打包前取手动修改配置；
4.修复npm run ccc命令的bug。  
PS:此次改造后的打包命令使用方式如下：
> npm run build test/prod/prepro  //无参数将默认打包为prod

具体改造方式参考[vue不同生产环境打包配置方案](https://github.com/vannvan/archives/blob/master/VUE/vue%E4%B8%8D%E5%90%8C%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E6%89%93%E5%8C%85%E9%85%8D%E7%BD%AE%E6%96%B9%E6%A1%88.md)
