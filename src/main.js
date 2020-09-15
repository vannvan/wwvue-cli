import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import './wui-theme/src/index.scss'


import WUI from './packages'
Vue.use(WUI)

import directive from './directives'
Vue.use(directive)

Vue.use(ViewUI);

console.__proto__.js = (obj, indent = 0) => console.log(JSON.stringify(obj, null, indent))



Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')