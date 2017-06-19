<template>
    <div class="container">
        <div class="sectionHeader">
            <span>审核流程</span>
        </div>
        <div class="stepItemContainer">
            <div class="stepItem" v-for="item in items">
                <div class="leftPart">
                    <span>{{item.CZRQ|parseDate}}</span>
                    <i class="iconfont checkStatusYes" v-if="item.SHYJ&&item.SHYJ.length===0">&#xe68c;</i>
                    <i class="iconfont checkStatusNo" v-else="">&#xe67a;</i>
                </div>
                <div class="rightPart">
                    <section>
                        <h2>{{item.DQZTDM_DISPLAY}}</h2>
                        <!--<span class="reviewDes"> {{item.SHYJ}} </span>-->
                        <span class="detail">{{item.CZZXM}}</span>
                        <div v-for="subItem in item.SHYJ" class="shyj">
                         <span>{{ subItem.SHYJ }}</span>
                        </div>
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
        min-height: 150PX;
        background-color: #fff;
        padding-left: 110Px;
        position: relative;
    }

    .leftPart {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 110Px;
        background-color: #fff;
        border-right: solid #f9f9f9 1PX;
    }

    .leftPart > span {
        width: 100%;
        display: block;
        font-size: 12PX;
        color: #888;
        text-align: right;
        padding-right: 30px;
        margin-bottom: 10PX;

    }

    .rightPart {
        width: calc(100vw - 110Px);
        height: 100%;
        background-color: #fff;
    }

    .rightPart h2 {
        width: 100%;
        height: 30PX;
        font-size: 16PX;
        color: #888;
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
        left: 97Px;
        background-color: white;

    }

    .checkStatusNo {
        color: #ff3333;
        display: block;
        position: absolute;
        font-size: 25PX;
        top: 0;
        left: 97Px;
        background-color: white;
    }

</style>
<script scoped>
    import moment from 'moment'
    export default{
        created(){
            console.log(this.$route.query.item);
        },
        data(){
            return {
                msg: 'hello vue',
            }
        },
        filters: {
        	parseDate(val){
        		return moment(val).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        components: {},
        props: ['items']
    }
</script>
