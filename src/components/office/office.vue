<template>
    <div class="content">
        <div>
            <span>工作时间：</span>
            <input type="text" value="2017/04/20"/>
        </div>
        <div>
            <span>工作地点：</span>
            <input type="text" value="金智科技园"/>
        </div>
        <div>
            <span>工作内容：</span>
            <input type="text" value="微信营销系统开发"/>
        </div>
        <div>
            <span>工作成果：</span>
            <input type="text" value="完成接口对接"/>
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