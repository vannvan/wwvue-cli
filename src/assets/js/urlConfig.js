//江西测试环境
// var BASE_URL = 'http://113.140.31.190:5000';
//江西正式环境
// var BASE_URL = 'http://frs.jxrrt.cn:8089';
//demo
// var BASE_URL = 'http://test.zhiless.com';
//浙江开放平台正式
//  http://211.140.7.29:2013
//浙江测试环境
//  http://113.140.31.190:6001
// 贵州测试环境
// http://120.92.123.109:8001
// 贵州预上线地址
//  http://frs.gzixy.cn:8000/

var BASE_URL = '/api';
var WX_URL = '/api';
var H5_BASE_URL = '/zjapi';//h5地址
var APP_BASE_URL = '/client_api';//客户端地址
var WX_BASE_URL = '/wxapi'; //江西地址
var isPro = process.env.NODE_ENV === 'production'
if(isPro){
    BASE_URL= 'http://frs.jxrrt.cn:8089'
    APP_BASE_URL = 'http://frs.gzixy.cn:8000'
    H5_BASE_URL = ''
    // APP_BASE_URL = 'http://172.16.140.204:8082/app-api'  // 本地打包代理地址
}

const UrlConfig = {
  //================================================================================sx
  attendanceDateDetails: BASE_URL + "/api/frs-report/attendance/family/date-details", //查看学生每日考勤明细

  getHjytoken: BASE_URL + "/api/sync-face/sso/hjy/h5-hjy-jx-kq", //单点登录

  //================================================================================demo
  getWechatConfig: BASE_URL + "/wechat-demo/wechat/get-config", //微信配置信息

  getToken: BASE_URL + "/wechat-demo/wechat/token", //获取token

  uploadImg: BASE_URL + "/wechat-demo/wechat/wx-img-upload",

  getUserInfo: BASE_URL + "/wechat-demo/wechat/get-userinfo", //获取用户信息

  isWechatBinding: BASE_URL + "/wechat-demo/wechat/is-binding", //是否绑定微信

  getClassStatis: BASE_URL + "/api/frs-report/attendance/statis/time-period/class", //班级考勤统计

  getTodayStudent: BASE_URL + "/api/frs-report/attendance/today/student", //今日学生出勤总览

  getAttendanceDetails: BASE_URL + "/api/frs-report/attendance/detail/class", //出勤详情

  getClassInfo: BASE_URL + "/api/frs-report/attendance/base/get-class", //班级信息

  addUser: BASE_URL + "/wechat-demo/wechat/user-add", //录入信息
  //------------------------------------------------------------------------------------访客模块

  getSchoolInfo: H5_BASE_URL + "/api/sync-face/visit/get-school",  //获取学校信息

  getTeacherList: H5_BASE_URL + "/api/sync-face/visit/get-teacher", //获取教师列表

  getVisitorList:H5_BASE_URL + "/api/sync-face/visit/visitor-list", //获取访客列表

  visitorDoApply:H5_BASE_URL + "/api/sync-face/visit/apply", //访客发出申请

  approvalApply:H5_BASE_URL + "/api/sync-face/visit/approval-apply",  //申请审批

  uploadVisitorPhoto:H5_BASE_URL + "/frs-file/upload/visitor/face-ident-picture",  //上传照片

};
  //--------------------------------------------------------------------------------------客户端地址
const AppUrlConfig = {

  getHjytoken: APP_BASE_URL + "/api/sync-face/sso/hjy/web-sync-face", //单点登录

  getPunchCardStatus:APP_BASE_URL + "/api/frs-report/attendance/base/get-punch-card-status",//打卡状态类型

  getAttendanceTimePeriod:APP_BASE_URL + "/api/frs-report/attendance/base/get-time-period", //考勤时段类型

  getSchoolStatis:APP_BASE_URL + "/api/frs-report/attendance/statis/time-period/school",  //校级报表

  getGradeStatis:APP_BASE_URL + "/api/frs-report/attendance/statis/time-period/grade",//年级考勤统计

  getClassStatis: APP_BASE_URL + "/api/frs-report/attendance/statis/time-period/class", //班级考勤统计

  getTodayStudent: APP_BASE_URL + "/api/frs-report/attendance/today/student", //今日学生出勤总览

  getClassDetails: APP_BASE_URL + "/api/frs-report/attendance/detail/class", //班级出勤详情

  getSchoolDetails:APP_BASE_URL + "/api/frs-report/attendance/detail/school",//校级出勤明细

  getGradeDetails:APP_BASE_URL + "/api/frs-report/attendance/detail/grade",//年级明细

  getGradeInfo:APP_BASE_URL + "/api/frs-report/attendance/base/get-grade", //年级列表查询

  getClassInfo: APP_BASE_URL + "/api/frs-report/attendance/base/get-class", //班级信息

  attendanceDateDetails: APP_BASE_URL + "/api/frs-report/attendance/family/date-details", //查看学生每日考勤明细

  getLeaveOrderPage:APP_BASE_URL + "/api/frs-leave/ask4leave/teacher/order-page",   //请假单分页列表

  getLeaveOrderList:APP_BASE_URL + "/api/frs-leave/ask4leave/teacher/order-list", //请假单列表

  doExamineLeave:APP_BASE_URL + "/api/frs-leave/ask4leave/teacher/examine",  //请假审批

  cancelAskLeave:APP_BASE_URL + "/api/frs-leave/ask4leave/teacher/cancel", //取消请假

  doSubmitAskLeave:APP_BASE_URL + "/api/frs-leave/ask4leave/teacher/agent",  //提交代请假

  getFamilyList:APP_BASE_URL + "/api/frs-leave/ask4leave/teacher/family-list",   //获取家长列表

  familyDoAskleave:APP_BASE_URL + "/api/frs-leave/ask4leave/family/apply",  //家长提交请假单

  familyGetAskLeaveList:APP_BASE_URL + "/api/frs-leave/ask4leave/family/order-list",  //家长获取请假列表

  familyCancelAskLeave:APP_BASE_URL + "/api/frs-leave/ask4leave/family/cancel",  //家长取消请假

}

const WxUrlConfig = {
  getHjytoken:WX_BASE_URL + "/api/sync-face/sso/hjy/web-sync-face",//获取token

  getWechatConfig: WX_BASE_URL + "/wechat-demo/wechat/get-config", //微信配置信息

  getToken: WX_BASE_URL + "/wechat-demo/wechat/token", //获取token

  uploadImg: WX_BASE_URL + "/wechat-demo/wechat/wx-img-upload",

  getUserInfo: WX_BASE_URL + "/wechat-demo/wechat/get-userinfo", //获取用户信息

  isWechatBinding: WX_BASE_URL + "/wechat-demo/wechat/is-binding", //是否绑定微信

  getPunchCardStatus:WX_BASE_URL + "/api/frs-report/attendance/base/get-punch-card-status",//打卡状态类型

  getAttendanceTimePeriod:WX_BASE_URL + "/api/frs-report/attendance/base/get-time-period", //考勤时段类型

  getSchoolInfo:WX_BASE_URL + "/api/frs-report/attendance/statis/time-period/school",  //校级报表

  getGradeStatis:WX_BASE_URL + "/api/frs-report/attendance/statis/time-period/grade",//年级考勤统计

  getClassStatis: WX_BASE_URL + "/api/frs-report/attendance/statis/time-period/class", //班级考勤统计

  getTodayStudent: WX_BASE_URL + "/api/frs-report/attendance/today/student", //今日学生出勤总览

  getClassDetails: WX_BASE_URL + "/api/frs-report/attendance/detail/class", //班级出勤详情

  getSchoolDetails:WX_BASE_URL + "/api/frs-report/attendance/detail/school",//校级出勤明细

  getGradeDetails:WX_BASE_URL + "/api/frs-report/attendance/detail/grade",//年级明细

  getGradeInfo:WX_BASE_URL + "/api/frs-report/attendance/base/get-grade", //年级列表查询

  getClassInfo: WX_BASE_URL + "/api/frs-report/attendance/base/get-class", //班级信息

  attendanceDateDetails: WX_BASE_URL + "/api/frs-report/attendance/family/date-details", //查看学生每日考勤明细

}
export default {
  UrlConfig,AppUrlConfig,WxUrlConfig
};
