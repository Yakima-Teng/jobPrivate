<template>
   <div class="affirm">
		<span class="close" @click="closeFn"><i class="icon-close"></i></span>
		<div class="img"></div>
		<div class="txt" v-if="delObj!=null">{{delObj.txt}}</div>
		<div class="btn-box">
			<a href="javascript:void(0)" class="affirmBtn" @click="affirmFn">确定</a>
			<a href="javascript:void(0)" class="cancelBtn" @click="closeFn">取消</a>
		</div>
   </div>
</template>

<script>
import {postFn} from '../../static/js/util.js'
export default {
  props:['delObj'],
  data(){
  	return{
		layer:false,
		success:'联系人删除成功',
		success2:'合同主体删除成功'
  	}
  },
  methods: {
	closeFn(){
		this.$emit('delALayer',this.thisLayer)
	},
	affirmFn(){
		const that = this;
		if(that.delObj!=null){
			if(that.delObj.txt.indexOf('联系人')!=-1){
				var data = {
					id:that.delObj.id
				}
				postFn('/user/user/contact/del',data,function(res){
					if(res.data.code==200){
						console.log('删除成功')
						that.$emit('delALayer',that.thisLayer,that.success)
					}
				})
			}else if(that.delObj.txt.indexOf('合同主体')!=-1){
				var data = {
					id:that.delObj.id
				}
				postFn('/user/user/contract/del',data,function(res){
					if(res.data.code==200){	
						console.log('删除成功')
						that.$emit('delALayer',that.thisLayer,that.success2)
					}
				})
			}
		}
	}
 },
 created(){
	
 }
}
</script>

<style lang="scss">
$hover:#e52e3a;
$cur:#FF3342;
.affirm{
	position: fixed;width: 498px;left:50%;top:50%;padding:40px;box-sizing: border-box;transform: translate(-50%,-50%);
	background-color: #ffffff;z-index: 51;
	border-radius: 10px;
	.close{
		position: absolute;right:-8px;top:-6px;cursor: pointer;
		color:#ccc;
		i{
			font-size: 68px;
		}
	}
	.img{
		width:48px;height: 48px;margin:38px auto 26px;background: url(../../static/images/user/contacts/contxbt.png) no-repeat -62px top;
	}
	.txt{
		font-size: 20px;color:#666;
		margin-bottom: 48px;text-align: center;
	}
	.btn-box{
		text-align: center;
		.affirmBtn,.cancelBtn{
			display: inline-block;width:140px;height: 46px;cursor: pointer;color: #fff;font-size: 20px;margin:0 25px;border-radius: 2px;line-height:46px;
			&.affirmBtn{
				background: $hover;
				&:hover{
					background:$cur;
				}
			}
			&.cancelBtn{background: #ccc;
				&:hover{
					background:$hover;
				}
			}
		}
	}
}
</style>
