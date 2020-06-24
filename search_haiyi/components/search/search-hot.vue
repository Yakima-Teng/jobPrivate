<template>
	<view class="search-hot">
	  <view class="hot-header">
	    <view class="hot-header-box">
	      <view class="icon-hot">
	        <image src="../../static/icon-hot.png" />
	      </view>
	      <text class="hot-h2">搜索热词</text>
	    </view>
	    <view class="replace">换一换</view>
	  </view>
	  <view class="hot-list">
	    <view class="hot-info">乙烷<text>（235）</text></view><view class="hot-info">二甲氧基乙烷<text>（235）</text></view><view class="hot-info">渤海金珠<text>（235）</text></view>
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.search-hot{ padding:0 40rpx; 
  .hot-header{ display: flex; justify-content: space-between; align-items: center;
    .hot-header-box{ display: flex; font-size:40rpx;}
    .icon-hot{ margin-right: 10rpx;
      >image{ width: 48rpx; height:48rpx;}
    }
    .replace{ font-size:28rpx; color:#999999;}
  }
  .hot-list{ font-size:28rpx; margin-top: 24rpx;
    .hot-info{ background-color: #f0eff4; padding: 15rpx 20rpx; display: inline-block; border-radius:10rpx; margin:0 20rpx 20rpx 0;
      >text{ color:#999;}
    }
  }
}
</style>