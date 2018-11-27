<template>
<!--导航组件使用absolute定位，父级组件请使用 margin-left 给出相应空间 // 至少150px  -->
  <div class="member-nav">
    <dl v-if="navbox=='member'">
      <router-link exact class="link" tag="dd" to="/member/data" >会员资料</router-link>
      <router-link tag="dd" to="/member/head">我的头像</router-link>
    </dl>
    <dl v-else-if="navbox=='patent'">
      <router-link class="button" tag="dt" to="/member/patent/p" >发布/更新专利</router-link>
      <router-link exact tag="dd" to="/member/patent">我的专利库</router-link>
      <router-link tag="dd" to="/member/patent/wait">待发布专利</router-link>
      <router-link tag="dd" to="/member/patent/collect">收藏的专利</router-link>
      <dd>续费预警<span class="no-up">即将上线</span></dd>
    </dl>
    <dl v-else-if="navbox=='needs'">
      <router-link class="button" tag="dt" to="/member/needs/release" >发布需求</router-link>
      <router-link exact tag="dd" to="/member/needs">我发布的需求</router-link>
      <router-link tag="dd" to="/member/needs/collect">收藏的需求</router-link>
      <router-link tag="dd" to="/member/needs/quote">我报价的需求</router-link>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'memberNav',
  props: {
    navbox: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
}

</script>

<style lang="scss" scoped>
$main: #333;
$red: #cc0000;
$border02: #ddd;

.member-nav{
  position: absolute;
  font-size: 14px; width: 150px;;
  color:$main;
  dt.link{
    border-bottom: 1px solid #dddddd;
  }
  dt.button{
    width: 100%;
    height: 40px;
    background-color: #cc0000;
    border-radius: 5px; padding-left: 0;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    &:hover{
      color:#fff;
      background-color: #c40000;
    }
  }
  dd{
    cursor: pointer;
    padding-left: 20px;  
    line-height: 40px;
    border-bottom: 1px solid #dddddd;
    &:last-of-type{
      border:none;
    }
    &.cur{
      color:#cc0000;
    }
    &:hover{
      color:#cc0000;
    }
  }
  .no-up{
    font-size: 12px; margin-left: 20px;
    color: #999999;
  }
}
</style>
