<template>
    <div class="positionDetailContainer">

            <div class="positionListItem"  >
                <!--<img src="../../assets/logo.png" v-show="item.isLeave">-->
                <div  class="Line">
                    <span  class="des">图书管理员</span><span class="salary">560</span>
                </div>
                <div class="Line">
                    <span  class="date" >来自：图书馆</span><span  class="yhxiz">上限 600／月</span>
                </div>
                <!--<img :src="../../../static/" v-for="n in 2">-->
                <img :src="'../../../static/images/position'+n+'.png'" v-for="n in 2">
            </div>
    </div>

</template>
<style scoped>
    body{
        background-color:#ff0000;
    }
    .Line{
        height:30PX;
    }
    span{
        font-size: 14PX;
        line-height: 30PX;
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
        width: 90%;
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
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        }
    }
</script>
