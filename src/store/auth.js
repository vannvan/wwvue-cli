// 权限信息
export default {
    state: {
        menuList: [], //左侧所有的菜单
        opendMenu: [], //当前展开的菜单
        activeMenu: [], //当前激活的菜单
        breadCrumbs: [], //面包屑
    },
    mutations: {
        setAuthMenuList(state, payload) {
            state.menuList = payload;
        },
        setOpendMenu(state, payload) {
            state.opendMenu = payload
        },
        setActiveMenu(state, payload) {
            state.activeMenu = payload
        },
        setBreadCrumbs(state, payload) {
            state.breadCrumbs = payload
        }
    }
}