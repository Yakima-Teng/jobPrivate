<template>
 <div class="container">
     <ul>
         <li>
             <div>
                 <i>新登录密码 :</i><input type="password" v-model="newPass"   :class="{active:num1==1}" @click="show()" @blur="blur1" ref="show" @focus="clean"><span v-show="num1==0" @click="show()">请输入您的新密码</span>
             </div>
             <var v-show="tips1==1"><em>*</em>{{passtips}}</var>
         </li>
         <li>
             <div>
                 <i>确认密码 :</i><input type="password" v-model="cofnewPass"   :class="{active:num2==1}" @click="show2()" @blur="blur2" ref="show2" @focus="clean2"><span v-show="num2==0" @click="show2()">请确认您的密码</span>
             </div>
             <var v-show="tips2==1"><em>*</em>{{cofpasstips}}</var>
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
props: ['tel'],
 data() {
  return {
      num1:0,  //控制显示隐藏
      num2:0,
      tips1:0,  //提示信息
      tips2:0,
      newPass:'',
      cofnewPass:'',
      passtips:"请输入您的新密码",
      cofpasstips:"请确认你的密码"
  }
 },
 methods:{
     show:function () {
         this.num1=1
         this.$refs.show.focus();
     },
     show2:function () {
         this.num2=1
         this.$refs.show2.focus();
     },
     clean:function(){
         this.num1=1;
     },
     clean2:function(){
         this.num2=1;
     },
     blur1:function(){
         var reg = /(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,20}/
         if(reg.test(this.newPass)){
            this.tips1=0;
            return 
        }else{
            this.passtips="请输入大小写字母、数字或符号的组合,至少8位"
            this.num1=1;
            this.tips1=1;
        }
         if(this.newPass==""){
            this.passtips="请输入密码"
            this.num1=0;
            this.tips1=1;
         }
     },
     blur2:function(){
        if(this.cofnewPass==""){
            this.cofpasstips="请确认你的密码"
            this.num2=0;
            this.tips2=1;
        }else if(this.cofnewPass!==this.newPass){
            this.cofpasstips="两次输入密码不一致"
            this.num2=1;
            this.tips2=1;
        }else{
            this.tips2=0;
        }
     },
     next:function(){
         //下一步
         if(this.newPass==" "||this.newPass==""){
            this.tips1=1;
        }else if(this.cofnewPass==" "||this.cofnewPass==""){
            this.tips2=1;
        }else if(this.tips1==0&&this.tips2==0){
             Api.postSecpass(this.tel,this.newPass).then(res=>{
                console.log(res);
                if(res.data.code==513){
                    this.passtips=res.data.msg
                    this.tips1=1;
                }else if(res.data.code==200){
                    this.$emit("next",this.tel);
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
        width: 490px;
        margin: 0 auto;
        li{
            position: relative;
            &~li{
                margin-top:20px; 
            }
            &:nth-child(1){
                i{
                    position: absolute;
                    bottom:13px;
                    left:-14px;
                }
                input{
                    margin-left: 70px;
                }
            }
            div{
                font-size: 14px;
                color:#bbb;
                position: relative;
                background: white;
                width: 286px;
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
                    left:84px;
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
                    color: #324efa;
                    cursor: pointer;
                }
            }
            var{
                color:#ff3333;
                font-size:12px;
                position: absolute;
                padding-left: 10px;
                left:70px;
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
