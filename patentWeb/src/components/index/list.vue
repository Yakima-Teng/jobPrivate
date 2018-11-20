<template>
<ul class="list" v-if="type=='index'">
    <li class="pract clearfix" v-for="(item, index) in list.list" :key="index">
        <div v-if="item._source.type == 106" class="box_bg pract">实用</div>
        <div v-else-if="item._source.type == 107" class="box_bg outward">外观</div>
        <div v-else class="box_bg invent">发明</div>
        <div class="slzl-box">
            <p class="p1">{{ item._source.name }}</p>
            <p class="p2">申请号：{{ item._source.reg_id }}</p>
        </div>
        <span class="span1">{{ item._source.attrs.status_str }}</span>
        <span v-if="parseInt(item._source.attrs.price) > 0" class="span2">￥{{ item._source.attrs.price }}</span>
        <span v-else class="span2">面议</span>
        <a href="javascript:void(0);" class="a1" v-if="collect.toString().indexOf(item._source.p_id) == -1" @click="careHandle('care', item)">收藏</a>
        <a href="javascript:void(0);" class="a3" v-else @click="careHandle('uncare', item)">已收藏</a>
        <router-link tag="a" target="_blank" class="a2" :to="'/pDetail/'+item._source.p_id">查看详情</router-link>
    </li>
</ul>
<ul class="list" :class="type" v-else-if="type=='patent'">
    <li class="clearfix" v-for="(item, index) in list.list" :key="index">
        <div v-if="item._source.type == 106" class="box_bg pract">实用</div>
        <div v-else-if="item._source.type == 107" class="box_bg outward">外观</div>
        <div v-else class="box_bg invent">发明</div>
        <div class="slzl-box">
            <p class="p1">{{ item._source.name }}</p>
            <p class="p2">申请号：{{ item._source.reg_id }}</p>
        </div>
        <span class="span1">{{ item._source.attrs.status_str }}</span>
        <span v-if="parseInt(item._source.attrs.price) > 0" class="span2">￥{{ item._source.attrs.price }}</span>
        <span v-else class="span2">面议</span>
        <a href="javascript:void(0);" class="a1" v-if="collect.toString().indexOf(item._source.p_id) == -1" @click="careHandle('care', item)">收藏</a>
        <a href="javascript:void(0);" class="a3" v-else @click="careHandle('uncare', item)">已收藏</a>
        <a href="javascript:void(0);" class="a2" @click="advisoryFun(item)">咨询</a>
        <em v-if="item._source.attrs.is_kan == 1">可议价</em>
        <router-link tag="a" target="_blank" :to="'/pDetail/'+item._source.p_id" class="cloud"></router-link>
    </li>
</ul>
<div class="need-list" v-else>
  <div class="item" v-for="(item, index) in list.list" :key="index">
    <div class="img-box"><img src="../../assets/images/u26.jpg" /></div>
    <div class="main">
      <p class="title"><span>{{ item.nick }}</span><em>{{ item.ago }}</em></p>
      <div class="vip">
        <a href="javascript:void(0);" v-for="(tag, j) in item.tags" :key="j">{{ tag }}</a>
      </div>
      <p class="p1">{{ item.content }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['type', 'list', 'collect'],
  name: 'List',
  data () {
    return {
      
    }
  },
  methods: {
    advisoryFun: function(item){
      this.$emit('openLayer', item);
    },
    careHandle: function(type, item){
      this.$emit('careHandle', type, item);
    }
  }
}
</script>

<style lang="scss" scoped>
$main: #333;
$red: #cc0000;
$green: #37b8cf;
$bg-red: #f0b3b3;
$bg-green: #80cccc;
$bg-blue: #99cce6;
$border01: #ccc;
$border02: #ddd;
.list{width: 100%; font-size: 14px;border-top: 1px solid $border02;
  li{ width: 100%; padding: 20px;border-bottom: 1px solid $border02; box-sizing: border-box;
    .box_bg{ float: left;width: 50px;height: 50px;color: #fff;text-align: center;line-height: 50px;border-radius: 5px;
      &.pract{background-color: $bg-green;}
      &.outward{background-color: $bg-blue;}
      &.invent{background-color: $bg-red;}
    }
    .slzl-box{ float: left; margin-left: 20px; width: 340px; overflow: hidden;
      p{width:100%;color: $main; line-height: 20px;
        &:last-child{ color: lighten($main, 40%); margin-top: 10px;}
      }
    }
    span, a{ float: left; height: 30px; line-height: 30px;}
    .span1{width: 70px;color: lighten($main, 20%);margin-left: 50px;}
    .span2{width: 85px;color: $red;margin-left: 26px;}
    a{width: 80px; color: lighten($main, 20%);text-align: center; box-sizing: border-box;}
    .a1{ margin-right: 20px; padding-left: 22px;background: url("../../assets/images/u278.png") no-repeat 10px center;}
    .a3{width: 90px;color: #fff;background: url("../../assets/images/u287.png") no-repeat 8px 8px $red;border-radius: 5px;padding-right: 10px;padding-left: 36px;margin-right: 10px;}
    .a2{border:1px solid $border01;border-radius: 5px;}
    &:hover{box-shadow:  0 0 5px $border02;}
  }
  &.patent{
    li{position: relative;
      .a2{padding-left: 36px;background: url(../../assets/images/zixun.png) no-repeat 10px 7px;text-align: left;
        &.yijia{ border: 0 none;}
      }
      em {float: right;font-size: 12px;color: #fff;width: 50px;height: 20px;background-color: #009999;border-radius: 5px;text-align: center;line-height: 20px;margin-right: 255px;}
      .cloud{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255,255,255,0)
      }
      &:hover .cloud{ display: block;}
    }
  }
}
.need-list{ width: 280px;
  .item{width: 100%; display: flex;flex-direction: row; padding: 16px 18px 20px 10px; border: 1px solid $border02;border-bottom: none; box-sizing: border-box;
    .img-box{ width: 40px; height: 40px; border: 1px solid $border02; border-radius: 50%; box-sizing: border-box; overflow: hidden;
      img{ max-width: 100%; max-height: 100%;}
    }
    .main{margin-left:10px;flex: 1;
      .title{display: flex; justify-content: space-between;
        span, em{display: block; font-size: 12px; line-height: 20px;}
        span{ color: $green; max-width: 120px; overflow: hidden; text-overflow: ellipsis;}
        em{ color: lighten($main, 40%);}
      }
      .vip{margin-top: 10px;
        a{display: inline-block;height: 22px;padding-left: 5px;padding-right: 5px; margin-right: 3px; border: 1px solid $border02;border-radius: 5px;font-size: 12px;color: #b2b2b2;line-height: 22px;text-align: center; cursor: default;}
      }
      .p1{font-size: 14px; line-height: 20px;margin-top: 10px;}
    }
    &:last-child{
      border-bottom: 1px solid $border02;
    }
    &:hover{ box-shadow: 0 0 10px $border02;}
  }
}

</style>
