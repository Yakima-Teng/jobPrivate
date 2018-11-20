<template>
    <div class="note">
      <top></top>
	  <div class="banner">
	    <navigator></navigator>
	  </div>
	  <div class="content">
	  	<div class="w1190">
	  		<div class="step">
	  			<div class="empty"></div>
				<!--<div class="list">
					<div class="time">
						<em></em>
						<span>2018</span>
					</div>
					<div class="option">
						<ul>
							<li>
								<div class="clearfix">
									<em>4月</em>
									<div class="msg">
										<span>我是内容我是内容</span>
									</div>
								</div>
								<div class="clearfix">
									<em>4月</em>
									<div class="msg">
										<span>我是内容我是内容</span>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>-->
				<div :class="{list:true,cur:yIndex==index}" :id="'year'+item.node" v-for="(item,index) of list">
					<div class="time">
						<em></em>
						<span>{{item.node}}</span>
					</div>
					<div class="option">
						<ul>
							<li v-for="(i,ind) of item.event">
								<div class="clearfix">
									<em>{{i.title}}</em>
									<div class="msg">
										<span>{{i.content}}</span>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
	  			<div class="ico"></div>
	  		</div>
	  	</div>
	  </div>
	  <bottom></bottom>
  	  <foot></foot>
  	  <div :class="{float:true,fixed:fixed,fixed2:fixed2}">
  	  	<ul>
  	  		<li v-for="(item,index) of yearList" @click="linkToFn('#year'+item,index)" :class="{cur:yIndex==index}"><span>{{item}}</span></li>
  	  	</ul>
      	<a href="javascript:void(0)" class="top" @click="backTop">
      		TOP
      	</a>
      </div>
    </div>
</template>
<script>
import top from '../../components/common/top.vue'
import navigator from '../../components/common/about/navigator.vue'
import bottom from '../../components/common/bottom.vue'
import foot from '../../components/common/foot.vue'
import {backTop,postFn} from '../../static/js/util.js'

import { GET_XRNOTESLIST } from './module-xrNotes'
import { GET_XRNOTESYEARLIST } from './module-xrNotes'

export default {
	asyncData(_ref) {
        if(_ref!=undefined){
			let store=_ref.store;
			let route=_ref.route;
			return Promise.all([
				store.dispatch(GET_XRNOTESLIST),
				store.dispatch(GET_XRNOTESYEARLIST),
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
			content: '细软事记,创新科技服务云平台'
		}]
	}
},
  data(){
  	return{
  		// yearList:[],
  		yIndex:-1,
		// list:[],
		fixed:false,
		fixed2:false,
  	}
  },
  computed: {
        list(){
			return this.$store.state.serviceXrNotes.xrNotesList;
		},
		yearList(){
			return this.$store.state.serviceXrNotes.xrNotesYearList;
		}
    },
  methods: {
  	backTop(){
        backTop(this)
  	},
  	linkToFn(selector,index){
  		const that = this;
  		that.$el.querySelector(selector).scrollIntoView() 
		that.yIndex = index;
  	}
 },
 components: {
    top,
    bottom,
    foot,
    navigator
 },
 mounted(){
 	const that = this,
 		  sHeight = document.querySelector('.step').offsetTop;
 	window.onscroll = function(){

		 if($(window).scrollTop()>400&&$('.note .float').offset().top-$(window).scrollTop()<=0){
			that.fixed = true
		}else{
			that.fixed = false
		}
		if($('.step .ico').offset().top-$(window).scrollTop()<650){
			// $('.float').css('top','inherit');
			that.fixed2=true
		}else{
			that.fixed2 = false
		}
		console.log(that.fixed2,that.fixed);
 		var top = $(window).scrollTop();
 		for(let [index,item] of that.yearList.entries()){
	 		var x = $('#year'+that.yearList[index]).offset().top,
	 			end = $('#year'+that.yearList[that.yearList.length-1]).offset().top,
	 			num = index + 1;
	 		if(num < that.yearList.length){
	 			var y = $('#year'+that.yearList[index+1]).offset().top
	 			if(top >= x && top < y){
					that.yIndex = index
		 		}
	 		}
	 		if(index == (that.yearList.length-1) && top >= end){
	 			that.yIndex = index
	 		}
		}
		
	 }
 },
 created(){
	 const that = this;
	//  postFn('/content/about/events/allevent','',function(res){
		//   console.log(res)
		//  if(res.data.code==200){
		// 	 var yearList = [],list = [];
		// 	 list = res.data.data;
		// 	 for(var i=0,len=list.length; i<len; i++){
		// 		 yearList.push(list[i].node)
		// 	 }
		// 	that.yearList = yearList
		// 	that.list = list
			// window.onscroll = function(){
				
			// }
		//  }
	//  })
 },
 destroyed () {
	 window.onscroll=null;
 }
}
</script>

<style lang="scss">
$border:#e5e5e5;
$hover:#e52e3a;
.note{
	position: relative;
	.float{
		width:58px;border-top:1px solid $border;position: absolute;top:446px;
		left:50%;margin-left: 440px;text-align: center;font-size: 12px;color:#666;z-index:5;
		&.fixed{
			top:0;position: fixed;
		}
		&.fixed2{
			top:inherit;
			position: absolute;
			bottom:650px;
		}
		.top{
			display: block;height: 24px;padding-top: 22px;
			background:#fff url(../../static/images/about/note/ico.png) no-repeat center -43px;
			border:1px solid $border;border-top: none;font-weight: bold;color:#666;
			&:hover{
				color:#fff;
				background:$hover url(../../static/images/about/note/ico.png) no-repeat center -88px;
				border:1px solid $hover;border-top: none;
			}
		}
		ul{
			li{
				border-left:1px solid $border;border-right:1px solid $border;background: #fff;
				cursor: pointer;padding:0 8px;
				span{
					display: block;line-height: 35px;
					border-bottom: 1px dotted $border;
				}
				&.cur{
					background: $hover;border-left:1px solid $hover;border-right:1px solid $hover;
					color:#fff;
					span{
						border-bottom: 1px dotted $hover;
					}
				}
			}
		}
	}
	.banner{
		background: url(../../static/images/about/note/banner_bg.jpg) no-repeat top center;
		height: 278px;
	}
	.content{
		padding-bottom: 125px;
		.step{
			margin-left: 125px;
			.empty{
				height: 104px;
			}
			border-left:2px solid $border;position: relative;min-height: 300px;
			.ico{
				height: 43px;width:50px;position: absolute;bottom:-42px;left:-16px;
				background: url(../../static/images/about/note/ico.png) no-repeat;
			}
			.list{
				padding-left: 28px;
				.time{
					height: 88px;line-height: 88px;font-family: Arial;font-size: 42px;
					font-weight: bold;position: relative;
					em{
						display: block;position: absolute;
						width:14px;height:14px;border-radius: 50%;
						background: #fff;top:34px;left:-38px;
						border:2px solid $border;
					}
				}
				&.cur{
					.time{
						em{
							background: $hover;border:2px solid $hover;
						}
						color:$hover;
					}
				}
				.option{
					padding-bottom: 35px;line-height:34px;
					li{
						em,.msg{
							float: left;line-height: 34px;
						}
						em{
							width:65px;text-align: right;font-weight: bold;height: 34px;overflow: hidden;text-overflow: ellipsis;
						}
						.msg{
							color:#999;font-size: 16px;padding-left: 18px;
							span{
								display: block;line-height: 34px;
							}
						}
					}
				}
			}
		}
		
	}
}
</style>
