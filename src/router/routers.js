import routerList from './auto-register-route'
export default [{
    path: "/login",
    name: "Login",
    meta: {
        title: '登录',
    },
    component: resolve => require(['../pages/Login.vue'], resolve),
}, {
    path: '/',
    redirect: '/home',
    component: resolve => require(['../layout/Layout.vue'], resolve),
    children: routerList
}]