<template>
<div class="title clearfix" v-if="type == 'ordinary'">
	<router-link v-if="cateInfo != undefined " class="btn-more" target="_blank" :to="{path: '/search', query: {'pcat_id': cateInfo.pcat_id,'cat_id': cateInfo.cat_id,'pname':cateInfo.pname, 'name': cateInfo.name}}"><em>查看更多</em><i class="icon icon-more"></i></router-link>
	<router-link v-else-if="isMore != false" class="btn-more" target="_blank" :to="{path: url}"><em>查看更多</em><i class="icon icon-more"></i></router-link>
	<h2>{{content}}</h2>
</div>
<div v-else class="title search-title clearfix">
	<div class="search-box clearfix">
		<div class="search-main"><input v-model="searchTxt" class="inp-search" type="text" placeholder="请输入商标检索关键词" @click="focusFun" @keyup="interceptStr" @keydown.enter="submitSearch" @keydown.up="moveUp" @keydown.down="moveDown" @keydown.left="moveLeft" @keydown.right="moveRight" /><a ref="btn" class="btn btn-search" href="javascript:void(0)" @click="submitSearch"><i class="icon icon-search"></i></a></div>
		<div class="list-area" v-show="isShow">
			<ul>
				<li :class="{'cur' : index == curIndex}" v-for="(cate, index) in cateList" :key="index"><a target="_blank" :href="'http://www.gbicom.cn/search/'+ parseInt(cate.cate) +'/2/all/1/desc/1/0/'+searchTxt+'/1'" @click="stopList(index)">{{cate.cate}}-{{cate.name}}</a></li>
			</ul>
		</div>
	</div>
	<h2>{{content}}</h2>
</div>
</template>
<script>
export default {
	props: ['type', 'content', 'url', 'isMore', 'cateInfo'],
	data() {
		return {
			searchTxt: '',
			isShow: false,
			curContent: '第1类',
			cateList: [
				{
					'cate': '01',
					'name': '化学原料'
				},
				{
					'cate': '02',
					'name': '颜料油漆'
				},
				{
					'cate': '03',
					'name': '日化用品'
				},
				{
					'cate': '04',
					'name': '燃料油脂'
				},
				{
					'cate': '05',
					'name': '医药'
				},
				{
					'cate': '06',
					'name': '金属材料'
				},
				{
					'cate': '07',
					'name': '机械设备'
				},
				{
					'cate': '08',
					'name': '手工器械'
				},
				{
					'cate': '09',
					'name': '科学仪器'
				},
				{
					'cate': '10',
					'name': '医疗器械'
				},
				{
					'cate': '11',
					'name': '灯具空调'
				},
				{
					'cate': '12',
					'name': '运输工具'
				},
				{
					'cate': '13',
					'name': '军火烟火'
				},
				{
					'cate': '14',
					'name': '珠宝钟表'
				},
				{
					'cate': '15',
					'name': '乐器'
				},
				{
					'cate': '16',
					'name': '办公用品'
				},
				{
					'cate': '17',
					'name': '橡胶制品'
				},
				{
					'cate': '18',
					'name': '皮革皮具'
				},
				{
					'cate': '19',
					'name': '建筑材料'
				},
				{
					'cate': '20',
					'name': '家具'
				},
				{
					'cate': '21',
					'name': '厨房洁具'
				},
				{
					'cate': '22',
					'name': '绳网袋篷'
				},
				{
					'cate': '23',
					'name': '纱线丝'
				},
				{
					'cate': '24',
					'name': '布料床单'
				},
				{
					'cate': '25',
					'name': '服装鞋帽'
				},
				{
					'cate': '26',
					'name': '钮扣拉链'
				},
				{
					'cate': '27',
					'name': '地毯席垫'
				},
				{
					'cate': '28',
					'name': '健身器材'
				},
				{
					'cate': '29',
					'name': '食品'
				},
				{
					'cate': '30',
					'name': '方便食品'
				},
				{
					'cate': '31',
					'name': '饲料种籽'
				},
				{
					'cate': '32',
					'name': '啤酒饮料'
				},
				{
					'cate': '33',
					'name': '酒'
				},
				{
					'cate': '34',
					'name': '烟草烟具'
				},
				{
					'cate': '35',
					'name': '广告销售'
				},
				{
					'cate': '36',
					'name': '金融物管'
				},
				{
					'cate': '37',
					'name': '建筑修理'
				},
				{
					'cate': '38',
					'name': '通讯服务'
				},
				{
					'cate': '39',
					'name': '运输贮藏'
				},
				{
					'cate': '40',
					'name': '材料加工'
				},
				{
					'cate': '41',
					'name': '教育娱乐'
				},
				{
					'cate': '42',
					'name': '网站服务'
				},
				{
					'cate': '43',
					'name': '餐饮住宿'
				},
				{
					'cate': '44',
					'name': '医疗园艺'
				},
				{
					'cate': '45',
					'name': '社会服务'
				}
			],
			m: 0,
			n: 0,
			curIndex: -1
		}
	},
	methods:{
		stopBubble(e){
			if(e && e.stopPropagation){
				e.stopPropagation();  //w3c
			}else{
				window.event.cancelBubble = true; //IE
			}
		},
		stopList(index){
			var _this = this;
			var e = e||window.event;
			this.stopBubble(e);
			this.curIndex = index;
			if(this.isShow){
				this.isShow = false;
			}
		},
		interceptStr(){
			var txt = this.searchTxt;
			if (txt != '' && txt != '请输入商标检索关键词') {
				var str = txt;
				if (txt.length < 26) {
					str = txt;
				} else {
					str = txt.substr(0, 25) + '...';
				}
				this.isShow = true;
				this.searchTxt = str;
				return false;
			}
		},
		submitSearch(){
			var btn = this.$refs.btn;
			var src = 'javascript:void(0)';
			// 搜索框为空时
			if(this.searchTxt == ''){
				src = 'http://www.gbicom.cn/brand-8-c0.html/1/1';
			}else{
				src = 'http://www.gbicom.cn/search/0/2/all/1/desc/1/0/'+this.searchTxt+'/1';
			}
			btn.href = src;
		},
		moveUp(){
			var m = this.m;
			var n = this.n;
			var curIndex = this.curIndex;
			if (n > 1) {
				n = n - 1;
				curIndex = 3 * (n - 1) + m - 1;
			} else {
				n = 0;
				curIndex = -1;
			}
			this.n = n;
			this.curIndex = curIndex;
		},
		moveDown(){
			var m = this.m;
			var n = this.n;
			var curIndex = this.curIndex;
			if (n < 15) {
				n = n + 1;
			}
			if (n == 1) {
				m = 1;
			}
			curIndex = m == 3 ? 3 * n - 1 : 3 * (n - 1) + m - 1;
			this.m = m;
			this.n = n;
			this.curIndex = curIndex;
		},
		moveLeft(){
			var m = this.m;
			var n = this.n;
			if (m > 1) {
				m = m - 1;
			}
			this.curIndex = 3 * (n - 1) + m - 1;
			this.m = m;
		},
		moveRight(){
			var m = this.m;
			var n = this.n;
			if (m < 3) {
				m = m + 1;
			}
			this.curIndex = 3 * (n - 1) + m - 1;
			this.m = m;
		},
		focusFun(e){
			var _this = this;
			this.stopBubble(e);
			document.onclick=function(){
		    	_this.isShow = false;
		　　	document.onclick=null;　
		    }
			var txt = this.searchTxt;
			if (txt != '' && txt != '请输入商标检索关键词') {
				if (!this.isShow) {
					var str = txt;
					if (txt.length < 26) {
						str = txt;
					} else {
						str = txt.substr(0, 25) + '...';
					}
					this.isShow = true;
					this.searchTxt = str;
				}
			}
		}
	}
}
</script>

<style scoped lang="scss">
$main-font: #333;
$red: #e52e3a;
.title{
	width: 100%;
	padding: 52px 0 18px;
	.btn-more{
		float: right;
		vertical-align: top;
		em{
			display: inline-block;
			width: 80px;
			height: 38px;
			border: 1px solid #ccc;
			border-right: 0 none;
			font-size: 14px;
			color: $main-font;
			line-height: 36px;
			text-align: center;
			vertical-align: top;
			box-sizing: border-box;
			background: #fff;
		}
		i{
			display: inline-block;
			width: 38px;
			height: 38px;
			line-height: 38px;
			font-size: 28px;
			color: white;
			background-color: $main-font;
			text-align: center;
		}
		&:hover{
			i{
				background-color: $red;
			}
		}
	}
	h2{
		font-size: 30px;
		color: $main-font;
		line-height: 38px;
	}
	.search-box{
		float: right;
		.search-main{
			display: flex;
			flex-direction: row;
			.inp-search{
				width: 326px;
				padding-left: 11px;
				height: 34px;
				border: 1px solid #e5e5e5;
				border-right: 0 none;
				font-size: 14px;
				box-sizing: border-box;
				background-color: #fff;
			}
			.btn-search{
				display: flex;
				width: 34px;
				height: 34px;
				background: #333333;
				justify-content: center;
				align-items: center;
				.icon{
					font-size: 24px;
					color: #fff;
				}
				&:hover{
					background-color: $red;
				}
			}
		}
		.list-area{
			position: absolute;
			border: 1px solid #e5e5e5;
			border-top: 0 none;
			background-color: white;
			ul{
				width: 360px;
				overflow: hidden;
				padding: 10px 0 14px 24px;
				box-sizing: border-box;
			}
			li{
				float: left;
				width: 78px;
				font-size: 14px;
				color: #666;
				margin-right: 33px;
				line-height: 28px;
				&:hover, &.cur{
					color: $red;
				}
			}
		}
	}
	&.search-title{
		padding: 57px 0 22px;
		h2{
			line-height: 34px;
		}
	}
}
</style>
