<template>
  <main>
    <basic-pie /> <!-- 基础饼图 -->
    <doughnut /> <!-- 圆环图 -->
    <rose /> <!-- 南丁格尔图（玫瑰图） -->
  </main>
</template>

<script>
// 导入子组件
import BasicPie from '../../components/pie/BasicPieComponent.vue';
import Doughnut from '../../components/pie/DoughnutComponent.vue';
import Rose from '../../components/pie/RoseComponent.vue';

export default {
  name: 'PieChartExamples',
  components: {
    BasicPie,
    Doughnut,
    Rose
  }
};
</script>

<style>
/* 如果需要全局样式，可以在这里添加 */
</style>
