<template>
    <div class="org">
      <top></top>
	  <div class="banner">
	    <navigator></navigator>
	  </div>
	  <div class="content">
	  	<div>
	  		<div class="title">
	  			<div class="msg">国内合作机构</div>
	  			<div class="letter">CHINA<div class="line"></div></div>
	  		</div>
	  		<div class="list1 w1190">
	  			<ul class="clearfix">
	  				<li v-for="(item,index) of list"><img :src="item.img" /></li>
	  			</ul>
	  		</div>
	  		<div class="list2">
		  		<div class="title">
		  			<div class="msg">国际合作机构</div>
		  			<div class="letter">INTERNATIONAL<div class="line"></div></div>
		  		</div>
	  			<div class="w1190">
	  				<ul class="clearfix">
	  					<li :title="item.name" v-for="(item,index) of wList">{{item.name}}</li><!--title里放列表全名-->
	  				</ul>
	  			</div>
	  		</div>
	  	</div>
	  </div>
	  <bottom></bottom>
  	  <foot></foot>
    </div>
</template>

<script>
import top from '../../components/common/top.vue'
import navigator from '../../components/common/about/navigator.vue'
import bottom from '../../components/common/bottom.vue'
import foot from '../../components/common/foot.vue'
import {postFn} from '../../static/js/util.js'
import { GET_ORGANIZATIONLIST } from './module-organization'
import { GET_ORGANIZATIONWLIST } from './module-organization'
export default {
	asyncData(_ref) {
        if(_ref!=undefined){
			let store=_ref.store;
			let route=_ref.route;
			return Promise.all([
				store.dispatch(GET_ORGANIZATIONLIST),
				store.dispatch(GET_ORGANIZATIONWLIST),
			])
		}else{
            window.location.reload()
        }
    },
 metaInfo () {
	return {
		title: '合作机构-创新科技服务云平台',
		meta: [{
			name: 'description',
			content: '创新科技服务云平台专业提供商标注册,商标查询,专利查询,专利申请,版权登记,工商财税,商标转让,法律,设计等服务,费用透明,流程简单,成功率高!'
		},{
			name: 'keywords',
			content: '合作机构,创新科技服务云平台'
		}]
	}
},
  data(){
  	return{
		//   list:[],
		//   wList:[]
  	}
  },
  computed: {
        list(){
			return this.$store.state.serviceOrganization.organizationList;
		},
		wList(){
			return this.$store.state.serviceOrganization.organizationWList;
		}
    },
  methods: {
	  
 },
 components: {
    top,
    bottom,
    foot,
    navigator
 },
//  created(){
// 	 const that = this;
// 	 postFn('/content/about/cooperates','',function(res){
// 		 if(res.data.code==200){
// 			 console.log(res)
// 			 that.list = res.data.data.list
// 			 that.wList = res.data.data.beyond
// 		 }
// 	 })
//  }
}
</script>

<style lang="scss">
.org{
	.banner{
		background: url(../../static/images/about/org/banner_bg.jpg) no-repeat top center;
		height: 278px;
	}
	.content{
		.title{
			padding-top: 82px;text-align: center;
			.msg{
				font-size: 36px;
			}
			.letter{
				font-size: 22px;color: #999;width:175px;
				margin:0 auto;border-bottom: 1px solid #eee;
				line-height: 44px;position: relative;
				.line{
					height:2px;width:42px;background:#e52e3a;bottom:-1px;
					left:50%;margin-left: -21px;position: absolute;
				}
			}
		}
		.list1{
			padding: 75px 12px;
			li{
				width:160px;float:left;height:82px;margin:0 4px 8px;overflow: hidden;
				img{
					width:160px;height: 82px;
				}
			}
		}
		.list2{
			background: #fafafa;
			ul{
				padding:62px 0 112px;
				li{
					line-height: 56px;color:#666;font-size: 20px;
					width:575px;float: left;overflow: hidden;padding-right: 20px;
					text-overflow:ellipsis;
					white-space: nowrap;
				}
			}
		}
	}
}
</style>
