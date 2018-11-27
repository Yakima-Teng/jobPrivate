<template>
  <!-- nav部分 -->
    <div class="nav">
        <div class="w1190">
            <h1 class="nav_left">
                <img class="logo" src="../assets/images/u88.png" alt="">
                <div class="fenge"></div>
                <div class="zlcs">
                    <p class="zlcs_title">专利超市</p>
                    <p class="zlcs_wz">patent.gbicom.cn</p>
                </div>
                <router-link target="_blank" class="cloud" to="/"></router-link>
            </h1>
            <div class="nav_right">
                <router-link target="_blank" exact to="/">首页</router-link>
                <router-link target="_blank" to="/patent">专利资源</router-link>
                <router-link target="_blank" to="/hall">需求大厅</router-link>
                <router-link target="_blank" to="/member/patent">专利管家</router-link>
                <router-link target="_blank" to="/policy">地区政策</router-link>
            </div>
        </div>
    </div>
    <!-- nav部分结束 -->
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
$main: #333;
$red: #cc0000;
$border02: #ddd;
.nav{width: 100%;margin: 0 auto;clear: both; background-color: #fff;
  .w1190{height: 84px;}
  .nav_left{float: left;position: relative;
    .logo{ float: left; width: 119px;height: 50px;line-height: 84px;margin-top: 17px;}
    .fenge{width: 0;height: 40px;border-left: 1px solid $border02;position: absolute;left: 129px;top: 23px;}
    .zlcs{float: left; width: 110px;
      .zlcs_title{height: 30px;font-size: 20px;color: $main;margin-top: 17px;margin-left: 26px;}
      .zlcs_wz{height: 20px;color: lighten($main, 40%);font-size: 12px;margin-left: 26px;}
    }
    .cloud{ position: absolute; top: 0; left: 0; right: 0; bottom: 0}
  }
  .nav_right{float: left; margin-left: 80px;
    a{ display: inline-block; color: $main;font-size: 14px;line-height: 34px;text-align: center;margin-right: 36px;margin-top: 24px; padding-left: 3px; padding-right: 3px;
      &.cur,&:hover{color: $red;border-bottom: 2px solid $red;}
    }
  }
}
</style>
