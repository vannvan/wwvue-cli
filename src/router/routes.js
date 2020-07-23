export default [{
    path: "HelloWorld",
    meta: {
        title: 'HelloWorld'
    },
    component: resolve => require(['../pages/HelloWorld.vue'], resolve),
    // component: () => import('../pages/HelloWorld.vue')
}]