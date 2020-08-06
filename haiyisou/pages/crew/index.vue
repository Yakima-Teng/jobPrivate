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
		<view class="crew-lable">

			<view class="lable" v-for="(item, index) in baseInfo.labels.split('|')" v-if="item.split(':').length>1">
				{{item.split(':')[1]}}
			</view>
			<!-- <view class="lable lable-gray">认证过期</view>
			<view class="lable lable-blue">特免</view>
			<view class="lable lable-green">在船</view>
			<view class="lable lable-red">限制出境</view> -->
		</view>
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
					url: '/pages/crew/info-basic?idCardNo=' + this.idCardNo
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
	.page-crew {
		padding: 30rpx 40rpx;
	}

	.crew-info {
		position: relative;
		display: flex;
		padding: 30rpx;
		margin-bottom: 40rpx;

		.crew-img-bg {
			width: 100%;
			height: 268rpx;
			box-shadow: 0 8rpx 15rpx rgba($color: #2e4658, $alpha: .15);
			border-radius: 20rpx;
			position: absolute;
			top: 0;
			left: 0;

			>image {
				width: 100%;
				height: 100%;
			}
		}

		.crew-img {
			width: 120rpx;
			margin-right: 30rpx;
			position: relative;
			z-index: 10;
			display: flex;
			flex-direction: column;
			align-items: center;

			uni-image {
				position: relative;
				z-index: 10;
			}

			.crew-avatar {
				width: 120rpx;
				height: 120rpx;
				overflow: hidden;
				box-sizing: border-box;
				background-color: #fff;
				border: 2rpx solid #f0eff4;
				border-radius: 50%;

				>image {
					width: 100%;
					height: 100%;
				}
			}

			.crew-sex {
				display: flex;
				background-color: #30adb5;
				color: #fff;
				justify-content: center;
				width: 100rpx;
				height: 40rpx;
				border-radius: 20rpx;
				align-items: center;
				font-size: 24rpx;
				margin-top: 20rpx;

				.icon-sex {
					margin-right: 7rpx;

					>image {
						width: 24rpx;
						height: 24rpx;
					}
				}
			}
		}

		.crew-main {
			position: relative;
			z-index: 10;
			color: #fff;
			font-size: 24rpx;
			width: calc(100% - 120rpx);

			.crew-name {
				font-size: 40rpx;
				margin-bottom: 30rpx;
			}

			.info {
				line-height: 33rpx;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;

				>text {
					color: #aecdff;
				}
			}
		}
	}

	.crew-lable {
		display: flex;
		flex-wrap: wrap;

		.lable {
			width: 160rpx;
			text-align: center;
			height: 40rpx;
			line-height: 40rpx;
			margin: 0 10rpx 10rpx 0;
			background-color: #ebf2fe;
			color: #3882f9;
			font-size: 24rpx;
			border-radius: 10rpx;

			&:nth-child(4n) {
				margin-right: 0;
			}

			&.lable-gray {
				background-color: #ebebeb;
				color: rgba($color: #000000, $alpha: .3);
			}

			&.lable-blue {
				background-color: #3882f9;
				color: #fff;
			}

			&.lable-green {
				background-color: #30adb5;
				color: #fff;
			}

			&.lable-red {
				background-color: #d43333;
				color: #fff;
			}
		}
	}

	.crew-menu {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 50rpx;

		.menu {
			box-sizing: border-box;
			border: 1rpx solid #e5e5e5;
			width: 210rpx;
			height: 200rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			border-radius: 15rpx;
			margin-bottom: 20rpx;

			>text {
				font-size: 28rpx;
				line-height: 1;
				margin-top: 25rpx;
			}

			.icon {
				>image {
					width: 82rpx;
					height: 82rpx;
				}
			}
		}
	}
</style>
