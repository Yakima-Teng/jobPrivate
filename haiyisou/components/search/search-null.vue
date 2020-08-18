<template>
<view class="search-null">
  <view class="img-null">
    <image src="../../static/bg-null.png" />
  </view>
  <text>无检索结果，换个关键词试试！</text>
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
.search-null{ display:flex; flex-direction: column;  align-items: center;
  .img-null{ margin: 122rpx 0 30rpx;
    >image{ width: 262rpx; height:239rpx;}
  }
  >text{ font-size:32rpx; color:#666;}
}
</style>
