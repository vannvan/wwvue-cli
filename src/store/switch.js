//请求及页面切换
export default {
  state:{
    ajaxStart:false,
    pageSwitch:false
  },
  mutations:{
    setAjaxStatus(state,newV) {
      state.ajaxStart = newV
    },
    setPageSwitch(state,newV) {
      state.pageSwitch = newV
    }
  }
}
