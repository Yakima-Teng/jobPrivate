<template>
  <div class="page-match">
    <Top></Top>
    <HeadModel></HeadModel>
    <div class="content">
        <div class="w1190 main">
            <Match type="patents" @patentList="patentList"></Match>
            <Matching :process="process" type="patents" @processChange="processChange" @changePagesInfo="changePagesInfo"></Matching>
        </div>
    </div>
    <!-- 最新政策结束 -->
    <FootModel :isLink="isLink"></FootModel>
  </div>
    
</template>

<script>
import Top from '@/components/top.vue';
import HeadModel from '@/components/header.vue';
import FootModel from '@/components/footer.vue';

import Match from '@/components/match/match.vue';
import Matching from '@/components/match/matching.vue';

import {GET_MORE_PATENT_LIST } from '@/components/patent/module'

export default {
  name: 'MatchPatent',
  components: {
    Top,
    HeadModel,
    FootModel,
    Match,
    Matching
  },
  data () {
    return {
      process: 'start',
      url: '',
      isLink: false
    }
  },
  metaInfo () {
    return {
      title: '找专利_买专利_专利转让_专利交易-中细软专利超市',
      meta: [{
          name: 'description',
          content: '中细软专利超市拥有丰富的专利资源,能够迅速根据您的需求为您匹配专利,买专利,找专利,专利交易,专利转让就到中细软专利超市,大品牌值得信赖.'
      },{
          name: 'keywords',
          content: '找专利,买专利,专利转让,专利交易,中细软专利超市'
      }]
    }
  },
  methods: {
    patentList: function(url){
      this.process = 'processing';
      this.url = url;
      this.$store.dispatch(GET_MORE_PATENT_LIST, {'page': 1, 'url': url});
    },
    processChange: function(process){
      this.process = process;
    },
    changePagesInfo: function(){
      var page = parseInt(this.$store.state.current_page);
      this.$store.dispatch(GET_MORE_PATENT_LIST, {'page': page+1, 'url': this.url});
    }
  }
}
</script>

<style lang="scss" scoped>
$main: #333;
$red: #cc0000;
$green: #37b8cf;
$border01: #ccc;
$border02: #ddd;
.page-match .content{
    width: 100%;
    background: url(../assets/images/match/p-banner.jpg) center bottom no-repeat #0d273d;
    .main{
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 40px 0 67px;
    }
}
</style>
