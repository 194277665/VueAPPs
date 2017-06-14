<template>
    <div class="container">
        <div class="positionListItem" v-for="(item,index) in items"  @click="toSalaryDetail(index)">

            <div  class="line">
                <span  class="des">{{item.GWMC}}</span>
                <span  class="leave-position">{{item.LGLBDM_DISPLAY}}</span>
                <span class="salary">{{item.XZZH}}</span>
            </div>
            <div class="line">
                <span  class="date" >{{item.GZKSRQ}}-{{item.GZJSRQ}}</span><span  class="yhxiz">已获薪资</span>
            </div>
        </div>
        <nothingTips v-show="items.length < 1"></nothingTips>
    </div>
</template>
<style scoped>
    body {
        /*background-color: #f9f9f9;*/
    }
    .line{
        height:40PX;
    }
    span{
        font-size: 14PX;
        line-height: 40PX;
        padding-left: 10PX;
    }
    .des{
        font-size: 16PX;
        color: #403f44;
    }
    .salary{
        margin-right:10PX;
        float: right;
        color: #ef971c;
        font-size: 20PX;
    }
    .positionListItem{
        width: 96%;
        height: 80PX;
        margin: 10PX auto;
        background-color: #ffffff;
        /*position: relative;*/
        border-radius: 5PX;
        box-shadow: 0 0 3PX rgba(0,0,0,0.5);
    }
    /*img{*/
        /*width: 20PX;*/
        /*height: 20px;*/
        /*!*top:0;*!*/
        /*!*right:0;*!*/
        /*float: right;*/
    /*}*/
    .leave-position{
        /*display: inline-block;*/
        /*width: 40PX;*/
        /*height: 20PX;*/
        background: #f3f3f3;
        color: #939393;
        text-align: center;
        padding-left: 0PX;
        margin-left: 10PX;

    }
    .date
    {
        color: #d3d3d3;

    }
    .yhxiz
    {
        color: #d3d3d3;
        float: right;
        margin-right: 10PX;
    }

</style>
<script>

    import nothingTips from './nothingTips.vue'
    export default{
        created(){
        },
        methods:{
            toSalaryDetail:function (index) {
               this.$router.push({path:'/salaryDetail',query:{SGBH:this.items[index].SGBH}});
            }
        },
        data(){
            return {

            }
        },
        components: {
            nothingTips,
        },
        props:['items']
    }
</script>
