<template>
  <div>
    <h1>ECharts 示例-阶梯瀑布图</h1>
    <div class="chart-container">
      <!-- 图表容器 -->
      <div ref="chart1" class="chart"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'EChartsWaterfall',
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
      }
    },
    getOption() {
      const data = [900, 345, 393, -108, -154, 135, 178, 286, -119, -361, -203];
      const help = [];
      const positive = [];
      const negative = [];

      for (let i = 0, sum = 0; i < data.length; ++i) {
        if (data[i] >= 0) {
          positive.push(data[i]);
          negative.push('-');
        } else {
          positive.push('-');
          negative.push(-data[i]);
        }

        if (i === 0) {
          help.push(0);
        } else {
          sum += data[i - 1];
          if (data[i] < 0) {
            help.push(sum + data[i]);
          } else {
            help.push(sum);
          }
        }
      }

      return {
        title: {
          text: 'Waterfall'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          splitLine: { show: false },
          data: Array.from({ length: data.length }, (_, i) => `Oct/${i + 1}`)
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: 'bar',
            stack: 'all',
            itemStyle: {
              color: 'rgba(0,0,0,0)'
            },
            data: help
          },
          {
            name: 'positive',
            type: 'bar',
            stack: 'all',
            itemStyle: {
              color: '#3398DB'
            },
            data: positive.map((val) => (val === '-' ? null : val))
          },
          {
            name: 'negative',
            type: 'bar',
            stack: 'all',
            itemStyle: {
              color: '#f33'
            },
            data: negative.map((val) => (val === '-' ? null : val))
          }
        ]
      };
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
