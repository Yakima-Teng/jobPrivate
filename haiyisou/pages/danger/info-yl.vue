<template>
	<view class="page-danger-info">
			<view style="text-align: center;">
				<view v-for="(item,index) in imgUrls" :key="index">
					<image style="z-index: 1;" :src="getImgUrl(item)"></image>
				</view>
			</view>
	</view>
</template>

<script>
import uniSwiper from '@/components/swiper/uni-swiper.vue'
import luBarTabNav from "@/components/lu-bar-tab-nav/lu-bar-tab-nav";
export default {
  components:{ luBarTabNav,uniSwiper },
	data() {
		return {
		
      barFixed: true,
      barHeight: "44",
      barTop: 0,
      iconShow: true,
      barId: "0",
	  xqList:[],
	  isShow:true,
	  MeasureData:{},
	  //轮播图标
	  imgUrls: [
	  	
	  ],
	  };
	},
	onPageScroll: function(e) {
	    this.$refs.barTabNav._selectedTab(e.scrollTop);
	},
  mounted: function () {
   
  },
  onLoad(options){
	  
	this.getDetillYl(options.guideCode,options.guideName,options.valid);
	
	  
  },
	methods: {
		getImgUrl(filename){
			console.log('>>>'+this.api.baseUrlImg+filename);
			return this.api.baseUrlImg+filename
		},
		getDetillYl(code,name,valid){
			//请求后台数据
			this.api.requestNoLoading('/dg/file/aidfirst',{guideCode:code,guideName:name,valid:valid},'post')
			.then(res => {
				 console.log('yl>>'+JSON.stringify(res));
				if(res.code!=200){
					uni.showToast({
						title: res.message,
						icon:'none'
					});
					return;
				}
				let paths=res.result[0].path;
				if(paths!=''&&typeof(paths)!='undefined'){
					 this.imgUrls=paths.split(':');
				} 
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
