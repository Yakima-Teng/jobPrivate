<template>
<div class="card-code">
    <div class="left-top">
        <p class="title">{{cardInfo.call}}<br>的专利名片</p>
        <div class="ll-wrap">
            <div class="liuliang">
                <h3>{{cardInfo.today}}</h3>
                <span>今日流量</span>
            </div>
            <div class="liuliang mar0">
                <h3>{{cardInfo.near30}}</h3>
                <span>近30天流量</span>
            </div>
        </div>
        <a href="javascript:void(0);" class="btn1" @click="openEditHandle">编辑</a>
        <a v-if="cardInfo.status == 1" href="javascript:void(0);" class="btn2" @click="useHandle(2)">停用</a>
        <a v-else href="javascript:void(0);" class="btn2" @click="useHandle(1)">启用</a>
    </div>
    <div class="left-bottom">
        <p class="saoma">扫码直接分享</p>
        <div><img :src="cardInfo.qrcode" alt=""><i></i></div>
        <p class="lianjie">{{cardInfo.url}}</p>
        <a href="javascript:void(0);" class="btn3" v-clipboard:copy="cardInfo.url" v-clipboard:success="onCopyFn" v-clipboard:error="onErrorFn">复制链接</a>
        <a target="_blank" :href="'http://patent.d.patent.local/card/download?uid='+cardInfo.uid" class="btn4">下载名片</a>
    </div>
</div>
</template>

<script>
import { api } from '@/assets/js/util.js'
export default {
  props: ['cardInfo'],
  methods: {
    openEditHandle: function(){
      this.$emit('openEdit', true);
    },
    onCopyFn: function() {
      alert('复制成功')
    },
    onErrorFn: function() {
      alert('复制失败')
    },
    useHandle: function(status){ // 停/启用 
      var Api = api();
      Api.post('/user/card/edit?token='+this.$store.state.token,{status: status}).then(function(res){
          if(res.data.code == 200 ){
              _this.$router.go(0);
          }
      });
    }
  }
  
}
</script>


<style lang="scss" scoped>
.card-code{float: left;width: 210px;height: 660px;background-color: #fff; box-sizing: border-box;padding:30px 20px 0;
  .left-top{width: 100%;overflow: hidden;
    .title{width: 100%;height: 60px;font-size: 18px;color: #333333;text-align: center; line-height: 30px;}
    .ll-wrap{width: 100%; overflow: hidden;margin-top: 20px; }
    .liuliang{float: left;width: 80px;height: 50px;margin-right: 10px;overflow: hidden;
      h3{width: 80px;line-height: 30px;text-align: center;font-size: 18px;color: #333;font-weight: bold; }
      span{display: block;width: 80px;line-height: 20px;font-size: 12px;color: #999;text-align: center; }
    }
    .mar0{margin-right: 0px;}
  }
  a{ clear: both; display: block;width: 140px;height: 40px;box-sizing: border-box;border: 1px solid #cccccc;border-radius: 5px;font-size: 14px;color: #333333;text-align: center;line-height: 40px;margin: 20px auto 0;
    &.btn1{border-color: #cc0000;color: #cc0000;}
  }
  .left-bottom{width: 100%;margin-top: 20px;overflow: hidden;
    .saoma{width: 170px;height: 30px;font-size: 12px;color: #666;text-align: center;line-height: 30px; }
    div{position: relative; width: 140px;height: 140px;margin: 10px auto 0; 
      img{width: 140px;height: 140px; }
    }
    .lianjie{width: 170px;height: 40px; word-break: break-word;line-height: 20px;font-size: 12px;color: #999;margin-top: 13px;text-align: center; }
    a.btn3{margin-top: 10px;background-color: #cc0000;color: #fff;border: none; }
  }
}
</style>
