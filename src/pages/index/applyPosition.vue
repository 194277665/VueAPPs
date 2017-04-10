<template>
    <div class="container">
        <div class="search">
            搜索框
        </div>
        <div class="filter" @click="clickFilter">
            <div class="filterLeft">
                <div class="filterItem" v-for="n in 6"></div>

            </div>
            <!--<mu-dropDown-menu :value="value" @change="handleChange">-->
                <!--<mu-menu-item value="1" title="星期一"/>-->
                <!--<mu-menu-item value="2" title="星期二"/>-->
                <!--<mu-menu-item value="3" title="星期三"/>-->
                <!--<mu-menu-item value="4" title="星期四"/>-->
                <!--<mu-menu-item value="5" title="星期五"/>-->
                <!--<mu-menu-item value="6" title="星期六"/>-->
                <!--<mu-menu-item value="7" title="星期日"/>-->
            <!--</mu-dropDown-menu>-->
        </div>
        <div class="timeLimit">
            工作时间：6.12-明年8.12 申请截止8.12
        </div>
        <div class="main">
            <div class="item" v-for="n in 30">

            </div>
        </div>
        <div class="bottom">
            <div class="bottomLeft">已选中三个岗位</div>
            <div class="bottomRight">选好了</div>
        </div>

    </div>
</template>

<style scoped>
    body {
        background-color: #ff0000;
    }
    .search
    {
        width: 100%;
        height: 30PX;
        background: #403f44;
        color: white;
    }
    .filter{
        width: 100%;
        height: 30PX;
        color: white;
        background: blueviolet;
        position: relative;

    }
    .filterLeft
    {
        width: 100%;
        height: 200PX;
        background: rgba(30,39,30,0.5);
        /*display: none;*/
        /*margin-top: 30PX;*/
        z-index: 9999;
        position: absolute;
        top: 30PX;
        height: calc(100vh - 60PX);

    }
    .filterItem{
        width: 100%;
        height: 30PX;
        background: #fff;
        margin-bottom: 1PX;
    }
    .timeLimit
    {
        width: 100%;
       height: 20PX;
        background: #3E50B4;
        color: white;
        z-index:0;
    }
    .main
    {
        width: 100%;
        height: calc(100vh - 44PX - 60PX - 20PX);
        background: red;
        overflow: auto;
        z-index:0;
    }
    .item{
        margin-bottom: 1PX;
        background: white;
        width: 100%;
        height: 70PX;
    }
    .bottom{
        width: 100%;
        height: 44PX;
        bottom: 0PX;
        background: rgba(46, 37, 85, 0.86);
        color: #fff;

    }

    /*.bottom{*/
        /*!*calc(100vh - 6);*!*/
        /*width: 100%;*/
        /*height:60PX;*/
        /*background: green;*/
    /*}*/

</style>
<script>
//    import {} from 'muse-ui'
//import $ from ''
    export default{
        methods: {
            handleChange (value) {
                this.value = value
            },
            clickFilter:function () {

            }

        },
        data(){
            return {
                value: '1',
                msg: 'hello vue'
            }
        },
        components: {
//            [dropDownMenu.name]:dropDownMenu,
//            [menuItem.name]:menuItem
        }
    }
</script>