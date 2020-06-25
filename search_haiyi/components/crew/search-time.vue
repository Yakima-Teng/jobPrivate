<template>
	<view class="search-more-list">
    <view class="time" v-for="(item,index) in timeSearch" :key='index' @click="toggleTimeSubset(index)" :class="{'cur': tabIndex == index}" >{{item}}<text class="icon"></text></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabIndex: 0,
			timeSearch:['取得时间倒序','取得时间正序','取得时间随便序']
		};
	},
	methods: {
		toggleTimeSubset(index) {
			this.tabIndex = index;
			this.$emit('toggleTime');
		}
	}
}
</script>

<style lang="scss">
.search-more-list{ background-color: #fff; padding: 20rpx 40rpx; position: fixed; z-index: 9; width: 100%; box-sizing: border-box; font-size:34rpx; left:0; top:188rpx;
  .time{ padding: 35rpx 0 37rpx; border-bottom: 1rpx solid #e5e5e5; color:#191919; display: flex; justify-content: space-between;
    >.icon{ display: inline-block; width: 8px;height: 16px;border-color: #3882f9; border-style: solid; border-width: 0 1px 1px 0; transform: rotate(45deg); display: none; margin-right: 20rpx;}
    &.cur{ color:#3882f9;
      .icon{display: block;}
    }
  }
}
</style>
