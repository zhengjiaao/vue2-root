<template>
  <main>
    <GlobeLayers />
    <GlobeGL />
  </main>
</template>

<script>
import GlobeLayers from '../../../components/3D/GlobeLayersComponent.vue';
import GlobeGL from '../../../components/3D/GlobeGLComponent.vue';

export default {
  name: 'GlobePage',
  components: {
    GlobeLayers,
    GlobeGL
  }
};
</script>

<style scoped>
/* 如果需要样式，可以在这里添加 */
</style>
