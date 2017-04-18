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
            <!--<mu-switch label="开关" class="demo-switch" />-->
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

    }
    .allowChange>span{
        display: inline-block;
        padding: 10PX;
        font-size: 18PX;
        color: #333;
        line-height: 100%;

    }
    .mt-button{
        background: #56C2AF;
        color: white;
        width: 90%;
    }
    .demo-switch {
        margin-bottom: 16px;
    }
</style>
<script>
    import { Button } from 'mint-ui';
    import $ from 'jquery'
    import API from '../../API'
//    import MuseUI  from 'muse-ui'
    export default{
        created(){
            this.GWDMList = this.$route.query.GWDMArray;
        },

        methods:{
            commit:function () {
               let LXFS = $('.textfiled').val();
               let SQLY  = $('textarea').val();
               let SFFCTJ = 1;
                let gwdm = JSON.stringify(this.GWDMList);
                console.log('dfasdfdsafasf-----'+gwdm);
//               let requestUrl = API.service + API.applyStudentWokrStudy + '?SQLY='+SQLY+'&LXFS='+LXFS+'&IDENTITY_ID='+API.id
//                +'&IDENTITY_TYPE='+API.type+'&GWARRAY='+JSON.stringify(this.GWDMList)+'&SFFCTJ='+1;
//               console.log(requestUrl);
                let requestUrl = API.service + API.applyStudentWokrStudy;
                console.log(requestUrl);

               let param = {
                   LXFS:LXFS,
                   SQLY:SQLY,
                   SFFCTJ:SFFCTJ,
                   GWARRAY:{INDATA:this.GWDMList},
                   IDENTITY_ID:API.id,
                   IDENTITY_TYPE:API.type

               }
               this.$http.post(requestUrl,param).then(res=>{

                   return res.json();
               }).then(res=>{
                   console.log(res.data);
               });



            }
        },
        data(){
            return {
                msg: 'hello vue',
                GWDMList:[]
            }
        },
        components: {
            [Button.name]:Button,
//            [Swicth.name]:Swicth
        }
    }
</script>