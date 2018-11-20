<template>
 <div class="container">
     <div>
         <img src="../../../static/images/user/contactsNone.jpg" alt="">
         <p>您现在还没有联系人哦~</p>
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
        img:nth-child(1){
            margin: 94px auto 36px;
            display: block;
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
