<template>
  <div>
    <h1>ECharts 示例-3D 地球（globe）-Globe Layers</h1>
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
  name: 'GlobeLayers',
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

        const option = {
          backgroundColor: '#000',
          globe: {
            baseTexture: ROOT_PATH + '/data-gl/asset/earth.jpg',
            heightTexture: ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',
            displacementScale: 0.1,
            shading: 'lambert',
            environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
            light: {
              ambient: {
                intensity: 0.1
              },
              main: {
                intensity: 1.5
              }
            },
            layers: [
              {
                type: 'blend',
                blendTo: 'emission',
                texture: ROOT_PATH + '/data-gl/asset/night.jpg'
              },
              {
                type: 'overlay',
                texture: ROOT_PATH + '/data-gl/asset/clouds.png',
                shading: 'lambert',
                distance: 5
              }
            ]
          },
          series: []
        };

        myChart.setOption(option);
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
