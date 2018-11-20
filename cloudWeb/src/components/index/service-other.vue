<template>
	<div class="other-floor service-other w1190" v-if="type == 'service-other'">
		<ul v-show="currentIndex == 0">
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/img_s_01.jpg')" /></a>
				<div class="info">
					<h3>工商财税
						<p>诚信"注"品牌，专业"财"放心</p>
					</h3>
				</div>
			</li>
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/img_s_02.jpg')" /></a>
				<div class="info">
					<h3>高新认定
						<p>评估无形资产，提升市值，助力企业融资</p>
					</h3>
				</div>
			</li>
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/img_s_03.jpg')" /></a>
				<div class="info infoS">
					<h3>知识产权评估
						<p>享税收减免，促品牌提升，用创新助力企业升级</p>
					</h3>
				</div>
			</li>
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/img_s_04.jpg')" /></a>
				<div class="info">
					<h3>资质认证
						<p>团队精专业强，资质许可快人一步</p>
					</h3>
				</div>
			</li>
		</ul>
		<ul v-show="currentIndex == 1">
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/img_s_05.jpg')" /></a>
				<div class="info">
					<h3>商标设计
						<p>原创保证，让品牌赢在起跑线上</p>
					</h3>
				</div>
			</li>
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/img_s_06.jpg')" /></a>
				<div class="info">
					<h3>VI基础设计
						<p>用设计凸显品牌亮点，创意成就品牌未来</p>
					</h3>
				</div>
			</li>
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/img_s_07.jpg')" /></a>
				<div class="info">
					<h3>平面设计
						<p>专注高端设计，用我所长，达您所望</p>
					</h3>
				</div>
			</li>
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/img_s_08.jpg')" /></a>
				<div class="info">
					<h3>网站设计开发
						<p>高端网站制作，量身定制您的个性化网站</p>
					</h3>
				</div>
			</li>
		</ul>
		<ul v-show="currentIndex == 2">
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/img_s_09.jpg')" /></a>
				<div class="info">
					<h3>国际商标服务
						<p>资深法务团队高效撰写，用专业提升维权胜诉率</p>
					</h3>
				</div>
			</li>
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/img_s_10.jpg')" /></a>
				<div class="info">
					<h3>国际专利服务
						<p>资深律师坐镇，不惧知产纠纷</p>
					</h3>
				</div>
			</li>
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/img_s_11.jpg')" /></a>
				<div class="info">
					<h3>国际公司服务
						<p>依法捍卫原创利益，保护智力成果</p>
					</h3>
				</div>
			</li>
		</ul>
		<ul v-show="currentIndex == 3">
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/img_s_12.jpg')" /></a>
				<div class="info">
					<h3>法律文书制作
						<p>入驻境外平台，走向国际市场的通行证</p>
					</h3>
				</div>
			</li>
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/img_s_13.jpg')" /></a>
				<div class="info">
					<h3>不正当竞争诉讼
						<p>创新技术布局海外，提升品牌国际竞争力</p>
					</h3>
				</div>
			</li>
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/img_s_14.jpg')" /></a>
				<div class="info">
					<h3>知识产权民事侵权诉讼
						<p>开展跨国业务，提升企业国际形象第一步</p>
					</h3>
				</div>
			</li>
		</ul>
	</div>
	<div class="other-floor active w1190" v-else>
		<ul v-show="currentIndex == 0">
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/active_01.jpg')" /></a>
			</li>
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/active_02.jpg')" /></a>
				<a class="img-box"><img v-lazy="require('../../static/images/index/active_03.jpg')" /></a>
				<a class="img-box"><img v-lazy="require('../../static/images/index/active_05.jpg')" /></a>
				<a class="img-box"><img v-lazy="require('../../static/images/index/active_06.jpg')" /></a>
			</li>
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/active_04.jpg')" /></a>
			</li>
		</ul>
		<ul v-show="currentIndex == 1">
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/active_07.jpg')" /></a>
			</li>
		</ul>
		<ul v-show="currentIndex == 2">
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/active_08.jpg')" /></a>
			</li>
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/active_09.jpg')" /></a>
			</li>
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/active_10.jpg')" /></a>
			</li>
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/active_11.jpg')" /></a>
			</li>
			<li>
				<a class="img-box"><img v-lazy="require('../../static/images/index/active_12.jpg')" /></a>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	props: ['type', 'currentIndex'],
	data() {
		return {
			
		}
	},
	methods:{
		
	}
}
</script>

<style scoped lang="scss">
.other-floor{
	ul{
		width: 100%;
		overflow: hidden;
		li{
			float: left;
			position: relative;
			.img-box{
				display: flex;
				justify-content: center;
				align-items: center;
				img{
					display: block;
					max-width: 100%;
					max-height: 100%;
				}
			}
		}
	}
}
.service-other{
	ul{
		width: 100%;
		overflow: hidden;
		li{
			.img-box{
				width: 290px;
				height: 390px;
			}
			.info{
				width: 100%;
				display: flex;
				flex-direction: row;
				align-items: flex-end;
				position: absolute;
				padding: 22px 0 22px 20px;
				bottom: 0;
				background-color: rgba(51,51,51,.8);
				color: white;
				box-sizing: border-box;
				transition: all .2s ease-in;
				height: 94px;
				box-sizing: border-box;
				&.infoS{
					padding-bottom:10px;
					&:hover{
						padding-bottom: 12px;
					}
				}
				h3{
					font-size: 26px; 
					margin-right: 5px;
					p{
						margin-top: 10px;
						font-size: 14px;
					}
				}
				p{
					font-size: 14px;
				}
				&:hover{
					// padding-top:24px;
					padding-bottom:24px;
				}
			}
			&:first-child{
				.img-box{
					width: 590px;
					height: 390px;
				}
				.info{
					padding-left: 30px;
					flex-direction:column;
					align-items: stretch;
					background-color: rgba(51,51,51,.9);
					h3{
						font-size: 30px;
						// margin-bottom: 14px;
					}
					&:hover{
						padding-top:20px;
					}
				}
			}
			&:first-child,&:nth-child(2){
				margin-right: 10px;
			}
		}
		&:first-child,&:nth-child(2){
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			li{
				margin-right: 0;
				.img-box{
					width: 290px;
					height: 390px;
				}
				&:first-child{
					.img-box{
						width: 290px;
						height: 390px;
					}
					.info{
						padding-left: 20px;
						flex-direction:row;
						align-items: flex-end;
						background-color: rgba(51,51,51,.8);
						h3{
							font-size: 26px;
							margin-bottom: 0;
						}
					}
				}
				&:nth-child(3),&:last-child{
					// margin-top: 10px;
				}
			}
		}
	}
}
.active{
	ul:first-child{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		li{
			margin-right: 10px;
			.img-box{
				width: 230px;
				height: 160px;
			}
			&:first-child,&:last-child{
				.img-box{
					height: 330px;
				}
			}
			&:first-child{
				.img-box{
					width: 470px;
				}
			}
			&:nth-child(2){
				flex: 1;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				flex-wrap: wrap;
				overflow: hidden;
				.img-box:nth-child(3),.img-box:last-child{
					align-self: flex-end;
				}
			}
			&:last-child{
				margin-right: 0;
			}
		}
	}
	ul:nth-child(2) li .img-box{
		width: 100%;
		height: 100%;
	}
	ul:nth-child(3) li{
		.img-box{
			width: 290px;
			height: 160px;	
		}
		&:first-child{
			.img-box{
				width: 590px;
				height: 330px;
			}
		}
		&:first-child,&:nth-child(2),&:nth-child(4){
			margin-right: 10px;
		}
		&:nth-child(4),&:last-child{
			margin-top: 10px;
		}
	}
}
</style>
