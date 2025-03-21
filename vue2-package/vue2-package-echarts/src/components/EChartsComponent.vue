<template>
  <div>
    <h1>ECharts 示例</h1>
    <div class="chart-container">
      <div ref="chart1" class="chart"></div>
      <div ref="chart2" class="chart"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'EChartsExample',
  data() {
    return {};
  },
  mounted() {
    this.initChart1();
    this.initChart2();
  },
  methods: {
    initChart1() {
      const chartDom = this.$refs.chart1;
      if (chartDom) {
        const myChart = echarts.init(chartDom);
        const option = {
          title: {
            text: '示例图表 1'
          },
          tooltip: {},
          xAxis: {
            data: ['A', 'B', 'C', 'D', 'E']
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10]
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
            text: '示例图表 2'
          },
          tooltip: {},
          xAxis: {
            data: ['X', 'Y', 'Z', 'W', 'V']
          },
          yAxis: {},
          series: [
            {
              name: '数量',
              type: 'line',
              data: [15, 25, 30, 45, 50]
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
  justify-content: space-around;
}

.chart {
  width: 400px;
  height: 300px;
}
</style>
