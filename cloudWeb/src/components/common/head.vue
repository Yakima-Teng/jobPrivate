<template>
	<header class="w1190">
		<div class="search-box" @keyup.enter="submit"><input class="inp-search" :class="{'error' : isErr}" v-model="search" type="text" placeholder="请输入检索关键词"/><a ref="btn" class="btn btn-search" target="_blank" href="javascript:void(0)" @click="submit"><i class="icon icon-search"></i></a></div>
		<h1 class="logo"><router-link class="logo-link" tag="a" to="/"></router-link></h1><em v-if="subtitle != undefined && subtitle!=''">{{subtitle}}</em>
	</header>
</template>

<script>
export default {
	props: ['subtitle', 'keywords'],
	data() {
		return {
			search: '',
			isErr: false
		}
	},
	created(){
		var key = this.keywords;
		if(key!=undefined && key!=''){
			this.search = key;
		}
	},
	methods:{
		submit: function(e){
			var _this = this;
			if(this.search == ''){
				e.preventDefault();
				this.isErr = true;
				setTimeout(function(){
					_this.isErr = false;
				},1200);
			}else{
				var btn = this.$refs.btn;
				btn.setAttribute("href","/search?keywords="+this.search); 
				window.open(btn.href)
			}
			
		}
	}
}
</script>

<style scoped lang="scss">
$red: #e52e3a;
	header{
		padding-top: 36px;
		overflow: hidden;
		.search-box{
			display: flex;
			flex-direction: row;
			float: right;
			overflow: hidden;
			.inp-search{
				width: 411px;
				padding-left: 17px;
				height: 40px;
				border: 1px solid #e5e5e5;
				border-right: 0 none;
				font-size: 16px;
				box-sizing: border-box;
				background-color: #fff;
				&.error{
					border-color: $red;
					animation-name: bgActive;
					animation-duration: .7s;
					animation-iteration-count: 2;
					& + a{
						background-color: $red;
					}
				}
			}
			.btn-search{
				display: flex;
				width: 60px;
				height: 40px;
				background-color: #333333;
				justify-content: center;
				align-items: center;
				.icon{
					font-size: 26px;
					color: #fff;
				}
				&:hover{
					background-color: #e52e3a;
				}
			}
		}
		.logo{
			float: left;
			width: 216px;
			height: 35px;
			margin-top: 3px;
			.logo-link{
				display: block;
				width: 100%;
				height: 100%;
				background: url(../../static/images/logo.png) center no-repeat;
				background-size: 100%;
			}
		}
		em{
			float: left;
			font-size: 16px;
			color: #666;
			margin-left: 20px;
			margin-top: 20px;
		}
	}
	@keyframes bgActive {
		0%{background-color: #fff;}
		60%{ background-color: #fff2f3;}
		100%{background-color: #fff;}
	}
</style>
