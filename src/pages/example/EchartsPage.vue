<template>
  <div>
    <h1>Echarts图表示例</h1>
    <Row style="margin-bottom:20px;margin-left:-10px;margin-right:-10px">
      <Col span="6" v-for="(item,index) in cardOpts" :key="index" class-name="padding-left-right">
        <div class="card-wrap">
          <div class="card-icon" :style="{background:RandomColor(index)}">
            <Icon :type="item.icon || 'ios-stats'" size="32" />
          </div>
          <div class="card-info">
            <p class="value">{{item.value}}</p>
            <p>{{item.name}}</p>
          </div>
        </div>
      </Col>
    </Row>
    <Row justify="space-between" type="flex" style="margin-bottom:7px">
      <Col span="24" class="chart-item">
        <BarOrLineCharts ref="lineCharts" chart-type="line" />
      </Col>
    </Row>
    <Row>
      <Col :xxl="8" :xl="12" :md="12" class-name="chart-item left-charts padding-right">
        <PieCharts ref="pieCharts" height="350px" />
      </Col>
      <Col :xxl="16" :xl="12" :md="12" class-name="chart-item left-charts padding-left">
        <BarOrLineCharts ref="barCharts" height="350px" />
      </Col>
    </Row>
  </div>
</template>

<script>
import BarOrLineCharts from "../../components/echarts/BarOrLineCharts";
import PieCharts from "../../components/echarts/PieCharts";
export default {
  components: {
    BarOrLineCharts,
    PieCharts
  },
  data() {
    return {
      cardOpts: [
        { name: "会员总数", value: 1112, icon: "md-contact />" },
        { name: "文章总数", value: 332 },
        { name: "总发帖数", value: 19192 },
        { name: "百科总发布数", value: 29222 }
      ]
    };
  },
  computed: {
    RandomColor() {
      return i => {
        return (
          "#" +
          Math.floor(Math.random(i) * 0xffffff)
            .toString(16)
            .padEnd(6, "0")
        );
      };
    }
  },
  mounted() {
    // 图表绘制必须在nextTick里
    this.$nextTick(() => {
      this.$refs.barCharts.drawCharts({});
      this.$refs.lineCharts.drawCharts({});
      this.$refs.pieCharts.drawCharts({});
    });
  }
};
</script>

<style lang="scss">
.chart-item {
  margin-bottom: 15px;
  border-radius: 5px;
  &.right-charts {
    margin-right: -16px;
  }
  &.padding-left {
    padding-left: 10px;
  }
  &.padding-right {
    padding-right: 10px;
  }
}
.padding-left-right {
  padding-left: 10px;
  padding-right: 10px;
}
.card-wrap {
  display: flex;
  height: 100px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  align-items: center;
  .card-icon {
    height: 100%;
    width: 30%;
    line-height: 100px;
    text-align: center;
    color: #fff;
    border-radius: 5px 0 0 5px;
  }
  .card-info {
    width: 70%;
    padding-left: 25px;
    .value {
      font-size: xx-large;
      font-weight: bolder;
    }
  }
}
</style>