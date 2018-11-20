<template>
	<ul v-if="infoList.length == 5" class='channel-list'>
		<li v-for="(list, index) in infoList" :key="index" v-if="list.sku_info != ''">
			<div class="list-box">
				<div class="img-box"><img :src="list.product_img" /></div>
				<i class="icon icon-view"></i>
				<h3>{{list.product_name}}</h3>
				<p class="desc">{{list.product_desc}}</p>
				<p class="price" v-if="list.sku_info.sku_buy_status == 1">￥<strong>{{list.sku_info.sku_price}}</strong></p>
				<a v-else class="advisory" @click="openzxFn">立即咨询<i class="icon icon-right"></i></a>
				<router-link class="cloud" tag="a" target="_blank" :to="'/'+list.product_id"></router-link>
			</div>
		</li>
	</ul>
	<ul v-else-if="infoList.length == 2" class='channel-list d-across'>
		<li>
			<div class="box">
				<div class="img-box"><img :src="img" /></div>
				<!-- <div class="info">
					<h3>商标申请人/注册人注册地址变更</h3>
					<span class="line"></span>
				</div> -->
			</div>
		</li>
		<li v-for="(list, index) in infoList" :key="index" v-if="list.sku_info != ''">
			<dl>
				<dt><div class="img-box"><img :src="list.product_img" /></div></dt>
				<dd>
					<h3>{{list.product_name}}</h3>
					<p class="desc">{{list.product_desc}}</p>
					<p class="price" v-if="list.sku_info.sku_buy_status == 1"><i class="icon icon-view"></i>￥<strong>{{list.sku_info.sku_price}}</strong></p>
					<a v-else class="advisory" @click="openzxFn">立即咨询<i class="icon icon-right"></i></a>
					<router-link tag="a" class="cloud" target="_blank" :to="'/'+list.product_id"></router-link>
				</dd>
			</dl>
		</li>
	</ul>
	<ul v-else-if="infoList.length == 4 && type == 'other'" class='channel-list across'>
		<li>
			<div class="box">
				<div class="img-box"><img :src="img" /></div>
				<!-- <div class="info">
					<h3>补发商标变更证明</h3>
					<p class="desc">快速补发商标变更证明</p>
					<span class="line"></span>
					<p class="price">￥<strong>800</strong></p>
				</div> -->
			</div>
		</li>
		<li v-for="(list, index) in infoList" :key="index" v-if="list.sku_info != ''">
			<dl>
				<dt><div class="img-box"><img :src="list.product_img" /></div></dt>
				<dd>
					<h3>{{list.product_name}}</h3>
					<p class="desc">{{list.product_desc}}</p>
					<p class="price" v-if="list.sku_info.sku_buy_status == 1"><i class="icon icon-view"></i>￥<strong>{{list.sku_info.sku_price}}</strong></p>
					<a v-else class="advisory" @click="openzxFn">立即咨询<i class="icon icon-right"></i></a>
					<router-link tag="a" class="cloud" target="_blank" :to="'/'+list.product_id"></router-link>
				</dd>
			</dl>
		</li>
	</ul>
	<ul v-else class='channel-list'>
		<li>
			<div class="box">
				<div class="img-box"><img :src="img" /></div>
				<!-- <div class="info">
					<h3>商标异议答辩</h3>
					<p class="desc">注册最终关，答辩成功即拿证</p>
					<span class="line"></span>
					<p class="price">￥<strong>5000</strong></p>
				</div> -->
			</div>
		</li>
		<li v-for="(list, index) in infoList" :key="index" v-if="list.sku_info != ''">
			<div class="list-box">
				<div class="img-box"><img :src="list.product_img" /></div>
				<i class="icon icon-view"></i>
				<h3>{{list.product_name}}</h3>
				<p class="desc">{{list.product_desc}}</p>
				<p class="price" v-if="list.sku_info.sku_buy_status == 1">￥<strong>{{list.sku_info.sku_price}}</strong></p>
				<a v-else class="advisory" @click="openzxFn">立即咨询<i class="icon icon-right"></i></a>
				<router-link class="cloud" tag="a" target="_blank" :to="'/'+list.product_id"></router-link>
			</div>
		</li>
	</ul>
</template>
<script>
import {openzx} from '../../../static/js/util.js'
export default {
	props: ['type', 'infoList', 'img'],
	data() {
		return {
			
		}
	},
	methods: {
		openzxFn(){
			//打开商务通
			openzx()
		}
	}
}
</script>

<style scoped lang="scss">
$red: #e52e3a;
.ellipsis{
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.mul-ellipsis{
	overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; //行数
    -webkit-box-orient: vertical;
}
.channel-list{
	overflow: hidden;
	li{
		float: left;
		margin-right: 10px;
		.list-box, dl{
			position: relative;
			display: block;
			width: 230px;
			padding: 30px;
			background-color: white;
			box-sizing: border-box;
			box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.06);
			transition: all .2s ease-in;
			.img-box{
				width: 135px;
				height: 135px;
				margin: 0 auto;
				border: 1px dashed #ccc;
				border-radius: 50%;
				background-color: #f7f7f7;
				box-sizing: border-box;
				text-align: center;
				line-height: 134px;
				img{
					display: inline-block;
					vertical-align: middle;
					max-width: 135px;
					max-height: 135px;
				}
			}
			.icon-view{
				display: block;
				margin: -9px auto 0;
				width: 26px;
				height: 26px;
				background-color: #e5e5e5;
				font-size: 20px;
				color: white;
				line-height: 26px;
				text-align: center;
				border-radius: 50%;
			}
			h3{
				height: 36px;
				font-size: 16px;
				line-height: 18px;
				color: #333;
				text-align: center;
				margin-top: 18px;
				@extend .mul-ellipsis;
			}
			p{
				text-align: center;
			}
			.desc{
				margin-top: 8px;
				font-size: 14px;
				line-height: 18px;
				color: #999;
				text-align: center;
				@extend .ellipsis;
			}
			.price,.advisory{
				margin-top: 14px;
				line-height: 18px;
			}
			.price{
				font-size: 18px;
				color: $red;
			}
			.advisory{
				position: relative;
				display: block;
				width: 100px;
				text-align: center;
				height: 18px;
				color: #4685c3;
				margin: 14px auto 0;
				cursor: pointer;
				z-index: 1;
				.icon{
					font-size: 18px;
					color: inherit;
					font-weight: bold;
					vertical-align: text-bottom;
				}
				&:hover{
					color: $red;
				}
				.icon-right{
					position: relative;
					top:1px;
				}
			}
			.cloud{
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
			}
			&:hover{
				position: relative;
				transform:translateY(-4px);
			}
		}
		.box{
			position: relative;
			.img-box{
				width: 230px;
				height: 324px;
				text-align: center;
				line-height: 324px;
				img{
					display: inline-block;
				}
			}
			.info{
				position: absolute;
				left: 24px;
				bottom: 34px;
				color: white;
				h3{
					font-size: 24px;
					line-height: 1;
					font-weight: bold;
				}
				.desc{
					font-size: 14px;
					line-height: 18px;
					margin-top: 10px;
				}
				.line{
					display: block;
					margin-top: 13px;
					width: 31px;
					height: 0;
					border-top: 2px solid rgba(255,255,255,.5);
				}
				.price{
					margin-top: 14px;
					font-size: 24px;
					line-height: 1;
					color: #ff6670;
				}
			}
		}
		&:last-child{
			margin-right: 0;
		}
	}
	&.across{
		li{
			margin-bottom: 10px;
			&:nth-child(2n+3){
				margin-right: 0;
			}
			&:first-child,&:nth-last-child(2),&:last-child{
				margin-bottom: 0;
			}
		}
		dl{
			position: relative;
			width: 470px;
			padding: 11px 30px;
			overflow: hidden;
			dt,dd{
				float: left;
			}
			dt{
				width: 135px;
			}
			dd{
				width: 243px;
				padding-left: 31px;
				overflow: hidden;
				h3,p{
					text-align: left;
				}
				h3{
					margin-top: 15px;
				}
				.desc{
					margin-top: 12px;
				}
				.price{
					overflow: hidden;
					line-height: 26px;
				}
				.icon-view{
					float: right;
					margin-top: 0;
				}
				.cloud{
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
				}
				.advisory{
					position: relative;
					z-index: 1;
					margin-left: 0;
					height: 26px;
					line-height: 26px;
				}
			}
		}
	}
	&.d-across{
		@extend .across;
		.box{
			.img-box{
				height: 157px;
				line-height: 157px;
			}
			.info{
				top: 27px;
				left: 28px;
				bottom: auto;
				h3{
					font-size: 18px;
					line-height: 21px;
					width: 153px;
				}
			}
		}
	}
}
</style>
