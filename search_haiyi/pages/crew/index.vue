<template>
	<view class="page-crew">
		<view class="crew-info">
			<view class="crew-img-bg">
				<image src="../../static/bg-user.png" />
			</view>
			<view class="crew-img">
				<view class="crew-avatar">
					<image src="../../static/_temp/img-user.png" />
				</view>
				<view class="crew-sex">
					<view class="icon-sex">
						<image src="../../static/icon-man.png" />
					</view>
					<text>男</text>
				</view>
			</view>
			<view class="crew-main">
				<view class="crew-name">李伟健（LiWeiJian）</view>
				<view class="info info-id"><text>身份证号：</text>32010219850526321X</view>
				<view class="info info-age"><text>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：</text>38</view>
				<view class="info info-phone"><text>联系电话：</text>15069427967</view>
				<view class="info info-address"><text>居住地址：</text>连云港市连云区中山西152号</view>
			</view>
		</view>
		<view class="crew-lable">
			<view class="lable">航海院校</view>
			<view class="lable">国际</view>
			<view class="lable">二副</view>
			<view class="lable lable-gray">认证过期</view>
			<view class="lable lable-blue">特免</view>
			<view class="lable lable-green">在船</view>
			<view class="lable lable-red">限制出境</view>
		</view>
		<view class="crew-menu">
			<view class="menu">
				<view class="icon">
					<image src="../../static/icon-user-01.png" />
				</view>
				<text>成长轨迹</text>
			</view>
			<view class="menu">
				<view class="icon">
					<image src="../../static/icon-user-02.png" />
				</view>
				<text>行动轨迹</text>
			</view>
			<view class="menu" @click="goToBasic()">
				<view class="icon">
					<image src="../../static/icon-user-03.png" />
				</view>
				<text>基本信息</text>
			</view>
			<view class="menu">
				<view class="icon">
					<image src="../../static/icon-user-04.png" />
				</view>
				<text>证书信息</text>
			</view>
			<view class="menu">
				<view class="icon">
					<image src="../../static/icon-user-05.png" />
				</view>
				<text>培训信息</text>
			</view>
			<view class="menu" @click="goToExam()">
				<view class="icon">
					<image src="../../static/icon-user-06.png" />
				</view>
				<text>考试信息</text>
			</view>
			<view class="menu" @click="goToSeniority()">
				<view class="icon">
					<image src="../../static/icon-user-07.png" />
				</view>
				<text>资历信息</text>
			</view>
			<view class="menu" @click="goToProxy()">
				<view class="icon">
					<image src="../../static/icon-user-08.png" />
				</view>
				<text>委托代办</text>
			</view>
			<view class="menu" @click="goToIllegal()">
				<view class="icon">
					<image src="../../static/icon-user-09.png" />
				</view>
				<text>违法信息</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goToBasic(){
				uni.navigateTo({
				    url: '/pages/crew/info-basic'
				});
			},
			goToExam(){
				uni.navigateTo({
				    url: '/pages/crew/info-exam'
				});
			},
      goToSeniority(){
      	uni.navigateTo({
      	    url: '/pages/crew/info-seniority'
      	});
      },
      goToProxy(){
      	uni.navigateTo({
      	    url: '/pages/crew/proxy-handle'
      	});
      },
      goToIllegal(){
      	uni.navigateTo({
      	    url: '/pages/crew/info-illegal'
      	});
      }
		}
	}
</script>

<style lang="scss">
.page-crew{ padding: 30rpx 40rpx;}
.crew-info{ position: relative; display:flex; padding: 30rpx; margin-bottom: 40rpx;
	.crew-img-bg{ width: 100%; height:268rpx; box-shadow: 0 8rpx 15rpx rgba($color: #2e4658, $alpha: .15); border-radius: 20rpx; position: absolute; top:0; left:0;
		>image{ width: 100%; height:100%;}
	}
	.crew-img{ width: 120rpx; margin-right: 30rpx; position: relative; z-index: 10; display: flex; flex-direction: column; align-items: center;
    uni-image{ position: relative; z-index:10;}
		.crew-avatar{ width: 120rpx; height:120rpx; overflow: hidden; box-sizing: border-box; background-color: #fff; border: 2rpx solid #f0eff4; border-radius:50%;
			>image{ width: 100%; height:100%;}
		}
		.crew-sex{ display: flex; background-color: #30adb5; color:#fff; justify-content: center; width: 100rpx; height:40rpx; border-radius:20rpx; align-items: center; font-size:24rpx; margin-top: 20rpx;
			.icon-sex{ margin-right: 7rpx;
				>image{ width: 24rpx; height:24rpx;}
			}
		}
	}
	.crew-main{ position: relative; z-index: 10; color: #fff; font-size:24rpx; width: calc(100% - 120rpx);
		.crew-name{ font-size:40rpx; margin-bottom: 30rpx;}
		.info{ line-height: 33rpx; white-space: nowrap; text-overflow:ellipsis; overflow: hidden;
			>text{ color: #aecdff;}
		}
	}
}
.crew-lable{ display: flex; flex-wrap: wrap;
	.lable{ width: 160rpx; text-align: center; height:40rpx; line-height:40rpx; margin:0 10rpx 10rpx 0; background-color: #ebf2fe; color:#3882f9; font-size:24rpx; border-radius: 10rpx;
		&:nth-child(4n){ margin-right: 0;}
		&.lable-gray{ background-color: #ebebeb; color: rgba($color: #000000, $alpha: .3);}
		&.lable-blue{ background-color: #3882f9; color: #fff;}
		&.lable-green{ background-color: #30adb5; color: #fff;}
		&.lable-red{ background-color: #d43333; color: #fff;}
	}
}
.crew-menu{ display: flex; flex-wrap: wrap; justify-content: space-between; margin-top: 50rpx;
	.menu{ box-sizing: border-box; border:1rpx solid #e5e5e5; width: 210rpx; height:200rpx; display: flex; flex-direction: column; justify-content: center; align-items: center; border-radius: 15rpx; margin-bottom: 20rpx;
		>text{font-size: 28rpx; line-height: 1; margin-top: 25rpx;}
		.icon{ 
			>image{ width: 82rpx; height:82rpx;}
		}
	}
}
</style>
