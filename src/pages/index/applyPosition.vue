<template>
    <div class="container">

        <div class="search"></div>


        <!--<div class="filter" @click="clickFilter">-->
            <!--<div class="filterLeft" v-show="showFilter">-->
                <!--<div class="filterItem" v-for="(n,index) in 6"> 筛选条件{{index}}</div>-->
            <!--</div>-->
        <!--</div>-->

        <!--<select>-->
            <!--<option value ="volvo">Volvo</option>-->
            <!--<option value ="saab">Saab</option>-->
            <!--<option value="opel">Opel</option>-->
            <!--<option value="audi">Audi</option>-->
        <!--</select>-->



        <div class="timeLimit">
            工作时间：6.12-明年8.12 申请截止8.12
        </div>

        <div class="main">
            <applyPositionCell v-for="n in 10" class="cell"></applyPositionCell>
        </div>
        <!--<div class="main">-->
            <!--<div class="item" v-for="n in 10">-->

            <!--</div>-->
        <!--</div>-->
        <div class="bottom">
            <button class="bottomLeft" @click="clickSelected">
                <span>已选中{{list.length}}个岗位</span>
                <span>还可以选{{5 - list.length}}个职位</span>
            </button>
            <button class="bottomRight">选好了</button>
        </div>


        <div class="drag-super" v-show="showSelected">
            <div class="drag">
                <draggable :list="list" class="dragArea">
                    <div class="drag-cell" v-for="(element,index) in list">
                         <span>志愿{{index + 1}}:{{element.name}}
                         </span>
                    </div>
                </draggable>
            </div>
        </div>

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

    .search {
        width: 100%;
        height: 30PX;
        background: #403f44;
        color: white;
    }

    .filter {
        width: 100%;
        height: 30PX;
        color: white;
        background: blueviolet;
        position: relative;

    }

    .filterLeft {
        width: 100%;
        height: 200PX;
        background: rgba(30, 39, 30, 0.5);
        /*display: none;*/
        /*margin-top: 30PX;*/
        z-index: 100;
        position: absolute;
        top: 30PX;
        height: calc(100vh - 60PX);

    }

    .filterItem {
        width: 100%;
        height: 30PX;
        background: #fff;
        margin-bottom: 1PX;
    }

    .timeLimit {
        width: 100%;
        height: 20PX;
        background: #f9f9f9;
        color: #403f44;
    }

    .main {
        width: 100%;
        height: calc(100vh - 44PX - 60PX - 20PX);
        overflow: auto;
    }

    .item {
        margin-bottom: 1PX;
        background: white;
        width: 100%;
        height: 70PX;
    }

    .cell{
        /*border-bottom: ;*/
        /*border-bottom: solid #403f44 1PX;*/
        margin-bottom: 1PX;
    }

    .bottom {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        height: 44PX;
        bottom: 0PX;
        background: rgba(46, 37, 85, 0.86);
        color: #fff;
        position: absolute;
        bottom: 0;
    }
    .bottomLeft{
        width: 70%;
        height: 100%;
        background: #c9c9c9;
        border: none;
        outline: none;
    }
    .bottomRight{
        width: 30%;
        height: 100%;
        background: #939393;
        color: white;
        border: none;
        outline: none;
    }

    /*.bottom{*/
    /*!*calc(100vh - 6);*!*/
    /*width: 100%;*/
    /*height:60PX;*/
    /*background: green;*/
    /*}*/

    .normal {
        background-color: grey;
    }

    .drag-super {
        position: absolute;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: calc(100vh - 44PX);
        bottom: 44PX;
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
        margin-bottom: 1PX;
        padding: 10PX;
    }
    .drag-cell>span{
        display: inline-block;
        width: 80%;
        font-size: 14PX;
        /*line-height: 44PX;*/
        /*padding-left: 10PX;*/
    }

</style>
<script>
    import draggable from 'vuedraggable'
    import applyPositionCell from '../Components/applyPositionCell.vue'
    import { Checklist } from 'mint-ui'
    export default{
        methods: {
            handleChange (value) {
                this.value = value
            },
            clickFilter: function () {
                this.showFilter = !this.showFilter;

            },
            clickSelected:function () {
                this.showSelected=!this.showSelected;
            }


        },
        data(){
            return {
                value: '1',
                msg: 'hello vue',
                list:[
                        {name: "图书管理员3"},
                        {name: "图书管理员2"},
                        {name: "图书管理员1"},
                    ],
                showSelected: false,
                showFilter:false


        }
        },
        components: {
            draggable,
            applyPositionCell,
            [Checklist.name]:Checklist,
//            [menuItem.name]:menuItem
        }
    }
</script>