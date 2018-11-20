<template>
 <div class="foot">
 	<div class="link w1190">
		<router-link to="/about" >关于我们</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
		<router-link to="/about/events" >细软事记</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
		<router-link to="/about/cooperats" >合作机构</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
		<router-link to="/about/concatus" >联系我们</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
		<router-link to="/about/team" >细软团队</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
		<router-link to="">网站地图</router-link>&nbsp;&nbsp;|&nbsp;&nbsp;
		<router-link to="">网站声明</router-link>
     </div> 
     <div class="w1190 copyright">
     	<div>
     		2002-2018 中细软集团有限公司 版权所有
     		<span class="address">北京市房山区长阳路中细软知识产权科技园中细软大厦</span>京ICP备15031491号-2 010-53949000
     	</div> 
     	<div class="list">
     		<em></em><span>国际商标协会会员</span> 
     		<em></em><span>高新企业认证</span> 
     		<em></em><span>中国商标战略创新奖</span> 
     		<em></em><span>中华商标协会会员</span> 
     		<em></em><span>知识产权管理研究中心</span>
     	</div>
     </div>
</div>
</template>
<script>
export default {
 data() {
  return {

  }
 },
}
</script>

<style scoped lang="scss">
$hover:#fff;
.foot{
	height:150px;background: #333;text-align: center;font-size: 14px;color:#666;
	a{
		color:#999;
		&:hover{
			color:$hover;
		}
	}
	.link{
		line-height: 72px;
	}
	.copyright{
		.address{
			padding:0 26px;
		}
		.list{
			line-height: 34px;
			span{
				padding-right: 15px;
			}
			em{
				margin:0 11px;width:4px;height:4px;display: inline-block;vertical-align: middle;
				border-radius: 50%;background: #666;
			}
		}
	}
}
</style>
