<template>
    <div class="container">
        <div class="helpDetailTop">
            <div class="line">
                <span class="des">{{helpDetail.KNBZMC}}</span><span class="money">¥{{helpDetail.JE}}</span>
            </div>

            <div class="line">
                <span class="people">{{helpDetail.XDRS}}个名额，{{helpDetail.YSQRS}}人已申请</span>
                <span class="moneyDes">{{helpDetail.JELXMC}}</span>
            </div>
        </div>
        <div class="moreInfo" @click="moreInfo">
            <span >更多信息</span>
            <div class="director">
                <i class="iconfont pass">&#xe79e;</i>
            </div>
        </div>


        <reviewStep  :items="logInfo"></reviewStep>
    </div>
</template>
<style scoped>
    body{
        background-color:#ff0000;
    }
    .helpDetailTop {
        width: 100%;
        height: 80PX;
        background-color: white;
        margin-bottom: 20PX;
    }

    .helpDetailTop .line {
        width: 100%;
        height: 50%;
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
        line-height: 100%;
    }

    .helpDetailTop .line .people {
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
        color: #d3d3d3;
    }
    .moreInfo {

        width: 100%;
        height: 44PX;
        background: white;
        margin-bottom: 20PX;
    }
    .moreInfo span{
        display: inline-block;
        width: 200PX;
        height: 100%;
        line-height: 100%;
        font-size: 16PX;
        padding: 14PX 10PX;
    }
    .director{
        display: inline-block;
        width: 44PX;
        height: 100PX;
        float: right;
     /*font-size: 20PX;*/
    }
    .pass{

        font-size: 30PX;
        color: #d3d3d3;
        line-height: 44PX;
    }



</style>
<script>
    import { Cell } from 'mint-ui'
    import reviewStep from './reviewStep.vue'
    export default{
        created(){
            this.obj = this.$route.query.item;
//            console.log('-------'+this.obj);

            //请求申请详情数据
            let requestUrl = yuMing+getPoorTypeDetails+'?IDENTITY_ID='+identityID + '&KNBZDM=' + this.$route.query.KNBZDM + '&KNBZDJDM=' + this.$route.query.KNBZDJDM;
            console.log('请求申请详情数据'+requestUrl);
            this.$http.get(requestUrl).then(res => {
                return res.json();
            }).
            then(res => {
                this.helpDetail = res.datas;
            });

            //请求审核流程
            let logInfoUrl = yuMing + getStuApplyLogInfo + '?IDENTITY_ID=' + identityID + '&SQBM='+this.$route.query.SQBM + '&KNBZDM=' + this.$route.query.KNBZDM;
            console.log('logInfoUrl'+logInfoUrl);
            this.$http.get(logInfoUrl).then(res => {
                return res.json();
            }).
            then(res => {
                this.logInfo = res.datas;
            });


        },
        methods:{
            moreInfo:function () {
                this.$router.push({path:'/reviewMoreInfo',query:{KNBZDM:this.$route.query.KNBZDM,KNBZDJDM:this.$route.query.KNBZDJDM,SQBM:this.$route.query.SQBM}});
            }
        },
        data(){
            return{
                msg:'hello vue',
                obj:{},
                helpDetail:{},
                logInfo:[]

            }
        },
        components:{
            [Cell.name]:Cell,
            reviewStep
        },
//        props: ['item']

    }
</script>
