<template>
  <!-- footer -->
    <div class="footer">
        <div class="w1190">
            <div class="footer_top">
                <img class="logo2" src="../assets/images/u89.png" alt="">
                <div class="fenge"></div>
                <img class="ypt" src="../assets/images/u86.png" alt="">
                <div class="list">
                    <ul>
                        <li><a target="_blank" href="/about">关于我们</a></li>
                        <li><a target="_blank" href="/contact">联系我们</a></li>
                        <li><a target="_blank" href="/pact">服务协议</a></li>
                        <li class="last"><a target="_blank" href="/declare">法律申明</a></li>
                    </ul>
                    <p class="p-title">© 2018 北京中细软网络科技有限公司 版权所有 京ICP备11017069号</p>
                </div>
             <a href="javascript:void(0);" class="a2" @click="contactFun"><i></i>在线客服</a>
             <a href="javascript:void(0);" class="a1"><i></i>服务热线：400-700-0065</a>
            </div>
            <div class="footer_bottom" v-if="isLink != false">
                <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=26300949&site=qq&menu=yes" class="yqlj">申请友链</a>
                <span>友情链接</span>
                <div class="btm2">
                  <a :href="link.url" target="_blank" v-for="(link, index) in linkList" :key="index">{{link.name}}</a>
                </div>
            </div>
      </div>
    </div>
    <!-- footer结束 -->
</template>

<script>
import { openzx } from '@/assets/js/util'
export default {
  name: 'Footer',
  props: ['isLink', 'linkList'],
  data () {
    return {
      
    }
  },
  methods: {
    contactFun: function(){
        openzx();
    }
  }
}
</script>

<style lang="scss" scoped>
$main: #333;
$red: #cc0000;
$font: #1E1E1E;
$border02: #ddd;
$border01: #ccc;
.footer{width: 100%;margin: 0 auto;border-top: 1px solid $border02; background-color: #fff;}
.footer .footer_top{width: 100%;height: 110px;position: relative;}
.footer_top .logo2{width: 139px;height: 50px;float: left;margin-top: 30px;}
.footer_top .fenge{width: 0;height: 40px;border-left: 1px solid $border02;position: absolute;left: 150px;top: 35px;}
.footer_top .ypt{width: 99px;height: 50px;margin-left:22px;margin-top: 30px;float: left;}
.footer_top .list{float: left; width: 420px;margin-top: 30px;margin-left: 20px;}
.footer_top .list ul{width: 100%;overflow: hidden;}
.footer_top .list ul li{float: left; width: 57px;height: 30px;text-align: center;line-height: 30px;font-size: 14px;color: $font;margin-right: 20px;}
.footer_top .list ul li a{color:$font; &:hover{ color:$red; } }
.footer_top .list ul li.last{margin-right:0;}
.footer_top .list .p-title{font-size: 12px;color: lighten($main, 40%);margin-top: 10px;}
.footer_top .a2{box-sizing: border-box; position: relative; float: right;width: 97px;height: 30px;font-size: 14px;color: $font;margin-top: 30px;line-height: 30px;margin-left: 30px;}
.footer_top .a1{box-sizing: border-box; position: relative; float: right; width: 205px;height: 30px; font-size: 14px;color: $red;line-height: 30px;margin-top: 30px;}
.footer_top .a1 i{display: block;float: left; width: 30px;height: 30px;;border-radius: 50%;margin-right: 10px;background: url("../assets/images/u61.png") no-repeat 6px 6px $red;}
.footer_top .a2 i{display: block;float: left; width: 30px;height: 30px;border-radius: 50%; margin-right: 10px;background: url("../assets/images/u309.png") no-repeat 3px 3px $red;background-size: 24px 24px;}
.footer_bottom{width: 100%;padding-top: 20px; border-top: 1px solid $border02;overflow: hidden;}
.footer_bottom span{float: left;width: 58px;height: 30px;font-size:14px;color: lighten($main, 40%);text-align: center;line-height: 30px;margin-right: 20px;}
.footer_bottom a.yqlj{float: right;width: 80px;height: 30px;border: 1px solid $border01;border-radius: 5px;text-align: center;line-height: 30px;font-size: 14px;color:  lighten($main, 20%);margin-right: 0;}
.footer_bottom .btm2{float: left; width: 1020px; overflow: hidden;
  a{ float: left;margin-right: 10px;line-height: 30px;font-size: 14px;color: $font; &:hover{ color:$red; }}
}
</style>
