<template>
	<dl class="sort">
		<dt>服务分类</dt>
		<dd :class="{'double': cateInfo.child.length > 7}">
			<ul>
				<li v-for="(cate, index) in cateInfo.child" :key="index" :class="{'cur': cate.cat_id == cat_id, 'last': index == 6}"><router-link :to="{path: '/search', query: {'pcat_id': cateInfo.cat_id,'cat_id': cate.cat_id,'pname':cateInfo.cat_name, 'name': cate.cat_name}}">{{cate.cat_name}}</router-link></li>
			</ul>
		</dd>
	</dl>
</template>
<script>
export default {
	props: ['cateInfo', 'cat_id'],
	data() {
		return {

		}
	}
}
</script>

<style scoped lang="scss">
$main-color: #333;
$red: #e52e3a;
.sort{
	display: flex;
	flex-direction: row;
	border: 1px solid #eee;
	overflow: hidden;
	dt{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 88px;
		background-color: #f0f0f0;
		border-right: 1px solid #eee;
	}
	dd{
		flex: 1;
		position: relative;
		ul{
			overflow: hidden;
			li{
				float: left;
				height: 14px;
				padding: 13px 0;
				a{
					display: inline-block;
					padding: 0 30px;
					font-size: 14px;
					line-height: 1;
					border-right: 1px solid #e5e5e5;
				}
				&.last, &:last-child{
					a{
						border-right: 0 none;
					}
				}
				&.cur, &:hover{
					a{
						font-weight: bold;
						color: $red;
					}
				}
			}
		}
		&.double:after{
			content: "";
			position: absolute;
			top: 50%;
			left: 20px;
			right: 20px;
			transform: translateY(-50%);
			height: 0;
			border-top: 1px dashed #ccc;
		}
	}
}
</style>
