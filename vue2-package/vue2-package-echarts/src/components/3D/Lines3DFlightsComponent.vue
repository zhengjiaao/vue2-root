<template>
  <div>
    <h1>ECharts 示例-3D Lines3D（Flights）</h1>
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
  name: 'Lines3DFlights',
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
        const myChart = echarts.init(chartDom, 'dark'); // 创建 ECharts 实例，设置主题为深色模式

        fetch(ROOT_PATH + '/data-gl/asset/data/flights.json', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          }
        })
          .then(response => response.json())
          .then(data => {
            // 提取机场坐标数据
            const airports = data.airports.map(item => ({
              coord: [item[3], item[4]]
            }));

            function getAirportCoord(idx) {
              return [data.airports[idx][3], data.airports[idx][4]];
            }

            // 按航空公司分组航线数据
            const routesGroupByAirline = {};
            data.routes.forEach(route => {
              const airline = data.airlines[route[0]];
              const airlineName = airline[0];
              if (!routesGroupByAirline[airlineName]) {
                routesGroupByAirline[airlineName] = [];
              }
              routesGroupByAirline[airlineName].push(route);
            });

            // 提取所有点数据
            const pointsData = [];
            data.routes.forEach(route => {
              pointsData.push(getAirportCoord(route[1]));
              pointsData.push(getAirportCoord(route[2]));
            });

            // 构造航线系列
            const series = data.airlines
              .map(airline => {
                const airlineName = airline[0];
                const routes = routesGroupByAirline[airlineName];
                if (!routes) {
                  return null;
                }
                return {
                  type: 'lines3D',
                  name: airlineName,
                  effect: {
                    show: true,
                    trailWidth: 2,
                    trailLength: 0.15,
                    trailOpacity: 1,
                    trailColor: 'rgb(30, 30, 60)'
                  },
                  lineStyle: {
                    width: 1,
                    color: 'rgb(50, 50, 150)',
                    opacity: 0.1
                  },
                  blendMode: 'lighter',
                  data: routes.map(item => [
                    airports[item[1]].coord,
                    airports[item[2]].coord
                  ])
                };
              })
              .filter(seriesItem => !!seriesItem);

            // 添加散点图系列
            series.push({
              type: 'scatter3D',
              coordinateSystem: 'globe',
              blendMode: 'lighter',
              symbolSize: 2,
              itemStyle: {
                color: 'rgb(50, 50, 150)',
                opacity: 0.2
              },
              data: pointsData
            });

            const option = {
              legend: {
                selectedMode: 'single',
                left: 'left',
                data: Object.keys(routesGroupByAirline),
                orient: 'vertical',
                textStyle: {
                  color: '#fff'
                }
              },
              globe: {
                environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
                heightTexture:
                  ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',
                displacementScale: 0.1,
                displacementQuality: 'high',
                baseColor: '#000',
                shading: 'realistic',
                realisticMaterial: {
                  roughness: 0.2,
                  metalness: 0
                },
                postEffect: {
                  enable: true,
                  depthOfField: {
                    enable: false,
                    focalDistance: 150
                  }
                },
                temporalSuperSampling: {
                  enable: true
                },
                light: {
                  ambient: {
                    intensity: 0
                  },
                  main: {
                    intensity: 0.1,
                    shadow: false
                  },
                  ambientCubemap: {
                    texture: ROOT_PATH + '/data-gl/asset/lake.hdr',
                    exposure: 1,
                    diffuseIntensity: 0.5,
                    specularIntensity: 2
                  }
                },
                viewControl: {
                  autoRotate: false
                },
                silent: true
              },
              series: series
            };

            // 绑定键盘事件
            window.addEventListener('keydown', function () {
              series.forEach((seriesItem, idx) => {
                myChart.dispatchAction({
                  type: 'lines3DToggleEffect',
                  seriesIndex: idx
                });
              });
            });

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
