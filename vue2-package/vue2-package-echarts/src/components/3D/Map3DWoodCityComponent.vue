<template>
  <div>
    <h1>ECharts 示例-3D 地图 map3D-Wood City</h1>
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
  name: 'Map3DWoodCity',
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

        fetch(ROOT_PATH + '/data-gl/asset/data/buildings.json', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          }
        })
          .then(response => response.json())
          .then(data => {
            const buildingsGeoJSON = data;
            echarts.registerMap('buildings', buildingsGeoJSON); // 绑定数据 buildingsGeoJSON

            const regions = buildingsGeoJSON.features.map(feature => {
              const name = feature.properties ? feature.properties.name : 'Unknown';
              const height = feature.properties && feature.properties.height !== undefined ? feature.properties.height : 0.1;
              return {
                name: name,
                value: Math.max(Math.sqrt(height), 0.1),
                height: Math.max(Math.sqrt(height), 0.1)
              };
            });


            const option = {
              series: [
                {
                  type: 'map3D',
                  map: 'buildings',
                  shading: 'realistic',
                  realisticMaterial: {
                    roughness: 0.6,
                    textureTiling: 20,
                    detailTexture: ROOT_PATH + '/data-gl/asset/woods.jpg'
                  },
                  postEffect: {
                    enable: true,
                    bloom: {
                      enable: false
                    },
                    SSAO: {
                      enable: true,
                      quality: 'medium',
                      radius: 10,
                      intensity: 1.2
                    },
                    depthOfField: {
                      enable: false,
                      focalRange: 5,
                      fstop: 1,
                      blurRadius: 6
                    }
                  },
                  groundPlane: {
                    show: true,
                    color: '#333'
                  },
                  light: {
                    main: {
                      intensity: 6,
                      shadow: true,
                      shadowQuality: 'high',
                      alpha: 30
                    },
                    ambient: {
                      intensity: 0
                    },
                    ambientCubemap: {
                      texture: ROOT_PATH + '/data-gl/asset/canyon.hdr',
                      exposure: 2,
                      diffuseIntensity: 1,
                      specularIntensity: 1
                    }
                  },
                  viewControl: {
                    minBeta: -360,
                    maxBeta: 360
                  },
                  itemStyle: {
                    areaColor: '#666'
                  },
                  label: {
                    color: 'white'
                  },
                  silent: true,
                  instancing: true,
                  boxWidth: 200,
                  boxHeight: 1,
                  data: regions
                }
              ]
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
