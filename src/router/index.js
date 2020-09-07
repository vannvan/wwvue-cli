import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import { flatData, generateRoleRouters } from '@/utils'
import authMenu from '@/assets/menu.js'

const CURRENT_AUTH = 'admin' //当前角色  

const permissionSwitch = false //权限开关，用于某些场景开发环境需要所有路由可访问的情况


const flatAuthMenu = flatData(authMenu[CURRENT_AUTH])

Vue.use(Router)

const router = new Router({
    base: '/',
    routes: permissionSwitch ?
        generateRoleRouters(flatAuthMenu, flatData(routes)) : routes,
    mode: 'history'
})


router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})


router.afterEach(() => {
    //这里还要添加像iview的LoadingBar组件状态
    window.scrollTo(0, 0)
})

//用于解决菜单重复点击控制台报错的坑
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router