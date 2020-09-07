import routerList from './auto-register-route'
export default [{
    path: '/',
    redirect: '/home',
    component: resolve => require(['../layout/Layout.vue'], resolve),
    children: routerList
}]