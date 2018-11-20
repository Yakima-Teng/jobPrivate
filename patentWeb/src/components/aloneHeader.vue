<template>
  <header class="header">
      <div class="w1190">
          <div class="logo">
              <img class="logo" src="../assets/images/u88.png" alt="">
              <div class="fenge"></div>
              <div class="zlcs">
                  <p class="zlcs_title">专利超市</p>
                  <p class="zlcs_wz">www.ciprun.cn</p>
              </div>
          </div>
          <h2 class="title">{{name}}</h2>
      </div>
  </header>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style lang="scss" scoped>
$main: #333;
$red: #cc0000;
$border02: #ddd;
.header{width: 100%;margin: 0 auto;clear: both;
    .w1190{height: 84px; vertical-align: top; }
    .logo{ display: inline-block; position: relative;
      .logo{ float: left; width: 119px;height: 50px;line-height: 84px;margin-top: 17px;}
      .fenge{width: 0;height: 40px;border-left: 1px solid $border02;position: absolute;left: 129px;top: 23px;}
      .zlcs{float: left; width: 110px;
        .zlcs_title{height: 30px;font-size: 20px;color: $main;margin-top: 17px;margin-left: 26px;}
        .zlcs_wz{height: 20px;color: lighten($main, 40%);font-size: 12px;margin-left: 26px;}
      }
      .cloud{ position: absolute; top: 0; left: 0; right: 0; bottom: 0}
    }
    .title{
      display: inline-block; vertical-align: top; 
      font-size: 20px; margin-top: 30px;
      color: #CC0000;
      margin-left: 100px;
    }
  }
</style>

