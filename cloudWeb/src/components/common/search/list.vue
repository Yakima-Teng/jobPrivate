<template>
	<ul :class="type" v-if="type == 'img-list' || type == 'list'">
		<li v-for="(item, index) in list" :key="index" v-if='item.sku_info!=""'>
			<div class="list-box" v-if="type == 'img-list'" @click="togoods(item)">
				<div class="img-box"><img v-lazy="item.product_img" :key='item.product_img'/></div>
				<h4>{{item.product_name}}</h4>
				<p class="desc" :title="item.product_desc">{{item.product_desc}}</p>
				<p class="price" v-if="item.sku_info.sku_buy_status == 1">￥<strong>{{item.sku_info.sku_price}}</strong></p>
				<a v-else class="advisory" @click.stop="openzxFn">立即咨询<i class="icon icon-right"></i></a>
				<!-- <router-link class="cloud" tag="a" target="_blank" :to="{path: '/goods', query:{'product_id': item.product_id}}"></router-link> -->
			</div>
			<dl v-else class="list-box" @click="togoods(item)">
				<dt>
					<div class="img-box"><img v-lazy="item.product_img" :key='item.product_img' /></div>
				</dt>
				<dd>
					<h4>{{item.product_name}}</h4>
					<p class="desc" :title="item.product_desc">{{item.product_desc}}</p>
					<p class="price" v-if="item.sku_info.sku_buy_status == 1">￥<strong>{{item.sku_info.sku_price}}</strong></p>
					<a v-else class="advisory advisory2" @click.stop="openzxFn">立即咨询<i class="icon icon-right"></i></a>
					<!-- <router-link class="cloud" tag="a" target="_blank" :to="{path: '/goods', query:{'product_id': item.product_id}}"></router-link> -->
				</dd>
			</dl>
		</li>
	</ul>
	<ul class="my-list" v-else-if="type=='my'">
		<li v-for="(list, key, index) in myList" :key="index" @click="togoods(list)" v-if='list.sku_info!=""'>
			<div class="img-box"><img :src="list.product_img" /></div>
			<h4>{{list.product_name}}</h4>
			<p class="desc" :title="list.product_desc">{{list.product_desc}}</p>
			<p class="price" v-if="list.sku_info.sku_buy_status == 1">￥<strong>{{list.sku_info.sku_price}}</strong></p>
			<a v-else class="advisory" @click="openzxFn">立即咨询<i class="icon icon-right"></i></a>
		</li>
	</ul>
	<ul class="news-list" v-else>
		<li v-for="(item, index) in heatNews" :key="index"><router-link v-if="item.type == 2" tag="a" target="_blank" :to="{path: '/'+item.parent_columnUrl+'/'+item.id}" :title="item.title">{{item.title}}</router-link><router-link v-else tag="a" target="_blank" :to="{path: '/news/'+item.columnUrl+'/'+item.id}" :title="item.title">{{item.title}}</router-link></li>
	</ul>
</template>
<script>
import {openzx} from '../../../static/js/util.js'
export default {
	props: ['type', 'list', 'myList', 'heatNews'],
	data() {
		return {

		}
	},
	methods: {
		openzxFn(){
			//打开商务通
			openzx()
		},
		togoods(el){
			window.open(window.location.origin +'/'+el.product_id)
		}
	},
}
</script>

<style scoped lang="scss">
$main-color: #333;
$red: #e52e3a;
.ellipsis{
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.advisory{
	position: relative;
	display: block;
	width: 100px;
	height: 16px;
	color: #4685c3;
	margin: 14px auto 0;
	text-align: center;
	cursor: pointer;
	&.advisory2{
		text-align: left;
	}
	z-index: 1;
	.icon{
		font-size: 16px;
		color: inherit;
		font-weight: bold;
	}
	&:hover{
		color: $red;
	}
	.icon-right{
		position: relative;
		top:1px;
	}
}
.list-box{
	cursor: pointer;
	&:hover{
		position: relative;
		top:-3px;
		h4{
			color: #e52e3a;
		}
	}
}
.cloud{
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
}
.img-list{
	overflow: hidden;
	li{
		float: left;
		position: relative;
		margin-top: 10px;
		margin-right: 10px;
		background-color: white;
		width: 230px;
		padding: 10px 33px 27px 32px;
		box-sizing: border-box;
		height:230px;
		.img-box{
			width: 92px;
			height: 92px;
			margin: 0 auto;
			line-height: 92px;
			text-align: center;
			img{
				display: inline-block;
				max-width: 100%;
				max-height: 100%;
				vertical-align: middle;
			}
		}
		h4{
			margin-top: 8px;
			height: 40px;
			font-size: 16px;
			line-height: 20px;
			color: $main-color;
			text-align: center;
		}
		.desc{
			margin-top: 6px;
			font-size: 12px;
			line-height: 18px;
			text-align: center;
			color: lighten($main-color, 40%);
			@extend .ellipsis;
		}
		.price, .advisory{
			margin-top: 13px;
		}
		.price{
			font-size: 16px;
			color: $red;
			line-height: 1;
			text-align: center;
		}
		&:nth-child(4n){
			margin-right: 0;
		}
	}
}
.list{
	overflow: hidden;
	li{
		position: relative;
		width: 100%;
		margin-top: 10px;
		padding: 30px 40px 30px 31px;
		background-color: white;
		box-sizing: border-box;
		overflow: hidden;
		dl{
			display: flex;
			flex-direction: row;
			dt{
				width: 110px;
				padding-right: 33px;
				border-right: 1px solid #eee;
				box-sizing: border-box;
				.img-box{
					width: 92px;
					height: 92px;
					margin: 0 auto;
					line-height: 92px;
					text-align: center;
					img{
						display: inline-block;
						vertical-align: middle;
						max-width: 100%;
						max-height: 100%;
					}
				}
			}
			dd{
				flex: 1;
				padding-left: 40px;
				box-sizing: border-box;
				overflow: hidden;
				h4{
					font-size: 16px;
					line-height: 1;
					color: $main-color;
					@extend .ellipsis;
				}
				.desc{
					margin-top: 10px;
					font-size: 12px;
					line-height: 18px;
					color: #bbb;
					@extend .ellipsis;
				}
				.advisory,.price{
					margin: 25px auto auto 0;
				}
				.price{
					font-size: 16px;
					line-height: 1;
					color: $red;
				}
			}
		}
	}
}
.my-list{
	@extend .img-list;
	li{
		float: none;
		width: 200px;
		margin: auto;
		padding: 24px 18px 24px 17px;
		border-bottom: 1px dashed #ccc;
		margin-top: 4px;
		&:last-child{
			border-bottom: 0 none;
		}
		cursor: pointer;
		&:hover{
			position: relative;
			top:-3px;
			h4{
				color: #e52e3a;
			}
		}
	}
}
.news-list{
	width: 230px;
	padding: 13px 27px 33px 16px;
	overflow: hidden;
	box-sizing: border-box;
	li{
		padding-left: 10px;
		background: url(../../../static/images/index/squre.jpg) 0 16px no-repeat;
		@extend .ellipsis;
		cursor: pointer;
		font-size: 14px;
		line-height: 36px;
		color: $main-color;
		overflow: hidden;
	}
}
</style>
