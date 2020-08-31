export default [{
    path: "/HelloWorld",
    name: "HelloWorld",
    meta: {
        title: 'HelloWorld',
        keepAlive: true
    },
    component: resolve => require(['../pages/HelloWorld.vue'], resolve),
}]