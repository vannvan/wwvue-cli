//用户信息
export default {
  state: {
    userInfo:{}
  },
  mutations: {
    setUserInfo (state, newV) {
      state.userInfo = newV;
    },
  }
}
