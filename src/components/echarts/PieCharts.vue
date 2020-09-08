// 饼状图或环状图
<template>
  <div ref="pieCharts" :style="{height:height}"></div>
</template>

<script>
import echarts from "../../utils/echarts";
export default {
  props: {
    height: {
      type: String,
      default: "300px"
    }
  },
  methods: {
    drawCharts(optionData = {}) {
      console.log(optionData);
      var colorList = [
        "#73DDFF",
        "#73ACFF",
        "#FDD56A",
        "#FDB36A",
        "#FD866A",
        "#9E87FF",
        "#58D5FF"
      ];
      let charts = echarts.init(this.$refs.pieCharts);
      var option = {
        backgroundColor: "#fff",
        //提示框
        tooltip: {
          trigger: "axis"
        },
        //标题
        title: {
          //
        },
        series: [
          {
            type: "pie",
            center: ["50%", "50%"],
            radius: ["24%", "45%"],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            itemStyle: {
              normal: {
                color: function(params) {
                  return colorList[params.dataIndex];
                }
              }
            },
            label: {
              show: true,
              position: "outside",
              formatter: "{a|{b}：{d}%}\n{hr|}",
              rich: {
                hr: {
                  backgroundColor: "t",
                  borderRadius: 3,
                  width: 3,
                  height: 3,
                  padding: [3, 3, 0, -12]
                },
                a: {
                  padding: [-30, 15, -20, 15]
                }
              }
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                  width: 1
                }
              }
            },
            data: [
              {
                name: "一月",
                value: 1.45
              },
              {
                name: "二月",
                value: 2.93
              },
              {
                name: "三月",
                value: 3.15
              },
              {
                name: "四月",
                value: 4.78
              },
              {
                name: "五月",
                value: 5.93
              },
              {
                name: "六月",
                value: 5.73
              }
            ]
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