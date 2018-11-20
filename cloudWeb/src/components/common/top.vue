<template>
 <div class="top">
 	<div class="w1190">
 		<ul v-if="userInfo!=''&&isLogin==true">
 			<li>您好，<span v-if="userInfo.username!=''&&userInfo.username!=null&&userInfo.username!=undefined">{{userInfo.username}}</span><span v-else>{{userInfo.tel}}</span></li>
			 <li class="quit" @click="quitFn">退出</li>
 			<li class="msg"><router-link to="/home/message" @click.native='getMsg'>消息<em v-if="msgNum>0"></em></router-link></li>
 			<li class="line"></li>
 			<li><router-link to="/home">个人中心</router-link></li>
 			<li class="line"></li>
 			<li class="tel">客服热线：<em>400-700-0065</em></li>
 		</ul>
 		<ul v-else>
 			<li><a href="javascript:void(0)" @click="linkFn">请登录</a></li>
 			<li class="line"></li>
 			<li><router-link :to="{path:'/login',query:{register:1}}">注册</router-link></li>
 			<li class="line"></li>
 			<li><router-link to="/home?userView=true">个人中心</router-link></li>
 			<li class="line"></li>
 			<li class="tel">客服热线：<em>400-700-0065</em></li>
 		</ul>
 		<span>为世界创新加油！</span>
 	</div>
 </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
import {delCookie,postFn} from '../../static/js/util.js'
export default {
 data() {
  return {
	  id:'',
	  url:''
  }
 },
 created() {
	 console.log(this.$route.path,'this.$route.path');
	 const that = this;
	 this.url=this.$route.path;
	 console.log(this.url.substr(1));
    if(this.$route.params.id!=undefined&&this.$route.params.id!=null&&this.$route.params.id!=''&&this.$route.params.id==this.url.substr(1)){
		this.id = that.$route.params.id
	}else{
		this.id = ''
	}
	this.getorderMsgNum()
 },
computed:mapState(["userInfo",'isLogin','msgNum']),
 methods: {
	 ...mapActions(['update_userInfo','update_isLogin','update_num','update_msgNum']),
	 linkFn(){
		 if(this.url!=''){
			 this.$router.push('/login?url='+this.url)
		 }else{
			 this.$router.push('/login')
		 }
	 },
	 quitFn(){
		 this.update_userInfo('')
		 this.update_isLogin(false)
		 this.update_num(0)
		 console.log(1);
		 delCookie('token')
		 console.log(2);
		 $.ajax({
			type:'GET',
			url: 'http://account.ciprun.com/join/cloud_clear_token',
			dataType: 'jsonp',
			success:function () {
				
			},
			error:function(){
				
			}
		})
		this.url=this.$route.path;
		if(this.$route.params.id!=undefined&&this.$route.params.id!=null&&this.$route.params.id!=''&&this.$route.params.id==this.url.substr(1)){
			this.id = this.$route.params.id
		}else{
			this.id = ''
		}
		if(this.id!=''){
			//  this.$router.push('/'+this.id)
			// window.location.reload();
			this.$emit('reload',this.id);
		}else if( this.$route.path.indexOf('BR09') != -1){
            this.$router.push('/DoubleEleven/BR09')
		}else if( this.$route.path.indexOf('LA08') != -1){
            this.$router.push('/DoubleEleven/LA08')
            window.location.reload();
        }else if( this.$route.path.indexOf('PA07') != -1){
            this.$router.push('/DoubleEleven/PA07')
        }else if( this.$route.path.indexOf('TR06') != -1){
            this.$router.push('/DoubleEleven/TR06')
        }else if( this.$route.path.indexOf('CO05') != -1){
            this.$router.push('/DoubleEleven/CO05')
        }else{
			this.$router.push('/')
		}
		 
	 },
	 getMsg(){
		 this.update_msgNum(0);
     },
	 getorderMsgNum(){
		 //获取订单消息数量
         var data={
             type:1,
         }
         var that=this;
         postFn('/message/message/msg/newmsg',data,function(res){
             if(res.data.code==200){
                 that.update_msgNum(res.data.data.count);
             }
         })
     },
 }
}
</script>

<style scoped lang="scss">
$hover:#f52930;
.top{
	height:36px;background: #f5f5f5;font-size: 12px;
	.w1190{
		line-height: 36px;
    	color: #666;
	}
	ul{
		float: right;
		li{
			float: left;line-height: 36px;color:#666;
			a{
				color:#666;
				&:hover{
					color:$hover;
				}
			}
			&.tel{
				em{
					font-weight: bold;
					color:$hover;
				}
			}
			&.line{
				height: 12px;
		        width: 1px;
		        background: #ccc;
		        margin: 13px 12px 0;
			}
			&.quit{
				padding-left:18px;
				&:hover{
					color:$hover;cursor: pointer;
				}
			}
			&.msg{
				padding-left: 14px;
        		position: relative;
        		em{
    			 position: absolute;
		          width: 4px;
		          height: 4px;
		          background: #e52e3a;
		          display: block;
		          right: -5px;
		          top: 10px;
		          border-radius: 50%;
        		}
			}
		}
	}
}
</style>
