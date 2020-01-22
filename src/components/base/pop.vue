<template>
    <div class="pop">
        <transition name="fade">
            <div v-if="selfPop" class="main">
                <div class="msg">{{msg}}</div>
                <div class="btn" @click.stop.self="closePop">
                    确定
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
	export default {
        props:["msg","isPop"],
        data(){
            return {
                selfPop:true
            }
        },
        mounted(){
        },
        methods:{
            closePop(){
                window.console.log(6666)
                this.selfPop = false;
                this.$emit("closePop");
            }
        },
	}
</script>
<style lang="scss">
@import '~@/assets/scss/util';
/* 动画开始前 和 结束时刻 */
.fade-enter,.fade-leave-to{
    opacity: 0;
}
/* 元素进场时 和  元素离场时 */
.fade-enter-active,.fade-leave-active{
    transition: all .5s;
}
.pop{
    z-index:999;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color: rgba($color: #000000, $alpha:0.5);
    .main{
        width:85%;
        height: 32vw;
        background-color: white;
        position: absolute;
        border-radius: 3vw; 
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        .msg{
            height:60%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .btn{
            height:30%;
             display: flex;
            align-items: center;
            justify-content: center;
            color: #376efe;
        }
    }
}
</style>
