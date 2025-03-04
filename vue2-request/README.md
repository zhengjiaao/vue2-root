# vue 请求应用

[toc]

# 方式一：vue-resource

> GitHub搜索： [vue-resource](https://github.com/pagekit/vue-resource)（vue官方提供的一个插件）

### 创建项目

```bash
# 创建项目
vue init webpack vue2-vue-resource

? Project name vue2-vue-resource
? Project description A Vue.js project
? Author Zhengjiaao <zhengja@dist.com.cn>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? No
? Pick an ESLint preset Standard
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) npm

#进入项目
cd vue2-vue-resource
cnpm install
npm run dev
#访问
http://localhost:8080
```



### 安装（终端）

```bash
cd 项目目录
npm install vue-resource --save
cnpm install vue-resource --save   区别就是国内的淘宝镜像
```

### 引用（mian.js）

```js
//引入VueResource官方插件，并使用
import VueResource from 'vue-resource'
Vue.use(VueResource);
```

### 使用（页面请求）

##### 样例

```vue
<template>
  <div class="hello" id="app">
    <h1>{{ msg }}</h1>

    <h3>get请求-无参</h3>
    <input v-model="url1" placeholder="url">
    <button type="button" @click="getAjax1()">点击尝试</button>
    <h5>data: {{ addData1 }}</h5>
  
    <h3>get请求-有参-单个参数</h3>
    <input v-model="url2" placeholder="url">
    <input v-model="loginName" placeholder="loginName">
    <button type="button" @click="getAjax2()">点击尝试</button>
    <h3>data: {{ addData2 }}</h3>
  </div>
</template>

<script>
export default {
  name: 'VueResourceGet',
  data () {
    return {
      url1: 'http://localhost:8080/springboot-test-remoteservice/rest/v1/get/userdto',
      url2: 'http://localhost:8080/springboot-test-remoteservice/rest/v1/get/login/ex',
      loginName: '李四',
      addData1: {},
      addData2: {},
      msg: '演示GET请求'
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
      this.$http.get(this.url1).then(successCallback,errorCallback);
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
      this.$http.get(this.url2,
      {
        params:{
          loginName : this.loginName  //get带参数
        }
      }).then(successCallback,errorCallback);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

```



##### get-无参

```js
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
      this.$http.get(this.url1).then(successCallback,errorCallback);
    }
```

##### get-有参

```js
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
      this.$http.get(this.url2,
      {
        params:{
          loginName : this.loginName  //get带参数
        }
      }).then(successCallback,errorCallback);
    }
```

##### post-无参

```js
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
      this.$http.post(this.url1).then(successCallback,errorCallback);
    }
```

##### post-有参

```js
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
      this.$http.post(this.url2,
      {
        name : this.myname,  
        age : this.myage 
      },
      {
        emulateJSON:true  //post 开启json传输参数,需要将json对象转化为form类型的数据,所以需要加上第3参数{emulateJSON: true}
      }
      ).then(successCallback,errorCallback);
    }
```

##### post-无参-上传文件

```js
    //上传单文件请求-1
    upload1: function () {
      var that = this;
      //表单数据
      var formData = new FormData();
      formData.append("file", this.myfile1);

      var successCallback = (response) => {
        console.log("服务器请求成功了");
        let data = response.data;
        console.log(data);
        this.data1 = data;
      };
      var errorCallback = (response) => {
        console.log("服务器请求出错了");
      };
      this.$http
        .post(
          this.url1,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then(successCallback, errorCallback);
    }
```

##### post-有参-上传文件

```js
    //上传单文件请求-2
    upload2: function () {
      var that = this;
      //表单数据
      var formData = new FormData();
      formData.append("file", this.myfile2);
      formData.append("fileName", this.newFileName);
      var successCallback = (response) => {
        console.log("服务器请求成功了");
        let data = response.data;
        console.log(data);
        this.data2 = data;
      };
      var errorCallback = (response) => {
        console.log("服务器请求出错了");
      };
      //请求
      this.$http
        .post(this.url2, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(successCallback, errorCallback);
    }
```

##### post-有参-分片上传文件

```js
    //上传多文件请求-3
    upload3: function () {
      var that = this;
      /* var formData = new FormData();
      formData.append("files", this.myfile3); */
      var successCallback = (response) => {
        console.log("服务器请求成功了");
        let data = response.data;
        console.log(data);
        this.data3 = data;
      };
      var errorCallback = (response) => {
        console.log("服务器请求出错了");
      };
      this.$http
        .post(this.url3, this.fileFormData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(successCallback, errorCallback);
    }
```

##### put-无参

```js
getAjax1: function () {
      //无参请求
      var successCallback = (response) => {
        console.log("服务器请求成功了");
        let data = response.data;
        console.log(data);
        this.addData1 = data;
      };
      var errorCallback = (response) => {
        console.log("服务器请求出错了");
      };
      this.$http.put(this.url1).then(successCallback, errorCallback);
    }
```

##### put-有参

```js
getAjax2: function () {
      //有参请求
      var successCallback = (response) => {
        console.log("服务器请求成功了");
        let data = response.data;
        console.log(data);
        this.addData2 = data;
      };
      var errorCallback = (response) => {
        console.log("服务器请求出错了");
      };
      this.$http
        .put(
          this.url2,
          {
            name : this.myname,
            age : this.myage,
          },
          {
            emulateJSON: false, //post 开启json传输参数,同时解决跨域问题
          }
        )
        .then(successCallback, errorCallback);
    }
```

##### delete-无参

```js
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
    }
```

##### delete-有参

```js
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
    }
```

##### 异步请求

```js

```

##### 多线程请求

```js

```

##### 跨域请求

```js

```





# 方式二：axios

> GitHub搜索：[第三方axios](https://github.com/axios/axios)

### 创建项目

```bash
vue init webpack vue2-axios

? Project name vue2-axios
? Project description A Vue.js project
? Author Zhengjiaao <zhengja@dist.com.cn>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? No
? Pick an ESLint preset Standard
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) npm

cd vue2-axios
cnpm install
npm run dev
#访问
http://localhost:8080
```



### 安装（终端）

```bash
npm install axios --save
cnpm install axios --save
cnpm install --save axios vue2-axios
```

### 引用+使用

> （区别：在哪文件用就在哪文件引入）

```js
// const axios = require('axios');
import axios from "axios";

var api = "http://test.ruiyanghj.com:9098/api/1.0/useraccount/........";
      axios
        .get(api)
        .then((res) => {
          console.log(res);
        })
        .catch((er) => {
          console.log(er);
        });
```



### 使用（页面请求）

##### get-无参

```js
import axios from "axios";

var api = "http://test.ruiyanghj.com:9098/api/1.0/useraccount/........";
      axios
        .get(api)
        .then((res) => {
          console.log(res);
        })
        .catch((er) => {
          console.log(er);
        });
```

##### get-有参

```js

```

##### post-无参

```js

```

##### post-有参

```js

```

##### post-无参-上传文件

```js

```

##### post-有参-上传文件

```js

```

##### post-有参-分片上传文件

```

```

##### put-无参

```js

```

##### put-有参

```

```

##### delete-无参

```js

```

##### delete-有参

```js

```

##### 异步请求

```js

```

##### 多线程请求

```js

```

##### 跨域请求

```js

```



# 方式三：fetch.jsonp

> https://github.com/github/fetch
>
> GitHub搜索：[第三方fetch-jsonp](https://github.com/search?q=fetch-jsonp)

### 创建项目

```bash
vue init webpack vue2-fetch

? Project name vue2-fetch
? Project description A Vue.js project
? Author Zhengjiaao <zhengja@dist.com.cn>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? No
? Pick an ESLint preset Standard
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) npm

cd vue2-fetch
cnpm install
npm run dev
#访问
http://localhost:8080
```



### 安装

```bash
npm install fetch-jsonp --save
cnpm install fetch-jsonp --save
```

### 引用：

> （同axios：在哪文件用就在哪文件引入）

```js
import FetchJsonp from "fetch.jsonp"

fetchJsonp('/users.jsonp')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
```

### 使用（页面请求）

##### get-无参

```js
import FetchJsonp from "fetch.jsonp"

fetchJsonp('/users.jsonp')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
```

##### get-有参

```js

```

##### post-无参

```js

```

##### post-有参

```js

```

##### post-无参-上传文件

```js

```

##### post-有参-上传文件

```js

```

##### post-有参-分片上传文件

```

```

##### put-无参

```js

```

##### put-有参

```

```

##### delete-无参

```js

```

##### delete-有参

```js

```

##### 异步请求

```js

```

##### 多线程请求

```js

```

##### 跨域请求

```js

```

