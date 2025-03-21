<template>
  <main>
    <basic-bar /> <!-- 基础柱状图 -->
    <stacked-bar /> <!-- 堆叠柱状图 -->
    <bar-race /> <!-- 动态排序柱状图 -->
    <waterfall /> <!-- 阶梯瀑布图 -->
  </main>
</template>

<script>
// 导入子组件
import BasicBar from '../../components/bar/BasicBarComponent.vue';
import StackedBar from '../../components/bar/StackedBarComponent.vue';
import BarRace from '../../components/bar/BarRaceComponent.vue';
import Waterfall from '../../components/bar/WaterfallComponent.vue';

export default {
  name: 'BarChartExamples',
  components: {
    BasicBar,
    StackedBar,
    BarRace,
    Waterfall
  }
};
</script>

<style>
/* 如果需要全局样式，可以在这里添加 */
</style>
