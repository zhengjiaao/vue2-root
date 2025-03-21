<template>
  <main class="container">
    <div class="left">
      <full-import />
    </div>
    <div class="right">
      <on-demand-import />
    </div>
  </main>
</template>

<script>
// 导入组件
import FullImport from '../../components/base/FullImportEChartsComponent.vue';
import OnDemandImport from '../../components/base/OnDemandImportEChartsComponent.vue';

export default {
  name: 'MainPage',
  components: {
    FullImport,
    OnDemandImport
  }
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
}

.left,
.right {
  flex: 1;
  margin: 0 10px;
  box-sizing: border-box;
}

.left {
  margin-right: 20px; /* 可选：增加左右间距 */
}

.right {
  margin-left: 20px; /* 可选：增加左右间距 */
}
</style>
