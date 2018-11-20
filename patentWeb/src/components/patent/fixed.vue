<template>
<div class="fixed">
    <div class="tanchu">
        <div class="tanchu-title">
            <p>要询价的专利</p>
            <a href="javascript:void(0);"></a>
        </div>
        <ul>
            <li>
                <div class="li-top">
                    <p>一种薏仁米糕的加工方法</p>
                    <a href="javascript:void(0);" class="delete"></a>
                </div>
                <div class="li-middle">
                    <i>已下证</i>
                    <p>申请号：2013105039145</p>
                </div>
                <div class="li-btm"><span>议价</span></div>
            </li>
            <li>
            <div class="li-top">
                    <p>一种视频监控设备支架的地面固定装置一种视频监控设备支架的地面固定装置</p>
                    <a href="javascript:void(0);" class="delete"></a>
                </div>
                <div class="li-middle">
                    <i>已下证</i>
                    <p>申请号：2013105039145</p>
                </div>
                <div class="li-btm"><span>￥9832</span></div>
            </li>
            <li>
                <div class="li-top">
                    <p>一种薏仁米糕的加工方法</p>
                    <a href="javascript:void(0);" class="delete"></a>
                </div>
                <div class="li-middle">
                    <i>已下证</i>
                    <p>申请号：2013105039145</p>
                </div>
                <div class="li-btm"><span>议价</span></div>
            </li>
        </ul>
        <a href="javascript:void(0);" class="commit">提交</a>
    </div>
    <div class="meau-gotop-box">
        <a class="gotop-box-head">
            <span>0</span>
        </a>
        <a @click="contactFun" class="gotop-box-ctt"></a>
        <a @click="backTopFn" class="gotop-box-footer"></a>
    </div>
</div>

</template>

<script>
import { openzx } from '@/assets/js/util'

export default {
  name: 'Fixed',
  data () {
    return {
      
    }
  },
  methods: {
    contactFun: function(){
        openzx();
    },
    backTopFn() {
      console.log(123);
      $('html').animate({ scrollTop: 0 }, 300);
    }
  }
}
</script>

<style lang="scss" scoped>
$main: #333;
$border01: #ccc;
$border02: #ddd;
$red: #cc0000;
.fixed{
    position: fixed; width: 272px; height: 100%; top: 0; right: 0; z-index: 9;transition:ease .4s; transform: translateX(270px);
    // &:hover{ transform: translateX(0); }
    .tanchu{width: 270px;height: 100%;background-color: #fff; position: absolute;top: 0px;left: 0px;border-left: 2px solid #333333;
        .tanchu-title{position: relative; width: 100%;height: 50px;border-bottom: 1px solid #666666;
            p{line-height: 50px;color: #cc0000;font-size: 14px;text-align: center;}
            a{position: absolute;left: 20px;top: 15px; width: 12px;height: 20px;background:url("../../assets/images/patent/sh.png") no-repeat 0 0;}
        }
        ul{width: 100%;box-sizing: border-box;padding-left: 20px;padding-top: 10px;
            li{width: 230px;border-bottom: 1px solid #dddddd;box-sizing: border-box;padding-top: 10px; padding-bottom: 18px;
                .li-top{width: 100%;overflow: hidden;
                    p{float: left; font-size: 14px;color: #333333;width: 190px; line-height: 20px;}
                    a{float: right;width: 16px;height: 16px;background: url("../../assets/images/patent/delete.png") no-repeat 0 0;}
                }
                .li-middle{clear: both;width: 100%;margin-top: 10px;overflow: hidden;
                    i{float: left;width: 50px;height: 24px;box-sizing: border-box;text-align: center;line-height: 24px;font-size: 12px;color: #666666;border: 1px solid #d7d7d7;border-radius: 5px;}
                    p{float: right;line-height: 24px;color: #999999;font-size: 12px;}
                }
                .li-btm{clear: both;width: 100%; height: 20px;margin-top:10px;
                    span{font-size: 14px;color: #cc0000;}
                }
            }
        }
        .commit{display: block; width: 230px;height: 36px;background-color: #cc0000;border-radius: 5px;text-align: center;line-height: 36px;color: #fff;margin-top: 20px;margin-left: 20px;}
    }
    .meau-gotop-box{position: absolute; width: 40px; height: 160px; top: 300px; left: -40px;
        .gotop-box-head{display: block; width: 40px;height: 70px;box-sizing: border-box;padding-top: 40px;background: url("../../assets/images/patent/gouwuche.png") no-repeat 7px 10px #333333;border-top-left-radius: 5px;border-bottom-left-radius: 5px;
            span{display: block; width: 20px;height: 20px;border-radius: 50%;background-color: #cc0000;text-align: center;line-height: 20px;color: #fff;margin-left: 10px;}
        }
        .gotop-box-ctt, .gotop-box-footer{display:block; width: 40px;height: 40px;box-sizing: border-box;border: 1px solid #dddddd;border-top-left-radius: 5px;border-bottom-left-radius: 5px;margin-top: 5px;}
        .gotop-box-ctt{background: url("../../assets/images/patent/on-line2.png") no-repeat 6px 7px;background-size: 28px 28px;}
        .gotop-box-footer{background: url("../../assets/images/patent/to-top.png") no-repeat 10px 10px;}
    }
    &.active{ transform: translateX(0);}
}


</style>
