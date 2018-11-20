<template>
<div class="flow-box" id="flow">
	<section class="flow" v-for="(list, index) in seoList" :key="index">
		<mtitle type="ordinary" :content="list.name_cn" :url="url+'/'+list.url"></mtitle>
		<dl>
			<dt>
				<img v-lazy="require('../../../static/images/index/img_o_0'+type+''+list.url+'.jpg')"/>
			</dt>
			<dd>
				<ul>
					<li v-for="(item, j) in list.list" :key="j"><router-link target="_blank" :to="{path: url+'/'+item.id}" :title="item.title" >{{item.title}}</router-link></li>
				</ul>
			</dd>
		</dl>
	</section>
	<!-- <section class="flow">
		<mtitle type="ordinary" content="商标注册流程"></mtitle>
		<dl>
			<dt>
				<img v-lazy="require('../../../static/images/index/img_o_02.jpg')"/>
			</dt>
			<dd>
				<ul>
					<li>中细软知识产权5.18周年庆再次刷新记录日服...</li>
					<li>法律点评北京中细软律所黄莉凌律师受邀...</li>
					<li>中细软知识产权5.18周年庆再次刷新记录日服...</li>
					<li>法律点评北京中细软律所黄莉凌律师受邀...</li>
					<li>中细软知识产权5.18周年庆再次刷新记录日服...</li>
				</ul>
			</dd>
		</dl>
	</section>
	<section class="flow">
		<mtitle type="ordinary" content="商标注册流程"></mtitle>
		<dl>
			<dt>
				<img v-lazy="require('../../../static/images/index/img_o_01.jpg')"/>
			</dt>
			<dd>
				<ul>
					<li>中细软知识产权5.18周年庆再次刷新记录日服...</li>
					<li>法律点评北京中细软律所黄莉凌律师受邀...</li>
					<li>中细软知识产权5.18周年庆再次刷新记录日服...</li>
					<li>法律点评北京中细软律所黄莉凌律师受邀...</li>
					<li>中细软知识产权5.18周年庆再次刷新记录日服...</li>
				</ul>
			</dd>
		</dl>
	</section>
	<section class="flow">
		<mtitle type="ordinary" content="商标注册流程"></mtitle>
		<dl>
			<dt>
				<img v-lazy="require('../../../static/images/index/img_o_02.jpg')"/>
			</dt>
			<dd>
				<ul>
					<li>中细软知识产权5.18周年庆再次刷新记录日服...</li>
					<li>法律点评北京中细软律所黄莉凌律师受邀...</li>
					<li>中细软知识产权5.18周年庆再次刷新记录日服...</li>
					<li>法律点评北京中细软律所黄莉凌律师受邀...</li>
					<li>中细软知识产权5.18周年庆再次刷新记录日服...</li>
				</ul>
			</dd>
		</dl>
	</section> -->
</div>
</template>
<script>
import mtitle from './title.vue'
export default {
	created() {
		console.log(this.seoList,"=>seoList");
	},
	components:{
		mtitle
	},
	props: ['seoList', 'url', 'type'],
	data() {
		return {
			
		}
	},
	methods:{
		
	}
}
</script>

<style scoped lang="scss">
$main-font:#333;
$red: #e52e3a;
.flow-box{
	width: 100%;
	margin-top: 60px;
	overflow: hidden;
	.flow{
		float: left;
		width: 570px;
		margin-right: 40px;
		margin-bottom: 40px;
		overflow: hidden;
		.title{
			padding: 0;
		}
		&:nth-child(2n){
			margin-right: 0;
		}
		&:nth-last-child(2),&:last-child{
			margin-bottom: 0;
		}
		dl{
			width: 100%;
			margin-top: 20px;
			overflow: hidden;
			dt,dd{
				float: left;
			}
			dt{
				width: 230px;
				height: 160px;
				line-height: 160px;
				text-align: center;
				img{
					display: inline-block;
				}
			}
			dd{
				width: 340px;
				padding-left: 20px;
				overflow: hidden;
				box-sizing: border-box;
				ul{
					margin-top: -11px;
					overflow: hidden;
					li{
						padding-left: 10px;
						line-height: 34px;
						height: 34px;
						font-size: 14px;
						color: $main-font;
						overflow: hidden;
						white-space:nowrap;
						text-overflow:ellipsis;
						border-bottom: 1px dashed #d4d4d4;
						background: url(../../../static/images/index/squre.jpg) 0 15px no-repeat;
					}
				}
			}
		}
	}
}
</style>
