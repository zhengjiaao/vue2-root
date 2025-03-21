<template>
  <main>
    <BasicScatter /> <!-- 基础散点图 -->
  </main>
</template>

<script>
import BasicScatter from '../../components/scatter/BasicScatterComponent.vue';

export default {
  name: 'ScatterChartPage',
  components: {
    BasicScatter
  }
};
</script>

<style scoped>
/* 如果需要样式，可以在这里添加 */
</style>
