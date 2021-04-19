<template>
  <button :class="type">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import type { PropType } from 'vue'

type WButtonType = PropType<'primary' | 'success' | 'default' | 'error' | 'info'>

interface WButtonProps {
  type: string
}

export default defineComponent({
  name: 'WButton',
  props: {
    type: {
      type: String as WButtonType,
      default: 'default',
      validator: (val: string) => {
        return ['default', 'primary', 'info', 'error', 'success'].includes(val)
      }
    }
  },

  setup(props) {
    return {}
  }
})
</script>

<style scoped></style>
