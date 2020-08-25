import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'


Vue.use(Router)

const router = new Router({
    base: '/',
    routes: routes,
    mode: 'history'
})


router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})


router.afterEach(() => {
    // iView.LoadingBar.finish()
    window.scrollTo(0, 0)
})

export default router