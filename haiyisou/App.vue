<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
.uni-body{ font-family: Arial, Helvetica, sans-serif; -webkit-font-smoothing: subpixel-antialiased;}
uni-page-head .uni-page-head__title{ font-size: 37rpx!important;}
uni-image{ z-index: -1;}
uni-page{ height:auto;}
uni-radio .uni-radio-input {width: 40rpx; height:40rpx;border-color:#e5e5e5; background-color: #fafafa; margin: -7rpx 20rpx 0 0;
	&.uni-radio-input-checked::before{ content:''; border-radius: 100%; width: 25rpx; height:25rpx; background-color: #fff;}
}
</style>
