<template>
    <div class="positionDetailContainer">
        <!--//职位详情的头部-->
        <div class="container">
            <div class="line">
                <span class="left-span">图书管理员</span><span class="right-span">560</span>
            </div>
            <div class="line">
                <span class="left-span">来自：图书馆</span><span class="right-span">上限 600／月</span>
            </div>
            <div class="line">
                <span class="mark">四平校区</span>
            </div>
        </div>

        <!--//地点 人数 学期 学年-->
        <div class="container">
            <div class="line">
                <span>工作地点：图书馆</span>
            </div>
            <div class="line">
                <span>人数：5个</span>
            </div>
            <div class="line">
                <span>学年：第一学年</span>
            </div>
            <div class="line">
                <span>学期：第二学期</span>
            </div>

        </div>

        <!--职位描述-->
        <div class="container">
            <div class="section-header">职位描述</div>
            <div class="section-content">职位描述职位描述职位描述职位描述职位描
                述职位描述职位描述职位描述职位描述职位描述职位描
                职位描述职位描述职位描述职位描述职位描述职位描述职位描述
                职位描述职位描述职位描述职位描述述职位描述</div>
        </div>

        <!--申请需求-->
        <div class="container">
            <div class="section-header">申请需求</div>
            <div class="section-content">职位描述职位描述职位描述职位描述职位描
                述职位描述职位描述职位描述职位描述职位描述职位描
                职位描述职位描述职位描述职位描述职位描述职位描述职位描述
                职位描述职位描述职位描述职位描述述职位描述</div>
        </div>

        <!--联系方式-->
        <div class="container">
            <div class="section-header">申请需求</div>
            <!--<div class="section-content">-->
                <div class="line">  <span>联系人：图书馆</span></div>
                <div class="line">  <span>工作地点：图书馆</span></div>
                <div class="line">  <span>工作地点：图书馆</span></div>
                <div class="line">  <span>工作地点：图书馆</span></div>
            <!--</div>-->
        </div>

    </div>

</template>
<style scoped>
    body{
        background-color:#ff0000;
    }
    /*//职位详情的头部*/
    .container{
        width: 100%;
        background-color: #ffffff;
        margin-bottom: 20PX;
    }
    .line{
        display: flex;
        justify-content: flex-start;
        padding: 10PX;
        font-size: 14PX;
    }
    .line > .left-span{
        display: inline-block;
        width: 70%;

    }
    .line> .right-span{
        display: inline-block;
        width: 30%;
        text-align: right;
    }
    .line > .mark{
        border: solid #93D36E 1PX;
        color: #93D36E;
    }

    /*简介秒速*/
    .section-header{
        width: 100%;
        font-size: 16PX;
        padding: 10PX;

    }
    .section-content{
        width: 100%;
        font-size: 14PX;
        padding: 10PX;
        text-indent: 20PX;
    }


</style>
<script>
    export default{
        created(){
          var random = Math.ceil(Math.random()*10);
          var a = (random%2 != 0);
          this.showApplyButton = a;




    },
        data(){
            return{
                msg:'hello vue',
                showApplyButton:true
            }
        },
        components:{
        }
    }
</script>
