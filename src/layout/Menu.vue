<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <div class="logo-wrap">
      <h1 v-show="!collapsed">wwvue-cli-iview</h1>
      <img src="../assets/image/logo.png" alt v-show="collapsed" />
    </div>
    <Menu
      width="auto"
      theme="dark"
      v-show="!collapsed"
      accordion
      @on-select="handleSelect"
      @on-open-change="handleOpenMenu"
      :active-name="activeMenu"
      :open-names="opendMenu"
    >
      <template v-for="item in list">
        <re-submenu
          v-if="item.children"
          :key="`menu_${item[pathKey]}`"
          :name="item[pathKey]"
          :parent="item"
        >
          <menu-item></menu-item>
        </re-submenu>
        <menu-item v-else :key="`menu_${item[pathKey]}`" :name="item[pathKey]">
          <Icon :type="item.icon" />
          {{ item[nameKey] }}
        </menu-item>
      </template>
    </Menu>
    <div class="drop-wrapper" v-show="collapsed">
      <template v-for="item in list">
        <re-dropdown
          @on-select="handleSelect"
          v-if="item.children"
          icon-color="#fff"
          :show-title="false"
          :key="`drop_${item[pathKey]}`"
          :parent="item"
        ></re-dropdown>
        <Tooltip
          v-else
          transfer
          :content="item[nameKey]"
          placement="right"
          :key="`drop_${item[pathKey]}`"
        >
          <span @click="handleClick(item[pathKey])" class="drop-menu-span">
            <Icon :type="item.icon" color="#fff" :size="30" />
          </span>
        </Tooltip>
      </template>
    </div>
  </div>
</template>
<script>
import ReSubmenu from "./ReSubMenu";
import ReDropdown from "./ReDropDown";
import { mapState } from "vuex";
export default {
  name: "SideMenu",

  components: {
    ReSubmenu,
    ReDropdown
  },

  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
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
    ...mapState({
      opendMenu: state => state.auth.opendMenu,
      activeMenu: state => state.auth.activeMenu
    })
  },

  methods: {
    handleSelect(name) {
      this.$store.commit("setActiveMenu", name);
      this.$router.push({
        path: name
      });
    },
    handleOpenMenu(name) {
      this.$store.commit("setOpendMenu", name);
    },
    handleClick(name) {
      console.log(name);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.commit("setActiveMenu", this.$route.path);
    });
  }
};
</script>
<style lang="scss">
.side-menu-wrapper {
  .ivu-tooltip,
  .drop-menu-span {
    display: block;
    width: 100%;
    text-align: center;
    // padding: 10px 0;
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened .ivu-menu-submenu-title {
    background: rgba($color: #515a6e, $alpha: 0.7);
  }
  .ivu-menu-item-selected {
    background: #2d8cf0 !important;
    color: #fff !important;
  }
  .drop-wrapper > .ivu-dropdown,
  .ivu-tooltip {
    display: block;
    padding: 10px;
    margin: 0 auto;
  }
  .logo-wrap {
    height: 64px;
    text-align: center;
    color: #fff;
    line-height: 64px;
    border-bottom: 2px solid rgba($color: #fff, $alpha: 0.1);
    img {
      height: 64px;
    }
  }
}
</style>