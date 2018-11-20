<template>
 <div class="container">
     <div>
         <p></p>
         <p>您现在还没有订单可以查看哦~</p>
         <router-link to="/" class="toindex">去首页看看</router-link>
     </div>
 </div>
</template>

<script>
export default {
 data() {
  return {

  }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
    div{
        width:100%;
        height: 100%;
        p:nth-child(1){
            margin: 94px auto 36px;
            width: 106px;
            height: 106px;
            background: url(../../../static/images/user/order/coxbt.png) 0 0 no-repeat;
        }
        p:nth-child(2){
            font-size: 16px;
            color: #333333;
            text-align: center;
        }
        .toindex{
            width: 140px;
            height: 38px;
            line-height: 38px;
            font-size: 16px;
            color: white;
            background: #e52e3a;
            text-align: center;
            margin: 40px auto;
            display: block;
        }
    }
</style>
