import axios from 'axios'
import ERROR_CONF from './error.conf'
import ViewUI from 'view-design';

export default {
    uploadFile: (url, params) => {
        return new Promise((resolve, reject) => {
            let formData = new FormData()
            Object.keys(params).forEach(key => {
                formData.append(key, params[key])
            })
            axios.post(url, formData).then(res => {
                resolve(res)
            }).catch(error => {
                let { status } = error.response
                ViewUI.Message.error({ background: true, content: ERROR_CONF[status] })
                reject(error)
            })
        })
    }
}