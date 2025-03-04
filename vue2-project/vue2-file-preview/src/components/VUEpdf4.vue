<template>
  <div>

    <h4>vue-pdf PDF滚动翻页 -未成功(不支持)</h4>

    <pdf v-for="item in numPages" :key="item" :src="path" :page="item" />

  </div>
</template>

<script>
  import pdf from 'vue-pdf'

  export default {
    name: 'Pdf',
    components: {
      pdf,
    },
    data() {
      return {
        numPages: "",
        path: 'http://127.0.0.1:9000/mybucket4/ppt.pdf', // pdf文件地址
      };
      methods: {
        // pdf加载时
        loadPdfHandler()
        {
          this.src.then(pdf => {
            this.numPages = pdf.numPages;
          });
        }
        created()
        {
          this.src = pdf.createLoadingTask(this.src);
          this.loadPdfHandler();
        }
      }
    }
  }
</script>

<style scoped>

</style>
