import { post } from './http'

export default {
  getUserList: (p) =>
    post(
      'https://www.easy-mock.com/mock/5fa4043f60b9b97b2c399398/api/userinfo',
      p
    ), //获取用户列表
}
