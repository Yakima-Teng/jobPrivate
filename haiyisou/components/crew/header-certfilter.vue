<template>
	<view class="filter-content-box">
	<view class="filter-content">
    <form @submit="" @reset="">
      <view class="issuer-box">
				<view class="title">证书状态</view>
				<view class="issuer-list">
					<radio-group @change="choose">
					<label class="radio">
						<radio value="" :checked="zszt==''" />不限
					</label>
					<label class="radio">
						<radio value="1" :checked="zszt=='1'"/>有效
					</label>
					<label class="radio">
						<radio value="0" :checked="zszt=='0'"/>无效
					</label>
					</radio-group>
				</view>
			</view>
      <view class="btn-box">
        <button  @click="rest">重置</button>
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
			type: 'rangetime',
			value: '',
			zszt:'',
		}
	},
	methods: {
		choose(e){
			console.log("*************"+e.detail.value);
			this.zszt=e.detail.value;
		},
		rest(){
			console.log('>>');
			this.zszt=''
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
.filter-content{ padding-top: 0rpx; }
.btn-box{ 
	>button{width: 269rpx;}
}
.issuer-box{ 
  .issuer-list .radio{margin-bottom: 36rpx;}
 }
/* #endif */
</style>
