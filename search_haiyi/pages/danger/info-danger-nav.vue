<template>
	<view class="page-danger-info">
		<view class="danger-info-header">
			<view class="title">1,2,3,6-四氢化苯甲醛</view>
			<text>1,2,3,6-四氢化苯甲醛(1,2,3,6-tetrahydrobenzaldehyde, C7H10O)是一种 无色液体,</text>
		</view>
		<luBarTabNavBak :tabList="tabList" :barFixed="barFixed" :iconShow="false" :transitionShow="transitionShow" :barHeight="barHeight" :barTop="barTop" :barId="barId" ref="barTabNav">
		    <view class="danger-info-list" id="inToView00">
		    	<view class="danger-title">基本信息</view>
		    	<view class="danger-info">
		    		<view class="info"><text class="title">货物名称（中文）：</text>1,2,3,6-四氢化苯甲醛</view>
		    		<view class="info"><text class="title">货物名称（英文）：</text>1,2,3,6-tetrahy</view>
		    		<view class="info"><text class="title">其他名称（中文）：</text>----</view>
		    		<view class="info"><text class="title">其他名称（英文）：</text>----</view>
		    		<view class="info"><text class="title">CAS No：</text>----</view>
		    		<view class="info"><text class="title">EC No：</text>----</view>
		    		<view class="info"><text class="title">分子式：</text>100-50-5202-858-3</view>
		    		<view class="info"><text class="title">分子量：</text> C7H10O 110.15</view>
		    	</view>
		    </view>
		    <view class="danger-info-list" id="inToView01">
		    	<view class="danger-title">成分识别</view>
		    	<view class="danger-info">
		    		<view class="info">
		    			<text>成分</text>
		    			<text>CAS_NO</text>
		    			<text>百分比</text>
		    		</view>
		    		<view class="info">
		    			<text>苯甲醇</text>
		    			<text>100-51-6</text>
		    			<text>86.75%</text>
		    		</view>
		    		<view class="info">
		    			<text>二苯基</text>
		    			<text>100-51-6</text>
		    			<text>86.75%</text>
		    		</view>
		    	</view>
		    </view>
		    <view class="danger-info-list" id="inToView02" >
		    	<view class="danger-title">物化特性和化学特性</view>
		    	<view class="danger-info">
		    		<view class="info"><text class="title">货物名称（中文）：</text>1,2,3,6-四氢化苯甲醛</view>
		    		<view class="info"><text class="title">货物名称（英文）：</text>1,2,3,6-tetrahy</view>
		    		<view class="info"><text class="title">其他名称（中文）：</text>----</view>
		    		<view class="info"><text class="title">其他名称（英文）：</text>----</view>
		    		<view class="info"><text class="title">CAS No：</text>----</view>
		    		<view class="info"><text class="title">EC No：</text>----</view>
		    		<view class="info"><text class="title">分子式：</text>100-50-5202-858-3</view>
		    		<view class="info"><text class="title">分子量：</text> C7H10O 110.15</view>
		    	</view>
		    </view>
		    <view class="danger-info-list" id="inToView03" >
		    	<view class="danger-title">反应性与稳定性</view>
		    	<view class="danger-info">
		    		---略---
		    	</view>
		    </view>
		    <view class="danger-info-list" id="inToView04" >
		    	<view class="danger-title">船舶运载条件</view>
		    	<view class="danger-info">
		    		<view class="info-title" :class="[brandFold ? 'cur' : '']" @click="toggleMore()" >国际海运危险货物规则(IMDG-CODE) </view>
		    		<view class="info-main" v-if="brandFold">
		    			<view class="info"><text class="title">货物名称（中文）：</text>1,2,3,6-四氢化苯甲醛</view>
		    			<view class="info"><text class="title">货物名称（英文）：</text>1,2,3,6-tetrahy</view>
		    			<view class="info"><text class="title">其他名称（中文）：</text>----</view>
		    			<view class="info"><text class="title">其他名称（英文）：</text>----</view>
		    		</view>
		    	</view>
		    </view>
		</luBarTabNavBak>
	</view>
</template>

<script>
import luBarTabNavBak from "@/components/lu-bar-tab-nav/lu-bar-tab-nav-bak";
export default {
  components:{ 
    luBarTabNavBak
  },
	data() {
		return {
			brandFold: true, //判断brandFold是否展示
			transitionShow:'',
      barFixed: true,
      barHeight: "44",
      barTop: 0,
      iconShow: true,
      barId: "0",
      tabList: [{
          text: "基本信息",
          navTarget: "#inToView00"
      }, {
          text: "成分识别",
          navTarget: "#inToView01"
      }, {
          text: "物化特性和化学特性",
          navTarget: "#inToView02"
      }, {
          text: "反应性与稳定性",
          navTarget: "#inToView03"
      }, {
          text: "船舶运载条件",
          navTarget: "#inToView04"
      }]
		};
	},
	onPageScroll: function(e) {
	    this.$refs.barTabNav._selectedTab(e.scrollTop);
	},
	methods: {
		toggleMore() {
		  this.brandFold = !this.brandFold;
		}
	}
}
</script>

<style lang="scss">

.danger-info-header{padding: 30rpx 40rpx; position: sticky; width: 100%; background-color: #fff; top:80rpx; box-sizing: border-box; z-index: 10;
	.title{ font-size:36rpx; line-height: 48rpx; margin-bottom: 12rpx; font-weight: 600;
		&::before{ content:'危'; display: inline-block; color:#e23232; border-radius:100%; text-align: center; background-color: #fdeeee; font-size:30rpx; margin-right: 20rpx; width: 48rpx; height:48rpx; font-weight: normal;}
	}
	>text{ font-size:24rpx; color:#999; display:block;}
}
.danger-info-list{ padding: 0 40rpx; font-size:32rpx; 
	
	.danger-title{ font-size:40rpx; font-weight: bold; margin: 60rpx 0;}
	.danger-info{ 
		.info{ display: flex; justify-content: space-between; padding-bottom: 36rpx; margin-bottom: 36rpx; border-bottom:1rpx solid #e5e5e5;}
		.info-title{ @extend .info; position: relative; padding-left: 29rpx; line-height: 1; font-weight: 600;
			&::before{ content:''; display: block; position: absolute; left:0; top:2rpx; width: 0; height: 0; border-width: 15rpx 10rpx 10rpx 9rpx; border-style: solid; border-color:#3882f9 transparent transparent #3882f9;}
			&::after{ content:''; display: block; width: 21rpx; height: 21rpx; border-color: #bbb; margin-right: 5rpx; border-style: solid; border-width: 0 1rpx 1rpx 0; transform: rotate(45deg); position: relative;}
			&.cur{
				&::after{ transform: rotate(225deg); top: 15rpx;}
			}
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
