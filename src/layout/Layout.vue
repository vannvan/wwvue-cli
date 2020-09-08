<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider collapsible v-model="collapsed" hide-trigger breakpoint="sm" width="240">
        <side-menu :collapsed="collapsed" :list="menuList"></side-menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon type="md-menu" :size="32" @click.native="handleCollapsed" :class="triggerClasses" />
          <!--面包屑-->
          <BreadCrumb />
          <div class="avatar">
            <Dropdown trigger="click">
              <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
              <DropdownMenu slot="list">
                <DropdownItem>个人设置</DropdownItem>
                <DropdownItem>退出登录</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Header>
        <Content class="content-con">
          <Card shadow class="page-card">
            <router-view />
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import SideMenu from "./Menu";
import BreadCrumb from "./BreadCrumb";
import Menu from "../assets/menu.js";
import { getLeftMenuList } from "../utils/auth";
import { mapState } from "vuex";
export default {
  components: {
    SideMenu,
    BreadCrumb
  },

  data() {
    return {
      collapsed: false,
      menuList: getLeftMenuList(Menu["superAdmin"])
    };
  },

  computed: {
    triggerClasses() {
      return ["trigger-icon", this.collapsed ? "rotate" : ""];
    },
    ...mapState({
      menuListStore: state => state.auth.menuList,
      activeMenu: state => state.auth.activeMenu,
      breadCrumbs: state => state.auth.breadCrumbs
    })
  },

  mounted() {
    this.$store.commit("setAuthMenuList", this.menuList);
  },

  methods: {
    handleCollapsed() {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>
<style lang="scss" scoped>
.layout-wrapper,
.layout-outer {
  height: 100%;
  .header-wrapper {
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 0 23px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .trigger-icon {
      cursor: pointer;
      transition: transform 0.3s ease;
      &.rotate {
        transform: rotateZ(-90deg);
        transition: transform 0.3s ease;
      }
    }

    .avatar {
      margin-left: auto;
      cursor: pointer;
    }
  }
  .content-con {
    padding: 10px;
    background: #fff;
    .page-card {
      height: calc(100vh - 84px);
      overflow-x: hidden;
      overflow-y: auto;
      &.ivu-card-shadow {
        background: $themeLayoutColor !important;
      }
    }
  }
}
</style>