<template>
    <div>
        <mt-search v-model="value"  cancel-text="取消" placeholder="搜索">
            <applyPositionCell class="applyPositionCell" :item="item" :length="GWDMArray.length" v-for="(item,index) in result"
                               v-on:clickCell="clickCell"></applyPositionCell>

        </mt-search>
    </div>
</template>
<style scoped>
    body {
        background-color: #f9f9f9;
    }
</style>
<script>
    import { Search } from 'mint-ui'
    import API from '../../API'
    import applyPositionCell from '../Components/applyPositionCell.vue'
    export default{
        methods:{
            queryCanApplyJob: function () {
                let requestUrl3 = API.service + API.queryCanApplyJob + '?GWLXDM=' + this.GWLXDM + '&XQDM=' + this.XQDM +
                    '&KEYWORD=' + this.KEYWORD + '&PAGESIZE=' + this.PAGESIZE + '&PAGENUM=' + 1 + '&IDENTITY_ID=' + API.id + '&IDENTITY_TYPE=' + API.type;
                console.log('//  请求可申请的岗位' + requestUrl3);
                this.$http.get(requestUrl3).then(res => {
                    return res.json();

                }).then(res => {
                    this.result = res.data;
                });
            },
            updataValue:function (value) {
                alert(11);

             console.log(v);
            }
            },
        data(){
            return {
                canApplyPositions:[],
                GWLXDM: '',
                XQMC: '',
                KEYWORD: '',
                PAGESIZE: 10,
                result:[],
                value:'',
                GWDMArray: []
            }
        },
        watch:{
          value:function (newValue,oldValue) {
              this.KEYWORD = newValue;
              this.queryCanApplyJob();

          }
        },
        components: {
            [Search.name]:Search,
            applyPositionCell,
        }
    }
</script>