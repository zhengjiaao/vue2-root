<template>
  <dev>
    <h4>演示 FilePreview 预览</h4>

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="对象URL">
        <el-input v-model="URL" placeholder="URL" clearable/>
      </el-form-item>
      <el-button type="primary" @click="submit1()"> 预览内部转换</el-button>
    </el-form>
  </dev>
</template>

<script>

  export default {
    name: "FilePreview",
    data() {
      return {
        URL: "http://127.0.0.1:9000/mybucket4/ppt.pdf",
        data: "",
        formInline: {}
      };
    },
    methods: {
      submit1: function () {
        window.open('http://127.0.0.1:8012/onlinePreview?url=' + encodeURIComponent(Base64.encode(this.URL)));
      },
    }
  }
</script>

<style scoped>

</style>
