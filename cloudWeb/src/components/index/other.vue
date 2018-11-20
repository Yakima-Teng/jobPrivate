<template>
<ul class="w1190 img-list" :class="type" v-if="type == 'case'">
	<li class="case-01"></li>
	<li class="case-02"></li>
	<li class="case-03"></li>
	<li class="case-04"></li>
	<li class="case-05"></li>
	<li class="case-06"></li>
	<li class="case-07"></li>
	<li class="case-08"></li>
	<li class="case-09"></li>
	<li class="case-10"></li>
	<li class="case-11"></li>
	<li class="case-12"></li>
</ul>
<ul class="w1190 img-list" :class="type" v-else>
	<li><img v-lazy="require('../../static/images/index/media_01.jpg')" /></li>
	<li><img v-lazy="require('../../static/images/index/media_02.jpg')" /></li>
	<li><img v-lazy="require('../../static/images/index/media_03.jpg')" /></li>
	<li><img v-lazy="require('../../static/images/index/media_04.jpg')" /></li>
	<li><img v-lazy="require('../../static/images/index/media_05.jpg')" /></li>
	<li><img v-lazy="require('../../static/images/index/media_06.jpg')" /></li>
	<li><img v-lazy="require('../../static/images/index/media_07.jpg')" /></li>
	<li><img v-lazy="require('../../static/images/index/media_08.jpg')" /></li>
	<li><img v-lazy="require('../../static/images/index/media_09.jpg')" /></li>
	<li><img v-lazy="require('../../static/images/index/media_10.jpg')" /></li>
	<li><img v-lazy="require('../../static/images/index/media_11.jpg')" /></li>
	<li><img v-lazy="require('../../static/images/index/media_12.jpg')" /></li>
</ul>
</template>
<script>
export default {
	props: ['type'],
	data() {
		return {
			
		}
	},
	methods:{
		
	}
}
</script>

<style scoped lang="scss">
.img-list{
	overflow: hidden;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	li{
		width: 190px;
		margin-bottom: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		background-color: white;
		img{
			display: block;
			max-width: 190px;
		}
	}
	&.case{
		li{
			width: 190px;
			height: 140px;
			border: 1px solid #eee;
			transition: transform .2s ease-in;
			background: none 0 0 no-repeat;
			&.case-01{
				background-image: url(../../static/images/index/case_01.jpg);
			}
			&.case-02{
				background-image: url(../../static/images/index/case_02.jpg);
			}
			&.case-03{
				background-image: url(../../static/images/index/case_03.jpg);
			}
			&.case-04{
				background-image: url(../../static/images/index/case_04.jpg);
			}
			&.case-05{
				background-image: url(../../static/images/index/case_05.jpg);
			}
			&.case-06{
				background-image: url(../../static/images/index/case_06.jpg);
			}
			&.case-07{
				background-image: url(../../static/images/index/case_07.jpg);
			}
			&.case-08{
				background-image: url(../../static/images/index/case_08.jpg);
			}
			&.case-09{
				background-image: url(../../static/images/index/case_09.jpg);
			}
			&.case-10{
				background-image: url(../../static/images/index/case_10.jpg);
			}
			&.case-11{
				background-image: url(../../static/images/index/case_11.jpg);
			}
			&.case-12{
				background-image: url(../../static/images/index/case_12.jpg);
			}
			// img{
			// 	max-height: 140px;
			// 	filter: grayscale(1);
			// 	opacity: .5;
			// }
			&:hover{
				background-position: 0 -138px;
				transform: translateY(-4px);
				// img{
				// 	filter: none;
				// 	opacity: 1;
				// }
			}
		}
	}
}
</style>
