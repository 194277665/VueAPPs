<template>
    <div class="container">
        <div class="positionListItem" v-for="item in items"  @click="toSalaryDetail(item.salary)">
           <img src="../../assets/logo.png" v-show="item.isLeave">
            <div  class="Line">
                <span  class="des">{{item.position}}</span><span class="salary">{{item.salary}}</span>
            </div>
            <div class="Line">
                <span  class="date" >{{item.date}}</span><span  class="yhxiz">{{item.des}}</span>
            </div>

        </div>
    </div>
</template>
<style scoped>
    body {
        background-color: #fff;
    }
    .Line{
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
        methods:{
            toSalaryDetail:function (id) {
               this.$router.push('/salaryDetail/'+id)
            }
        },
        data(){
            return {
                items: [
                    {
                        position: '申请与辅导费',
                        salary: '560',
                        date: '2017/1/1至今',
                        des: '申请与辅导费',
                        isLeave:true
                    },
                    {
                        position: '申请与辅导费',
                        salary: '560',
                        date: '2017/1/1至今',
                        des: '申请与辅导费',
                        isLeave:false

                    },
                    {
                        position: '申请与辅导费',
                        salary: '560',
                        date: '2017/1/1至今',
                        des: '申请与辅导费',
                        isLeave:true
                    }, {
                        position: '申请与辅导费',
                        salary: '560',
                        date: '2017/1/1至今',
                        des: '申请与辅导费',
                        isLeave:false
                    },{
                        position: '申请与辅导费',
                        salary: '560',
                        date: '2017/1/1至今',
                        des: '申请与辅导费',
                        isLeave:true
                    },{
                        position: '申请与辅导费',
                        salary: '560',
                        date: '2017/1/1至今',
                        des: '申请与辅导费',
                        isLeave:false
                    },{
                        position: '申请与辅导费',
                        salary: '560',
                        date: '2017/1/1至今',
                        des: '申请与辅导费',
                        isLeave:false
                    }]
            }
        },
        components: {}
    }
</script>
