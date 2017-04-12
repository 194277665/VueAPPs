<template>
    <div class="container">
        <!--//头部-->
        <div class="helpDetailTop">
            <div class="line">
                <span class="des">{{helpDetail.KNBZMC}}</span><span class="money">¥{{helpDetail.JE}}</span>
            </div>

            <div class="line">
                <span class="people">{{helpDetail.XDRS}}个名额，{{helpDetail.YSQRS}}人已申请</span>
                <span class="moneyDes">{{helpDetail.JELXMC}}</span>
            </div>


            <div class="line">
                <span class="dateLimit">三天后截止</span>
            </div>


        </div>


        <div class="topSecond">
            <div><span class="lefSpan">等级</span><span class="rightSpan">{{helpDetail.DJMC}}</span></div>
            <div><span class="lefSpan">评定学期</span><span class="rightSpan">第{{helpDetail.PDXQ}}学期</span></div>
            <div><span class="lefSpan">资金来源</span><span class="rightSpan">{{helpDetail.ZJLY}}</span></div>
            <!--<div><span class="lefSpan">允许重复申请</span><span class="rightSpan"></span></div>-->
            <div><span class="lefSpan">设立单位</span><span class="rightSpan">{{helpDetail.SLDW}}</span></div>
        </div>


        <!--申请信息-->
        <div class="applyInfo">
        <div class="header"><span>申请信息</span></div>
            <table>
                <tr>
                    <td class="desTd">提交时间</td>
                    <td class="detailTd">{{applyInfo.SQSJ}}</td>
                </tr>
                <!--<tr>-->
                    <!--<td class="desTd">手机号</td>-->
                    <!--<td class="detailTd">12232231243234</td>-->
                <!--</tr>-->
                <tr>
                    <td class="desTd">申请理由</td>
                    <td class="detailTd">{{applyInfo.SQLY}}
                    </td>
                </tr>

            </table>
        </div>


        <!--//简介-->
        <div class="introduce">
            <!--<mt-cell title="补助简介"></mt-cell>-->
            <div class="header"><span>补助简介</span></div>
            <span class="introduceContent">{{helpDetail.JJ}}
                 <!--<span class="more" @click="more()">更多</span>-->
            </span>
        </div>
        <button class="more" @click="more()">{{moreOrLess}}</button>




        <!--&lt;!&ndash;//条件&ndash;&gt;-->
        <!--<div class="conditon">-->

            <!--<div class="header"><span>评定条件</span></div>-->
            <!--<div class="conditionContent" v-for="item in helpDetail.ConditionData">-->
                <!--<span>{{item.DISPLAYVALUE}}</span><span>{{item.INFO}}</span>-->

            <!--</div>-->
        <!--</div>-->


        <!--评定条件-->
        <div class="condition">
            <div class="header"><span>评定条件</span></div>
                <table>
                    <tr v-for="item in helpDetail.ConditionData">
                        <td class="desTd">{{item.DISPLAYVALUE}}</td>
                        <td class="detailTd">{{item.INFO}}</td>
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
        display: flex;
        justify-content: space-between;
        /*padding: 10Px;*/
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
        display: inline-block;
        float: right;
        font-size: 10PX;
        padding-top: 10PX;
        padding-right: 10PX;
    }
    .topSecond
    {
        width: 100%;
        height: auto;
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
        margin-bottom: 1PX;
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
    .more {
        display: block;
        /*position: absolute;*/
        /*float: right;*/
        height: 40PX;
        width: 100%;
        /*right: 0;*/
        /*bottom: 0;*/
        color: #21c0ae;
        margin-bottom: 20PX;
        background: white;
        border: none;
        outline: none;
    }


    /*条件*/
    .condition{
        width: 100%;
    }

</style>
<script>
    import $ from 'jquery'
    export default{
        created(){
            //请求申请详情数据
            let requestUrl = yuMing+getPoorTypeDetails+'?IDENTITY_ID='+identityID + '&KNBZDM=' + this.$route.query.KNBZDM + '&KNBZDJDM=' + this.$route.query.KNBZDJDM;
//            console.log('detail' + requestUrl);
            this.$http.get(requestUrl).then(res => {
                return res.json();
            }).
            then(res => {
                this.helpDetail = res.datas;
            });


            //请求申请信息
            let requestUrl2 = yuMing+getStuAllApplyInfo+'?IDENTITY_ID='+identityID+'&SQBM='+this.$route.query.SQBM;
//            console.log('222'+requestUrl2);
            this.$http.get(requestUrl2).then(res=>{

                return res.json();
            }).then(res=>{
                this.applyInfo = res.datas[0];
//                console.log(this.applyInfo);
            });

        },
        data(){
            return{
                helpDetail:{},
                applyInfo:{},
                moreOrLess:'更多'
            }
        },
        methods:{
            more: function () {
                if (this.moreOrLess == '收起') {
                    $(".introduce").css('height', '100PX');
                    this.moreOrLess = '更多';
                } else {
                    $(".introduce").css('height', 'auto');
                    this.moreOrLess = '收起';
                }
            }
        },
        components:{
        }
    }
</script>
