<template>
    <div class="container">
        <div class="left">
            <input class="c" type="checkbox" name="" value="今日话题"/>
        </div>
        <div class="middle">
            <div class="line">
                <span>图书管路员</span>
            </div>
            <div class="line">
                <span>来自图书馆</span>
            </div>
            <div class="line">
                <span>四平校区</span>
            </div>

        </div>
        <div class="right">
            <span>￥560</span>
            <span>元/每月</span>
        </div>
    </div>
</template>
<style scoped>
    body {
        background-color: #ff0000;
    }

    .container {
        width: 100%;
        height: auto;
        background: #fff;
        display: flex;
        justify-content: center;
    }

    .left {
        width: 10%;
        height: 60PX;
        /*background: #93D36E;*/
    }

    .left > input {
        display: block;
        width: 50%;
        height: 50%;
        margin: 40%;

    }

    .middle {
        width: 60%;
    }

    .middle > .line {
        width: 100%;
        height: auto;
        padding: 3PX;
        font-size: 14PX;
    }


    .right {
        width: 30%;
        height: auto;

    }

</style>
<script>
    export default{
        data(){
            return {}

        },
        components: {}
    }
</script>