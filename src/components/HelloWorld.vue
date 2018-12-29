<template>
  <div>
    
    <div v-for="(item,index) in list" :key="index">
      <div style="width:500px;height:300px; float:left;margin-right:20px;" :id="'a'+index">
        <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
      </div>
    </div>
  </div>
</template>   
<script>
// import axios from "axios";
import echarts from "echarts";
export default {
  name: "HelloWorld",
  data() {
    return {
      list: [
        [13, 23, 32, 42, 54, 43, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [5, 3, 5, 1, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 2, 3, 4, 5, 6, 7, 8],
        [3, 3, 3, 3, 3, 3, 3, 3],
        [10, 20, 30, 40, 50, 60, 70, 80],
        [222.35, 88, 45, 123, 325, 456, 123, 122]
      ],
      abc: []
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var length = this.list.length;
      for (var i = 0; i < length; i++) {
        this.abc[i] = "a" + i;
        let myChart = this.$echarts.init(document.getElementById(this.abc[i]));
        // 绘制图表
        var option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              crossStyle: {
                color: "#999"
              }
            }
          },
          /*  toolbox: {
            feature: {
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ["line", "line"] },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          }, */
          /*  legend: {
            data: ["降水量", "平均温度"]
          }, */
          xAxis: [
            {
              type: "category",
              data: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
              ],
              axisPointer: {
                type: "shadow"
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              name: "水量",
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: "{value} ml"
              }
            },
            {
              type: "value",
              name: "温度",
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                formatter: "{value} °C"
              }
            }
          ],
          series: [
            {
              name: "降水量",
              type: "line",
              data: this.list[i]
            },
            {
              name: "平均温度",
              type: "line",
              yAxisIndex: 1,
              data: this.list[this.list.length - i]
            }
          ]
        };

        myChart.setOption(option);
      }
    }
  }
};
</script>
<style scoped>
li {
  list-style: none;
}
</style>
