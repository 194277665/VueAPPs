<template>
    <div class="container">
        <div class="phone-number">
            <input class="textfiled" type="text" placeholder="请输入你的手机号码" v-model="LXFS"/>
        </div>
        <div class="reson">
            <textarea placeholder="请输入你的申请理由" v-model="reson">

            </textarea>
            <span>{{reson.length}}/200</span>
        </div>
        <div class="allowChange">
            <span>服从调剂</span>
            <mt-switch v-model="switchValue" class="mt-switch" @change="switchChange"></mt-switch>
        </div>

            <mt-button class="mt-button" @click.native="commit">提交</mt-button>
    </div>
</template>
<style>
    .mint-switch-input:checked+.mint-switch-core{
        border-color: #56c2af !important;
        background-color: #56c2af !important;
    }
</style>
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
        border-bottom: 1Px solid #f9f9f9;
    }
    .textfiled{
        width: 100%;
        height: 100%;
        padding: 10PX;
        font-size: 15PX;
        border-bottom: solid 1PX #ddd !important;
        border: none;
        outline: none !important;
        margin: 0 !important;

    }
    .reson{
        height: 220PX;
        background-color: #fff;
        margin-bottom: 20PX;
        border-bottom: solid 1PX #ddd;
        position: relative;

        & >span{
               display: inline-block;
               position: absolute;
               right: 0;
               bottom: 0;
               font-size: 14PX;
               color: #939393;
       }
    }
    textarea{
        width: 100%;
        height: 190PX;
        font-size: 15PX;
        color: #030303;
        padding: 10PX ;
        border: none !important;
        outline: none !important;
        margin: 0 !important;



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
        font-size: 16PX;
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
    .mint-switch-input:checked .mint-switch-core {
        border-color: #56C2AF;
        background-color: #56C2AF;
    }


</style>
<script>
    import { Button, Switch, Toast,  Indicator } from 'mint-ui';
    import $ from 'jquery'
    import API from '../../API'
//    import  Switch from 'muse-ui/src/switch'
    export default{
        created(){
            this.GWDMList = this.$route.query.GWDMArray;
            this.LXFS = API.LXFS;
        },

        methods:{
            commit:function () {
               let LXFS = $('.textfiled').val();
               let SQLY  = $('textarea').val();
                var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                if(!myreg.test(LXFS))
                {
                    Toast('请填写正确的手机号码');
                    return;
                }


               let SFFCTJ = this.SFFCTJ;
               if((LXFS.length < 1) || (SQLY.length < 1) )
               {
                   Toast('请完善申请信息');
                   return;
               }

                let gwdm = JSON.stringify(this.GWDMList);
               let requestUrl = API.service + API.applyStudentWokrStudy + '?SQLY='+SQLY+'&LXFS='+LXFS+'&IDENTITY_ID='+API.id
                +'&IDENTITY_TYPE='+API.type+'&GWARRAY='+gwdm+'&SFFCTJ='+1;
               console.log(requestUrl);
               let encodeUrl =  encodeURI(requestUrl);
               console.log(encodeUrl);
                Indicator.open();
               this.$http.get(encodeUrl).then(res=>{
                   Indicator.close();
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
                SFFCTJ:0,
                LXFS:'',
                reson:'',
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

            },
            reson:function (newValue) {
                if(newValue.length > 200){
                    Toast('申请理由字数过长');
                    this.reson = this.reson.substr(0, 200);
                }

            }
        }
    }
</script>