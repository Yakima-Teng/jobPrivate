<template>
	<view class="search-approximate">
	  <view class="approximate-list">
	    <view class="approximate-info">
	      <view class="info-box">
	        <view class="icon-search">
	          <image src="../../static/icon-search.png" />
	        </view>
	        <view><text>甲</text>醛检测中心</view>
	      </view>
	      <view class="icon-more">
	        <image src="../../static/icon-more-01.png" />
	      </view>
	    </view>
	    <view class="approximate-info">
	      <view class="info-box">
	        <view class="icon-search">
	          <image src="../../static/icon-search.png" />
	        </view>
	        <view><text>甲</text>醛检测中心</view>
	      </view>
	      <view class="icon-more">
	        <image src="../../static/icon-more-01.png" />
	      </view>
	    </view>
	    <view class="approximate-info">
	      <view class="info-box">
	        <view class="icon-search">
	          <image src="../../static/icon-search.png" />
	        </view>
	        <view><text>甲</text>醛检测中心</view>
	      </view>
	      <view class="icon-more">
	        <image src="../../static/icon-more-01.png" />
	      </view>
	    </view>
	  </view>
		<LayerMaker></LayerMaker>
	</view>
</template>

<script>
import LayerMaker from '@/components/layer-maker';
export default {
	components: {
		LayerMaker
	},
	data() {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>

<style lang="scss">
.search-approximate{
	.approximate-list{ padding: 14rpx 40rpx 0; position: fixed; width: 100%; left:0; box-sizing: border-box; background-color: #fff; z-index:9; margin-top: -28rpx;}
  .approximate-info{ display: flex; align-items: center; justify-content: space-between; font-size:28rpx; padding: 35rpx 8rpx 35rpx 20rpx; border-bottom: 1rpx solid #e5e5e5;
    .info-box{ display: flex; align-items: center;
      text{ color:#3882f9;}
    }
    .icon-search{ margin-right: 28rpx;
      >image{ width: 32rpx; height:32rpx;}
    }
    .icon-more{ @extend .icon-search; margin: 0;}
  }
}
</style>
