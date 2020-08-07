<template>
	<view class="page-exam-list">
		<HeaderSearch></HeaderSearch>
		<view class="search-container">
			<listNull v-if="tableTile.length==0"></listNull>
			<view class="containe-info" v-for="(item, index) in tableTile" :key="index" @click="examInfo(item.declareId)">
				<view class="containe-status">危</view>
				<view class="containe-main">
					<view class="info-name">
						<text class="name">{{item.companyName}}</text>
						<text class="status by">{{item.declareStatus}}</text>
					</view>
					<view class="info">
						<text class="number">申报员姓名：{{item.declarerName}}</text>
						<text class="time">申报时间：{{(item.declareTime).substring(0,10)}}</text>
					</view>
					<view class="info">
						<text class="number">申报方式：{{item.declareWay}}</text>
					</view>
					<view class="info">
						<text class="number">申报账号：{{item.declareAccount}}</text>
					</view>
					<view class="info">
						<text class="number">审&nbsp;&nbsp;批&nbsp;号：{{item.declareId}}</text>
					</view>
					
				</view>
			</view>
			<!-- <view class="containe-info">
				<view class="containe-status">危</view>
				<view class="containe-main">
					<view class="info-name">
						<text class="name">危险/污染危害性货物申报（包装货物）</text>
						<text class="status fail">通过</text>
					</view>
					<view class="info">
						<text class="number">J0511070720017</text>
						<text class="time">有效期：2018/11/22</text>
					</view>
				</view>
			</view>
			 -->
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
			title:""
		};
		
	},
	onLoad(options){
		this.cbsbnum=options.cbsbnum;
		this.type=options.type;
		this.getWhListByType(this.type);
	},
	methods: {
		examInfo(declareId) {
			console.log(declareId);
			let url='';
			if((this.type).indexOf('szytsb')!=-1||(this.type).indexOf('bzhwsb')!=-1||(this.type).indexOf('gtszhw')!=-1){
				console.log('船舶载运危险/污染危害性货物申报信息');
				url='/pages/ship/dangerousGoodsList/wh-sbinfo?type='+this.type+'&declareId='+declareId
			}else{
				url='/pages/ship/dangerousGoodsList/wh-info?type='+this.type+'&declareId='+declareId
			}
			uni.navigateTo({
				//url:'wh-info'
				url: url
			});
		},
		getWhListByType(str){
			this.api.request('/sea/view/getGoodsDeclaration?type='+this.cbsbnum+'&begin_time=2019-01-01&end_time=2020-07-13',{},'GET').then(res=>{
				console.log('>>'+JSON.stringify(res));
				if(str==='szytsb'){
					console.log(res.result[0].szytsb);
					this.tableTile=res.result[0].szytsb;
				}
				if(str==='bzhwsb'){
					this.tableTile=res.result[0].bzhwsb;
				}
				if(str==='gtszhw'){
					console.log(res.result[0].gtszhw);
					this.tableTile=res.result[0].gtszhw;
				}
				if(str==='szythy'){
					console.log(res.result[0].szythy);
					this.tableTile=res.result[0].szythy;
				}
				if(str==='bzhwhy'){
					console.log(res.result[0].bzhwhy);
					this.tableTile=res.result[0].bzhwhy;
				}
				if(str==='gtszhy'){
					console.log(res.result[0].gtszhy);
					this.tableTile=res.result[0].gtszhy;
				}
			})
		}
	}
}
</script>

<style lang="scss">
@import '@/components/search/list';
.search-container{ padding-top: 110rpx + 20rpx;
  .containe-status{width:48rpx;height:48rpx; line-height:48rpx; text-align: center; background:rgba(253,238,238,1);border-radius:50%; border: none;font-size:24rpx; color:rgba(226,50,50,1);}
	.containe-main{ width: calc( 100% - 48px);
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
