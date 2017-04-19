<template>
    <div class="content">
        <div>
            <span>活动主题：</span>
            <input type="text" value="市场占有率讨论会议"/>
        </div>
        <div>
            <span>活动地点：</span>
            <input type="text" value="205会议室"/>
        </div>
        <div>
            <span>与会人：</span>
            <input type="text" value="刘总"/>
        </div>
        <div>
            <span>活动时间：</span>
            <input type="text" value="2017/04/20"/>
        </div>
        <div>
            <span>活动成果：</span>
            <input type="text" value="确定了未来市场的战略方式"/>
        </div>
        <div class="div-button">
            <mt-button type="primary" size="small">提交</mt-button>
            <mt-button type="primary" size="small">关闭</mt-button>
        </div>
    </div>
</template>

<style scoped>
    .content{
        color: #f9f9f9;
    }
    span {
        display: block;
        width: 100%;
        padding-top: 10PX;
        padding-bottom: 6PX;
        color: #030300;
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