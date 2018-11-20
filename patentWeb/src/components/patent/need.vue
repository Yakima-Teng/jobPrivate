<template>
    <div class="content2_right">
        <div class="right_top">
            <h3>没有找到合适专利？</h3>
            <p>现在发布需求<br>将有<span>{{list.saleCount}}</span>位卖家会看到</p>
            <router-link to='/member/needs/release' target="_blank" >立即发布需求</router-link>
        </div>
        <div class="right_bottom">
            <div class="box" v-for="(item, index) in list.list" :key="index">
                <img src="../../assets/images/u26.jpg" alt="">
                <p><i>{{ item.nick }}</i> 发布需求</p>
                <em>{{ item.ago }}</em>
            </div>
        </div>
        <p class="fair">您还可以</p>
        <a href="javascript:void(0);" class="lxgw" @click="contactFun">联系中细软交易顾问</a>
    </div>
</template>

<script>
import { openzx } from '@/assets/js/util'

export default {
  name: 'Need',
  props: ['list'],
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
$border01: #ccc;
$border02: #ddd;
$red: #cc0000;
.content2_right{float: right; width: 260px;height: 600px;margin-top: 20px;
    .right_top{box-sizing: border-box; width: 260px;height: 190px;padding-left: 20px; background: -webkit-linear-gradient(left top,#cc0001,#9a6597);
        h3{width: 220px;height: 40px; font-size: 18px;color: #fff;line-height: 40px;}
        p{width: 220px;height: 40px; font-size: 12px;color: #fff; line-height: 20px;
            span{font-size: 18px;}
        }
        a{display: block;width: 120px;height: 40px;font-size: 14px;text-align: center;line-height: 40px;border: 1px solid #fff;color: #fff;margin-top: 30px;border-radius: 5px;}
    }
    .right_bottom{box-sizing: border-box; width: 100%;height: 320px;padding-left: 20px;padding-top: 10px; border-left: 1px solid #dddddd;border-right: 1px solid #dddddd;border-bottom: 1px solid #dddddd; 
        .box{width: 220px;height: 60px;border-bottom: 1px dashed #dddddd;
            &:nth-last-of-type(1){border-bottom: none;}
            img{float: left; width: 40px;height: 40px;margin-top: 10px;border-radius: 50%;}
            p{float: left; font-size: 12px;color: 999999;line-height: 60px;margin-left: 10px;
                i{color: #219f9e;}
            }
            em{float: right;color: 999999;font-size: 12px;line-height: 60px;}
        }
    }
    .fair{color: #666666;font-size: 12px;margin-top: 10px;line-height: 30px;text-align: center;}
    .lxgw{display: block; width: 160px;height: 40px;box-sizing: border-box; border: 1px solid #cc0000;border-radius: 5px;text-align: center;line-height: 40px;color:#cc0000;margin: 10px auto 0; }
}
</style>
