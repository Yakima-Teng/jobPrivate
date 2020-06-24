<template>
<view class="search-container">
	<view class="containe-list" v-if="infoTabIndex == 1">
		<view class="containe-info">
			<view class="containe-status">员</view>
			<view class="containe-main">
				<text class="info-name">李伟健（LiWeiJian）</text>
				<view class="label-list">
					<text class="label">航海学校</text>
					<text class="label">二副</text>
				</view>
				<text class="info">身份证号：510522711209037</text>
				<text class="info">现居地：江苏省连云港市某区某路</text>
			</view>
		</view>
	</view>
	<view class="containe-list" v-if="infoTabIndex == 2">
		<view class="containe-info" @click="goToCrewInfo()">
			<view class="containe-status">船</view>
			<view class="containe-main">
				<text class="info-name">李伟健（LiWeiJian）</text>
				<view class="label-list">
					<text class="label">航海学校</text>
					<text class="label">二副</text>
				</view>
				<text class="info">身份证号：510522711209037</text>
				<text class="info">现居地：江苏省连云港市某区某路</text>
			</view>
		</view>
	</view>
	<view class="containe-list" v-if="infoTabIndex == 3">
		<view class="containe-info-1">
			<view class="containe-status">船</view>
			<view class="containe-main">
				<text class="info-name">1,2,3,6-四氢化苯甲醛</text>
				<text class="info">1,2,3,6-四氢化苯甲醛(1,2,3,6-tetrahydrobenzaldehyde, C7H10O)是一种无色液体, 有一种令人舒适的</text>
				<view class="info-link">
					<text>基本信息</text>|<text>成分识别</text>|<text>物理化学特性</text>|<text>物理化学特性</text>|<text>物理化学特性</text>
				</view>
			</view>
		</view>
	</view>
</view>
</template>

<script>
	export default {
		props:['infoTabIndex'],
		data() {
			return {
				
			}
		},
		methods: {
			goToCrewInfo() {
				uni.navigateTo({
				    url: '/pages/crew/index'
				});
			}
		}
	}
</script>

<style lang="scss">
.search-container{ padding: 0 40rpx;
  .containe-info{ padding: 30rpx 0; border-bottom:1rpx solid #e5e5e5; overflow: hidden;
    .containe-status{ float: left; width: 80rpx; height:80rpx; background-color: #73a7fb; border-radius:20rpx; margin-right: 20rpx; color: #fff; text-align: center; line-height: 80rpx;}
    .containe-main{ width: calc( 100% - 100rpx); float: left; 
      .info-name{ font-size:36rpx;}
      .label-list{ margin:10rpx  0;
        .label{ width: 120rpx; height:40rpx; line-height: 40rpx; font-size:24rpx; color:#3882f9; background-color: #ebf2fe; display: inline-block; text-align: center; margin: 0 10rpx 10rpx 0; border-radius: 10rpx;}
      }
      .info{ display: block; color:#666; font-size:28rpx;}
    }
  }
  .containe-info-1{@extend .containe-info;
    .containe-main{
      .info{margin: 17rpx 0; font-size:24rpx; color:#999; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;}
      .info-link{white-space: nowrap; text-overflow:ellipsis; overflow: hidden; font-size:28rpx; color: #ccc; margin-left: -22rpx;
        >text{ color:#3882f9; margin: 0 22rpx;}
      }
    }
  }
}
</style>