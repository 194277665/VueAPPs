<template>
    <div id="app" class="index">
        <!--<router-view>-->
        <mt-search :value.sync="sValue" :result.sync="items">
            <div id="cell" v-for="item in items">
                <ul>
                    <li cals="taskLi">任务名称：{{item.title}}</li>
                    <li>任务期限：{{item.endDate}}</li>
                    <li>任务状态：{{item.status}}</li>
                    <li>任务操作：<span @click="gototask(item.taskID)">{{item.operate}}</span></li>
                </ul>
            </div>
        </mt-search>
        <!--</router-view>-->
    </div>

</template>
<style>
    .index{
        background:#eee;
    }
    #cell {
        width: 96%;
        height: 80PX;
        margin: 10PX auto;
        background-color: white;
    }

    .taskLi{
        list-style: none;
        font-size: 16px;
        color: #666;
        margin-left: 10px;
    }

</style>
<script type="text/javascript">
    import { Search } from 'mint-ui';
    export default {
        components: {
            [Search.name]: Search,
        },
        methods:{
            gototask:function (id) {

                console.log(this);

                this.$router.push("/task/"+id);
            }
        },
        data(){

            return {
                sValue:" ",
                items: [{taskID:"111111",title: "任务名称", status: "待处理", endDate: "2019／10／24", operate: "编辑"},
                    {taskID:"111111",title: "任务名称", status: "待处理", endDate: "2019／10／24", operate: "编辑"},
                    {taskID:"111111",title: "任务名称", status: "待处理", endDate: "2019／10／24", operate: "编辑"},
                    {taskID:"111111",title: "任务名称", status: "待处理", endDate: "2019／10／24", operate: "编辑"}]
            }
        }
    }
</script>