<template>
    <div>
        <!--<p v-for="item in items">{{item}}</p>-->
        <span class="sectionHeader">国家困难补助</span>

        <div class="awardItem" v-for="n in 3" @click="goToReviewDetail">
            <div class="awardItemLeft">
                <div class="line">
                    <span class="level">一等奖</span><span class="money">¥8000</span><span class="peopleCount">200人已申请</span>
                </div>
                <div class="line">
                    <span class="date">开放时间</span><span class="dateToDate">05.12--08.25</span><span class="markImage"><img src="../../../static/images/noApply.png" class="mark"></span>
                </div>
            </div>
            <div class="awardItemRight">
                <img src="../../../static/images/director.png" class="director">
            </div>
        </div>
    </div>
</template>
<style scoped>
    body{
        background-color:#ff0000;
    }
    .sectionHeader {

        display: block;
        width: 100%;
        height: 40PX;
        line-height: 40PX;
        font-size: 14PX;
        padding-left: 10PX;
        background-color: #f9f9f9;
    }

    .awardItem {
        margin-bottom: 1PX;
        width: 100%;
        height: 80PX;
        background-color: white;
    }
    /*.statue:last-child{*/
    /*margin-bottom:0;*/
    /*background-color: #0a6bb7;*/
    /*}*/
    .awardItemLeft{
        display: inline-block;
        width: 90%;
        height:100%;
        float: left;
    }
    .mark {
        width: 50PX;
        height: 15PX;
    }
    .director{
        display: inline-block;
        width: 10%;
        height: 100%;
        float: right;
    }

    .line{
        width: 100%;
        height: 50%;
    }
    .level{
        display: inline-block;
        line-height: 100%;
        font-size: 18PX;
        color: #000000;
        padding-left: 10PX;
        padding-top: 10PX;
    }
    .money{
        display: inline-block;
        line-height: 100%;
        font-size: 14PX;
        color: #d4461f;
        padding-left: 10PX;
        padding-top: 10PX;
    }
    .peopleCount{
        display: inline-block;
        line-height: 100%;
        font-size: 16PX;
        color: #979797;
        padding-top: 10PX;
        padding-right: 10PX;
        float: right;
    }
    .date {
        display: inline-block;
        line-height: 100%;
        font-size: 14PX;
        color: #979797;
        padding-top: 10PX;
        padding-left: 10PX;

    }
    .dateToDate{
        display: inline-block;
        line-height: 100%;
        font-size: 14PX;
        color: #979797;
        padding-top: 10PX;
        padding-left: 10PX;
    }
    .markImage{
        display: inline-block;
        float: right;
        line-height: 50%;
    }
    .awardItemRight{
        width: 10%;
        height: 100%;
        float: right;

    }
    .awardItemRight>img
    {
        width: 100%;
        height: 100%;
        /*float: right;*/
    }
</style>
<script>
    export default{
        methods:{
            goToReviewDetail:function () {
                this.$router.push('/reviewDetail')
            }
        },
        data(){
            return{
                msg:'hello vue'
            }
        },
//        props:{
            props: ['items'],
//        },
        components:{
        }
    }
</script>
