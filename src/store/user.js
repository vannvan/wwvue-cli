// 用户信息
export default {
    state: {
        userInfo: {}
    },
    mutations: {
        setUserInfo(state, newVal) {
            state.userInfo = newVal
        }
    }
}