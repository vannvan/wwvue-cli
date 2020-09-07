<template>
  <div>
    <h1>echarts图表示例</h1>
    <div class="ww-wrap">
      <div class="charts-item">
        <BarOrLineCharts ref="barCharts" />
      </div>
      <div class="charts-item">
        <BarOrLineCharts ref="lineCharts" chart-type="line" />
      </div>
    </div>
  </div>
</template>

<script>
import BarOrLineCharts from "../../components/echarts/BarOrLineCharts";
export default {
  components: {
    BarOrLineCharts
  },
  mounted() {
    // 图表绘制必须在nextTick里
    this.$nextTick(() => {
      this.$refs.barCharts.drawCharts({});
      this.$refs.lineCharts.drawCharts({});
    });
  }
};
</script>

<style lang="scss">
.#{$prefix}wrap {
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  .charts-item {
    width: 45%;
  }
}
</style>