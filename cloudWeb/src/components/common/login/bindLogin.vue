<template>
 <div class="container">
     <div class="head">您好，{{username}}，绑定账号可以实现一键登录哦~</div>
     <h1 class="title">绑定账号</h1>
     <ul>
         <li>
             <div>
                 <p><i class="tel"></i></p><input type="text" v-model="tel"   :class="{active:num1==1}" @click="show()" @blur="blur1" ref="show" @focus="clean"><span v-show="num1==0"  @click="show()">请输入您的手机号码</span>
             </div>
             <var v-show="tips1==1"><em>*</em>请输入用户名</var>
         </li>
         <li>
             <div class="tokenBox">
                 <p> <i class="token"></i></p><input type="text" v-model="token" class="tokenInput"  :class="{active:num2==1}"  @click="show2()" @blur="blur2" @focus="clean2" ref="show2"><span v-show="num2==0"  @click="show2()">请输入验证码</span>
             </div>
             <img src="../../../static/images/login/token.jpg" alt="">
             <var v-show="tips2==1"><em>*</em>请输入验证码</var>
         </li>
         <li>
             <div class="tokenBox">
                 <p> <i class="sms"></i></p><input type="text" v-model="token2" class="tokenInput"  :class="{active:num3==1}"  @click="show3()" @blur="blur3" @focus="clean3" ref="show3"><span v-show="num3==0"  @click="show3()">请输入动态码</span>
             </div>
             <button :class="{downBtn:active==1}" @click="down()" ref='countDown'>{{count}}</button>
             <var v-show="tips3==1"><em>*</em>{{msg}}</var>
         </li>
     </ul>
     <button class="login" >立即绑定</button>
 </div>
</template>

<script>
export default {
 data() {
  return {
      num1:0,  //控制显示隐藏
      num2:0,
      num3:0,
      tel:'',  //input的数据
      pass:'',
      token:'',
      token2:'',
      tips1:0,  //提示信息
      tips2:0,
      tips3:0,
      msg:'请输入动态码',
      username:'qq昵称',
      count:"获取动态码",
      active:0
  
  }
 },
 methods: {
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
        this.token = this.token.replace(reg, ' ');
        this.token2 = this.token2.replace(reg, ' ');
        
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
         this.replaceVal();
        if(this.token==""||this.token==" "){
            this.num2=0;
            this.tips2=1;
        }else{
            this.tips2=0;
        }
     },
     blur3:function(){
         this.replaceVal();
         if(this.token2==""||this.token2==" "){
            this.num3=0;
            this.tips3=1;
        }else{
            this.tips3=0;
        }
     },
     down:function(){
         var num=60;
         this.count=num+"s";
         this.countDown();
         this.active=1;
     },
     countDown:function(){
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
         
     }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
    .head{
        font-size: 12px;
        background: #efdde0;
        text-align: center;
        color: #999;
        height: 35px;
        line-height: 35px;
    }
    .title{
        height: 69px;
        line-height: 69px;
        font-size: 18px;
        text-align: center;
    }
    ul{
        padding: 0 24px;
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
        margin-top: 26px;
        margin-bottom: 36px;
        &:hover{
            background:#ff3341;
        }
    }
</style>
