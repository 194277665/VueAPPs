<template>
    <div class="content">
        <div>
            <span>事项主题：</span>
            <input type="text"/>
        </div>
        <div>
            <span>事项内容：</span>
            <input type="text"/>
        </div>
        <div>
            <span>事项说明：</span>
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