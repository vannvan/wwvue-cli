<template lang="html">
  <div class="">
    <h1>
      <router-link to="/helloWorld">router-link跳转</router-link>
      <h2 @click="loadPage('helloWorld')" v-color>自定义方法跳转</h2>
      <div style="width:80%;height:100px;margin:50px auto;line-height:100px;" v-theme>
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
