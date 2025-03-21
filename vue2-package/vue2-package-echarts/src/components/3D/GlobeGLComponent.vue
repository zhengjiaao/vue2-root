<template>
  <div>
    <h1>ECharts 示例-ECharts-GL Hello World</h1>
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
  name: 'EChartsGLHelloWorld',
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
            baseTexture: ROOT_PATH + '/data-gl/asset/world.topo.bathy.200401.jpg',
            heightTexture: ROOT_PATH + '/data-gl/asset/world.topo.bathy.200401.jpg',
            displacementScale: 0.04,
            shading: 'realistic',
            environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
            realisticMaterial: {
              roughness: 0.9
            },
            postEffect: {
              enable: true
            },
            light: {
              main: {
                intensity: 5,
                shadow: true
              },
              ambientCubemap: {
                texture: ROOT_PATH + '/data-gl/asset/pisa.hdr',
                diffuseIntensity: 0.2
              }
            }
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
