<template>
  <div class="bread-crumbs">
    <span style="cursor:pointer" class="home">
      <Icon type="md-home" />首页
    </span>
    <span v-for="item in reverseBreadCrumbs" :key="item.id" :style="{}">
      <Icon :type="item.icon" />
      {{item.name}}
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { breadCrumbsList } from "../utils";
export default {
  computed: {
    ...mapState({
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
  }
};
</script>

<style lang="scss">
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
</style>