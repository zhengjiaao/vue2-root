<template>
  <main>
    <basic-line /> <!-- 基础折线图 -->
    <stacked-line /> <!-- 堆叠折线图 -->
    <area-line /> <!-- 区域面积图折线图 -->
    <smooth-line /> <!-- 平滑曲线图 -->
    <step-line /> <!-- 阶梯线图 -->
  </main>
</template>

<script>
// 导入子组件
import BasicLine from '../../components/line/BasicLineComponent.vue';
import StackedLine from '../../components/line/StackedLineComponent.vue';
import AreaLine from '../../components/line/AreaLineComponent.vue';
import SmoothLine from '../../components/line/SmoothLineComponent.vue';
import StepLine from '../../components/line/StepLineComponent.vue';

export default {
  name: 'LineChartExamples',
  components: {
    BasicLine,
    StackedLine,
    AreaLine,
    SmoothLine,
    StepLine
  }
};
</script>

<style>
/* 如果需要全局样式，可以在这里添加 */
</style>
