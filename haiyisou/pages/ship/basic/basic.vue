<template>
	<view class="page-crew">
		<view class="crew-info">
			<view class="crew-img-bg">
				<image src="../../../static/bg-user.png" />
			</view>
			<view class="crew-img">
				<view class="crew-avatar">
					<image src="../../../static/_temp/img-user.png" />
				</view>
				<!-- <view class="crew-sex">
					<view class="icon-sex">
						<image src="../../../static/icon-man.png" />
					</view>
					<text>男</text>
				</view> -->
			</view>
			<view class="crew-main">
				<view class="crew-name">{{baseInfo.shipNameCn}}</view>
				<view class="crew-name">{{baseInfo.shipNameEn!=null? baseInfo.shipNameEn:""}}</view>
				<view class="info info-id"><text>船舶识别号：</text>{{baseInfo.shipId!=null?baseInfo.shipId:"--"}}</view>
				<view class="info info-id"><text>IMO：</text>{{baseInfo.shipImo!=null?baseInfo.shipImo:"--"}}</view>
				<view class="info info-id"><text>MMSI码：</text>{{baseInfo.mmsi!=null?baseInfo.mmsi:"--"}}</view>
				<view class="info info-age"><text>船舶呼号：</text>{{baseInfo.shipCallsign!=null?baseInfo.shipCallsign:"--"}}</view>
				<view class="info info-phone"><text>登记机构：</text>{{baseInfo.orgCode!=null?baseInfo.orgCode:"--"}}</view>
				<view class="info info-address"><text>船龄：</text>{{shipAge}}</view>
			</view>
		</view>
		<!-- <view class="crew-lable">
			<view class="lable">航海院校</view>
			<view class="lable">国际</view>
			<view class="lable">二副</view>
			<view class="lable lable-gray">认证过期</view>
			<view class="lable lable-blue">特免</view>
			<view class="lable lable-green">在船</view>
			<view class="lable lable-red">限制出境</view>
		</view> -->
		<view class="crew-menu">
			<view class="menu" @click="goToBasic()">
				<view class="icon">
					<image src="../../../static/icon-user-03.png" />
				</view>
				<text>基本信息</text>
			</view>
			<view class="menu" @click="goToCert()">
				<view class="icon">
					<image src="../../../static/icon-user-04.png" />
				</view>
				<text>船舶证书</text>
			</view>
			<view class="menu" @click="goTopyxx()">
				<view class="icon">
					<image src="../../../static/icon-user-05.png" />
				</view>
				<text>配员信息</text>
			</view>
			<view class="menu" @click="goToReport()">
				<view class="icon">
					<image src="../../../static/icon-user-06.png" />
				</view>
				<text>进出港报告</text>
			</view>
			<view class="menu" @click="goTowhsb()">
				<view class="icon">
					<image src="../../../static/icon-user-07.png" />
				</view>
				<text>危险货物申报</text>
			</view>
			<view class="menu" @click="goToIllegal()">
				<view class="icon">
					<image src="../../../static/icon-user-09.png" />
				</view>
				<text>安全检查</text>
			</view>
			<!-- <view class="menu" @click="goToProxy()">
				<view class="icon">
					<image src="../../../static/icon-user-08.png" />
				</view>
				<text>船舶技术资料</text>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shipRegNo: "",
				baseInfo: {},
				shipAge:''
			}
		},
		onLoad(options) {
			this.shipRegNo = options.shipRegNo
			this.getBaseInfo(options.shipRegNo);
		},
		methods: {
			getBaseInfo(ship_reg_no){
				const that = this;
				//组装参数
				let params = {'parentId': ''};
				//请求后台数据
				that.api.requestNoLoading('/sea/s/b?ship_reg_no='+ship_reg_no)
				.then(res => {
					console.log('>>'+JSON.stringify(res));
					if(res.code!=200){
						uni.showToast({
							title: res.message,
							icon:'none'
						});
						return;
					}
					that.baseInfo = res.result[0];//变量名称参照更新后的文档
					this.getAge((that.baseInfo.shipBuiltDate).substring(0,10));
				});	
			},
			goToBasic(){
				let url = '/pages/ship/info/info?shipRegNo='+this.shipRegNo;
				uni.navigateTo({
				    url: url
				});
			},
			goToCert(){
				uni.navigateTo({
				    url: '/pages/ship/cert/cert?shipId='+this.baseInfo.shipId+'&shipRegNo='+this.shipRegNo
				});
			},
			goToSeniority(){
				uni.navigateTo({
					url: '/pages/crew/info-seniority'
				});
					},
			goTowhsb(){
				console.log(this.baseInfo.shipId);
				uni.navigateTo({
					url: '/pages/ship/dangerousGoodsList/sxlist?cbsbnum='+this.baseInfo.shipId
				});
			},
			goToProxy(){
				uni.navigateTo({
					url: '/pages/crew/proxy-handle'
				});
			},
			goToIllegal(){
				uni.navigateTo({
					url: '/pages/ship/securityCheck/securitylist?shipId='+this.baseInfo.shipId
				});
			},
			goToReport(){
				uni.navigateTo({
					url: '/pages/ship/postReport/postReport?shipId='+this.baseInfo.shipId
				});
			},
			goTopyxx(){
				uni.navigateTo({
					url: '/pages/ship/staffing/staffinginfo?&shipRegNo='+this.shipRegNo
				});
			},
			getAge(strAge) {
			            var birArr = strAge.split("-");
			            var birYear = birArr[0];
			            var birMonth = birArr[1];
			            var birDay = birArr[2];
			console.log(strAge);
			            d = new Date();
			            var nowYear = d.getFullYear();
			            var nowMonth = d.getMonth() + 1; //记得加1
			            var nowDay = d.getDate();
			            var returnAge;
			
			            if (birArr == null) {
			                return false
			            };
			            var d = new Date(birYear, birMonth - 1, birDay);
			            if (d.getFullYear() == birYear && (d.getMonth() + 1) == birMonth && d.getDate() == birDay) {
			                if (nowYear == birYear) {
								this.shipAge=0;
			                } else {
			                    var ageDiff = nowYear - birYear; // 
			                    if (ageDiff > 0) {
			                        if (nowMonth == birMonth) {
			                            var dayDiff = nowDay - birDay; // 
			                            if (dayDiff < 0) {
											this.shipAge=ageDiff - 1;;
			                            } else {
											this.shipAge=ageDiff
			                            }
			                        } else {
			                            var monthDiff = nowMonth - birMonth; // 
			                            if (monthDiff < 0) {
											this.shipAge=ageDiff - 1;
			                            } else {
											this.shipAge=ageDiff;
			                            }
			                        }
			                    } else {
									this.shipAge='--';
			                    }
			                }
			            } else {
			                this.shipAge='--';
			            }
			        }
		}
	}
</script>

<style lang="scss">
.page-crew{ padding: 30rpx 40rpx;}
.crew-info{ position: relative; display:flex; padding: 30rpx; margin-bottom: 40rpx;
	.crew-img-bg{ width: 100%; height:390rpx; box-shadow: 0 8rpx 15rpx rgba($color: #2e4658, $alpha: .15); border-radius: 20rpx; position: absolute; top:0; left:0;
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
