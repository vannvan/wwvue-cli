import { get, post } from './http'
export default {
  getUserInfo:(p) => get('/user',p),  //获取用户信息
}
