export default {
    'superAdmin': [
        { name: '首页', path: "/index", icon: '', id: 1, pid: 0 },
        { name: 'HelloWorld', path: "/HelloWorld", icon: '', id: 2, pid: 0 },
        {
            name: '广告',
            path: '/ad',
            icon: '',
            id: 3,
            pid: 0,
            children: [
                { name: '广告List', path: '/ad/index', icon: '', id: 31, pid: 3 },
                { name: "广告详情", path: '/ad/detail', icon: '', id: 32, pid: 3 }
            ]
        }
    ],
    'admin': [
        { name: '首页', path: "/index", icon: '', id: 1, pid: 0 },
        { name: 'HelloWorld', path: "/HelloWorld", icon: '', id: 2, pid: 0 },
        {
            name: '广告',
            path: '/ad',
            icon: '',
            id: 3,
            pid: 0,
            children: [
                { name: '广告List', path: '/ad/index', icon: '', id: 31, pid: 3 },
            ]
        }
    ]
}