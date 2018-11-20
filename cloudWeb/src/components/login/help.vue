<template>
 <div class="container">
     <top></top>
     <div class="shadow">
        <headPart></headPart>
        <navgate></navgate>
     </div>
     
     <div class="w1190_father">
         <div class="w1190">
            <img src="../../static/images/user/help_pay.jpg" alt="">
        </div>
     </div>
     
     <bottom></bottom>
     <foot></foot>
 </div>
</template>

<script>
import top from '../common/top.vue'
import headPart from '../common/head.vue'
import navgate from '../common/nav.vue'
import bottom from '../common/bottom.vue'
import foot from '../common/foot.vue'
export default {
metaInfo () {
    return {
        title: '限额帮助中心-创新科技服务云平台',
        meta: [{
            name: 'description',
            content: '创新科技服务云平台专业提供商标注册,商标查询,专利查询,专利申请,版权登记,工商财税,商标转让,法律,设计等服务,费用透明,流程简单,成功率高!'
        },{
            name: 'keywords',
            content: '常见问题,帮助中心,限额帮助'
        }]
    }
}, 
 data() {
  return {

  }
 },
 components: {
     top,
     headPart,
     navgate,
     bottom,
     foot
 }
}
</script>

<style scoped lang="scss">
    .shadow{
        // background-color:#fff;
        box-shadow: 0 2px 3px 0 rgba(0,0,0,.07);
        margin-bottom: 3px;
    }
    .w1190_father{
        // border-top:2px solid #ccc;
        background: #fafafa;
        padding-top: 20px;
        .w1190{
            text-align: center;
        }
    }
</style>
