<template>
  <div>
    <h1>ECharts 示例-基础饼图</h1>
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
  name: 'BasicPieChart',
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
            text: '图表 1-最简单的饼图'
          },
          tooltip: {},
          series: [
            {
              type: 'pie',
              data: [
                { value: 335, name: '直接访问' },
                { value: 234, name: '联盟广告' },
                { value: 1548, name: '搜索引擎' }
              ]
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
            text: '图表 2-饼图样式设置-饼图的半径'
          },
          tooltip: {},
          series: [
            {
              type: 'pie',
              data: [
                { value: 335, name: '直接访问' },
                { value: 234, name: '联盟广告' },
                { value: 1548, name: '搜索引擎' }
              ],
              radius: '50%'
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
            text: '图表 3-饼图样式设置-如果数据和为 0'
          },
          tooltip: {},
          series: [
            {
              type: 'pie',
              data: [
                { value: 0, name: '直接访问' },
                { value: 0, name: '联盟广告' },
                { value: 0, name: '搜索引擎' }
              ]
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
            text: '图表 4-饼图样式设置-如果数据和为 0，不显示饼图'
          },
          tooltip: {},
          series: [
            {
              type: 'pie',
              stillShowZeroSum: false,
              data: [
                { value: 0, name: '直接访问' },
                { value: 0, name: '联盟广告' },
                { value: 0, name: '搜索引擎' }
              ]
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
            text: '图表 5-饼图样式设置-如果数据和为 0，不显示饼图和标签'
          },
          tooltip: {},
          series: [
            {
              type: 'pie',
              stillShowZeroSum: false,
              label: {
                show: false
              },
              data: [
                { value: 0, name: '直接访问' },
                { value: 0, name: '联盟广告' },
                { value: 0, name: '搜索引擎' }
              ]
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
