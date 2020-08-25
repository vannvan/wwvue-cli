<template>
  <div class="layout">
    <h1>Hello World</h1>
  </div>
</template>

<script>
const { User } = require("@/api").default;
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  mounted() {
    this.getUserList();
    this.$store.commit("setUserInfo", { name: "bob", age: 22, gender: 1 });
    console.log(this.userInfo);
  },
  methods: {
    getUserList() {
      User.getUserList().then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss">
h1 {
  color: $primaryColor;
  text-align: center;
  line-height: 80px;
}
</style>
