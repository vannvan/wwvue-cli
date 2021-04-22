<template>
  <div class="layout-header">
    <div class="logo-wrap">
      <img src="../../assets/logo.png" alt="" />
      <h3>wwvue-cli</h3>
    </div>
    <div class="header-right-content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.layout-header {
  height: 60px;
  background: #fff;
  color: #fff;
  line-height: 60px;
  display: flex;
  width: 100vw;
  justify-content: flex-start;
  .logo-wrap {
    width: 240px;
    background: #545c64;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
      height: 32px;
    }
    h3 {
      display: inline-block;
    }
  }
  .header-right-content {
    flex: 1;
    box-shadow: 0px 3px 3px 0px rgba(#999, 0.55);
  }
}
</style>
