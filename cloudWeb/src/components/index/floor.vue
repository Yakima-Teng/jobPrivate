<template>
<div class="fixed-left">
	<ul>
		<li v-for="(item, index) in floorArr" :key="index" :class="{'cur': curIndex == index}" @click="tabFloor(index, item.id)"><a href="javascript:void(0)">{{item.name}}</a></li>
	</ul>
	<a class="go-top" href="javascript:void(0)" @click="backTop"><i class="icon icon-top1"></i><strong>TOP</strong></a>
</div>
</template>
<script>
import {backTop} from '../../static/js/util.js'

export default {
	data() {
		return {
			curIndex: 0,
			floorArr: [
                {'id': 'convenient', 'name': '便捷服务'},
                // {'id': 'activity', 'name': '活动专区'},
                {'id': 'brand', 'name': '商标服务'},
                {'id': 'patent', 'name': '专利服务'},
                {'id': 'copyright', 'name': '版权服务'},
                {'id': 'trade', 'name': '商标交易'},
                {'id': 'company', 'name': '企业服务'},
                // {'id': 'appraise', 'name': '客户评价'},
                {'id': 'classic', 'name': '经典案例'},
                {'id': 'approve', 'name': '专业认可'},
                {'id': 'media', 'name': '媒体报道'}
            ]
		}
	},
	mounted(){
		if($(this).scrollTop() > 0){
			$('.fixed-left').fadeIn();
		}
		$(window).scroll(function(){
            var winH=$(this).height();
			var iTop = $(this).scrollTop();//鼠标滚动的距离
			var top = $('.top').outerHeight() + $('header').outerHeight() + $('.nav').outerHeight() + $('.carousel-wrap').outerHeight() + 34;
			if(iTop >= top&&$('.bottom').offset().top-iTop>740){
				$('.fixed-left').fadeIn();
				$('.bg').children().each(function(){
					if(winH + iTop - $(this).offset().top > winH/1.5 && iTop >= $(this).offset().top){
						$('.fixed-left').find('.cur').removeClass('cur');
						$('.fixed-left li').eq($(this).index()).addClass('cur');
					}
				});
			}else{
				$('.fixed-left').fadeOut();
			}
			if($('.bottom').offset().top-iTop<740){
				console.log(111);
				$('.fixed-left').fadeOut();
			}
        });
	},
	methods:{
		backTop(){
            backTop(this)
		},
		tabFloor(index, id){
			this.curIndex = index;
			document.querySelector('#'+id).scrollIntoView();
		}
	},
	destroyed () {
		$(window).unbind ('scroll');
	}
}
</script>

<style scoped lang="scss">
	.fixed-left{
		display: none;
		position: fixed;
		top: 50%;
		left: calc(50%-680px);
		transform: translateY(-50%);
		background-color: white; 
		z-index: 9;
		ul{
			border: 1px solid #e5e5e5;
			overflow: hidden;
			li{
				position: relative;
				margin-left: -1px;
				margin-right: -1px;
				margin-bottom: -1px;
				width: 46px;
				padding: 0 2px;
				box-sizing: border-box;
				a{
					display: block;
					width: 40px;
					height: 46px;
					padding: 8px 8px 5px;
					font-size: 12px;
					line-height: 16px;
					color: #666;
					border-bottom: 1px dashed #ccc;
					box-sizing: border-box;
					text-align: center;
				}
				&:last-child{
					a{
						border-bottom: 0 none;
					}
				}
				&:hover,&.cur{
					padding: 0;
					a{
						width: 46px;
						height: 46px;
						padding: 7px;
						border-bottom: 0 none;
						background-color: #e52e3a;
						color: white;
					}
				}
			}
		}
		.go-top{
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 46px;
			box-sizing: border-box;
			padding: 2px 10px 12px;
			background-color: #e52e3a;
			font-size: 12px;
			color:white;
			font-family: 'arial';
			.icon{
				font-size: 20px;
			}
		}
	}
</style>
