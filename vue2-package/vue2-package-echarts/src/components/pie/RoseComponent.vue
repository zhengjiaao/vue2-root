<template>
  <div>
    <h1>ECharts 示例-南丁格尔图（玫瑰图）</h1>
    <div class="chart-container">
      <!-- 图表容器 -->
      <div ref="chart1" class="chart"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'RoseChart',
  data() {
    return {};
  },
  mounted() {
    this.initChart1();
  },
  methods: {
    initChart1() {
      const chartDom = this.$refs.chart1;
      if (chartDom) {
        const myChart = echarts.init(chartDom);
        const option = {
          title: {
            text: '图表 1-南丁格尔图（玫瑰图）'
          },
          series: [
            {
              type: 'pie',
              data: [
                { value: 100, name: 'A' },
                { value: 200, name: 'B' },
                { value: 300, name: 'C' },
                { value: 400, name: 'D' },
                { value: 500, name: 'E' }
              ],
              roseType: 'area' // 设置为玫瑰图类型
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
