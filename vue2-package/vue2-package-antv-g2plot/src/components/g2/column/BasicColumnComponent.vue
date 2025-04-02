<template>
  <div>
    <h1>AntV-g2 示例-基础柱状图</h1>
    <div class="chart-container">
      <!-- 图表容器 -->
      <div id="chart1" class="chart"></div>
      <div id="chart2" class="chart"></div>
      <div id="chart3" class="chart"></div>
      <div id="chart4" class="chart"></div>
      <div id="chart5" class="chart"></div>
    </div>
  </div>
</template>

<script>
import {Bar} from '@antv/g2plot'; // 条形图
import { Column } from '@antv/g2plot'; // 柱状图

export default {
  mounted() {
    this.initChart1();
    this.initChart2();
    this.initChart3();
    this.initChart4();
    this.initChart5();
  },
  methods: {
    // 最简单的柱状图
    initChart1() {
      fetch('https://gw.alipayobjects.com/os/antfincdn/K0kfOzo4j%24/column.json')
        .then(data => data.json())
        .then(data => {
          const columnPlot = new Column('chart1', {
            data,
            xField: 'type',
            yField: 'sales',
          });

          columnPlot.render();
        });
    },

    // 柱状图-设置柱形最小宽度和最大宽度
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
      const bar = new Column('chart2', {
        data,
        xField: 'value',
        yField: 'year',
        seriesField: 'year',
        legend: {
          position: 'top-left',
        },
        minColumnWidth: 20, // 可选地，设置柱形最小宽度
        maxColumnWidth: 20, // 可选地，设置柱形最大宽度
      });

      // 渲染图表
      bar.render();
    },

    // 柱状图-设置柱子的圆角
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
      const bar = new Column('chart3', {
        data,
        xField: 'value',
        yField: 'year',
        seriesField: 'year',
        legend: {
          position: 'top-left',
        },
        isGroup: 'true', // 设置是否分组柱状图
        columnStyle: { // 设置柱子圆角
          radius: [20, 20, 0, 0],
        },
      });

      // 渲染图表
      bar.render();
    },

    // 柱状图-设置背景颜色
    initChart4() {
      // 图表数据
      const data = [
        {year: '1951 年', value: 38},
        {year: '1952 年', value: 52},
        {year: '1956 年', value: 61},
        {year: '1957 年', value: 145},
        {year: '1958 年', value: 48},
      ];

      // 配置图表
      const bar = new Column('chart4', {
        data,
        xField: 'value',
        yField: 'year',
        seriesField: 'year',
        legend: {
          position: 'top-left',
        },
        interactions: [{type: 'active-region', enable: false}],
        columnBackground: {
          style: {
            fill: 'rgba(0,0,0,0.1)',
          },
        },
      });

      // 渲染图表
      bar.render();
    },

    // 堆叠柱状图
    initChart5() {
      fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json')
        .then((data) => data.json())
        .then((data) => {
          const stackedColumnPlot = new Column('chart5', {
            data,
            isStack: true,
            xField: 'year',
            yField: 'value',
            seriesField: 'type',
            label: {
              // 可手动配置 label 数据标签位置
              position: 'middle', // 'top', 'bottom', 'middle'
              // 可配置附加的布局方法
              layout: [
                // 柱形图数据标签位置自动调整
                {type: 'interval-adjust-position'},
                // 数据标签防遮挡
                {type: 'interval-hide-overlap'},
                // 数据标签文颜色自动调整
                {type: 'adjust-color'},
              ],
            },
          });

          stackedColumnPlot.render();
        });
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
