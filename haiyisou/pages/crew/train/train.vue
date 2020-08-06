<template>
	<view class="page-crew-proxy">
		<HeaderSearch></HeaderSearch>
		<view class="cert-list">
			<view class="cert-item" v-for="(item, index) in trainList" :key="index" @click="toCertInfo">
				<view class="cert-title">
					<view class="cert-title-title">
						<view class="cert-title-image" >培</view>
						{{item.trainItemName}}
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
	.cert-list {
		padding-top: 130rpx;
		padding-left: 30rpx;
		padding-right: 30rpx;

		.cert-item {
			padding-bottom: 30rpx;
			border-bottom: 0.5px solid #ddd;

			.cert-title {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20rpx 0rpx;

				.cert-title-image {
					margin-right: 18rpx;
					border: 1rpx solid #519DEB;
					border-radius: 40rpx;
					background-color: #519DEB;
					width: 60rpx;
					height: 60rpx;
					font-size: 30rpx;
					text-align: center;
					line-height: 60rpx;
					color: #FFFFFF;
					flex-direction: row;
					justify-content: center;
					align-items: center;
				}

				.cert-title-title {
					display: flex;
					align-items: center;
					font-size: 38rpx;
					font-weight: bold;
				}

				.cert-title-icon {
					padding: 10rpx 30rpx;
					background-color: #E4EBFD;
					border-radius: 25rpx;
					color: #519DEB;
				}
				
				.cert-title-icon-disabled {
					background-color: #EEEEEE;
					color: #FFFFFF;
				}
			}

			.cert-content {
				display: flex;
				color: #666666;
				padding: 5rpx 0rpx;

				.cert-content-title {}

				.cert-content-content {}
			}
		}
	}
</style>
