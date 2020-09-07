export default {
    'superAdmin': [
        { name: '首页', path: "/home", icon: 'ios-analytics', id: 1, pid: 0 },
        {
            name: '广告管理',
            path: '/ad',
            icon: 'ios-analytics',
            id: 3,
            pid: 0,
            children: [
                { name: '广告列表', path: '/ad/list', icon: 'ios-analytics', id: 31, pid: 3 },
                { name: "广告详情", path: '/ad/details', icon: 'ios-analytics', id: 32, pid: 3 }
            ]
        },
        {
            name: '订单管理',
            path: '/order',
            icon: 'ios-analytics',
            id: 4,
            pid: 0,
            children: [
                { name: '订单列表', path: '/order/list', icon: 'ios-analytics', id: 41, pid: 4 },
            ]
        },
        {
            name: 'example',
            path: '/example',
            icon: 'md-cloud',
            id: 5,
            pid: 0,
            children: [

            ]
        }
    ],
    'admin': [
        { name: '首页', path: "/index", icon: 'ios-analytics', id: 1, pid: 0 },
        {
            name: '广告',
            path: '/ad',
            icon: 'ios-analytics',
            id: 3,
            pid: 0,
            children: [
                { name: '广告List', path: '/ad/index', icon: 'ios-analytics', id: 31, pid: 3 },
            ]
        }
    ]
}