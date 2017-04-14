<template>
    <div class="container">
        <div class="applyListItem" v-for="item in items">
            <span class="sectionHeader">申请于:{{item.SQRQ}} </span>
            <div class="cell" v-for="obj in item.GWSQARRAY" @click="toSalaryDetail">
                <mt-cell :title="obj.GWMC" :value="obj.SHZT_DISPLAY" isLink></mt-cell>
            </div>
        </div>

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
        margin: 10PX auto;
        background-color: #f9f9f9;
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
            toSalaryDetail: function () {
                this.$router.push('reviewDetail');

            }
        },
        data(){
            return {
                items: []

            }
        },
        components: {
            [Cell.name]: Cell
        }
    }
</script>
