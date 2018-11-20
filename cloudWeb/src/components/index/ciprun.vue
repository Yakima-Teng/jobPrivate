<template>
<div class="floor-ciprun w1190">
	<section class="ciprun info">
		<div class="title">
			<h2>细软情报<em class="en"></em></h2>
			<a class="btn-more" href="javascript:void(0)"><em>查看更多</em><i class="icon icon-more"></i></a>
		</div>
		<dl>
			<dt>
				<img v-lazy="require('../../static/images/index/img_o_01.jpg')"/>
			</dt>
			<dd>
				<h4><a>中细软集团知识产权贯标推介会圆</a></h4>
				<p class="time"><i class="icon icon-shizhong"></i><span>2018-08-15</span></p>
				<p class="desc">商标获得授权后，有效期是10年，从核准注册之日起计算。到期后，可以选择商标...</p>
			</dd>
		</dl>
		<ul>
			<li><a>中细软知识产权5.18周年庆再次刷新记录日服...</a><span class="date">2018-08-15</span></li>
			<li><a>法律点评北京中细软律所黄莉凌律师受邀...</a><span class="date">2018-08-12</span></li>
			<li><a>中细软知识产权5.18周年庆再次刷新记录日服...</a><span class="date">2018-08-7</span></li>
		</ul>
	</section>
	<section class="ciprun wealth">
		<div class="title">
			<h2>细软有道<em class="en"></em></h2>
			<a class="btn-more" href="javascript:void(0)"><em>查看更多</em><i class="icon icon-more"></i></a>
		</div>
		<dl>
			<dt>
				<img v-lazy="require('../../static/images/index/img_o_02.jpg')"/>
			</dt>
			<dd>
				<h4><a>中细软集团知识产权贯标推介会圆</a></h4>
				<p class="time"><i class="icon icon-shizhong"></i><span>2018-08-15</span></p>
				<p class="desc">商标获得授权后，有效期是10年，从核准注册之日起计算。到期后，可以选择商标...</p>
			</dd>
		</dl>
		<ul>
			<li><a>中细软知识产权5.18周年庆再次刷新记录日服...</a><span class="date">2018-08-15</span></li>
			<li><a>法律点评北京中细软律所黄莉凌律师受邀...</a><span class="date">2018-08-12</span></li>
			<li><a>中细软知识产权5.18周年庆再次刷新记录日服...</a><span class="date">2018-08-7</span></li>
		</ul>
	</section>
</div>
</template>
<script>
export default {
	data() {
		return {
			
		}
	},
	methods:{
		
	}
}
</script>

<style scoped lang="scss">
$main-font:#333;
$red: #e52e3a;
.floor-ciprun{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 60px;
	.ciprun{
		width: 570px;
		overflow: hidden;
		a:hover{
			font-weight: bold;
			color: $red;
		}
		.title{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			h2{
				font-size: 36px;
				line-height: 1;
				color: $main-font;
				.en{
					display: inline-block;
					width: 147px;
					height: 13px;
					margin-left: 11px;
					background: url(../../static/images/index/en_06.png) center no-repeat;
				}
			}
			a{
				display: flex;
				flex-direction: row;
				em{
					width: 78px;
					height: 36px;
					border: 1px solid #ccc;
					border-right: 0 none;
					font-size: 14px;
					color: $main-font;
					line-height: 36px;
					text-align: center;
				}
				i{
					display: flex;
					justify-content: center;
					align-items: center;
					width: 38px;
					height: 38px;
					font-size: 28px;
					color: white;
					background-color: $main-font;
				}
				&:hover{
					i{
						background-color: $red;
					}
				}
			}
		}
		dl{
			width: 100%;
			margin-top: 30px;
			display: flex;
			flex-direction: row;
			dt{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 230px;
				height: 160px;
			}
			dd{
				flex: 1;
				padding: 25px 30px 20px;
				background-color: #f0f0f0;
				overflow: hidden;
				h4{
					font-size: 18px;
					line-height: 1;
					color: #222224; 
					overflow: hidden;
					white-space:nowrap;
					text-overflow:ellipsis;
				}
				.time{
					margin-top: 20px;
					font-size: 12px;
					color: lighten($main-font, 40%);
					line-height: 13px;
					.icon{
						font-size: 13px;
						color: inherit;
						margin-right: 9px;
					}
				}
				.desc{
					margin-top: 17px;
					font-size: 14px;
					line-height: 24px;
					height: 48px;
					color: lighten($main-font, 20%);
					white-space: normal;
					-webkit-line-clamp: 2;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
			}
		}
		ul{
			margin-top: 4px;
			overflow: hidden;
			li{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				border-bottom: 1px dashed #d4d4d4;
				a, span{
					display: block;
					line-height: 44px;
					height: 44px;
				}
				a{
					flex: 1;
					overflow: hidden;
					white-space:nowrap;
					text-overflow:ellipsis;
					font-size: 14px;
					color: $main-font;
					padding-right: 10px;
				}
				.date{
					font-size: 12px;
					color: lighten($main-font, 40%);
				}
			}
		}
		&.wealth .title h2 .en{
			width: 87px;
			background-image: url(../../static/images/index/en_07.png);
		}
	}
}
</style>
