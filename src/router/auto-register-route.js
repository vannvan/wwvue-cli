// 懒加载
const requireAllVueComponents = require.context('../pages', true, /\.vue$/, 'lazy');
// 非懒加载
// const requireAllVueComponents = require.context('../components/autoRouter', true, /\.vue$/);
const routerList = [];

const ExcludePage = ['Login'] //需要排除的一些特例页面,例如登录页面，空缺页

requireAllVueComponents.keys().forEach((allVueComponentItem) => {
    const completeName = allVueComponentItem.match(/\w+\.vue$/, '')[0];
    const isComponents = /components/.test(allVueComponentItem)
    if (!/^[A-Z]+/.test(completeName.replace(/(^\.|\.vue)/g, ''))) {
        console.error('组件: ' + completeName, '命名不符合规范，请采用大驼峰形式命名');
    }
    const isExclude = ExcludePage.every(el => new RegExp(el).test(completeName))
    // 文件名尾部有数值的情况下 自动注入路由
    if (completeName.match(/\w\.vue$/g) && !isComponents && !isExclude) {
        const routerMap = {};
        routerMap.path = allVueComponentItem.replace(/(^\.|\.vue)/g, '').toLowerCase()
        routerMap.name = allVueComponentItem.replace(/(\.\/|\/|\.vue)/g, '').toLowerCase()
        // const componentName = allVueComponentItem.replace(/\.\//, '../components/autoRouter/').replace(/\.vue$/, '');
        // 一、懒加载的实现

        routerMap.component = () => requireAllVueComponents(allVueComponentItem)

        // 二、非懒加载--同步的实现
        // routerMap.component = requireAllVueComponents(allVueComponentItem).default || requireAllVueComponents(allVueComponentItem)

        routerList.push(routerMap)
    }
})


export default routerList