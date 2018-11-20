<template>
<div class="list-title">
	<div class="right"><span>共{{total}}项服务</span><span class="page-type"><i class="icon icon-left" :class="{'disabled': curPage == 1 }" @click="goto(curPage, 'less')"></i><em class="current">{{curPage}}</em>/<em class="total">{{lastPage}}</em><i class="icon icon-right" :class="{'disabled': curPage == lastPage }"  @click="goto(curPage, 'add')"></i></span><i class="icon icon-img" :class="{'cur': curIndex == 0}" @click="tabCutList(0)"></i><i class="icon icon-list" :class="{'cur': curIndex == 1}" @click="tabCutList(1)"></i></div>
	<span class="type">综合</span>
</div>
</template>
<script>
export default {
	props: ['total', 'curIndex'],
	data() {
		return {

		}
	},
	computed: {
		curPage(){
			return this.$store.state.current_page
		},
		lastPage(){
			return this.$store.state.last_page
		}
	},
	methods: {
		goto: function(index, type){
			if(type == 'add'&&index != this.lastPage || type=='less'&&index != 1){
				this.$emit('changePagesInfo', type, index);
			}
		},
		tabCutList: function(index){
			this.$emit('indexChange', index);
		}
	}
}
</script>

<style scoped lang="scss">
$main-color: #333;
$red: #e52e3a;
.list-title{
	background-color: #f0f0f0;
	overflow: hidden;
	span{
		display: inline-block;
		vertical-align: top;
		line-height: 40px;
	}
	.right{
		float: right;
		font-size: 12px;
		height: 40px;
		color: lighten($main-color, 20%);
		.page-type{
			margin-left: 12px;
			margin-right: 30px;
			em{
				display: inline-block;
				vertical-align: top;
				margin-top: 13px;
			}
			.current{
				color: $red;
				margin-left: 12px;
			}
			.total{
				margin-right: 12px;
			}
			.icon{
				font-size: 14px;
				cursor: pointer;
			}
			.disabled{
				color: #ccc;
				cursor: no-drop;
			}
		}
		&>.icon{
			width: 40px;
			height: 40px;
			font-size: 40px;
			vertical-align: top;
			cursor: pointer;
			&.cur,&:hover{
				color: $red;
				background-color: white;
			}
		}
		
	}
	.type{
		width: 80px;
		height: 40px;
		font-size: 14px;
		background-color: $main-color;
		color: white;
		text-align: center;
	}
}
</style>
