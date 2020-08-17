<template>
	<view class="page-exam-list">
		<HeaderSearch></HeaderSearch>
		<view class="search-container">
			<listNull v-if="tableTile.length==0&&tableTilefsc.length==0"></listNull>
			<view class="containe-info" v-for="(item, index) in tableTile" :key="index" @click="examInfo(item.declareId)">
				<view class="containe-status">检</view>
				<view class="containe-main">
					<view class="info-name">
						<text class="name">{{item.inspectOrg}}</text>
						<text class="status by">{{item.preliminaryReviewSign}}</text>
					</view>
					<view class="info">
						<text class="number">检查地点：{{item.inspectionSite}}</text>
					</view>
					<view class="info">
						<text class="time">缺陷数：{{item.numberOfDefects}}</text>
					</view>
					<!-- <view class="info">
						<text class="number">初查复查标志：{{item.preliminaryReviewSign}}</text>
					</view> -->
					<view class="info">
						<text class="number">检查日期：{{item.inspectDate}}</text>
					</view>
					
				</view>
			</view>
			<view class="containe-info" v-for="(item, index) in tableTilefsc" :key="index" @click="examInfo(item.domesticSecurityNumber,type)">
				<view class="containe-status">检</view>
				<view class="containe-main">
					<view class="info-name">
						<text class="name">{{item.portCode}}</text>
						<text class="status by">{{item.preliminaryReviewSign}}</text>
					</view>
					<!-- <view class="info">
						<text class="number">检查港口：{{item.portCode}}</text>
					</view> -->
					<view class="info">
						<text class="time">缺陷数：{{item.numberOfDefects}}</text>
					</view>
					<view class="info">
						<text class="number">是否滞留：{{item.detentionMark}}</text>
					</view>
					<!-- <view class="info">
						<text class="number">初查复查标志：{{item.preliminaryReviewSign}}</text>
					</view> -->
					<view class="info">
						<text class="number">检查日期：{{item.inspectDate}}</text>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import HeaderSearch from '@/components/crew/header-searchwh';
import listNull from '@/components/search/list-null.vue';
export default {
	components: {
		HeaderSearch,
		listNull
	},
	data() {
		return {
			tableTile:[],
			tableTilefsc:[],
			title:"",
			type:''
		};
		
	},
	onLoad(options){
		this.shipId=options.shipId;
		this.type=options.type;
		this.getList(options.shipId,options.type);
	},
	methods: {
		examInfo(id,type) {
			// console.log(declareId);
			let url='';
			if(type==='fsc'){
				console.log('船舶fsc');
				url='/pages/ship/securityCheck/securityInfo?type='+this.type+'&id='+id
			}else{
				url='/pages/ship/securityCheck/securityInfo?type='+this.type+'&id='+id
			}
			uni.navigateTo({
				//url:'wh-info'
				url: url
			});
		},
		getList(shipId,type){
			if(type==='fsc'){
				this.api.request('/sea/Secure/ShipflagState?shipId='+shipId,{},'GET').then(res=>{
					 console.log('>>'+JSON.stringify(res));
					console.log('>>'+JSON.stringify(res.result));
					this.tableTilefsc=res.result;
					
				})
			}else{
				this.api.request('/sea/Secure/getSiteSupervision?shipId='+shipId,{},'GET').then(res=>{
					// console.log('>>'+JSON.stringify(res));
					console.log('>>'+JSON.stringify(res.result));
					this.tableTile=res.result;
					
				})
			}
			
		}
	}
}
</script>

<style lang="scss">
@import '@/components/search/list';
.search-container{ padding-top: 110rpx + 20rpx;
	.containe-main{
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
