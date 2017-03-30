<template>
    <div class="container">
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


        <!--申请信息-->
        <div class="applyInfo">
        <div class="header"><span>申请信息</span></div>
            <table>
                <tr>
                    <td class="desTd">提交时间</td>
                    <td class="detailTd">2015／11／11</td>
                </tr>
                <tr>
                    <td class="desTd">手机号</td>
                    <td class="detailTd">12232231243234</td>
                </tr>
                <tr>
                    <td class="desTd">申请理由</td>
                    <td class="detailTd">我特别想申请到钱我特别想申请到钱我特别想申请到钱
                        我特别想申请到钱我特别想申请到钱我特别想申请到钱
                    </td>
                </tr>

            </table>
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


        <!--评定条件-->
        <div class="condition">
            <div class="header"><span>评定条件</span></div>
                <table>
                    <tr>
                        <td class="desTd">必须满足</td>
                        <td class="detailTd">成绩>90分</td>
                    </tr>
                    <tr>
                        <td class="desTd">满足其一</td>
                        <td class="detailTd">及格数>3科</td>
                    </tr>

                </table>
        </div>
    </div>
</template>
<style>
    body{
        background-color:#f9f9f9;
    }
    .container {
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


    /*--申请信息--*/
    .applyInfo{
        margin-bottom: 20PX;
    }
    table{
        width: 100%;
    }

    .desTd{
        width: 25%;
        background: white;
        color: #d3d3d3;
        height: 30PX;
        text-align: left;
        padding: 10PX;
        /*padding: ;*/
    }
    .detailTd{
        width: 75%;
        background: white;
        color: #030303;
        /*height: 30PX;*/
        text-align: left;
        padding: 10PX;
        /*padding: ;*/
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


    /*条件*/
    .condition{
        width: 100%;
    }

</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        }
    }
</script>
