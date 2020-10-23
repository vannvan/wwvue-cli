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
            name: '多级菜单',
            path: '/menu',
            icon: "md-menu",
            id: 6,
            pid: 0,
            children: [{
                    name: '二级菜单',
                    path: '/menu/second',
                    icon: '',
                    id: 61,
                    pid: 6,
                    children: [{
                        name: '三级菜单',
                        path: '/menu/second/third',
                        icon: '',
                        id: 611,
                        pid: 61,
                    }, ]
                },
                {
                    name: '二级菜单',
                    path: '/menu/index',
                    icon: '',
                    id: 62,
                    pid: 6,
                }

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
            name: '组件',
            path: '/example',
            icon: 'md-cloud',
            id: 5,
            pid: 0,
            children: [{
                    name: "EchartsPage",
                    path: '/example/echartspage',
                    icon: 'ios-stats',
                    id: 51,
                    pid: 5
                }, {
                    name: 'Upload',
                    path: '/example/upload',
                    icon: "ios-document",
                    id: 52,
                    pid: 5
                },
                {
                    name: "Table",
                    path: '/example/table',
                    icon: 'ios-list-box-outline',
                    id: 53,
                    pid: 5
                },
                {
                    name: "CountTo",
                    path: '/example/countto',
                    icon: 'ios-pulse',
                    id: 54,
                    pid: 5
                },
                {
                    name: "WIcon",
                    path: "/example/icon",
                    icon: 'ios-cafe-outline',
                    id: 55,
                    pid: 5
                },
                {
                    name: '权限控制',
                    path: "/example/auth",
                    icon: 'ios-finger-print',
                    id: 56,
                    pid: 5
                },
                {
                    name: '新建页面',
                    path: "/example/new",
                    icon: 'ios-document',
                    id: 57,
                    pid: 5
                }
            ]
        }
    ],
    'admin': [
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
    ]
}