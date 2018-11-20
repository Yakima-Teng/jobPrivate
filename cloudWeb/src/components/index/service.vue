<template>
<ul class="floor w1190" :class="type">
	<li class="floor-hot">
		<ul class="list" v-if="type == 'brand'">
			<li><router-link tag="a" target="_blank" to="/48" ><i class="icon icon-enter"></i>商标驳回复审<em class="hot"></em></router-link></li>
			<li><router-link tag="a" target="_blank" to="/49" ><i class="icon icon-enter"></i>商标续展申请<em class="hot"></em></router-link></li>
			<li><router-link tag="a" target="_blank" to="/50" ><i class="icon icon-enter"></i>商标申请人/注册人名义变更<em class="hot"></em></router-link></li>
		</ul>
		<ul class="list" v-else-if="type == 'patent'">
			<li><router-link tag="a" target="_blank" to="/51" ><i class="icon icon-enter"></i>发明专利无效宣告<em class="hot"></em></router-link></li>
			<li><router-link tag="a" target="_blank" to="/52" ><i class="icon icon-enter"></i>发明专利驳回复审<em class="hot"></em></router-link></li>
			<li><router-link tag="a" target="_blank" :to="{path: '/search', query: {'pcat_id': '150','cat_id': '183','pname':'专利服务', 'name': '发明专利'}}"><i class="icon icon-enter"></i>发明专利</router-link></li>
			<li><router-link tag="a" target="_blank" :to="{path: '/search', query: {'pcat_id': '150','cat_id': '156','pname':'专利服务', 'name': '实用新型专利'}}"><i class="icon icon-enter"></i>实用新型专利</router-link></li>
			<li><router-link tag="a" target="_blank" :to="{path: '/search', query: {'pcat_id': '150','cat_id': '184','pname':'专利服务', 'name': '外观设计专利'}}"><i class="icon icon-enter"></i>外观设计专利</router-link></li>
		</ul>
		<ul class="list" v-else-if="type == 'copyright'">
			<li><router-link tag="a" target="_blank" to="/54" ><i class="icon icon-enter"></i>作品著作权合同备案<em class="hot"></em></router-link></li>
			<li><router-link tag="a" target="_blank" to="/55" ><i class="icon icon-enter"></i>软件著作权变更<em class="hot"></em></router-link></li>
			<li><router-link tag="a" target="_blank" to="/56"><i class="icon icon-enter"></i>软件著作权转让<em class="hot"></em></router-link></li>
			<li><router-link tag="a" target="_blank" :to="{path: '/search', query: {'pcat_id': '149','cat_id': '181','pname':'版权服务', 'name': '软件著作权登记'}}"><i class="icon icon-enter"></i>软件著作权登记</router-link></li>
			<li><router-link tag="a" target="_blank" :to="{path: '/search', query: {'pcat_id': '149','cat_id': '182','pname':'版权服务', 'name': '作品著作权登记'}}"><i class="icon icon-enter"></i>作品著作权登记</router-link></li>
		</ul>
		<ul class="sub-list" v-if="type == 'brand'">
			<li><router-link tag="a" target="_blank" :to="{path: '/search', query: {'pcat_id': '140','cat_id': '176','pname':'商标服务', 'name': '商标注册'}}">商标注册</router-link></li>
			<li><router-link tag="a" target="_blank" :to="{path: '/search', query: {'pcat_id': '140','cat_id': '179','pname':'商标服务', 'name': '商标答辩'}}">商标答辩</router-link></li>
			<li><router-link tag="a" target="_blank" :to="{path: '/search', query: {'pcat_id': '140','cat_id': '180','pname':'商标服务', 'name': '商标变更'}}">商标变更</router-link></li>
			<li><router-link tag="a" target="_blank" :to="{path: '/search', query: {'pcat_id': '140','cat_id': '178','pname':'商标服务', 'name': '商标复审'}}">商标复审</router-link></li>
			<li><router-link tag="a" target="_blank" :to="{path: '/search', query: {'pcat_id': '140','cat_id': '177','pname':'商标服务', 'name': '商标其他'}}">商标其他</router-link></li>
		</ul>
	</li>
	<li class="floor-type" v-for="(list, index) in productList" :key="index">
		<em class="icon-corner top-left"></em>
		<em class="icon-corner top-right"></em>
		<em class="icon-corner bottom-left"></em>
		<em class="icon-corner bottom-right"></em>
		<router-link tag="a" target="_blank" class="type-main" :to="'/'+list.product_id">
			<em class="icon-service_01"></em>
			<h3 class="ellipsis">{{list.product_name}}</h3>
			<p v-if="list.sku_info.sku_buy_status == 1"><span>￥<strong>{{list.sku_info.sku_price}}</strong></span>起</p>
			<a v-else class="advisory" @click="openzxFn">立即咨询</a>
		</router-link>
	</li>
	<li class="floor-news">
		<ul class="tab">
			<li :class="{'cur': curIndex == 0}" @click="tabCut(0)">热点新闻</li>
			<li :class="{'cur': curIndex == 1}" @click="tabCut(1)">商标锦囊</li>
		</ul>
		<div class="list" v-show="curIndex == 0">
			<ul>
				<li v-for="(item, index) in newsList" :key="index" :title="item.title" @click="jump(item,1)" >{{item.title}}</li>
			</ul>
			<p class="more"><router-link tag="a" target="_blank" class="view" :to="{path: '/news'}">查看更多<i class="icon icon-view"></i></router-link></p>
		</div>
		<div class="list" v-show="curIndex == 1">
			<ul>
				<li v-for="(item, index) in SEOList" :key="index" :title="item.title" @click="jump(item,2)">{{item.title}}</li>
			</ul>
			<p class="more">
				<router-link v-if="type == 'brand'" tag="a" target="_blank" class="view" :to="{path: '/sbfw'}">查看更多<i class="icon icon-view"></i></router-link>
				<router-link v-else-if="type == 'patent'" tag="a" target="_blank" class="view" :to="{path: '/zlfw'}">查看更多<i class="icon icon-view"></i></router-link>
				<router-link v-else-if="type == 'copyright'" tag="a" target="_blank" class="view" :to="{path: '/bqfw'}">查看更多<i class="icon icon-view"></i></router-link>
			</p>
		</div>
	</li>
</ul>
</template>
<script>
import {openzx} from '../../static/js/util.js'
export default {
	props: ['type'],
	data() {
		return {
			curIndex: 0
		}
	},
	computed: {
		productList(){
			var productList = [];
			if(this.type == 'brand'){
				productList = this.$store.state.service.brandList;
			}else if(this.type == 'patent'){
				productList = this.$store.state.service.patentList;
			}else if(this.type == 'copyright'){
				productList = this.$store.state.service.copyrightList;
			}
			return productList;
		},
		newsList(){
			var newsList = [];
			if(this.type == 'brand'){
				newsList = this.$store.state.service.brandNews;
			}else if(this.type == 'patent'){
				newsList = this.$store.state.service.patentNews;
			}else if(this.type == 'copyright'){
				newsList = this.$store.state.service.copyrightNews;
			}
			return newsList;
		},
		SEOList(){
			var SEOList = [];
			if(this.type == 'brand'){
				SEOList = this.$store.state.service.brandSEO;
			}else if(this.type == 'patent'){
				SEOList = this.$store.state.service.patentSEO;
			}else if(this.type == 'copyright'){
				SEOList = this.$store.state.service.copyrightSEO;
			}
			return SEOList;
		}
	},
	methods: {
		tabCut: function(curIndex){
			this.curIndex = curIndex;
		},
		openzxFn(){
			//打开商务通
			openzx()
		},
		jump(el,type){
			if(type==1){
				window.open(window.location.origin+'/news/'+el.columnUrl+'/'+el.id)
			}else if (type==2) {
				window.open(window.location.origin+'/'+el.parent_columnUrl+"/"+el.id)
			}
		},
	}
}
</script>

<style scoped lang="scss">
$blue: #50b6f3;
$orange: #fe9887;
$purple: #a475f9;
$hover: #e52e3a;
.ellipsis{
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.floor{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	&>li{
		width: 230px;
		background-color: $blue;
		box-sizing: border-box;
		&.floor-hot{
			padding: 20px 20px 25px;
			background: none 0 0 no-repeat;
			a{
				display: block;
				width: 100%;
				font-size: 14px;
				color: white;
				background-color: rgba(255,255,255,.2);
				&:hover{
					font-weight: bold;
				}
			}
			.list li{
				margin-bottom: 10px;
				&:nth-last-child(1){
					margin-bottom: 0;	
				}
				a{
					height: 36px;
					line-height: 36px;
					padding: 0 10px 0 20px;
					box-sizing: border-box;
					overflow: hidden;
					.icon{
						float: right;
						font-size: 22px;
						margin-top: 7px;
					}
					.hot{
						display: inline-block;
						width: 21px;
						height: 8px;
						background: url(../../static/images/hot.jpg) center no-repeat;
						vertical-align: top;
						margin-top: 6px;
						margin-left: 4px;
					}
				}
			}
			.sub-list{
				width: 100%;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-between;
				li{
					margin-top: 10px;
					a{
						width: 90px;
						height: 36px;
						line-height: 36px;
						text-align: center;
					}
				}
			}
		}
		&.floor-type{
			position: relative;
			transition: all .2s ease-in;
			&:nth-of-type(2){
				background:url(../../static/images/index/index0.jpg) 0 0 no-repeat;
			}
			&:nth-of-type(3){
				background:url(../../static/images/index/index1.jpg) 0 0 no-repeat;
			}
			&:nth-of-type(4){
				background:url(../../static/images/index/index2.jpg) 0 0 no-repeat;
			}
			.icon-corner{
				position: absolute;
				width: 10px;
				height: 10px;
				background: url(../../static/images/index/icon-corner.png) 0 0 no-repeat;
				&.top-left{
					top: 10px;
					left: 10px;
				}
				&.top-right{
					top: 10px;
					right: 10px;
					transform: scaleX(-1);
				}
				&.bottom-left{
					bottom: 10px;
					left: 10px;
					transform: scaleY(-1);
				}
				&.bottom-right{
					bottom: 10px;
					right: 10px;
					transform: scale(-1);
				}
			}
			a{
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 100%;
				padding: 48px 0 50px;
				color: white;
				overflow: hidden;
				em{
					display: flex;
					justify-content: center;
					align-items: center;
					height: 115px;
					// &.icon-service27{
					// 	background: url(../../static/images/index/service_01.png) left top no-repeat;
					// }
					// &.icon-service35{
					// 	background: url(../../static/images/index/service_02.png) left top no-repeat;
					// }
					// &.icon-service36{
					// 	background: url(../../static/images/index/service_03.png) left top no-repeat;
					// }
					// &.icon-service29{
					// 	background: url(../../static/images/index/service_04.png) left top no-repeat;
					// }
					// &.icon-service37{
					// 	background: url(../../static/images/index/service_05.png) left top no-repeat;
					// }
					// &.icon-service38{
					// 	background: url(../../static/images/index/service_06.png) left top no-repeat;
					// }
					// &.icon-service28{
					// 	background: url(../../static/images/index/service_07.png) left top no-repeat;
					// }
					// &.icon-service30{
					// 	background: url(../../static/images/index/service_08.png) left top no-repeat;
					// }
					// &.icon-service53{
					// 	background: url(../../static/images/index/service_09.png) left top no-repeat;
					// }
				}
				h3{
					width: 100%;
					font-size: 20px;
					line-height: 1;
					margin-top: 21px;
					text-align: center;
				}
				p{
					margin-top: 16px;
					font-size: 14px;
					line-height: 1;
					span{
						font-size: 24px;
						margin-right: 5px;
					}
				}
				.advisory{
					display: block;
					width: 82px;
					height: 22px;
					line-height: 22px;
					text-align: center;
					color: white;
					margin: 14px auto 0;
					padding: 0;
					cursor: pointer;
					border: 1px solid white;
					border-color: rgba(255,255,255,.6);
					.icon{
						font-size: 16px;
						color: inherit;
						font-weight: bold;
					}
					&:hover{
						color: $hover;
						border-color:$hover;
					}
					.icon-right{
						position: relative;
						top:1px;
					}
				}
			}
			&:hover{
				transform: translateY(-4px);
			}
		}
		&.floor-news{
			background-color: white;
			border-bottom: 4px solid $blue;
			.tab{
				width: 100%;
				display: flex;
				flex-direction: row;
				li{
					width: 50%;
					border-top: 1px solid $blue;
					height: 50px;
					line-height: 50px;
					background-color: #f1f0f5;
					color: #666;
					text-align: center;
					box-sizing: border-box;
					cursor: pointer;
					&:hover,&.cur{
						color: white;
						background-color: $blue;
					}
				}
			}
			.list{
				padding: 0 25px 0 15px;
				font-size: 14px;
				line-height: 1;
				color: #333;
				li{
					padding-left: 10px;
					margin-top: 24px;
					background: url(../../static/images/index/squre.jpg) 0 6px no-repeat;
					overflow:hidden;
					white-space:nowrap;
					text-overflow:ellipsis;
					cursor: pointer;
					&:hover{
						color: $hover;
					}
				}
			}
			.more{
				margin-top: 20px;
				text-align: right;
				font-size: 12px;
				color: #333;
				a{
					display: inline-block;
					line-height: 24px;
					cursor: pointer;
				}
				.icon{
					display: inline-block;
					width: 16px;
    				vertical-align: top;
					font-size: 24px;
					color: #a9a9a9;
				}
			}
		}
	}
	&.brand{
		&>li{
			&.floor-hot{
				background-image: url(../../static/images/index/bg_01.jpg);
			}
		}
	}
	&.patent{
		&>li{
			background-color: $orange;
			&.floor-hot{
				background-image: url(../../static/images/index/bg_02.jpg);
			}
			&:nth-of-type(2){
				background:url(../../static/images/index/index3.jpg) 0 0 no-repeat;
			}
			&:nth-of-type(3){
				background:url(../../static/images/index/index4.jpg) 0 0 no-repeat;
			}
			&:nth-of-type(4){
				background:url(../../static/images/index/index5.jpg) 0 0 no-repeat;
			}
			&.floor-news{
				background-color: white;
				border-color: $orange;
				.tab{
					li{
						border-color: $orange;
						&:hover,&.cur{
							background-color: $orange;
						}
					}
				}
				
			}
		}
	}
	&.copyright{
		&>li{
			background-color: $purple;
			&.floor-hot{
				background-image: url(../../static/images/index/bg_03.jpg);
			}
			&:nth-of-type(2){
				background:url(../../static/images/index/index6.jpg) 0 0 no-repeat;
			}
			&:nth-of-type(3){
				background:url(../../static/images/index/index7.jpg) 0 0 no-repeat;
			}
			&:nth-of-type(4){
				background:url(../../static/images/index/index8.jpg) 0 0 no-repeat;
			}
			&.floor-news{
				background-color: white;
				border-color: $purple;
				.tab{
					li{
						border-color: $purple;
						&:hover,&.cur{
							background-color: $purple;
						}
					}
				}
				
			}
		}
	}
}
</style>
