<template>
  <div>
    <h1>ECharts 示例-基础柱状图</h1>
    <div class="chart-container">
      <!-- 图表容器 -->
      <div ref="chart1" class="chart"></div>
      <div ref="chart2" class="chart"></div>
      <div ref="chart3" class="chart"></div>
      <div ref="chart4" class="chart"></div>
      <div ref="chart5" class="chart"></div>
      <div ref="chart6" class="chart"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'EChartsBasicBar',
  data() {
    return {};
  },
  mounted() {
    this.initChart1();
    this.initChart2();
    this.initChart3();
    this.initChart4();
    this.initChart5();
    this.initChart6();
  },
  methods: {
    initChart1() {
      const chartDom = this.$refs.chart1;
      if (chartDom) {
        const myChart = echarts.init(chartDom);
        const option = {
          title: {
            text: '图表 1-最简单的柱状图'
          },
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {},
          series: [
            {
              type: 'bar',
              data: [23, 24, 18, 25, 27, 28, 25]
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
            text: '图表 2-多系列的柱状图'
          },
          tooltip: {},
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {},
          series: [
            {
              type: 'bar',
              data: [23, 24, 18, 25, 27, 28, 25]
            },
            {
              type: 'bar',
              data: [26, 24, 18, 22, 23, 20, 27]
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
            text: '图表 3-柱状图样式设置-柱条样式'
          },
          tooltip: {},
          xAxis: {
            data: ['A', 'B', 'C', 'D', 'E']
          },
          yAxis: {},
          series: [
            {
              type: 'bar',
              data: [
                10,
                22,
                28,
                {
                  value: 43,
                  // 设置单个柱子的样式
                  itemStyle: {
                    color: '#91cc75',
                    shadowColor: '#91cc75',
                    borderType: 'dashed',
                    opacity: 0.5
                  }
                },
                49
              ],
              itemStyle: {
                barBorderRadius: 5,
                borderWidth: 1,
                borderType: 'solid',
                borderColor: '#73c0de',
                shadowColor: '#5470c6',
                shadowBlur: 3
              }
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
            text: '图表 4-多系列的柱状图-柱条宽度和高度'
          },
          tooltip: {},
          xAxis: {
            data: ['A', 'B', 'C', 'D', 'E']
          },
          yAxis: {},
          series: [
            {
              type: 'bar',
              data: [10, 22, 28, 43, 49],
              barWidth: '20%'
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
            text: '图表 5-多系列的柱状图-柱条间距'
          },
          tooltip: {},
          xAxis: {
            data: ['A', 'B', 'C', 'D', 'E']
          },
          yAxis: {},
          series: [
            {
              type: 'bar',
              data: [23, 24, 18, 25, 18],
              barGap: '20%',
              barCategoryGap: '40%'
            },
            {
              type: 'bar',
              data: [12, 14, 9, 9, 11]
            }
          ]
        };
        myChart.setOption(option);
      }
    },
    initChart6() {
      const chartDom = this.$refs.chart6;
      if (chartDom) {
        const myChart = echarts.init(chartDom);
        const option = {
          title: {
            text: '图表 6-多系列的柱状图-为柱条添加背景色'
          },
          tooltip: {},
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
              }
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
