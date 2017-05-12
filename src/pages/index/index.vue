<template>
    <div id="app" class="index">
        <!--<router-view>-->
        <mt-search v-model="value" cancel-text="取消" placeholder="搜索" show>
            <div class="cellDiv" v-for="(item,index) in items">
                <ul>
                    <li cals="taskLi">任务名称：{{item.RWMC}}</li>
                    <li>任务期限：{{item.WCQX}}</li>
                    <li>任务状态：{{item.WCQKDM_DISPLAY}}</li>
                    <li v-show="(item.SFTJ == '0') || (item.SHZTDM == '3')">任务操作：<span class="edit"
                                                                                                         @click="gototask(index)">编辑</span>
                    </li>
                </ul>
            </div>
        </mt-search>
        <!--</router-view>-->
    </div>

</template>
<style>
    .index {
        background: #eee;
    }

    .cellDiv {
        width: 96%;
        height: auto;
        margin: 10PX auto;
        background-color: white;
        /*padding: 10PX;*/
    }

    li {
        list-style: none;
        font-size: 20px;
        color: #666;
        /*margin-left: 10px;*/
        padding: 3PX;
    }

    .edit {

        color: #0a6bb7;
    }

</style>
<script type="text/javascript">
    import {Search, Indicator} from 'mint-ui';
    import $ from 'jquery';
    export default {
        created(){


//
//                        var Url = 'http://amptest.wisedu.com/pw/sys/yxgl/modules/yddyxgl/yddrwlbcx.do';
            var Url = './modules/yddyxgl/yddrwlbcx.do';
                         Indicator.open();
                        $.post(Url, (data) => {
                            Indicator.close();
                            this.items = data.datas.yddrwlbcx.rows;
                        });


//                    });
//
//                })


        },
        components: {
            [Search.name]: Search,
            [Indicator.name]: Indicator,
        },
        methods: {
            parseQueryString(url){
                var obj = {};
                var start = url.indexOf("?") + 1;
                var str = url.substr(start);
                var arr = str.split("&");
                for (var i = 0; i < arr.length; i++) {
                    var arr2 = arr[i].split("=");
                    obj[arr2[0]] = arr2[1];
                }
                return obj;
            },

            gototask: function (index) {
                this.$router.push({path: "/task", query: {WID: this.items[index].WID}});
            },
            searchTask(keyWord){

//                var Url = encodeURI('http://amptest.wisedu.com/pw/sys/yxgl/modules/yddyxgl/wdrwcx.do');
                var Url = encodeURI('./modules/yddyxgl/T_RWFP_QUERY.do');
                var param = {RWMC: this.value}
                Indicator.open();
                $.post(Url, param, (data) => {
                    Indicator.close();
                    this.items = data.datas.wdrwcx.rows;
                });
            }
        },
        data(){

            return {
                value: '',
                items: []
            }
        },
        watch: {
            value: function (val) {
                console.log(val);
                this.searchTask(val);

            }
        },
    }
</script>