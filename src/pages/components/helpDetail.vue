<template>


    <div class="helpDetailContainer">
        <!--//头部-->
        <div class="helpDetailTop">
            <div class="line">
                <span class="des">一种能源困难学生补助</span><span class="money">¥560</span>
            </div>

            <div class="line">
                <span class="people">12个名额，两百人已申请</span><span class="moneyDes">固定金额</span>
            </div>


            <div class="line">
                <span class="dateLimit">三天后截止</span>
            </div>


        </div>


        <div class="topSecond">
            <div><span class="lefSpan">等级</span><span class="rightSpan">一等</span></div>
            <div><span class="lefSpan">评定学期</span><span class="rightSpan">部分学期</span></div>
            <div><span class="lefSpan">资金来源</span><span class="rightSpan">企业赞助</span></div>
            <div><span class="lefSpan">允许重复申请</span><span class="rightSpan">是</span></div>
            <div><span class="lefSpan">设立单位</span><span class="rightSpan">一种能源有限公司</span></div>
        </div>



        <!--//简介-->
        <div class="introduce">
            <!--<mt-cell title="补助简介"></mt-cell>-->
            <div class="header"><span>补助简介</span></div>
            <span class="introduceContent">补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介
                补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介
                补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介
                补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介
                补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介补助简介
                补助简介补助简介补助简介
                 <span class="more" @click="more()">更多</span>
            </span>
        </div>


        <!--//条件-->
        <div class="conditon">
            <div class="header"><span>评定条件</span></div>
            <span class="conditionContent">你符合评定条件，快去申请吧</span>
        </div>

        <!--//我要申请按钮-->
        <button class="wantApply" @click="iWantToApply">我要申请</button>
    </div>
</template>
<style scoped>

    .helpDetailContainer {
        background: #f9f9f9;
    }

    /*头部样式*/
    .helpDetailTop {
        width: 100%;
        height: 80PX;
        background-color: white;
    }

    .helpDetailTop .line {
        width: 100%;
        height: 33%;
    }

    .helpDetailTop .line .des {
        display: inline-block;
        line-height: 100%;
        font-size: 16PX;
        color: #000000;
        padding-left: 10PX;
        padding-top: 10PX;
    }

    .helpDetailTop .line .money {
        float: right;
        font-size: 14PX;
        color: #fc2f00;
        padding-top: 10PX;
        padding-right: 10PX;
    }

    .helpDetailTop .line .people, .dateLimit {
        display: inline-block;
        line-height: 100%;
        font-size: 10PX;
        /*color: #696969;*/
        padding-left: 10PX;
        padding-top: 10PX;
    }

    .moneyDes {
        float: right;
        font-size: 10PX;
        padding-top: 10PX;
        padding-right: 10PX;
    }
    .topSecond
    {
        width: 100%;
        height: 120PX;
        margin-top: 1px;
        background-color: white;
        margin-bottom: 20PX;
    }
    .topSecond .lefSpan,.topSecond .rightSpan
    {
        display: inline-block;
        height: 24PX;
        width: 120PX;
        line-height: 20%;
        padding-left: 10PX;
        padding-top: 10PX;
    }




        /*简介样式*/
    .introduce {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100PX;
        margin-bottom: 20PX;
    }
    .header{
        width: 100%;
        height: 30PX;
        background: #fff;
        margin-bottom: 1PX;
    }
    .header span{
        display: inline-block;
        line-height: 100%;
        padding-left: 10PX;
        padding-top: 10PX;
        font-size: 16PX;
    }
    .introduceContent{
        background-color: white;
    }

    .introduce > span {
        display: inline-block;
        float: right;
    }

    .introduce .more {
        display: block;
        position: absolute;
        float: right;
        height: 20PX;
        width: 30PX;
        right: 0;
        bottom: 0;
        color: #21c0ae;
    }

    .introduceContent {
        width: 100%;
        height: 100%;
       padding: 10PX 10PX;
    }

    /*条件样式*/
    .conditionContent {
        display: block;
        font-size: 12PX;
        padding-left: 10PX;
        Padding-top: 10PX;
        background-color: white;
        margin-bottom: 20PX;
        height: 50PX;
    }
    /*我要申请样式*/
    .wantApply {
        display: block;
        width: 100%;
        height: 50PX;
        color: white;
        background-color: #21c0ae;
        border: none;
        font-size: 18PX;
    }

</style>
<script>
    import {Cell} from 'mint-ui'
    import $ from 'jquery'
    export default{
        methods: {
            more: function () {
                $(".introduce").css('height', 'auto');
            },
            iWantToApply:function () {
                this.$router.push('/apply');
            }
        },
        data(){
            return {
                moreOrLess: "更多",
                msg: 'hello vue'
            }
        },
        components: {
            [Cell.name]: Cell

        }
    }
</script>
