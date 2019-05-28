import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import Axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

import baseInfo_store from './baseInfo'
Vue.use(Vuex)

const store = new Vuex.Store({
// 用不同的模块管理vuex存储数据
  modules: {
    baseInfoStore: baseInfo_store,
  },
  plugins: [createPersistedState({
      storage: window.sessionStorage   //可改为localStorage
  })]
})
//切换页面一般需要的loading动画状态
store.registerModule('pageSwitch', {
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})
//切换路由的同时切换title
router.beforeEach(function (to, from, next) {
  if(to.meta.title){
    document.title = to.meta.title
  }
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})
//ajax请求的动画状态
store.registerModule('ajaxSwitch', {
  state: {
    ajaxIsLoading: false,
    ajaxIsPrompt: false,
  },
  mutations: {
    ajaxStar (state) {
      state.ajaxIsLoading = true
    },
    ajaxEnd (state) {
      state.ajaxIsLoading = false
    },
    ajaxPromptShow (state) {
      state.ajaxIsPrompt = true
    },
    ajaxPromptHide (state) {
      state.ajaxIsPrompt = false
    }
  },
  getter : {
    ajaxIsLoading: state => state.ajaxIsLoading
  }
})
//请求拦截
Axios.interceptors.request.use(config => {
  store.commit('ajaxStar')
  return config;
})
//响应拦截
Axios.interceptors.response.use(config => {
  //需要拦截的请求头
  return config
})

export default store;
