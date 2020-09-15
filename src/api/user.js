import { post } from './http'

export default {
    getUserList: p => post('/userList', p), //获取用户列表 
}