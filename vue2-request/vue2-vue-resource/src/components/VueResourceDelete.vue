<template>
  <div class="hello" id="app">
    <h1>{{ msg }}</h1>

    <h3>delete请求-无参</h3>
    <input v-model="url1" placeholder="url">
    <button type="button" @click="getAjax1()">点击尝试</button>
    <h5>data: {{ addData1 }}</h5>
  
    <h3>delete请求-有参-单个参数</h3>
    <input v-model="url2" placeholder="url">
    <input v-model="myname" placeholder="myname">
    <button type="button" @click="getAjax2()">点击尝试</button>
    <h3>data: {{ addData2 }}</h3>
  </div>
</template>

<script>
export default {
  name: 'VueResourceGet',
  data () {
    return {
      url1: 'http://localhost:8080/springboot-test-remoteservice/rest/v1/delete/userdto',
      url2: 'http://localhost:8080/springboot-test-remoteservice/rest/v1/delete/userdto2',
      myname: '李四',
      addData1: {},
      addData2: {},
      msg: '演示DELETE请求'
    }
  },
  mounted() {  //渲染页面时开始执行
    //this.getAjax();
    //this.getAjaxGinseng();
  },
  methods: {
    getAjax1:function () {  //无参请求
     var successCallback =  (response) => {
        console.log('服务器请求成功了')
        let data = response.data;
        console.log(data)
        this.addData1=data;
      }
      var errorCallback =  (response) => {
          console.log('服务器请求出错了')
      }
      this.$http.delete(this.url1).then(successCallback,errorCallback);
    }, 
    getAjax2:function () {   //有参请求
     var successCallback =  (response) => {
        console.log('服务器请求成功了')
        let data = response.data;
        console.log(data)
        this.addData2=data;
      }
      var errorCallback =  (response) => {
          console.log('服务器请求出错了')
      }
      this.$http.delete(this.url2,
      {
        params:{
          name : this.myname  //带参数
        }
      }).then(successCallback,errorCallback);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
