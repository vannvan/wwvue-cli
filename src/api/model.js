import { get } from './http'

export default {

    getModelList: p => get('/model/list', p), //获取模板列表

    getProjectdir: p => get('/get/project', p), //获取项目结构

    getPagesList: p => get('/get/pages', p), //获取页面列表
}