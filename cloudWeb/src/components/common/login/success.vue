<template>
 <div class="container">
     <div class="success">
         <i></i>
         <p><span>注册成功!</span></p>
         <p>
            <span>恭喜您已完成注册！{{num}}秒后将自动跳转到登录页。</span>
            <span class="link" @click="loginCom">去登录<var></var></span>
         </p>
     </div>
 </div>
</template>
<script>
export default {
 data() {
  return {
    num:'3'
  }
 },
 mounted () {
     this.jump();
 },
 methods: {
    jump(){
        //自动跳登录
        var that=this
        var time=setInterval(function(){
            that.num--
            if(that.num==0){
                clearInterval(time);
                that.loginCom();
            }
        },1000)
    },
    loginCom:function(){
         this.$emit('emitLogin'); //返回登录页面
     },
      
 },
}
</script>

<style scoped lang="scss">
    .success{
        text-align: center;
        padding-bottom: 304px;
        i{
            display:block;
            width: 48px;
            height: 48px;
            margin: 141px auto 0;
            background: url(../../../static/images/login/xbt.png) no-repeat -275px -196px;
        }
        p:nth-child(2){
            font-size: 26px;
            margin-top:26px ;
        }
        p:nth-child(3){
            margin-top: 40px;
            .link{
                color:#0066cc;
                font-size: 14px;
                cursor: pointer;
                &:hover{
                    color:#e52e3a;
                    var{
                        background-position: 0 -10.6px;
                    }
                }
                var{
                    display: inline-block;
                    position: relative;
                    top:-1px;
                    left: 4px;
                    width: 4px;
                    height: 7px;
                    background: url(../../../static/images/login/arrow.png) no-repeat 0 0;
                }
            }
        }
    }
</style>
