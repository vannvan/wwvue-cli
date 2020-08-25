export default [{
    path: "/HelloWorld",
    name: "HelloWorld",
    meta: {
        title: 'HelloWorld'
    },
    component: resolve => require(['../pages/HelloWorld.vue'], resolve),
}]