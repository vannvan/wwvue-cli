<template lang="html">
    <i :class="iclass" :style="styles" @click="handleClick()"></i>
</template>
<script>
const prefixCls = 'wui-icon';
export default {
  name:'WIcon',
  props: {
    type: {
      type: String,
    },
    size: [Number, String],
    color: {
      type: String,
      default: "#999"
    },
  },
  computed:{
    iclass(){
      return `${prefixCls} ${this.type}`;
    },
    styles () {
        let style = {};
        if (this.size) {
            style['font-size'] = `${this.computedSize}px`;
        }
        if (this.color) {
            style.color = this.color;
        }
        return style;
    },
    computedSize(){
      switch (this.size) {
        case 's':
          return 14
          break;
        case 'm':
          return 28
          break;
        case 'l':
          return 36
          break;
        default:
          return this.size
      }
    }
  },
  mounted() {
    //do something after mounting vue instance

  },
  methods: {
    handleClick(event) {
      this.$emit('click',event)
    }
  }
}
</script>

<style lang="scss">
</style>
