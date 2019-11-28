<template lang="html">
  <div class="">
      <div class="cli-header">
        <div class="logo"><h1>wwvue-cli</h1></div>
        <div class="nav">
          <li><a href="#介绍">介绍</a></li>
          <li><a href="#特性">特性</a></li>
          <li><a href="#常见问题">常见问题</a></li>
        </div>
      </div>
      <div class="cli-main">
          <div class="intro" id="介绍">
            <h1>Vue.js最佳实践</h1>
            <h2>轻松搭建 无需配置 快速上手</h2>
            <span class="cli-btn" @click="github()">查看源码</span>
          </div>
          <div class="features" id="特性">
            <div class="title">项目特性</div>
            <div class="list">
              <div class="item-col-3">
                <h3>无需配置</h3>
                能够适应各类项目基础框架，无需配置Axios,Vuex,Router等基础模块
              </div>
              <div class="item-col-3">
                <h3>快速上手</h3>
                项目提供的mixins,derective,scss等都有简单的示例,只需在原有文件的基础上进行改造、扩展即可满足各类需求
              </div>
              <div class="item-col-3">
                <h3>敏捷开发</h3>
                包含多种命令行工具,提高生产力
              </div>
            </div>
          </div>
          <div class="issues" id="常见问题">
            <div class="title">常见问题</div>
            <div class="list">
              <div class="item-col-2">
                <p>1、命令行工具怎么用？</p>
                <p>以压缩dist文件夹为例，在项目根目录运行npm run pack即可在项目根目录生成形如wwvue-cli_090945.zip这样的压缩文件，其他命令行工具<a v-danger href="https://github.com/vannvan/wvue-cli/tree/1.x">详见</a></p>
              </div>
              <div class="item-col-2">
                <p>2、怎么修改命令行工具满足个性化需求？</p>
                <p>命令行工具目前包含，仓库快速提交、生成目录树、生成自定义组件文件框架、dist压缩，具体文件均在build文件夹下，注释齐全可轻易完成改造</p>
              </div>
              <div class="item-col-2">
                <p>3、Vuex模块化具体使用方式？</p>
                <p>Vuex封装在store文件夹下，入口为main.js，模块化使用方式可参考baseInfo</p>
                <p>在main.js中引入,后modules中添加</p>
                <pre>
    modules: {
      baseInfoStore: baseInfo_store,
      //
    },
                </pre>
              </div>
            </div>
          </div>
      </div>
      <div class="cli-footer">
          author@ vannvan https://github.com/vannvan
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    github() {
      window.location.href="https://github.com/vannvan/wvue-cli"
    }
  }
}
</script>

<style lang="scss">
*{
  color: #fff;
}
h1{
  font-size: 50px;
  text-align: center;
}
h2{
  text-align: center;
}
.cli-header{
  height: 80px;
  width: 100%;
  background: #00649F;
  line-height: 80px;
  display: flex;
  justify-content: space-between;
  color: #f6f6f6;
  .logo{
    width: 30%;
    margin-left: 10%;
  }
  .nav{
      margin-right: 10%;
      li{
        list-style: none;
        float: left;
        padding: 0 50px;
        font-weight: bold;
        cursor: pointer;
        a{
          text-decoration: none
        }
      }
  }
}
.cli-main{
  width: 100%;
  background: #01AAC1;
  .intro{
    height: 400px;
    padding-top:100px;
    color: #fff;
    h2{
      text-align: center;
      margin-top: 35px
    }
    .cli-btn{
      width: 150px;
      height: 50px;
      margin: 25px auto;
      display: block;
      text-align: center;
      line-height: 50px;
      border:#f6f6f6 solid 1px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  .features{
    background: #00649F;
    height: auto;
    padding-bottom: 35px;
    padding-top: 50px;
    .title{
      height: 80px;
      text-align: center;
      font-size: 35px;
      line-height: 80px;
    }
    .list{
      display: flex;
      // padding-left: 10%;
      .item-col-3{
        width: 30%;
        margin:0 5%;
        height: 180px;
        padding: 35px;
        // background: #f00;
        line-height: 45px;
        h3{
          line-height: 60px;
        }
      }
    }
  }
  .issues{
    background: #01AAC1;
    padding-bottom: 35px;
    padding-top: 50px;
    height: auto;
    .title{
      height: 80px;
      text-align: center;
      font-size: 35px;
      line-height: 80px;
    }
    .list{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item-col-2{
        width: 36%;
        margin:25px 5%;
        height: 180px;
        padding:35px;
        p{
          line-height: 45px;
        }
      }
    }
  }
}
.cli-footer{
  height: 60px;
  width: 100%;
  background: #00649F;
  text-align: center;
  line-height: 60px;
}
</style>
