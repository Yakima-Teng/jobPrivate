<template>
<div class="preview">
  <div class="w1190">
    <card-left v-if="cardInfo" :cardInfo="cardInfo" @openEdit="openEdit"></card-left>
    <div class="show-main">
      <div class="top-nav">
          <router-link to="/member/myCard/pc">PC版</router-link>
          <a class="cur" href="javascript:void(0);">手机版</a>
          <!-- <a href="javascript:void(0);">小程序</a> -->
          <router-link v-if="cardInfo" target="_blank" :to="'/c/'+cardInfo.short+'/m'">预览</router-link>
      </div>
      <preview-wap-card @setCardInfo="setCardInfo"></preview-wap-card>
    </div>
  </div>
  <div class="mask" v-if="isEdit"></div>
  <card-edit v-if="cardInfo" :isEdit="isEdit" :cardInfo="cardInfo" @closeLayer="closeLayer"></card-edit>
</div>
</template>

<script>
import cardLeft from '@/components/member/card'
import cardEdit from '@/components/member/card-edit'
import previewWapCard from '@/views/preview-wap-card'
export default {
  components: {
    cardLeft,
    cardEdit,
    previewWapCard
  },
  data () {
    return {
      isEdit: false,
      cardInfo: null
    }
  },
  methods: {
    setCardInfo: function(cardInfo){
      this.cardInfo = cardInfo;
    },
    openEdit: function(isEdit){
      this.isEdit = isEdit;
    },
    closeLayer: function(){
      this.isEdit = false;
    }
  }
}
</script>


<style lang="scss" scoped>
$white: #fff;
$main: #333;
$red: #cc0000;
$border01: #ccc;
$border02: #ddd;


.preview{
  padding:30px 0;
  background-color: #f2f3f4;
  .w1190{
    overflow: hidden;
    .show-main{
      margin-left: 230px;
      .top-nav{width: 100%;height: 40px; margin-bottom: 20px;
        a{width: 110px;height: 40px;float: left;border-radius: 20px;color: #666;text-align: center;line-height: 40px;font-size: 14px; 
          &.cur{background-color: #cc0000;color: #fff; }
          &:last-child{float: right;box-sizing: border-box;border: 1px solid #cc0000;color: #cc0000;}
        }
      }
    }
  }
  .preview-card{
    position: relative;
    overflow: hidden;
  }
}

</style>
