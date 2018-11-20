<template>
<div class="trade">
	<div class="w1190">
		<div class="search-box">
			<div class="search">
				<div class="search-main"><input v-model="searchTxt" class="inp-search" type="text" placeholder="请输入商标检索关键词" @click="focusFun" @keyup="interceptStr" @keydown.up="moveUp" @keydown.down="moveDown" @keydown.enter="submitSearch" @keydown.left="moveLeft" @keydown.right="moveRight" /><a class="btn btn-search" href="javascript:void(0)" @click="submitSearch" ref="btn"><i class="icon icon-search"></i></a></div>
				<div class="list-area" v-show="isShow">
					<ul>
						<li :class="{'cur' : index == curIndex}" v-for="(cate, index) in cateList" :key="index"><a target="_blank" :href="'http://www.gbicom.cn/search/'+ parseInt(cate.cate) +'/2/all/1/desc/1/0/'+searchTxt+'/1'" @click="stopList(index)">{{cate.cate}}-{{cate.name}}</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="box">
			<div class="slide">
				<div class="wrap">
					<a ref="big" class="service-box" target="_blank"><img src="../../static/images/index/banner01.jpg" /></a >
				</div>
				<div class="slide-item">
					<div class="wrap">
						<ul class='slide-ul'>
							<li link="http://www.gbicom.cn/goods-465951.html">
								<div class="service-box"><img src="../../static/images/index/banner01.jpg" /></div>
							</li>
							<li link="http://www.gbicom.cn/goods-554084.html">
								<div class="service-box"><img src="../../static/images/index/banner02.jpg" /></div>
							</li>
							<li link="http://www.gbicom.cn/goods-547455.html">
								<div class="service-box"><img src="../../static/images/index/banner03.jpg" /></div>
							</li>
							<li link="http://www.gbicom.cn/goods-192177.html">
								<div class="service-box"><img src="../../static/images/index/banner04.jpg" /></div>
							</li>
						</ul>
					</div>
					<a class="icon icon-left" href="javascript:void(0)"></a>
					<a class="icon icon-right" href="javascript:void(0)"></a>
				</div>
			</div>
			<div class="goods-show">
				<ul>
					<li><a target="_blank" href="http://www.gbicom.cn/goods-415403.html"><img v-lazy="require('../../static/images/index/trade_01.jpg')"/></a></li>
					<li><a target="_blank" href="http://www.gbicom.cn/goods-519627.html"><img v-lazy="require('../../static/images/index/trade_02.jpg')"/></a></li>
					<li><a target="_blank" href="http://www.gbicom.cn/goods-437630.html"><img v-lazy="require('../../static/images/index/trade_03.jpg')"/></a></li>
					<li><a target="_blank" href="http://www.gbicom.cn/goods-567653.html"><img v-lazy="require('../../static/images/index/trade_04.jpg')"/></a></li>
					<li><a target="_blank" href="http://www.gbicom.cn/goods-507587.html"><img v-lazy="require('../../static/images/index/trade_05.jpg')"/></a></li>
					<li><a target="_blank" href="http://www.gbicom.cn/goods-486046.html"><img v-lazy="require('../../static/images/index/trade_06.jpg')"/></a></li>
					<li><a target="_blank" href="http://www.gbicom.cn/goods-486047.html"><img v-lazy="require('../../static/images/index/trade_07.jpg')"/></a></li>
					<li><a target="_blank" href="http://www.gbicom.cn/goods-206760.html"><img v-lazy="require('../../static/images/index/trade_08.jpg')"/></a></li>
					<li><a target="_blank" href="http://www.gbicom.cn/goods-547450.html"><img v-lazy="require('../../static/images/index/trade_09.jpg')"/></a></li>
					<li><a target="_blank" href="http://www.gbicom.cn/goods-580760.html"><img v-lazy="require('../../static/images/index/trade_10.jpg')"/></a></li>
					<li><a target="_blank" href="http://www.gbicom.cn/goods-579701.html"><img v-lazy="require('../../static/images/index/trade_11.jpg')"/></a></li>
					<li><a target="_blank" href="http://www.gbicom.cn/goods-463923.html"><img v-lazy="require('../../static/images/index/trade_12.jpg')"/></a></li>
				</ul>
			</div>
		</div>
	</div>
</div>
</template>
<script>
export default {
	data() {
		return {
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
			searchTxt: '',
			m: 0,
			n: 0,
			isShow: false,
			curIndex: -1,
			src: 'javascript:void(0)'
		}
	},
	mounted(){
		imgSliderFn('.trade .slide', '.trade .slide-item ul', '.slide-item .icon-left', '.slide-item .icon-right', 'cur' , 3000);
		function imgSliderFn (box, btnbox, leftbtn, rightbtn, cur, time) {
			var timer;
			var iconbox = $(btnbox);
			var iWidth = iconbox.children().outerWidth();
			var iAll = iconbox.children().length;

			iconbox.append(iconbox.children().clone());
			iconbox.children().eq(0).addClass(cur).siblings().removeClass(cur);

			function moveLeft () {
				var iLeft = parseInt(iconbox.css('left'));
				var iCode = iconbox.find('.cur').index();
				iconbox.stop(true).animate(
					{'left': iLeft - iWidth},
					'slow',
					function () {
						if (Math.abs(iLeft - iWidth) < iWidth * iAll) {
							iconbox.children().eq(iCode + 1).addClass(cur).siblings().removeClass(cur);
						} else {
							iconbox.css('left', '0').children().eq(0).addClass(cur).siblings().removeClass(cur);
						}
					}
				)
				imgFn(iCode + 1);
			}

			function moveRight () {
				if (parseInt(iconbox.css('left')) == 0 ) {
					iconbox.css('left', iWidth * iAll * -1).children().eq(iAll).addClass(cur).siblings().removeClass(cur);
				}
				var iLeft = parseInt(iconbox.css('left'));
				var iCode = iconbox.find('.cur').index();
				iconbox.stop(true).animate(
					{'left': iLeft + iWidth},
					'slow',
					function () {
						iconbox.children('').eq(iCode - 1).addClass(cur).siblings().removeClass(cur);
					}
				)
				imgFn(iCode - 1);
			}

			timer = setInterval(function () {
				moveLeft()
			} , 3000);

			$(box).on('mouseenter', function () {
				clearInterval(timer);
				timer = null;
			})

			$(box).on('mouseleave', function () {
				timer = setInterval(function () {
					moveLeft()
				} , 3000);
			})

			$(rightbtn).on('click', function () {
				moveLeft();
			})

			$(leftbtn).on('click', function () {
				moveRight();
			})

			iconbox.children().on('click', function () {
				var iLeft = parseInt(iconbox.css('left'));
				$(this).addClass(cur).siblings().removeClass(cur);
				var Index = iconbox.find('.cur').index();
				var iWin = iWidth * Index;
				iconbox.stop(true).animate(
					{left: iWin * -1},
					'slow',
					function () {
						if (iWin >= iWidth * iAll) {
							iconbox.css('left', iWin * -1 + iWidth * iAll);
							iconbox.children().eq(Index - iAll).addClass(cur).siblings().removeClass(cur);
						}
					}
				);
				imgFn(Index);
			})

			function imgFn (code) {
				var Img = iconbox.children().eq(code).find('img').attr('src');
				var alink = iconbox.children().eq(code).attr('link');
				$(box).children('.wrap').find('a').stop(true).animate(
					{opacity : '0'},
					'fast',
					function () {
						$(this).attr('href', alink);
						$(this).find('img').attr('src', Img);
						$(this).animate({opacity : '1'})
					}
				)
			}
		};
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
			return false;
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
$red: #e52e3a;
.trade{
	background-color: #f0f0f0;
	padding-bottom: 40px;
	.search-box{
		padding: 22px 0;
		overflow: hidden;
		.search{
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
					margin-right: 33px;
					a{
						display: block;
						width: 78px;
						font-size: 14px;
						color: #666;
						line-height: 28px;
					}
					&:hover, &.cur{
						a{
							color: $red;
						}
					}
				}
			}
		}
	}
	.box{
		width: 100%;
		overflow: hidden;
		.slide, .goods-show{
			float: left;
			overflow: hidden;
		}
		.slide{
			width: 470px;
			overflow: hidden;
			&>.wrap .service-box{
				display: block !important;
				width: 470px;
				height: 310px;
				line-height: 310px;
				text-align: center;
				.img{
					max-width: 100%;
					max-height: 100%;
					display: inline-block;
				}
			}
			.slide-item{
				width: 100%;
				position: relative;
				height: 122px;
				padding: 21px 40px;
				background-color: #333;
				box-sizing: border-box;
				.wrap{
					width: 100%;
					height: 80px;
					position: relative;
					overflow: hidden;
					.slide-ul{
						position: absolute;
						width: 10000px;
						left: 0;
						li{
							float: left;
							padding: 0 5px;
							.service-box{
								width: 120px;
								height: 80px;
								opacity: .5;
								img{
									display: block;
									max-width: 100%;
									max-height: 100%;
									cursor: pointer;
								}
							}
							&:hover, &.cur{
								.service-box{
									opacity: 1;
								}
							}
						}
					}
				}
				.icon{
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					border-radius: 50%;
					color: rgba(255,255,255,.51);
					font-size: 20px;
					z-index: 10;
					&:hover{
						color: rgba(255,255,255,1);
					}
					&.icon-left{
						left: 10px;
					}
					&.icon-right{
						right: 10px;
					}
				}
			}
		}
		.goods-show{
			width: 711px;
			margin-left: 9px;
			overflow: hidden;
			ul{
				width: 712px;
				li{
					float: left;
					border-right: 1px solid #eee;
					border-bottom: 1px solid #eee;
					box-sizing: border-box;
					transition: all .2s ease-in;
					a{
						display: block;
						width: 177px;
						height: 143px;
						line-height: 143px;
						text-align: center;
						img{
							display: inline-block;
							max-width: 100%;
							max-height: 100%;
						}
					}
					&:hover{
						transform: translateY(-4px);
					}
				}
			}
		}
	}
}
</style>
