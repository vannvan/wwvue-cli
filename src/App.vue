<template>
  <Main />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Main from './components/layout/Main.vue'

export default defineComponent({
  name: 'App',
  components: {
    Main,
  },
})
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
