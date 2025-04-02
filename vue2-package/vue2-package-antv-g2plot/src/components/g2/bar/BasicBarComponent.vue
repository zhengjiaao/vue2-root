<template>
  <div>
    <h1>AntV-g2 示例-基础条形图</h1>
    <div class="chart-container">
      <!-- 图表容器 -->
      <div id="chart1" class="chart"></div>
      <div id="chart2" class="chart"></div>
      <div id="chart3" class="chart"></div>
      <div id="chart4" class="chart"></div>
    </div>
  </div>
</template>

<script>
import {Bar} from '@antv/g2plot'; // 条形图
// import { Column } from '@antv/g2plot'; // 柱状图

export default {
  mounted() {
    this.initChart1();
    this.initChart2();
    this.initChart3();
  },
  methods: {
    // 最简单的条形图
    initChart1() {
      fetch('https://gw.alipayobjects.com/os/antfincdn/K0kfOzo4j%24/column.json')
        .then(data => data.json())
        .then(data => {
          const barPlot = new Bar('chart1', {
            data,
            xField: 'type',
            yField: 'sales',
          });

          barPlot.render();
        });
    },

    // 简单条形图-设置柱形最小宽度和最大宽度
    initChart2() {
      // 图表数据
      const data = [
        {year: '1951 年', value: 38},
        {year: '1952 年', value: 52},
        {year: '1956 年', value: 61},
        {year: '1957 年', value: 145},
        {year: '1958 年', value: 48},
      ];

      // 配置图表
      const bar = new Bar('chart2', {
        data,
        xField: 'value',
        yField: 'year',
        seriesField: 'year',
        legend: {
          position: 'top-left',
        },
        minBarWidth: 20, // 可选地，设置柱形最小宽度
        maxBarWidth: 20, // 可选地，设置柱形最大宽度
      });

      // 渲染图表
      bar.render();
    },

    // 简单条形图-设置背景颜色
    initChart3() {
      // 图表数据
      const data = [
        {year: '1951 年', value: 38},
        {year: '1952 年', value: 52},
        {year: '1956 年', value: 61},
        {year: '1957 年', value: 145},
        {year: '1958 年', value: 48},
      ];

      // 配置图表
      const bar = new Bar('chart3', {
        data,
        xField: 'value',
        yField: 'year',
        seriesField: 'year',
        legend: {
          position: 'top-left',
        },
        barBackground: {
          style: {
            fill: 'rgba(0,0,0,0.1)',
          },
        },
        interactions: [{type: 'active-region', enable: false}],
      });

      // 渲染图表
      bar.render();
    },
  }
};
</script>

<style scoped>
.chart-container {
  display: flex;
  flex-wrap: wrap; /* 确保图表可以换行 */
  justify-content: space-around;
}

.chart {
  width: 400px; /* 设置图表容器的宽度 */
  height: 400px; /* 设置图表容器的高度 */
  margin-bottom: 20px; /* 添加间距 */
}
</style>
