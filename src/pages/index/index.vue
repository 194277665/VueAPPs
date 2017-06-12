<template>
    <div id="app" class="index">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">我的岗位</mt-tab-item>
            <mt-tab-item id="2">申请记录</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected" class="tabContainer">

            <mt-tab-container-item id="1">
                <!--<button v-show="object.SFKSQ" @click="goToApply">+申请新岗位</button>-->
               <div class="top-button-div">
                <button class="top-button" @click="goToApply" v-show="object.SFKSQ">申请新岗位</button>
               </div>
                <myPosition :items="object.SGXX"></myPosition>
            </mt-tab-container-item>

            <mt-tab-container-item id="2">
                <applyRecord></applyRecord>
            </mt-tab-container-item>

        </mt-tab-container>
    </div>
</template>

<style scoped>
    body{
        background-color: #fff;
    }
    .index {
        background: #f9f9f9;
    }

    .tabContainer {
        margin-top: 10PX;
        /*background-color: #f9f9f9;*/
        background: #f9f9f9;
        /*text-align: center;*/
        /*padding: 10PX;*/
    }

    .top-button-div{
        width: 100%;
        height: 50PX;
        text-align: center;
        margin-bottom:10PX;

    }
    .top-button {
        background: #f9f9f9;
        border-radius: 3PX;
        /*border: solid 1PX #999;*/
        box-shadow: 0 0 1PX rgba(0,0,0,0.5);
        /*box-shadow: 0 0 1PX #f9f9f9;*/
        width: 96%;
        height: 50PX;
        outline: none;
        border: none;
        background: white;
        color: #56c2af;
        font-size: 16PX;
        /*margin: 10PX auto;*/
        text-align: center;

    }


    /*修改蜜桃-UI的样式*/
    .mint-navbar .mint-tab-item.is-selected {
        border-bottom: 3px solid #56C2AF;
        color: #56C2AF;
        margin-bottom: -3px;
    }
</style>
<script type="text/javascript">
    import {Navbar, TabItem, Cell, TabContainer, TabContainerItem, Button,  Indicator} from 'mint-ui'
    import applyRecord from '../Components/applyRecord.vue'
    import myPosition from '../Components/myPosition.vue'
    import API from '../../API'
    export default {
        created() {
            let random = Math.ceil(Math.random() * 10);
            let a = (random % 2 != 0);
            this.showApplyButton = true;

            let requestUrlRole = API.service + API.setDefaultRole + '?IDENTITY_ID='+API.id;
            Indicator.open();
            this.$http.get(requestUrlRole).then(res=>{
                console.log(11);
                Indicator.close();
                return res.json();
            }).then(res=>{
               API.type = res.data.IDENTITY_TYPE;
               console.log('heollo '+API.type);
            });


            let requestUrl = API.service+API.queryStudentWorkJob+'?IDENTITY_ID='+API.id;
            console.log(requestUrl);
            Indicator.open();
            this.$http.get(requestUrl).then(res=>{
                Indicator.close();
                return res.json();
            }).then(res=>{
                this.object = res.data;
            });
        },
        methods: {
            goToApply: function () {
                this.$router.push('/applyPosition');
            }
        },
        data(){
            return {
                selected: "1",
                object:{}
            }
        },
        components: {
            [Navbar.name]: Navbar,
            [TabItem.name]: TabItem,
            [Cell.name]: Cell,
            [TabContainer.name]: TabContainer,
            [TabContainerItem.name]: TabContainerItem,
            [Button.name]: Button,
            applyRecord,
            myPosition
        }
    }
</script>