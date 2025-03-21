<template>
  <div>
    <h1>ECharts 示例-基础折线图</h1>
    <div class="chart-container">
      <!-- 图表容器 -->
      <div ref="chart1" class="chart"></div>
      <div ref="chart2" class="chart"></div>
      <div ref="chart3" class="chart"></div>
      <div ref="chart4" class="chart"></div>
      <div ref="chart5" class="chart"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'BasicLineChart',
  data() {
    return {};
  },
  mounted() {
    this.initChart1();
    this.initChart2();
    this.initChart3();
    this.initChart4();
    this.initChart5();
  },
  methods: {
    initChart1() {
      const chartDom = this.$refs.chart1;
      if (chartDom) {
        const myChart = echarts.init(chartDom);
        const option = {
          title: {
            text: '图表 1-基础折线图'
          },
          tooltip: {},
          xAxis: {
            type: 'category',
            data: ['A', 'B', 'C']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [120, 200, 150],
              type: 'line'
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
            text: '图表 2-笛卡尔坐标系中的折线图'
          },
          tooltip: {},
          xAxis: {},
          yAxis: {},
          series: [
            {
              data: [
                [20, 120],
                [50, 200],
                [40, 50]
              ],
              type: 'line'
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
            text: '图表 3-折线图样式设置-折线的样式'
          },
          tooltip: {},
          xAxis: {
            data: ['A', 'B', 'C', 'D', 'E']
          },
          yAxis: {},
          series: [
            {
              data: [10, 22, 28, 23, 19],
              type: 'line',
              lineStyle: {
                // 数据点的样式,指定颜色、线宽、折线类型、阴影、不透明度等
                color: 'green',
                width: 4,
                type: 'dashed'
              }
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
            text: '图表 4-在数据点处显示数值'
          },
          tooltip: {},
          xAxis: {
            data: ['A', 'B', 'C', 'D', 'E']
          },
          yAxis: {},
          series: [
            {
              data: [10, 22, 28, 23, 19],
              type: 'line',
              label: {
                show: true,
                position: 'bottom',
                textStyle: {
                  fontSize: 20
                }
              }
            }
          ]
        };
        myChart.setOption(option);
      }
    },
    initChart5() {
      const chartDom = this.$refs.chart5;
      if (chartDom) {
        const myChart = echarts.init(chartDom);
        const option = {
          title: {
            text: '图表 5-空数据'
          },
          tooltip: {},
          xAxis: {
            data: ['A', 'B', 'C', 'D', 'E']
          },
          yAxis: {},
          series: [
            {
              data: [0, 22, '-', 23, 19], // 注：“空”数据与取值为 0 的数据。
              type: 'line'
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
