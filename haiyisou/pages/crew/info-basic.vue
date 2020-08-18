<template>
	<view class="page-crew-basic">
		<view class="crew-exam-aq-title">
		  <!-- 当前页签直接在 page-crew-exam 上添加cur即可-->
		  <view :class="tabsType == item.type?'page-crew-exam cur':'page-crew-exam'"  v-for="(item, index) in goodsList" :key="index" @click="getList(item.type)" >
		    <view class="title">{{item.goodsTitle}}</view>
		  </view>
		</view>
		<!-- <view class="info-title">基本信息</view> -->
		<view class="info-list-box" v-if="tabsType==='jb'">
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
		<!-- <view class="info-title">联系人信息</view> -->
		<view class="info-list-box" v-if="tabsType==='lxr'">
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
				goodsList:[{
					goodsTitle:"基本信息",
					type:'jb'
				},{
					goodsTitle:"联系人信息",
					type:'lxr'
					
				}],
				baseInfo: {},
				idCardNo: "",
				tabsType:'jb',
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
			getList(type){
				this.tabsType=type;
				console.log(type);
				
			},
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
	@import '@/static/css/common';
	.crew-exam-aq-title{ padding: 30rpx 40rpx; font-size: 28rpx; display: flex; justify-content: space-between; align-items: center;
	  .page-crew-exam{ height: 70rpx; line-height: 70rpx; border:1px solid rgba(136,136,136,.6); border-radius:8px 0px 0px 8px; color:#191919; width: 50%; float: left; text-align: center;
	    &:first-child{ border-right: 0;}
	    &:last-child{ background-color:rgba(255,255,255,1); border:1px solid rgba(136,136,136,.6); border-left: 0; border-radius:0px 8px 8px 0px;}
	    &.cur{ background-color: #3882F9; color:#fff; border-color: #3882F9;}
	  }
	}
</style>
