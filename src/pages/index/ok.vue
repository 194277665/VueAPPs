<template>

    <div class="container">
        <img src="../../../static/images/Yes.png">
        <mt-button class="mt-button" @click.native="goToIndex">返回我的岗位</mt-button>
    </div>
    </div>
</template>
<style scoped>
    body {
        background-color: #ff0000;
    }
    .container{
        background: #f9f9f9;
        text-align: center;
    }

    img{
        display: block;
        width: 40%;
        height: 40%;
        margin: 30PX auto;
    }
    .mt-button{
        border: solid #56C2AF 1PX;
        color:#56C2AF ;
        width: 90%;
        height: 40PX;
    }
</style>
<script>
    import { Button } from 'mint-ui'
    import draggable from 'vuedraggable'
    export default{
        methods:{
            goToIndex:function () {
                this.$router.push('/');
            },
            add: function(){
                this.list.push({name:'Juan'});
            },
            replace: function(){
                this.list=[{name:'Edgard'}]
            }
        },
        data(){
            return {
                list:[{name:"John"},
                    {name:"Joao"},
                    {name:"Jean"} ]
            }
        },
        components: {
        [Button.name]:Button,
            draggable
        }
    }
</script>