<template>
	<div class="pagination" v-if="lastPage > 1">
		<!-- <ul class="number-list">
			<li><a class="btn-prev disabled" href="javascript:void(0)"><i class="icon icon-prev"></i>上一页</a></li>
			<li><a class="number cur" href="javascript:void(0)">1</a></li>
			<li><a class="number" href="javascript:void(0)">2</a></li>
			<li><a class="number" href="javascript:void(0)">3</a></li>
			<li><a class="number" href="javascript:void(0)">4</a></li>
			<li><a class="number" href="javascript:void(0)">5</a></li>
			<li class="ellipsis">...</li>
			<li><a class="btn-next" href="javascript:void(0)">下一页<i class="icon icon-next"></i></a></li>
		</ul> -->
		<ul class="number-list" v-if="lastPage <= 10">
			<li @click="goto(curPage, 'less')"><a class="btn-prev" :class="{'disabled': curPage == 1}" href="javascript:void(0)"><i class="icon icon-prev"></i>上一页</a></li>
			<li v-for="index in pages" :key="index" @click="goto(index, 'jump')"><a class="number" :class="{'cur': index == curPage}" href="javascript:void(0)">{{ index }}</a></li>
			<li @click="goto(curPage, 'add')"><a class="btn-next" :class="{'disabled': curPage == lastPage}" href="javascript:void(0)">下一页<i class="icon icon-next"></i></a></li>
		</ul>
		<ul class="number-list" v-else-if=" curPage < showItem">
			<li @click="goto(curPage, 'less')"><a class="btn-prev" :class="{'disabled': curPage == 1}" href="javascript:void(0)"><i class="icon icon-prev"></i>上一页</a></li>
			<li v-for="index in pages" :key="index" @click="goto(index, 'jump')"><a class="number" :class="{'cur': index == curPage}" href="javascript:void(0)">{{ index }}</a></li>
			<li class="ellipsis">...</li>
			<li @click="goto(lastPage, 'jump')"><a class="number" href="javascript:void(0)">{{ lastPage }}</a></li>
			<li @click="goto(curPage, 'add')"><a class="btn-next" :class="{'disabled': curPage == lastPage}" href="javascript:void(0)">下一页<i class="icon icon-next"></i></a></li>
		</ul>
		<ul class="number-list" v-else-if="curPage <= (lastPage - showItem + 1)">
			<li @click="goto(curPage, 'less')"><a class="btn-prev" :class="{'disabled': curPage == 1}" href="javascript:void(0)"><i class="icon icon-prev"></i>上一页</a></li>
			<li @click="goto(1, 'jump')"><a class="number" href="javascript:void(0)">1</a></li>
			<li class="ellipsis">...</li>
			<li v-for="index in pages" @click="goto(index, 'jump')" :key="index"><a class="number" :class="{'cur': index == curPage}" href="javascript:void(0)">{{ index }}</a></li>
			<li class="ellipsis">...</li>
			<li @click="goto(lastPage, 'jump')"><a class="number" href="javascript:void(0)">{{ lastPage }}</a></li>
			<li @click="goto(curPage, 'add')"><a class="btn-next" :class="{'disabled': curPage == lastPage}" href="javascript:void(0)">下一页<i class="icon icon-next"></i></a></li>
		</ul>
		<ul class="number-list" v-else>
			<li @click="goto(curPage, 'less')"><a class="btn-prev" :class="{'disabled': curPage == 1}" href="javascript:void(0)"><i class="icon icon-prev"></i>上一页</a></li>
			<li @click="goto(1, 'jump')"><a class="number" href="javascript:void(0)">1</a></li>
			<li class="ellipsis">...</li>
			<li v-for="index in pages" @click="goto(index, 'jump')" :key="index"><a class="number" :class="{'cur': index == curPage}" href="javascript:void(0)">{{ index }}</a></li>
			<li @click="goto(curPage, 'add')"><a class="btn-next" :class="{'disabled': curPage == lastPage}" href="javascript:void(0)">下一页<i class="icon icon-next"></i></a></li>
		</ul>
		<div class="sum">
			<span class="all_pages">共<em class="num">{{lastPage}}</em>页，</span>
	    	<span class="inp_pages">到第<input class="inp-num" type="text" v-model="pageInp" />页</span>
			<a class="btn-ok" href="javascript:void(0)" @click=jumpPage>确定</a>
	  	</div>
	</div>
</template>

<script>
	export default {
		data: function(){
	        return{
				showItem: 5,
				pageInp: ''
	        }
        },
		computed: {
			curPage(){
				return this.$store.state.current_page
			},
			lastPage(){
				return this.$store.state.last_page
			},
          	pages:function(){
                var pag = [];
                if(this.lastPage <= 10 ){
                    var i = this.lastPage;
                    while(i){
                        pag.unshift(i--);
                    }
				}else if( this.curPage < this.showItem ){
               		var i = Math.min(this.showItem,this.lastPage);
                   	while(i){
                       	pag.unshift(i--);
                   	}
               	}else if(this.curPage <= (this.lastPage - this.showItem + 1)){
               		var middle = this.curPage - Math.floor(this.showItem / 2 ),//从哪里开始
	                i = this.showItem;
	                if( middle >  (this.lastPage - this.showItem)  ){
	                    middle = (this.lastPage - this.showItem) + 1
	                }
	                while(i--){
	                    pag.push( middle++ );
	                }
               	}else{
               		var i = this.lastPage;
               		while(i > (this.lastPage - this.showItem)){
               			pag.unshift(i--);
                   	}
               	}
                return pag
            }
      	},
      	methods: {
      		goto: function(index, type){
				if(type == 'add'&&index != this.lastPage || type=='less'&&index != 1 || type=='jump'){
					this.$emit('changePagesInfo', type, index);
				}
			},
			jumpPage: function(){
				var num = parseInt(this.pageInp);
				var type = 'jump';
				if(num){
					this.$emit('changePagesInfo',type, num);
				}
			}
      	}
	}
</script>
<style scoped lang="scss">
$hover: #e52e3a;
$black: #333;
.pagination{
	display: flex;
	flex-direction: row;
	margin-top: 30px;
	justify-content: center;
	ul{
		display: flex;
		flex-direction: row;
		li{
			&.ellipsis{
				line-height: 26px;
				margin-left: 5px;
				margin-right: 5px;
			}
			a{
				display: block;
				border: 1px solid #eee;
				width: 37px;
				height: 36px;
				background-color: white;
				color: $black;
				font-size: 14px;
				line-height: 36px;
				box-sizing: border-box;
				text-align: center;
				&:hover,&.cur{
					border-color: $hover;
					background-color: $hover;
					color: white;
				}
				&.btn-prev, &.btn-next{
					display: flex;
					justify-content: center;
					align-items: center;
					width: 80px;
					.icon{
						display: block;
						font-size: 24px;
					}
				}
				&.btn-prev{
					padding-right: 10px;
					margin-right: 6px;
				}
				&.btn-next{
					padding-left: 10px;
					margin-left: 6px;
				}
				&.number{
					margin-left: -1px;
				}
				&.disabled{
					color: lighten($black, 40%);
					cursor: default;
					&:hover{
						border-color: #eee;
						background-color: white;
					}
				}
			}
		}
	}
	.sum{
		font-size: 14px;
		line-height: 36px;
		color: lighten($black, 40%);
		margin-left: 5px;
		.num{
			margin-left: 4px;
			margin-right: 4px;
		}
		.inp-num{
			margin-left: 5px;
			margin-right: 9px;
			width: 42px;
			height: 26px;
			border: 1px solid #eee;
			box-sizing: border-box;
			color: $black;
			text-align: center;
		}
		.btn-ok{
			display: inline-block;
			width: 52px;
			height: 26px;
			margin-left: 10px;
			line-height: 26px;
			color: white;
			background-color: $black;
			text-align: center;
			&:hover{
				background-color: $hover;
			}
		}
	}
}
</style>
