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
                <button @click="goToApply">+申请新岗位</button>
                <myPosition :items="object.SGXX"></myPosition>
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

    .tabContainer {
        margin-top: 10PX;
        background-color: #f3f3f3;
    }

    button {
        background: #93D36E;
        width: 100%;
        height: 50PX;
        outline: none;
        border: none;
    }


    /*修改蜜桃-UI的样式*/
    .mint-navbar .mint-tab-item.is-selected {
        border-bottom: 3px solid #93D36E;
        color: #93D36E;
        margin-bottom: -3px;
    }
</style>
<script type="text/javascript">
    import {Navbar, TabItem, Cell, TabContainer, TabContainerItem, Button} from 'mint-ui'
    import applyRecord from '../Components/applyRecord.vue'
    import myPosition from '../Components/myPosition.vue'
    import API from '../../API'
    export default {
        created() {
            let random = Math.ceil(Math.random() * 10);
            let a = (random % 2 != 0);
            this.showApplyButton = a;

            let requestUrlRole = API.service + API.setDefaultRole + '?IDENTITY_ID='+API.id
            this.$http.get(requestUrlRole).then(res=>{
                return res.json();
            }).then(res=>{
               API.type = res.data.IDENTITY_TYPE;
               console.log('heollo '+API.type);
            });


            let requestUrl = API.service+API.queryStudentWorkJob+'?IDENTITY_ID='+API.id;
            console.log(requestUrl);
            this.$http.get(requestUrl).then(res=>{
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