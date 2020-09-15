<template>
  <div class="login-wrap">
    <div class="logo-wrap">
      <img src="../assets/image/logo.png" />
    </div>
    <div class="bg-img"></div>
    <div class="form-wrap">
      <h1>XXXX后台管理系统</h1>
      <h3>XXXXXXXX</h3>
      <div class="form-item">
        <img src="../assets/image/icon/account-icon.png" />
        <input type="text" placeholder="请输入手机号" v-focus v-model="account" />
        <span></span>
      </div>
      <div class="form-item">
        <img src="../assets/image/icon/password-icon.png" />
        <input type="password" placeholder="请输入密码" v-model="password" />
        <span></span>
      </div>
      <div class="form-button" @click="handleLogin()">登录</div>
    </div>
  </div>
</template>

<script>
import Menu from "../assets/js/menu";
import { getLeftMenuList } from "../utils/auth";
import { mapState } from "vuex";
export default {
  data() {
    return {
      account: "superAdmin",
      password: null
    };
  },

  computed: {
    ...mapState({
      menuListStore: state => state.auth.menuList
    })
  },

  methods: {
    handleLogin() {
      this.$Message.info("登录成功");
      let menuList = getLeftMenuList(Menu["superAdmin"]);
      this.$store.commit("setAuthMenuList", menuList);
      setTimeout(() => {
        this.$router.push("/home");
      }, 2000);
    }
  }
};
</script>

<style lang="scss">
$form-item-height: 40px;

.login-wrap {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(45deg, #3f3d56 0%, #6e45e2 100%);
  display: flex;
  justify-content: space-between;
  padding: 100px 8%;
  align-items: center;
  position: relative;
  @media screen and (max-width: 1366px) {
    padding: 50px;
  }
  overflow: hidden;
  .logo-wrap {
    position: absolute;
    top: 10px;
    left: 20px;
    img {
      height: 56px;
      -webkit-animation: rotate 2.5s linear infinite;
      @-webkit-keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
  .bg-img {
    width: 972px;
    height: 619px;
    background: url("../assets/image/login-bg.png");
    background-position: 20% 10%;
    background-repeat: no-repeat;
    @media screen and (max-width: 1366px) {
      width: 560px;
      height: 420px;
      background-size: 100% 100%;
    }
  }
  .form-wrap {
    height: 500px;
    width: 420px;
    padding: 50px 0;
    background-image: linear-gradient(
      45deg,
      #6e45e2 0%,
      #88d3ce 99%,
      #88d3ce 100%
    );
    user-select: none;
    text-align: center;
    box-shadow: 0 0 15px 3px #9477f3;
    border-radius: 10px;
    // 动画名称 动画时长 延时时间 匀速 无限循环 逆播 */
    -webkit-animation: twinkling 2.5s linear infinite alternate;
    @-webkit-keyframes twinkling {
      0% {
        box-shadow: 0 0 15px 3px #7a5ae6;
      }
      100% {
        box-shadow: 0 0 25px 3px #ad95fc;
      }
    }
    @media screen and (max-width: 1366px) {
      width: 320px;
      height: 420px;
    }
    h1 {
      border: none;
    }
    .form-item {
      height: $form-item-height;
      width: 65%;
      margin: 15px auto 25px auto;
      position: relative;
      @media screen and (max-width: 1366px) {
        $form-item-height: 30px;
      }
      img {
        height: 22px;
        width: 22px;
        bottom: 10px;
        display: inline-block;
        position: absolute;
        @media screen and (max-width: 1366px) {
          width: 16px;
          height: 16px;
        }
      }
      span {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background-color: #262626;
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform 0.3s ease-in-out;
      }
      input:focus + span {
        transform: scaleX(1);
        transform-origin: left center;
      }
      input {
        border: none;
        height: 100%;
        width: 100%;
        background: transparent;
        border-bottom: 1px solid #ccc;
        color: #fff;
        padding-left: 30px;
        &:focus {
          outline: none;
        }
        &::placeholder {
          color: #ccc;
        }
      }
    }
    .form-button {
      height: 50px;
      width: 65%;
      margin: 50px auto;
      line-height: 50px;
      color: #fff;
      font-size: 18px;
      font-weight: bolder;
      cursor: pointer;
      border-radius: 25px;
      background-image: linear-gradient(
        45deg,
        #88d3ce 0%,
        #6e45e2 99%,
        #6e45e2 100%
      );
      @media screen and (max-width: 1366px) {
        height: 40px;
        line-height: 40px;
        font-size: 16px;
      }
    }
  }
}
</style>