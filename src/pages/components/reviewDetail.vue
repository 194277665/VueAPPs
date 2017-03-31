<template>
    <div class="container">
        <div class="helpDetailTop">
            <div class="line">
                <span class="des">一种能源困难学生补助</span><span class="money">¥560</span>
            </div>

            <div class="line">
                <span class="people">12个名额，两百人已申请</span><span class="moneyDes">固定金额</span>
            </div>
        </div>
        <div class="moreInfo" @click="moreInfo">
            <span >更多信息</span>
            <div class="director">
                <i class="iconfont">&#xe79e;</i>
            </div>
        </div>


        <reviewStep></reviewStep>
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
    .director i{

        font-size: 30PX;
        color: #d3d3d3;
        line-height: 44PX;
    }
</style>
<script>
    import { Cell } from 'mint-ui'
    import reviewStep from './reviewStep.vue'
    export default{

        methods:{
            moreInfo:function () {
                this.$router.push('/reviewMoreInfo');
            }
        },
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            [Cell.name]:Cell,
            reviewStep
        }

    }
</script>
