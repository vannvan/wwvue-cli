let mydirective = {}
mydirective.install = function (Vue) {
  //背景颜色
  Vue.directive('bg', {
    bind(el, binding) {
        el.style.color = '#f6f6f6';
    }
  }),
  //主题色
  Vue.directive('color', {
    bind(el, binding) {
        el.style.color = '#42E5D3';
    }
  }),
  Vue.directive('theme',function(el){
    el.style.color = '#42E5D3'
    el.style.background = '#f6f6f6'
  }),
  Vue.directive('danger',function(el){
    el.style.color = '#f00'
  }),
  // 图片未加载完之前先用随机背景色占位
  Vue.directive('img', {
  inserted:function (el, binding) {
    var color = Math.floor(Math.random()*1000000);
    el.style.backgroundColor = "#" + color;
    var img = new Image();
    img.src = binding.value;
    img.onload = function(){
      el.style.backgroundImage = 'url('+ binding.value +')'
    }
  }
  })
}

export default mydirective;
