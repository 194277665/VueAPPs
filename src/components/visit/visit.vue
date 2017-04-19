<template>
    <div class="content">
        <div>
            <span>客户名称：</span>
            <input type="text" value="南京晓庄学院"/>
        </div>
        <div>
            <span>拜访对象：</span>
            <input type="text" value="催主任"/>
        </div>
        <div>
            <span>公司参与人员：</span>
            <input type="text" value="张三"/>
        </div>
        <div>
            <div class="div-inline">
                <span>是否存在风险：</span>
                <select>
                    <option>是</option>
                    <option>否</option>
                </select>
            </div>
            <div class="div-inline">
                <span>是否需要资源协助：</span>
                <select>
                    <option>是</option>
                    <option>否</option>
                </select>
            </div>
        </div>
        <div>
            <span>风险详情：</span>
            <input type="text" value="没有风险"/>
        </div>
        <div>
            <span>所需协助内容：</span>
            <input type="text" value="给客户介绍公司产品"/>
        </div>
        <div>
            <span>协助人：</span>
            <input type="text" value="王五"/>
        </div>
        <div class="div-button">
            <mt-button type="primary" size="small">提交</mt-button>
            <mt-button type="primary" size="small">关闭</mt-button>
        </div>
    </div>
</template>

<style scoped>

    .div-inline {
        display: inline-block;
    }

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
    select{
     border: solid #f9f9f9 1PX;
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