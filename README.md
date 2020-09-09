## About

集成了`sass` 、`axios` 、`vuex`等 vue 项目必要依赖，同时完善了这些插件的使用配置，对 vuex 进行了模块化管理，集成了部分常用的方法，包含自定义指令的运用场景参考、全局混入的运用场景参考、接口封装等实际项目的标准化模块。

![](https://badgen.net/npm/dm/wwvue-cli)
![](https://badgen.net/npm/v/wwvue-cli)
![](https://badgen.net/npm/node/next)
![](https://badgen.net/github/commits/vannvan/wvue-cli)
![](https://badgen.net/github/last-commit/vannvan/wvue-cli)

## Function List

- 静态资源存放位置统一管理
- 公共样式管理、字体库、第三方脚本统一管理
- 开箱即用的 sass
- router 统一管理
- vuex 模块化管理
- 接口统一管理
- 公共指令基础配置
- 全局混入基础配置
- 自定义组件导出和引入
- 命令行打包压缩
- 命令行生成项目目录树
- 命令行一步 push 本地仓库
- 自动获取局域网 ip，打开局域网 server
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

> npm run tree //命令行查看  
> npm run tree >>tree.txt //生成文件

## Create custom components

运用命令行生成标准的公共组件

> npm run ccc Modal

## Write packing time to index.html

将打包时间写入到 index.html,可以与 build 命令串行执行，也可以采用其他时机

> npm run write

## Analog interface data

本地模拟数据接口  
此功能算不上刚需，如不需要可在初始化完毕后删除 mock 目录，如有模拟数据的需要，可采取 mock 的方案，此方案可以避免`mock`插件的某些坑，当然任何方案都不可能是完美的，可按需选择。  
因为可能不算刚需，故采取将此功能做独立配置，不与主项目依赖产生交集，需在 mock 目录下单独安装依赖,安装完依赖后，运行命令：

> npm run serve

### 2019-12-08 大版本更新说明

1.对项目结构进行了进一步规划，去除之前不合理的结构形式；  
2.改写 api 配置形式，实行 api 分模块管理，避免大项目中单个 api 配置文件过长的问题，同时新增了请求/响应拦截的基本配置形式；  
3.新增多生产环境下的自动化配置 api 的方法，能够采取优雅的方式应对多环境打包的接口地址管理，而不用在打包前取手动修改配置；  
4.修复 npm run ccc 命令的 bug。  
PS:此次改造后的打包命令使用方式如下：

> npm run build test/prod/prepro //无参数将默认打包为 prod

具体改造方式参考[vue 不同生产环境打包配置方案](https://github.com/vannvan/archives/blob/master/VUE/vue%E4%B8%8D%E5%90%8C%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E6%89%93%E5%8C%85%E9%85%8D%E7%BD%AE%E6%96%B9%E6%A1%88.md)

### 2020-05-29 版本更新说明

由于最近在社区看到关于`vue.js`中关于`axios`封装的相关文章，特意回顾了一下本项目在该方面的封装形式，意识到还有一个**取消请求**的刚需并未涉及，而官方文档在该方面也没有明确的实例，网上很多相关的实例也是寥寥草草，故因此将现成的方案分享出来供大家交流学习。
看云上关于取消请求的实例是这样的：

```js
var CancelToken = axios.CancelToken;
var source = CancelToken.source();

axios
  .get("/user/12345", {
    cancelToken: source.token
  })
  .catch(function(thrown) {
    if (axios.isCancel(thrown)) {
      console.log("Request canceled", thrown.message);
    } else {
      // 处理错误
    }
  });

// 取消请求（message 参数是可选的）
source.cancel("Operation canceled by the user.");
```

显然像以上这样写是不合理的，取消多个请求以及分场景取消请求采用这种方式是极其不优雅的，所以我们需要通过请求拦截来实现多样化场景。  
通常我们需要切换页面则取消上一个页面为完成请求

首先使用 vuex 记录一个页面的请求队列，并实现清除请求队列

```js
//记录取消请求操作
store.registerModule("requestAction", {
  state: {
    cancelRequestQueue: []
  },
  mutations: {
    pushRequest: (state, src) => {
      state.cancelRequestQueue.push(src.cancelToken);
    },
    clearRequest: ({ cancelRequestQueue }) => {
      cancelRequestQueue.forEach(item => {
        item("路由跳转取消请求");
      });
      cancelRequestQueue = [];
    }
  }
});
```

然后我们需要在请求拦截中配置如下

```js
//请求拦截
Axios.interceptors.request.use(config => {
  config.cancelToken = new Axios.CancelToken(cancel => {
    store.commit("pushRequest", {
      cancelToken: cancel
    });
  });
  return config;
});
```

最后只需要在 router 发生切换时清除请求队列即可

```js
router.beforeEach(function(to, from, next) {
  store.commit("clearRequest"); // 取消请求,非常关键
  next();
});
```

如果配置成功，可以在页面中来回切换，可以到`status`为 canceled,表示已完成取消请求。
![](https://ae01.alicdn.com/kf/He96a8e92b8e14094be790b923b7b4692Q.png)

具体源码可以在 store/main.js 中查看，由于这里操作不算复杂就没有把功能进行拆分

### 2020-09-09 版本更新说明

截至目前，新增了 `simple` 分支，主要因为之前采用`vue-cli` 老版本搭建的项目总体比较`重`了点，故又采用 4.x 版本重新搭了一版项目，相对于之前对脚手架的默认配置改动较小了写，总体来说还是比较规范的操作了，不那么容易翻车。  
本着为了提高生产力的初衷，目前在仍在进行开发和完善的时基于`iview-desgin`的后台管理的简易模板。相较于`iview-admin`模板，避免了一些超级繁重的`utils`和门槛较高的各种封装和配置。着重考虑新手对于`Vue.js`本身和`iview`的理解，引入了几项最常用的插件，给了简单封装和使用的示例。
