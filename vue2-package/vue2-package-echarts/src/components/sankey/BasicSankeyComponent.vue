<template>
  <div>
    <h1>ECharts 示例-桑基图</h1>
    <div class="chart-container">
      <!-- 图表容器 -->
      <div ref="chart1" class="chart"></div>
      <div ref="chart2" class="chart"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'SankeyChart',
  data() {
    return {};
  },
  mounted() {
    this.initChart1();
    this.initChart2();
  },
  methods: {
    initChart1() {
      const chartDom = this.$refs.chart1;
      if (chartDom) {
        const myChart = echarts.init(chartDom);
        const option = {
          title: {
            text: '图表 1-最简单的桑基图'
          },
          series: {
            type: 'sankey',
            layout: 'none',
            emphasis: {
              focus: 'adjacency'
            },
            data: [
              { name: 'a' },
              { name: 'b' },
              { name: 'a1' },
              { name: 'a2' },
              { name: 'b1' },
              { name: 'c' }
            ],
            links: [
              { source: 'a', target: 'a1', value: 5 },
              { source: 'a', target: 'a2', value: 3 },
              { source: 'b', target: 'b1', value: 8 },
              { source: 'a', target: 'b1', value: 3 },
              { source: 'b1', target: 'a1', value: 1 },
              { source: 'b1', target: 'c', value: 2 }
            ]
          }
        };
        myChart.setOption(option);
      }
    },
    initChart2() {
      const chartDom = this.$refs.chart2;
      if (chartDom) {
        const myChart = echarts.init(chartDom);
        myChart.showLoading();

        const ROOT_PATH = '/api';
        fetch(ROOT_PATH + '/data/asset/data/product.json', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          }
        })
          .then(response => response.json())
          .then(data => {
            if (chartDom) {
              const option = {
                title: {
                  text: '图表 1-桑基图层级自定样式'
                },
                tooltip: {
                  trigger: 'item',
                  triggerOn: 'mousemove'
                },
                series: [
                  {
                    type: 'sankey',
                    data: data.nodes,
                    links: data.links,
                    emphasis: {
                      focus: 'adjacency'
                    },
                    levels: [
                      {
                        depth: 0,
                        itemStyle: {
                          color: '#fbb4ae'
                        },
                        lineStyle: {
                          color: 'source',
                          opacity: 0.6
                        }
                      },
                      {
                        depth: 1,
                        itemStyle: {
                          color: '#b3cde3'
                        },
                        lineStyle: {
                          color: 'source',
                          opacity: 0.6
                        }
                      },
                      {
                        depth: 2,
                        itemStyle: {
                          color: '#ccebc5'
                        },
                        lineStyle: {
                          color: 'source',
                          opacity: 0.6
                        }
                      },
                      {
                        depth: 3,
                        itemStyle: {
                          color: '#decbe4'
                        },
                        lineStyle: {
                          color: 'source',
                          opacity: 0.6
                        }
                      }
                    ],
                    lineStyle: {
                      curveness: 0.5
                    }
                  }
                ]
              };
              myChart.setOption(option);
              myChart.hideLoading();
            }
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            myChart.hideLoading();
          });
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
