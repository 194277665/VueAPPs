<template>
    <div id="app" class="index">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1" class="ww">补助一览</mt-tab-item>
            <mt-tab-item id="2">我的申请</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected" class="tabContainer">
            <mt-tab-container-item id="1">
                <span class="sectionHeader">国家困难补助</span>

                <div class="awardItem" v-for="item in BZList" @click="goToHelpDetail">
                    <div class="awardItemLeft">
                        <div class="line">
                            <span class="level">{{item.KNBZDJDM}}</span><span class="money">¥8000</span><span class="peopleCount">200人已申请</span>
                        </div>
                        <div class="line">
                            <span class="date">开放时间</span><span class="dateToDate">{{item.SQKSRQ}}-{{item.SQJSRQ}}</span><span class="markImage" v-show="item.SFKSQ"><img src="../../../static/images/noApply.png" class="mark"></span>
                        </div>
                    </div>
                    <!--<div class="awardItemRight">-->
                        <div class="director">
                            <i class="iconfont">&#xe79e;</i>
                        </div>

                    <!--</div>-->
                </div>
                <span class="sectionHeader">校长困难补助</span>
                <!--<mt-cell v-for="n in 4" :title="'内容 ' + n"/>-->
                <div class="awardItem" v-for="n in 3">
                    <div class="awardItemLeft">
                        <div class="line">
                            <span class="level">一等奖</span><span class="money">¥8000</span><span class="peopleCount">200人已申请</span>
                        </div>
                        <div class="line">
                            <span class="date">开放时间</span><span class="dateToDate">05.12--08.25</span>
                            <span class="markImage"><img src="../../../static/images/noApply.png" class="mark"></span>
                            <!--<span class="noApply">不可申请</span>-->
                        </div>
                    </div>
                    <div class="director">
                        <i class="iconfont">&#xe79e;</i>
                    </div>
                </div>
            </mt-tab-container-item>

            <mt-tab-container-item id="2">
                <myApply :items="msg"></myApply>
            </mt-tab-container-item>

        </mt-tab-container>
    </div>
</template>

<style scoped>
    .index {
        background: #f9f9f9;
    }
    .tabContainer{
        margin-top: 1PX;
    }
    /*.mint-tab-item-label*/
    /*{*/
    /*color: #55c8b9;*/
    /*}*/
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
    .director i{
        font-size: 30PX;
        color: #d3d3d3;
        line-height: 80PX;
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
        margin-right: 10PX;
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
<script type="text/javascript">
    import {Navbar, TabItem, TabContainer, TabContainerItem, Cell, Indicator} from 'mint-ui';
    import myApply from '../components/myApply.vue'
    export default {
        created() {
            var param = {IDENTITY_ID:'01294'};
            Indicator.open('正在加载...');
            this.$http.get('测试环境域名/sys/knbzapp/mobilePoorStuApply/getStuAllPoorType.do',param).then(res=>{
                var data =[ {
                    KNBZDM:'',
                    KNBZMC:'',
                    KNBZDJDM:'二等奖',
                    DJMC:'',
                    PDXN:'',
                    PDXQ:'',
                    JE:'',
                    SQKSRQ:'2017/11/11',
                    SQJSRQ:'2017/12/11',
                    SFKSQ:true,
                    YSQRS:''
                },{
                    KNBZDM:'',
                    KNBZMC:'',
                    KNBZDJDM:'一等奖',
                    DJMC:'',
                    PDXN:'',
                    PDXQ:'',
                    JE:'',
                    SQKSRQ:'2017/11/11',
                    SQJSRQ:'2017/12/11',
                    SFKSQ:false,
                    YSQRS:''
                },{
                    KNBZDM:'',
                    KNBZMC:'',
                    KNBZDJDM:'三等奖',
                    DJMC:'',
                    PDXN:'',
                    PDXQ:'',
                    JE:'',
                    SQKSRQ:'2017/11/11',
                    SQJSRQ:'2017/12/11',
                    SFKSQ:false,
                    YSQRS:''
                }];

                this.BZList = data;

            },e=>{
                Indicator.close();
                var data =[ {
                    KNBZDM:'',
                    KNBZMC:'',
                    KNBZDJDM:'二等奖',
                    DJMC:'',
                    PDXN:'',
                    PDXQ:'',
                    JE:'',
                    SQKSRQ:'2017/11/11',
                    SQJSRQ:'2017/12/11',
                    SFKSQ:true,
                    YSQRS:''
                },{
                    KNBZDM:'',
                    KNBZMC:'',
                    KNBZDJDM:'一等奖',
                    DJMC:'',
                    PDXN:'',
                    PDXQ:'',
                    JE:'',
                    SQKSRQ:'2017/11/11',
                    SQJSRQ:'2017/12/11',
                    SFKSQ:false,
                    YSQRS:''
                },{
                    KNBZDM:'',
                    KNBZMC:'',
                    KNBZDJDM:'三等奖',
                    DJMC:'',
                    PDXN:'',
                    PDXQ:'',
                    JE:'',
                    SQKSRQ:'2017/11/11',
                    SQJSRQ:'2017/12/11',
                    SFKSQ:true,
                    YSQRS:''
                }];
                this.BZList = data;

            });
        },
        methods:{
            goToHelpDetail:function () {
            this.$router.push('/helpDetail')
            }
        },
        data(){
            return {
                selected: "1",
                msg: [1,2,3],
                BZList:[]

            }
        },
        components: {
            [Navbar.name]: Navbar,
            [TabItem.name]: TabItem,
            [TabContainer.name]: TabContainer,
            [TabContainerItem.name]: TabContainerItem,
            [Cell.name]: Cell,
            [Indicator.name]: Indicator,
            myApply
        },
        watch: {}
    }
</script>