<template>
  <div id="layout">
    <Header />
    <div class="layout-content">
      <Menu />
      <div class="layout-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Menu from './Menu.vue'
import Header from './Header.vue'

export default defineComponent({
  name: 'Main',
  components: {
    Menu,
    Header
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
#layout {
  background: #ededed;
  box-sizing: border-box;
  .layout-content {
    display: flex;
    .layout-right {
      flex: 1;
      margin: 10px;
      background: #fff;
      box-shadow: -2px 2px 13px 0px rgba(0, 0, 0, 0.75);
      border-radius: 6px;
      padding: 12px;
      height: calc(100vh - 120px);
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
}
</style>
