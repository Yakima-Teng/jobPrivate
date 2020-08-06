<template>
	<view class="page-crew-basic">
		<view class="info-title">简介信息</view>
		<view class="info-list-box">
			<view class="info-list">
				<text class="left">姓名（英文）：</text>{{baseInfo.name}}{{baseInfo.nameSpell!=null?"（"+baseInfo.nameSpell+"）":""}}
			</view>
			<view class="info-list">
				<text class="left">身份证号码：</text>{{baseInfo.idCardNo}}
			</view>
			<view class="info-list">
				<text class="left">出生日期：</text>{{baseInfo.birthDate==null?"":baseInfo.birthDate.substring(0, 10)}}
			</view>
			<view class="info-list">
				<text class="left">居住地址：</text>{{baseInfo.idcardAddress}}
			</view>
			<view class="info-list">
				<text class="left">国籍：</text>{{baseInfo.nationality}}
			</view>
			<view class="info-list">
				<text class="left">电话：</text>{{baseInfo.mobilePhone!=null?baseInfo.mobilePhone:baseInfo.officePhone}}
			</view>
			<view class="info-list">
				<text class="left">性别：</text>{{baseInfo.sex=='1'?'男':'女'}}
			</view>
			<view class="info-list">
				<text class="left">民族：</text>{{baseInfo.nation}}
			</view>
			<view class="info-list">
				<text class="left">出生地：</text>{{baseInfo.placeBirth}}
			</view>
			<view class="info-list">
				<text class="left">通信地址：</text>{{baseInfo.commAddr}}
			</view>
		</view>
		<view class="info-title">联系人信息</view>
		<view class="info-list-box">
			<view class="info-list">
				<text class="left">职务：</text>{{baseInfo.duty}}
			</view>
			<view class="info-list">
				<text class="left">职称：</text>{{baseInfo.title}}
			</view>
			<view class="info-list">
				<text class="left">学位：</text>{{baseInfo.degree}}
			</view>
			<view class="info-list">
				<text class="left">学历：</text>{{baseInfo.education}}
			</view>
			<view class="info-list">
				<text class="left">专业：</text>{{baseInfo.professional}}
			</view>
			<view class="info-list">
				<text class="left">毕业院校：</text>{{baseInfo.graduateUniversity}}
			</view>
			<view class="info-list">
				<text class="left">非航海类学历：</text>{{baseInfo.otherEducation}}
			</view>
			<view class="info-list">
				<text class="left">非航海类学位：</text>{{baseInfo.otherDegree}}
			</view>
			<view class="info-list">
				<text class="left">非航海类毕业院校：</text>{{baseInfo.otherGraduateUniversity}}
			</view>
			<view class="info-list">
				<text class="left">非航海类专业：</text>{{baseInfo.otherProfessional}}
			</view>
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
			getBaseInfo(idCard){
				const that = this;
				//组装参数
				let params = {'parentId': ''};
				//请求后台数据
				that.api.requestNoLoading('/sea/q/b?id_card_no='+idCard)
				.then(res => {
					// that.baseInfo = res[0];//变量名称参照更新后的文档
					console.log(JSON.stringify(res));
					if(res.code!=200){
						uni.showToast({
							title: res.msg,
							icon:'none'
						});
						return;
					}
					that.baseInfo = res.result[0];//变量名称参照更新后的文档
					
				});	
			},
		}
	}
</script>

<style lang="scss">
.page-crew-basic{padding: 0 40rpx;
	.info-title{font-size: 40rpx; font-weight: bold; margin:44rpx 0 70rpx;}
	.info-list{ padding-left: 4rpx; font-size:32rpx; border-bottom: 1rpx solid #e5e5e5; padding-bottom: 38rpx; margin-bottom: 36rpx; display: flex; justify-content: space-between; font-weight: 600;
		.left{font-weight: normal;width: 50%;}
	}
}
</style>
