<template>
<div class="fixed-right">
	<ul>
		<li @click="openzxFn"><i class="icon icon-kefu"></i></li>
		<li><router-link to="/cart"><em class="num" v-if="cartNum!=0&&userInfo!=''&&isLogin!=false">{{cartNum}}</em><i class="icon icon-cart"></i><span>购物车</span></router-link></li>
		<li class="codeShow">
			<i class="icon icon-public"></i>
			<div class="codeLayer">
				<div class="box">
					<img src="../../static/images/wx.jpg" class="wx"/>
					<img src="../../static/images/zxr.jpg" class="zxr"/>
					<div class="triangle"></div>
				</div>
			</div>
		</li>
		<li @click="backTop"><i class="icon icon-top"></i></li>
	</ul>
</div>
</template>
<script>
import {backTop,openzx,postFn} from '../../static/js/util.js'
import {mapActions,mapState} from 'vuex'
export default {
	data() {
		return {
			
		}
	},
	computed: {
		...mapState(['cartNum','userInfo','isLogin']),
	},
	methods:{
		...mapActions(['update_num']),
		backTop(){
            backTop(this)
		},
		openzxFn(){
			//打开商务通
			openzx()
		},
		getCartnum(){
         var data={
             uid:this.userInfo.id
         }
			var that=this;
			postFn('/product/cart/cart_num',data,function(res){
				if(res.data.msg=='success'){
					that.update_num(res.data.data);
				}
			})
		},
	},
	mounted(){
		 $('.codeShow').hover(function() {
			$(this).find('.codeLayer').stop().animate({width: '160',left:'-152'}, 300);
			},function(){
			$(this).find('.codeLayer').stop().animate({width: '0',left:0}, 300);
		 });
	},
	created() {
		if(this.isLogin){
			this.getCartnum();
		}
	},
}
</script>

<style scoped lang="scss">
	.fixed-right{
		position: fixed;
		display: flex;
		align-items: center;
		top: 0;
		right: 0;
		background-color: #303030;
		height: 100%;
		padding: 0 5px;
		box-sizing: border-box;
		z-index: 9;
		li{
			position: relative;
			width: 30px;
			padding: 15px 0;
			border-bottom: 1px solid #3f3f3f;
			text-align: center;
			color: white;
			cursor: pointer;
			.codeLayer{
				position: absolute;width:0;top:0;left:0;overflow: hidden;height: 300px;
				.box{
					position: absolute;width: 138px;text-align: center;box-sizing: border-box;padding:8px;top:0;left:0;
					background: #fff;box-shadow:0 1px 5px 0 rgba(0,0,0,0.08);
					.triangle{
						border:5px solid transparent; border-left:5px solid #fff; overflow:hidden; height:0; width:0;position: absolute;right:-10px;top:20px;
					}
					img{
						width:120px;
					}
				}
			}
			a{
				color: white;
				&:hover{
					color: #e52e3a;
					.num{
						color: white;
					}
				}
			}
			span{
				display: block;
				padding: 2px 8px 5px;
				font-size: 14px;
				line-height: 16px;
				text-align: center;
			}
			.icon{
				font-size: 30px;
			}
			&:last-child{
				border-bottom:0 none;
			}
			.num{
				position: absolute;
				right: 0;
				top: 6px;
				width: 16px;
				height: 16px;
				border-radius: 50%;
				font-family: 'Arial';
				font-size: 12px;
				line-height: 16px;
				background-color: #e52e3a;
			}
			&:hover{
				color: #e52e3a;
				.num{
					color: white;
				}
			}
		}
	}
</style>
