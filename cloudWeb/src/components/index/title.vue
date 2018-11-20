<template>
	<div class="floor-title" v-if="!isSub" :class="type">
		<h2><span class="title-mian">{{content}}</span></h2>
		<span class="sub-title"></span>
		<em class="bar"></em>
	</div>
	<div v-else class="floor-title sub-title" :class="type">
		<h2>
			<div v-if="type == 'active'" class="title-mian"><a :class="{'cur': currentIndex == 0}" href="javascript:void(0)" @click="cutDown(0, type)">最新活动</a><em></em><a :class="{'cur': currentIndex == 1}" href="javascript:void(0)" @click="cutDown(1,type)">促销活动</a><em></em><a :class="{'cur': currentIndex == 2}" href="javascript:void(0)" @click="cutDown(2,type)">518专区</a><em></em><a href="javascript:void(0)">即将开始</a><em></em><a href="javascript:void(0)">已经结束</a></div>
			<div v-else class="title-mian"><a :class="{'cur': currentIndex == 0}" href="javascript:void(0)" @click="cutDown(0,type)">企业服务</a><em></em><a :class="{'cur': currentIndex == 1}" href="javascript:void(0)" @click="cutDown(1,type)">设计服务</a><em></em><a :class="{'cur': currentIndex == 2}" href="javascript:void(0)" @click="cutDown(2,type)">国际服务</a><em></em><a :class="{'cur': currentIndex == 3}" href="javascript:void(0)" @click="cutDown(3,type)">法律服务</a></div>
		</h2>
	</div>
</template>
<script>
export default {
	props:['type', 'content', 'isSub', 'currentIndex'],
	data() {
		return {
			
		}
	},
	methods:{
		cutDown(index, type){
			this.$emit(type+'TabCut', index)
		}
	}
}
</script>

<style scoped lang="scss">
$main-color: #333;
	.floor-title{
		background-color: #fafafa;
		margin: auto;
		padding: 80px 0 22px;
		overflow: hidden;
		h2, .sub-title,.bar{
			margin: auto;
		}
		h2{
			width: 343px;
			padding: 0 63px;
			background: url(../../static/images/index/line.png) 0 22px repeat-x;
			font-size: 36px;
			line-height: 1;
			color: $main-color;
			box-sizing: border-box;
			.title-mian{
				width: 100%;
				display: block;
				background-color: #fafafa;
				text-align: center;
			}
		}
		.sub-title{
			margin-top: 12px;
			display: block;
			width: 100%;
			height: 13px;
			max-width: 301px;
			background: none center no-repeat;
		}
		.bar{
			display: block;
			width: 30px;
			height: 0;
			margin: 22px auto 0;
			border-bottom: 2px solid #cccccc;
		}
	}
	.activity .sub-title{
		background-image: url(../../static/images/index/en_01.png);
	}
	.brand .sub-title{
		background-image: url(../../static/images/index/en_02.png);
	}
	.patent .sub-title{
		background-image: url(../../static/images/index/en_03.png);
	}
	.copyright .sub-title{
		background-image: url(../../static/images/index/en_04.png);
	}
	.trade .sub-title{
		background-image: url(../../static/images/index/en_05.png);
	}
	.client .sub-title{
		background-image: url(../../static/images/index/en_08.png);
	}
	.case .sub-title{
		background-image: url(../../static/images/index/en_09.png);
	}
	.fessional .sub-title{
		background-image: url(../../static/images/index/en_10.png);
	}
	.media .sub-title{
		background-image: url(../../static/images/index/en_11.png);
	}
	.sub-title{
		h2{
			font-size: 22px;
			a{
				color: lighten($main-color, 20%);
				&:hover,&.cur{
					color: #e52e3a;
				}
			}
			em{
				display: inline-block;
				width: 19px;
				height: 19px;
				margin-left: 19px;
				margin-right: 20px;
				background: url(../../static/images/divide.png) center no-repeat;
				background-size: 100%;
			}
		}
		&.active{
			padding-top: 0;
			h2{
				padding: 0;
				width: 672px;
			}
		}
		&.service{
			h2{
				width: 704px;
				background-position-y: 6px;
			}
		}
	}
</style>
