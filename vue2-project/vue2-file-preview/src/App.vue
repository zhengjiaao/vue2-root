<template>
  <div id="app">

    <H2>文件预览</H2>

    <router-link to="/ossfilepreview">ossfilepreview</router-link>&emsp;&emsp;
    <router-link to="/filepreview">filepreview</router-link>&emsp;&emsp;
    <router-link to="/officesdk">officesdk</router-link>&emsp;&emsp;
    <router-link to="/pdfjsdist">pdfjsdist</router-link>&emsp;&emsp;
    <router-link to="/vuepdf">vuepdf</router-link>&emsp;&emsp;
    <router-link to="/vuepdf2">vuepdf2</router-link>&emsp;
    <router-link to="/vuepdf3">vuepdf3</router-link>&emsp;
    <router-link to="/vuepdf4">vuepdf4</router-link>&emsp;

    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
