<template>
  <div class="describe">
    <h1>开箱说明：</h1>
    <p>
      此模板基于
      <small v-warn>iview-design</small> 进行开发,何种场景/哪些人可以基于此模板开发？
    </p>
    <ul>
      <li>需要较短时间内完成后台管理平台项目搭建及初始化的；</li>
      <li>
        初次使用
        <small v-warn>iview</small> 框架进行开发的同学需要交流学习的；
      </li>
    </ul>
    <h1>有哪些东西？</h1>
    <ul>
      <li>拥有几乎所有后台管理系统都会用到的基础组件</li>
      <li>目前界面肉眼可见的已封装好的组件和界面;</li>
      <li>权限及路由的相关配置；</li>
      <li>接口模块化管理示例；</li>
      <li>
        <small v-warn>Ehcarts.js</small>使用示例，
        （ 之所以没有大量封装的是因为->
        根据业务场景的不同每个项目都有对组件对外暴露接口及参数的个性化需求，这里写得过多难免显得繁琐且臃肿）；
      </li>
      <li>已二次封装及可以轻松改造的三方插件；</li>
      <li>
        开箱即用的cli工具，具体使用方式可使用
        <small v-warn>wwvue list</small>获取
      </li>
    </ul>
  </div>
</template>

<script>
// const { getUserList } = require("@/api").User;
export default {
  data() {
    return {
      //
    };
  },
  mounted() {
    // this.$Message.info("这是一个接口请求的示例");
    // getUserList().then(res => {
    //   console.log(res);
    // });
  },
  methods: {}
};
</script>

<style lang="scss">
.describe {
  p,
  li {
    line-height: 35px;
    font-size: medium;
  }
  ul {
    margin-left: 25px;
  }
}
</style>