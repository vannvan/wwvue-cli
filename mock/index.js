const Koa = require('koa');
const Router = require('koa-router');
const glob = require("glob");
const logger = require('koa-logger')
const { resolve } = require('path');
const fs = require('fs');
const Ip = require('./lib/get-ip')

const app = new Koa();
const router = new Router({prefix: '/api'});
const routerMap = {};  // 存放路由映射

app.use(logger());

// 注册路由
glob.sync(resolve('./api', "**/*.json")).forEach((item, i) => {
    let apiJsonPath = item && item.split('/api')[1];
    let apiPath = apiJsonPath.replace('.json', '');

    router.get(apiPath, (ctx, next) => {
        try {
            let jsonStr = fs.readFileSync(item).toString();
            ctx.body = {
                data: JSON.parse(jsonStr),
                state: 200,
                message: 'success' // 自定义响应体
            }
        }catch(err) {
            ctx.throw('服务器错误', 500);
        }
      });

    // 记录路由
    routerMap[apiJsonPath] = apiPath;
});

fs.writeFile('./routerMap.json', JSON.stringify(routerMap, null , 4), err => {
    if(!err) {
        console.log('路由地图生成成功！')
    }
});

app
  .use(router.routes())
  .use(router.allowedMethods());

// app.listen(3000,Ip.getWlanIp() || '127.0.0.1');  //需要局域网可以开启这一行
app.listen(3000,'127.0.0.1');
