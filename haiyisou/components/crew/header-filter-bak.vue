<template>
	<view class="filter-content-box">
	<view class="filter-content">
    <form @submit="" @reset="">
      <view class="header-status">
        <view class="title">状态</view>
				<view class="status-radio">
					<label class="radio"><radio value="status" />全部</label>
					<label class="radio"><radio value="status" />仅看有效</label>
				</view>
      </view>
      <view class="time-obtain">
				<view class="title">取得时间</view>
				<view class="time-select">
					<text>{{range[0]}}</text> - <text>{{range[1]}}</text>
					<button type="primary" @click="onShowDatePicker('range')" class="btn-time">选择日期范围</button>
					<mx-date-picker :show="showPicker" :type="type" :value="value" :show-tips="true" :begin-text="'开始时间'" :end-text="'终止时间'" :show-seconds="true" @confirm="onSelected" @cancel="onSelected" />
				</view>
			</view>
      <view class="type-certificate">
				<view class="title">证书类型</view>
				<view class="type-list">
					<view class="type">船员注册船员注册</view>
					<view class="type cur">海船适任证</view>
					<view class="type cur">海船适任证</view>
					<view class="type cur">海船合格证</view>
					<view class="type">海船</view>
				</view>
			</view>
      <view class="issuer-box">
				<view class="title">发放单位</view>
				<view class="issuer-list">
					<label class="radio">
						<radio value="issuer" />徐圩海事局
					</label>
					<label class="radio">
						<radio value="issuer" />盐城海事局
					</label>
					<label class="radio">
						<radio value="issuer" />墟沟海事局
					</label>
					<label class="radio">
						<radio value="issuer" />连云海事局
					</label>
					<label class="radio">
						<radio value="issuer" />赣榆海事局
					</label>
				</view>
			</view>
      <view class="btn-box">
        <button form-type="reset">重置</button>
        <button form-type="submit" type="primary" @click="submitBtn()">确定</button>
      </view>
    </form>
	</view>
	</view>
</template>

<script>
import MxDatePicker from "@/components/mx-datepicker/mx-datepicker";
export default {
	components: {
		MxDatePicker
	},
	data() {
		return {
			showPicker: false,
			range: ['2019/01/11','2019/01/22'],
			type: 'rangetime',
			value: ''
		}
	},
	methods: {
		onShowDatePicker(type){//显示
			this.type = type;
			this.showPicker = true;
			this.value = this[type];
		},
		onSelected(e) {//选择
			this.showPicker = false;
			if(e) {
				this[this.type] = e.value; 
				//选择的值
				console.log('value => '+ e.value);
				//原始的Date对象
				console.log('date => ' + e.date);
			}
		},
		submitBtn() {
			this.$emit('toggleFilterHide');
		}
	}
}
</script>

<style lang="scss">
@import '@/static/css/common';
</style>
