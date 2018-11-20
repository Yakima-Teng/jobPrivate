<template>
	<div class="page-wrap" v-if="lastPage <= 10">
		<a v-if="curPage > 1" @click="goto(curPage, 'less')" href="javascript:void(0);" class="syy">上一页</a>
		<a v-for="index in pages" :key="index" @click="goto(index, 'jump')" href="javascript:void(0);" class="pages" :class="{'cur': index == curPage}">{{ index }}</a>
		<a v-if="curPage < lastPage" @click="goto(curPage, 'add')" href="javascript:void(0);" class="xyy">下一页</a>
	</div>
	<div class="page-wrap" v-else-if=" curPage < showItem">
		<a v-if="curPage > 1" @click="goto(curPage, 'less')" href="javascript:void(0);" class="syy">上一页</a>
		<a v-for="index in pages" :key="index" @click="goto(index, 'jump')" href="javascript:void(0);" class="pages" :class="{'cur': index == curPage}">{{ index }}</a>
		<a href="javascript:void(0);" class="pagesl">...</a>
		<a @click="goto(lastPage, 'jump')" href="javascript:void(0);" class="pages">{{ lastPage }}</a>
		<a v-if="curPage < lastPage" @click="goto(curPage, 'add')" href="javascript:void(0);" class="xyy">下一页</a>
	</div>
	<div class="page-wrap" v-else-if="curPage <= (lastPage - showItem + 1)">
		<a v-if="curPage > 1" @click="goto(curPage, 'less')" href="javascript:void(0);" class="syy">上一页</a>
		<a @click="goto(1, 'jump')" href="javascript:void(0);" class="pages">1</a>
		<a href="javascript:void(0);" class="pagesl">...</a>
		<a v-for="index in pages" :key="index" @click="goto(index, 'jump')" href="javascript:void(0);" class="pages" :class="{'cur': index == curPage}">{{ index }}</a>
		<a href="javascript:void(0);" class="pagesl">...</a>
		<a @click="goto(lastPage, 'jump')" href="javascript:void(0);" class="pages">{{ lastPage }}</a>
		<a v-if="curPage < lastPage" @click="goto(curPage, 'add')" href="javascript:void(0);" class="xyy">下一页</a>
	</div>
	<div class="page-wrap" v-else>
		<a v-if="curPage > 1" @click="goto(curPage, 'less')" href="javascript:void(0);" class="syy">上一页</a>
		<a @click="goto(1, 'jump')" href="javascript:void(0);" class="pages">1</a>
		<a href="javascript:void(0);" class="pagesl">...</a>
		<a v-for="index in pages" :key="index" @click="goto(index, 'jump')" href="javascript:void(0);" class="pages" :class="{'cur': index == curPage}">{{ index }}</a>
		<a v-if="curPage < lastPage" @click="goto(curPage, 'add')" href="javascript:void(0);" class="xyy">下一页</a>
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
$red: #cc0000;
.page-wrap{float: right; margin-top: 20px; overflow: hidden;
    a{float: left;height: 30px; font-size: 14px;color: #666666;text-align: center;line-height: 30px;margin-right: 5px;
        &:last-child{margin-right: 0px;}
        &.syy, &.xyy{width: 63px;}
        &.pages{width: 30px; box-sizing: border-box;border-radius: 5px;
            &:hover{ border: 1px solid $red;line-height: 28px;color: $red;}
            &.cur{background-color: $red;color: #fff;}
        }
        &.pagesl{width: 30px;}
    }
}
</style>
