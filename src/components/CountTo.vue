<template>
  <countTo
    :startVal="startValue"
    :endVal="endValue"
    :duration="duration"
    :style="{fontSize:formatFontSize(size),fontWeight:formatFontSize(size)?'bold':'normal'}"
    style="display:inline-block"
    ref="count"
  ></countTo>
</template>

<script>
// https://www.npmjs.com/package/vue-count-to
import countTo from "vue-count-to";
export default {
  name: "CountTo",
  components: {
    countTo
  },
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: null,
      validator: function(value) {
        return ["h1", "h2", "h3", "h4", "h5", "h6"].indexOf(value) !== -1;
      }
    },
    duration: {
      type: Number,
      default: 3000
    }
  },

  data() {
    return {
      startValue: 0,
      endValue: 0
    };
  },

  watch: {
    endVal: {
      handler(newVal, oldVal) {
        if (newVal != oldVal) {
          this.startValue = oldVal;
          this.endValue = newVal;
        }
      }
    }
  },

  computed: {
    formatFontSize() {
      return h => {
        const MAPS = {
          h1: "2em",
          h2: "1.5em",
          h3: "1.17em",
          h4: "1em",
          h5: ".83em",
          h6: ".75em"
        };
        return MAPS[h] || "1em";
      };
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.startValue = this.startVal;
      this.endValue = this.endVal;
    });
  }
};
</script>

<style>
</style>