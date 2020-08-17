<template>
	<view class="uni-margin-wrap">
		<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<block v-for="(item, index) in src" :key="index">
				<swiper-item>
					<image :src="item" class="swiper-item" mode="widthFix" style="width: 100%;"/>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>
<script>
	export default {
		name: 'uni-swiper',
		props: {
	        src: Array
	    },
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.detail.value
			},
			durationChange(e) {
				this.duration = e.detail.value
			}
		}
	}
</script>

<style>
	swiper-item {
		display: block;
		overflow: hidden;
		will-change: transform;
		border-radius: 5px;
	}
	.uni-margin-wrap {
		width:100%;
		/* margin:0 10rpx; */
	}
	.swiper {
		height: 250rpx;
		/* margin-right: 24rpx; */
	}
	.swiper-item {
		display: block;
		height: 180rpx;
		line-height: 180rpx;
		text-align: center;
		width: 100%;
		border-radius: 5px;
		margin: 0px;

	}
	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}

	.uni-common-mt{
		margin-top:60rpx;
		position:relative;
	}

	.info {
		position: absolute;
		right:20rpx;
	}

    .uni-padding-wrap {
        width:550rpx;
        padding:0 100rpx;
    }
</style>
