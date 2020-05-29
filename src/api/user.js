import {
  get,
  post
} from './http'
export default {
  getUserInfo: (p) => get('/v1/user-list', p), //获取用户信息
}
