<template>
<view class="search-container">
	<view class="search-introduction">为您找到<text class="search-val">&#35;{{searchKey}}</text>相关结果<text class="search-number">{{resultList.length}}</text>条</view>
	<view class="containe-list" v-if="infoTabIndex == 1">
		<view v-for="(item, index) in resultList" class="containe-info" @click="goToShipInfo(item.shipRegNo)">
			<view class="containe-status">船</view>
			<view class="containe-main">
				<text class="info-name">{{item.shipNameCn}}</text>
				<view class="label-list">
					<text v-for="(labelItem, index) in item.labels.split('|')"  v-if="labelItem!='' && labelItem.split(':').length>1" class="label">
						{{labelItem.split(':')[1]}}
					</text>
				</view>
				<text class="info">英文名：{{item.shipNameEn}}</text>
				<text class="info">船舶标示：{{item.shipId}}</text>
			</view>
		</view>
	</view>
	<view class="containe-list" v-if="infoTabIndex == 2">
		<view v-for="(item, index) in resultList" class="containe-info" @click="goToCrewInfo(item.idCardNo)">
			<view class="containe-status">船</view>
			<view class="containe-main">
				<text class="info-name">{{item.name}}</text>
				<view class="label-list">
					<text v-for="(labelItem, index) in item.labels.split('|')"  v-if="labelItem.split(':').length>1" class="label">
						{{labelItem.split(':')[1]}}
					</text>
				</view>
				<text class="info">身份证号：{{item.idCardNo}}</text>
				<text class="info">现居地：{{item.homeAddr}}</text>
			</view>
		</view>
	</view>
	<view class="containe-list" v-if="infoTabIndex == 3">
		<view v-for="(item, index) in resultList" class="containe-info-1"  @click="goToDangerInfo(item.goodsCode)">
			<view class="containe-status">危</view>
			<view class="containe-main">
				<text class="info-name">{{item.goodsNameCn}}</text>
				<text class="info">{{item.goodsDes}}</text>
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
		props:{
			infoTabIndex: Number,
			resultList: Array,
			searchKey: String,
		},
		data() {
			return {
				
			}
		},
		methods: {
			goToShipInfo(shipRegNo) {
				uni.navigateTo({
				    url: '/pages/ship/basic/basic?shipRegNo='+shipRegNo
				});
			},
			goToCrewInfo(idCardNo) {
				uni.navigateTo({
				    url: '/pages/crew/index?idCardNo='+idCardNo
				});
			},
			goToDangerInfo(goodsCode) {
				uni.navigateTo({
				    url: '/pages/danger/info-danger?goodsCode='+goodsCode
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