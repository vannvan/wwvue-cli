<template>
  <div>
    <h1>权限控制</h1>
    <Alert show-icon>
      简要说明
      <Icon type="ios-bulb-outline" slot="icon"></Icon>
      <template slot="desc">
        <pre>
    建议将权限控制交给后端，菜单命名严格按照目录及功能模块进行划分，层级根据功能复杂程度进行划分，
    菜单数据及字段可参考assets/menu.js中的格式及实际需要进行规划，同时与后端对接
      </pre>
      </template>
    </Alert>
    <div class="wrap">
      <RadioGroup v-model="checkedUser">
        <Radio label="superAdmin" border>超级管理员</Radio>
        <Radio label="admin" border>普通管理员</Radio>
      </RadioGroup>
      <Button type="primary" @click="changeAuthType()">切换权限</Button>
    </div>
  </div>
</template>

<script>
import Menu from "../../assets/js/menu";
import { mapState } from "vuex";
import { getLeftMenuList } from "../../utils/auth";

export default {
  data() {
    return {
      checkedUser: "superAdmin"
    };
  },

  computed: {
    ...mapState({
      menuListStore: state => state.auth.menuList
    })
  },

  methods: {
    changeAuthType() {
      let menuList = getLeftMenuList(Menu[this.checkedUser]);
      this.$store.commit("setAuthMenuList", menuList);
    }
  }
};
</script>

<style>
</style>