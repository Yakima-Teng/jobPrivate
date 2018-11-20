<template>
 <div class="container">
     <div class="success">
         <i></i>
         <p><span>密码修改成功!</span></p>
         <p>
            <span>恭喜您已完成注册！{{num}}秒后将自动跳转到登录页</span>
            <router-link to="/login" class="link">去登录<var></var></router-link>
         </p>
     </div>
 </div>
</template>

<script>
// import vuexAlong from 'vuex-along'
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
          //自动跳转登录页
        var that=this
        var time=setInterval(function(){
            that.num--
            if(that.num==0){
                clearInterval(time);
                that.$router.push('/login')
            }
        },1000)
    },
 },
 created() {
     this.$store.dispatch('update_isLogin', false);
     this.$store.dispatch('update_userInfo', '');
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
    .success{
        text-align: center;
        padding-top: 50px;
        i{
            display:block;
            width: 48px;
            height: 48px;
            margin: 0 auto;
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
                &:hover{
                    color:#e52e3a;
                    var{
                        background-position: 0 -11px;
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
