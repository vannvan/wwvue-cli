<template>
  <div>
    <h1>阿哈哈哈</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'

export default defineComponent({
  setup() {
    const AppInfo: Ref = ref(null)

    return {
      AppInfo
    }
  }
})
</script>

<style scoped lang="scss"></style>
