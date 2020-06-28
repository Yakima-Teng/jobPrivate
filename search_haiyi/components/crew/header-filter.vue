<template>
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
.filter-content{ top:0; width: 88%; height:calc(100% - 100rpx); padding-top: 100rpx; right:0; position: fixed; background-color: #fff; z-index: 11; box-sizing: border-box; height:100%;
	.title{ font-size:36rpx; margin-bottom: 28rpx; line-height: 1;}
}
.header-status{ display: flex; justify-content: space-between; padding: 35rpx 40rpx; border-bottom: 10rpx solid #f0eff4; align-items: center;
	.title{ margin-bottom: 0;}
	.status-radio{ font-size: 28rpx;
		.radio{ margin-left: 65rpx;}
	}
}
.time-obtain{ padding: 37rpx 40rpx 30rpx; border-bottom: 10rpx solid #f0eff4;
	.time-select{ color: #e5e5e5; display: flex; justify-content: space-between; line-height:76rpx; 
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
.filter-content{ padding-top: 20rpx; }
.btn-box{ 
	>button{width: 269rpx;}
}
/* #endif */
</style>
