<template>
    <div class="contactus">
      <top></top>
	  <navigator class="cur"></navigator>
	  <div class="content">
	  	<div class="map">
	  		<div class="w1190 wrap">
	  			<div class="circle circle1">
	  				<div class="inner">
	  					<div class="round"></div>
	  					<div class="round round1"></div>
	  				</div>
	  			</div>
	  			<div class="circle circle2">
	  				<div class="inner">
	  					<div class="round"></div>
	  					<div class="round round1"></div>
	  				</div>
	  			</div>
	  			<div class="circle circle3">
	  				<div class="inner">
	  					<div class="round"></div>
	  					<div class="round round1"></div>
	  				</div>
	  			</div>
	  			<div class="circle circle4">
	  				<div class="inner">
	  					<div class="round"></div>
	  					<div class="round round1"></div>
	  				</div>
	  			</div>
	  			<div class="circle circle5">
	  				<div class="inner">
	  					<div class="round"></div>
	  					<div class="round round1"></div>
	  				</div>
	  			</div>
	  			<div class="circle circle6">
	  				<div class="inner">
	  					<div class="round"></div>
	  					<div class="round round1"></div>
	  				</div>
	  			</div>
	  		</div>
	  		<div class="title">
	  			中细软中国区分公司办公地点
	  		</div>
	  		<div class="address-list">
	  			<ul class="clearfix">
	  				<!--<li>
	  					<p style="color: #e52e3a;line-height: 70px;font-size: 20px;">中细软（河北）</p>
	  					<p style="font-weight: bold;font-size: 16px;padding-bottom: 12px;">联系方式</p>
	  						<p style="line-height: 26px;">客服电话：400-700-0065</p>
	  						<p style="line-height: 26px;padding-bottom: 30px;">客服邮箱：xinxibu@iprun.com</p>
	  					<p style="font-weight: bold;font-size: 16px;padding-bottom: 12px;">公司地址</p>
	  					<p style="line-height:26px;max-height:52px;text-overflow:ellipsis;white-space:normal;overflow:hidden;">
	  						保定市朝阳北大街源盛电谷广场A座1301室
	  					</p>
						  <p style="line-height:26px;max-height:52px;text-overflow:ellipsis;white-space:normal;overflow:hidden;">
	  						保定市朝阳北大街源盛电谷广场A座1301室
	  					</p>
	  				</li>-->
					<li v-for="(item,index) of list">
						<div v-html="item.content">{{item.content}}</div>
					</li>
	  			</ul>
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

import { GET_CONTACTLIST } from './module-contactUs'
export default {
	asyncData(_ref) {
        if(_ref!=undefined){
			let store=_ref.store;
			let route=_ref.route;
			return Promise.all([
				store.dispatch(GET_CONTACTLIST),
			])
		}else{
            window.location.reload()
        }
    },
 metaInfo () {
	return {
		title: '联系我们-创新科技服务云平台',
		meta: [{
			name: 'description',
			content: '创新科技服务云平台专业提供商标注册,商标查询,专利查询,专利申请,版权登记,工商财税,商标转让,法律,设计等服务,费用透明,流程简单,成功率高!'
		},{
			name: 'keywords',
			content: '联系我们,创新科技服务云平台'
		}]
	}
},
  data(){
  	return{
		// list:[]
  	}
  },
  computed: {
        list(){
			return this.$store.state.serviceContactUs.contactList;
        },
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
// 	 postFn('/content/about/contactus','',function(res){
// 		 if(res.data.code==200){
// 			 that.list = res.data.data.list
// 		 }
// 	 })
//  }
}
</script>

<style lang="scss">
.contactus{
	.map{
		min-height: 878px;
		background:url(../../static/images/about/contact/map.jpg) no-repeat center 50px;
		.title{
				height: 182px;line-height: 182px;text-align: center;font-size: 30px;
				background:url(../../static/images/about/contact/title_bg.png) no-repeat center center;
		}
		.address-list{
			width:1210px;margin:0 auto;padding-bottom: 84px;
			ul{
				li{
					width:281px;border:1px solid #eee;margin:0 10px 20px;height:325px;
					float:left;overflow: hidden;padding:0 50px;
					.tit{
						color:#e52e3a;line-height: 92px;font-size: 20px;
					}
					.subtit{
						font-weight: bold;font-size: 16px;padding-bottom: 12px;
					}
					.msg{
						padding-bottom: 30px;line-height: 26px;
						span{
							display: block;line-height: 26px;color:#666;
						}
						p{
							line-height: 26px;
						}
					}
				}
			}
		}
		.wrap{
			position: relative;height:645px;margin-top:50px;
			.circle,.inner,.round{
				position: absolute;border-radius: 50%;border:1px solid rgba(228,82,91,0.8);
			}
			.circle{
				position: absolute;width:34px;height: 34px;
				.inner,.round{
					top:50%;left:50%;
				}
				.inner{
					width:15px;height: 15px;margin:-8px 0 0 -8px;
					.round{
						width:7px;height:7px;margin:-5px 0 0 -4px;background:rgba(228,82,91,0.8);
						&.round1{
							background:rgba(228,82,91,0.4);
							animation:circle-scale 1.5s infinite;
						}
					}
				}
				&.circle1{
					left:398px;top:378px;
				}
				&.circle2{
					left:462px;top:348px;
				}
				&.circle3{
					left:486px;top:275px;
				}
				&.circle4{
					left:492px;top:460px;
				}
				&.circle5{
					left:512px;top:287px;
				}
				&.circle6{
					right:346px;top:310px;
				}
			}
		}
	}
}
@keyframes circle-scale {
  0% {
    transform: scale(0.1);
  }
 20% {
    opacity: 0.8;
  }
  40% {
    opacity: 0.6;
  }
  60% {
    opacity: 0.4;
  }
  80% {
    opacity: 0.2;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}		
</style>
