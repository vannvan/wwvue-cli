/* eslint-disable new-cap */ /* eslint-disable new-cap */
<template>
  <div id="Button">
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
    <button @click="handleRecord()">录制</button>
    <button @click="handlePlay()">回放</button>
    <div id="radio" style="width: 500px; height: 300px; border: 1px solid #ccc"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted } from 'vue'
import * as rrweb from 'rrweb'
import 'rrweb-player/dist/style.css'
import RrwebPlayer from 'rrweb-player'

export default defineComponent({
  setup() {
    const events: Ref = ref(null)

    onMounted(() => {
      // 每 10 秒调用一次 save 方法，避免请求过多
      //   setInterval(save, 10 * 1000)
      // setTimeout(() => {}, 1200)
    })

    const handleRecord = () => {
      events.value = []
      rrweb.record({
        emit(event: any) {
          // 将 event 存入 events 数组中
          events.value.push(event)
        }
      })
    }

    const handlePlay = () => {
      console.log('handlePlay')
      console.log(events.value)
      const values: number[] = events.value
      // eslint-disable-next-line no-new
      new RrwebPlayer({
        target: document.getElementById('radio') as HTMLElement,
        data: {
          values
        }
      })
    }

    return {
      handleRecord,
      handlePlay
    }
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

function onMounted(arg0: () => void) { throw new Error('Function not implemented.') }
