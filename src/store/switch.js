//请求及页面切换
export default {
  state: {
    axiosStart: false,
    pageSwitch: false
  },
  mutations: {
    setAxiosStatus(state, newV) {
      state.axiosStart = newV
    },
    setPageSwitch(state, newV) {
      state.pageSwitch = newV
    }
  }
}
