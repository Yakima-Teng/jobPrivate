<template>
	<view class="page-crew-proxy">
		<HeaderSearch></HeaderSearch>
		<view class="cert-list">
			<view class="cert-item" v-for="(item, index) in trainList" :key="index" @click="toCertInfo">
				<view class="cert-title">
					<view class="cert-title-title">
						<view class="cert-title-image" >培</view>泰州市恒丰船务有限公司
					</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">时间：</view>
					<view class="cert-content-content">{{item.scheClasTime}}-{{item.scheGraduationTime}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">有效期至：</view>
					<view class="cert-content-content">{{item.proofEndTime}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">培训机构：</view>
					<view class="cert-content-content">{{item.trainOrgName}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">开班编号：</view>
					<view class="cert-content-content">{{item.trainOrgId}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">培训证明编号：</view>
					<view class="cert-content-content">{{item.trainproofNo}}</view>
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
				trainList: []
			}
		},
		onLoad() {
			this.getBaseInfo('520102199502022400');
		},
		methods: {
			toTrainInfo() {
				uni.navigateTo({
					url: './traininfo'
				})
			},
			/**
			 * @param {Object} idCard 		身份证号
			 */
			getBaseInfo(idCard){
				const that = this;
				//组装参数
				let params = {'parentId': ''};
				let url ='/sea/q/t?id_card_no='+idCard;
				//请求后台数据
				that.api.requestNoLoading(url)
				.then(res => {
					// if(res.code!=200){
					// 	uni.showToast({
					// 		title: res.msg,
					// 		icon:'none'
					// 	});
					// 	return;
					// }
					// that.baseInfo = res.result;//变量名称参照更新后的文档
					
					that.trainList = res;
					
				});	
			},
			toggleTimeSubset(index) {
				this.tabIndex = index;
				this.$emit('toggleTime');
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
