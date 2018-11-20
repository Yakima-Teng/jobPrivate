<template>
	<div class="recommend recom-brand" v-if="type == 'brand'">
		<div class="title">
			<h3>商标服务</h3>
			<span class="line"></span>
		</div>
		<ul>
			<li>品牌建设</li>
			<li>提升价值</li>
			<li>开启创业之路</li>
		</ul>
		<a class="btn-more" href="javascript:void(0)">了解更多</a>
		<router-link class="cloud" tag="a" target="_blank" to="/channel_140"></router-link>
	</div>
	<div class="recommend recom-patent" v-else-if="type == 'patent'">
		<div class="title">
			<h3>专利服务</h3>
			<span class="line"></span>
		</div>
		<ul>
			<li>抢占市场</li>
			<li>独占技术</li>
			<li>保护创新成果</li>
		</ul>
		<a class="btn-more" href="javascript:void(0)">了解更多</a>
		<router-link class="cloud" tag="a" target="_blank" to="/channel_150"></router-link>
	</div>
	<div class="recommend recom-copyright" v-else-if="type == 'copyright'">
		<div class="title">
			<h3>版权服务</h3>
			<span class="line"></span>
		</div>
		<ul>
			<li>杜绝剽窃</li>
			<li>维护权益</li>
			<li>创意就要</li>
			<li>有“版”有眼</li>
		</ul>
		<a class="btn-more" href="javascript:void(0)">了解更多</a>
		<router-link class="cloud" tag="a" target="_blank" to="/channel_149"></router-link>
	</div>
</template>
<script>
export default {
	props: ['type'],
	data() {
		return {

		}
	}
}
</script>

<style scoped lang="scss">
.recommend{
	position: relative;
	width: 230px;
	height: 230px;
	color: white;
	padding-top:27px;
	padding-left: 27px;
	margin-bottom: 10px;
	box-sizing: border-box; 
	.title{
		margin-bottom: 10px;
		h3{
			padding-bottom: 14px;
			font-size: 22px;
			line-height: 1;
		}
		span{
			display: block;
			width: 39px;
			border-top: 2px solid white;
		}
	}
	li{
		font-size: 14px;
		line-height: 22px;
	}
	.btn-more{
		display: block;
		margin-top: 10px;
		width: 70px;
		height: 20px;
		border-radius: 10px;
		background-color: rgba(255,255,255,.9);
		font-size: 12px;
		line-height: 20px;
		text-align: center;
	}
	.cloud{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	&.recom-brand{
		background: url(../../../static/images/search/rec_01.jpg) left top no-repeat;
		a{
			color: #3a8dd9;
		}
	}
	&.recom-patent{
		background: url(../../../static/images/search/rec_02.jpg) left top no-repeat;
		a{
			color: #4b6bdd;
		}
	}
	&.recom-copyright{
		background: url(../../../static/images/search/rec_03.jpg) left top no-repeat;
		a{
			color: #e96a40;
		}
	}
}
</style>
