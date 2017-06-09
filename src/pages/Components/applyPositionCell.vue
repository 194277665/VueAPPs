<template>
    <div class="container" v-on:click="clickCell">
        <div class="left">
            <span>
                 <i class="iconfont check-box-selected" v-if="flag">&#xe68c;</i>
                 <i class="iconfont check-box-unselected" v-else="!flag">&#xe672;</i>
            </span>
        </div>
        <div class="middle">
            <div class="line">
                <span class="gwmc">{{item.GWMC}}</span>
            </div>
            <div class="line">
                <span class="from-where">来自:{{item.DWDM_DISPLAY}}</span>
            </div>
            <div class="line">
                <span class="campus">{{item.XQMC_DISPLAY}}</span>
            </div>

        </div>
        <div class="right">
            <span class="money">{{item.BCBZ}}</span><span class="danwei">元/每月</span>
        </div>
    </div>
</template>
<style scoped>
    body {
        background-color: #ff0000;
    }

    .container {
        width: 100%;
        height: auto;
        background: #fff;
        display: flex;
        justify-content: center;
    }

    .left {
        width: 10%;
        height: auto;

    }
    .left>span{
        width: 100%;
        display: block;
        line-height: 60PX;
        text-align: center;
    }

    .check-box {
        /*display: block;*/
        /*width: 50%;*/
        /*height: 50%;*/
        /*margin: 40%;*/
        /*box-sizing: border-box;*/
        font-size: 20PX;
        color: #939393;
        line-height: 100%;

    }

    .middle {
        width: 60%;
        height: auto;
        padding: 10PX;
    }

    .middle > .line {
        width: 100%;
        height: auto;
        padding: 3PX;
        font-size: 14PX;
        padding: 2PX;
    }
    .campus{
        display: inline-block;
        border: solid #93D36E 1PX;
        color: #93D36E;
        font-size: 14PX;

    }

    .right {
        width: 30%;
        height: auto;

    }
    .money{
        display: inline-block;
        width: 50%;
        height: 100%;
        line-height: 100%;
        padding: 10PX;
        color: red;
        font-size: 18PX;
        text-align: right;
    }
    .check-box-selected{
        font-size: 25PX;
        color: #56C2AF;

    }
    .check-box-unselected{
        font-size: 25PX;
        color: #f5f5f5;

    }
    .gwmc{
        font-size: 18PX;
    }
    .from-where{
        font-size: 14PX;
    }
    .danwei{
        color: #939393;
    }




</style>
<script>
    export default{
        created(){
//
//
//            console.log('created -----'+this.GWDMArray);
//            for(let i = 0;i<this.GWDMArray.length;i++)
//            {
//                if(this.item.GWDM == this.GWDMArray[i].GWDM)
//                {
//                    this.cellIsSelected = true;
//                    return;
//                }
//            }

        },
        methods: {
            clickCell:function () {
//
//                let exist = false;
//                let existIndex;
//                for(let i = 0; i<this.GWDMArray.length; i++)
//                {
//                    if(this.item.GWDM == this.GWDMArray[i].GWDM)
//                    {
//                        exist = true;
//                        existIndex = i;
//                    }
//                }
//                this.cellIsSelected = exist;
//                if(exist){
//                    this.GWDMArray.splice(existIndex,1);
//
//                }else {
//                    this.GWDMArray.push(this.item);
//                }



                this.$emit('clickCell', this.item);

//                if(this.length>2)
//                {
//                    this.cellIsSelected = false;
//                }else {
//                    this.cellIsSelected = !this.cellIsSelected;
//                }
            }

        },
        data(){
            return {
                cellIsSelected:false,
            }

        },
        components: {

        },
        props: ['item','length','GWDMArray', 'flag'],

    }
</script>