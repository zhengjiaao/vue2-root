<template>
  <dev>
    <a class="media" href="../../static/pdf-file/ppt.pdf"></a>
  </dev>
</template>

<script>
  // import media from '../../static/js/jquery/jquery.media'
  // import jquery from '../../static/js/jquery/jquery-3.6.0.min'

  export default {
    name: "",
    methods: {
      function() {
        var wid = $(window).width() * .5;
        $('.media').media({
          width: wid,
          height: 800
        })
      }
    }
  }
</script>

<style scoped>

</style>
