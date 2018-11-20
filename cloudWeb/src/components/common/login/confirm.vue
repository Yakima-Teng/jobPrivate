<template>
 <div class="container">
     <ul>
         <li>
             <div>
                 <i>账&nbsp;&nbsp;&nbsp;号 :</i><input type="text" v-model="tel"   :class="{active:num1==1}" @click="show()" @blur="blur1" ref="show" @focus="clean"><span v-show="num1==0" @click="show()">请输入您的用户名/手机号码</span>
             </div>
             <var v-show="tips1==1"><em>*</em>{{usertips}}</var>
         </li>
         <li>
             <div class="tokenBox">
                <i>验证码 :</i><input type="text" v-model="token" class="tokenInput"  :class="{active:num3==1}"  @click="show3()" @blur="blur3" ref="show3" @focus="clean3"><span v-show="num3==0" @click="show3()">请输入验证码</span>
             </div>
             <img :src="imgsrc" alt="" @click="getImgtoken">
             <span class="tips">看不清？<em @click="getImgtoken">换一张</em></span>
             <var v-show="tips3==1"><em>*</em>{{imgtips}}</var>
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
 data() {
  return {
      tel:'',
      token:'',
      num1:0,
      num3:0,
      tips1:0,
      tips3:0,
      phptoken:'',
      imgsrc:'',
      usertips:'请输入用户名',
      imgtips:'请输入验证码'
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
        this.tel = this.tel.replace(reg, ' ');
        this.token = this.token.replace(reg, ' ');
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
     blur3:function(){
         this.replaceVal();
         if(this.token==""||this.token==" "){
            this.num3=0;
            this.tips3=1;
        }else{
            this.tips3=0;
        }
     },
     getImgtoken:function(){
         //获取图片验证码
         Api.getSecToken().then(res=>{
         this.phptoken=res.data.data.token;
         this.imgsrc="https://kong.gbicom.com:8443/user/user/security/captcha?token="+this.phptoken+"&apikey=ZlEqSzeQo1xEo0W3Rqh7t3x8d77UwR3O"
         })
     },
     next:function(){
         //下一步
        if(this.tel==" "||this.tel==""){
             this.tips1=1;
         }else if(this.token==" "||this.token==""){
             this.tips3=1;
         }else if(this.tips1==0&&this.tips3==0){
             Api.postSeccaptcha(this.tel,this.phptoken,this.token,).then(res=>{
                console.log(res.data);
                if(res.data.code==521){
                    this.usertips=res.data.msg;
                    this.tips1=1;
                } else if(res.data.code==515){
                    this.imgtips=res.data.msg;
                    this.tips3=1;
                    this.getImgtoken();
                }else if(res.data.code==200){
                    this.$emit('next',res.data.data)
                }
            })
         }
        //  this.$emit("next")
     }
 }
}
</script>

<style scoped lang="scss">
    ul{
        width: 490px;
        margin: 0 auto;
        li{
            position: relative;
            &~li{
                margin-top:20px; 
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
                    margin-left: 6px;
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
                &+img{
                    width: 90px;
                    height: 36px;
                    margin-top: -2px;
                    border: 1px solid #cccccc;
                    cursor: pointer;
                    display: inline-block;
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
