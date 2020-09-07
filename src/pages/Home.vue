<template>
  <div>home</div>
</template>

<script>
const { getUserList } = require("@/api").User;
export default {
  data() {
    return {
      //
    };
  },
  mounted() {
    getUserList().then(res => {
      console.log(res);
    });
  },
  methods: {}
};
</script>

<style>
</style>