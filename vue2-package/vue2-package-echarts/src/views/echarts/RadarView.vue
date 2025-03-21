<template>
  <main>
    <BasicRadar /> <!-- 基础雷达图 -->
    <CustomizedRadar /> <!-- 自定义雷达图 -->
  </main>
</template>

<script>
import BasicRadar from '../../components/radar/BasicRadarComponent.vue';
import CustomizedRadar from '../../components/radar/CustomizedRadarComponent.vue';

export default {
  name: 'RadarChartPage',
  components: {
    BasicRadar,
    CustomizedRadar
  }
};
</script>

<style scoped>
/* 如果需要样式，可以在这里添加 */
</style>
