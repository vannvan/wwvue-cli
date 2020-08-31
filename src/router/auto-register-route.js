// 懒加载
const requireAllVueComponents = require.context('../pages', true, /\.vue$/, 'lazy');
// 非懒加载
// const requireAllVueComponents = require.context('../components/autoRouter', true, /\.vue$/);
const routerList = [];


requireAllVueComponents.keys().forEach((allVueComponentItem) => {
    const completeName = allVueComponentItem.match(/\w+\.vue$/, '')[0];
    const isComponents = /components/.test(allVueComponentItem)
    // 文件名尾部有数值的情况下 自动注入路由
    if (completeName.match(/\w\.vue$/g) && !isComponents) {
        const routerMap = {};
        routerMap.path = allVueComponentItem.replace(/(^\.|\.vue)/g, '')
        routerMap.name = allVueComponentItem.replace(/(\.\/|\/|\.vue)/g, '')
        // const componentName = allVueComponentItem.replace(/\.\//, '../components/autoRouter/').replace(/\.vue$/, '');
        // 一、懒加载的实现

        routerMap.component = () => requireAllVueComponents(allVueComponentItem)

        // 二、非懒加载--同步的实现
        // routerMap.component = requireAllVueComponents(allVueComponentItem).default || requireAllVueComponents(allVueComponentItem)

        routerList.push(routerMap)
    }
})


export default routerList