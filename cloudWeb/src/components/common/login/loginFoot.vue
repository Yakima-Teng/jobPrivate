<template>
 <div class="container">
     <p class="copyRight">中细软集团有限公司版权所有 备案号：京ICP备15031491号-2</p>
     <ul>
         <li>
             <p class="bg-foot"></p>
             <p >国际商标协会会员</p>
         </li>
         <li>
             <p class="bg-foot"></p>
             <p>高新企业认证</p>
         </li>
         <li>
             <p class="bg-foot"></p>
             <p>中国商标战略创新奖</p>
         </li>
         <li>
             <p class="bg-foot"></p>
             <p>中华商标协会会员</p>
         </li>
         <li>
             <p class="bg-foot"></p>
             <p>知识产权管理研究中心</p>
         </li>
     </ul>
 </div>
</template>

<script>
export default {
 data() {
  return {

  }
 },
}
</script>

<style scoped lang="scss">
    .copyRight{
        text-align: center;
        font-size: 14px;
        color: #999;
        margin-top: 59px;
    }
    ul{
        width: 864px;
        margin: 20px auto 150px;
        overflow: hidden;
        li{
            float: left;
            overflow: hidden;
            .bg-foot{
                width: 22px;
                height: 22px;
                float: left;
                background: url(../../../static/images/login/xbt.png) no-repeat;
                margin-left: 20px;
            }
            p:nth-child(2){
                font-size: 12px;
                float: left;
                border-right: 1px solid #eeeeee;
                padding-right: 20px;
                color: #666666;
                margin-left: 9px;
                margin-top: 4px;
            }
        }
        li:nth-child(1){
            .bg-foot{
                background-position: 0 0;
            }
        }
        li:nth-child(2){
            .bg-foot{
                background-position: 0 -71px;
            }
        }
        li:nth-child(3){
            .bg-foot{
                background-position: -94px -71px;
            }
        }
        li:nth-child(4){
            .bg-foot{
                background-position: -201px -71px;
            }
        }
        li:nth-child(5){
            .bg-foot{
                background-position: -300px -71px;
            }
            p:nth-child(2){
                border-right: none;
            }
        }
    }
</style>
