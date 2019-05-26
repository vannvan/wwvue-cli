<template>
  <div class="hello">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      date:1558849079000
    }
  },
  mounted() {
    this.getUserInfo()
    //这里使用一下定义在mixin中的方法
    let data=new Date(this.date)
    console.log(this.formatDate(data,'yyyy-MM-dd hh:mm'))
  },
  methods: {
    getUserInfo() {
      let datas = {
        token:''
      }
      // URL_CONFIG 来自mixin
      this.$http.post(this.URL_CONFIG.UrlConfig.getUserInfo,datas)
      .then(res =>{
        console.log(res)
      }).catch(error =>{
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h1{
  color: $themeColor
}
</style>
