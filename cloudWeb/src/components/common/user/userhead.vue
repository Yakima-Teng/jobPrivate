<template>
 <div class="container">
     <div class="headBox">
         <div class="leftHead">
             <img src="../../../static/images/logo.png" alt="" @click="toIndex">
             <span @click="to">个人中心</span>
         </div>
         <div class="rightHead">
             <div class="search" @keyup.enter="search">
                 <input type="text" v-model="searchVal"   :class="[{active:num1==1},{error:error},{errorAn:errorAn}]"  @click="show()" @blur="blur1" ref="show" @focus="clean">
                 <span v-show="num1==0"  @click="show()">请输入检索关键词</span>
                 <button @click="search" :class="{errorBtn:error}"> <i></i></button>
             </div>
             <div class="shoppingCar">
                 <button @click="tocart"> <i></i>我的购物车 <p v-show="iscart">{{cartnum}}</p></button> 
             </div>
         </div>
     </div>
 </div>
</template>

<script>
import {postFn} from '../../../static/js/util.js'
import {mapState} from 'vuex';
export default {
 data() {
  return {
       num1:0,  //控制显示隐藏
       searchVal:"",
       error:false, //错误提示
       errorAn:false,//错误提示动画
       iscart:false,
       cartnum:'',
  }
 },
 created () {
   this.getCartnum();  
 },
 computed: {
     ...mapState(['userInfo']),
 },
 methods:{
      show:function () {
         this.num1=1
         this.$refs.show.focus();
     },
     blur1:function(){
         this.replaceVal();
         if(this.searchVal!=""&&this.searchVal!=" "){
            this.num1=1;
         }else{
             this.num1=0;
             this.searchVal="";
         }
     },
     clean:function(){
         this.num1=1;
     },
     replaceVal:function(){
        var reg = /\s+/g;
        this.searchVal = this.searchVal.replace(reg, ' ');
     },
     upclass:function(){
         //非空验证动画
         this.error=true;
         setTimeout(() => {
             this.errorAn=true;
         }, 0);
         setTimeout(() => {
             this.errorAn=false;
         }, 500);
         setTimeout(() => {
             this.errorAn=true;
         }, 1000);
         setTimeout(() => {
             this.errorAn=false;
             this.error=false;
         }, 1500);
     },
     search:function(){
         //搜索
         this.replaceVal();
         if(this.searchVal!=""&&this.searchVal!=" "){
             window.open(window.location.origin + '/search?keywords='+this.searchVal)
         }else{
            this.upclass(); 
         }
     },
     to:function(){
         //去个人中心
         this.$router.push({path:"/home"})
     },
     tocart:function(){
         //去购物车
         this.$router.push({path:"/cart"})
     },
     getCartnum(){
         //获取购物车数量
         var data={
             uid:this.userInfo.id
         }
        var that=this;
         postFn('/product/cart/cart_num',data,function(res){
             console.log(res,"res")
             if(res.data.msg=='success'){
                 that.cartnum=res.data.data;
                 if(that.cartnum!=0){
                     that.iscart=true;
                     console.log(that.iscart)
                 }
             }
         })
     },
     toIndex(){
         //去首页
         this.$router.push('/');
     }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
    .headBox{
        width: 1190px;
        margin: 0 auto;
        padding: 46px 0;
        overflow: hidden;
        .leftHead{
            float: left;
            img{
                vertical-align: bottom;
                cursor: pointer;
            }
            span{
                color: #666666;
                font-size: 16px;
                margin-left: 20px;
                cursor: pointer;
                &:hover{
                    color:#e52e3a;
                }
            }
        }
        .rightHead{
            float: right;
            overflow: hidden;
            .search{
                position: relative;
                color:#bbbbbb;
                float: left;
                input{
                    width: 412px;
                    height: 40px;
                    padding-left: 17px;
                    border: 1px solid #ccc;
                    box-sizing: border-box;
                    background: #fff;
                    &.error{
                        border-color: #e52e3a;
                    }
                    &.errorAn{
                        background: #fff2f3;
                    }
                }
                span{
                    position: absolute;
                    top:12px;
                    left:20px;
                }
                button{
                    width: 60px;
                    height: 40px;
                    background: #333333;
                    outline: none;
                    border:none;
                    vertical-align: bottom;
                    margin-left: -6px;
                    cursor: pointer;
                    &:hover{
                        background: #e52e3a;
                    }
                    &.active+span{
                        display: none;
                    }
                    &.errorBtn{
                        background: #e52e3a;
                    }
                    i{
                        display: block;
                        width: 22px;
                        height: 20px;
                        margin: 0 auto;
                        background: url(../../../static/images/user/xbt.png) 0 0 no-repeat;
                    }
                }
            }
            .shoppingCar{
                float: left;
                button{
                    height: 40px;
                    width: 140px;
                    background:white;
                    margin-left: 30px;
                    font-size: 14px;
                    color:#333333;
                    outline: none;
                    border:1px solid #cccccc;
                    cursor: pointer;
                    text-align: center;
                    position: relative;
                    i{
                        display: inline-block;
                        width: 22px;
                        height: 20px;
                        background: url(../../../static/images/user/xbt.png) 0 -65px no-repeat;
                        vertical-align: middle;
                        margin-top: -4px;
                        margin-right:4px;
                    }
                    &:hover{
                        color:#e52e3a;
                        i{
                            background-position-y: -127px;
                        }
                    }
                    p{
                        position: absolute;
                        top:1px;
                        right: 1px;
                        width: 22px;
                        height: 14px;
                        background: url(../../../static/images/user/xbt.png) -288px -68px no-repeat;
                        color: white;
                        font-size: 12px;
                        text-align: center;
                    }
                    
                }
                
            }
        }
    }
</style>
