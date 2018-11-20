<template>
    <div class="about">
      <top></top>
	  <div class="banner">
	    <navigator></navigator>
	  </div>
	  <div class="content" v-html="content">
	  	
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

import { GET_ABOUTCONTENT } from './module-aboutus'

export default {
	asyncData(_ref) {
        if(_ref!=undefined){
			let store=_ref.store;
			let route=_ref.route;
			return Promise.all([
				store.dispatch(GET_ABOUTCONTENT),
			])
		}else{
            window.location.reload()
        }
    },
 metaInfo () {
	return {
		title: '关于我们-创新科技服务云平台',
		meta: [{
			name: 'description',
			content: '创新科技服务云平台专业提供商标注册,商标查询,专利查询,专利申请,版权登记,工商财税,商标转让,法律,设计等服务,费用透明,流程简单,成功率高!'
		},{
			name: 'keywords',
			content: '关于我们,创新科技服务云平台'
		}]
	}
},
  data(){
  	return{
		//   content:''
  	}
  },
  computed: {
        content(){
			return this.$store.state.serviceAboutus.content;
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
// 	 postFn('/content/about/aboutus','',function(res){
// 		 console.log(res)
// 		 if(res.data.code==200){
// 			 console.log(res)
// 			 var content = '', list = res.data.data.list;
// 			 for(var i=0,len=list.length; i<len; i++){
// 				 content += list[i].content
// 			 }
// 			that.content = content
// 		 }
// 	 })
//  }
}
</script>

<style lang="scss">
.about{
	.banner{
		background: url(../../static/images/about/about/banner_bg.jpg) no-repeat top center;
		height: 278px;
	}
	.content{
		padding: 100px 0;line-height: 36px;color:#666;text-align:center;box-sizing: border-box; overflow: hidden;
		p{
			position: relative; left:50%;  transform: translateX(-960px);
		}
	}
}
</style>
