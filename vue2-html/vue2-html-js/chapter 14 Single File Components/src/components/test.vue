<template>
    <h2 class="red">test ...{{msg}}</h2>
</template>

<script>

export default {
    name: 'test',
    props: {
        msg:{
            type: String,
            default: "test msg"
        }
    },
    methods:{

    },
    data(){
        return{

        }
    },
}
</script>

<style>
.red{color: rgb(252, 7, 7);}
</style>