<template>
  <div>

    <h4>vue-pdf PDF多页显示</h4>

    <el-button type="primary" @click="getNumPages()"> 显示所有页 </el-button>

    <pdf
      ref="pdf"
      v-for="i in numPages"
      :key="i"
      :src="url"
      :page="i"
    ></pdf>

  </div>
</template>

<script>
  import pdf from 'vue-pdf'
  export default {
    name: 'Pdf',
    components: {
      pdf
    },
    data() {
      return {
        url: "http://127.0.0.1:9000/mybucket4/word.pdf",
        numPages: null, // pdf 总页数
      }
    },
    mounted() {
      //this.getNumPages()
    },
    methods: {
      //计算pdf页码总数
      getNumPages() {
        let loadingTask = pdf.createLoadingTask(this.url)
        loadingTask.promise.then(pdf => {
          this.numPages = pdf.numPages
        }).catch(err => {
          console.error('pdf 加载失败', err);
        })
      },
    }
  }
</script>

<style scoped>

</style>
