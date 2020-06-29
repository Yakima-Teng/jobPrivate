<template>
	<view class="big">
		<view class="trade">
			<view class="texts" :class="curr==0?'active':''" data-index="0" @tap="setCurr">
				第一个页面
			</view>
			<view class="texts" :class="curr==1?'active':''" data-index="1" @tap="setCurr">
				第二个页面
			</view>
			<view class="texts" :class="curr==2?'active':''" data-index="2" @tap="setCurr">
				第三个页面
			</view>
		</view>
		<swiper style="height: 100vh;" :current="curr" @change="setCurr">
			<swiper-item>
				<scroll-view>
					aaa
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view>
					bbb
				</scroll-view>
			</swiper-item>	
			<swiper-item>
				<scroll-view>
					ccc
				</scroll-view>
			</swiper-item>			
		</swiper>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				curr:0
			}
		},
		methods: {
			setCurr(e) {
			// console.log(e.detail.current)
			let thisCurr = e.detail.current || e.currentTarget.dataset.index || 0;
			// console.log(thisCurr)
			this.curr = thisCurr;
			}
		}
	}
</script>
<style>
	.trade{
		width: 100%;
		color: #007AFF;
		overflow: auto;
	}
	.trade view{
		text-align: center;
		padding-left: 25upx;
		width: 30%;
		float: left;
	}
	.trade .texts.active{
		border-bottom: 8upx solid #F0AD4E;
	}
</style>
