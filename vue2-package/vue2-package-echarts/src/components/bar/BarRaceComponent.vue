<template>
  <div>
    <h1>ECharts 示例-动态排序柱状图</h1>
    <div class="chart-container">
      <!-- 图表容器 -->
      <div ref="chart1" class="chart"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'EChartsDynamicBar',
  data() {
    return {
      myChart: null // 存储 ECharts 实例
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chartDom = this.$refs.chart1;
      if (chartDom) {
        this.myChart = echarts.init(chartDom);
        this.myChart.setOption(this.getOption());
        setInterval(this.update, 3000); // 每 3 秒更新数据
      }
    },
    getOption() {
      const data = Array.from({ length: 5 }, () => Math.round(Math.random() * 200));

      return {
        xAxis: {
          max: 'dataMax'
        },
        yAxis: {
          type: 'category',
          data: ['A', 'B', 'C', 'D', 'E'],
          inverse: true,
          animationDuration: 300,
          animationDurationUpdate: 300,
          max: 2 // 只显示最大的 3 个柱子
        },
        series: [
          {
            realtimeSort: true,
            name: 'X',
            type: 'bar',
            data: data,
            label: {
              show: true,
              position: 'right',
              valueAnimation: true
            }
          }
        ],
        legend: {
          show: true
        },
        animationDuration: 3000,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
      };
    },
    update() {
      if (!this.myChart) return;

      const option = this.myChart.getOption();
      const data = option.series[0].data;

      for (let i = 0; i < data.length; ++i) {
        if (Math.random() > 0.9) {
          data[i] += Math.round(Math.random() * 2000);
        } else {
          data[i] += Math.round(Math.random() * 200);
        }
      }

      this.myChart.setOption({
        series: [
          {
            ...option.series[0],
            data
          }
        ]
      });
    }
  }
};
</script>

<style>
.chart-container {
  display: flex;
  justify-content: center;
}

.chart {
  width: 600px;
  height: 400px;
}
</style>
