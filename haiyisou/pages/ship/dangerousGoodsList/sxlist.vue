<template>
	<view>

		<view class="page-crew-exam" v-for="(item, index) in goodsList" :key="index" @click="goToExamList(item.type)">
			<view class="title">{{item.goodsTitle}}</view>
			<view class="exam-box">
				<view class="exam-bg">
					<image src="../../../static/img-01.png" />
				</view>
				<view class="exam-btn">立即查看</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList:[{
					goodsTitle:"危险/污染危害性货物申报（散装液体)",
					goodsNum:"J0511070720017",
					goodsSbTime:"2018/11/22",
					goodsSbStatus:"通过",
					type:'szytsb'
				},{
					goodsTitle:"危险/污染危害性货物申报（包装货物）",
					goodsNum:"J0511070720017",
					goodsSbTime:"2018/11/22",
					goodsSbStatus:"不通过",
					type:'bzhwsb'
				},{
					goodsTitle:"危险货物申报（固体散装）",
					goodsNum:"J0511070720017",
					goodsSbTime:"2018/11/22",
					goodsSbStatus:"通过",
					type:'gtszhw'
				},{
					goodsTitle:"危险货物适运申报（散装液体）",
					goodsNum:"J0511070720017",
					goodsSbTime:"2018/11/22",
					goodsSbStatus:"不通过",
					type:'szythy'
				},{
					goodsTitle:"危险货物适运申报（包装货物）",
					goodsNum:"J0511070720017",
					goodsSbTime:"2018/11/22",
					goodsSbStatus:"通过",
					type:'bzhwhy'
				},{
					goodsTitle:"危险货物适运申报（固体散装）",
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
.page-crew-exam{ padding: 20rpx 40rpx;
	.title{ font-size:36rpx; margin-bottom: 27rpx;}
	.exam-box{ position: relative; height: 200rpx;  display: flex; justify-content: center; align-items: center; 
		.exam-bg{ height: 200rpx; width: 100%; position: absolute; left:0; top:0;
			>image{width: 100%; height:100%;}
		}
		.exam-btn{ position: relative; z-index:10; background-color: #fff; width: 266rpx; height:60rpx; line-height:60rpx; font-size:34rpx; text-align: center;
			&::before{ content:''; box-sizing: border-box; border:1rpx solid #fff; background-color: transparent; position: absolute; width: 282rpx; height:76rpx; left:-8rpx; top:-8rpx;}
		}
	}
}
</style>
