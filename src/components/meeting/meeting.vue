<template>
    <div class="content">
        <div>
            <span>会议主题：</span>
            <input type="text" value="高校信息化建设讨论会议"/>
        </div>
        <div>
            <span>与会人：</span>
            <input type="text" value="刘总"/>
        </div>
        <div>
            <span>会议内容：</span>
            <input type="text" value="关于建设中国高校信息化发展目标XX"/>
        </div>
        <div>
            <span>会议结论：</span>
            <input type="text" value="大力发展高校信息化建设"/>
        </div>
        <div>
            <span>会议时间：</span>
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