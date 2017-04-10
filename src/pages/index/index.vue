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

                <div class="awardItem" v-for="(item,index) in BZList" @click="goToHelpDetail(index)">
                    <div class="awardItemLeft">
                        <div class="line">
                            <span class="level">{{item.DJMC}}</span><span class="money">¥{{item.JE}}</span><span class="peopleCount">{{item.YSQRS}}人已申请</span>
                        </div>
                        <div class="line">
                            <span class="date">开放时间</span><span class="dateToDate">{{item.SQKSRQ}}--{{item.SQJSRQ}}</span><span class="markImage" v-show="item.SFKSQ != 0"><img src="../../../static/images/noApply.png" class="mark"></span>
                        </div>
                    </div>
                        <div class="director">
                            <i class="iconfont">&#xe79e;</i>
                        </div>
                </div>


                <!--<span class="sectionHeader">校长困难补助</span>-->
                <!--&lt;!&ndash;<mt-cell v-for="n in 4" :title="'内容 ' + n"/>&ndash;&gt;-->
                <!--<div class="awardItem" v-for="n in 3">-->
                    <!--<div class="awardItemLeft">-->
                        <!--<div class="line">-->
                            <!--<span class="level">一等奖</span><span class="money">¥8000</span><span class="peopleCount">200人已申请</span>-->
                        <!--</div>-->
                        <!--<div class="line">-->
                            <!--<span class="date">开放时间</span><span class="dateToDate">05.12&#45;&#45;08.25</span>-->
                            <!--<span class="markImage"><img src="../../../static/images/noApply.png" class="mark"></span>-->
                            <!--&lt;!&ndash;<span class="noApply">不可申请</span>&ndash;&gt;-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="director">-->
                        <!--<i class="iconfont">&#xe79e;</i>-->
                    <!--</div>-->
                <!--</div>-->
            </mt-tab-container-item>

            <mt-tab-container-item id="2">
                <myApply :items="msg" v-show="applyList.length"></myApply>
                <nothingTips></nothingTips>

            </mt-tab-container-item>

        </mt-tab-container>
    </div>
</template>



<script type="text/javascript">
    import {Navbar, TabItem, TabContainer, TabContainerItem, Cell, Indicator} from 'mint-ui';
    import myApply from '../components/myApply.vue'
    import nothingTips from '../components/nothingTips.vue'
    export default {
        created() {
            var param = {IDENTITY_ID:'01294'};


            this.$http.get('http://amptest.wisedu.com/axsfw/sys/knbzapp/MobilePoorStuApply/getStuAllPoorType.do',param).then(res=>{
                return res.json();
                    }).then(res=>{
//                        console.log(res);
                this.BZList = res.datas;
                console.log(this.BZList);
            });
        },

        methods:{
            goToHelpDetail:function (index) {
                var obj = this.BZList[index];
                var knbzdm = obj.KNBZDM;
                var knbzdjdm = obj.KNBZDJDM;
            this.$router.push({path:'/helpDetail',query:{knbzdm:knbzdm,knbzdjdm:knbzdjdm}});
            }
        },
        data(){
            return {
                selected: "1",
                msg: [1,2,3],
                BZList:[],
                applyList:[]

            }
        },
        components: {
            [Navbar.name]: Navbar,
            [TabItem.name]: TabItem,
            [TabContainer.name]: TabContainer,
            [TabContainerItem.name]: TabContainerItem,
            [Cell.name]: Cell,
            [Indicator.name]: Indicator,
            myApply,
            nothingTips
        },
        watch: {}
    }
</script>

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
