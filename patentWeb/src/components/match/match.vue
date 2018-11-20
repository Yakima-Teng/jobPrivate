<template>
  <div class="match_left" :class="[type == 'needs'? 'needs': 'patents']">
      <div class="xq-left m-needs">
        <h2 class="xq-left-title">找需求<span>用专利匹配</span></h2>
        <a class="a-change" href="javascript:void(0);"></a>
        <p class="p1">一键智能匹配</p>
        <p class="p2">即刻获得优质需求</p>
        <div class="shenqing">
            <em>专利名</em>
            <textarea placeholder="最多可填20个专利名称，用回车键隔开" v-model="words"></textarea> 
        </div>
        <a class="btn" href="javascript:void(0);" @click="matchNeeds">立即匹配</a>
        <router-link class="cloud" to="/matchN"></router-link>
      </div>
      <div class="xq-left m-patents">
          <h2 class="xq-left-title">找专利<span>用需求匹配</span></h2>
          <a class="a-change" href="javascript:void(0);"></a>
          <p class="p1">一键智能匹配</p>
          <p class="p2">精准、完善的专利推荐方案</p>
          <div class="shenqing">
              <em>专利要求</em>
              <textarea placeholder="可输入4-100字" v-model="search"></textarea> 
          </div>
          <div class="demand leixing">
              <em>类型要求</em>
              <label><input type="radio" value="105" v-model="pType">发明专利</label>
              <label><input type="radio" value="106" v-model="pType">实用新型</label>
              <label><input type="radio" value="107" v-model="pType">外观专利</label>
          </div>
          <div class="demand xiazheng">
              <em>下证要求</em>
              <label><input type="checkbox" value="98" v-model="status">已下证</label>
              <label><input type="checkbox" value="99" v-model="status">授权未交费</label>
          </div>
          <a class="btn" href="javascript:void(0);" @click="matchPatent">立即匹配</a>
          <router-link class="cloud" to="/matchP"></router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Match',
  props: ['type'],
  data () {
    return {
      search: '',
      pType: '',
      status: [],
      words: ''
    }
  },
  methods: {
    matchPatent: function(){
      var url = '/patent?searchType=keywords';
      if(this.search != ''){
          url += '&search=' + this.search;
      }
      if(this.pType != ''){
          url += '&type=' + this.pType;
      }
      if(this.status.toString() != ''){
          url += '&status=' + this.status.toString();
      }
      this.$emit('patentList', url);
    },
    matchNeeds: function(){
      var url = '/needs?';
      if(this.words != ''){
          url += '&words=' + this.words;
      }
      this.$emit('needsList', url);
    }
  }
}
</script>

<style lang="scss" scoped>
.match_left{width: 520px;height:700px;color: #fff; overflow: hidden;}
.match_left .xq-left{width: 520px;height: 600px; position: relative; padding: 20px 20px 0 30px; box-sizing: border-box;}
.match_left .xq-left .cloud{display: none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,.3);}
.match_left .m-needs{background: url("../../assets/images/match/ppxq.png") no-repeat 0 0;}
.xq-left .xq-left-title{margin-top: 9px; width: 100%;font-size: 28px;line-height:1;overflow: hidden;}
.xq-left-title span{ margin-left: 8px; font-size: 14px;}
.xq-left .a-change{position: absolute; width: 40px;height: 40px;background: url("../../assets/images/match/change.png") no-repeat 0 0; top: 20px; right: 20px;}
.xq-left .p1{margin-top: 50px;font-size: 30px;line-height: 1;}
.xq-left .p2{margin-top: 18px;font-size: 36px;line-height: 1;}
.shenqing{width: 100%;margin-top: 55px;overflow: hidden;}
.shenqing em{float: left; font-size: 14px;line-height: 24px;}
.shenqing textarea{float: left; box-sizing: border-box; color: #fff; width: 380px;height: 120px;background-color:transparent;border: 1px solid #fff;border-radius: 5px;padding-left: 10px;padding-top: 10px;margin-left: 20px;}
.xq-left .btn{display: block; width: 195px;height: 50px;border-radius: 5px; background-color: #30c1e5;text-align:center;line-height: 50px;color: #fff;margin-left:62px;margin-top: 24px;font-size: 16px;}
.xq-left .demand{width: 100%;margin-top: 20px;}
.xq-left .demand em{display: inline-block; font-size: 14px;color: #fff;margin-right: 20px;} 
.xq-left .demand label{font-size: 14px;color: #fff;margin-right: 30px;line-height: 16px;}
.xq-left .xiazheng label:nth-child(2){margin-right: 43px;}
.xq-left .xiazheng label:nth-child(3){margin-right: 0px;}
.xq-left label input[type=radio],.xq-left label input[type=checkbox] {margin-right: 8px;width: 16px;height: 16px;-webkit-appearance: none;border: 1px solid #fff;border-radius: 5px;outline: none;vertical-align: top;}
.xq-left label input[type=radio]:checked,.xq-left label input[type=checkbox]:checked{background: url("../../assets/images/match/checked.png") no-repeat 4px 4px ;background-size: 6px ;}
.match_left .m-patents{background: url("../../assets/images/match/ppzl.png") no-repeat 0 0;
  .btn{margin-left: 79px; background-color: #8132fc; margin-top: 38px;}
}
.match_left.needs .m-patents,.match_left.patents .m-needs{ margin-left: 20px;
  .a-change{ right: 30px;}
  .cloud{ display: block;}
}
.match_left.patents .m-patents{margin-left: 0;margin-top: -500px;}
</style>
