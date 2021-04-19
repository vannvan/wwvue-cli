<template>
  <div class="layout-menu">
    <el-menu
      :uniqueOpened="true"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>基础</span>
        </template>
        <el-menu-item index="1-1" @click="navClick('/vuex')">vuex</el-menu-item>
        <el-menu-item index="1-2" @click="navClick('/axios')">axios</el-menu-item>
        <el-menu-item-group title="group2">
          <el-menu-item index="1-3">example</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="5">
        <template #title>
          <i class="el-icon-location"></i>
          <span>组件</span>
        </template>
        <el-menu-item index="5-1" @click="navClick('/button')">button</el-menu-item>
        <el-menu-item index="5-2">message</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const reactiveData = reactive({
      navClick(path: string) {
        //
        router.push(path)
      },
      handleOpen(path: string) {
        //
      },

      handleClose(path: string) {
        //
      }
    })
    return {
      ...toRefs(reactiveData)
    }
  }
})
</script>

<style scoped lang="scss">
.layout-menu {
  width: 240px;
  height: calc(100vh - 60px);
  background: #545c64;
  overflow: hidden;
}
</style>
