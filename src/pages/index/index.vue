<template>
    <div id="app" class="index">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">我的岗位</mt-tab-item>
            <mt-tab-item id="2">申请记录</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected" class="tabContainer">
            <mt-tab-container-item id="1">
                <myPosition></myPosition>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <applyRecord></applyRecord>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<style scoped>
    .index {
        background: #f3f3f3;
    }
    .tabContainer
    {
        margin-top: 10PX;
        background-color: #f3f3f3;
    }
</style>
<script type="text/javascript">
    import {  Navbar, TabItem, Cell, TabContainer, TabContainerItem } from 'mint-ui'
    import applyRecord from '../Components/applyRecord.vue'
    import myPosition from '../Components/myPosition.vue'
    export default {
        created() {
        },
        data(){
            return {
                selected:"1",
                s:true
            }
        },
        components: {
            [Navbar.name]:Navbar,
            [TabItem.name]:TabItem,
            [Cell.name]:Cell,
            [TabContainer.name]:TabContainer,
            [TabContainerItem.name]:TabContainerItem,
            applyRecord,
            myPosition


        }
    }
</script>