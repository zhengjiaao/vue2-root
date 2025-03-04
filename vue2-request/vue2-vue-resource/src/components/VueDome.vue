<template>
  <!--这里定义html模板-->
  <div class="hello" id="app">
    <h1>{{ chart }}</h1>
  </div>
</template>

<script>
//这里定义js
//在这里导入文件
import Vue from "vue";  //已经在main.js引入，这里实际上不需要再引入vue
export default {
  //在这里定义组件的数据和方法
  data() {
    return {
      chart: 'dome',
    };
  },
  methods: {},
};
</script>

<!--这里定义样式
	可以使用scoped属性，使得这里的样式只有这个文件中的组件可以使用
-->
<style scope>
</style>