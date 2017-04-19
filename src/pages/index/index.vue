<template>
    <div id="app" class="index">
        <mt-header title="行为记录"></mt-header>
        <div class="menu">
            <span>行为类型：</span>
            <div class="select">
            <select v-model="selected">
                <option value="visit">客户拜访</option>
                <option value="meeting">公司会议</option>
                <option value="office">日常办公</option>
                <option value="activity">市场活动</option>
                <option value="sell">销售支持</option>
                <option value="other">其他</option>
            </select>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
    .index {
        background: #ffffff;
        font-size: 14PX;
    }

    .menu {
        padding: 10PX;
        background: #f9f9f9;
    }

    span {
        display: block;
        width: 100%;
        padding-top: 10PX;
        padding-bottom: 6PX;
    }
    .select{
        border: solid #f9f9f9 1PX;
        width: 100%;
        background: white;
    }
    /*router-view{*/
        /*background: #f9f9f9;*/
    /*}*/
</style>
<script type="text/javascript">
    import {Header} from 'mint-ui';

    export default {
        created() {
            this.$router.push("visit")
        },
        data(){
            return {
                selected: "visit"
            }
        },
        components: {
            [Header.name]: Header,
        },
        watch: {
            selected: function (val) {
                console.log(val);
                this.$router.push(val)
            }
        }
    }
</script>