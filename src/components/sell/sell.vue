<template>
    <div class="content">
        <div>
            <span>支持人员：</span>
            <input type="text" value="张三"/>
        </div>
        <div>
            <span>支持内容：</span>
            <input type="text" value="移动校园销售支持"/>
        </div>
        <div>
            <span>时间：</span>
            <input type="text" value="2017/04/20"/>
        </div>
        <div class="div-button">
            <mt-button type="primary" size="small">提交</mt-button>
            <mt-button type="primary" size="small">关闭</mt-button>
        </div>
    </div>
</template>

<style scoped>
    span {
        display: block;
        width: 100%;
        padding-top: 10PX;
        padding-bottom: 6PX;
    }

    .div-button {
        position:fixed;
        bottom:20PX;
    }
    input{
        width: 100%;
        border: solid 1PX #f9f9f9;
        height: 30PX;
    }
</style>

<script type="text/javascript">
    import { Button } from 'mint-ui';
    export default {
        components: {
            [Button.name]: Button,
        },
    }
</script>