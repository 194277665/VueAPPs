<template>
    <div class="positionDetailContainer">
        <!--//职位详情的头部-->
        <div class="container">
            <div class="line">
                <span class="left-span">{{object.GWMC}}</span><span class="right-span money">{{object.BCBZ}}</span>
            </div>
            <div class="line">
                <span class="left-span">来自：图书馆</span><span class="right-span">上限:{{object.YGZSX}}元／月</span>
            </div>
            <div class="line">
                <span class="mark">{{object.XQMC_DISPLAY}}</span>
            </div>
        </div>

        <!--//地点 人数 学期 学年-->
        <div class="container">
            <div class="line">
                <span>工作地点：图书馆</span>
            </div>
            <div class="line">
                <span>人数：{{object.XQRS}}个</span>
            </div>
            <div class="line">
                <span>学年：{{object.XN_DISPLAY}}</span>
            </div>
            <div class="line">
                <span>学期：{{object.XQ_DISPLAY}}</span>
            </div>

        </div>

        <!--职位描述-->
        <div class="container">
            <div class="section-header">职位描述</div>
            <div class="section-content">{{object.GWMS}}</div>
        </div>

        <!--申请需求-->
        <div class="container">
            <div class="section-header">申请需求</div>
            <div class="section-content">{{object.GWYQ}}</div>
        </div>

        <!--联系方式-->
        <div class="container">
            <div class="section-header">申请需求</div>
            <!--<div class="section-content">-->
                <div class="line">  <span class="">联系人：</span><span>{{object.GWYQ}}</span></div>
                <div class="line">  <span class="">联系电话:</span><span>{{object.LXDH}}</span></div>
                <div class="line">  <span class="">联系地址：</span><span>{{object.LXDZ}}</span></div>
                <!--<div class="line">  <span>工作地点：{{object.GWYQ}}</span></div>-->
            <!--</div>-->
        </div>

    </div>

</template>
<style scoped>
    body{
        background-color:#ff0000;
    }
    /*//职位详情的头部*/
    .container{
        width: 100%;
        background-color: #ffffff;
        margin-bottom: 20PX;
        padding: 10PX;
    }
    .line{
        display: flex;
        justify-content: flex-start;
        padding: 5PX;
        font-size: 14PX;
    }
    .line > .left-span{
        display: inline-block;
        width: 50%;

    }
    .line> .right-span{
        display: inline-block;
        width: 50%;
        text-align: right;
        color: #939393;
    }
    .line > .mark{
        /*border: solid #56C2AF 1PX;*/
        color: #93D36E;
        background: #E3F7F5;
    }
    .money{
        color: red;
    }

    /*简介秒速*/
    .section-header{
        width: 100%;
        font-size: 16PX;
        padding: 10PX;

        margin-bottom: 1PX;
        /*background: white;*/
        border-bottom: solid 1PX #f9f9f9;

    }
    .section-content{
        width: 100%;
        font-size: 14PX;
        padding: 10PX;
        text-indent: 20PX;
    }


</style>
<script>
    import API from '../../API'
    export default{
        created(){
//            查询一个勤工助学岗位详细信息
          let GWDM = this.$route.query.GWDM;
          let requestUrl = API.service + API.queryStudentJobInfo + '?GWDM='+GWDM +
              '&IDENTITY_ID='+API.id+'&IDENTITY_TYPE='+API.type;
          console.log('查询一个勤工助学岗位详细信息'+requestUrl);
          this.$http.get(requestUrl).then(res=>{

              return res.json();
          }).then(res=>{
               console.log(res.data);
               this.object = res.data;
          });

    },
        data(){
            return{
                msg:'hello vue',
                showApplyButton:true,
                object:{}

            }
        },
        components:{
        }
    }
</script>
