import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import Axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const requireModule = require.context('./', false, /\.js$/)
const modules = {}

requireModule.keys().forEach(fileName => {
  const moduleName = fileName.replace(/(\.\/|\.js)/g, '')
  modules[moduleName] = {
    ...requireModule(fileName).default
  }
})

const store = new Vuex.Store({
  // 用不同的模块管理vuex存储数据
  modules: modules,
  plugins: [createPersistedState({
    storage: window.sessionStorage //可改为localStorage
  })]
})

//切换路由的同时切换title
router.beforeEach(function (to, from, next) {
  store.commit('clearRequest') // 取消请求,非常关键
  if (to.meta.title) {
    document.title = to.meta.title
  }
  store.commit('setPageSwitch', true)
  next()
})

router.afterEach(function (to) {
  store.commit('setPageSwitch', false)
})

//即时更新网络状态
store.registerModule('navigator', {
  state: {
    isOnline: true
  },
  mutations: {
    updateOnlineStatus(state, newData) {
      state.isOnline = newData
    }
  }
})


//记录取消请求操作
store.registerModule('requestAction', {
  state: {
    cancelRequestQueue: []
  },
  mutations: {
    pushRequest: (state, src) => {
      state.cancelRequestQueue.push(src.cancelToken)
    },
    clearRequest: ({
      cancelRequestQueue
    }) => {
      cancelRequestQueue.forEach(item => {
        item('取消请求')
      })
      cancelRequestQueue = []
    }
  }
})



//请求拦截
Axios.interceptors.request.use(config => {
  store.commit('setAxiosStatus', true)
  config.cancelToken = new Axios.CancelToken((cancel) => {
    store.commit('pushRequest', {
      cancelToken: cancel
    })
  })
  return config;
})


//响应拦截
Axios.interceptors.response.use(config => {
  //需要拦截的请求头
  store.commit('setAxiosStatus', false)
  return config
})

export default store;
