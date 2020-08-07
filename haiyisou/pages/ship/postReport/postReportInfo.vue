<template>
	<view class="page-postReport-info">
		<view class="postReport-info-header">
			<view class="info-header">
				<view class="info-out">
					<view class="city">青岛港 </view>
					<view class="time">07-01 15:32</view>
				</view>
				<view class="info-sep">
					<view class="status">进港</view>
					<view class="status-img"><image src="../../../static/icon-report.png" mode=""></image></view>
					<view class="status-description">靠泊泊位</view>
				</view>
				<view class="info-goin">
					<view class="city">连云港</view>
					<view class="time">07-01 15:32</view>
				</view>
			</view>
			<view class="info">
				<text>报告编号：CBBG202001010001 </text>
				<text>报告时间：2020-01-01 03:30:03</text>
			</view>
		</view>
		<view class="postReport-info-main">
			<view class="info-list-box">
				<view class="info-list" >
					<text class="left">申办人：</text>
					---
				</view>
				<view class="info-list" >
					<text class="left">申办人手机号：</text>
					---
				</view>
				<view class="info-list" >
					<text class="left">报告机构：</text>
					连云港海事局
				</view>
				<view class="info-list" >
					<text class="left">报告港口：</text>
					连云港港
				</view>
				<view class="info-list" >
					<text class="left">是否挂靠：</text>
					否
				</view>
				<view class="info-list" >
					<text class="left">前吃水：</text>
					3
				</view>
				<view class="info-list" >
					<text class="left">后吃水：</text>
					3
				</view>
				<view class="info-list" >
					<text class="left">停靠泊位：</text>
					娓ゆ捣鑸捐鐮佸ご
				</view>
				<view class="info-list" >
					<text class="left">实载货量：</text>
					0
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
@import '@/static/css/common';
.postReport-info-main{@extend .page-crew-basic;}
.postReport-info-header{ margin-bottom: 50rpx;
	.info-header{ background-color: #437FED; color:#fff; display: flex; justify-content: space-between; text-align: center; padding: 65rpx 90rpx;
		.city{font-size: 36rpx;}
		.time{ font-size: 24rpx; opacity: .6; margin-top: 24rpx;}
		.info-sep{ font-size: 24rpx;
			.status{ opacity: .8;}
			.status-description{ opacity: .6;}
			.status-img{width: 154rpx; height:18rpx; line-height:18rpx; border: 1rpx dotted rgba(136,136,136,1); margin: 12rpx 0; position: relative; z-index: 1;
				>image{ width: 152rpx; height:16rpx;}
			}
		}
	}
	.info{box-shadow:0px 2px 15px 0px rgba(10,55,82,0.15); background-color: #fff; font-size: 28rpx; color: rgba($color: #666, $alpha: .6); padding: 36rpx 40rpx;
		>text{ display: block;}
	}
}
</style>
