<template>
	<view class="filter-content-box">
	<view class="filter-content">
    <form @submit="" @reset="">
      <view class="registration-time">
        <view class="title">注册时间</view>
			<radio-group  @change="selectTimes">
				<view class="status-radio">
					
						<label class="radio"><radio value="0" :checked="rvalue=='0'" />不限</label>
						<label class="radio"><radio value="week" :checked="rvalue=='week'" />近一周</label>
						<label class="radio"><radio value="mont" :checked="rvalue=='mont'" />近一月</label>
						<label class="radio"><radio value="hyear" :checked="rvalue=='hyear'"/>近半年</label>
						<label class="radio"><radio value="oyerar":checked="rvalue=='oyerar'" />近一年</label>
						<label class="radio"><radio value="aotu" :checked="rvalue=='aotu'"/>自定义</label>
				</view>
			</radio-group>
				<view class="time-select">
					<text>{{range[0]}}</text> - <text>{{range[1]}}</text>
					<button :disabled="read" type="primary" @click="onShowDatePicker('range')" class="btn-time">选择日期范围</button>
					<mx-date-picker :show="showPicker" :type="type" :value="value" :show-tips="true" :begin-text="'开始时间'" :end-text="'终止时间'" :show-seconds="true" @confirm="onSelected" @cancel="onSelected" />
				</view>
      </view>
     
      <view class="ship-status">
				<view class="title">船舶类型</view>
				<radio-group>
				<view class="status-radio">
					<label class="radio">
						<radio value="0" @click="showType([])" :checked="tvalue=='0'" />不限
					</label>
					<label class="radio" v-for="(item,index) in shipTypeList" :key="index">
						<radio :value="item.title" :checked="tvalue==item.title"  @click="showType(item.list,item.title)"/>{{item.title}}
					</label>
					<!-- <label class="radio">
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
					</label> -->
					
				</view>
				</radio-group>
				<view class="ship-info" v-if="showTypes.length>0">
					<view v-for="(item,index) in showTypes" :key="index">
					<view :class="shipTypeCode==item.shipTypeCode ?'info cur':'info'" @click="onChangeType(item)">{{item.shipTypeNameCn}}</view>
					</view>
					<!-- <view class="info">客货船</view>
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
					<view class="info">旅游客</view> -->
				</view>
			</view>
      <view class="btn-box">
        <button  @click="reset">重置</button>
        <button form-type="submit" type="primary" @click="submitBtn()">确定</button>
      </view>
    </form>
	</view>
	</view>
</template>

<script>
import MxDatePicker from "@/components/mx-datepicker/mx-datepicker";
export default {
	props:["shipTypeList"],
	components: {
		MxDatePicker
	},
	data() {
		return {
			showPicker: false,
			range: ['',''],
			type: 'rangetime',
			value: '',
			tvalue:'0',
			showTypes:[],
			shipTypeCode:'',
			read:true,
			rvalue:'0'
		}
	},
	methods: {
		selectTimes(event){
			const that=this;
			this.rvalue=event.detail.value;
			// console.log(event.detail.value);
			if(event.detail.value==='week'){
				that.$set(that.range, 0, this.getTime(-7));
				that.$set(that.range, 1, this.getTime(0));
				this.read=true
			}else if(event.detail.value==='mont'){
				that.$set(that.range, 0, this.getTime(-31));
				that.$set(that.range, 1, this.getTime(0));
				this.read=true
			}else if(event.detail.value==='hyear'){
				that.$set(that.range, 0, this.getTime(-180));
				that.$set(that.range, 1, this.getTime(0));
				this.read=true
			}else if(event.detail.value==='oyerar'){
				that.$set(that.range, 0, this.getTime(-365));
				that.$set(that.range, 1, this.getTime(0));
				this.read=true
			}else if(event.detail.value==='0'){
				that.$set(that.range, 0, '');
				that.$set(that.range, 1, '');
				this.read=true
			}else{
				that.$set(that.range, 0, this.getTime(-1));
				that.$set(that.range, 1, this.getTime(0));
				this.read=false
			}
		},
		getTime(day){
			　　var today = new Date();
			　　var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
			　　today.setTime(targetday_milliseconds); //注意，这行是关键代码
			　　var tYear = today.getFullYear();
			　　var tMonth = today.getMonth();
			　　var tDate = today.getDate();
			　　tMonth = this.doHandleMonth(tMonth + 1);
			　　tDate = this.doHandleMonth(tDate);
			　　return tYear+"/"+tMonth+"/"+tDate;
			},
			doHandleMonth(month){
			　　var m = month;
			　　if(month.toString().length == 1){
			　　　　m = "0" + month;
			　　}
			　　return m;
			},
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
		showType(obj,title){
			this.tvalue=title;
			this.showTypes=obj;
			this.shipTypeCode=''
		},
		submitBtn() {
			this.$emit('toggleFilterHide',this);
		},
		reset() {
			this.rvalue='0';
			this.tvalue='0';
			this.shipTypeCode='';
			this.range=['','']
		},
		onChangeType(obj){
			this.shipTypeCode=obj.shipTypeCode;
		}
	}
}
</script>

<style lang="scss">
@import '@/static/css/common';
</style>
