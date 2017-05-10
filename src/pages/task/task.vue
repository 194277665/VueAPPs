<template>


    <div class="container">
        <mt-header fixed title="我的任务"></mt-header>
        <div class="containerSecond">
            <!--<p>{{$route.params.taskID}}</p>-->
            <form>
                <section>
                    <h4>任务名称</h4>
                    <p  type="text" v-model="RWMCChange">{{item.RWMC}}</p>
                    <!--<input class="TF" type="text"  v-model="RWMCChange">-->
                    <h4>客户名称</h4>
                    <p  type="text" v-model="KHBH_DISPLAYChange">{{item.KHBH_DISPLAY}}</p>
                    <!--<input class="TF" type="text" v-model="KHBH_DISPLAYChange">-->
                    <h4>工作内容</h4>
                    <p  type="text" :value="item.GZNR" v-model="GZNRChange">{{item.GZNR}}
                    </p>
                        <!--<input class="TF" type="text" :value="item.GZNR" v-model="GZNRChange">-->
                    <h4>任务成果</h4>
                    <input class="TF" type="text" :value="item.RWCG" v-model="RWCGChange">

                    <h4>任务级别</h4>
                    <p>{{item.RWJBDM_DISPLAY}}</p>
                        <!--<input class="TF" type="text" :value="item.RWJBDM_DISPLAY" v-model="RWJBDM_DISPLAYChange">-->
                        <!--<select  v-model="RWJBValue">-->
                        <!--<option v-for="(option,index) in RWJBA" :value="index + 1">{{option}}</option>-->
                        <!--</select>-->

                    <h4>完成时间</h4>
                    <!--<input class="TF" type="text"  :value="item.WCQX" v-model="WCQXChange">-->
                    <mu-date-picker hintText="选择时间" v-model="selectDate"/>

                </section>

                <button @click="clickSave">保存</button>
                <button @click="clickSubmit">提交</button>
                <button @click="clickClose">关闭</button>

            </form>


        </div>
    </div>
</template>
<style>
    body {
        background: #f9f9f9;
    }

    .container {

        width: 100%;
        height: 100%;
        background: #f9f9f9;
    }

    .containerSecond {
        width: 90%;
        margin: 0 auto;
    }

    .containerSecond {
        margin-top: 60PX;
    }

    input {
        width: 100%;
        height: 30PX;
        border: solid #eeeeee 1px;
        font-size: 14PX;
        margin-bottom: 10PX;
        /*padding-left: 10PX;*/
    }
    p{
        width: 100%;
        height: 30PX;
        border: solid #eeeeee 1px;
        font-size: 14PX;
        margin-bottom: 10PX;
        background:  #ffffff;
        line-height: 30PX;

    }

    select {
        /*width: 100%;*/
        height: 30PX;
        font-size: 14PX;
        margin-bottom: 20PX;
        background: white;
    }

    section {
        margin-bottom: 20PX;
    }

    button {
        width: 25%;
        height: 40PX;
        background-color: #2196F3;
        border: none;
        margin-right: 5%;
        border-radius: 10PX;
        color: white;
        outline: none;
        margin-top: 20PX;
    }
</style>
<script>
    import userInfo from '../../userInfo'
    import {Header, Toast, Indicator, DatetimePicker} from 'mint-ui';

    import Vue from 'vue'
    import MuseUI from 'muse-ui'
    import 'muse-ui/dist/muse-ui.css'
    Vue.use(MuseUI)
    import $ from 'jquery';
    export default{
        created(){

            let WID = this.$route.query.WID;
//            let RequestUrl = encodeURI('http://amptest.wisedu.com/pw/sys/yxgl/modules/yddyxgl/T_RWFP_QUERY.do');
            let RequestUrl = encodeURI('./modules/yddyxgl/T_RWFP_QUERY.do');

            let param = {WID: WID}
            console.log(param);
            Indicator.open();
            $.post(RequestUrl, param, (data) => {
                Indicator.close();
                console.log(data.datas.T_RWFP_QUERY.rows);
                this.item = data.datas.T_RWFP_QUERY.rows[0];
                this.RWMCChange = this.item.RWMC;

                this.KHBH_DISPLAYChange = this.item.KHBH_DISPLAY;

                this.GZNRChange = this.item.GZNR;
                this.RWCGChange = this.item.RWCG;
                this.RWJBDM_DISPLAYChange = this.item.RWJBDM_DISPLAY;
                this.WCQXChange = this.item.WCQX;
                this.WCQKDM_DISPLAYChange = this.item.WCQKDM_DISPLAY;
                this.RWJBValue = this.item.RWJBDM;
                this.WCQKValue = this.item.WCQKDM;
                this.selectDate = this.item.WCQX
            });
//            this.$http.post(RequestUrl,param).then(res=>{
//               return res.json();
//
//            }).then(res=>{
//                console.log(res.datas.T_RWFP_QUERY.rows);
//                this.item = res.datas.T_RWFP_QUERY.rows[0];
//                this.RWMCChange = this.item.RWMC;
//
//                this.KHBH_DISPLAYChange = this.item.KHBH_DISPLAY;
//
//                this.GZNRChange = this.item.GZNR;
//                this.RWCGChange = this.item.RWCG;
//                this.RWJBDM_DISPLAYChange = this.item.RWJBDM_DISPLAY;
//                this.WCQXChange = this.item.WCQX;
//                this.WCQKDM_DISPLAYChange = this.item.WCQKDM_DISPLAY;
//                this.RWJBValue =  this.item.RWJBDM;
//                this.WCQKValue = this.item.WCQKDM;
//
//            });


//            $.post('http://amptest.wisedu.com/pw/sys/yxgl/modules/yddyxgl/khbhmccx.do',function (data) {
//                console.log(data);
//            });


        },
        components: {
            [Header.name]: Header,
            [DatetimePicker.name]: DatetimePicker
        },
        methods: {
            clickSave: function () {


                let cg = $('.TF').val();
                let param =
                    {
                        WID: this.item.WID,
//                        ZXRID: '',
                        RWMC: this.item.RWMC,
                        KHBH: this.item.KHBH,
                        GZNR: this.item.GZNR,
                        RWCG: cg,
                        RWJBDM: this.item.RWJBDM,
                        WCQX: this.selectedDate,
                        WCQKDM: this.item.WCQKDM,
                        SFTJ: this.item.SFTJ,
                    }

                Indicator.open();
                //let RequestUrl = encodeURI('http://amptest.wisedu.com/pw/sys/yxgl/modules/yddyxgl/T_RWFP_MODIFY.do');
                $.post('./modules/yddyxgl/T_RWFP_MODIFY.do', param, function (data) {
                    Indicator.close();
                    if (data.code == 0) {
                        Toast('保存成功');
                    }
                });


            },
            clickSubmit: function () {
              let cg = $('.TF').val();
                let param =
                    {
                        WID: this.item.WID,
//                        ZXRID:'',
                        RWMC: this.item.RWMC,
                        KHBH: this.item.KHBH,
                        GZNR: this.item.GZNR,
                        RWCG: cg,
                        RWJBDM: this.item.RWJBDM,
                        WCQX: this.selectedDate,
                        WCQKDM: this.item.WCQKDM,
                        SFTJ: 1,
                        SHZTDM: 1,
                    }
                Indicator.open();

//                let  url = 'http://amptest.wisedu.com/pw/sys/yxgl/modules/yddyxgl/T_RWFP_MODIFY.do';
               let url = './modules/yddyxgl/T_RWFP_MODIFY.do';
                $.post(url, param, function (data) {
                    Indicator.close();
                    if (data.code == 0) {
                        Toast('提交成功');
                    }
                });

            },
            clickClose: function () {
                this.$router.push("/");
            },
            RWMCChange(newValue, oldValue){

            },


            handleConfirm: function () {

            }

        },
        data(){
            return {
                RWJBA: [
                    '很重要很紧急',
                    '很重要不紧急',
                    '不重要很紧急',
                    '不重要不紧急'
                ],
                WCQKA: [
                    '已完成',
                    '未完成',
                ],
                item: {},

                RWMCChange: '',

                KHBH_DISPLAYChange: '',

                GZNRChange: '',
                RWCGChange: '',
                RWJBDM_DISPLAYChange: '',
                WCQXChange: '',
                WCQKDM_DISPLAYChange: '',
                RWJBValue: '',
                WCQKValue: '',
//                pickerValue:new Date("January 12,2006 22:19:35"),
                selectDate: '',
            }
        },
        watch: {
            RWJBValue: function (val) {
                this.item.RWJBDM = val;

            },

            WCQKValue: function (val) {
                console.log(val);
                this.item.WCQKDM = val;

            },

        },
        filters: {
            filterFun(value) {
                if (value == 1)
                {
                    return '很重要很紧急';
                }else if (value == 2){
                    return '很重要不紧急';
                }else if (value ==3)
                {
                    '不重要很紧急';
                }else
                {
                    '不重要不紧急'

                }
            },

        }
    }
</script>
