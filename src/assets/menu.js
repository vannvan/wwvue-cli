export default {
    'superAdmin': [
        { title: '首页', name: "/home", icon: 'ios-analytics', id: 1, pid: 0 },
        {
            title: '广告管理',
            name: '/ad',
            icon: 'ios-analytics',
            id: 3,
            pid: 0,
            children: [
                { title: '广告列表', name: '/ad/list', icon: 'ios-analytics', id: 31, pid: 3 },
                { title: "广告详情", name: '/ad/details', icon: 'ios-analytics', id: 32, pid: 3 }
            ]
        },
        {
            title: '订单管理',
            name: '/order',
            icon: 'ios-analytics',
            id: 4,
            pid: 0,
            children: [
                { title: '订单列表', name: '/order/list', icon: 'ios-analytics', id: 41, pid: 4 },
            ]
        }
    ],
    'admin': [
        { title: '首页', name: "/index", icon: 'ios-analytics', id: 1, pid: 0 },
        {
            title: '广告',
            name: '/ad',
            icon: 'ios-analytics',
            id: 3,
            pid: 0,
            children: [
                { title: '广告List', name: '/ad/index', icon: 'ios-analytics', id: 31, pid: 3 },
            ]
        }
    ]
}