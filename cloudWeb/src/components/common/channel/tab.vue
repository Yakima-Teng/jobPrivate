<template>
<div class="tab">
	<a v-if="columnFirst.length>6 && currentIndex > 0" class="icon icon-left" href="javascript:void(0)" @click="prevFun"></a>
	<div class="tab-box">
		<ul :style="{marginLeft:mleft+'px'}">
			<li v-for="(item, index) in columnFirst" :key="index">
				<router-link tag="a" target="_blank" :to="url+'/'+item.url" >{{item.name_cn}}</router-link>
			</li>
		</ul>
	</div>
	<a v-if="columnFirst.length > 6 && currentIndex < columnFirst.length-5" class="icon icon-right" href="javascript:void(0)" @click="autoPlay(columnFirst.length)"></a>
</div>
</template>
<script>
export default {
	props: ['columnFirst', 'url'],
	data() {
		return {
			currentIndex: 0,
			mleft: 0
		}
	},
	methods:{
		autoPlay(len) {
			if(len - this.currentIndex > 5){
				this.currentIndex++;
				var i = 0;
				var _this = this;
				var t = setInterval(function(){
					if(i<152){
						i+=19; 
						_this.mleft -= 19;
					}else{
						clearInterval(t);
					}
    			},10);
			}
		},
		prevFun(){
			if(this.currentIndex > 0){
				this.currentIndex--;
				var i = 152;
				var _this = this;
				var t = setInterval(function(){
					if(i>0){
						i-=19;
						_this.mleft += 19;
					}else{
						clearInterval(t);
					}
    			},10);
			}
		}
	}
}
</script>

<style scoped lang="scss">
$main-font: #333;
$red: #e52e3a;
.tab{
	width: 930px;
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid #ccc;
	overflow: hidden;
	.tab-box{
		flex: 1;
		overflow: hidden;
	}
	ul{
		width: 10000px;
		overflow: hidden;
		margin-bottom: -1px;
		li{
			float: left;
			margin-right: 80px;
			cursor: default;
			a{
				display: block;
				width: 100%;
				font-size: 18px;
				height: 50px;
				line-height: 50px;
				color: lighten($main-font, 20%);
				box-sizing: border-box;
				cursor: pointer;
			}
			&.cur,&:hover{
				a{
					color: $red;
					border-bottom: 2px solid $red;
				}
				
			}
		}
	}
	.icon{
		display: flex;
		justify-content: center;
		align-items: center;
		color: #666;
		width: 20px;
		font-size: 20px;
		&:hover{
			color: #4a4a4a;
		}
	}
}
</style>
