<template>
 <div class="container">
     <p>已绑定的手机号码:{{telrep}}</p>
     <ul>
         <li>
            <div class="tokenBox">
            <i>验证码 :</i><input type="text" v-model="imgtoken" class="tokenInput"  :class="{active:num1==1}"  @click="show()" @blur="blur1" ref="show" @focus="clean"><span v-show="num1==0" @click="show()">请输入验证码</span>
            </div>
            <img :src="imgsrc" alt="" @click="getImgtoken">
            <span class="tips">看不清？<em @click="getImgtoken">换一张</em></span>
            <var v-show="tips1==1"><em>*</em>{{imgtips}}</var>
        </li>
        <li>
            <div class="tokenBox">
            <i>手机验证码 :</i><input type="text" v-model="smstoken" class="tokenInput"  :class="{active:num3==1}"  @click="show3()" @blur="blur3" ref="show3" @focus="clean3"><span v-show="num3==0" @click="show3()">请输入验证码</span>
            </div>
            <button  :class="{downBtn:active==1}" @click="down()" ref='countDown'>{{count}}</button>
            <var v-show="tips3==1"><em>*</em>{{smstips}}</var>
        </li>
     </ul>
     <div class="btnBox">
        <button @click="next()" >下一步</button>
    </div>
 </div>
</template>

<script>
import Api from '../../../static/js/api.js'
export default {
props:['tel'],
 data() {
  return {
      imgtoken:'',
      smstoken:'',
      num1:0,
      num3:0,
      tips1:0,
      tips3:0,
      active:0,
      count:"获取动态码",
      phptoken:'',
      imgsrc:'',
      imgtips:'请输入验证码',
      smstips:'请输入动态码'
  }
 },
 created() {
     this.getImgtoken();
 },
 methods: {
     show:function () {
         this.num1=1
         this.$refs.show.focus();
     },
     show3:function () {
         this.num3=1
         this.$refs.show3.focus();
     },
     clean:function(){
         this.num1=1;
     },
     clean3:function(){
         this.num3=1;
     },
     replaceVal:function(){
        var reg = /\s+/g;
        this.imgtoken = this.imgtoken.replace(reg, ' ');
        this.smstoken = this.smstoken.replace(reg, ' ');
     },
     blur1:function(){
         this.replaceVal();
         if(this.imgtoken==""||this.imgtoken==" "){
            this.num1=0;
            this.tips1=1;
         }else{
            this.tips1=0;
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
         if(this.tel==undefined){
             return
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
     next:function(){
         //下一步
        if(this.imgtoken==" "||this.imgtoken==""){
            this.tips1=1;
        }else if(this.smstoken==" "||this.smstoken==""){
            this.tips3=1;
        }else if(this.tips1==0&&this.tips3==0){
            Api.postSec(this.tel,this.phptoken,this.smstoken,this.imgtoken).then(res=>{
                console.log(res);
                if(res.data.code==516){
                    this.smstips=res.data.msg;
                    this.tips3=1;
                }else if(res.data.code==515){
                    this.imgtips=res.data.msg;
                    this.tips1=1;
                    this.getImgtoken();
                }else if(res.data.code==200){
                    this.$emit('next',this.tel)
                }
            })
        }
        //  this.$emit("next",this.tel)
     },
     getImgtoken:function(){
         //获取图片验证码
         Api.getSecToken().then(res=>{
         this.phptoken=res.data.data.token;
         this.imgsrc="https://kong.gbicom.com:8443/user/user/security/captcha?token="+this.phptoken+"&apikey=ZlEqSzeQo1xEo0W3Rqh7t3x8d77UwR3O"
         })
     },
     getSMS(){
         //发送短信
         Api.getSecSms(this.tel).then(res=>{
             console.log(res)
         })
     }
 },
 computed:{
     telrep(){
         return (this.tel+"").replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
     }
 }
}
</script>

<style scoped lang="scss">
    p{
        width: 650px;
        margin: 0 auto 27px;
    }
     ul{
        width: 490px;
        margin: 0 auto;
        li{
            position: relative;
            &~li{
                margin-top:20px; 
            }
            &:nth-child(2){
                .tokenBox{
                    i{
                        left:-26px;
                    }
                }
            }
            div{
                font-size: 14px;
                color:#bbb;
                position: relative;
                background: white;
                width: 266px;
                input{
                    width: 186px;
                    height: 36px;
                    line-height: 38px;
                    padding-left: 12px;
                    margin-left: 59px;
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
                    left:70px;
                    z-index: 0;
                }
                i{
                    color: #333;
                }
            }
            .tips{
                font-size: 14px;
                color:#999999;
                padding-left: 18px;
                em{
                    color: #0066cc;
                    cursor: pointer;
                }
            }
            .tokenBox{
                display: inline-block;
                position: relative;
                &+img{
                    width: 90px;
                    height: 36px;
                    margin-top: -2px;
                        border: 1px solid #cccccc;
                }
                i{
                    position: absolute;
                    left:0;
                    bottom: 13px;
                }

            }
            var{
                color:#ff3333;
                font-size:12px;
                position: absolute;
                padding-left: 10px;
                left:47px;
                bottom:-15px;
                left: 0;
                em{
                    margin-right:5px;
                    position: absolute;
                    top:3px;
                    left: 0;
                }
            }
            button{
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
    .btnBox{
        width: 490px;
        margin: 26px auto 238px;
        button{
            width: 76px;
            height: 28px;
            border: 1px solid #7abd54;
            outline: none;
            background: #f4ffee;
            font-size: 14px;
            cursor: pointer;
            &:hover{
                background:#7abd54;
                color: white;
            }
        }
    }
</style>
