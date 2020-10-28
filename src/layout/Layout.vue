<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider
        collapsible
        v-model="collapsed"
        hide-trigger
        breakpoint="sm"
        width="240"
      >
        <side-menu :collapsed="collapsed" :list="menuListStore"></side-menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon
            type="md-menu"
            :size="24"
            @click.native="handleCollapsed"
            :class="triggerClasses"
          />
          <!--面包屑-->
          <BreadCrumb />
          <div class="avatar">
            <Dropdown trigger="click" transfer>
              <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
              <DropdownMenu slot="list">
                <DropdownItem>个人设置</DropdownItem>
                <DropdownItem @click.native="logout()">退出登录</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Header>
        <Content class="content-con">
          <Card shadow class="page-card common-scroll">
            <transition :name="transitionName">
              <router-view class="view"></router-view>
            </transition>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import SideMenu from "./Menu";
import BreadCrumb from "./BreadCrumb";
import { mapState } from "vuex";
export default {
  components: {
    SideMenu,
    BreadCrumb
  },

  data() {
    return {
      collapsed: false,
      transitionName: ""
    };
  },

  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
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

  methods: {
    handleCollapsed() {
      this.collapsed = !this.collapsed;
    },

    logout() {
      this.$router.push({
        path: "/login"
      });
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
    box-shadow: 0 1px 1px 1px rgba(#000, 0.6);
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
    background: rgba(#fff, 0.9);
    .page-card {
      height: calc(100vh - 84px);
      overflow-x: hidden;
      overflow-y: auto;
      &.ivu-card-shadow {
        background: $themeLayoutColor !important;
      }
    }
    .slide-left-enter,
    .slide-right-leave-active {
      opacity: 0;
      -webkit-transform: translate(100%, 0);
      transform: translate(100%, 0);
    }
    .slide-left-leave-active,
    .slide-right-enter {
      opacity: 0;
      -webkit-transform: translate(-100%, 0);
      transform: translate(-100%, 0);
    }
  }
}
</style>