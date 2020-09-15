<template>
  <div>
    <h1>WIcon图标组件</h1>
    <div class="icon-wrap">
      <div class="icon-item" v-for="(item, index) in iconList" :key="index">
        <w-icon :class="item" :style="{color:randomColor()}" size="28"></w-icon>
        <p>{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { randomColor } from "@/utils";
import iconList from "@/assets/js/icon.json";
export default {
  data() {
    return {
      iconList: iconList
    };
  },

  computed: {
    randomColor() {
      return i => {
        return randomColor(i);
      };
    }
  }
};
</script>

<style lang="scss">
.icon-wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .icon-item {
    width: 120px;
    height: 80px;
    text-align: center;
  }
}
</style>