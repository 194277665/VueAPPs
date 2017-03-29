<template>
    <div class="applyContainer">

        <input class="phone" type="text" placeholder="请输入你的手机号码"></input>
        <textarea class="reason" type="" placeholder="请输入你的申请理由"></textarea>
        <button @click="showApplyTips">提交</button>

    </div>
</template>
<style scoped>
 .applyContainer{
     width: 100%;
     height: 100%;
     background: #f9f9f9;
 }
    .phone{

        display: block;
        width: 100%;
        height: 45PX;
        margin-bottom: 1PX;
        padding: 5PX 10PX;
        font-size: 14PX;
    }
    .reason{
        display: block;
        width: 100%;
        height: 200PX;
        padding: 5PX 10PX;
        font-size: 14PX;
    }
    button{
        display: block;
        background:#21c0ae;
        width: 90%;
        height: 45PX;
        margin: 30PX auto;
        border: none;
        color: white;
        border-radius: 5PX;
    }


</style>
<script>
    export default{
        methods:{
            showApplyTips:function () {
                this.$router.push('/applyTips');
            }
        },
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        }
    }
</script>
