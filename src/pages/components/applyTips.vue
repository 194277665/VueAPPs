<template>
    <div>
        <img src="">
        <!--<div class="tips">-->
            <span>提交成功，我们会尽快审核的</span>
        <!--</div>-->
        <button @click="goToIndex">返回补助一览</button>
    </div>
</template>
<style scoped>
    body {
        background-color: #f9f9f9;
    }

    img {
        display: block;
        width: 30%;
        height: 30%;
        margin: 100Px auto;
    }

    span {
        display: block;
        width: 80%;
        height: 40PX;
        font-size: 18PX;
        margin: 5PX auto;
        text-align: center;
    }

    button {
        display: block;
        width: 80%;
        height: 45PX;
        border: solid #21c0ae 1px;
        color: #21c0ae;
        background: #f9f9f9;
        border-radius: 5PX;
        margin: 5PX auto;
    }

</style>
<script>

    export default{
        methods:{
            goToIndex:function () {
                this.$router.push('/index');
            }
        },
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {}
    }
</script>
