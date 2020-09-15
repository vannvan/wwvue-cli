// 全局指令，特殊指令不建议放在此处
const GlobalDirectives = {}
GlobalDirectives.install = function(Vue) {
    //警告色
    Vue.directive('warn', function(el) {
        el.style.color = '#FF6347'
    })
    //input获取焦点
    Vue.directive('focus', {
        inserted: function(el) {
            el.focus()
        }
    })

}

export default GlobalDirectives;