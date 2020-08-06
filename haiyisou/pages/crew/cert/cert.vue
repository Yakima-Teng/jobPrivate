<template>
	<view class="page-crew-proxy">
		<HeaderSearch></HeaderSearch>
		<view class="cert-list">
			<block v-for="(cItem, cIndex) in Object.keys(certList)" :key="cIndex">
				<view class="cert-item" v-for="(item, index) in certList[cItem]" :key="index" @click="toCertInfo">
					<view class="cert-title">
						<view class="cert-title-title">
							<view class="cert-title-image" >证</view>
							{{getTitle(cItem)}}
						</view>
						<view class="cert-title-icon"  :class="{'cert-title-icon-disabled':(item.certStatus=='无效')}" >{{item.certStatus}}</view>
					</view>
					<view class="cert-content">
						<view class="cert-content-title">证书编号：</view>
						<view class="cert-content-content">{{item.certIdcardNo}}</view>
					</view>
					<view class="cert-content">
						<view class="cert-content-title">发放单位：</view>
						<view class="cert-content-content">{{item.issuOrgCode}}</view>
					</view>
					<view class="cert-content">
						<view class="cert-content-title">有效时间：</view>
						<view class="cert-content-content">
						{{item.issuDate.substring(0, 10)}}
						-
						{{item.expiryDate==null?'永久':item.expiryDate.substring(0, 10)}}
						</view>
					</view>
				</view>
			</block>
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
				certList: {
					fwbList: [],
					hgzList: [],
					hgzitemList: [],
					gsbayList: [],
					hyzList: [],
					srzList: [],
					fzhsrzList: [],
					xhcsrzList: [],
					yhysrzList: [],
					nhxszgzList: [],
					ytjszList: [],
					jszgzList: [],
					nhgzList: [],
					nsrzList: [],
				}
			}
		},
		onLoad() {
			this.getBaseInfo('520102199502022400');
		},
		methods: {
			toCertInfo() {
				uni.navigateTo({
					url: './certinfo'
				})
			},
			/**
			 * @param {Object} idCard 		身份证号
			 * @param {Object} orderType	排序
			 * @param {Object} statusType	证书状态
			 * @param {Object} issuOrg		签发机构
			 */
			getBaseInfo(idCard, orderType, statusType, issuOrg){
				const that = this;
				//组装参数
				let params = {'parentId': ''};
				let url ='/sea/q/c?id_card_no='+idCard+'&certType=0';
				if(orderType!=null){
					url += '&orderBy='+orderType
				}
				if(statusType != null){
					url += '&status='+statusType
				}
				if(issuOrg != null){
					url += '&issuOrg='+issuOrg
				}
				//请求后台数据
				that.api.requestNoLoading(url)
				.then(res => {
					// console.log(JSON.stringify(res));
					if(res.code!=200){
						uni.showToast({
							title: res.message,
							icon:'none'
						});
						return;
					}
					// that.baseInfo = res.result;//变量名称参照更新后的文档
					
					let result = res.result[0];
						
					that.certList.fwbList = result.fwbList;
					that.certList.hgzList = result.hgzList;
					that.certList.hgzitemList = result.hgzitemList;
					that.certList.gsbayList = result.gsbayList;
					that.certList.hyzList = result.hyzList;
					that.certList.srzList = result.srzList;
					that.certList.fzhsrzList = result.fzhsrzList;
					that.certList.xhcsrzList = result.xhcsrzList;
					that.certList.yhysrzList = result.yhysrzList;
					that.certList.nhxszgzList = result.nhxszgzList;
					that.certList.ytjszList = result.ytjszList;
					that.certList.jszgzList = result.jszgzList;
					that.certList.nhgzList = result.nhgzList;
					that.certList.nsrzList = result.nsrzList;
				});	
			},
			getTitle(type){
				// fwbList	服务簿
				// hgzList	海船合格证
				// hgzitemList	海船合格证项目
				// gsbayList	海船公司保安员证
				// hyzList	海员证
				// srzList	海船适任证
				// fzhsrzList	海船非自航适任证
				// xhcsrzList	小海船适任证
				// yhysrzList	引航员适任证
				// nhxszgzList	内河行驶资格证
				// ytjszList	游艇驾驶证
				// jszgzList	技术资格证
				// nhgzList	内河合格证
				// nsrzList	内河适任证
				if(type.indexOf('fwbList')>=0){
					return '服务簿';
				}else if(type.indexOf('hgzList')>=0){
					return '海船合格证';
				}else if(type.indexOf('hgzitemList')>=0){
					return '海船合格证项目';
				}else if(type.indexOf('gsbayList')>=0){
					return '海船公司保安员证';
				}else if(type.indexOf('hyzList')>=0){
					return '海员证';
				}else if(type.indexOf('srzList')>=0){
					return '海船适任证';
				}else if(type.indexOf('fzhsrzList')>=0){
					return '海船非自航适任证';
				}else if(type.indexOf('xhcsrzList')>=0){
					return '小海船适任证';
				}else if(type.indexOf('yhysrzList')>=0){
					return '引航员适任证';
				}else if(type.indexOf('nhxszgzList')>=0){
					return '内河行驶资格证';
				}else if(type.indexOf('ytjszList')>=0){
					return '游艇驾驶证';
				}else if(type.indexOf('jszgzList')>=0){
					return '技术资格证';
				}else if(type.indexOf('nhgzList')>=0){
					return '内河合格证';
				}else if(type.indexOf('nsrzList')>=0){
					return '内河适任证';
				}
			},
			toggleTimeSubset(index) {
				console.log("111111111111111111"+index);
				
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
