<template>
  <dev>
    <h4>pdfjs-dist PDF显示</h4>

    <iframe :src="pdfUrl" height="600" width="100%"></iframe>
  </dev>
</template>

<script>

  export default {
    name: "",
    data() {
      return {
        pdfUrl: 'http://127.0.0.1:9000/mybucket4/ppt.pdf'
      }
    },
      mounted () {
      this.pathUrl = './static/pdfjs-2.7.570/web/viewer.html?file=' + encodeURIComponent(this.pdfUrl)   // 找到之前引进来pdf文件中的的viewe.html并+pdf地址
    },
  }
</script>

<style scoped>

</style>
