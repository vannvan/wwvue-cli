<template>
  <div>
    <h1>Table组件</h1>
    <Alert show-icon>
      简要说明
      <Icon type="ios-bulb-outline" slot="icon"></Icon>
      <template slot="desc">
        <pre>
   由于iview表格涉及接口及方法较多，做过多的二次封装没有切实的必要性，由于一个后台项目的产品设计对于表格的操作可能千变万化
   因此iview的表格可能方法过剩也可能不能满足需求 
   这里只是提供一种封装的方法，适用于大多数表格具有比较多的共性时，可将粒度较小的方法放在子组件进行统一配置，可以很大程度减少冗余相似的代码
    </pre>
      </template>
    </Alert>
    <div style="margin-top:15px">
      <TableList :columns="columns" :tableData="tableData" center @on-view="handleView"></TableList>
    </div>
    <div style="margin-top:15px">
      <TableList
        :columns="columns1"
        :tableData="tableData"
        center
        @on-view="handleView"
        ref="selection"
      ></TableList>
    </div>
  </div>
</template>

<script>
import TableList from "../../components/TableList";
export default {
  components: {
    TableList
  },
  data() {
    return {
      columns: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        },
        {
          title: "Action",
          actionList: ["view", "delete"],
          slot: "action"
        }
      ],
      columns1: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        },
        {
          title: "Action",
          actionList: ["view", "delete"],
          slot: "action"
        }
      ],
      tableData: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },

  methods: {
    handleView(row) {
      console.log(row);
    }
  }
};
</script>

<style>
</style>