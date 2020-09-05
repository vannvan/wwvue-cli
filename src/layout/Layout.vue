<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider collapsible v-model="collapsed" hide-trigger breakpoint="sm" width="240">
        <side-menu :collapsed="collapsed" :list="menuList"></side-menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon type="md-menu" :size="32" @click.native="handleCollapsed" :class="triggerClasses" />
          <div class="bread-crumbs">
            <span style="cursor:pointer" class="home">
              <Icon type="md-home" />首页
            </span>
            <span v-for="item in reverseBreadCrumbs" :key="item.id" :style="{}">
              <Icon :type="item.icon" />
              {{item.title}}
            </span>
          </div>
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
import Menu from "../assets/menu.js";
import { getLeftMenuList } from "../utils/auth";
import { mapState } from "vuex";
import { breadCrumbsList } from "../utils";
export default {
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
    }),
    //反转面包屑顺序
    reverseBreadCrumbs() {
      return this.$route.path == "/home"
        ? []
        : Array.prototype.reverse.call(
            JSON.parse(JSON.stringify(this.breadCrumbs))
          );
    },
    //是否链接
    isLink() {
      return path => {
        return path.match(/\//g).length > 1;
      };
    },
    //是否当前页面
    isCurrentPage() {
      return path => {
        return this.$route.path == path;
      };
    }
  },
  watch: {
    activeMenu: {
      handler(newVal) {
        this.$store.commit("setBreadCrumbs", breadCrumbsList(newVal));
      }
    }
  },
  components: {
    SideMenu
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
    .bread-crumbs {
      margin-left: 40px;
      span {
        margin-right: 15px;
        display: inline-block;
        &.home:hover {
          color: $primaryColor;
        }
        i {
          margin-right: 5px;
        }
        //排除最后一项
        &:not(:last-child)::after {
          content: "/";
          margin-left: 10px;
          color: #999;
        }
      }
    }
    .avatar {
      margin-left: auto;
      cursor: pointer;
    }
  }
  .content-con {
    padding: 10px;
    .page-card {
      min-height: calc(100vh - 84px);
    }
  }
}
</style>