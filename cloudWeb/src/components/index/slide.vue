<template>
<div class="service" id="convenient" v-if="slideList != ''">
	<div class="wrap">
		<ul class='slide-ul' :style="{marginLeft:mleft+'px'}">
				<li v-for="(list,index) in slideList" :key="index">
					<router-link tag="a" target="_blank" :to="'/'+list.product_id">
						<div class="service-box"><img :src="list.product_img" /></div>
						<h3>{{list.product_name}}</h3>
						<p class="ellipsis">{{list.product_desc}}</p>
					</router-link>
				</li>
		</ul>
	</div>
	<a class="icon icon-left" href="javascript:void(0)" @click="prevFun"></a>
	<a class="icon icon-right" href="javascript:void(0)" @click="autoPlay"></a>
</div>

</template>
<script>
export default {
	data() {
		return {
			currentIndex: 0,
			mleft: 0
		}
	},
	computed: {
		slideList(){
			return this.$store.state.service.convenient
		}
	},
	methods:{
		autoPlay() {
			if(this.slideList.length - this.currentIndex > 5){
				this.currentIndex+=5;
				var i = 0;
				var _this = this;
				var t = setInterval(function(){
					if(i<1210){
						i+=121; 
						_this.mleft -= 121;
					}else{
						clearInterval(t);
					}
    			},80);
			}
		},
		prevFun(){
			if(this.currentIndex > 0){
				this.currentIndex-=5;
				var i = 1210;
				var _this = this;
				var t = setInterval(function(){
					if(i>0){
						i-=121;
						_this.mleft += 121;
					}else{
						clearInterval(t);
					}
    			},80);
			}
		}
	}
}
</script>

<style scoped lang="scss">
.ellipsis{
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.service{
	position: relative;
	width: 100%;
	background-color: #f0f0f0;
}
.wrap {
	width: 1210px;
	padding: 40px 0;
	margin: auto;
	overflow: hidden;
}
.slide-ul {
	width: 10000px;
}
.slide-ul li {
	float: left;
	padding: 0 10px;
	transition: all .2s ease-in;
	a{
		display: block;
		width: 222px;
		padding: 34px 0 37px;
		background-color: white;
		box-sizing: border-box;
		height: 248px;
		&:hover{
			h3{
				color: #e52e3a;
			}
		}
		.service-box{
			width: 96px;
			height: 96px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto 30px;
			img{
				max-width: 135px;
				max-height:135px;
			}
		}
		h3{
			font-size: 18px;
			line-height: 1;
			color: #333;
			text-align: center;
			margin-bottom: 10px;
		}
		p{
			padding-left: 34px;
			padding-right: 34px;
			font-size: 14px;
			line-height: 1;
			color: #999;
			text-align: center;
		}
	}
	&:hover{
		position: relative;
		transform:translateY(-4px);
	}
}
.icon{
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	border-radius: 50%;
	color: #a2a2a2;
	font-size: 20px;
	z-index: 1;
	&:hover{
		color: #4a4a4a;
	}
	&.icon-left{
		left: calc(50%-640px);
	}
	&.icon-right{
		left: calc(50%+620px);
	}
}

</style>
