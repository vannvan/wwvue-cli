<template>
  <div>
    <div class="button-wrap">
      <w-button type="primary" size="small"> 按钮 </w-button>
      <w-button type="primary"> 按钮 </w-button>
      <w-button type="primary" size="large"> 按钮 </w-button>
    </div>
    <div class="button-wrap">
      <w-button type="primary"> 按钮 </w-button>
      <w-button type="success"> 按钮 </w-button>
      <w-button type="info"> 按钮 </w-button>
      <w-button type="error"> 按钮 </w-button>
    </div>
    <div class="button-wrap">
      <w-button plain> 按钮 </w-button>
      <w-button type="primary" plain> 按钮 </w-button>
      <w-button type="success" plain> 按钮 </w-button>
      <w-button type="info" plain> 按钮 </w-button>
      <w-button type="error" plain> 按钮 </w-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.button-wrap {
  display: flex;
  button {
    margin-right: 12px;
    margin-bottom: 8px;
  }
}
</style>
