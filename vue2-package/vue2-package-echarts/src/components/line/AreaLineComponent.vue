<template>
  <div>
    <h1>ECharts 示例-区域面积图</h1>
    <div class="chart-container">
      <!-- 图表容器 -->
      <div ref="chart1" class="chart"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'AreaLineChart',
  data() {
    return {
      myChart: null // 存储 ECharts 实例
    };
  },
  mounted() {
    this.initChart1(); // 初始化图表
  },
  methods: {
    initChart1() {
      const chartDom = this.$refs.chart1;
      if (chartDom) {
        this.myChart = echarts.init(chartDom);
        const option = {
          title: {
            text: '图表 1-区域面积图'
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
              areaStyle: {}
            },
            {
              data: [25, 14, 23, 35, 10],
              type: 'line',
              areaStyle: {
                color: '#ff0',
                opacity: 0.5
              }
            }
          ]
        };
        this.myChart.setOption(option);
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
