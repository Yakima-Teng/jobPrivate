<template>
   <div class="fail">
	   <div class="ico-box"><i class="icon-close"></i></div>
	   <div class="msg">订单提交失败，请刷新后重新提交订单！</div>
	   <div class="btn-box"><a href="javascript:void(0)" class="affirm" @click="closeFn">确认</a></div>
   </div>
</template>

<script>
export default {
  data(){
  	return{
		  thisLayer:false
  	}
  },
  methods: {
	 closeFn(){
		 this.$emit('failLayerFn',this.thisLayer)
	 }
 }
}
</script>

<style lang="scss">
$hover:#e52e3a;
$cur:#FF3342;
.fail{
	background: #fff;border-radius: 10px;position: fixed;left:50%;top:50%;margin:-121px 0 0 -193px;
	z-index: 51;width:386px;padding:40px 0;text-align: center;
	.ico-box{
		width:54px;height:54px;border-radius: 50%;border:2px solid #999;margin:0 auto;text-align:center;overflow: hidden;
		i{
			font-size: 100px;color:#999;margin-left:-24px;line-height:54px;
		}
	}
	.msg{
		line-height: 56px;padding-bottom: 10px;
	}
	.btn-box{
		.affirm{
			display: inline-block;width:140px;height:46px;line-height: 46px;font-size: 20px;color:#fff;border-radius: 2px;background: $hover;
			padding: 0px;margin-top:47px;
			&:hover{
				background: $cur;
			}
		}
	}
}
</style>
