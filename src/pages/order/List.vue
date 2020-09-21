<template>
  <div>
    <Table :columns="columns" :data="tableData"></Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          title: "创建人",
          key: "createdBy"
        },
        {
          title: "",
          key: ""
        },
        {
          title: "操作",
          alit: "action"
        }
      ],
      tableData: []
    };
  }
};
</script>

<style>
</style>