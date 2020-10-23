<template>
  <div>
    新建模板
  </div>
</template>

<script>
const { getModelList, getPagesList } = require("@/api").Model;

export default {
  data() {
    return {
      //
    };
  },
  mounted() {
    this.getModelList();
    this.getPageList();
  },

  methods: {
    //获取页面列表
    getPageList() {
      getPagesList().then(res => {
        console.log(res);
      });
    },

    getModelList() {
      let params = {
        pageName: "test"
      };
      getModelList(params).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style>
</style>