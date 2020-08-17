<template>
	<view class="page-crew">
		<view class="crew-info">
			<view class="crew-img-bg">
				<image src="../../../static/bg-user.png" />
			</view>
			<view class="crew-img">
				<view class="crew-avatar">
					<image src="../../../static/img-bead.png" />
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
        <view class="crew-info-box">
          <view class="info info-id"><text>船舶识别号：</text>{{baseInfo.shipId!=null?baseInfo.shipId:"--"}}</view>
          <view class="info info-id"><text>IMO：</text>{{baseInfo.shipImo!=null?baseInfo.shipImo:"--"}}</view>
          <view class="info info-id"><text>MMSI码：</text>{{baseInfo.mmsi!=null?baseInfo.mmsi:"--"}}</view>
          <view class="info info-age"><text>船舶呼号：</text>{{baseInfo.shipCallsign!=null?baseInfo.shipCallsign:"--"}}</view>
          <!-- <view class="info info-phone"><text>登记机构：</text>{{baseInfo.orgCode!=null?baseInfo.orgCode:"--"}}</view> -->
          <!-- <view class="info info-address"><text>船龄：</text>{{shipAge}}</view> -->
        </view>
			</view>
		</view>
		<view class="crew-else">
			<view class="else-info">
				<text class="number green">{{shipAge}}</text>
				<view class="name">船龄</view>
			</view>
			<view class="else-info">
				<text class="number blue">2</text>
				<view class="name">协查次数</view>
			</view>
			<view class="else-info">
				<text class="number orange">2</text>
				<view class="name">滞留次数</view>
			</view>
			<view class="else-info">
				<text class="number red">1</text>
				<view class="name">重点跟踪次数</view>
			</view>
		</view>
		<view class="crew-lable">
			<!-- <view class="lable lable-gray" v-for="(it, index) in item.labels.split('|')" v-if="it.split(':').length>1">
				{{it.split(':')[1]}}
			</view> -->
			<view class="lable lable-gray">集装箱船</view>
			<view class="lable lable-gray">内河CJ</view>
			<view class="lable lable-gray">非试航</view>
		</view>
    <view class="sep"></view>
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
			uni.setNavigationBarTitle({
			title:options.shipNameCn
			})
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
				let url = '/pages/ship/info/info?shipRegNo='+this.shipRegNo+'&shipNameCn='+this.baseInfo.shipNameCn;
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
@import '@/static/css/common';
.crew-else{ margin: 0 40rpx; padding: 35rpx 0; background-color: #fff;overflow: hidden; position: relative; margin-top: -10rpx; box-shadow:0px 8rpx 12rpx 0px rgba(46,70,88,0.15); font-size: 24rpx; text-align: center; border-radius:0px 0px 14rpx 14rpx; flex-grow:1;
	.else-info{ float: left; width: 25%;}
	.number{ font-size: 40rpx; font-weight: bold;
		&.green{ color:#30ADB5;}
		&.blue{ color:#3882F9;}
		&.orange{ color:#F74D11}
		&.red{ color:#D43333}
	}
	.name{ margin-top: 15rpx;}
}
</style>
