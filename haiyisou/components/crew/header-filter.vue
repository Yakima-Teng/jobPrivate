<template>
	<view class="filter-content-box">
	<view class="filter-content">
    <form @submit="" @reset="">
      <view class="registration-time">
        <view class="title">注册时间</view>
				<view class="status-radio">
					<label class="radio"><radio value="status" />不限</label>
					<label class="radio"><radio value="status" />近一周</label>
					<label class="radio"><radio value="status" />近半年</label>
					<label class="radio"><radio value="status" />近一年</label>
				</view>
				<view class="time-select">
					<text>{{range[0]}}</text> - <text>{{range[1]}}</text>
					<button type="primary" @click="onShowDatePicker('range')" class="btn-time">选择日期范围</button>
					<mx-date-picker :show="showPicker" :type="type" :value="value" :show-tips="true" :begin-text="'开始时间'" :end-text="'终止时间'" :show-seconds="true" @confirm="onSelected" @cancel="onSelected" />
				</view>
      </view>
     
      <view class="ship-status">
				<view class="title">船舶类型</view>
				<view class="status-radio">
					<label class="radio">
						<radio value="issuer" />不限
					</label>
					<label class="radio">
						<radio value="issuer" />客船类
					</label>
					<label class="radio">
						<radio value="issuer" />普通货船
					</label>
					<label class="radio">
						<radio value="issuer" />液货船类
					</label>
					<label class="radio">
						<radio value="issuer" />工程船类
					</label>
					<label class="radio">
						<radio value="issuer" />工作船类
					</label>
					<label class="radio">
						<radio value="issuer" />拖船类
					</label>
					<label class="radio">
						<radio value="issuer" />其他类
					</label>
					<label class="radio">
						<radio value="issuer" />客船类
					</label>
					<label class="radio">
						<radio value="issuer" />普通货船
					</label>
					<label class="radio">
						<radio value="issuer" />液货船类
					</label>
					<label class="radio">
						<radio value="issuer" />工程船类
					</label>
					<label class="radio">
						<radio value="issuer" />工作船类
					</label>
					<label class="radio">
						<radio value="issuer" />拖船类
					</label>
					<label class="radio">
						<radio value="issuer" />其他类
					</label>
				</view>
				<view class="ship-info">
					<view class="info">普通客船</view>
					<view class="info">客货船</view>
					<view class="info">车客渡船</view>
					<view class="info">旅游客船</view>
					<view class="info">高速客船</view>
					<view class="info">客驳船</view>
					<view class="info">滚装客船</view>
					<view class="info">客箱船</view>
					<view class="info">旅游客</view>
					<view class="info">高速客船</view>
					<view class="info">客驳船</view>
					<view class="info">滚装客船</view>
					<view class="info">客箱船</view>
					<view class="info">旅游客</view>
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
