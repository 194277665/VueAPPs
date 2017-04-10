<template>
    <div id="app" class="index">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">我的岗位</mt-tab-item>
            <mt-tab-item id="2">申请记录</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected" class="tabContainer">
            <mt-tab-container-item id="1">
                    <button v-show="showApplyButton" @click="goToApply">+申请新岗位</button>

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
    button{
        background: #2196f3;
        width: 100%;
        height: 50PX;
        outline: none;
        border: none;
    }
</style>
<script type="text/javascript">
    import {  Navbar, TabItem, Cell, TabContainer, TabContainerItem, Button } from 'mint-ui'
    import applyRecord from '../Components/applyRecord.vue'
    import myPosition from '../Components/myPosition.vue'
    export default {
        created() {
                let random = Math.ceil(Math.random()*10);
                let a = (random%2 != 0);
                this.showApplyButton = a;
        },
        methods:{
            goToApply:function () {
                this.$router.push('/applyPosition');
            }
        },
        data(){
            return {
                selected:"1",
                s:true,
                showApplyButton:true
            }
        },
        components: {
            [Navbar.name]:Navbar,
            [TabItem.name]:TabItem,
            [Cell.name]:Cell,
            [TabContainer.name]:TabContainer,
            [TabContainerItem.name]:TabContainerItem,
            [Button.name]:Button,
            applyRecord,
            myPosition
        }
    }
</script>