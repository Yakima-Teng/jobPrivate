<template>
  <div class="vip-info">
      <div class="img">
        <img v-if="cardInfo.banner" :src="'../../assets/images/preview/pc_b_'+cardInfo.banner+'.jpg'" alt="">
        <img v-else src="../../assets/images/preview/pc_b_1.jpg" alt="">
      </div>
      <div class="mingpian">
          <img v-if="cardInfo.head_img" :src="cardInfo.head_img" alt=""><img v-else src="../../assets/images/u26.jpg" alt="">
          <h4>{{cardInfo.call}}</h4>
          <div class="geren">
              <em v-if="cardInfo.agent">{{cardInfo.agent}}</em>
          </div>
          <p>{{cardInfo.url}}</p>
      </div>
      <div class="mingpian-nav">
          <a href="javascript:void(0);" :class="{'cur': tabIndex == 0}" @click="tabCut(0)">名片首页</a>
          <a href="javascript:void(0);" :class="{'cur': tabIndex == 1}" @click="tabCut(1)">在售专利</a>
          <!-- <em>13881</em> -->
          <a href="javascript:void(0);" :class="{'cur': tabIndex == 2}" @click="tabCut(2)">联系我</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PreviewHead',
  props: ['tabIndex','cardInfo'],
  data () {
    return {
    }
  },
  methods: {
    tabCut(index){
      this.$emit('tabCutFun', index);
    }
  }
}
</script>

<style lang="scss" scoped>
.vip-info{ width: 100%;background-color: #fff;
  .img {width: 100%;height: 180px;}
  .mingpian{float: left; position: relative;width: 100%;height: 100px;clear: both;background-color: #fff; 
    img{float: left;position: absolute;left: 40px;bottom: 20px; width: 120px; height: 120px; border-radius: 50%; }
    h4{position: absolute; left: 190px;top: -60px; line-height: 30px;font-size: 20px;color: #fff; }
    .geren{width: 343px;overflow: hidden;margin-left: 190px;margin-top: 20px; 
      span{float: left;line-height: 30px;font-size: 14px;color: #333;overflow: hidden; }
      em{float: left;width: 240px;height: 30px;line-height: 30px;font-size: 14px;color: #fff;background-color: #333333;border-radius: 5px;margin-left: 13px;text-align: center; }
    }
    p{width: 300px;height: 20px;margin-top: 10px;font-size: 12px;color: #999;margin-left: 190px; }
  }
  .mingpian-nav{clear: both; width: 100%;height: 50px;background-color: #fff;border-top: 1px solid #dddddd; 
    a{float: left;width: 97px;height: 50px;text-align: center;line-height: 50px;color: #333;font-size: 14px; box-sizing: border-box;
      &:hover, &.cur{border-bottom: 2px solid #cc0000;color: #cc0000;}
      &:nth-last-child(1){width: 83px; }
    }
    em{float: left;width: 46px;height: 18px;text-align: center;font-size: 12px;color: #fff;line-height: 18px;border-radius: 10px;background-color: #dddddd;margin-top: 16px; }
  }
}
</style>

