<template>
	<view class="page-exam-list">
		<HeaderSearch></HeaderSearch>
		<view class="search-container">
			<view class="containe-info" @click="examInfo()">
				<view class="containe-status">考</view>
				<view class="containe-main">
					<view class="info-name">
						<text class="name">11规则机工/水手/G证/技工合适任证考试</text>
						<text class="status by">未通过</text>
					</view>
					<view class="info">
						<text class="number">J0511070720017</text>
						<text class="time">有效期：2018/11/22</text>
					</view>
				</view>
			</view>
			<view class="containe-info">
				<view class="containe-status">考</view>
				<view class="containe-main">
					<view class="info-name">
						<text class="name">11规则机工/水手/G证/技工合适任证考试</text>
						<text class="status fail">通过</text>
					</view>
					<view class="info">
						<text class="number">J0511070720017</text>
						<text class="time">有效期：2018/11/22</text>
					</view>
				</view>
			</view>
			<view class="containe-info">
				<view class="containe-status">考</view>
				<view class="containe-main">
					<view class="info-name">
						<text class="name">11规则机工/水手/G证/技工合适任证考试</text>
						<text class="status fail">通过</text>
					</view>
					<view class="info">
						<text class="number">J0511070720017</text>
						<text class="time">有效期：2018/11/22</text>
					</view>
				</view>
			</view>
			<view class="containe-info">
				<view class="containe-status">考</view>
				<view class="containe-main">
					<view class="info-name">
						<text class="name">11规则机工/水手/G证/技工合适任证考试</text>
						<text class="status fail">通过</text>
					</view>
					<view class="info">
						<text class="number">J0511070720017</text>
						<text class="time">有效期：2018/11/22</text>
					</view>
				</view>
			</view>
			<view class="containe-info">
				<view class="containe-status">考</view>
				<view class="containe-main">
					<view class="info-name">
						<text class="name">11规则机工/水手/G证/技工合适任证考试</text>
						<text class="status fail">通过</text>
					</view>
					<view class="info">
						<text class="number">J0511070720017</text>
						<text class="time">有效期：2018/11/22</text>
					</view>
				</view>
			</view>
			<view class="containe-info">
				<view class="containe-status">考</view>
				<view class="containe-main">
					<view class="info-name">
						<text class="name">11规则机工/水手/G证/技工合适任证考试</text>
						<text class="status fail">通过</text>
					</view>
					<view class="info">
						<text class="number">J0511070720017</text>
						<text class="time">有效期：2018/11/22</text>
					</view>
				</view>
			</view>
			<view class="containe-info">
				<view class="containe-status">考</view>
				<view class="containe-main">
					<view class="info-name">
						<text class="name">11规则机工/水手/G证/技工合适任证考试</text>
						<text class="status fail">通过</text>
					</view>
					<view class="info">
						<text class="number">J0511070720017</text>
						<text class="time">有效期：2018/11/22</text>
					</view>
				</view>
			</view>
			<view class="containe-info">
				<view class="containe-status">考</view>
				<view class="containe-main">
					<view class="info-name">
						<text class="name">11规则机工/水手/G证/技工合适任证考试</text>
						<text class="status fail">通过</text>
					</view>
					<view class="info">
						<text class="number">J0511070720017</text>
						<text class="time">有效期：2018/11/22</text>
					</view>
				</view>
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
			
		};
	},
	methods: {
		examInfo() {
			uni.navigateTo({
					url: '/pages/crew/exam/exam-info'
			});
		}
	}
}
</script>

<style lang="scss">
@import '@/components/search/list';
.search-container{ padding-top: 110rpx + 20rpx;
 .containe-status{width:48rpx;height:48rpx; line-height:48rpx; text-align: center; background:rgba(56,130,249,.1);;border-radius:50%; border: none;font-size:24rpx; color:#3882F9;}
	.containe-main{width: calc(100% - 88rpx);
		.info-name{ display: flex; justify-content: space-between; font-size:36rpx; line-height: 48rpx;
			.status{ font-size: 28rpx; width: 150rpx; height:48rpx; line-height: 48rpx; text-align: center; border-radius: 20rpx;
				&.fail{ background-color: #eaf7f7; color:#30adb5;}
				&.by{ background-color: #feecec; color: #da3e3e;}
			}
		}
		.info{ display: flex; justify-content: space-between; font-size: 28rpx; color: #666; margin-top: 20rpx; line-height: 28rpx;}
	}
}
</style>
