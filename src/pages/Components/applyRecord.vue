<template>
    <div class="container">
        <div class="applyListItem" v-for="item in items">
            <mt-cell v-for="obj in item" :value="obj"></mt-cell>
        </div>

    </div>
</template>
<style>
    body{
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
