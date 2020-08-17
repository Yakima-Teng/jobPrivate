<template>
	<view class="page-danger-info">
		    <view class="danger-info-list">
		    	<view class="danger-info">
					<view v-if="isShow">
					<view class="info" >
						<text class="title">编号：</text>
						<text class="txt">{{MeasureData.dangerCode}}</text>
					</view>
					<view class="info" >
						<text class="title">模型名称：</text>
						<text class="txt">{{MeasureData.dangerName}}</text>
					</view>
					</view>
					<view v-if="Showyl">
					<view class="info" >
						<text class="title">编号：</text>
						<text class="txt">{{MeasureData.overflowNo}}</text>
					</view>
					<view class="info" >
						<text class="title">名称：</text>
						<text class="txt">{{MeasureData.overflowName}}</text>
					</view>
					</view>
					<view v-if="ShowJzl">
					<view class="info" >
						<text class="title">编号：</text>
						<text class="txt">{{jzlList.stowageCode}}</text>
					</view>
					<view class="info" >
						<text class="title">名称：</text>
						<text class="txt">{{jzlList.stowageName}}</text>
					</view>
					<view class="info" >
						<text class="title">船舶类型：</text>
						<text class="txt">{{jzlList.shipType}}</text>
					</view>
					<view class="info" >
						<text class="title">积载要求：</text>
						<text class="txt">{{jzlList.stowageAsk}}</text>
					</view>
					</view>
					<view v-for="(item,index) in xqList" :key="index">
						<view class="info">
							<text class="title">{{item.dangerTypeName}}：</text>
							<text class="txt"><B>{{item.dangerDetailName}}</B></br>{{item.dangerDetailContent}}</text>
							</view>
					</view>
		    	</view>
		    </view>
	</view>
</template>

<script>
import luBarTabNav from "@/components/lu-bar-tab-nav/lu-bar-tab-nav";
export default {
  components:{ luBarTabNav },
	data() {
		return {
		
      barFixed: true,
      barHeight: "44",
      barTop: 0,
      iconShow: true,
      ShowJzl: false,
      Showyl: false,
      barId: "0",
	  xqList:[],
	  isShow:false,
	  MeasureData:{},
	  jzlList:{},
	  //轮播图标
	  imgUrls: [
	  	'/sam-interface/ftl/images/index/swiper-banner.jpg',
	  	'/sam-interface/ftl/images/index/swiper-banner.jpg',
	  	'/sam-interface/ftl/images/index/swiper-banner.jpg',
	  ],
	  };
	},
	onPageScroll: function(e) {
	    this.$refs.barTabNav._selectedTab(e.scrollTop);
	},
  mounted: function () {
   
  },
  onLoad(options){
	  console.log('??'+options.lb);
	  if(options.lb=='1'){//溢漏
		this.Showyl=true;
		   this.getYlxq(options.code);
	  }else if(options.lb=='2'){
		  this.ShowJzl=true;
		  this.getJzlxq(options.code);
	  } else{
		  this.isShow=true
		  this.getSgyjxq(options.code);
	  }
	  
	  
	
  },
	methods: {
		//应急处置xq
		getSgyjxq(code){
			//请求后台数据
			this.api.requestNoLoading('/dg/fireEme/getData?code='+code,{},'GET')
			.then(res => {
				 console.log('>>'+JSON.stringify(res));
				/* if(res.code!=200){
					uni.showToast({
						title: res.message,
						icon:'none'
					});
					return;
				} */
				this.xqList=res.result[0].DetailData;
				this.MeasureData=res.result[0].MeasureData;
				
			});	
		},
		getYlxq(code){
			//请求后台数据
			this.api.requestNoLoading('/dg/overflowEme/getData?code='+code,{},'GET')
			.then(res => {
				 console.log('>>'+JSON.stringify(res));
				/* if(res.code!=200){
					uni.showToast({
						title: res.message,
						icon:'none'
					});
					return;
				} */
				this.xqList=res.result[0].DetailData;
				this.MeasureData=res.result[0].MeasureData;
				
			});	
		},
		getJzlxq(code){
			//请求后台数据
			this.api.requestNoLoading('/dg/stow/getStowDataByCode?stowagCode='+code,{},'GET')
			.then(res => {
				 console.log('>>'+JSON.stringify(res));
				/* if(res.code!=200){
					uni.showToast({
						title: res.message,
						icon:'none'
					});
					return;
				} */
				this.jzlList=res.result[0];
				
			});	
		}
		
	}
}
</script>

<style lang="scss">

.danger-info-header{padding: 30rpx 40rpx; position: sticky; width: 100%; background-color: #fff; top:80rpx; box-sizing: border-box; z-index: 10;
	.title{ font-size:36rpx; line-height: 48rpx; margin-bottom: 12rpx; font-weight: 400;
		&::before{ content:'危'; display: inline-block; color:#e23232; border-radius:100%; text-align: center; background-color: #fdeeee; font-size:30rpx; margin-right: 20rpx; width: 48rpx; height:48rpx; font-weight: normal;}
	}
	>text{ font-size:24rpx; color:#999; display:block; opacity: .6;}
}
.danger-info-list{ padding: 0 40rpx; font-size:32rpx; 
	
	.danger-title{ font-size:40rpx; font-weight: bold; margin: 60rpx 0;}
	.danger-info{ 
		.info{ display: flex; justify-content: space-between; padding-bottom: 36rpx; margin-bottom: 36rpx; border-bottom:1rpx solid #e5e5e5; font-size: 32rpx;
			.title{  opacity: .6;}
			.txt{ max-width: 380rpx; word-wrap : break-word }
		}
		.info-title{ @extend .info; position: relative; padding-left: 29rpx; line-height: 1; font-weight: 600; z-index: 1;
			&::before{ content:''; display: block; position: absolute; left:0; top:2rpx; width: 0; height: 0; border-width: 15rpx 10rpx 10rpx 9rpx; border-style: solid; border-color:#3882f9 transparent transparent #3882f9;}
			&::after{ content:''; display: block; width: 21rpx; height: 21rpx; border-color: #bbb; margin-right: 5rpx; border-style: solid; border-width: 0 1rpx 1rpx 0; transform: rotate(45deg); position: relative;}
			&.cur{
				&::after{ transform: rotate(225deg); top: 15rpx;}
			}
		}
	}
}
.danger-info-list-01{@extend .danger-info;
	.danger-info{
		.info{ 
			>text:last-child{ max-width: 400rpx; }
		}
	}
}
@media screen and (max-width: 320px) {
.danger-info-header{ top:105rpx;}
}
/* #ifdef  MP-WEIXIN */
.danger-info-header{ top:0rpx; }
/* #endif */
</style>
