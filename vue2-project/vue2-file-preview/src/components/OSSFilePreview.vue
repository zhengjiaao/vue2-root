<template>
  <dev>
    <h4>演示 OSSfile 预览</h4>

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="对象URL">
        <el-input v-model="URL" placeholder="URL" clearable/>
      </el-form-item>
      <el-button type="primary" @click="submit1()"> 预览(仅浏览器文件类型)</el-button>
    </el-form>
  </dev>
</template>


<p>{{data}}</p>

<script>

  export default {
    name: "OSSFilePreview",
    data() {
      return {
        URL: "http://127.0.0.1:9000/mybucket4/ppt.pdf?Content-Disposition=attachment%3B%20filename%3D%22ppt.pdf%22&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=username%2F20210527%2F%2Fs3%2Faws4_request&X-Amz-Date=20210527T061643Z&X-Amz-Expires=432000&X-Amz-SignedHeaders=host&X-Amz-Signature=bc15621ec9ef4eab30f9a53746c5ea075e252e96e2e9449622f491820bffe00b",
        data: "",
        formInline: {}
      };
    },
    methods: {
      submit1: function () {
        window.open(this.URL);
      },
    }
  }
</script>

<style scoped>

</style>
