<template>
	<view class="page-crew-proxy">
		<HeaderSearch></HeaderSearch>
		<view class="cert-list">
			<view class="cert-item" v-for="(item, index) in items" :key="index" @click="toCertInfo">
				<view class="cert-title">
					<view class="cert-title-title">
						<view class="cert-title-image">证</view>
						{{item.title}}
					</view>
					<view class="cert-title-icon">证件有效</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">证书编号：</view>
					<view class="cert-content-content">{{item.bh}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">发放单位：</view>
					<view class="cert-content-content">{{item.ffdw}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">有效时间：</view>
					<view class="cert-content-content">{{item.yxsj}}</view>
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
				items: [{
					title: '船舶注册服务簿',
					isuse: true,
					bh: '32010219850526321X',
					ffdw: '山东海事局',
					yxsj: '2013/01/01-永久'
				}, {
					title: '船舶注册服务簿',
					isuse: true,
					bh: '32010219850526321X',
					ffdw: '山东海事局',
					yxsj: '2013/01/01-永久'
				}, {
					title: '船舶注册服务簿',
					isuse: true,
					bh: '32010219850526321X',
					ffdw: '山东海事局',
					yxsj: '2013/01/01-永久'
				}]
			}
		},
		methods: {
			toCertInfo() {
				uni.navigateTo({
					url: './certinfo'
				})
			}
		}
	}
</script>

<style lang="scss">
  @import '@/static/css/common';
	.cert-list {
		padding-top: 130rpx;

	}
</style>
