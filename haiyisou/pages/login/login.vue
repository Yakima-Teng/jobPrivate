<template>
	<view>
		<!-- 表单内容 -->
		<view class="container">
			<view class="header">
				<view class="header-title">欢迎来到连云港微海事</view>
				<view class="header-content">赶快登录办公吧！</view>
			</view>

			<view class="scrolltabs"  style="height: 300px;">
				<scroll-view class="tabs" id="tab-bar" :scroll-x="true"
				 :show-scrollbar="false" :scroll-into-view="scrollInto">
					<view style="-webkit-flex-wrap: nowrap;flex-wrap: nowrap;display: flex;justify-content: flex-start;">
						<view v-for="(item, index) in itemTabs" :key="index" :class="tabsType == index?'font-title-crude':'font-title'"
						 :data-index='index' @click="ontabtap">
							{{item.title}}
						</view>
					</view>
				</scroll-view>
				<swiper :current="tabsType" class="swiper-box" style="flex: 1;" :duration="300" @change="ontabchange">
					<swiper-item class="swiper-item">
						<form @submit="toConfirmLogin" :model="formData" :rules="rules"  bind:submit="handleFormSubmit">
							<view class="uni-row" style="margin-top: 44rpx;">
								<view class="uni-title">
									<view>账户</view>
								</view>
								<view>
									<input id="username" style="width: 80%;" placeholder="请输入" class="uni-input" append v-model="formData.username"
									 bind:change="handleChange"></input>
								</view>
							</view>
							<view class="uni-row">
								<view class="uni-title">密码</view>
								<input id="password" type="password" placeholder="请输入" class="uni-input" v-model="formData.password"
								 bind:change="handleChange"></input>
							</view>
							<!-- <view class="uni-row">
								<view class="uni-title">验证码</view>
								<view class="flex-row">
									<input id="acces" placeholder="请输入" class="uni-input" v-model="formData.acces" bind:change="handleChange"></input>
									<image style="width: 180rpx;" mode="widthFix" src="../../static/_temp/tmp-login-code.png" @click="getAcces"></image>
								</view>
							</view> -->
						</form>
					</swiper-item>
<!-- 					<swiper-item class="swiper-item">
						<form @submit="toConfirmLogin" :model="formData" :rules="rules"  bind:submit="handleFormSubmit">
							<view class="uni-row" style="margin-top: 44rpx;">
								<view class="uni-title">
									<view>用户名/身份证/手机号</view>
								</view>
								<view>
									<input id="username" style="width: 80%;" value="15069428571" placeholder="请输入" class="uni-input" append v-model="formData.username"
									 bind:change="handleChange"></input>
								</view>
							</view>
							<view class="uni-row">
								<view class="uni-title">验证码</view>
								<view class="flex-row">
									<input id="acces" placeholder="请输入" class="uni-input" v-model="formData.acces" bind:change="handleChange"></input>
									<view class="link-section">获取验证码</view>
								</view>
							</view>
						</form>
					</swiper-item> -->
				</swiper>
			</view>
			<view class="uni-btn-v uni-row uni-border-none">
				<button form-type="submit" @click="toConfirmLogin" style="height: 96rpx;line-height: 96rpx;">确认登录</button>
			</view>
			<view class="header-content" style="color: #999999;justify-content: center;">
				若你未有账号，请进入网页端进行<view class="link-section">注册</view>
			</view>
		</view>
	</view>
</template>

<script>
	var graceChecker = require("../../static/js/graceChecker.js");
	export default {
		data() {
			return {
				type: 'popup',
				checkVal: false,
				formData: {
					username: '',
					password: '',
					radioA: 'true',
					acces: '',
				},
				checkItems: [{
					name: "反光识别",
					value: "cn"
				}],
				rules: [{
						id: "username",
						checkType: "notnull",
						checkRule: "",
						errorMsg: "请填写用户名"
					},
					{
						id: "password",
						checkType: "notnull",
						checkRule: "",
						errorMsg: "请填写密码"
					},
					{
						id: "acces",
						checkType: "notnull",
						checkRule: "",
						errorMsg: "请填写验证码"
					}
				],
				tabsType: '0',
				scrollInto: '',
				itemTabs: [{
					val: "a0",
					title: "密码登录",
				}/* , {
					val: "a1",
					title: "快捷登录",
				} */],
				//弹出菜单控制
				visible: false,
				assesSrc: '',
				isJudg: false, //是否从智能研判跳转过来
			}
		},
		onLoad(options) {
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			ontabtap(e) {
			    let index = e.target.dataset.index || e.currentTarget.dataset.index;
			    this.switchTab(index);
			},
			ontabchange(e) {
			    let index = e.target.current || e.detail.current;
			    this.switchTab(index);
			},
			switchTab(index) {
			    if (this.tabsType === index) {
			        return;
			    }
					
				this.tabsType = index;
				this.scrollInto = this.itemTabs[index].val;
			},
			toConfirmLogin() {
				const that = this;
				//组装参数
				let params = {
					'parentId': ''
				};
				//请求后台数据
				that.api.request('/sys/login?username='+this.formData.username+'&password='+this.formData.password)
					.then(res => {
						if(res.code!=401){
							console.log(res);
							wx.setStorageSync("successToken",res.access_token);
							uni.redirectTo({
								url: '/pages/index/index'
							})
							// return;
						}else{
							uni.showToast({
								title:res.error_description,
								icon:'none'
							})
						}
						
					});
			},
		}
	};
</script>

<style lang="scss">
	@import url("@/static/css/login.css");
</style>
