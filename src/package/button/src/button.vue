<template>
  <button
    :class="[
      'wui-button',
      type ? 'wui-button-' + type : '',
      buttonSize ? 'wui-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import type { PropType } from 'vue'

type WButtonType = PropType<'primary' | 'success' | 'default' | 'error' | 'info'>

type WButtonSize = PropType<'default' | 'large' | 'small'>

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
    },
    size: {
      type: String as WButtonSize,
      default: 'default',
      validator: (val: string) => {
        return ['large', 'default', 'small'].includes(val)
      }
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },

  setup(props) {
    const buttonSize = computed(() => {
      return props.size
    })
    return {
      buttonSize
    }
  }
})
</script>

<style scoped></style>
