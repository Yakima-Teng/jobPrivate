<template>
<view class="search-container">
	<view class="search-introduction">为您找到<text class="search-val">&#35;伟</text>相关结果<text class="search-number">1888</text>条</view>
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
		<view class="containe-info-1" @click="goToDangerInfo()">
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
			},
			goToDangerInfo() {
				uni.navigateTo({
				    url: '/pages/danger/info-danger'
				});
			}
		}
	}
</script>

<style lang="scss">
.search-introduction{ font-size:24rpx; color:#999; background-color: #fff; position: fixed; width: 100%; margin-top:-30rpx; left:0; padding:40rpx 40rpx 25rpx;
	>text{ margin:0 10rpx; }
	.search-val{ color:#3882f9;}
	.search-number{ color:#e23232;}
}
@import '@/components/search/list';
.containe-list{ padding-top: 54rpx; }
</style>