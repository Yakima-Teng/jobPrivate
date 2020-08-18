<template>
	<view class="filter-content-box">
	<view class="filter-content">
    <form @submit="" @reset="">
    <!--  <view class="header-status">
        <view class="title">状态</view>
				<view class="status-radio">
					<label class="radio"><radio value="status" />全部</label>
					<label class="radio"><radio value="status" />仅看有效</label>
				</view>
      </view> -->
      <view class="issuer-box">
      				<view class="title">申报时间</view>
      				<view class="issuer-list">
      						<radio-group @change="selectTimes">
      						<label class="radio">
      							<radio value="0" :checked="rvalue==='0'"/>不限
      						</label>
      					<label class="radio">
      						<radio value="week" :checked="rvalue==='week'"/>近一周
      					</label>
      					<label class="radio">
      						<radio value="mont":checked="rvalue==='mont'" />近一月
      					</label>
      					<label class="radio">
      						<radio value="hyear" :checked="rvalue==='hyear'"/>近半年
      					</label>
      					<label class="radio">
      						<radio value="oyerar" :checked="rvalue==='oyerar'"/>近一年
      					</label>
      					<label class="radio">
      						<radio value="aotu":checked="rvalue==='aotu'" />自定义时间
      					</label>
      						</radio-group>
      				</view>
      					<view class="time-select">
      						<text>{{range[0]}}</text> - <text>{{range[1]}}</text>
      						<button :disabled="read" type="primary" @click="onShowDatePicker('range')" class="btn-time">选择日期范围</button>
      						<mx-date-picker :show="showPicker" :type="type" :value="value" :show-tips="true" :begin-text="'开始时间'" :end-text="'终止时间'" :show-seconds="true" @confirm="onSelected" @cancel="onSelected" />
      					</view>
      			</view>
      
      <view class="btn-box">
        <button @click="reset">重置</button>
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
			value: '',
			rvalue: '0',
			read:true
		}
	},
	methods: {
		selectTimes(event){
			const that=this;
			this.rvalue=event.detail.value
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
		submitBtn() {
			this.$emit('toggleFilterHide',this);
			
		},
		reset(){
			this.rvalue='0';
			this.range=['','']
		}
	}
}
</script>

<style lang="scss">
.filter-content-box{ top:0; width: 100%; height:100%; right:0; position: fixed; z-index: 11; background-color: rgba($color: #000000, $alpha: .3); }
.filter-content{ background-color: #fff; width: 88%; right:0; position: fixed; height:100%; box-sizing: border-box;
	.title{ font-size:36rpx; margin-bottom: 28rpx; line-height: 1;}
}
.header-status{ display: flex; justify-content: space-between; padding: 35rpx 40rpx; border-bottom: 10rpx solid #f0eff4; align-items: center;
	.title{ margin-bottom: 0;}
	.status-radio{ font-size: 28rpx;
		.radio{ margin-left: 65rpx;}
	}
}
.time-obtain{ padding: 37rpx 40rpx 30rpx; border-bottom: 10rpx solid #f0eff4;
	.time-select{ color: #e5e5e5; display: flex; justify-content: space-between; line-height:76rpx; margin-bottom: 20rpx; 
		>text{ display: flex; justify-content: space-between; align-items: center; color:#000; border:1rpx solid #e5e5e5; background-color: #fafafa; box-sizing: border-box; width: 260rpx; height:76rpx; font-size: 28rpx; border-radius:10rpx; padding: 0 20rpx;
			&::after{ content: ''; display:block; width: 12rpx; height: 12rpx; border-color: #000; border-style: solid; border-width: 0 1rpx 1rpx 0; transform: rotate(45deg);}
		}
		.btn-time{ position: absolute; background-color: transparent; color:transparent; height: 76rpx; width:88%; left:40rpx;
			&::after{ border:none;}
		}
		
	}
}
.type-certificate{ @extend .time-obtain;
	.type-list{display: flex; flex-wrap: wrap;
		.type{ width: 180rpx; height:76rpx; text-align: center; font-size:28rpx; background-color: #f0eff4; margin: 0 20rpx 14rpx 0; box-sizing: border-box; padding: 0 19rpx; line-height:76rpx; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; position: relative; border-radius:10rpx; overflow: hidden;
			&:nth-child(3n){ margin-right: 0;}
			&::after{ content: ''; position: absolute; right:6rpx; bottom: 5rpx; display: inline-block; width: 4px;height: 8px; border-color: #fff; border-style: solid; border-width: 0 1px 1px 0; transform: rotate(45deg); display: none;}
			&::before{ content:''; display: none; position: absolute; width: 0; height: 0; border-width: 18rpx; border-style: solid; border-color:transparent #3882f9 #3882f9 transparent; right:0; bottom:0;}
			&.cur{ background-color: #eff4fb; color:#3882f9;
				&::after,
				&::before{ display: block;}
			}
		}
	}
}
.issuer-box{ @extend .time-obtain; padding-bottom: 0;
	.issuer-list{ 
		.radio{ width: 50%; display: inline-block; margin-bottom: 56rpx;}
	}
}
.btn-box{ display: flex; padding: 30rpx 40rpx 0;
	>button{width: 270rpx;
		&[form-type="submit"]{color: #fff; background-color: #3882f9;}
	}
}
/* #ifdef  MP-WEIXIN */
.filter-content{ padding-top: 0rpx; }
.btn-box{ 
	>button{width: 269rpx;}
}
.issuer-box{ 
  .issuer-list .radio{margin-bottom: 36rpx;}
 }
/* #endif */
</style>
