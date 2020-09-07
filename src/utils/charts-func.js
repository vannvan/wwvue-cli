/** 
 * 颜色枚举值
 */
export const COLOR = {
    budgetNormalColor: "#54D9EF", //预算颜色
    resolveNormalColor: "#816EFF", //实际颜色
    splitColor: "#858899", //网格线颜色
    axisLineColor: "#6B6F83", //坐标轴线颜色
    axisTextColor: "rgba(0,0,0,.8)", //坐标轴文字颜色
    titleTextColor: "rgba(0,0,0,.8)", //标题颜色
    legendTextColor: "rgba(0,0,0,.8)", //图例文字颜色
    splitOpacity: 0.2, //网格线条透明度
    axisLineOpavity: 0.2, //坐标轴线条透明度
    borderColor: "#474959", //圆角 border颜色
    transparent: "rgba(255,255,255,0.1)", //白色透明
    titleFontSize: 12
}


/** 
 * 生成min-max之间的随机数
 */
export const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

/** 
 * 生成指定长度，指定范围内的的随机数
 */
export const randomValues = (min, max, len) => {
    return Array.from({ length: len }, () => randomNum(min, max))
}