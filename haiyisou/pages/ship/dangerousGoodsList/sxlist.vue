<template>
	<view class="page-exam-list">

		<view class="exam-list" v-for="(item, index) in goodsList" :key="index" @click="goToExamList(item.type)">
			<view class="icon-num">申</view><view class="title">{{item.goodsTitle}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList:[{
					goodsTitle:"散装液体货物申报",
					goodsNum:"J0511070720017",
					goodsSbTime:"2018/11/22",
					goodsSbStatus:"通过",
					type:'szytsb'
				},{
					goodsTitle:"包装货物申报",
					goodsNum:"J0511070720017",
					goodsSbTime:"2018/11/22",
					goodsSbStatus:"不通过",
					type:'bzhwsb'
				},{
					goodsTitle:"固体散装货物申报",
					goodsNum:"J0511070720017",
					goodsSbTime:"2018/11/22",
					goodsSbStatus:"通过",
					type:'gtszhw'
				},{
					goodsTitle:"散装液体适运申报",
					goodsNum:"J0511070720017",
					goodsSbTime:"2018/11/22",
					goodsSbStatus:"不通过",
					type:'szythy'
				},{
					goodsTitle:"包装货物适运申报",
					goodsNum:"J0511070720017",
					goodsSbTime:"2018/11/22",
					goodsSbStatus:"通过",
					type:'bzhwhy'
				},{
					goodsTitle:"固体散装适运申报",
					goodsNum:"J0511070720017",
					goodsSbTime:"2018/11/22",
					goodsSbStatus:"不通过",
					type:'gtszhy'
				}],
				cbsbnum:''
				
			};
			}
		,
		onLoad(options){
			this.cbsbnum=options.cbsbnum;
		},
		methods: {
			goToExamList(type) {
				uni.navigateTo({
				     url:'/pages/ship/dangerousGoodsList/whsblist?type='+type+'&cbsbnum='+this.cbsbnum,
					 fail:function(){
						 console.info("跳转失败")
					 }
				});
			}
		}
	}
</script>

<style lang="scss">
.page-exam-list{ padding: 20rpx 40rpx;
	.exam-list{font-size: 32rpx; border-bottom: 1rpx solid #E5E5E5; line-height: 48rpx;  padding: 45rpx 0; display: flex; width: 100%; box-sizing: border-box; position: relative; align-content:center;
		.icon-num{ width: 48rpx; height:48rpx;text-align: center; background:rgba(56,130,249,.1);border-radius:8px; font-size:24rpx;font-weight:500;color:#3882F9; margin-right: 20rpx;}
		&:after{ content:''; display: inline-block; width: 9px; height: 9px; border-color: #ccc; border-style: solid; border-width: 0 0.5px 0.5px 0; transform: rotate(-45deg); position: absolute; right: 6rpx; top:50%; margin-top: -4rpx;
		}
	}
}
</style>
