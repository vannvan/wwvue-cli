<template>
  <Dropdown @on-click="handleClick" placement="right-start">
    <span class="drop-menu-span" :style="titleStyle">
      <Icon :type="parent.icon" :color="iconColor" :size="30"></Icon>
      <span color="#515a6e" v-if="showTitle">{{ parent[nameKey] }}</span>
    </span>
    <DropdownMenu slot="list">
      <template v-for="item in parent.children">
        <re-dropdown v-if="item.children" :key="`drop_${item[pathKey]}`" :parent="item"></re-dropdown>
        <DropdownItem v-else :key="`drop_${item[pathKey]}`" :name="item[pathKey]">
          <Icon :type="item.icon" color="#515a6e" :size="30"></Icon>
          {{ item[nameKey] }}
        </DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  name: "ReDropdown",

  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    iconColor: {
      type: String,
      default: "#515a6e"
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    //菜单名称属性
    nameKey: {
      type: String,
      default: "name"
    },
    //菜单路径属性
    pathKey: {
      type: String,
      default: "path"
    }
  },

  computed: {
    titleStyle() {
      return {
        textAlign: this.showTitle ? "left" : "center",
        paddingLeft: this.showTitle ? "16px" : ""
      };
    }
  },

  methods: {
    handleClick(name) {
      if (!this.showTitle) this.$emit("on-select", name);
    }
  }
};
</script>