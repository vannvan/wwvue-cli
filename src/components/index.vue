<template lang="html">
  <div class="">
      <h4 @click="loadPage('helloWorld',{a:1})" style="cursor:pointer">自定义方法跳转</h4>
      <h2 v-color>hello wwvue-cli</h2>
      <div style="width:80%;height:100px;margin:50px auto;line-height:100px;" v-theme>
        <p>这里已经可以看到背景颜色和字体颜色已经通过v-theme指令设置好了</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
