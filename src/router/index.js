import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'


Vue.use(Router)

const router = new Router({
    base: '/',
    routes: routes,
    mode: 'history'
})



router.afterEach(() => {
    // iView.LoadingBar.finish()
    window.scrollTo(0, 0)
})

export default router