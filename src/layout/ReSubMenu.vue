<template>
  <Submenu :name="parent[pathKey]">
    <template slot="title">
      <Icon :type="parent.icon" />
      {{ parent[nameKey] }}
    </template>
    <template v-for="item in parent.children">
      <re-submenu
        v-if="item.children"
        :key="`menu_${item[pathKey]}`"
        :name="item[pathKey]"
        :parent="item"
      ></re-submenu>
      <menu-item v-else :key="`menu_${item[pathKey]}`" :name="item[pathKey]">
        <Icon :type="item.icon" />
        {{ item[nameKey] }}
      </menu-item>
    </template>
  </Submenu>
</template>

<script>
export default {
  name: "ReSubmenu",

  props: {
    parent: {
      type: Object,
      default: () => ({})
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
  }
};
</script>