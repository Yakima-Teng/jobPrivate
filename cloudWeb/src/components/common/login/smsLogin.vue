<template>
 <div class="container" @keyup.enter="login">
     <ul>
         <li>
             <div>
                 <p><i class="tel"></i></p><input type="text" v-model="tel" maxlength="11"  :class="{active:num1==1}" @click="show()" @blur="blur1" ref="show" @focus="clean"><span v-show="num1==0" @click="show()">请输入您的手机号码</span>
             </div>
             <var v-show="tips1==1"><em>*</em>{{teltips}}</var>
         </li>
         <li>
             <div class="tokenBox">
                 <p> <i class="token"></i></p><input type="text" v-model="imgtoken" class="tokenInput"  :class="{active:num2==1}"  @click="show2()" @blur="blur2" ref="show2" @focus="clean2"><span v-show="num2==0" @click="show2()">请输入验证码</span>
             </div>
             <img :src="imgsrc" alt="" @click="getImgtoken">
             <var v-show="tips2==1"><em>*</em>{{imgtips}}</var>
         </li>
         <li>
             <div class="tokenBox">
                 <p> <i class="sms"></i></p><input type="text" v-model="smstoken" class="tokenInput"  :class="{active:num3==1}"  @click="show3()" @blur="blur3" ref="show3" @focus="clean3"><span v-show="num3==0" @click="show3()">请输入动态码</span>
             </div>
             <button :class="{downBtn:active==1}" @click="down()" ref='countDown'>{{count}}</button>
             <var v-show="tips3==1"><em>*</em>{{smstips}}</var>
         </li>
     </ul>
     <button class="login" @click="login">登录</button>
 </div>
</template>

<script>
import Api from '../../../static/js/api.js'
import {mapActions} from 'vuex';
import { setCookie,delCookie,getCookie,postFn } from "../../../static/js/util.js"
export default {
 props: ['product_id','cart','userView','activityBrand','activityLaw','url'],
 data() {
  return {
      num1:0,  //控制显示隐藏
      num2:0,
      num3:0,
      tel:'',  //input的数据
      imgtoken:'',
      smstoken:'',
      tips1:0,  //提示信息
      teltips:"请输入手机号码",
      tips2:0,
      imgtips:"请输入验证码",
      tips3:0,
      smstips:'请输入动态码',
      active:0,
      count:"获取动态码",
      phptoken:"",//临时token
      imgsrc:"",
  }
 },
 created () {
    this.getImgtoken();  
 },
 methods: {
     ...mapActions(['update_userInfo','update_num','update_isLogin']),
     show:function () {
         this.num1=1
         this.$refs.show.focus();
     },
     show2:function () {
         this.num2=1
         this.$refs.show2.focus();
     },
     show3:function () {
         this.num3=1
         this.$refs.show3.focus();
     },
     clean:function(){
         this.num1=1;
     },
     clean2:function(){
         this.num2=1;
     },
     clean3:function(){
         this.num3=1;
     },
     replaceVal:function(){
        var reg = /\s+/g;
        this.tel = this.tel.replace(reg, ' ');
        this.imgtoken = this.imgtoken.replace(reg, ' ');
        this.smstoken = this.smstoken.replace(reg, ' ');
        
     },
     blur1:function(){
         this.replaceVal();
         var reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g;
         if(reg.test(this.tel)){
             this.tips1=0;
             return
         }else{
             this.teltips="手机号格式错误"
             this.num1=1;
             this.tips1=1;
         }
         if(this.tel==""||this.tel==" "){
            this.teltips="请输入手机号码"
            this.num1=0;
            this.tips1=1;
         }
     },
     blur2:function(){
         this.replaceVal();
        if(this.imgtoken==""||this.imgtoken==" "){
            this.num2=0;
            this.tips2=1;
        }else{
            this.tips2=0;
        }
     },
     blur3:function(){
         this.replaceVal();
         if(this.smstoken==""||this.smstoken==" "){
            this.num3=0;
            this.tips3=1;
        }else{
            this.tips3=0;
        }
     },
     down:function(){
         //发送短信验证码以及倒计时
         if(this.tel==""||this.tel==" "){
            this.teltips="请输入手机号码"
            this.num1=0;
            this.tips1=1;
            this.$refs.show.focus();
         }else{
            this.getSMS();
            var num=60;
            this.count=num+"s";
            this.countDown();
            this.active=1;
         }
         
     },
     countDown:function(){
         //倒计时
         var num=60;
         this.$refs.countDown.setAttribute("disabled","disabled");
         var that=this;
         var countDown=setInterval(function(){
             num--
             that.count=num+"s";
             if(num==0){
                that.count="获取动态码"
                that.active=0;
                that.$refs.countDown.removeAttribute("disabled");
                clearInterval(countDown);
            }
         },1000)
         
     },
     getImgtoken:function(){
         //获取图片验证码
         Api.getLogToken().then(res=>{
         this.phptoken=res.data.data.token;
         this.imgsrc="https://kong.gbicom.com:8443/user/user/login/captcha?token="+this.phptoken+"&apikey=ZlEqSzeQo1xEo0W3Rqh7t3x8d77UwR3O"
         })
     },
     login:function(){
         //登录
         const that = this;
         const reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g
         if(this.tel==" "||this.tel==""||!reg.test(this.tel)){
             this.tips1=1;
         }else if(this.imgtoken==" "||this.imgtoken==""){
             this.tips2=1;
         }else if(this.smstoken==" "||this.smstoken==""){
             this.tips3=1;
         }else{
             delCookie('token');
             Api.postLogSms(this.tel,this.smstoken,this.imgtoken,this.phptoken).then(res=>{
                console.log(res);
                if(res.data.code==511||res.data.code==521){
                    this.teltips=res.data.msg;
                    this.tips1=1;
                }else if(res.data.code==515){
                    this.imgtips=res.data.msg;
                    this.tips2=1;
                    this.getImgtoken();
                }else if(res.data.code==516){
                    this.smstips=res.data.msg;
                    this.tips3=1;
                }else if(res.data.code==200){
                    this.update_userInfo(res.data.data)
                    setCookie('token',res.data.data.Authorization,1);
                    this.update_isLogin(true);
                        //  登录成功后获取购物车数量
                    const userData = {
                        uid:res.data.data.id
                    }
                    postFn('/product/cart/cart_num',userData,function(r){
                        if(r.data.code==200){
                           that.update_num(r.data.data)
                        }
                    })
                    if(this.product_id!=""){
                        this.$router.push('/'+this.product_id);
                    }else if(this.cart){
                         this.$router.push('/cart');
                    }else if(this.userView){

                         this.$router.push('/home');

                    }else if(this.activityBrand){
                        this.$router.push('/DoubleEleven/BR09');
                    }else if(this.activityLaw){
                        this.$router.push('/DoubleEleven/LA08');
                    }else if(this.url!=''){
                        this.$router.push({path:this.url});
                    }else{
                      this.$router.push('/');
                    }
                }
            })
         }
     },
     getSMS(){
         //发送短信
         Api.getLoginSms(this.tel).then(res=>{
             console.log(res);
         })
     }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
    ul{
        padding: 24px 24px 0;
        li~li{
            margin-top:20px; 
        }
        li{
            position: relative;
            div{
                font-size: 14px;
                color:#bbb;
                position: relative;
                background: white;
                width: 282px;
                p{
                    width: 38px;
                    height: 38px;
                    background: #cccccc;
                    display: inline-block;
                    vertical-align: top;
                    text-align: center;
                    i{
                        width: 16px;
                        height: 20px;
                        margin-top: 9px;
                        display: inline-block;
                        background: url(../../../static/images/login/xbt.png) no-repeat;
                        &.tel{
                            background-position: -93px 0;
                        }
                        &.token{
                            background-position:-305px 0;
                        }
                        &.sms{
                            background-position:-105px -214px;
                        }
                    }
                }
                input{
                    width: 230px;
                    height: 36px;
                    line-height: 38px;
                    padding-left: 12px;
                    border-left: none;
                    position: relative;
                    background: transparent;
                    z-index: 1;
                    border:1px solid #cccccc;
                    &.active+span{
                        display: none;
                    }
                }
                span{
                    position: absolute;
                    top:12px;
                    left:52px;
                    z-index: 0;
                }
                &.tokenBox{
                    width: 187px;
                    display: inline-block;
                    input{
                        width: 135px;
                    }
                    &+img{
                        width: 90px;
                        height: 36px;
                        margin-top: -2px;
                        border: 1px solid #cccccc;
                        cursor: pointer;
                         display: inline-block;
                    }
                    &+button{
                        width: 90px;
                        height: 36px;
                        margin-top: -2px;
                        border: 1px solid #cccccc;
                        background: white;
                        color:#e52e3a;
                        cursor: pointer;
                        outline: none;
                        &.downBtn{
                            color:#999;
                            cursor: wait;
                        }
                    }
                }
            }
            var{
                color:#ff3333;
                font-size:12px;
                position: absolute;
                padding-left: 10px;
                left: 0;
                bottom:-15px;
                em{
                    margin-right:5px;
                    position: absolute;
                    top:3px;
                    left: 0;
                }
            }
        }
    }
    .login{
        display: block;
        font-size: 18px;
        width: 285px;
        margin: 0 auto;
        text-align: center;
        color:#ffffff;
        background: #e52e3a;
        height: 38px;
        outline: none;
        cursor: pointer;
        border: none;
        margin-top: 54px;
        &:hover{
            background:#ff3341;
        }
    }
</style>
