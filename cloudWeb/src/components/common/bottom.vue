<template>
 <div class="bottom">
 	<div class="w1190">
 		<div class="list-box">
 			<ul class="clearfix">
 				<li class="li1">
 					<div class="img-box"></div> 
 					<div class="content">
 						<div>专业知产顾问团队</div> 
 						<div>为您推荐商品</div> 
 						<div>提供最新优惠信息</div></div></li>
 				 <li class="li2">
 				 	<div class="img-box"></div> 
 				 	<div class="content">
 				 		<div>中细软对您的承诺</div> 
 				 		<div>全程服务跟踪</div> 
 				 		<div>终身售后保障</div>
 				 	</div>
 				 </li> 
 				 <li class="li3">
 				 	<div class="img-box"></div> 
 				 	<div class="content">
 				 		<div>客服热线</div> 
 				 		<div class="tel">400-700-0065</div>
 				 	</div>
 				 </li>
 				 <li class="li4">
 				  <a href="https://weibo.com/gbicom" target="blank" class="weibo"></a> 
 				  <a href="http://wpa.qq.com/msgrd?v=3&uin=1732452724&site=qq&menu=yes"  target="blank" class="wx"></a>
 				 </li>
 		    </ul>
 		</div>
 		<div class="clearfix">
 			<div class="code-box">
 				<div class="code code1">
 					<img src="../../static/images/code1.jpg" />
 					<a href="#">手机超市</a>
 				</div>
 				<div class="code">
 					<img src="../../static/images/code2.jpg" />
 					<a href="#">知产商城</a>
 				</div>
 			</div>
 			<div class="link-box">
 				<div class="title">友情链接</div>
 				<div class="link">
 					<!-- <a href="#">专利申请</a>
 					<a href="#">商标注册</a>
 					<a href="#">深圳品牌设计</a>
 					<a href="#">蓝景商城</a>
 					<a href="#">厦门注册公司</a>
 					<a href="#">景泰蓝</a>
 					<a href="#">合肥注册公司</a>
 					<a href="#">商标转让</a>
 					<a href="#">商标注册</a>
 					<a href="#">名品网</a>
 					<a href="#">律师咨询</a>
 					<a href="#">注册商标查询</a>
 					<a href="#">深圳商标注册</a>
 					<a href="#">买商标</a>
 					<a href="#">商标转让</a>
 					<a href="#">专利申请</a>
 					<a href="#">名人事迹</a>
 					<a href="#">兰格钢铁云商</a>
 					<a href="#">兰格钢铁云商</a>
 					<a href="#">兰格钢铁云商</a>
					 <dt> -->
                <a href="http://www.ipr123.com" target="_blank">商标注册</a><a href="http://www.chinalhcz.com" target="_blank">深圳品牌设计</a><a href="http://www.ljlj.cc" target="_blank">蓝景商城</a><a href="http://www.xmjjzd.cn" target="_blank">厦门注册公司</a><a href="http://www.ltljtl.com" target="_blank">景泰蓝</a><a href="http://www.daizhang8.com" target="_blank">合肥注册公司</a><a href="http://www.zhifuzi.com" target="_blank">商标转让</a><a href="http://www.suthink.net" target="_blank">商标注册</a><a href="http://www.efpp.com/" target="_blank">名品网</a><a href="http://www.yunfalv.com" target="_blank">律师咨询</a><a href="http://www.epbiao.com" target="_blank">注册商标查询</a><a href="http://www.lange360.com" target="_blank">兰格钢铁云商</a><a href="http://www.psz-ip.cn" target="_blank">深圳商标注册</a><a href="http://www.mb.cc" target="_blank">买商标</a><a href="http://www.ipvip.cn" target="_blank">商标转让</a><a href="http://www.wipoask.com" target="_blank">专利申请</a><a href="http://www.bxxh8.com " target="_blank">名人事迹</a><a href="http://www.sdbohao.cn" target="_blank">青岛专利申请</a><a href="https://www.fxiaoke.com/" target="_blank">纷享销客</a><a href="http://www.qianhui.cn/" target="_blank">商标注册</a><a href="http://www.knowmi.cn" target="_blank">亮马桥生活网</a><a href="http://www.qxtm.net/" target="_blank">商标申请</a><a href="http://www.zqtip.com" target="_blank">商标查询</a><a href="http://www.ebiaoip.com" target="_blank">商标拍卖</a><a href="https://x.zhihuiya.com/" target="_blank">智慧芽</a>
 				</div>
 			</div>
 		</div>
 	</div>
 </div>
</template>
<script>
export default {
 data() {
  return {

  }
 },
}
</script>

<style scoped lang="scss">
$hover:#fff;
.bottom{
	background: #393f43 url(../../static/images/bottom_bg.jpg) no-repeat top center;
  	height: 370px;font-size: 14px;
  	padding-top: 50px;
	.list-box{
		border-top: 1px solid rgba(255, 255, 255, 0.2);
	    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	    padding: 36px 0;
	    li{
	     height: 78px;
	      color: #ccc;
	      float: left;
	      border-right: 1px solid rgba(255, 255, 255, 0.2);
	      .img-box,.content{
	      	float: left;
	      }
	      .img-box{
	      	height: 78px;
        	width: 80px;
        	background:url(../../static/images/bottom_ico.png) no-repeat;
	      }
	      .content{
	      	 padding: 6px 60px 0 15px;
	      	 div{
	      	 	 line-height: 22px;
	      	 }
	      	 .tel{
	      	 	font-size: 20px;
		          font-weight: bold;
		          color: #fff;
	      	 }
	      }
	      &.li2{
	      	padding-left: 50px;
	      	.img-box{
	      		background-position: -80px top;
	      	}
	      }
	       &.li3{
	      	padding-left: 50px;
	      	.img-box{
	      		background-position: -160px top;
	      	}
	      }
	      &.li4{
	      	border-right: none;
        	padding: 0 35px;
        	.weibo,.wx{
				display: inline-block;margin-top: 8px;
	          	width: 62px;
	          	height: 62px;
	          	background:url(../../static/images/wx_ico.png) no-repeat;
        	}
        	.wx{
        		background:url(../../static/images/qq.png) no-repeat 0 0;
				margin-left: 50px;
        	}
	      }
	    }
	}
	.link-box{
		margin-top: 30px;border-right: 1px solid rgba(255, 255, 255, 0.2);width:895px;
		padding:0 20px 20px;
		.title{
			padding-bottom: 14px;font-size: 16px;color:#999;
		}
		.link{
			a{
				display: inline-block;margin-right:15px;color:#ccc;line-height: 24px;
				&:hover{
					color:$hover;font-weight: bold;
				}
			}
		}
	}
	.code-box{
		float:right;
		.code{
			float: left;
			&.code1{
				margin-right: 28px;
			}
			a{
				display: block;line-height: 30px;color:#999;text-align: center;
				&:hover{
					color: $hover;font-weight: bold;
				}
			}
		}
	}
}
</style>
