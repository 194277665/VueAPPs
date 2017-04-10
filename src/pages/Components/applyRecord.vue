<template>
    <div class="container">
        <div class="applyListItem" v-for="item in items">
            <!--<div>-->
                <span class="sectionHeader">申请于2016/12/1/服从调剂</span>
            <!--</div>-->
            <mt-cell class="cell" v-for="obj in item" title="图书管理员" :value="obj" isLink></mt-cell>
            <!--<mt-cell v-for="obj in item" title="申请于2015/11/11/服从调剂" :value="obj"></mt-cell>-->
        </div>

    </div>
</template>
<style scoped>
    body{
        color: #f9f9f9;
    }
    .container{
        width: 100%;
        height: 100vh;
        overflow: auto;

    }
    .applyListItem{
        width:100%;
        height: auto;
        margin: 10PX auto;
        background-color: #f9f9f9;
        verflow: auto;
    }
    .sectionHeader{
        display: block;
        width: 100%;
        height: 40PX;
        line-height: 40PX;
        font-size: 14PX;
        color: #333333;
        padding-left: 10PX;
    }
    .cell{
        margin-bottom: 1PX;
    }
</style>
<script>
    import { Cell } from 'mint-ui'
//    import
    export default{
//        methods:{
//            toSalaryDetail:function () {
//                $.router.push('/salaryDetail/')
//            }
//        },
        data(){

            return{
                items:[
                    {
                        obj1:'申请与辅导费',
                        obj2:'申请与辅导费',
                        obj3:'申请与辅导费',
                        obj4:'申请与辅导费'
                     },
                    {
                        obj1:'申请与辅导费',
                        obj2:'申请与辅导费',
                        obj3:'申请与辅导费',
                        obj4:'申请与辅导费'

                    },
                    {
                        obj1:'申请与辅导费',
                        obj2:'申请与辅导费',
                        obj3:'申请与辅导费',
                        obj4:'申请与辅导费'
                    },{
                        obj1:'申请与辅导费',
                        obj2:'申请与辅导费',
                        obj3:'申请与辅导费',
                        obj4:'申请与辅导费'
                    }]

            }
        },
        components:{
            [Cell.name]:Cell
        }
    }
</script>
