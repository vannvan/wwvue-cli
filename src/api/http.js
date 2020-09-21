import axios from 'axios'
import API_CONFIG from './api.conf'
import QS from 'qs';
import ERROR_CONF from './error.conf'


const Axios = axios.create({
    baseURL: API_CONFIG[process.env.NODE_ENV], // api的base_url
    timeout: 60000 // 设置请求超时时间30s
})


Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';



// 请求拦截器
Axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // const token = store.state.token;
        // token && (config.headers.Authorization = token);
        return config;
    },
    error => {
        return Promise.reject(error)
    })

// 响应拦截器
Axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况
    error => {
        if (error.message === '路由跳转取消请求') { // 判断是否为路由跳转取消网络请求
            console.log('路由跳转取消请求' + error)
        }
    }
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        Axios.get(url, {
                params: params
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        Axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                let { status } = err.response
                console.log(ERROR_CONF[status]) // 此处采用message组件提示对应的错误信息
                reject(err)
            })
    });
}