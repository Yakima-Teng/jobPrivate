<template>
  <div class="top-list">
    <h2>{{title}}</h2>
    <div v-if="navType" class="list-wrap">
        <div :class="{cur: cur == ''}" @click="curFn('')" ><a href="javascript:void(0);">全部</a></div>
        <div :class="{cur: cur == 108}" @click="curFn(108)"><a href="javascript:void(0);">审核中</a></div>
        <div :class="{cur: cur == 109}" @click="curFn(109)"><a href="javascript:void(0);">已发布</a></div>
        <div :class="{cur: cur == 110}" @click="curFn(110)"><a href="javascript:void(0);">驳回</a></div>
    </div>
    <div v-else class="list-wrap">
        <div :class="{cur: cur == ''}" @click="curFn('')" ><a href="javascript:void(0);">全部</a></div>
        <div :class="{cur: cur == 105}" @click="curFn(105)"><a href="javascript:void(0);">发明专利</a></div>
        <div :class="{cur: cur == 106}" @click="curFn(106)"><a href="javascript:void(0);">实用新型</a></div>
        <div :class="{cur: cur == 107}" @click="curFn(107)"><a href="javascript:void(0);">外观专利</a></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'navType'],
  data () {
    return {
      cur: ''
    }
  },
  methods: {
    curFn (num) {
      this.cur = num;

      this.$emit('patentTypeEmit', num)
    }
  }
}
</script>


<style lang="scss" scoped>
.top-list{
    width: 100%;overflow: hidden;
    h2{float: left; font-size: 18px;color: #333333;line-height: 40px;text-align: center;margin-right: 30px;}
    .list-wrap{width: 524px; float: left;overflow: hidden;}
    .list-wrap div{float: left;box-sizing: border-box;padding:0 10px; height: 40px;line-height: 40px;margin-right: 20px;}
    .list-wrap div:last-of-type{margin-right: 0px;}
    .list-wrap div a{color:#666666;font-size: 14px; }
    .list-wrap div em{ margin-left: 10px; display: inline-block; padding:0 10px;  line-height: 1.4; box-sizing: border-box; background-color: #bdc4cc;font-size: #fff;text-align: center;line-height: 18px;border-radius: 10px;color: #fff;margin-top: 10px;font-size: 12px;}
    .list-wrap div.cur{border-bottom: 2px solid #cc0000;}
    .list-wrap div.cur a{color: #cc0000;}
    .list-wrap div.cur em{background-color: #cc0000;}
    }
</style>
