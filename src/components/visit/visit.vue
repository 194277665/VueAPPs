<template>
    <div class="content">
        <div>
            <span>客户名称：</span>
            <input type="text"/>
        </div>
        <div>
            <span>拜访对象：</span>
            <input type="text"/>
        </div>
        <div>
            <span>公司参与人员：</span>
            <input type="text"/>
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
            <input type="text"/>
        </div>
        <div>
            <span>所需协助内容：</span>
            <input type="text"/>
        </div>
        <div>
            <span>协助人：</span>
            <input type="text"/>
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
</style>

<script type="text/javascript">
    import { Button } from 'mint-ui';
    export default {
        components: {
            [Button.name]: Button,
        },
    }
</script>