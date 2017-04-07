<template>
    <div class="applyContainer">

        <!--<input class="phone" type="text" placeholder="请输入你的手机号码"></input>-->
        <textarea class="reason" type="" placeholder="请输入你的申请理由"></textarea>
        <button @click="applyHelp">提交</button>

    </div>
</template>
<style scoped>
 .applyContainer{
     width: 100%;
     height: 100%;
     background: #f9f9f9;
 }
    .phone{

        display: block;
        width: 100%;
        height: 45PX;
        margin-bottom: 1PX;
        padding: 5PX 10PX;
        font-size: 14PX;
    }
    .reason{
        display: block;
        width: 100%;
        height: 200PX;
        padding: 5PX 10PX;
        font-size: 14PX;
    }
    button{
        display: block;
        background:#21c0ae;
        width: 90%;
        height: 45PX;
        margin: 30PX auto;
        border: none;
        color: white;
        border-radius: 5PX;
        outline: none;
    }


</style>
<script>
    import $ from 'jquery'
    import { Indicator, Toast } from 'mint-ui'
    export default{
        methods:{

            applyHelp:function () {
//                {IDENTITY_ID:'2010056',KNBZDM:this.$route.query.knbzdm,KNBZDJDM:this.$route.query.knbzdjdm}
                var reson = $('textarea').val();
//                alert(reson);
                if(reson.length <1)
                {
                    Toast('请填写申请理由');
                    return;
                }

               var id =  this.$route.query.id;;
               var knbzdm = this.$route.query.knbzdm;
               var knbzdjdm = this.$route.query.knbzdjdm;
//               var url = 'http://amptest.wisedu.com/axsfw/sys/knbzapp/MobilePoorStuApply/saveStuApplyInfo.do?IDENTITY_ID='+id+
//                    '&KNBZDM='+
                var url = 'http://amptest.wisedu.com/axsfw/sys/knbzapp/MobilePoorStuApply/saveStuApplyInfo.do';
                var param = {IDENTITY_ID:id,KNBZDM:knbzdm,KNBZDJDM:knbzdjdm,SQLY:reson};
                Indicator.open();
               this.$http.get(url,param).then(res=>{
                  return res.json();
               }).then(res=>{
                   Indicator.close();
                   this.data = res.datas;
                   if(this.data.msg.length > 1)
                   {
                       Toast(this.data.msg);
                   }else {
                       this.showApplyTips();
                   }
               });
            },

            showApplyTips:function () {
                this.$router.push('/applyTips');
            }
        },
        data(){
            return{
                msg:'hello vue',
                data:{}
            }
        },
        components:{
            [Indicator.name]:Indicator,
            [Toast.name]:Toast
        }
    }
</script>
