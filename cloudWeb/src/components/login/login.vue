<template>
 <div class="container">
     <loginHead :headmsg="headmsg"></loginHead>
     <div class="loginContent" v-show="loginContent==1">
         <div class="loginBox">
            <div class="loginForm">
                <div class="tapHead" v-show="tapshow==1">
                    <div v-for='(item,index) in options' :key="item.id" :class="{active:num===index}" @click="tap(index)">{{item}}<p></p></div>
                </div>
                <div class="shows" v-show="tapshow==1">
                    <accountLogin v-show="num==0" :product_id='product_id' :cart='cart' :userView='userView' :activityBrand='activityBrand' :activityLaw='activityLaw' :url='url'></accountLogin>
                    <smsLogin v-show="num==1" :product_id='product_id' :cart='cart' :userView='userView' :activityBrand='activityBrand' :activityLaw='activityLaw' :url='url'></smsLogin>
                </div>
                <div class="otherLogin" v-show="tapshow==1">
                    <!-- <i @click="qqLogin()"></i>
                    <i></i>
                    <i></i>
                    <i></i> -->
                    <span>为世界创新加油</span>
                    <p @click="registerCom()">立即注册</p>
                </div>
                <bindLogin v-if="bindLogin==1"></bindLogin>
                <register v-if="register==1" v-on:emitLogin="loginCom" v-on:registerSuc="successCom"></register>
            </div>
            
        </div>
     </div>
     <success v-if="success==1"  v-on:emitLogin="loginCom"></success>
     <loginFoot></loginFoot>
 </div>
</template>

<script>
import loginHead from '../common/login/loginHead.vue'
import loginFoot from '../common/login/loginFoot.vue'
import accountLogin from '../common/login/accountLogin.vue'
import smsLogin from '../common/login/smsLogin.vue'
import bindLogin from '../common/login/bindLogin.vue'
import register from '../common/login/register.vue'
import success from '../common/login/success.vue'
export default {
metaInfo () {
    return {
        title: '登录-注册-找回密码-创新科技服务云平台',
    }
},
 data() {
  return {
      options:['账号登录',"短信登录"], //tap切换头部
      num:0,
      tapshow:1, //控制登录
      bindLogin:0, //控制绑定
      register:0,  //控制注册
      loginContent:1,//控制登录主内容
      success:0,  //注册成功
      headmsg:"欢迎登陆",
      product_id:'',//商品id
      cart:'',//是否购物车跳转过来
      userView:'',//是否个人中心跳转过来的
      activityBrand:'', //是否双十一活动9日商标专场跳转过来的
      activityLaw:'', //是否双十一活动8日法律专场跳转过来的
      url:''//是哪个url跳转过来的
  }
 },
 created() {
     if(this.$route.query.register!=undefined){
        this.register=this.$route.query.register;
     }
     if(this.register==1){
        this.tapshow=0;
        this.bindLogin=0;
        this.success=0;
        this.headmsg="欢迎注册";
     }
     if(this.$route.query.product_id!=undefined){
         this.product_id=this.$route.query.product_id
         console.log(this.product_id,"this.product_id")
     }
     if(this.$route.query.cart!=undefined){
         this.cart=this.$route.query.cart
         console.log(this.cart,"this.cart")
     }
     if(this.$route.query.userView!=undefined){
         this.userView=this.$route.query.userView
         console.log(this.userView,"this.userView")
     }
     if(this.$route.query.activityBrand!=undefined){
         this.activityBrand=this.$route.query.activityBrand
         console.log(this.activityBrand,"activityBrand")
     }
     if(this.$route.query.activityLaw!=undefined){
         this.activityLaw=this.$route.query.activityLaw
         console.log(this.activityLaw,"activityLaw")
     }
     if(this.$route.query.activityLaw!=undefined){
         this.activityLaw=this.$route.query.activityLaw
         console.log(this.activityLaw,"activityLaw")
     }
     if(this.$route.query.url!=undefined){
         this.url=this.$route.query.url;
         console.log(this.url,"this.url")
     }

 },
 methods: {
      tap:function(index){
          this.num=index
      },
      registerCom:function(){  //注册组件
          this.tapshow=0;
          this.bindLogin=0;
          this.success=0;
          this.register=1;
          this.headmsg="欢迎注册";
      },
      loginCom:function(){   //登录组件
          this.loginContent=1;
          this.tapshow=1;
          this.bindLogin=0;
          this.success=0;
          this.register=0;
          this.headmsg="欢迎登陆";
      },
      successCom:function(val){  //注册
          this.tel=val;
          this.loginContent=0;
          this.success=1;
      },
      qqLogin:function(){   //qq登录
          this.tapshow=0;
          this.bindLogin=1;
          this.success=0;
          this.register=0;
      }
},
 components: {
    'loginHead':loginHead,
    'loginFoot':loginFoot,
    'accountLogin':accountLogin,
    'smsLogin':smsLogin,
    'bindLogin':bindLogin,
    'register':register,
    'success':success
 }
}
</script>

<style scoped lang="scss">
    .loginContent{
        background: url(../../static/images/login/bg-login.jpg) no-repeat center center;
        height: 647px;
        overflow: hidden;
    }
    .loginBox{
        width: 1200px;
        margin: 0 auto;
        .loginForm{
            width: 332px;
            float: right;
            margin-top: 106px;
            margin-right: 100px;
            background: #fde9ec;
            .tapHead{
                border-bottom:1px solid #dddddd;
                div{
                    width: 49%;
                    display: inline-block;
                    font-size: 16px;
                    color:#333;
                    text-align: center;
                    margin:32px 0 14px;
                    position: relative;
                    cursor: pointer;
                    &:nth-child(1){
                        border-right:1px solid #dddddd;
                    }
                    p{
                        position: absolute;
                        width:105px;
                        left: 30px;
                        bottom:-16px;
                        height: 2px;
                        background: #e52e3a;
                        display: none;
                    }
                    &.active{
                       color:#e52e3a;
                       p{
                           display: block;
                       }
                    }
                }
                
                
            }
            .otherLogin{
                margin-top: 35px;
                padding: 19px 23px;
                overflow: hidden;
                background: #fffcfc;
                i{
                    float: left;
                    width: 22px;
                    height: 22px; 
                    background: url(../../static/images/login/xbt.png) no-repeat;
                    cursor: pointer;
                    &~i{
                        margin-left: 12px;
                    }
                }
                i:nth-child(1){
                    background-position: -101px -146px;
                }
                i:nth-child(2){
                    background-position: 0 -146px;
                }
                i:nth-child(3){
                    background-position: -205px -146px;
                }
                i:nth-child(4){
                    background-position: -299px -146px;
                }
                span{
                    font-size: 14px;
                    color: #999999;
                }
                p{
                    float: right;
                    color: #e52e3a;
                    font-size: 14px;
                    cursor: pointer;
                    &:hover{
                        color: #ff3341;
                        font-weight: bold;
                    }
                }
            }
        }
        
    }
    
</style>

