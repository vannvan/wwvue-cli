  import Vue from 'vue'
  import Vuex from 'vuex'
  import createPersistedState from 'vuex-persistedstate'
  Vue.use(Vuex)


  const requireModule = require.context('./', false, /\.js$/)
  const modules = {}
  const excludeModules = ['./index.js']

  requireModule.keys().filter(el => !excludeModules.includes(el)).forEach(fileName => {
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

  export default store;