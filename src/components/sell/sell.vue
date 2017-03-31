<template>
    <div class="content">
        <div>
            <span>支持人员：</span>
            <input type="text"/>
        </div>
        <div>
            <span>支持内容：</span>
            <input type="text"/>
        </div>
        <div>
            <span>时间：</span>
            <input type="text"/>
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
</style>

<script type="text/javascript">
    import { Button } from 'mint-ui';
    export default {
        components: {
            [Button.name]: Button,
        },
    }
</script>