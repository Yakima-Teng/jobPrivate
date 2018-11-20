<template>
 <div class="nav">
 	<div class="w1190">
 		<ul class="clearfix">
 			<li v-for="(item,index) of navList" :class="{cur: showUrl == item.type}"><router-link :to="'/'+item.type">{{item.name}}</router-link></li>
 		</ul>
 		<div class="logo"><router-link to="/"></router-link></div>
 	</div>
 </div>
</template>
<script>
export default {
created() {
	this.showUrl = this.$route.path.substr(1);
},
 data() {
  return {
  	navList:[
  	{type:'',name:'首页'},
  	{type:'about',name:'关于我们'},
  	{type:'about/events',name:'细软事记'},
  	{type:'about/team',name:'公司团队'},
  	{type:'about/cooperats',name:'合作机构'},
  	{type:'about/concatus',name:'联系我们'}
  	],
	showUrl: ''
  }
 },
 methods:{
 
 }
}
</script>
<style scoped lang="scss">
$hover:#f52930;
.nav{
	.logo{
		width:220px;height:35px;background: url(../../../static/images/about/logo.png) no-repeat;
		a{
			display: block;width:220px;height: 35px;
		}
	}
	height:60px;padding-top: 30px;
	ul{
		float: right;
		li{
			font-size: 16px;float: left;
			a{
				color:#fff;margin-left:46px;display: block;line-height: 36px;
				border-bottom: 2px solid transparent;
			}
			&.cur,&:hover{
				a{
					color:#fff;
						border-bottom: 2px solid #fff;
				}
			}
		}
	}
	&.cur{
		box-shadow: 0 2px 3px rgba(0,0,0,0.1);
		.logo{
			background: url(../../../static/images/about/logo.png) no-repeat left -35px;
		}
		ul{
			li{
				a{
					color:#333;
				}
				&.cur,&:hover{
					a{
						color:$hover;
						border-bottom: 2px solid $hover;
					}
				}
			}
		}
	}
}
</style>
