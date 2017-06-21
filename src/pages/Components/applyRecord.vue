<template>
    <div class="container">
        <div class="applyListItem" v-for="(item,index1) in items">
            <span class="sectionHeader">申请于:{{item.SQRQ}} <span v-if="item.SFFCTJ === '1'">/服从调剂</span>
            <span v-else="">/不服从调剂</span></span>
            <div class="cell" v-for="(obj,index2) in item.GWSQARRAY" @click="toSalaryDetail(index1,index2)">
                <mt-cell :title="obj.GWMC" :value="obj.SHZT_DISPLAY" isLink></mt-cell>
            </div>

        </div>
        <nothingTips v-show="items === undefined || items.length < 1"></nothingTips>

    </div>
</template>
<style scoped>
    body {
        color: #f9f9f9;
    }

    .container {
        width: 100%;
        height: 100vh;
        overflow: auto;

    }

    .applyListItem {
        width: 100%;
        height: auto;
        /*margin: 10PX auto;*/
        background-color: #f3f3f3;
        verflow: auto;
    }

    .sectionHeader {
        display: block;
        width: 100%;
        height: 40PX;
        line-height: 40PX;
        font-size: 14PX;
        color: #333333;
        padding-left: 10PX;
    }

    .cell {
        margin-bottom: 1PX;
    }
</style>
<script>
    import {Cell} from 'mint-ui'
    import API from '../../API'
    import nothingTips from './nothingTips.vue'
    export default{
        created(){
            let requestUrl = API.service + API.queryStudentJobApplyRecord + '?IDENTITY_ID=' +
                API.id + '&IDENTITY_TYPE=' + API.type;
            this.$http.get(requestUrl).then(function (res) {
                return res.json();
            }).then(function (res) {
                this.items = res.data;
            });
        },
        methods: {
            toSalaryDetail: function (index1,index2) {
                let SGBH = this.items[index1].GWSQARRAY[index2].SGBH;
                this.$router.push({path:'reviewDetail',query:{SGBH:SGBH}});
            }
        },
        data(){
            return {
                items: []

            }
        },
        components: {
            [Cell.name]: Cell,
            nothingTips,
        }
    }
</script>
