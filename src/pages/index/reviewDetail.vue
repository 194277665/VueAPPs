<template>
    <div class="container">
        <div class="top-header">
            <div class="line">
                <span class="left-span title">图书管理员</span>
                <span class="right-span money">15欧元/月</span>
            </div>
            <div class="line">
                <span class="left-span">来自图书馆</span>
                <span class="right-span">上线690园</span>
            </div>
            <button @click="goToPositionDetail">更多岗位信息</button>
        </div>

        <stepView></stepView>
    </div>
</template>
<style scoped>
    body {
        background-color: #f9f9f9;
    }
    .top-header {
        margin-bottom: 20PX;
        background: #fff;
        padding: 0 0 10PX 0;
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

</style>
<script scoped>
    export default{
        methods:{
            goToPositionDetail:function () {
                this.$router.push({path:'/positionDetail',query:{GWDM:this.GWbOject.GWDM}});
            },
        },
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
        }
    }
</script>