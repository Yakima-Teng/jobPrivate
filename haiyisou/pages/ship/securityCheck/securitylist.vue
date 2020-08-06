<template>
	<view>

		<view class="page-crew-exam" v-for="(item, index) in goodsList" :key="index" @click="goToExamList(item.type)">
			<view class="title">{{item.goodsTitle}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList:[{
					goodsTitle:"船旗国安全检查（FSC）",
					type:'fsc'
				},{
					goodsTitle:"检现场监督检查",
					type:'xcjc'
					
				}],
				shipId:''
				
			};
			}
		,
		onLoad(options){
			this.shipId=options.shipId;
		},
		methods: {
			goToExamList(type) {
				uni.navigateTo({
				     url:'/pages/ship/securityCheck/securityDeallist?shipId='+this.shipId+'&type='+type,
					 fail:function(){
						 console.info("跳转失败")
					 }
				});
			}
		}
	}
</script>

<style lang="scss">
.page-crew-exam{ padding: 0 40rpx;
	.title{ font-size:36rpx; margin: 48rpx 0 27rpx;}
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
