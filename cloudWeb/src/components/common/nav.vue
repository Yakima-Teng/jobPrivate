<template>
	<nav class="w1190 nav">
		<ul class="nav-list clearfix">
			<li v-for="(item,index) in navList" :key="index" :class="{'cur': $route.path.indexOf(item.cat_id)!=-1}">
				<router-link tag="a" target="_blank" :to="'/channel_'+item.cat_id">{{ item.cat_name }}<i class="hot" v-if="item.cat_name.indexOf('商标') != -1 || item.cat_name.indexOf('专利') != -1 || item.cat_name.indexOf('版权') != -1"></i></router-link>
				<div class="sub-nav">
					<ul v-if="item.child != undefined && item.child.length" class="w1190">
						<li v-for="(sub, i) in item.child" :key="i"><router-link tag="a" target="_blank" :to="{path: '/search', query: {'pcat_id': item.cat_id,'cat_id': sub.cat_id,'pname':item.cat_name, 'name': sub.cat_name}}">{{sub.cat_name}}</router-link><em v-if="(i+1) < item.child.length"></em></li>
					</ul>
				</div>
			</li>
			<li>
				<a target='_blank' href="http://www.gbicom.cn">商标交易<i class="hot"></i></a>
			</li>
		</ul>
	</nav>
</template>
<script>
export default {
	computed: {
		navList(){
			return this.$store.state.cateList
		}
	}
}
</script>

<style scoped lang="scss">
$hover: #e52e3a;
$black: #333;
.nav{
	margin-top: 26px;
	ul{
		width: 100%;
	}
	.nav-list{
		&>li{
			float: left;
			// width: 64px;
			margin-right: 42px;
			&>a{
				position: relative;
				display: inline-block;
				width: 100%;
				height: 40px;
				line-height: 40px;
				font-size: 16px;
				color: $black;
				border-bottom: 2px solid white;
				.hot{
					position: absolute;
					width: 21px;
					height: 8px;
					top: 5px;
					background: url(../../static/images/hot.jpg) center no-repeat;
					background-size: 100%; 
				}
			}
			.sub-nav{
				display: none;
				width: 100%;
				position: absolute;
				background: white;
				left: 0;
				z-index: 1;
				ul{
					width: 1200px;
					overflow: hidden;
					margin: auto;
				}
				li{
					display: inline-block;
					margin-right: 18px;
					font-size: 14px;
					line-height: 38px;
					a{
						margin-right: 19px;
						color: lighten($black, 20%);
					}
					em{
						display: inline-block;
						width: 13px;
						height: 13px;
						margin-bottom: -1px;
						background: url(../../static/images/divide.png) center no-repeat;
						background-size: 100%; 
					}
					&:hover a{
						color: $hover;
					}
				}
			}
			&:hover,&.cur{
				&>a{
					color: $hover;
					border-color: $hover;
					font-weight: bold;
				}
			}
			&:hover{
				.sub-nav{
					display: block;
				}
			}
		} 
	}
}
</style>
