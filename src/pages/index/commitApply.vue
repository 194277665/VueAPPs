<template>
    <div class="container">
        <div class="phone-number">
            <input class="textfiled" type="text" placeholder="请输入你的手机号码"/>
        </div>
        <div class="reson">
            <textarea placeholder="请输入你的申请理由"></textarea>
        </div>
        <div class="allowChange">
            <span>服从调剂</span>
            <mt-switch v-model="switchValue" class="mt-switch" @change="switchChange"></mt-switch>
        </div>

            <mt-button class="mt-button" @click.native="commit">提交</mt-button>
    </div>
</template>
<style scoped>
    body {
        background-color: #ff0000;
    }
    .container{
        text-align: center;
    }

    .phone-number{
        width: 100%;

        color: #f9f9f9;
        height: 44PX;
        margin-bottom: 1PX;
    }
    .textfiled{
        width: 100%;
        height: 100%;
        padding: 10PX;
        font-size: 15PX;
    }
    .reson{
        width: 100%;
        height: 200PX;
        margin-bottom: 20PX;
    }
    textarea{
        width: 100%;
        height: 100%;
        font-size: 15PX;
        color: #030303;
        padding: 10PX;

    }
    .allowChange{
        width: 100%;
        height: 44PX;
        background: white;
        margin-bottom: 20PX;
        text-align: left;
        display: flex;
        justify-content: flex-start;

    }
    .allowChange>span{
        display: inline-block;
        padding: 10PX;
        font-size: 18PX;
        color: #333;
        line-height: 100%;
        width: 80%;

    }
    .allowChange>.mt-switch{
        width: 20%;
    }
    .mt-button{
        background: #56C2AF;
        color: white;
        width: 90%;
    }
    .mt-switch .mint-switch-core {
        border-color: #56C2AF;
        background-color: #56C2AF;
    }


</style>
<script>
    import { Button, Switch,Toast } from 'mint-ui';
    import $ from 'jquery'
    import API from '../../API'
//    import  Switch from 'muse-ui/src/switch'
    export default{
        created(){
            this.GWDMList = this.$route.query.GWDMArray;
        },

        methods:{
            commit:function () {
               let LXFS = $('.textfiled').val();
               let SQLY  = $('textarea').val();
               let SFFCTJ = this.SFFCTJ;
                let gwdm = JSON.stringify(this.GWDMList);
                console.log('dfasdfdsafasf-----'+gwdm);
//               let requestUrl = API.service + API.applyStudentWokrStudy + '?SQLY='+SQLY+'&LXFS='+LXFS+'&IDENTITY_ID='+API.id
//                +'&IDENTITY_TYPE='+API.type+'&GWARRAY='+JSON.stringify(this.GWDMList)+'&SFFCTJ='+1;
//               console.log(requestUrl);
                let requestUrl = API.service + API.applyStudentWokrStudy;
                console.log(requestUrl);

               let param = {
                   INDATA: {
                       LXFS: LXFS,
                       SQLY: SQLY,
                       SFFCTJ: SFFCTJ,
                       GWARRAY:this.GWDMList,
                       IDENTITY_ID: API.id,
                       IDENTITY_TYPE: API.type
                   }
               }
               this.$http.post(requestUrl,param).then(res=>{

                   return res.json();
               }).then(res=>{
                   if(res.returnCode == '#E000000000000')
                   {
                       this.$router.push("/ok");
                   }else {
                       Toast(res.description);

                   }
               });

            },
            switchChange:function () {
                if(this.switchValue){
                    this.SFFCTJ = 1;
                }else {
                    this.SFFCTJ = 0;
                }

            }
        },
        data(){
            return {
                msg: 'hello vue',
                GWDMList:[],
                switchValue:'',
                SFFCTJ:0
            }
        },
        components: {
            [Button.name]:Button,
            [Switch.name]:Switch,
            [Toast.name]:Toast
        },
        watch: {
            switchValue: function (newValue, oldValue) {
//                alert(newValue);

            }
        }
    }
</script>