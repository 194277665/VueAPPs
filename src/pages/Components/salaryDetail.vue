<template>
    <div class="salaryContainer">
        <!--<div>-->
            <!--<div>-->
            <!--<span>图书整理小使者</span>-->
            <!--<span>560</span>-->
            <!--</div>-->
            <!--<div>-->
                <!--<span>工作时间：2017／1／1</span>-->
                <!--<span class="">已获薪资</span>-->
            <!--</div>-->
            <!--<div>-->
            <!--<span>工作地点：图书馆2楼</span>-->
            <!--</div>-->
            <!--<button @click="goToPositionDetail">更多岗位信息</button>-->
        <!--</div>-->
        <table>
            <tr>
                <td></td>
            </tr>
        </table>
        <mt-cell title="薪资明细"></mt-cell>
        <mt-cell v-for="n in 10" title="2015/1/1" value="工作20天 120"></mt-cell>
    </div>
</template >
<style scoped>
    .salaryContainer{
        background-color:#fff;
    }
    button{
        display: block;
        width: 50%;
        height: 30PX;
        background-color: #2196F3;
        border: none;
        color: white;
        margin: 0 auto;
        margin-bottom: 10PX;

    }
</style>
<script>
    import { Cell } from 'mint-ui'
    export default{
        methods:{
            goToPositionDetail:function () {
//                alert('11');
                this.$router.push('/positionDetail');

            }

        },
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            [Cell.name]:Cell
        }
    }
</script>
