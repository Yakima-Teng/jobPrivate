<template>
	<div class="crumb">
		<div v-if="nav==undefined">
			<router-link v-if="levelOne.indexOf('全部') == -1" tag="a" target="_blank" class="level-one" :to="{path: '/channel_'+id}">{{levelOne}}</router-link><em v-else class="level-one">{{levelOne}}</em><i class="icon icon-view"></i><a class="level-two" href="javascript:history.go(0)">{{levelTwo}}</a>
		</div>
		<div v-else v-for="(item, index) in nav" :key="index">
			<router-link target="_blank" v-if="item.id!=undefined && index == 0" :to="{path: '/'+url}">{{item.name_cn}}</router-link><router-link target="_blank" v-else-if="item.id!=undefined && index == 1" :to="{path: '/'+url+'/'+item.url}">{{item.name_cn}}</router-link><em v-else>{{item.name_cn}}</em><i v-if="nav.length > (index+1)" class="icon icon-view"></i>
		</div>
	</div>
</template>
<script>
export default {
	props: ['id','levelOne','levelTwo','nav', 'url'],
	data() {
		return {

		}
	},
}
</script>

<style scoped lang="scss">
$main-color: #333;
$red: #e52e3a;
.crumb{
	padding: 16px 0 0;
	height: 38px;
	box-sizing: border-box;
	overflow: hidden;
	div{
		float: left;
	}
	a,em{
		display: inline-block;
		font-size: 12px;
		line-height: 22px;
		color: lighten($main-color, 20%);
	}
	a:hover{
		color: $red;
	}
	.icon{
		color: $main-color;
		vertical-align: middle;
	}
}
</style>
