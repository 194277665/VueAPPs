<template>
    <div class="container">
        <mt-header fixed title="我的任务"></mt-header>
        <div class="containerSecond">
            <!--<p>{{$route.params.taskID}}</p>-->
            <form>
                <section v-for="(item, index) in items">
                    <h4>
                        {{item.title}}:
                    </h4>
                    <input class="TF" type="text" v-if="index < (items.length- 1)" :value="item.detail" >
                    <select name="" v-else>
                        <option value="0" v-for="option in item.options">{{option}}</option>
                    </select>
                </section>

                <button @click="clickSave">保存</button>
                <button @click="clickSubmit">提交</button>
                <button @click="clickClose">关闭</button>

            </form>
        </div>
    </div>
</template>
<style>
    body{
        background-color: #f9f9f9;
    }
    .containerSecond{
        width: 90%;
        margin: 0 auto;
    }
    .containerSecond{
        margin-top: 60PX;
    }
    input{
        width: 100%;
        height: 30PX;
        border: solid #eeeeee 1px;
        font-size: 14PX;
        margin-bottom: 10PX;
        padding-left: 10PX;
    }
    select{
        width: 100%;
        height: 30PX;
        font-size: 14PX;
        margin-bottom: 20PX;
        background: white;
    }
    button{
        width: 25%;
        height: 40PX;
        background-color: #2196F3;
        border: none;
        margin-right: 5%;
        border-radius: 10PX;
        color: white;
        outline: none;
    }
</style>
<script>
    import { Header } from 'mint-ui';
    import $ from 'jquery';
    export default{
        components:{
            [Header.name]:Header,
        },
        methods:{
            clickSave:function () {
                var val = $(".TF");
                val.each(function (index,value) {
                    var de = value;
                    console.log(index+'-------'+$(de).val())
                });

                console.log(val);
//                ;.val();
                alert(val);

//              alert("点击保存");


            },
            clickSubmit:function () {
                alert("点击提交");
            },
            clickClose:function () {
                this.$router.push("/index");
            }
        },
        data(){
            return{
                items:[
                    {title:"任务名称",detail:"我的任务"},
                    {title:"客户名称",detail:"南京小庄学院"},
                    {title:"工作内容",detail:"期末考试监考"},
                    {title:"任务成果",detail:"取得一定成果"},
                    {title:"任务级别",detail:"最高任务级别--SSS"},
                    {title:"完成时间",detail:"2017-13-35"},
                    {title:"完成情况",detail:"完美完成",options:["没完成","已完成","完美完成"] }
                ],

            }
        }
    }
</script>
