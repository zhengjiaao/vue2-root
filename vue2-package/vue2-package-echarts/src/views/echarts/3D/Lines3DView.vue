<template>
  <main>
    <Lines3DGlobe />
    <Lines3DFlights />
    <!-- <Lines3DFlightsGL /> -->
  </main>
</template>

<script>
import Lines3DGlobe from '../../../components/3D/Lines3DGlobeComponent.vue';
import Lines3DFlights from '../../../components/3D/Lines3DFlightsComponent.vue';
// import Lines3DFlightsGL from '../../../components/3D/Lines3DFlightsGLComponent.vue';

export default {
  name: 'Lines3DPage',
  components: {
    Lines3DGlobe,
    Lines3DFlights
    // Lines3DFlightsGL
  }
};
</script>

<style scoped>
/* 如果需要样式，可以在这里添加 */
</style>
