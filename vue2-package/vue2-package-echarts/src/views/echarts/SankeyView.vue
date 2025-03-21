<template>
  <main>
    <BasicSankey /> <!-- 基础桑基图 -->
  </main>
</template>

<script>
import BasicSankey from '../../components/sankey/BasicSankeyComponent.vue';

export default {
  name: 'SankeyChartPage',
  components: {
    BasicSankey
  }
};
</script>

<style scoped>
/* 如果需要样式，可以在这里添加 */
</style>
