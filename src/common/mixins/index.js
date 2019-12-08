import { formatDate } from '@/utils/date.js';
const mixin = {
     data(){
      return {
        
      }
     },
     filters:{
         fdate:function(timestamp){
           // 这里默认认为是11位时间戳
           let date=new Date(timestamp*1000)
           return formatDate(date,'yyyy-MM-dd hh:mm')
       }
     },
     computed:{
       RandomColor() {
         return function(){
           let r, g, b;
           r = Math.floor(Math.random() * 256);
           g = Math.floor(Math.random() * 256);
           b = Math.floor(Math.random() * 256);
           return "rgb(" +r + ',' +g+ ',' +b+ ")";
         }
       }
     },
     methods: {
      formatTime(timestamp) {
        let date = new Date(timestamp*1000)
        return formatDate(date,'yyyy-MM-dd hh:mm')
      },
      padLeftZero(str) {
          return ('00' + str).substr(str.length);
      },
      loadPage(path,query){
        this.$router.push({
          path:path,
          query:query
        })
      }
    }
}

export default mixin
