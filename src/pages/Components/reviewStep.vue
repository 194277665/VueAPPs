<template>
    <div class="container">
        <div class="sectionHeader">
            <span>审核流程</span>
        </div>
        <div class="stepItemContainer">
            <div class="stepItem" v-for="item in items">
                <div class="leftPart">
                    <span>{{item.SHSJ}}</span>
                    <i class="iconfont checkStatusYes" v-if="item.DQZTDM == 0">&#xe68c;</i>
                    <i class="iconfont checkStatusNo" v-else="">&#xe67a;</i>

                </div>
                <div class="rightPart">
                    <section>
                        <h2>{{item.DQZTDM_DISPLAY}}</h2>
                        <span class="reviewDes"> {{item.SHYJ}} </span>
                        <span class="detail">{{item.CZZXM}}</span>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    body {
        background-color: #f9f9f9;
    }

    .sectionHeader {

        width: 100%;
        height: 44PX;
        background: white;
    }

    .sectionHeader span {
        display: block;
        width: 100%;
        height: 100PX;
        line-height: 100%;
        font-size: 16PX;
        padding: 14PX 10PX;
    }

    .stepItemContainer {
        width: 100%;
        height: auto;
        padding-top: 20PX;
        margin-top: 1px;
        background: white;
    }

    .stepItem {
        width: 100%;
        height: 100PX;
        background: white;

    }

    .leftPart {
        display: inline-block;
        width: 30%;
        height: 100%;
        float: left;
        position: relative;
        background: white;
        border-right: solid #f9f9f9 1PX;
        /*margin-right: 1px;*/
    }

    .leftPart > span {

        width: 100%;
        height: 10PX;
        /*line-height: 10PX;*/
        display: block;
        font-size: 12PX;
        color: #d3d3d3;
        text-align: right;
        padding-right: 30px;
        margin-bottom: 10PX;

    }

    .rightPart {
        display: inline-block;
        width: 70%;
        height: 100%;
        float: right;
        background: white;
    }

    .rightPart h2 {
        width: 100%;
        height: 30PX;
        font-size: 16PX;
        color: #d3d3d3;
        padding-left: 30PX;
    }

    .rightPart span {
        display: block;
        width: 100%;
        height: auto;
        padding-left: 30PX;
    }

    .checkStatusYes {
        color: #21c0ae;
        display: block;
        position: absolute;
        font-size: 25PX;
        top: 0;
        right: -13PX;
        background-color: white;

    }

    .checkStatusNo {
        color: #ff3333;
        display: block;
        position: absolute;
        font-size: 25PX;
        top: 0;
        right: -13PX;
        background-color: white;
    }

</style>
<script scoped>
    export default{
        created(){
            console.log(this.$route.query.item);
        },
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {},
        props: ['items']
    }
</script>
