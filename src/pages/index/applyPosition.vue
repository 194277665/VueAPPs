<template>
    <div class="container">

        <!--<div class="search-out" @click="goToSearch">-->
        <!--<div class="search-in">-->
        <!--<span>-->
        <!--<i class="iconfont checkStatusNo">&#xe895;</i>-->
        <!--<span>输入关键字进行搜索</span>-->
        <!--</span>-->
        <!--</div>-->

        <!--</div>-->
        <mt-search v-model="value" cancel-text="取消" placeholder="搜索" :result.sync="canApplyPositions" show>
            <div class="filter">
                <button class="filter-left" @click="clickFilterLeft">选择校区</button>
                <button class="filter-right" @click="clickFilterRight">岗位类型</button>
            </div>
            <div class="timeLimit">
                <span>工作时间：{{setting.GZKSRQ|paeseDate}}-{{setting.GZJSRQ|paeseDate}}</span>
                <span>申请截止:{{setting.SQJSRQ|paeseDate}}</span>
            </div>
            <div class="main">
                <!--<div class="applyPositionCell" v-for="(n,index) in list" @click="clickApplyPositionCell(index)">-->
                <!--<div class="left">-->
                <!--<span>-->
                <!--<i class="iconfont check-box-selected">&#xe68c;</i>-->
                <!--</span>-->
                <!--</div>-->
                <!--<div class="middle">-->
                <!--<div class="line">-->
                <!--<span>图书管路员</span>-->
                <!--</div>-->
                <!--<div class="line">-->
                <!--<span>来自图书馆</span>-->
                <!--</div>-->
                <!--<div class="line">-->
                <!--<span class="campus">四平校区</span>-->
                <!--</div>-->

                <!--</div>-->
                <!--<div class="right">-->
                <!--<span class="money">￥560元/每月</span>-->
                <!--</div>-->
                <!--</div>-->
                <applyPositionCell class="applyPositionCell" :item="item" :length="GWDMArray.length" :flag="toggleFlag(item)" :GWDMArray="GWDMArray"
                                   v-for="(item,index) in canApplyPositions"
                                   @clickCell="clickCell"></applyPositionCell>
                <nothingTips v-show="canApplyPositions.length < 1"></nothingTips>


            </div>

            <div class="bottom">
                <button class="bottomLeft" @click="clickSelected">
                    <img src="../../../static/images/login.png" alt="">
                    <span>已选中{{GWDMArray.length}}个岗位</span>
                    <span>还可以选{{setting.YCGWS - GWDMArray.length}}个职位</span>
                </button>
                <button class="bottomRight" @click="commit">提交</button>
            </div>
            <div class="drag-super" v-show="showSelected">
                <div class="drag">
                    <div class="infoC">
                        <span>已选 {{GWDMArray.length}}个岗位</span>
                        <span>调整志愿等级</span>
                    </div>
                    <draggable :list="GWDMArray" class="dragArea">
                        <div class="drag-cell" v-for="(item,index) in GWDMArray">
                         <span>志愿{{index + 1}}:{{item.GWMC}}</span>
                            <i class="iconfont">&#xe6d5;</i>
                        </div>
                    </draggable>
                </div>
            </div>

            <div class="filter-item-container" v-show="showFilterLeft">
                <div class="filter-item" v-for="(option,index) in campusList" @click="choseCampus(index)">
                    <span>{{option.XQMC}}</span>
                </div>
            </div>

            <div class="filter-item-container" v-show="showFilterRight">
                <div class="filter-item" v-for="(option,index) in positionList" @click="chosePosition(index)">
                    {{option.GWLXMC}}
                </div>
            </div>



        </mt-search>

    </div>


</template>

<style scoped>
    body {
        background-color: #f9f9f9;

    }

    .container {
        position: relative;
        width: 100%;
        height: 100vh;
    }

    .search-out {
        width: 100%;
        height: 40PX;
        background: #d9d9d9;
        margin: 0;
        padding: 5PX;
    }

    .search-in {
        width: 94%;
        height: 30PX;
        background: #f9f9f9;
        color: #939393;
        border-radius: 3PX;
        margin: auto;
        font-size: 15PX;
        padding-left: 10PX;
        /*line-height: 100%;*/
    }

    .search-in > span {
        line-height: 30PX;
    }

    .filter {
        width: 100%;
        height: 40PX;
        color: white;
        background: blueviolet;
        display: flex;
        justify-content: flex-start;

    }

    .filter-left {
        width: 50%;
        height: 100%;
        background: white;
        outline: none;
        border: none;
        border: solid #f9f9f9 1PX;
        color: #56C2AF;
    }

    .filter-right {
        width: 50%;
        height: 100%;
        background: white;
        outline: none;
        border: none;
        border: solid #f9f9f9 1PX;
        color: #56C2AF;

    }

    .filter-item-container {
        position: absolute;
        width: 100%;
        height: calc(100vh - 60PX);
        top: 80PX;
        background: rgba(100, 100, 100, 0.5);
        z-index: 100;
    }

    .filter-item {
        background: #fff;
        width: 100%;
        height: 40PX;
        /*margin-bottom: 1PX;*/
        border-top: solid 1PX #f9f9f9;
        padding: 10PX;
    }

    .timeLimit {
        height: 30PX;
        background: #fefcec;
        padding: 5PX;
        display: flex;
        justify-content: space-between;
        font-size: 12Px;
    }

    .timeLimit > span {
        display: block;
        line-height: 20PX;
        color: orange;
        white-space: nowrap;
    }

    .main {
        width: 100%;
        height: calc(100vh - 170PX);
        overflow: auto;
    }

    .item {
        margin-bottom: 1PX;
        background: white;
        width: 100%;
        height: 70PX;
    }

    .applyPositionCell {
        width: 100%;
        height: auto;
        background: #fff;
        display: flex;
        justify-content: center;
        margin-bottom: 1PX;
    }

    .left {
        width: 10%;
        height: auto;

    }

    .left > span {
        width: 100%;
        display: block;
        line-height: 60PX;
        text-align: center;
    }

    .check-box-selected {
        font-size: 30PX;
        color: #56C2AF;
        line-height: 100%;
    }

    .middle {
        width: 60%;
        height: auto;
        padding: 10PX;
    }

    .middle > .line {
        width: 100%;
        height: auto;
        padding: 3PX;
        font-size: 14PX;
        padding: 2PX;
    }

    .campus {
        display: inline-block;
        border: solid #93D36E 1PX;
        color: #93D36E;
        font-size: 14PX;

    }

    .right {
        width: 30%;
        height: auto;

    }

    .money {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 100%;

    }

    applyPositionCell {
        margin-bottom: 1PX;
    }

    .bottom {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        height: 60PX;
        bottom: 0PX;
        background: rgba(46, 37, 85, 0.86);
        color: #fff;
        position: absolute;
        bottom: 0;
    }

    .bottomLeft {
        width: 70%;
        height: 100%;
        background: #2f343b;
        border: none;
        outline: none;
        & >img{
           position: absolute;
           width: 40Px;
           top: 10Px;
           left: 15Px;
           padding: 5Px;
           border-radius: 20Px;
           background-color: #56c2af;
        }
    }

    .bottomLeft span {
        display: block;
        width: 100%;
        color: white;

    }

    .bottomRight {
        width: 30%;
        height: 100%;
        background: #56c2af;
        color: white;
        border: none;
        outline: none;
        font-size: 18PX;
    }

    .drag-super {
        position: absolute;
        background: rgba(100, 100, 100, 0.5);
        width: 100%;
        height: calc(100vh - 44PX);
        bottom: 60PX;
        /*z-index: 9999;*/

    }

    .drag {
        background-color: #939393;
        position: absolute;
        bottom: 0PX;

        width: 100%;
        height: auto;
    }

    /*.dragArea {*/
    /*min-height: 10px;*/
    /*}.dragArea {*/
    /*min-height: 10px;*/
    /*}*/

    .drag-cell {
        width: 100%;
        height: 44PX;
        background: white;
        /*margin-bottom: 1PX;*/
        padding: 10PX;
        border-top:solid 1PX #f9f9f9;
    }

    .drag-cell > span {
        display: inline-block;
        width: 90%;
        font-size: 14PX;
        /*line-height: 44PX;*/
        /*padding-left: 10PX;*/
    }
    .iconfont{
        color: red;
    }
    .infoC{
        color: #fff;
        padding: 5Px;
        font-size: 14Px;
    }
</style>
<script>
    import draggable from 'vuedraggable'
    import applyPositionCell from '../Components/applyPositionCell.vue'
    import API from '../../API'
    import $ from 'jquery'
    import {Toast, Search, Cell, Indicator} from 'mint-ui';
    import nothingTips from '../Components/nothingTips.vue'
    import moment from 'moment'

    export default{
        created(){

            //请求校区选项

            this.queryCampus();

            this.queryWorkStudySetting();

            //请求岗位选项
            this.queryWorkType();

            //  请求可申请的岗位
            this.queryCanApplyJob();
        },
        methods: {
            queryWorkStudySetting:function () {
                let requestUrl = API.service + API.queryWorkStudySetting;
                Indicator.open();
                this.$http.get(requestUrl).then(res => {
                    Indicator.close();
                    return res.json();
                }).then(res => {
                    this.setting = res.data;
                    API.LXFS = res.data.LXFS;
                });
            },
            queryCampus: function () {
                let requestUrl = API.service + API.queryCampus + '?IDENTITY_ID=' + API.id + '&IDENTITY_TYPE=' + API.type;
                console.log('quecampus' + requestUrl);
                Indicator.open();
                this.$http.get(requestUrl).then(res => {
                    Indicator.close();
                    return res.json();
                }).then(res => {
                    this.campusList = res.data.CAMPUSARRAY;
                });
            },
            queryWorkType: function () {

                let requestUrl2 = API.service + API.queryWorkType + '?IDENTITY_ID=' + API.id + '&IDENTITY_TYPE=' + API.type;
                console.log('position' + requestUrl2);
                Indicator.open();
                this.$http.get(requestUrl2).then(res => {
                    Indicator.close();
                    return res.json();
                }).then(res => {
                    this.positionList = res.data;
                });
            },
            queryCanApplyJob: function () {
                let requestUrl3 = API.service + API.queryCanApplyJob + '?GWLXDM=' + this.GWLXDM + '&XQDM=' + this.XQDM +
                    '&KEYWORD=' + this.KEYWORD + '&PAGESIZE=' + this.PAGESIZE + '&PAGENUM=' + 1 + '&IDENTITY_ID=' + API.id + '&IDENTITY_TYPE=' + API.type;
                console.log('//  请求可申请的岗位' + requestUrl3);
                Indicator.open();
                this.$http.get(requestUrl3).then(res => {
                    Indicator.close();
                    return res.json();

                }).then(res => {
                    this.canApplyPositions = res.data;
                });
            },

            clickCell: function (item) {
                let index = -1;
                let tmpArray = this.GWDMArray.filter((el,idx)=>{
                    if(el.WID===item.WID){
                        index = idx;
                        return true
                    }else{
                        return false
                    }
                });
                    if (tmpArray.length > 0) {
                        this.GWDMArray.splice(index, 1);
                    } else {
                        if(this.GWDMArray.length>=this.setting.YCGWS)
                        {
                            Toast('不能选择更多岗位');

                        }else {
                            this.GWDMArray.push(item);
                        }
                    }
            },

            clickFilterLeft: function () {
                this.showFilterRight = false;
                this.showFilterLeft = !this.showFilterLeft;

            },
            clickFilterRight: function () {
                this.showFilterLeft = false;
                this.showFilterRight = !this.showFilterRight;

            },
            clickSelected: function () {
                this.showSelected = !this.showSelected;
            },
            commit: function () {

                let GWArray = new Array();
                $.each(this.GWDMArray,function (index,value){
                    let obj = {GWDM:value.GWDM};
                    GWArray.push(obj);
                });
                if (GWArray.length < 1){
                    Toast('您还没有选中任何岗位');
                    return;
                }
                this.$router.push({path:'/commitApply',query:{GWDMArray:GWArray}});
            },
            choseCampus: function (index) {
                let campus = this.campusList[index]
                $('.filter-left').text(campus.XQMC);
                this.XQDM = campus.XQDM;
                this.showFilterLeft = false;
                this.queryCanApplyJob();
            },

            chosePosition: function (index) {
                let postiton = this.positionList[index]
                $('.filter-right').text(postiton.GWLXMC);
                this.GWLXDM = postiton.GWLXDM;
                this.showFilterRight = false;
                this.queryCanApplyJob();
            },
            toggleFlag(item){
                let f = this.GWDMArray.filter(el=>el.WID===item.WID).length>0;
                console.log(f);
                return f;
            }
        }
        ,


        data()
        {
            return {
                value: '',
                showSelected: false,
                showFilterRight: false,
                showFilterLeft: false,
                campusList: [],
                positionList: [],
                canApplyPositions: [],
                GWLXDM: '',
                XQMC: '',
                KEYWORD: '',
                PAGESIZE: 100000,
                slelectedPositions: [],
                GWDMArray: [],
                setting:{},



            }
        },
        components: {
            draggable,
            applyPositionCell,
            [Toast.name]: Toast,
            [Search.name]: Search,
            [Cell.name]:Cell,
            nothingTips
        },
        watch:{
            value:function (newValue,oldValue) {

                this.KEYWORD = newValue;
                this.queryCanApplyJob();

            }
        },
        filters: {
        	paeseDate(val){
        		return moment(val).format('YY.MM.DD')
            }
        }
    }
</script>