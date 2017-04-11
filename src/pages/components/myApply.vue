<template>
    <div>
        <!--<p v-for="item in items">{{item}}</p>-->
        <!--<span class="sectionHeader">国家困难补助</span>-->

        <div class="awardItem" @click="goToReviewDetail">
            <div class="awardItemLeft">
                <div class="line">
                    <span class="level">{{items.SQDJ_DISPLAY}}</span><span class="money">¥{{items.JE}}</span><span class="peopleCount">{{items.SHZT_DISPLAY}}</span>
                </div>
                <div class="line">
                    <span class="date">开放时间</span><span class="dateToDate">{{items.SQSJ}}</span>
                    <!--<span class="markImage"><img src="../../../static/images/noApply.png" class="mark"></span>-->
                </div>
            </div>
            <div class="director">
                <i class="iconfont">&#xe79e;</i>
                <!--<img src="../../../static/images/director.png" class="director">-->
            </div>
        </div>
    </div>
</template>
<style scoped>
    body{
        background-color:#ff0000;
    }
    /*.sectionHeader {*/

        /*display: block;*/
        /*width: 100%;*/
        /*height: 40PX;*/
        /*line-height: 40PX;*/
        /*font-size: 14PX;*/
        /*padding-left: 10PX;*/
        /*background-color: #f9f9f9;*/
    /*}*/

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
    /*.mark {*/
        /*width: 50PX;*/
        /*height: 15PX;*/
    /*}*/
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
    /*.markImage{*/
        /*display: inline-block;*/
        /*float: right;*/
        /*line-height: 50%;*/
    /*}*/
    /*.awardItemRight{*/
        /*width: 10%;*/
        /*height: 100%;*/
        /*float: right;*/

    /*}*/
    .director{
        display: inline-block;
        width: 10%;
        height: 100%;
        float: right;
        font-size: 40PX;
        color: #d3d3d3;
        line-height: 80PX;
    }
    .director>.iconfont{
        font-size: 30PX;
    }
</style>
<script>
    export default{
        created(){

        },
        methods:{
            goToReviewDetail:function () {
                this.$router.push({path:'/reviewDetail',query:{KNBZDM: this.items.KNBZDM,KNBZDJDM:this.items.PDDJ,SQBM:this.items.SQBM}});

            }
        },
        data(){
            return{
                msg:'hello vue',
                data:[]
            }
        },

        props: ['items'],

        components:{
        }
    }
</script>
