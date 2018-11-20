<template>
 <div class="container" @keyup.enter="login">
     <ul>
         <li>
             <div>
                 <p><i class="tel"></i></p><input type="text" v-model="tel"   :class="{active:num1==1}" @click="show()" @blur="blur1"  @focus="clean"   ref="show" ><span v-show="num1==0" @click="show()">请输入您的用户名/手机号码</span>
             </div>
             <var v-show="tips1==1"><em>*</em>{{logintips}}</var>
         </li>
         <li>
             <div>
                 <p><i class="pass"></i></p><input type="password" v-model="pass" :class="{active:num2==1}" @click="show2()" @blur="blur2" @focus="clean2" ref="show2"><span v-show="num2==0" @click="show2">请输入您的密码</span>
             </div>
             <var v-show="tips2==1"><em>*</em>{{passtips}}</var>
         </li>
         <li>
             <div class="tokenBox">
                 <p> <i class="token"></i></p><input type="text" v-model="imgtoken" class="tokenInput"  :class="{active:num3==1}"  @click="show3()" @focus="clean3" @blur="blur3" ref="show3"><span v-show="num3==0"  @click="show3">请输入验证码</span>
             </div>
             <img :src="imgsrc" alt="" @click="getImgtoken">
             <var v-show="tips3==1"><em>*</em>{{imgtips}}</var>
         </li>
         <li class="tips">  <var v-show="tipsT==1"><em>*</em>账号或密码错误</var></li>
     </ul>
     <div class="checkBox">
        <el-checkbox v-model="checked" class="remeber">记住密码</el-checkbox>
        <router-link to="/findPassword" class="link">忘记密码</router-link>
     </div>
     <button class="login" @click="login">登录</button>
 </div>
</template>

<script>
import Api from '../../../static/js/api.js'
import {mapActions} from 'vuex';
import { setCookie,postFn } from "../../../static/js/util.js"
export default {
props: ['product_id','cart','userView','activityBrand','activityLaw','url'],
 data() {
  return {
      num1:0,  //控制显示隐藏
      num2:0,
      num3:0,
      tel:'',  //input的数据
      pass:'',
      imgtoken:'',
      checked:'',
      tips1:0,  //提示信息
      logintips:'请输入用户名',
      tips2:0,
      passtips:"请输入密码",
      tips3:0,
      imgtips:"请输入验证码",
      tipsT:0, 
      phptoken:"",//临时token
      imgsrc:"",
  }
 },
 created () {
    this.getImgtoken();  
    console.log(this.url,"url");
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
        this.tipsT=0;
     },
     clean2:function(){
        this.num2=1;
        this.tipsT=0;
     },
     clean3:function(){
        this.num3=1;
        this.tipsT=0;
     },
     replaceVal:function(){
        var reg = /\s+/g;
        this.tel = this.tel.replace(reg, ' ');
        this.imgtoken = this.imgtoken.replace(reg, ' ');
     },
     blur1:function(){
         this.replaceVal();
         if(this.tel==""||this.tel==" "){
            this.num1=0;
            this.tips1=1;
         }else{
            this.tips1=0;
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
     getImgtoken:function(){
         //获取图片二维码
         Api.getLogToken().then(res=>{
         this.phptoken=res.data.data.token;
         this.imgsrc="https://kong.gbicom.com:8443/user/user/login/captcha?token="+this.phptoken+"&apikey=ZlEqSzeQo1xEo0W3Rqh7t3x8d77UwR3O"
         })
     },
     login:function(){
         //登录
         const that = this;
         var reg = /(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,20}/
         if(this.tel==" "||this.tel==""){
             this.tips1=1;
         }else if(this.pass==" "||this.pass==""||!reg.test(this.pass)){
             this.tips2=1;
         }else if(this.imgtoken==" "||this.imgtoken==""){
             this.tips3=1;
         }else{
             Api.postLog(this.tel,this.pass,this.imgtoken,this.phptoken).then(res=>{
                console.log(res);
                if(res.data.code==511||res.data.code==521){
                        this.logintips=res.data.msg;
                        this.tips1=1;
                }else if(res.data.code==513||res.data.code==522){
                    this.tipsT=1;
                }else if(res.data.code==515){
                    this.imgtips=res.data.msg;
                    this.tips3=1;
                    this.getImgtoken();  
                }else if(res.data.code==200){
                    this.update_userInfo(res.data.data)
                    this.update_isLogin(true);
                    setCookie('token',res.data.data.Authorization,1);
                    if(this.checked){
                        setCookie('token',res.data.data.Authorization,7);
                    }
                    //获取购物车数量
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
                        console.log('触发url了')
                        this.$router.push({path:this.url});
                    }else{
                      this.$router.push('/');
                    }
                }
            })
         }
         
     }
 },
components: {

}
}
</script>

<style scoped lang="scss">
    ul{
        padding: 24px 24px 0;
        position: relative;
        li~li{
            margin-top:20px; 
        }
        li{
            position: relative;
            &.tips{
                position: absolute;
                top:-17px;
                left:115px;
                width: 120px;
            }
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
                    z-index: 3;
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
    .checkBox{
        padding: 24px 24px;
        overflow: hidden;
        .remeber{
            color: #999;
        }
        .link{
            float: right;
            color: #999;
            font-size: 14px; 
            &:hover{
                color:#ff3341;
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
        &:hover{
            background:#ff3341;
        }
    }
</style>
