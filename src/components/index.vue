<template lang="html">
  <div class="">
    <h1>
      <router-link to="/helloWorld">router-link跳转</router-link>
      <h1 @click="loadPage('helloWorld')" v-color>自定义方法跳转</h1>
      <div style="width:100%;height:100px;margin-top:50px;" v-theme>
        <p>这里已经可以看到背景颜色和字体颜色已经通过v-theme指令设置好了</p>
      </div>
    </h1>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
h1{
  cursor: pointer;
}
</style>
