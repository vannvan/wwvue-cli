//扁平有行操作的表格
<template>
  <div>
    <Table :columns="columns" :data="tableData" border :size="size">
      <!-- 操作插槽 -->
      <template slot="action" scope="scope">
        <span
          class="column-action"
          v-for="(item,index) in getAvailableAction(scope)"
          :key="index"
          @click="handleClick(scope.row,item)"
        >
          <span
            class="column-action-button"
            :style="{background:getAttrs(item,'color')}"
          >{{getAttrs(item,'name')}}</span>
        </span>
      </template>
    </Table>
  </div>
</template>

<script>
const TABLE_ACTION = [
  { key: "view", name: "查看", color: "#2d8cf0", emit: "on-view" },
  { key: "delete", name: "删除", color: "#FF6347", emit: "on-delete" }
];
export default {
  name: "TableList",
  props: {
    columns: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    },
    tableData: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    },
    size: {
      type: String,
      default: "default",
      validator: function(value) {
        return ["small", "large", "default"].indexOf(value) !== -1;
      }
    },
    //是否居中
    center: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    //获取可用的操作列表
    getAvailableAction() {
      return scope => {
        return scope.column.actionList;
      };
    },
    //获取操作参数信息
    getAttrs() {
      return (key, attr) => {
        return TABLE_ACTION.find(item => item.key == key)
          ? TABLE_ACTION.find(item => item.key == key)[attr]
          : "";
      };
    }
  },

  created() {
    if (this.center) {
      this.columns.map(el => {
        el.align = "center";
      });
    }
  },

  methods: {
    handleClick(row, actionType) {
      let emitDo = this.getAttrs(actionType, "emit");
      console.log("触发父级操作:", emitDo);
      this.$emit(emitDo, row);
    }
  }
};
</script>

<style lang="scss" scope>
.column-action {
  display: inline-block;
  margin-right: 8px;
  &-button {
    display: inline-block;
    height: 24px;
    line-height: 24px;
    padding: 0 8px;
    border: none;
    color: #fff;
    border-radius: 3px;
    background: $primaryColor;
    cursor: pointer;
  }
}
</style>