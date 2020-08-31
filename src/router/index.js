import Vue from 'vue'
import Router from 'vue-router'
// import routes from './routers'
import routerList from './auto-register-route'
console.log(routerList);


// console.log(routes);

Vue.use(Router)


const router = new Router({
    base: '/',
    routes: routerList,
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