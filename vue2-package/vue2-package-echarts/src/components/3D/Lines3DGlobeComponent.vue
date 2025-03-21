<template>
  <div>
    <h1>ECharts 示例-3D Lines3D（Airline on Globe）</h1>
    <div class="chart-container">
      <!-- 图表容器 -->
      <div ref="chart1" class="chart"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-gl';

export default {
  name: 'Lines3DAirlineOnGlobe',
  data() {
    return {};
  },
  mounted() {
    this.initChart1();
  },
  methods: {
    initChart1() {
      const ROOT_PATH = '/api'; // 代理解决跨域情况

      const chartDom = this.$refs.chart1;
      if (chartDom) {
        const myChart = echarts.init(chartDom);

        fetch(ROOT_PATH + '/data-gl/asset/data/flights.json', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          }
        })
          .then(response => response.json())
          .then(data => {
            function getAirportCoord(idx) {
              return [data.airports[idx][3], data.airports[idx][4]];
            }

            const routes = data.routes.map(airline => {
              return [getAirportCoord(airline[1]), getAirportCoord(airline[2])];
            });

            const option = {
              backgroundColor: '#000',
              globe: {
                baseTexture: ROOT_PATH + '/data-gl/asset/world.topo.bathy.200401.jpg',
                heightTexture:
                  ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',
                shading: 'lambert',
                light: {
                  ambient: {
                    intensity: 0.4
                  },
                  main: {
                    intensity: 0.4
                  }
                },
                viewControl: {
                  autoRotate: false
                }
              },
              series: {
                type: 'lines3D',
                coordinateSystem: 'globe',
                blendMode: 'lighter',
                lineStyle: {
                  width: 1,
                  color: 'rgb(50, 50, 150)',
                  opacity: 0.1
                },
                data: routes
              }
            };

            myChart.setOption(option);
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
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}

.chart-container {
  width: 100%;
  height: 100vh; /* 使用视口高度 */
  display: flex;
  flex-wrap: wrap; /* 确保图表可以换行 */
  justify-content: space-around;
}

.chart {
  width: 100%;
  height: 100%;
}
</style>
