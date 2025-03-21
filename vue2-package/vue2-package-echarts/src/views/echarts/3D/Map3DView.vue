<template>
  <main>
    <Map3DBuildings />
    <Map3DWoodCity />
  </main>
</template>

<script>
import Map3DBuildings from '../../../components/3D/Map3DBuildingsComponent.vue';
import Map3DWoodCity from '../../../components/3D/Map3DWoodCityComponent.vue';

export default {
  name: 'Map3DPage',
  components: {
    Map3DBuildings,
    Map3DWoodCity
  }
};
</script>

<style scoped>
/* 如果需要样式，可以在这里添加 */
</style>
