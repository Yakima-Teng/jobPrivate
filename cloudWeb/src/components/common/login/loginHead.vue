<template>
 <div class="container">
     <div class="content">
         <div class="leftHead">
            <img src="../../../static/images/login/logo.png" alt="" @click="toIndex">
            <span>{{headmsg}}</span>
        </div>
        <div class="rightHead">
            <p class="xbt"></p>
            <P>400-700-0065</P>
        </div>
     </div>
 </div>
</template>

<script>
export default {
 data() {
  return {

  }
 },
 props:['headmsg'],
 methods:{
     toIndex(){
         this.$router.push('/');
     }
 }
 
}
</script>
<style scoped lang="scss">
    .content{
        width: 1200px;
        overflow: hidden;
        margin: 0 auto;
        padding: 38px 0;
        .leftHead{
            float: left;
            img{
                cursor: pointer;
            }
            span{
                font-size:16px;
                color: #666;
                display: inline-block;
                vertical-align: bottom;
                margin-left: 17px;
            }
        }
        .rightHead{
            float: right;
            padding:7px 0;
            .xbt{
                width: 26px;
                height: 26px;
                background: url(../../../static/images/login/xbt.png) no-repeat 0 -218px;
            }
            p{
                display: inline-block;
                font-size: 24px;
                font-weight: bold;
                color: #e52e3a;
                vertical-align: middle;
            }
        }
    }
</style>
