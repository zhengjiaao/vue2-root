<template>
  <div class="hello" style="display: flex;">

        <div style="width: 100px;background-color: aqua;"></div>
        <div style="flex: 1;background-color: blueviolet;"></div>
        <div style="width: 100px;background-color:black;"></div>
  
  </div>
</template>

<script>
//引入组件
import G6 from '@antv/g6';

export default {
  name: 'HelloWorld',

  //数据
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'

    }
  },
  //页面加载时运行的方法
  mounted() {

  },
  //方法
  methods: {

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
