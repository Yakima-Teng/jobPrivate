<template>
	<view class="page-crew-illgal">
    <HeaderSearch></HeaderSearch>
    <view class="illgal-year-container">
      <view class="illgal-year">2019年度</view>
      <view class="illgal-info">
        <view class="info-number">
          <view class="txt">本次记分</view>
          <view class="number">15</view>
        </view>
        <view class="info-number">
          <view class="txt">周期内<br>有效分</view>
          <view class="number">15</view>
        </view>
        <view class="info-number">
          <view class="txt">本次记分</view>
          <view class="number">15</view>
        </view>
        <view class="info-number">
          <view class="txt">总分</view>
          <view class="number">15</view>
        </view>
        <view class="info-number">
          <view class="txt">两周期<br>总分</view>
          <view class="number">15</view>
        </view>
      </view>
      <view class="illgal-else">
        <view class="else">当前状态：有效</view>
        <view class="else">扣证标志：扣证（适任证都已注销）</view>
        <view class="else">记分警示：<text>2</text>条<text class="icon-more" :class="[containerVisible ? 'cur' : '']" @click="toggleMost()"></text></view>
      </view>
    </view>
    <view class="seniority-container" v-if="containerVisible">
      <view class="seniority-list">
        <view class="seniority-time">2013年06月02日-11月03日<text>有效</text></view>
        <view class="seniority-content">
          <view class="info" v-for="item in items" :key='item.message'>{{item.message}}：<text>{{item.info}}</text></view>
        </view>
      </view>
      <view class="seniority-list">
        <view class="seniority-time">2013年06月02日-11月03日<text class="null">无效</text></view>
        <view class="seniority-content">
          <view class="info" v-for="item in items" :key='item.message'>{{item.message}}：<text>{{item.info}}</text></view>
        </view>
      </view>
    </view>
    <view class="illgal-year-container">
      <view class="illgal-year">2018年度</view>
      <view class="illgal-info">
        <view class="info-number">
          <view class="txt">本次记分</view>
          <view class="number">15</view>
        </view>
        <view class="info-number">
          <view class="txt">周期内<br>有效分</view>
          <view class="number">15</view>
        </view>
        <view class="info-number">
          <view class="txt">本次记分</view>
          <view class="number">15</view>
        </view>
        <view class="info-number">
          <view class="txt">总分</view>
          <view class="number">15</view>
        </view>
        <view class="info-number">
          <view class="txt">两周期<br>总分</view>
          <view class="number">15</view>
        </view>
      </view>
      <view class="illgal-else">
        <view class="else">当前状态：有效</view>
        <view class="else">扣证标志：扣证（适任证都已注销）</view>
        <view class="else">记分警示：<text>0</text>条<text class="icon-more"></text></view>
      </view>
    </view>    
	</view>
</template>
<script>
import HeaderSearch from '@/components/crew/header-search';
export default {
  components: {
    HeaderSearch
  },
  data() {
    return {
      containerVisible: false, //containerVisible模块展示
      items:[{
        message:'计分分值',
        info:'15'
      },{
        message:'计分原因',
        info:'合格证,适任证,服务簿,外派报备'
      },{
        message:'违法行为代码',
        info:'10001'
      },{
        message:'计分机关名称',
        info:'积分机关名称'
      },{
        message:'执法人姓名',
        info:'李鸣宇'
      }]
    }
  },
  methods: {
    toggleMost() {
      this.containerVisible = !this.containerVisible;
    }
  }
}
</script>

<style lang="scss">
@import '@/pages/crew/info';
.seniority-container{ padding-top: 0;}
.seniority-time{ display: flex; justify-content: space-between; align-items: center;
  text{ width: 110rpx; height:48rpx; border-radius:20rpx; background-color: #ebf2fe; color:#3882f9; line-height:48rpx; text-align: center; font-size:24rpx;
    &.null{ background-color: #c4c4c4; color:#fff;}
  }
}
.seniority-content{ padding-bottom: 26rpx;}
/*page-crew-illgal*/
.page-crew-illgal{ padding-top: 100rpx;
  .page-header-search{ margin-top:-100rpx;}
}
.illgal-year-container{padding: 0rpx 40rpx 40rpx; position: relative;
  &::before{ content:''; display: block; position: absolute; top: -50rpx; height:1rpx; width: calc( 100% - 80rpx ); background-color: #e5e5e5; }
  .illgal-year{ font-size:36rpx; display: flex; align-items: center; margin: 50rpx 0 20rpx;
    &::before{ content:'违'; display: block; color:#fff; border-radius:100%; background-color:#3882f9; width: 50rpx; height: 50rpx; text-align: center; font-size:24rpx; line-height: 50rpx; margin-right: 22rpx;}
  }
  .illgal-info{ border-radius:20rpx; background-color: #3882f9; text-align: center; padding: 30rpx 20rpx; color:#fff; box-shadow: 0 10rpx 15rpx rgba($color: #0a3752, $alpha: .3); margin-bottom: 22rpx;
    .info-number{ position: relative; display: inline-block; width: 20%; vertical-align: top;
      &::after{content: ''; display: block; width: 2rpx; height:20rpx; background-color: #fff; position: absolute; right:0; top: 8rpx;}
      &:last-child{ 
        &::after{ display: none; }
      }
    }
    .txt{ opacity: .7; line-height: 33rpx; font-size:24rpx; height:60rpx; margin-bottom: 20rpx;}
    
  }
  .illgal-else{ font-size:28rpx; color:#666; line-height: 38rpx;
    text{ color:#3882f9;}
    .icon-more{display: inline-block; width: 19rpx; height: 19rpx; border-color: #3882f9; border-style: solid; border-width: 0 1rpx 1rpx 0; transform: rotate(45deg); margin-left: 20rpx; position: relative; top: -5rpx;
      &.cur{ transform: rotate(225deg);  top: 10rpx;}
    }
  }
}
</style>
