<template>
 <div class="container">
     <ul>
         <li class="title">会员注册</li>
         <li>
             <div>
                 <p><i class="tel"></i></p><input  maxlength='11' type="text" v-model="tel"   :class="{active:num1==1}" @click="show()" @blur="blur1" ref="show" @focus="clean"><span v-show="num1==0" @click="show()" >请输入您的手机号码</span>
             </div>
             <var v-show="tips1==1"><em>*</em>{{teltips}}</var>
         </li>
         <li>
             <div>
                 <p><i class="pass"></i></p><input type="password" v-model="pass" :class="{active:num2==1}" @click="show2()" @blur="blur2" ref="show2" @focus="clean2"><span v-show="num2==0" @click="show2()" >请输入您的密码</span>
             </div>
             <var v-show="tips2==1"><em>*</em>{{passtips}}</var>
         </li>
         <li>
             <div>
                 <p><i class="pass"></i></p><input type="password" v-model="cofPass" :class="{active:num5==1}" @click="show5()" @blur="blur5" ref="show5" @focus="clean5"><span v-show="num5==0" @click="show5()" >请确认您的密码</span>
             </div>
             <var v-show="tips5==1"><em>*</em>{{cofpasstips}}</var>
         </li>
         <li>
             <div class="tokenBox">
                 <p> <i class="token"></i></p><input type="text" v-model="imgtoken" class="tokenInput"  :class="{active:num3==1}"  @click="show3()" @blur="blur3" ref="show3" @focus="clean3"><span v-show="num3==0" @click="show3()" >请输入验证码</span>
             </div>
             <img :src="imgsrc" alt="" @click="getImgtoken">
             <var v-show="tips3==1"><em>*</em>{{imgtips}}</var>
         </li>
         <li>
             <div class="tokenBox">
                 <p> <i class="sms"></i></p><input type="text" v-model="smstoken" class="tokenInput"  :class="{active:num4==1}"  @click="show4()" @blur="blur4" ref="show4" @focus="clean4"><span v-show="num4==0" @click="show4()" >请输入动态码</span>
             </div>
             <button :class="{downBtn:active==1}" @click="down()" ref='countDown'>{{count}}</button>
             <var v-show="tips4==1"><em>*</em>{{smstips}}</var>
         </li>
     </ul>
     <button class="register"   @click="isRegister">注册</button>
     <div class="checkBox">
         <el-checkbox v-model="checked" class="remeber">我已阅读并接受</el-checkbox>
         <!-- <router-link to="/agreement">[用户注册协议]</router-link> -->
         <a @click="toagreement">[用户注册协议]</a>
         <a @click="toprivacy">[隐私条款]</a>
         <!-- <router-link to="/privacy">[隐私条款]</router-link> -->
     </div>
     <div class="login">
         <span>已有账号，</span>
         <span @click="loginCom">立即登录</span>
     </div>
     <div class="prompt" v-show='prompt==1'>
         <p>尊敬的客户，您好</p>
         <p>欢迎您注册成为中细软云平台用户，在注册前，</p>
         <p>请您仔细阅读
             <!-- <router-link to="/agreement">[用户注册协议]</router-link> -->
            <a @click="toagreement">[用户注册协议]</a>
            <a @click="toprivacy">[隐私条款]</a>
            <!-- <router-link to="/privacy">[隐私条款]</router-link> -->
        </p>
        <p>您同意后可完成注册，感谢！</p>
        <i @click="close()"></i>
        <button @click="close()">确定</button>
     </div>
 </div>
</template>

<script>
import Api from '../../../static/js/api.js'
import {mapActions} from 'vuex';
import {postFn} from '../../../static/js/util.js'
export default {
 data() {
  return {
      num1:0,  //控制显示隐藏
      num2:0,
      num3:0,
      num4:0,
      num5:0,
      tel:'',  //input的数据
      pass:'',
      cofPass:'',
      imgtoken:'', //图形验证码
      smstoken:'',
      checked:true,
      tips1:0,  //提示信息
      teltips:'请输入手机号',
      tips2:0,
      passtips:"请输入密码",
      tips3:0,
      imgtips:'请输入验证码',
      tips4:0,
      smstips:"请输入动态码",
      tips5:0,
      cofpasstips:"请确认你的密码",
      active:0, //按钮提示
      prompt:0, //弹框
      count:"获取动态码", 
      imgsrc:' ',
      postImgtoken:{},
      phptoken:''
  }
 },created() {
    //  Api.getRegToken().then(res=>{
    //      this.phptoken=res.data.data.token;
    //      this.imgsrc="http://konga.o.gbicom.com:8000/user/user/reg/captcha?token="+this.phptoken+"&apikey=592255fd1ca345118376d7bef6e19202"
    //  })
    this.getImgtoken();
 },
  methods: {
      toagreement(){
         window.open(window.location.origin + '/agreement')
      },
      toprivacy(){
          window.open(window.location.origin + '/privacy')
      },
     show:function () {  //控制input输入框提示
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
     show4:function(){
         this.num4=1
         this.$refs.show4.focus();
     },
     show5:function(){
         this.num5=1
         this.$refs.show5.focus();
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
     clean4:function(){
         this.num4=1;
     },
     clean5:function(){
         this.num5=1;
     },
    
      replaceVal:function(){
        var reg = /\s+/g;
        this.tel = this.tel.replace(reg, ' ');
        this.imgtoken = this.imgtoken.replace(reg, ' ');
        this.smstoken = this.smstoken.replace(reg, ' ');
        
     },
     blur1:function(){    //控制失去焦点提示
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
            this.teltips="请输入手机号"
            this.num1=0;
            this.tips1=1;
         }
         
     },
     blur2:function(){
        var reg = /(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,20}/
        if(reg.test(this.pass)){
            this.tips2=0;
            return 
        }else{
            this.passtips="请输入大小写字母、数字或符号的组合,至少8位"
            this.num2=1;
            this.tips2=1;
        }
        if(this.pass==""){
            this.passtips="请输入密码"
            this.num2=0;
            this.tips2=1;
        }
     },
     blur3:function(){
         this.replaceVal();
         if(this.imgtoken==""||this.imgtoken==" "){
            this.num3=0;
            this.tips3=1;
        }else{
            this.tips3=0;
        }
     },
     blur4:function(){
         this.replaceVal();
         if(this.smstoken==""||this.smstoken==" "){
            this.num4=0;
            this.tips4=1;
        }else{
            this.tips4=0;
        }
     },
     blur5:function(){
        if(this.cofPass==""){
            this.cofpasstips="请确认你的密码"
            this.num5=0;
            this.tips5=1;
        }else if(this.cofPass!==this.pass){
            this.cofpasstips="两次输入密码不一致"
            this.num=0,
            this.tips5=1
        }else {
            this.tips5=0;
        }
     },
     down:function(){
         //倒计时以及发送短信
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
         //60S计时器
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
     close:function(){
         this.prompt=0;
     },
     loginCom:function(){
         this.$emit('emitLogin'); //返回登录页面
     },
     isRegister:function(){  //注册判定
        //  this.postImgtoken.token=this.phptoken;
        //  this.postImgtoken.captcha=this.imgtoken;
        //  console.log(this.postImgtoken);
        //  Api.postRegcaptcha(this.phptoken,this.token).then(res=>{
        //      console.log(res)
        //      if(res.data.code==515){
        //          this.msg=res.data.msg
        //          this.tips3=1;
        //      }else if(res.data.code==200){
        //          this.tips3=0;
        //      }
        //  })
        console.log(this.checked)
        if(!this.checked){
            this.prompt=1;
        }else{
            const reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g,reg2=/(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,20}/;
            if(this.tel==" "||this.tel==""||!reg.test(this.tel)){
              this.tips1=1;
            }else if(this.pass==" "||this.pass==""||!reg2.test(this.pass)){
                this.tips2=1;
            }else if(this.imgtoken==" "||this.imgtoken==""){
                this.tips3=1;
            }else if(this.smstoken==" "||this.smstoken==""){
                this.tips4=1;
            }else if(this.cofPass==" "||this.cofPass==""){
                this.tips5=1;
            }else if(this.tips1==0&&this.tips2==0&&this.tips3==0&&this.tips4==0&&this.tips5==0){
                Api.postRegister(this.tel,this.pass,this.phptoken,this.imgtoken,this.smstoken).then(res=>{
                    console.log(res);
                    if(res.data.code==511||res.data.code==512){
                        this.teltips=res.data.msg;
                        this.tips1=1;
                    }else if(res.data.code==513){
                        this.passtips=res.data.msg;
                        this.tips2=1;
                    }else if(res.data.code==515){
                        this.imgtips=res.data.msg;
                        this.tips3=1;
                        this.getImgtoken();
                    }else if(res.data.code==516){
                        this.smstips=res.data.msg;
                        this.tips4=1;
                    }else{
                        console.log(res)
                        this.$emit('registerSuc');
                    }
                })
            }
            
        }
        // postFn("http://konga.o.gbicom.com:8000/user/user/reg/verifycaptcha",this.postImgtoken,function(res){
        //     console.log(res)
        // })
         
     },
     getImgtoken:function(){
         //获取图片验证码
         Api.getRegToken().then(res=>{
            this.phptoken=res.data.data.token;
            this.imgsrc="https://kong.gbicom.com:8443/user/user/reg/captcha?token="+this.phptoken+"&apikey=ZlEqSzeQo1xEo0W3Rqh7t3x8d77UwR3O"
        })
     },
     getSMS(){
         //发送短信
         Api.getRegSms(this.tel).then(res=>{
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
        padding: 14px 24px 26px;
        .title{
            font-size: 18px;
            text-align: center;
            border-bottom: 1px solid #e52e3a;
            line-height: 54px;
        }
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
                        &.pass{
                            background-position:-204px 0;
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
                bottom:-15px;
                left: 0;
                em{
                    margin-right:5px;
                    position: absolute;
                    top:3px;
                    left: 0;
                }
            }
        }
    }
    .register{
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
        &:hover{
            background:#ff3341;
        }
    }
    .checkBox{
        padding: 8px 24px 24px;
        overflow: hidden;
        font-size: 12px;
        .remeber{
            color: #999;
        }
        a{
            color: #e52e3a;
            font-size: 14px; 
            cursor: pointer;
        }
    }
    .login{
        padding-bottom: 23px;
        padding-right: 21px; 
        text-align: right;
        font-size: 12px;
        span:nth-child(1){
            color: #999999;
        }
        span:nth-child(2){
            color:#e52e3a;
            cursor: pointer;
            &:hover{
                color:#ff3341;
                font-weight: bold;
            }
        }
    }
    .prompt{
        background: white;
        border-top: 1px solid #e52e3a;
        position: fixed;
        top:50%;
        left: 50%;
        width: 290px;
        transform: translateX(-50%) translateY(-50%);
        padding: 37px 35px 0px 28px; 
        font-size: 13px;
        color:#333333;
        p:nth-child(1){
            padding-bottom: 29px;
            font-size: 16px;
        }
        p~p{
            margin-bottom: 9px;
        }
        a{
           color:#e52e3a;
           cursor: pointer;
        }
        i{
            width: 13px;
            height: 13px;
            background: url(../../../static/images/login/xbt.png) no-repeat -210px -218px;
            position: absolute;
            top:10px;
            right:10px;
            cursor: pointer;
        }
        button{
            width: 105px;
            display: block;
            margin: 31px auto;
            color: white;
            height: 34px;
            background: #e52e3a;
            outline: none;
            border: none;
            cursor: pointer;
            &:hover{
                background:#ff3341;
            }
        }
    }
</style>
<style>
.el-checkbox__label{
    padding-left: 3px;
}
</style>

