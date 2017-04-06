<template>
    <div class="container">
        <p>ddsafdsa</p>

    </div>
    <div class="bottom">
    </div>
</template>
<style scoped>
    body {
        background-color: #ff0000;
    }
    .container
    {
        width: 100%;
        height: calc(100vh - 70PX);
        background: red;

    }
    .bottom{
        /*calc(100vh - 6);*/
        width: 100%;
        height:60PX;
        background: green;


    }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {}
    }
</script>