<template>
	<view class="page-crew-exam">
		<view class="title">适认证考试</view>
		<view class="exam-box">
			<view class="exam-bg">
				<image src="../../static/img-01.png" />
			</view>
			<view class="exam-btn">立即查看</view>
		</view>
		<view class="title">院校免考</view>
		<view class="exam-box">
			<view class="exam-bg">
				<image src="../../static/img-02.png" />
			</view>
			<view class="exam-btn">立即查看</view>
		</view>
		<view class="title">培训考试记录</view>
		<view class="exam-box">
			<view class="exam-bg">
				<image src="../../static/img-03.png" />
			</view>
			<view class="exam-btn">立即查看</view>
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
.page-crew-exam{ padding: 0 40rpx;
	.title{ font-size:36rpx; margin: 48rpx 0 27rpx;}
	.exam-box{ position: relative; height: 200rpx;  display: flex; justify-content: center; align-items: center; 
		.exam-bg{ height: 200rpx; width: 100%; position: absolute; left:0; top:0;
			>image{width: 100%; height:100%;}
		}
		.exam-btn{ position: relative; z-index:10; background-color: #fff; width: 266rpx; height:60rpx; line-height:60rpx; font-size:34rpx; text-align: center;
			&::before{ content:''; box-sizing: border-box; border:1rpx solid #fff; background-color: transparent; position: absolute; width: 282rpx; height:76rpx; left:-8rpx; top:-8rpx;}
		}
	}
}
</style>
