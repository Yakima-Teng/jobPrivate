<template>
<div class="p-trade">
	<h3>热门行业</h3>
	<div class="trade-main">
		<ul class="popular">
			<li :class="{'cur': curIndex == index}" v-for="(list, index) in sortList" :key="index" @mouseenter="tabCut(index,list.sort)"><i class="icon icon-25" :class="'icon-'+list.sort"></i>{{list.name}}<em>（{{list.sort}}类）</em></li>
			<!-- <li><i class="icon icon-33"></i>酒商标<em>（33类）</em></li>
			<li><i class="icon icon-29"></i>食品商标<em>（29类）</em></li>
			<li><i class="icon icon-05"></i>医药商标<em>（05类）</em></li>
			<li><i class="icon icon-30"></i>方便食品<em>（30类）</em></li>
			<li><i class="icon icon-09"></i>科学仪器<em>（09类）</em></li>
			<li><i class="icon icon-03"></i>日化用品<em>（03类）</em></li>
			<li><i class="icon icon-43"></i>餐饮住宿<em>（43类）</em></li>
			<li><i class="icon icon-35"></i>广告销售<em>（35类）</em></li>
			<li><i class="icon icon-28"></i>健身器材<em>（28类）</em></li> -->
		</ul>
		<ul class="goods-list">
			<li v-for="(list, index) in curList" :key="index"><a target="_blank" :href="'http://www.gbicom.cn/goods-'+list.content+'.html'"><img :src="'http://www.gbicom.cn/'+list.goods_img"/></a></li>
			<!-- <li><a href="#"><img v-lazy="require('../../../static/images/index/temp_02.jpg')"/></a></li>
			<li><a href="#"><img v-lazy="require('../../../static/images/index/temp_01.jpg')"/></a></li>
			<li><a href="#"><img v-lazy="require('../../../static/images/index/temp_02.jpg')"/></a></li>
			<li><a href="#"><img v-lazy="require('../../../static/images/index/temp_01.jpg')"/></a></li>
			<li><a href="#"><img v-lazy="require('../../../static/images/index/temp_02.jpg')"/></a></li>
			<li><a href="#"><img v-lazy="require('../../../static/images/index/temp_01.jpg')"/></a></li>
			<li><a href="#"><img v-lazy="require('../../../static/images/index/temp_02.jpg')"/></a></li>
			<li><a href="#"><img v-lazy="require('../../../static/images/index/temp_01.jpg')"/></a></li>
			<li><a href="#"><img v-lazy="require('../../../static/images/index/temp_02.jpg')"/></a></li> -->
		</ul>
	</div>
</div>
</template>
<script>

import {postFn} from '../../../static/js/util.js'

export default {
	data() {
		return {
			sortList: [{
				'sort': '25',
				'name': '服装鞋帽'
			},
			{
				'sort': '33',
				'name': '酒商标'
			},
			{
				'sort': '29',
				'name': '食品商标'
			},
			{
				'sort': '05',
				'name': '医药商标'
			},
			{
				'sort': '30',
				'name': '方便食品'
			},
			{
				'sort': '09',
				'name': '科学仪器'
			},
			{
				'sort': '03',
				'name': '日化用品'
			},
			{
				'sort': '43',
				'name': '餐饮住宿'
			},{
				'sort': '35',
				'name': '广告销售'
			},
			{
				'sort': '28',
				'name': '健身器材'
			}],
			curIndex: 0,
			curList: []
		}
	},
	created(){
		this.dataFun();
	},
	methods:{
		dataFun: function(){
			var _this = this;
			var catId = parseInt(this.sortList[this.curIndex].sort);
			postFn('/product/product/gbicom_goods_jp', {'cat_id': catId}, function(res){
				// console.log(res.data);
				if(res.data.code == 200){
					var list = res.data.data;
					_this.curList = list.slice(0, 10);
				}
			});
		},
		tabCut: function(index, sort){
			this.curIndex = index;
			this.dataFun();
			
		}
	}
}
</script>

<style scoped lang="scss">
$red: #e52e3a;
$main-color: #333;
.p-trade{
	width: 100%;
	padding: 20px;
	background-color: white;
	box-sizing: border-box;
	h3{
		font-size: 18px;
		line-height: 1;
		color: $main-color;
		padding-bottom: 11px;
	}
	.trade-main{
		width: 100%;
		height: 215px;
		overflow: hidden;
		ul{
			float: left;
			overflow: hidden;
			li{
				float: left;
			}
			&.popular{
				width: 380px;
				li{
					width: 180px;
					height: 35px;
					margin-right: 10px;
					margin-bottom: 10px;
					padding-left: 13px;
					box-sizing: border-box;
					border: 1px solid #eee;
					font-size: 16px;
					color: $main-color;
					cursor: pointer;
					.icon{
						margin-right: 4px;
						font-size: 30px;
						line-height: 35px;
						color:lighten($main-color, 20%);
						vertical-align: middle;
					}
					em{
						font-size: 12px;
					}
					&:hover, &.cur{
						background-color: $red;
						color: white;
						border-color: $red;
						.icon{
							color: inherit;
						}
					}
				}
			}
			&.goods-list{
				width: 761px;
				border: 1px solid #eee;
				border-right: 0 none;
				border-bottom: 0 none;
				margin-left: 9px;
				box-sizing: border-box;
				overflow: hidden;
				li{
					a{
						display: block;
						width: 151px;
						border-right: 1px solid #eee;
						border-bottom: 1px solid #eee;
						height: 106px;
						line-height: 106px;
						text-align: center;
						img{
							display: inline-block;
							vertical-align: top;
							max-width: 151px;
							max-height: 106px;
						}
					}
				}
			}
		}
	}
}
</style>
