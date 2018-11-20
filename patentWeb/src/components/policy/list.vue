<template>
  <router-link tag="a" target="_blank" class="right-box" :to="'/article/'+news.arc_type_id+'/'+news.arc_id">
      <div class="img">
          <img :src="news.img" alt="">
          <i>{{news.type_name}}</i>
      </div>
      <div class="info">
          <h4>{{news.title}}</h4>
          <div class="info-bottom"><span>{{news.create_time}}</span><em>{{news.click}}</em></div>
      </div>
  </router-link>
</template>

<script>
export default {
  name: 'List',
  props: ['news'],
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
$main: #333;
$red: #cc0000;
$border01: #ccc;
$border02: #ddd;
.right-box{float: left; width: 440px;height: 150px;padding-left: 20px;padding-top: 20px; box-sizing: border-box;border-bottom: 1px solid #dddddd;margin-right: 10px;margin-bottom: 10px;background-color: #fff;
  .img{position: relative; float: left; width: 190px;height: 110px;margin-right: 10px;
    img{width: 190px;height: 110px;}
    i{position: absolute;left: 10px;top: 10px;width: 45px;height: 24px;border-radius: 5px;text-align: center;line-height: 24px;color: #666666;font-size: 12px;background-color: #fff;}
  }
  .info{width: 200px;float: left;
    h4{font-size: 14px;color: #333333;line-height: 24px;}
    .info-bottom{width: 200px;margin-top: 42px;overflow: hidden;
      span{float: left;font-size: 12px;color: #999999;}
      em{float: right;font-size: 12px;color: #999999;padding-left: 24px;background: url("../../assets/images/policy/liuliang.png") no-repeat 0 1px;}
    }
  }
}
</style>
