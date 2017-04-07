<template>


    <div class="helpDetailContainer">
        <!--//头部-->
        <div class="helpDetailTop">
            <div class="line">
                <span class="des">{{helpDetail.KNBZMC}}</span><span class="money">¥{{helpDetail.JE}}</span>
            </div>

            <div class="line">
                <span class="people">{{helpDetail.XDRS}}个名额，{{helpDetail.YSQRS}}人已申请</span><span class="moneyDes">{{helpDetail.JELXMC}}</span>
            </div>


            <div class="line">
                <span class="dateLimit">三天后截止</span>
            </div>


        </div>


        <div class="topSecond">
            <div><span class="lefSpan">等级</span><span class="rightSpan">一等</span></div>
            <div><span class="lefSpan">评定学期</span><span class="rightSpan">第{{helpDetail.PDXQ}}学期</span></div>
            <div><span class="lefSpan">资金来源</span><span class="rightSpan">{{helpDetail.ZJLY}}</span></div>
            <div><span class="lefSpan">允许重复申请</span><span class="rightSpan">是</span></div>
            <div><span class="lefSpan">设立单位</span><span class="rightSpan">{{helpDetail.SLDW}}</span></div>
        </div>


        <!--//简介-->
        <div class="introduce">
            <!--<mt-cell title="补助简介"></mt-cell>-->
            <!--<div>-->
            <div class="header"><span>补助简介</span></div>
            <span class="introduceContent">{{helpDetail.JJ}}
           </span>


            <!--</div>-->

        </div>
        <button class="more" @click="more()">{{moreOrLess}}</button>


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

    .topSecond {
        width: 100%;
        height: 120PX;
        margin-top: 1px;
        background-color: white;
        margin-bottom: 20PX;
    }

    .topSecond .lefSpan, .topSecond .rightSpan {
        display: inline-block;
        height: 24PX;
        width: 120PX;
        line-height: 20%;
        padding-left: 10PX;
        padding-top: 10PX;
    }

    /*简介样式*/
    .introduce {
        /*position: relative;*/
        overflow: hidden;
        width: 100%;
        height: 100PX;
        margin-bottom: 1PX;
    }

    .header {
        width: 100%;
        height: 30PX;
        background: #fff;
        margin-bottom: 1PX;
    }

    .header span {
        display: inline-block;
        line-height: 100%;
        padding-left: 10PX;
        padding-top: 10PX;
        font-size: 16PX;
    }

    .introduce > span {
        display: inline-block;
        float: right;
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

    .introduceContent {
        width: 100%;
        height: 100%;
        padding: 10PX 10PX;
        background-color: white;
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
        created() {
//            console.log('query == '+this.$route.query);
//            console.log('param == '+this.$route.param);

//
//            var KNBZDM = this.$route.query.obj;
//
//            var KNBZDJDM  = this.$route.query.obj;

            var param = {IDENTITY_ID:'2010056',KNBZDM:this.$route.query.knbzdm,KNBZDJDM:this.$route.query.knbzdjdm};
//            var url = 'http://amptest.wisedu.com/axsfw/sys/knbzapp/MobilePoorStuApply/getPoorTypeDetails.do'
            var  url = 'http://amptest.wisedu.com/axsfw/sys/knbzapp/MobilePoorStuApply/getPoorTypeDetails.do?IDENTITY_ID=01294&'+'KNBZDM='+this.$route.query.knbzdm+'&KNBZDJDM='+this.$route.query.knbzdjdm;
       console.log(url);
            this.$http.get(url).then(res => {
                return res.json();
            }).then(res => {
                this.helpDetail = res.datas;
                console.log(this.helpDetail);

            });
        },
        methods: {
            more: function () {
                if (this.moreOrLess == '收起') {
                    $(".introduce").css('height', '100PX');
                    this.moreOrLess = '更多';
                } else {
                    $(".introduce").css('height', 'auto');
                    this.moreOrLess = '收起';
                }


            },
            iWantToApply: function () {
                this.$router.push({path:'/apply',query:{id:'2010056',knbzdm:this.$route.query.knbzdm,knbzdjdm:this.$route.query.knbzdjdm}});

            }
        },
        data(){
            return {
                helpDetail: {},
                moreOrLess: "更多",
                msg: 'hello vue'
            }
        },
        components: {
            [Cell.name]: Cell

        }
    }
</script>
