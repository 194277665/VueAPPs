<template>
    <div class="salaryContainer">
        <div class="top-header">
            <div class="line">
                <span class="left-span title">{{GWbOject.GWMC}}</span>
                <span class="right-span money">￥{{GWbOject.XZZH}}</span>
            </div>
            <div class="line">
                <span class="left-span">工作时间：{{GWbOject.GZKSSJ}}-{{GWbOject.GZJSSJ}}</span>
                <span class="right-span">已获薪资</span>
            </div>
            <div class="line">
                <span class="left-span">工作地点：{{GWbOject.GZDD}}</span>
            </div>
            <button @click="goToPositionDetail">更多岗位信息</button>
        </div>

        <mt-cell title="薪资明细"></mt-cell>
        <div class="detail-item" v-for="item in GWbOject.SALARYARRAY">
            <div class="detail-item-left">
                <span>{{GWbOject.FFYF}}</span>
            </div>
            <div class="detail-item-right">
                <span>+{{GWbOject.SFJE}}</span>
                <span>{{GWbOject.GS}}</span>
            </div>
        </div>

    </div>

    </div>
</template>
<style scoped>
    .salaryContainer {
        background-color: #f9f9f9;
    }

    .salaryContainer {

        width: 100%;
        height: auto;
    }

    .top-header {
        margin-bottom: 20PX;
        background: #fff;
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
        width: 20%;
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
    .detail-item{
        display: flex;
        justify-content: flex-start;
        padding: 10PX;
        background: #fff;
        margin-top: 1PX;
    }
    .detail-item-left{
        width: 70%;
        height: auto;
    }
    .detail-item-right{
        width: 20%;
        height: auto;
    }
    .detail-item-right > span{
        display: block;
        width: 100%;
        height: auto;
        text-align: right;

    }

</style>
<script>
    import {Cell} from 'mint-ui'
    import $ from 'jquery'
    import API from '../../API'
    export default{
        created(){
            let SGBH = this.$route.query.SGBH;
            let requestUrl = API.service + API.queryStudentWorkSalary +'?SGBH='+SGBH+'&IDENTITY_ID='+API.id+'&IDENTITY_TYPE='+API.type;
            console.log('request =='+requestUrl);
            this.$http.get(requestUrl).then(res=>{
                return res.json();
            }).then(res=>{
//                console.log(res.data);
                this.GWbOject = res.data;
            });


        },
        methods: {
            goToPositionDetail: function () {
                this.$router.push({path:'/positionDetail',query:{GWDM:this.GWbOject.GWDM}});
            }

        },
        data(){
            return {
                GWbOject:{}
            }
        },
        components: {
            [Cell.name]: Cell
        }
    }
</script>
