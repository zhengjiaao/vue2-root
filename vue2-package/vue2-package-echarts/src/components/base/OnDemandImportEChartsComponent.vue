<template>
  <div>
    <h1>ECharts 示例-按需引入ECharts</h1>
    <div class="chart-container">
      <!-- 图表容器 -->
      <div ref="chart1" class="chart"></div>
    </div>
  </div>
</template>

<script>
// 按需引入 ECharts 核心模块和组件
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

// 注册需要的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer
]);

export default {
  name: 'EChartsOnDemand',
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
        this.myChart = echarts.init(chartDom, null, {
          renderer: 'svg' // 使用 SVG 渲染
        });

        const option = {
          title: {
            text: '图表 2-按需引入ECharts'
          },
          tooltip: {},
          legend: {
            data: ['sales'],
            top: '30px', // 调整 legend 的 top 位置
            left: 'center' // 调整 legend 的 left 位置
          },
          xAxis: {
            data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
          },
          yAxis: {},
          series: [
            {
              name: 'sales',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
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
  height: 400px;
  margin-bottom: 20px; /* 添加间距 */
}
</style>
