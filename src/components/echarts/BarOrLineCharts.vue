<template>
  <div ref="BarOrLineCharts" :style="{ height: height }" style="width:100%"></div>
</template>

<script>
import { COLOR, randomValues } from "../../utils/charts-func";
import echarts from "../../utils/echarts";
export default {
  props: {
    height: {
      type: String,
      default: "300px"
    },
    chartType: {
      type: String,
      default: "bar",
      validator: function(value) {
        // 必须匹配下列字符串中的一个
        return ["bar", "line"].indexOf(value) !== -1;
      }
    },
    //x轴数据类型
    xAxisData: {
      type: [Array],
      default: () => {
        return Array.from({ length: 12 }, (v, k) => (k = k + 1));
      }
    }
  },

  methods: {
    //绘制图表
    drawCharts(optionData = {}) {
      let charts = echarts.init(this.$refs.BarOrLineCharts);
      let _this = this;
      var option = {
        backgroundColor: "#BAE2BE",
        //提示框
        tooltip: {
          trigger: "axis"
        },
        //标题
        title: {
          //
        },
        //容器,此处可根据实际情况做各种调整
        grid: {
          left: "5%",
          right: "5%",
          bottom: "5%",
          containLabel: true
        },
        //图例
        legend: {
          icon: "rect",
          itemGap: 16,
          itemWidth: 18,
          itemHeight: 5,
          data: ["实际", "预算"],
          textStyle: {
            color: ""
          }
        },
        xAxis: [
          {
            type: "category",
            data: optionData.xAxisData || this.xAxisData,
            axisTick: {
              //坐标轴刻度相关设置。
              show: false
            },
            axisLine: {
              //坐标轴轴线相关设置
              lineStyle: {
                width: 2,
                color: COLOR.axisLineColor, //坐标轴的颜色
                opacity: COLOR.axisLineOpavity
              }
            },
            axisLabel: {
              textStyle: {
                color: COLOR.axisTextColor //坐标的字体颜色
              }
            },
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false
            }
          }
        ],
        yAxis: [
          {
            name: "y轴标题", //这个参数作为图表左上角的标题
            nameTextStyle: {
              color: COLOR.axisTextColor,
              lineHeight: 36,
              align: "left"
            },
            type: "value",
            splitNumber: 5,
            axisLine: {
              lineStyle: {
                width: 2,
                color: COLOR.axisLineColor, //坐标轴的颜色
                opacity: COLOR.axisLineOpavity
              }
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                color: COLOR.axisTextColor //坐标的字体颜色
              }
              //   formatter: function(value) {
              //     return "";
              //   }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: COLOR.splitColor,
                opacity: COLOR.splitOpacity
              }
            }
          }
        ],
        //数据
        series: [
          {
            name: "实际",
            type: _this.chartType,
            data: randomValues(50, 100, 12),
            barWidth: 10,
            itemStyle: {
              normal: {
                show: true,
                color: COLOR.resolveNormalColor,
                barBorderRadius: 50,
                borderWidth: 0
              }
            }
          }
        ]
      };
      charts.setOption(option);
      setTimeout(function() {
        window.addEventListener("resize", function() {
          charts.resize();
        });
      }, 100);
    }
  }
};
</script>

<style>
</style>