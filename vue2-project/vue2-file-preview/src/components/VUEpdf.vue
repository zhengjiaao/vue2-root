<template>
  <div>

    <h4>vue-pdf PDF单页显示</h4>
    <pdf
      ref="pdf"
      :src="url"
    >
    </pdf>
  </div>
</template>

<script>
  import pdf from 'vue-pdf'
  export default {
    components: {
      pdf
    },
    data() {
      return {
        url: "http://127.0.0.1:9000/mybucket4/ppt.pdf",
      }
    }
  }
</script>

<style scoped>

</style>
