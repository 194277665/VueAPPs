<template>
    <div class="container">
        <div class="positionListItem" v-for="(item,index) in items"  @click="toSalaryDetail(index)">
           <img src="../../assets/logo.png" v-show="item.LGLBDM == 1">
            <div  class="line">
                <span  class="des">{{item.GWMC}}</span><span class="salary">{{item.XZZH}}</span>
            </div>
            <div class="line">
                <span  class="date" >{{item.GZKSRQ}}-{{item.GZJSRQ}}</span><span  class="yhxiz">{{item.XZZH}}</span>
            </div>

        </div>
    </div>
</template>
<style scoped>
    body {
        background-color: #f9f9f9;
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
    }
    .positionListItem{
        width: 100%;
        height: 80PX;
        margin: 10PX auto;
        background-color: #ffffff;
        /*position: relative;*/
    }
    img{
        width: 20PX;
        height: 20px;
        /*top:0;*/
        /*right:0;*/
        float: right;
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

        },
        props:['items']
    }
</script>
