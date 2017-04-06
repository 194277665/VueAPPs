<template>
    <div class="container">
        <div class="applyListItem" v-for="item in items">
            <mt-cell v-for="obj in item" title="申请于2015/11/11/服从调剂" :value="obj"></mt-cell>
            <mt-cell v-for="obj in item" title="申请于2015/11/11/服从调剂" :value="obj"></mt-cell>
        </div>

    </div>
</template>
<style scoped>
    body{
    }
    .container{
        background: red;
        width: 100%;
        height: 300PX;
        overflow: auto;

    }
    .applyListItem{
        width:90%;
        margin: 10PX auto;
        background-color: #fff;
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
