<template>
  <div>
    <h1>AntV-g2 示例-基础折线图</h1>
    <div class="chart-container">
      <!-- 图表容器 -->
      <div id="chart1" class="chart"></div>
      <div id="chart2" class="chart"></div>
      <div id="chart3" class="chart"></div>
    </div>
  </div>
</template>

<script>
import {Line} from '@antv/g2plot'; // 折线图
// import {Bar} from '@antv/g2plot'; // 条形图
// import { Column } from '@antv/g2plot'; // 柱状图

export default {
  mounted() {
    this.initChart1();
    this.initChart2();
    this.initChart3();
  },
  methods: {
    // 最简单的折线图
    initChart1() {
      fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
        .then((res) => res.json())
        .then((data) => {
          const line = new Line('chart1', {
            data,
            padding: 'auto',
            xField: 'Date',
            yField: 'scales',
            xAxis: {
              // type: 'timeCat',
              tickCount: 5,
            },
          });

          line.render();
        });
    },

    // 最简单的曲线图
    initChart2() {
      fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
        .then((res) => res.json())
        .then((data) => {
          const line = new Line('chart2', {
            data,
            padding: 'auto',
            xField: 'Date',
            yField: 'scales',
            xAxis: {
              // type: 'timeCat',
              tickCount: 5,
            },
            smooth: true,
          });

          line.render();
        });
    },

    // 阶梯型直线图
    initChart3() {
      const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
        { year: '1999', value: 8 },
      ];
      const linePlot = new Line('chart3', {
        data,
        xField: 'year',
        yField: 'value',
        stepType: 'vh',
      });

      linePlot.render();
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
