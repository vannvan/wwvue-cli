import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './wui-theme/src/index.scss'

import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
import { Integrations } from "@sentry/tracing";

Sentry.init({
    dsn: "https://2d29ca1348e64cb380c09d9c8dbe84c3@o473545.ingest.sentry.io/5508525",
    integrations: [
        new VueIntegration({
            Vue,
            tracing: true,
        }),
        new Integrations.BrowserTracing(),
    ],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
});

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