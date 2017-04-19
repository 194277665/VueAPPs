<template>
    <div class="container">
        <div class="top-header">
            <div class="line">
                <span class="left-span title">{{object.GWMC}}</span>
                <span class="right-span money">{{object.BCBZ}}元/月</span>
            </div>
            <div class="line">
                <span class="left-span"></span>
                <span class="right-span">上限:{{object.YGZSX}}</span>
            </div>
            <!--<button @click="goToPositionDetail">更多岗位信息</button>-->
        </div>

        <div class="more"   @click="goToPositionDetail">
            <mt-cell title="更多详情" isLink></mt-cell>
        </div>

        <reviewStep :items="object.SHXXARRAY"></reviewStep>
    </div>
</template>
<style scoped>
    body {
        background-color: #f9f9f9;
        margin: 0;
    }
    .top-header {
        margin-bottom: 20PX;
        background: #fff;
        padding-bottom:10PX;
    }

    .line {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-start;
        padding: 10PX;
        font-size: 14PX;

    }

    .line > .left-span {
        display: inline-block;
        width: 70%;
    }

    .line > .right-span {
        display: inline-block;
        width: 30%;
        text-align: right;
    }

    .title {
        color: black;
        font-size: 18PX;

    }

    .money {
        color: red;
    }

    button {
        display: block;
        width: 50%;
        height: 30PX;
        background-color: #93D36E;
        border: none;
        color: white;
        margin: 10PX auto;
        outline: none;
    }
    .more{
        margin-bottom: 20PX;
    }

</style>
<script>
    import reviewStep from '../Components/reviewStep.vue';
    import API from '../../API';
    import { Cell } from 'mint-ui'
    export default{
        created(){
            let SGBH = this.$route.query.SGBH;
            let requestUrl = API.service + API.queryApplyJobInfo +'?SGBH=' + SGBH + '&IDENTITY_ID=' + API.id + '&IDENTITY_TYPE=' + API.type;
            this.$http.get(requestUrl).then(res=>{
                 return res.json();
            }).then(res=>{
                this.object = res.data;
            });
        },
        methods:{
            goToPositionDetail:function () {
                this.$router.push({path:'/positionDetail',query:{GWDM:this.object.GWDM}});
            },
        },
        data(){
            return {
                object:{}
            }
        },
        components: {
            reviewStep,
            [Cell.name]:Cell
        }
    }
</script>