<template>
  <div>
    <h1>ECharts 示例-基础散点图</h1>
    <div class="chart-container">
      <!-- 图表容器 -->
      <div ref="chart1" class="chart"></div>
      <div ref="chart2" class="chart"></div>
      <div ref="chart3" class="chart"></div>
      <div ref="chart4" class="chart"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'ScatterChart',
  data() {
    return {};
  },
  mounted() {
    this.initChart1();
    this.initChart2();
    this.initChart3();
    this.initChart4();
  },
  methods: {
    initChart1() {
      const chartDom = this.$refs.chart1;
      if (chartDom) {
        const myChart = echarts.init(chartDom);
        const option = {
          title: {
            text: '图表 1-最简单的散点图'
          },
          tooltip: {},
          xAxis: {
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
          },
          yAxis: {},
          series: [
            {
              type: 'scatter',
              data: [220, 182, 191, 234, 290, 330, 310]
            }
          ]
        };
        myChart.setOption(option);
      }
    },
    initChart2() {
      const chartDom = this.$refs.chart2;
      if (chartDom) {
        const myChart = echarts.init(chartDom);
        const option = {
          title: {
            text: '图表 2-笛卡尔坐标系下的散点图'
          },
          tooltip: {},
          xAxis: {},
          yAxis: {},
          series: [
            {
              type: 'scatter',
              data: [
                [10, 5],
                [0, 8],
                [6, 10],
                [2, 12],
                [8, 9]
              ]
            }
          ]
        };
        myChart.setOption(option);
      }
    },
    initChart3() {
      const chartDom = this.$refs.chart3;
      if (chartDom) {
        const myChart = echarts.init(chartDom);
        const option = {
          title: {
            text: '图表 3-散点图样式设置-图形的形状'
          },
          tooltip: {},
          xAxis: {
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
          },
          yAxis: {},
          series: [
            {
              type: 'scatter',
              data: [220, 182, 191, 234, 290, 330, 310],
              symbolSize: 20,
              symbol:
                'path://M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905 c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478 c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014 C52.216,18.553,51.97,16.611,51.911,16.242z'
            }
          ]
        };
        myChart.setOption(option);
      }
    },
    initChart4() {
      const chartDom = this.$refs.chart4;
      if (chartDom) {
        const myChart = echarts.init(chartDom);
        const option = {
          title: {
            text: '图表 4-散点图样式设置-图形的大小'
          },
          tooltip: {},
          xAxis: {
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
          },
          yAxis: {},
          series: [
            {
              type: 'scatter',
              data: [220, 182, 191, 234, 290, 330, 310],
              symbolSize: function () {
                return 20; // 设置为固定大小
              }
            }
          ]
        };
        myChart.setOption(option);
      }
    }
  }
};
</script>

<style>
.chart-container {
  display: flex;
  flex-wrap: wrap; /* 确保图表可以换行 */
  justify-content: space-around;
}

.chart {
  width: 400px;
  height: 300px;
  margin-bottom: 20px; /* 添加间距 */
}
</style>
