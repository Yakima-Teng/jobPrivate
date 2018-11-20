<template>
 <div class="container">
     <ul>
         <li>
             <p>订单中心</p>
             <router-link to="/home/order?num=0" active-class="active"><span></span>我的订单</router-link>
         </li>
         <li>
             <p>账户信息</p>
            <router-link to="/home/my" active-class="active"><span></span>个人资料</router-link>
         </li>
         <li>
             <p>财产管理</p>
            <router-link to="/home/coupon" active-class="active"><span></span>我的优惠券</router-link>
         </li>
         <li>
             <p>服务中心</p>
            <router-link to="/home/contacts" active-class="active"><span></span>联系人管理</router-link>
         </li>
         <li>
             <p>收藏夹</p>
            <router-link to="/home/collect" active-class="active"><span></span>收藏的商品</router-link>
         </li>
         <!-- <li>
             <p>合同管理</p>
             <router-link to="/home/contract" active-class="active"><span></span>合同主体</router-link>
         </li> -->
         <li>
             <p>消息中心</p>
             <router-link to="/home/message" active-class="active" @click.native='getMsg'><span></span>订单消息<em v-if="msgNum>0"></em></router-link>
         </li>
     </ul>
 </div>
</template>

<script>
import {postFn} from '../../../static/js/util.js'
import {mapActions,mapState} from 'vuex'
export default {
 data() {
  return {
      
  }
 },
 components: {
     
 },
 created() {
    //  this.getorderMsgNum();
 },
 methods: {
     ...mapActions(['update_msgNum']),
     getMsg(){
         this.update_msgNum(2);
     },
    //  getorderMsgNum(){
    //      var data={
    //          type:1,
    //      }
    //      var that=this;
    //      postFn('/message/message/msg/newmsg',data,function(res){
    //          if(res.data.code==200){
    //              that.update_msgNum(res.data.data.count);
    //          }
    //      })
    //  }
 },
 computed: {
     ...mapState(['msgNum'])
 }
}
</script>

<style scoped lang="scss">
    ul{
        padding-top: 38px;
        padding-right: 54px;
        float: left;
        li{
            padding-bottom: 34px;
            p{
                font-size: 16px;
                color:#333;
                padding-bottom: 10px;   
            }
            
            a{
                font-size: 14px;
                color: #999;
                display: block;
                height: 12px;
                margin-top: 8px;
                span{
                    border-left: 2px solid #e52e3a;
                    padding-right: 12px;
                    display: none;
                }
                em{
                    border-radius: 50%;
                    width: 4px;
                    height: 4px;
                    display: inline-block;
                    background: #e52e3a;
                    position: relative;
                    top:-9px;
                    left: 3px;
                }
                &:hover{
                    color:#e52e3a;
                }
            }
            .active{
                color: #e52e3a;
                span{
                     display: inline-block;
                     height: 12px;
                     position: relative;
                     top:1px;
                }
            }
        }
    }
</style>
