<template>
	<view class="page-crew">
		<view class="crew-info">
			<view class="crew-img-bg">
				<image src="../../static/bg-user.png" />
			</view>
			<view class="crew-img">
				<view class="crew-avatar">
					<image src="../../static/img-bead.png" />
				</view>
				<view class="crew-sex">
					<view class="icon-sex" v-if="baseInfo.sex=='1'">
						<image src="../../static/images/crew/index/icon-man.png" />
					</view>
					<view class="icon-sex" v-if="baseInfo.sex=='0'">
						<image src="../../static/images/crew/index/icon-woman.png" />
					</view>
					<text>{{baseInfo.sex=='1'?'男':'女'}}</text>
				</view>
			</view>
			<view class="crew-main">
				<view class="crew-name">{{baseInfo.name}}{{baseInfo.nameSpell!=null?"（"+baseInfo.nameSpell+"）":""}}</view>
				<view class="info info-id"><text>身份证号：</text>{{baseInfo.idCardNo}}</view>
				<view class="info info-age"><text>注册时间：</text>{{baseInfo.issuDate}}</view>
				<view class="info info-phone"><text>居住地址：</text>{{baseInfo.homeAddr}}</view>
				<view class="info info-address"><text>注册机构：</text>{{baseInfo.issuOrgCode}}152号</view>
			</view>

		</view>
	<!-- 	<view class="crew-else">
			<view class="else-info">
				<text class="number green">3</text>
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
		</view> -->
		<view class="crew-lable">

			<view class="lable  lable-gray" v-for="(item, index) in baseInfo.labels.split('|')" v-if="item.split(':').length>1">
				{{item.split(':')[1]}}
			</view>
			<view class="lable lable-gray-1">认证过期</view>
			<view class="lable lable-blue">特免</view>
			<view class="lable lable-green">在船</view>
			<view class="lable lable-red">限制出境</view>
		</view>
			<view class="sep"></view>
		<view class="crew-menu">
			<view class="menu" @click="goToBasic()">
				<view class="icon">
					<image src="../../static/icon-user-03.png" />
				</view>
				<text>基本信息</text>
			</view>
			<view class="menu" @click="goToCert()">
				<view class="icon">
					<image src="../../static/icon-user-04.png" />
				</view>
				<text>证书信息</text>
			</view>
			<view class="menu" @click="goToSeniority()">
				<view class="icon">
					<image src="../../static/icon-user-07.png" />
				</view>
				<text>资历信息</text>
			</view>
			<!-- <view class="menu">
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
			<view class="menu" @click="goToTrain()">
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
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseInfo: {},
				idCardNo: "",
			}
		},
		onLoad(options) {
			uni.setNavigationBarTitle({
			title:options.name
			})
			this.idCardNo = options.idCardNo;
			this.getBaseInfo(options.idCardNo);
		},
		methods: {
			getBaseInfo(idCard) {
				const that = this;
				//组装参数
				let params = {
					'parentId': ''
				};
				//请求后台数据
				that.api.requestNoLoading('/sea/q/cl?id_card_no=' + idCard)
					.then(res => {
						console.log('>>>'+JSON.stringify(res));
						if(res.code!=200){
							uni.showToast({
								title: res.message,
								icon:'none'
							});
							return;
						}
						that.baseInfo = res.result[0]; //变量名称参照更新后的文档
					
						// that.baseInfo = res.result;//变量名称参照更新后的文档

					});
			},
			goToBasic() {
				uni.navigateTo({
					url: '/pages/crew/info-basic?idCardNo=' + this.idCardNo+"&name="+this.baseInfo.name
				});
			},
			goToCert() {
				uni.navigateTo({
					url: '/pages/crew/cert/cert?idCardNo=' + this.idCardNo
				});
			},
			goToTrain() {
				uni.navigateTo({
					url: '/pages/crew/train/train?idCardNo=' + this.idCardNo
				});
			},
			goToExam() {
				uni.navigateTo({
					url: '/pages/crew/info-exam?idCardNo=' + this.idCardNo
				});
			},
			goToSeniority() {
				uni.navigateTo({
					url: '/pages/crew/info-seniority?idCardNo=' + this.idCardNo
				});
			},
			goToProxy() {
				uni.navigateTo({
					url: '/pages/crew/proxy-handle?idCardNo=' + this.idCardNo
				});
			},
			goToIllegal() {
				uni.navigateTo({
					url: '/pages/crew/info-illegal?idCardNo=' + this.idCardNo
				});
			}
		}
	}
</script>

<style lang="scss">

@import '@/static/css/common';
.crew-info{ height:268rpx; 
	.crew-img-bg{height:268rpx; }
}
.crew-lable{ margin-top: 30rpx;
	.lable-gray-1{ color:#fff; background-color: #C4C4C4;}
}
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
