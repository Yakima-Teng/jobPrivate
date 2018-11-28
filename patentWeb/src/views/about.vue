<template>
  <div class="about-page">
    <alone-header :name="pageName"></alone-header>
    <div class="banner"></div>
    <div class="w1190 main-box">
        <nav class="aside-nav">
          <router-link target="_blank" :class="{'cur': type == 'about'}" to="/about">关于我们</router-link>
          <router-link target="_blank" :class="{'cur': type == 'contact'}" to="/contact">联系我们</router-link>
          <router-link target="_blank" :class="{'cur': type == 'pact'}" to="/pact">服务协议</router-link>
          <router-link target="_blank" :class="{'cur': type == 'declare'}" to="/declare">法律申明</router-link>
        </nav>
        <div v-if="info" class="show-box" v-html="info.content"></div>
    </div>
    <foot-model :isLink="footLink"></foot-model>
  </div>
</template>

<script>

import FootModel from '@/components/footer'
import aloneHeader from '@/components/aloneHeader'

import { GET_DETAIL } from '@/components/policy/module'

export default {
  asyncData({ store, route }){
    var path = route.path;
    var type = path.substring(1,path.length);
    var id = 0;
    if(type == 'about'){
      id = 191;
    }else if(type == 'contact'){
      id = 189;
    }else if(type == 'pact'){
      id = 190;
    }else if(type == 'declare'){
      id = 192;
    }
    return store.dispatch(GET_DETAIL, id);
  },
  components: {
    FootModel,
    aloneHeader
  },
  data () {
    return {
      footLink: false,
      pageName: '关于专利超市',
      type: ''
    }
  },
  metaInfo () {
    return {
      title: '关于专利超市-中细软专利超市',
      meta: [{
          name: 'description',
          content: '中细软集团有限公司拥有专业知识产权服务1200余人,作为中国专业的大型综合性知识产权服务机构,其定位是为中国创新提供系统的解决方案与信息服务,中细软集团致力于通过网络科技等手段,为政府知识产权行政管理、为企业、为个人智慧财产创造、运用、保护和管理提供高质量的解决方案.'
      },{
          name: 'keywords',
          content: '关于专利超市,中细软,中细软专利超市'
      }]
    }
  },
  created(){
    var path = this.$route.path;
    var type = path.substring(1,path.length);
    this.type = type;
  },
  mounted(){ // 此处数据不会被ssr读取到
    var id = 0;
    if(this.type == 'about'){
      id = 191;
    }else if(this.type == 'contact'){
      id = 189;
    }else if(this.type == 'pact'){
      id = 190;
    }else if(this.type == 'declare'){
      id = 192;
    }
    return this.$store.dispatch(GET_DETAIL,id);
  },
  computed: {
    info(){
        return this.$store.state.policy.detailInfo
    }
  }
}
</script>


<style lang="scss" scoped>
$main: #333;
$red: #cc0000;
$border02: #ddd;
.about-page{
  background-color: #fff;
  
  .banner{
    height: 200px; width: 100%;
    background: url('../assets/images/about/gy.jpg') no-repeat center;
  }
  .main-box{
    position: relative; box-sizing: border-box;
    margin:0 auto; padding-left: 210px; padding-top: 30px; min-height:400px; padding-bottom: 60px;
    .aside-nav{
      position: absolute;
      left:0;
      a{
        display: block;
        width: 180px;
        height: 50px;
        font-size: 14px;
        color: #333;
        text-align: center;
        line-height: 50px;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        &.cur{
          background-color: #cc0000;
          border: none;
          color: #fff;
        }
      }
    }
  }
  .show-box{ width: 100%; overflow: hidden;}
}
</style>
