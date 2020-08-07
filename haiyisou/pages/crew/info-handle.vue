<template>
	<view class="page-crew-basic">
		<view class="info-title">简介信息</view>
		<view class="info-list-box">
			<view class="info-list">
				<text class="left">姓名（英文）：</text>李伟健（LiWeiJian）
			</view>
			<view class="info-list">
				<text class="left">身份证号码：</text>320105199005020625
			</view>
			<view class="info-list">
				<text class="left">出生日期：</text>1985-05-26
			</view>
			<view class="info-list">
				<text class="left">注册号码：</text>B01-056358
			</view>
			<view class="info-list">
				<text class="left">学籍：</text>中国
			</view>
			<view class="info-list">
				<text class="left">学历：</text>本科
			</view>
			<view class="info-list">
				<text class="left">出生地：</text>江苏省南京市鼓楼区
			</view>
		</view>
		<view class="info-title">联系人信息</view>
		<view class="info-list-box">
			<view class="info-list">
				<text class="left">姓名（英文）：</text>李伟健（LiWeiJian）
			</view>
			<view class="info-list">
				<text class="left">身份证号码：</text>320105199005020625
			</view>
			<view class="info-list">
				<text class="left">出生日期：</text>1985-05-26
			</view>
			<view class="info-list">
				<text class="left">注册号码：</text>B01-056358
			</view>
			<view class="info-list">
				<text class="left">学籍：</text>中国
			</view>
			<view class="info-list">
				<text class="left">学历：</text>本科
			</view>
			<view class="info-list">
				<text class="left">出生地：</text>江苏省南京市鼓楼区
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
		onLoad(options){
			this.getWtdbDetialByCode(options.contractCode)
		},
		methods: {
			getWtdbDetialByCode(code){
				this.api.request('/sea/q/l?contract_code='+code).then(res=>{
					console.log(res);
					//this.items=res;
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/common';
</style>
