<template>
  <div>
    <h1>CountTo数字增长组件</h1>
    <div class="wrap">
      <Row style="margin-left:-10px;margin-right:-10px">
        <Col span="6" v-for="i in 4" :key="i">
          <div style="padding-left:10px;padding-right:10px">
            <Card style="height:200px;">
              <p slot="title">size支持h1~h6 当前h{{i}}</p>
              <p style="line-height:120px;text-align:center">
                <CountTo :startVal="0" :endVal="randNumVals[i-1]" :size="`h${i}`"></CountTo>
              </p>
            </Card>
          </div>
        </Col>
      </Row>
      <Row style="margin-top:15px">
        <Col span="12">
          <Card style="height:250px">
            <p slot="title">异步更新数据</p>
            <p style="line-height:130px;text-align:center">
              实时销量
              <CountTo
                :startVal="0"
                :endVal="asyncValue.value"
                size="h1"
                :duration="asyncValue.duration"
                style="margin:0 10px"
              />
              <small>件</small>
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import { randomNum } from "../../utils/charts-func.js";
import CountTo from "../../components/CountTo";
export default {
  components: {
    CountTo
  },
  data() {
    return {
      randNumVals: [],
      asyncValue: {
        value: 1000,
        duration: 3000
      }
    };
  },

  mounted() {
    this.randNumVals = Array.from({ length: 4 }, (v, k) =>
      randomNum(1111 * (k + 1), 9999)
    );

    let timer = setInterval(() => {
      this.asyncValue.value += 100;
      this.asyncValue.duration = 3000 * (Math.floor(Math.random() * 9) + 0.2);
    }, 10000);

    this.$once("hook:beforeDestroy", function() {
      clearInterval(timer);
    });
  }
};
</script>

<style>
</style>