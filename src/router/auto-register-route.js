// 懒加载
const requireAllVueComponents = require.context('../pages', true, /\.vue$/, 'lazy');
// 非懒加载
// const requireAllVueComponents = require.context('../components/autoRouter', true, /\.vue$/);
const routerList = [];

console.log('路径', JSON.stringify(requireAllVueComponents.keys()));

requireAllVueComponents.keys().forEach((allVueComponentItem) => {

    console.log(allVueComponentItem, 'allVueComponentItem')
    const completeName = allVueComponentItem.match(/\w+\.vue$/, '')[0];
    const isComponents = /components/.test(allVueComponentItem)
    // 文件名尾部有数值的情况下 自动注入路由
    // 尾部数值为1表示超管权限 2表示管理员 3 表示普通用户
    if (completeName.match(/\w\.vue$/g) && !isComponents) {
        console.log('匹配到了');
        const routerMap = {};
        // let permissionNum = 0;
        routerMap.path = allVueComponentItem.replace(/(^\.|\.vue)/g, '')
        // routerMap.name = completeName.replace(/(\.\/|\.vue)/g, '')
        routerMap.name = allVueComponentItem.replace(/(\.\/|\/|\.vue)/g, '')
        // console.error('allVueComponentItem.replace(/\\.\\//, \'../components/点点滴滴/\')', allVueComponentItem.replace(/\.\//, '../components/autoRouter/').replace(/\.vue$/, ''))
        // const componentName = allVueComponentItem.replace(/\.\//, '../components/autoRouter/').replace(/\.vue$/, '');
        // console.error('componentName', componentName)
        // routerMap.allVueComponentItem = allVueComponentItem
        // console.error('completeName', completeName)
        // 一、懒加载的实现

        routerMap.component = () => requireAllVueComponents(allVueComponentItem)
        console.log(routerMap);

        // 二、非懒加载--同步的实现
        // routerMap.component = requireAllVueComponents(allVueComponentItem).default || requireAllVueComponents(allVueComponentItem)

        routerList.push(routerMap)
    }
})


export default routerList