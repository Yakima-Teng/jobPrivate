<template>
	<view class="g-footer component-class" :class="{'g-footer--fixed':fixed }">
	  <view class="g-footer__content">
	    <view class="g-footer__content__text">{{sponsor}}</view>
	    <view class="g-footer__content__text">{{supportor}}</view>
	  </view>
	</view>
</template>

<script>
	export default {
		name: 'uni-footer',
	    externalClasses: ['component-class'],
	    props: {
	        fixed: {
	            type: Boolean,
	            value: false
	        },
	        sponsor: {
	          type: String,
	          value: '连云港微海事'
	        },
	        supportor: {
	          type: String,
	          value: '北明软件提供技术支持'
	        }
	    },
		onLoad() {
			if(!this.supportor||this.supportor==''){
				this.supportor = '北明软件提供技术支持';
			}
			if(!this.sponsor||this.sponsor==''){
				this.sponsor = '连云港微海事';
			}
		}
	};
</script>

<style>
	.g-footer {
	  width: 670rpx;
	  padding: 60rpx 40rpx;
	}
	
	.g-footer--fixed {
	  position: absolute;
	  bottom: 0;
	}
	
	.g-footer__content {
	  width: 670rpx;
	}
	
	.g-footer__content__text {
	  font-family: "PingFangSC-Regular";
	  font-size: 26rpx;
	  line-height: 36rpx;
	  color: #bbbec4;
	  text-align: center;
	}

</style>

