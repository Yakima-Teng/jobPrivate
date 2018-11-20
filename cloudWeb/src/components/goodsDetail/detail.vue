<template>
	<div class="loading" v-if="loading==false">加载中...</div>
    <div class="detail" v-else>
	  <fixed-part></fixed-part>
      <top @reload='togoods'></top>
	  <div class="head-bg shadow">
	  	<head-part></head-part>
	  	<navigate></navigate>
	  </div>
	  <div class="bg">
		<div class="w1190">
			<div class="crumbs" v-if="!empty&&info!=''">
				<router-link :to="'/channel_'+info.cat_info.cat_id">{{info.cat_info.cat_name}}</router-link>
				<span v-if="info.cat_info.child!=''&&info.cat_info.child!=undefined&&info.cat_info.child!=null"> > <router-link :to="'/search??pcat_id='+info.cat_info.cat_id+'&cat_id='+info.cat_info.child.cat_id+'&pname='+info.cat_info.cat_name+'&name='+info.cat_info.child.cat_name">{{info.cat_info.child.cat_name}}</router-link></span>
			</div>
			<div class="empty" v-if="empty==true"></div>
			<div class="main clearfix">
				<div :class="{content:true,clearfix:true,jHeight:info.normList&&info.normList.length>2,jHeight2:info.act_list&&info.act_list.length>0&&info.normList&&info.normList.length>2}" v-if="!empty&&info!=''">
					<div class="option1" v-if="!empty">
						<div class="img-box"><img :src="info.info.product_img" /></div>
						<div class="ico-box">
							<ul class="clearfix">
								<li>
									<span v-if="collect" class="collect2" @click="cancelCollectFn"><em class="ico icon-collect2 collectRed"></em>已收藏</span>
									<span v-else  class="collect" @click="collectFn"><em class="ico icon-collect"></em>收藏</span>
								</li>
								<li @click="shareFn">
									<span :class="{cur:share==true,shareBtn:true}"><em class="ico icon-share"></em>分享</span>
									<div class="layer" v-show="share==true">
										<div class="con">分享到</div>
										<div class="con">
											<share-part :config="config" ></share-part>
										</div>
										<span  class="close" @click.stop="closeShare">
											<i class="icon-close"></i>
										</span>
										<span class="triangle"></span>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="option2" v-if="!empty&&info!=''">
						<div class="title" v-if="info.cur_sku.sku_name!=''&&info.cur_sku.sku_name!=undefined&&info.cur_sku.sku_name!=null">{{info.cur_sku.sku_name}}</div>
						<div class="title" v-else>{{info.info.product_name}}</div>
						<div :class="{msg:true,padding: info.cur_sku.sku_buy_status!=1}" v-if="info.cur_sku.sku_desc!=''&&info.cur_sku.sku_desc!=undefined&&info.cur_sku.sku_desc!=null">{{info.cur_sku.sku_desc}}</div>
						<div :class="{msg:true,padding: info.cur_sku.sku_buy_status!=1}" v-else>{{info.info.product_desc}}</div>
						<dl class="price" v-if="info.cur_sku!=''&&info.cur_sku.length!=0&&info.cur_sku.sku_buy_status == 1"> 
							<!-- v-if="info.cur_sku.sku_buy_status==1&&info.info.is_on_sale==1" 判断注释了 -->
							<dt>服务售价:</dt>
							<dd>
								<span>￥{{info.cur_sku.sku_price}}</span>
							</dd>
						</dl>
						<dl class="price" v-if='info.cur_sku.length==0'>
							<dt>服务售价：</dt>
							<dd>
								<span  class="empty">--</span>
							</dd>
						</dl>
						<dl class="sp" v-if="info.cur_sku.sku_buy_status==1&&info.info.is_on_sale==1">
							<div class="more" @click="spSlideFn" v-if="info.act_list.length>3||sku.length>3">
								<span v-if="spSlide">展开<em class="icon-xiala ico"></em></span>
								<span v-else>收起<em class="icon-top1 ico"></em></span>
							</div>
							<dt v-if='sku!=""||info.act_list!=""'>促 &nbsp; &nbsp; 销：</dt>
							<dd v-if='sku!=""||info.act_list!=""' :class="{overflow:spSlide==true}">
								<ul v-if='info.act_list.length==0'>
									<li v-for="(item,index) in sku" :key='index'>
										<em class="name">{{item.type_tag}}</em>
										<span class="status">{{item.rule_title}}</span>
										<span class="type">{{item.msg}}</span>
									</li>
								</ul>
								<ul v-else>
									<li v-for="(item,index) of info.act_list">
										<em class="name">{{item.info.type_tag}}</em>
										<span class="status">{{item.info.rule_title}}</span>
										<span class="type">{{item.info.msg}}</span>
									</li>
								</ul>
								
							</dd>
						</dl>
						<dl :class="{type2:true,padding:true}">
							<dt>办理类型：</dt>
							<dd class="clearfix">
								<span v-for="(item,index) of info.sku_show_list" :class="{cur:item.is_select==1}" @click="tTypeTabFn(index,item.is_select)">{{item.name}}</span>
							</dd>
						</dl>
						<dl class="time" v-if="info.show_type_list!=''" v-for="(item,index) of info.normList">
							<div class="layer" v-show="check==true">请选择{{item.spec_name}}</div>
							<dt>{{item.spec_name}}：</dt>
							<dd class="clearfix">
								<span v-for="(i,ind) of item.specList" :class="{cur:i.is_select==1}" @click="timeTabFn(index,ind,i.is_select)">{{i.spec_attr_name}}</span>
							</dd>
						</dl>
						<dl class="num" v-if="info.cur_sku.sku_buy_status==1&&info.info.is_on_sale==1">
							<dt>购买数量：</dt>
							<dd class="clearfix">
								<span class="reduce" @click="reduceFn">-</span>
								<input type="text" value="1" v-model="num" @blur="blurNum"/>
								<span class="add" @click="addFn">+</span>
							</dd>
						</dl>
						<div class="btn-box clearfix">
							<div class="success-layer" v-show="success==true"><i class="icon-ok"></i>已成功加入购物车！</div>
							<span class="zx-btn" @click="openzxFn">立即咨询</span>
							<span class="add-btn" @click="addCartFn" v-if="info.cur_sku.sku_buy_status==1&&info.info.is_on_sale==1">加入购物车</span>
						</div>
					</div>
				</div>
				<!--商品下架提示-->
				<div class="content3" v-if="empty==true">
					<div class="empty-box clearfix">
						<div class="img"></div>
						<div class="msg">该商品已下架，欢迎挑选其它商品！</div>
					</div>
					<!--商品下架时推荐的服务信息-->
					<div class="tj-list" v-if="empty==true">
						<div class="tj-title">
							<span class="btn-box"  v-if="tjList.length>4">
								<span class="preBtn"  @click="prevFun"><i class="icon-left"></i></span>
								<span class="addBtn" @click="autoPlay"><i class="icon-right"></i></span>
							</span>
							为您推荐
						</div>
						<div class="list-box">
							<ul class="clearfix" :style="{marginLeft:mleft+'px'}">
								<li v-for='(item,index) in recommend' :key='index' @click="getProduct(item.product_id)">
									<div class="img"><img :src="item.product_img"></div>
									<div class="tit">{{item.product_name}}</div>
									<div class="msg" :title="item.product_desc">{{item.product_desc}}</div>
									<div class="price" v-if="item.sku_buy_status == 1">￥{{item.sku_price}}</div>
									<a v-else class="advisory" @click.stop="openzxFn">立即咨询<i class="icon icon-right"></i></a>
								</li>
								<!-- <li>
									<div class="img"><img src="../../static/images/index/active_02.jpg"></div>
									<div class="tit">提供注册商标使用证据 （商标撤三答辩）</div>
									<div class="msg">为国内人申请人提供包括商标...</div>
									<div class="price">￥1590</div>
								</li>
								<li>
									<div class="img"><img src="../../static/images/index/active_02.jpg"></div>
									<div class="tit">提供注册商标使用证据 （商标撤三答辩）</div>
									<div class="msg">为国内人申请人提供包括商标...</div>
									<div class="price">￥1590</div>
								</li>
								<li>
									<div class="img"><img src="../../static/images/index/active_02.jpg"></div>
									<div class="tit">提供注册商标使用证据 （商标撤三答辩）</div>
									<div class="msg">为国内人申请人提供包括商标...</div>
									<div class="price">￥1590</div>
								</li>
								<li>
									<div class="img"><img src="../../static/images/index/active_02.jpg"></div>
									<div class="tit">提供注册商标使用证据 （商标撤三答辩）</div>
									<div class="msg">为国内人申请人提供包括商标...</div>
									<div class="price">￥1590</div>
								</li> -->
							</ul>
						</div>
					</div>
					<!--/商品下架时推荐的服务信息-->
				</div>
				<!--/商品下架提示-->
				<div :class="{aside:true,jHeight:info.normList&&info.normList.length>2,jHeight2:info.act_list&&info.act_list.length>0&&info.normList&&info.normList.length>2}">
					<div class="title">知识产权顾问</div>
					<div class="img-box">
						<span v-if="adviserObj!=null&&adviserObj!=undefined&&adviserObj!=''">
							<img :src="adviserObj.face_photo" v-if="adviserObj.face_photo!=undefined&&adviserObj.face_photo!=''&&adviserObj.face_photo!=null" />
						</span>
					</div>
					<div class="adviser" v-if="adviserObj!=null&&adviserObj!=undefined&&adviserObj!=''">
						<div class="name">{{adviserObj.adv_name}}</div>
						<ul>
							<li><em class="ico icon-phone"></em>{{adviserObj.mobile}}</li>
							<li><em class="ico icon-mail"></em>{{adviserObj.mailbox}}</li>
						</ul>
					</div>
					<div v-else>
						<div class="adviser-msg" v-if="adviserTxt!=''">{{adviserTxt}}</div>
						<a href="javascript:void(0)" class="btn" @click="loginLayerFn" v-else>获取专属知产顾问</a>
					</div>
					<div class="code-box">
						<img src="../../static/images/detail/code.jpg" />
						<div class="msg">扫码关注官方微信</div>
					</div>
				</div>
			</div>
			<div class="main clearfix" v-if="!empty&&info!=''">
				<div class="aside aside2">
					<div class="title2">推荐服务</div>
					<ul class="service-list">
						<li v-for="(item,index) in recommend" :key='index' @click="getProduct(item.product_id)">
							<router-link :to="'/'+item.product_id">	
								<div class="img-box2"><img :src="item.product_img" /></div>
								<div class="name">{{item.product_name}}</div>
								<div class="msg" :title="item.product_desc">{{item.product_desc}}</div>
								<div class="price" v-if="item.sku_buy_status == 1">￥{{item.sku_price}}</div>
							</router-link>
							<a v-if="item.sku_buy_status != 1" class="advisory" @click.stop="openzxFn">立即咨询<i class="icon icon-right"></i></a>
						</li>
						<!-- <li>
							<router-link to="/goods">	
								<div class="img-box2"><img src="../../static/images/detail/code.jpg" /></div>
								<div class="name">商标注册</div>
								<div class="msg">为国内人申请人提供包括商标近似查询......</div>
								<div class="price">￥1590.00</div>
							</router-link>
						</li> -->
					</ul>
				</div>
				<div class="content content2">
					<div class="title2">服务介绍</div>
					<div class="service" v-html="info.cur_sku.service_desc" v-if="info.cur_sku.service_desc!=''&&info.cur_sku.service_desc!=undefined&&info.cur_sku.service_desc!=null">
						{{info.cur_sku.service_desc}}
					</div>
					<div class="service" v-html="info.info.service_desc" v-else>
						{{info.info.service_desc}}
					</div>
				</div>
			</div>
		</div>
	  </div>
	  <bottom></bottom>
  	  <foot></foot>
	  <div class="mask" v-show="layerLogin"></div>
	  <div class="login-layer" v-show="layerLogin">
		  <span class="close" @click="closeLayerFn"><i class="icon-close"></i></span>
		  <div class="box">
			  <div class="input-box clearfix">
				  <span class="ico"><i class="icon-phone"></i></span>
				  <input type="text" class="tel" v-model="tel" placeholder="请输入您的手机号码" maxlength="11" @focus="telFocusFn" />
			  </div>
			  <div class="error"><span v-show="telError">*请输入手机号</span></div>
		  </div>
		  <div class="box">
			  <div class="input-box clearfix">
				  <span class="ico"><i class="icon-code"></i></span>
				  <input type="text" class="code" placeholder="请输入动态码" v-model="code" maxlength="6" @focus="codeFocusFn"/>
				  <span class="code-btn" @click="getCodeFn" v-if="codeBtn">获取动态码</span>
				  <span class="code-btn count" v-else>{{count}}s</span>
			  </div>
			  <div class="error"><span v-show="codeError">*请输入动态码</span></div>
		  </div>
		  <div class="box">
			  <div class="input-box clearfix">
				  <span class="ico"><i class="icon-code2"></i></span>
				  <input type="text" class="code" placeholder="请输入验证码" v-model="code2" maxlength="6" @focus="code2FocusFn"/>
				  <span class="code-btn"  @click="getImgtoken"><img :src="imgsrc"></span>
			  </div>
			  <div class="error"><span v-show="code2Error">*请输入验证码</span></div>
		  </div>
		  <div class="box btn-box">
			  <a href="javascript:void(0)" class="get-btn" @click="submitFn">登录</a>
		  </div>
	  </div>
    </div>
</template>
<script>
import fixedPart from '../../components/index/fixed.vue'
import top from '../../components/common/top.vue'
import headPart from '../../components/common/head.vue'
import navigate from '../../components/common/nav.vue'
import bottom from '../../components/common/bottom.vue'
import foot from '../../components/common/foot.vue'
import {count_down,postFn,setCookie,openzx,noRepeat,flyFn,getCookie} from '../../static/js/util.js'
import Api from '../../static/js/api.js'
// import sharePart from 'vue-social-share'
import {mapActions,mapState} from 'vuex'
import Api2 from '../../static/js/api2.js'
import Axios from 'axios'

import { GET_DETAILINFO } from './module-detail'
import { GET_DETAILRECOMMEND } from './module-detail'
import { GET_DETAILDATA } from './module-detail'
export default {
	asyncData(_ref) {
        if(_ref!=undefined){
			let store=_ref.store;
			let route=_ref.route;
			return Promise.all([
				store.dispatch("getServiceCate"),
				store.dispatch(GET_DETAILDATA,route),
			])
		}else{
            window.location.reload()
        }
    },
 metaInfo () {
	return {
		title: this.productName+'_'+this.towKinds+'_'+this.oneKinds+'-创新科技服务云平台',
		meta: [{
			name: 'description',
			content: '创新科技服务云平台专业为您提供'+this.productName+','+this.towKinds+','+this.oneKinds+',专业顾问为您一对一贴心办理,费用透明,流程简单,成功率高!'
		},{
			name: 'keywords',
			content: this.productName+','+this.towKinds+','+this.oneKinds
		}]
	}
},
  data(){
  	return{
		id:'',   //商品ID
		collect:false,   //是否已收藏
		// info:'', //商品详情数据
		adviser:false,
		share:false,     //分享弹层是否显示
		spSlide:true,   //促销展开or收起
		typeSlide:true,	//案件类型展开or收起
		num:1,     //商品数量
		tel:'',
		code:'',
		code2:'',
		telError:false,    //手机号是否输入错误：true为错误
		codeError:false,    //动态码是否输入错误：true为错误
		code2Error:false,
		layerLogin:false,
		count:60, 
		codeBtn:true,    //默认显示“获取动态码”按钮点击后此按钮消失显示倒计时按钮    
		imgsrc:'',
		empty:false,   //商品是否下架true为已下架
		currentIndex: 0,  
		mleft: 0,
		tjList:[],   // 推荐的服务
		loading:false,    //数据是否加载成功
		phptoken:'',
		spec:true,   //是否选中规格
		check:false,
		adviserTxt:'',
		adviserObj:null,
		success:false,
		config:{
			url:'',
			source:'',
			title:'',
			image:'',
			description:'',
			disabled:['google', 'facebook', 'twitter','tencent','douban','linkedin','diandian']
		},
		specArr:[],   //切换SKU接口传往服务器的规格串
		normArr:[],    //选中的规格属于哪一项
		// recommend:'',//推荐服务数据
		// sku:'',//sku规则
		// productName:'',  //商品名称
		// towKinds:'',  	//二级类目 
		// oneKinds:'',   //一级类目
  	}
  },
 computed:{
	 ...mapState(["userInfo","isLogin"]),
	 productName(){
		 return this.$store.state.serviceDetail.detailProductName;
	 },
	 towKinds(){
		 return this.$store.state.serviceDetail.detailOneKinds;
	 },
	 oneKinds(){
		 return this.$store.state.serviceDetail.detailTowKinds;
	 },
	 info(){
		 //商品详情数据
		return this.$store.state.serviceDetail.detailInfo;
	 },
	 recommend(){
		//推荐服务数据
		return this.$store.state.serviceDetail.detailRecommend;
	 },
	 sku(){
		 return this.$store.state.serviceDetail.detailSku;
	 },
	 configTitle(){
		  return this.$store.state.serviceDetail.config.title;
	 },
	 configDescription(){
		  return this.$store.state.serviceDetail.config.description;
	 },
	 configImage(){
		  return this.$store.state.serviceDetail.config.image;
	 },
	 configUrl(){
		 return window.location.href;
	 }
 },
 mounted () {
	 this.config.url=window.location.href;
 },
  methods: {
	...mapActions(['update_userInfo','update_num','update_isLogin']),
	autoPlay() {
		const that = this;
		if(this.tjList.length - this.currentIndex > 5){
			this.currentIndex++;
			var i = 0;
			var _this = this;
			var t = setInterval(function(){
				if(i<240){
					i+=10; 
					_this.mleft -= 10;
				}else{
					clearInterval(t);
				}
		},10);
		}
		this.page++
		this.getListFn()
	},
	prevFun(){
		if(this.currentIndex > 0){
			this.currentIndex--;
			var i = 240;
			var _this = this;
			var t = setInterval(function(){
				if(i>0){
					i-=10;
					_this.mleft += 10;
				}else{
					clearInterval(t);
				}
			},10);
		}	
	},
	spSlideFn(){
		//促销展开OR收起
		this.spSlide = !this.spSlide
	},
	openzxFn(){
		//打开商务通
		openzx()
	},
	tTypeTabFn(index,el){
		//办理类型切换
		const that = this;
		that.specArr = []   //初始化SKU切换接口的sku_spec_str值
		that.normArr = []
		this.tTypeIndex = index
		var data = {
			sku_show:that.info.sku_show_list[index].name,
			product_id:that.info.info.product_id,
			sku_spec_str:''
		}
		if(el!=1){
			postFn('/product/product/changeSku',data,function(res){
				console.log(res)
				if(res.data.code==200){
					that.sku="";
					var info = res.data.data,arr = [],normList = [];
					if(info.show_type_list!=''){
						for( var x in info.show_type_list){
							normList.push(info.show_type_list[x])
							for(var j=0; j<normList.length; j++){
								normList[j].index = j
							}
							info.normList = normList
						}
						for(var y=0; y<info.normList.length; y++){
							info.normList[y].specList = [];
							for(var n in info.normList[y].values){
								info.normList[y].specList.push(info.normList[y].values[n])
							}
						}
					}else{
						that.info.normList = []
					}
					that.info.normList = info.normList
					if(info.cur_sku!=''){
						that.spec = true
						// that.info = info
						that.$store.dispatch(GET_DETAILINFO,info);
						//获取商品名称开始
						// if(that.info.cur_sku.sku_name!=''&&that.info.cur_sku.sku_name!=undefined&&that.info.cur_sku.sku_name!=null){
						// 	that.productName = that.info.cur_sku.sku_name
						// }else{
						// 	that.productName = that.info.info.product_name
						// }
						//获取商品名称结束
					}else{
						that.spec = false
						// that.info = info
						that.$store.dispatch(GET_DETAILINFO,info);
						// that.info.sku_show_list = info.sku_show_list
						// that.info.show_type_list = info.show_type_list
						
					}	
					that.index=index;
				}
				console.log(that.info,"=>that.info");
			})
		}
	},
	timeTabFn(index,ind,el){
		//规格切换
		const that = this;
		if(that.info.normList[index].specList[ind].is_select==2){
			if(that.specArr.length){
				if(that.normArr[that.normArr.length-1]>index){
					that.specArr.splice(that.specArr.length-1,1)
				}
				if(index==0){
					that.specArr = []
					that.normArr = []
				}
			}
			that.specArr.push(that.info.normList[index].specList[ind].spec_group_str)
			that.normArr.push(index)
			that.specArr = noRepeat(that.specArr)
		}
		for(var i=0;i<that.info.sku_show_list.length; i++){
			if(that.info.sku_show_list[i].is_select==1){
				var data = {
					sku_show:that.info.sku_show_list[i].name,
					product_id:that.info.info.product_id,
					sku_spec_str:that.specArr + ''
				}
				if(el!=1){
					postFn('/product/product/changeSku',data,function(res){
						console.log(res)
						if(res.data.code==200){
							var info = res.data.data,arr = [],normList = [];
							if(info.cur_sku==''||info.cur_sku.length==0){
								that.spec = false
							}else{
								that.spec = true
							}
							if(info.show_type_list!=''){
								for( var x in info.show_type_list){
									normList.push(info.show_type_list[x])
									for(var j=0; j<normList.length; j++){
										normList[j].index = j
									}
									info.normList = normList
								}
								for(var y=0; y<info.normList.length; y++){
									info.normList[y].specList = [];
									for(var n in info.normList[y].values){
										info.normList[y].specList.push(info.normList[y].values[n])
									}
								}
							}
							// that.info = info
							that.$store.dispatch(GET_DETAILINFO,info);
							//获取商品名称开始
							// if(that.info.cur_sku.sku_name!=''&&that.info.cur_sku.sku_name!=undefined&&that.info.cur_sku.sku_name!=null){
							// 	that.productName = that.info.cur_sku.sku_name
							// }else{
							// 	that.productName = that.info.info.product_name
							// }
							//获取商品名称结束
						}
					})
				}
			}
		}
	},
	shareFn(){
		//分享层显示
		this.share = true
	},
	closeShare(){
		//关闭分享层
		this.share = false
	},
	reduceFn(){
		//减少商品数量
		if(this.num>=2){
			this.num--
		}
	},
	blurNum(){
		if(this.num==0){
			this.num=1;
		}
	},
	addFn(){
		//增加商品数量 
		this.num++
	},
	telFocusFn(){
		//手机号输入框获取焦点时错误提示消失
		this.telError = false
	},
	codeFocusFn(){
		//动态码输入框获取焦点时错误提示消失
		this.codeError = false
	},
	code2FocusFn(){
		//图形验证输入框获取焦点时错误提示消失
		this.code2Error = false
	},
	loginLayerFn(){
		//打开登录弹层
		if(this.userInfo!=''){
			this.getAdviser()
		}else{
			this.layerLogin = true
		}
	},
	closeLayerFn(){
		//关闭登录弹层
		this.layerLogin = false
		this.count = 60
		this.codeBtn = true
		this.tel = ''
		this.code = ''
		this.telError = false
	},
	getCodeFn(){
		//获取短信验证码
		const reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g,that = this,total_micro_second = 60;
		if(!reg.test(that.tel)){
			this.telError = true
		}else{
			that.codeBtn = false
			count_down(that,total_micro_second);
			var data = {
				tel:that.tel
			}
			postFn('/user/user/login/sms',data,function(res){
				if(res.data.code==200){
				}else{
					console.log('发送失败')
				}
			})
		}
	},
	submitFn(){
		//登录表单提交
		const reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g,
			that = this;
		if(!reg.test(that.tel)){
		that.telError = true
		}else{
			var data = {
				tel:that.tel,
				smscode:that.code,
				captcha:that.code2,
				token:that.phptoken
			}
			postFn('/user/user/login/smslogin',data,function(res){
				if(res.data.code==516){
					that.codeError = true
				}else if(res.data.code==515){
					that.code2Error = true
				}else if(res.data.code==200){
					that.update_userInfo(res.data.data)
					that.update_isLogin(true)
					setCookie('token',res.data.data.Authorization,1);
					let AUTH_TOKEN = (function() {
						return getCookie("token");
					})();
					Axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
					that.cartNumFn()
					that.layerLogin = false
					that.count = 60
					that.codeBtn = true
					that.tel = ''
					that.code = ''
					that.telError = false
					console.log('登录成功')
					that.getAdviser()
					if(that.userInfo.adviser!=''&&that.userInfo.adviser!=null&&that.userInfo.adviser!=undefined&&that.userInfo.adviser!='apply'){
						that.getNumberAdviser(that.userInfo.adviser)   //登录状态判断该用户是否有专属顾问
					}
				}else{
					console.log('登录失败')
				}
			})
		}
	},
	collectFn(){
		//收藏商品
		const that = this;
		if(that.userInfo!=''){
			if(that.collect==false){
				const data = {
					type:1,
					collect_id:that.id
				}
				postFn('/user/user/collect/add',data,function(res){
					if(res.data.code==200){
						that.collect = true
						console.log('收藏成功')

					}else{
						console.log(res)
					}
				})
			}
		}else{
			that.$router.push('/login?product_id='+that.id)
		}
	},
	cancelCollectFn(){
		//取消收藏商品
		const that = this;
		if(that.collect==true){
			const data = {
				collect_id:that.id,
				type:1
			}
			postFn('/user/user/collect/del',data,function(res){
				if(res.data.code==200){
					console.log('取消收藏成功')
					that.collect = false
				}else{
					console.log(res)
					that.collect = true
				}
			})
		}
	},
	getImgtoken(){
		//图形验证码
		Api.getLogToken().then(res=>{
			this.phptoken=res.data.data.token;
			this.imgsrc="https://kong.gbicom.com:8443/user/user/login/captcha?token="+this.phptoken+"&apikey=ZlEqSzeQo1xEo0W3Rqh7t3x8d77UwR3O"
		})
	},
	addCartFn(e){
		//添加购物车
		console.log(e)
		const that = this;
		if(that.userInfo!=''){
			if(that.spec==false){
				that.check = true
				setTimeout(function(){
					that.check = false
				},3000)
			}else{
				that.check = false
				var data = {
					uid:that.userInfo.id,
					product_id:that.id,
					sku_id:that.info.cur_sku.sku_id,
					num:that.num
				}
				postFn('/product/cart/add',data,function(res){
					if(res.data.code==200){
						console.log('加入购物车成功')
						$(window).scrollTop(0);
						flyFn()
						var offset = $(".icon.icon-cart").offset();
						var img = that.config.image
						var flyer = $('<img class="u-flyer" src="'+img+'"style="background:white; width:90px; height:90px;">');
						$(window).resize(site);
						function site() {
							$(window).scrollTop(0);
							offset=$('.icon.icon-cart').offset();
						}
						flyer.fly({
							start: {
								left: e.pageX,
								top: e.pageY,
							},
							end: {
								left: offset.left+10,
								top: offset.top-10,
								width: 0,
								height: 0
							}
						});
						that.$message({
							message: '恭喜你,已成功加入购物车！',
							type: 'success',
							duration:1500,
						});
						/////////
						// that.success = true
						// setTimeout(function(){
						// 	that.success = false
						// },3000)
						//加入购物车成功后获取购物车列表的数量
						that.cartNumFn()
					}else{
						console.log(res)
					}
				})
			}
		}else{
			that.$router.push('/login?product_id='+that.id)
		}
	},
	cartNumFn(){
		//修改购物车数量
		const that = this;
		if(that.userInfo!=''){
			const data = {
				uid:that.userInfo.id
			}
			postFn('/product/cart/cart_num',data,function(res){
				if(res.data.code==200){
					if(res.data.data){
						that.update_num(res.data.data)
					}
				}
			})
		}
	},
	getAdviser(){
		//获取顾问
		const that = this;
		postFn('/user/user/userinfo/applyadviser','',function(res){
			console.log(res)
			if(res.data.code==200){
				that.adviserTxt = '系统正在为您分配顾问请耐心等待'
			}else if(res.data.code==542||res.data.code==541){
				that.adviserTxt = '系统正在为您分配顾问请耐心等待'
			}else{
				that.adviserTxt = ''
			}
		})
	},
	getNumberAdviser(num){
		//根据工号获取顾问
		const that = this;
		var data = {
			job_number:num
		}
		postFn('/sundry/adviser/adv_info',data,function(res){
			if(res.data.code==200){
				that.adviserObj = res.data.data
				// if(!res.data.data.length||res.data.data==''){
				// 	that.adviserTxt = '系统正在为您分配顾问请耐心等待'
				// }else{
				// 	that.adviserObj = res.data.data
				// }
			}
		})
	},
	getRecommend(el){
		//获取推荐文章  
		if(el==undefined){  
			var data={
				cat_id:this.info.cat_info.child.cat_id,
				parent_cat_id:this.info.cat_info.cat_id,
				num:5,
				exclusive_product_id:this.id,
			}
		}else{
			var data={
				cat_id:this.info.cat_info.child.cat_id,
				parent_cat_id:this.info.cat_info.cat_id,
				num:5,
				exclusive_product_id:el,
			}
		}
		Api2.postRecommend(data).then(res=>{
			if(res.data.code==200){
				// this.recommend=res.data.data;
				this.$store.dispatch(GET_DETAILRECOMMEND,res.data.data);
			}
		})
	},
	getRecommendSkunone(agu){
		//商品下架获取推荐文章
		if(agu!=''){ 
			var data={
				cat_id:agu.cat_info.child.cat_id,
				parent_cat_id:agu.cat_info.cat_id,
				num:5,
			}
		}else{
			data={
				num:5,
			}
		}
		Api2.postRecommend(data).then(res=>{
			if(res.data.code==200){
				// this.recommend=res.data.data;
				this.$store.dispatch(GET_DETAILRECOMMEND,res.data.data);
			}
		})
	},
	getProduct(el){
		this.$router.push('/'+el);
		setTimeout(() => {
			window.location.reload();
		}, 1000);
		
		// const that = this;
		// that.specArr = []
		// 	// el = that.$route.params.id   //获取商品ID
		// 	this.getImgtoken()  //获取图形验证码
		// 	var data = {
		// 		product_id:el
		// 	}
		// 	that.loading = false
			//获取商品详细信息
		// 	postFn('/product/product/detail',data,function(res){
		// 		console.log(res,"商品详情")
		// 		if(res.data.code==200){
		// 			that.loading = true
		// 			//添加足迹
		// 			if(that.userInfo!=''&&that.isLogin){
		// 				console.log('我登录啦')
		// 				that.cartNumFn()   //登录状态获取购物车商品数量
		// 				if(that.userInfo.adviser!=''&&that.userInfo.adviser!=null&&that.userInfo.adviser!=undefined&&that.userInfo.adviser!='apply'){
		// 					that.getNumberAdviser(that.userInfo.adviser)   //登录状态判断该用户是否有专属顾问
		// 				}
		// 				if(!(that.userInfo.adviser!='apply')){    //判断该用户是否获取过顾问信息
		// 					that.adviserTxt = '系统正在为您分配顾问请耐心等待'
		// 				}else{
		// 					that.adviserTxt = ''
		// 				}
		// 				var footprint = {
		// 					footprint_id:el
		// 				}
		// 				//登录状态添加足迹
		// 				postFn('/user/user/footprint/add',footprint,function(r){
		// 					if(r.data.code==200){
		// 						console.log('添加足迹成功')
		// 					}else{
		// 						console.log(r)
		// 					}
		// 				})
		// 				const collectData = {
		// 					type:1,
		// 					collect_id:el
		// 				}
		// 				//登录状态判断这个商品是否收藏过
		// 				postFn('/user/user/collect/checkcollect',collectData,function(r){
		// 					if(r.data.code==531){
		// 						that.collect = true
		// 					}else{
		// 						that.collect = false
		// 					}
		// 				})
		// 			}else{
		// 				console.log(that.adviserObj,"=>that.adviserObj");
		// 				that.adviserObj='';
		// 				that.adviserTxt='';
		// 			}
		// 			var info = res.data.data,arr = [],normList = [];
		// 			if(info.show_type_list!=''){
		// 				for( var x in info.show_type_list){
		// 					normList.push(info.show_type_list[x])
		// 					for(var j=0; j<normList.length; j++){
		// 						normList[j].index = j
		// 					}
		// 					info.normList = normList
		// 				}
		// 				for(var y=0; y<info.normList.length; y++){
		// 					info.normList[y].specList = [];
		// 					for(var n in info.normList[y].values){
		// 						info.normList[y].specList.push(info.normList[y].values[n])
		// 					}
		// 				}
		// 			}
		// 			// that.info = info
		// 			that.$store.dispatch(GET_DETAILINFO,info);
		// 			//获取商品名称开始
		// 			// if(that.info.cur_sku.sku_name!=''&&that.info.cur_sku.sku_name!=undefined&&that.info.cur_sku.sku_name!=null){
		// 			// 	that.productName = that.info.cur_sku.sku_name
		// 			// }else{
		// 			// 	that.productName = that.info.info.product_name
		// 			// }
		// 			// that.config.url=window.location.href;
		// 			// that.towKinds = that.info.cat_info.child.cat_name
		// 			// that.oneKinds = that.info.cat_info.cat_name
		// 			that.config.description = '创新科技服务云平台专业为您提供'+that.productName+','+that.towKinds+','+that.oneKinds+',专业顾问为您一对一贴心办理,费用透明,流程简单,成功率高!'
		// 			that.config.title = that.productName
		// 			that.config.image = that.info.info.product_img
		// 			//获取商品名称结束
		// 			if(that.info.act_list.length==0){
		// 				that.postSkuId();
		// 			}
		// 			that.empty = false
		// 			that.getRecommend(el);
		// 		}else{
		// 			that.empty = true
		// 			that.getRecommendSkunone(res.data.data);
		// 			that.loading = true
		// 		}
		// 	})
	},
	togoods(el){
		console.log(el);
		this.$router.push('/'+el)
		this.getProduct(el);
	},
	postSkuId(){
		//发送skuId
		Api2.postskuId(this.info.cur_sku.sku_id).then(res=>{
			this.sku=res.data.data;
		})
	}
 },
 components: {
	fixedPart,
	top,
	headPart,
	bottom,
	navigate,
	foot,
	// sharePart
 },
 beforeMount() {
   // 只会在浏览器执行 
   
   this.$options.components.sharePart = resolve => require(['vue-social-share'], resolve);
   
  },
 created(){
	const that = this;
	that.specArr = []
	if(this.$route.params.id!=undefined&&this.$route.params.id!=null&&this.$route.params.id!=''){
		this.id = this.$route.params.id  //获取商品ID
		this.getImgtoken()  //获取图形验证码
		var data = {
			product_id:that.id
		}
		that.loading = false
		//获取商品详细信息
		if(that.info!=''){
			that.loading = true;
			if(that.userInfo!=''&&that.isLogin){
				that.cartNumFn()   //登录状态获取购物车商品数量
				if(that.userInfo.adviser!=''&&that.userInfo.adviser!=null&&that.userInfo.adviser!=undefined&&that.userInfo.adviser!='apply'){
					that.getNumberAdviser(that.userInfo.adviser)   //登录状态判断该用户是否有专属顾问
				}
				if(!(that.userInfo.adviser!='apply')){    //判断该用户是否获取过顾问信息
					that.adviserTxt = '系统正在为您分配顾问请耐心等待'
				}else{
					that.adviserTxt = ''
				}
				var footprint = {
					footprint_id:that.id
				}
				//登录状态添加足迹
				postFn('/user/user/footprint/add',footprint,function(r){
					if(r.data.code==200){
						console.log('添加足迹成功')
					}else{
						console.log(r)
					}
				})
				const collectData = {
					type:1,
					collect_id:that.id
				}
				//登录状态判断这个商品是否收藏过
				postFn('/user/user/collect/checkcollect',collectData,function(r){
					if(r.data.code==531){
						that.collect = true
					}else{
						that.collect = false
					}
				})
			}
			that.config.description = that.configDescription
			that.config.title = that.configTitle
			that.config.image = that.configImage
		}
		

		
		// postFn('/product/product/detail',data,function(res){
		// 	console.log(res,"商品详情")
		// 	if(res.data.code==200){
		// 		that.loading = true
		// 		//添加足迹
		// 		if(that.userInfo!=''&&that.isLogin){
		// 			that.cartNumFn()   //登录状态获取购物车商品数量
		// 			if(that.userInfo.adviser!=''&&that.userInfo.adviser!=null&&that.userInfo.adviser!=undefined&&that.userInfo.adviser!='apply'){
		// 				that.getNumberAdviser(that.userInfo.adviser)   //登录状态判断该用户是否有专属顾问
		// 			}
		// 			if(!(that.userInfo.adviser!='apply')){    //判断该用户是否获取过顾问信息
		// 				that.adviserTxt = '系统正在为您分配顾问请耐心等待'
		// 			}else{
		// 				that.adviserTxt = ''
		// 			}
		// 			var footprint = {
		// 				footprint_id:that.id
		// 			}
		// 			//登录状态添加足迹
		// 			postFn('/user/user/footprint/add',footprint,function(r){
		// 				if(r.data.code==200){
		// 					console.log('添加足迹成功')
		// 				}else{
		// 					console.log(r)
		// 				}
		// 			})
		// 			const collectData = {
		// 				type:1,
		// 				collect_id:that.id
		// 			}
		// 			//登录状态判断这个商品是否收藏过
		// 			postFn('/user/user/collect/checkcollect',collectData,function(r){
		// 				if(r.data.code==531){
		// 					that.collect = true
		// 				}else{
		// 					that.collect = false
		// 				}
		// 			})
		// 		}
		// 		var info = res.data.data,arr = [],normList = [];
		// 		if(info.show_type_list!=''){
		// 			for( var x in info.show_type_list){
		// 				normList.push(info.show_type_list[x])
		// 				for(var j=0; j<normList.length; j++){
		// 					normList[j].index = j
		// 				}
		// 				info.normList = normList
		// 			}
		// 			for(var y=0; y<info.normList.length; y++){
		// 				info.normList[y].specList = [];
		// 				for(var n in info.normList[y].values){
		// 					info.normList[y].specList.push(info.normList[y].values[n])
		// 				}
		// 			}
		// 		}
		// 		// that.info = info
		// 		// that.$store.dispatch(GET_DETAILINFO,info);
		// 		//获取商品名称开始
		// 		// if(that.info.cur_sku.sku_name!=''&&that.info.cur_sku.sku_name!=undefined&&that.info.cur_sku.sku_name!=null){
		// 		// 	that.productName = that.info.cur_sku.sku_name
		// 		// }else{
		// 		// 	that.productName = that.info.info.product_name
		// 		// }
		// 		// that.towKinds = that.info.cat_info.child.cat_name
		// 		// that.oneKinds = that.info.cat_info.cat_name
		// 		that.config.description = '创新科技服务云平台专业为您提供'+that.productName+','+that.towKinds+','+that.oneKinds+',专业顾问为您一对一贴心办理,费用透明,流程简单,成功率高!'
		// 		that.config.title = that.productName
		// 		that.config.image = that.info.info.product_img
		// 		//获取商品名称结束
		// 		if(that.info.act_list.length==0){
		// 			that.postSkuId();
		// 		}
		// 		that.empty = false
		// 		// that.getRecommend();
		// 	}else{
		// 		that.empty = true
		// 		// that.getRecommendSkunone(res.data.data);
		// 		that.loading = true
		// 	}
		// })
	}else{
		this.$router.push('/')
	}
	
 }
}
</script>

<style lang="scss">
$hover:#e52e3a;
$cur:#FF3342;
.bg{
	background: #fafafa;
}
.loading{
	line-height: 150px;text-align: center;font-size: 30px;
}
.success-layer{
	width:300px;height: 60px;line-height: 60px;text-align: center;position:absolute;z-index:50;font-size: 18px;
	left:20px;top:-30px;box-shadow: 0 2px 2px 0 rgba(0,0,0,0.08);background:#fff;border-radius:4px;
	border:1px solid #eee;
	i{
		font-size: 30px;vertical-align: middle;color:green;margin-right: 8px;
	}
}
.detail{
	font-size: 14px;
	.mask{
		background:rgba(0,0,0,0.5);position: fixed;width:100%;
		height: 100%;z-index: 50;left:0;top:0;
	}
	.login-layer{
		width:438px;background:#fff;padding:65px 0 60px;
		border-radius: 10px;position: fixed;z-index: 51;
		left:50%;top:50%;margin:-135px 0 0 -219px;
		.close{
			position: absolute;right:-8px;top:-8px;cursor: pointer;
			color:#ccc;
			i{
				font-size: 68px;
			}
		}
		.box{
			width:285px;margin:0 auto;
			.error{
				height:20px;line-height: 16px;font-size: 12px;color:#f33;
			}
			.input-box{
				span,input{
					float: left;
				}
				.ico{
					width:36px;height:36px;background: #ccc;color:#fff;border:1px solid #ccc;
					i{
						font-size: 40px;line-height:36px;
						&.icon-phone{
							margin-left:-2px;
						}
						&.icon-code{
							font-size: 30px;margin-left:3px;
						}
						&.icon-code2{
							font-size: 22px;margin-left:7px;
						}
					}
				}
				input{
					border:1px solid #ccc;height:36px;line-height: 36px;border-left: none;
					padding:0 10px;
					&.tel{
						width:225px;
					}
					&.code{
						width:114px;
					}
				}
				.code-btn{
					line-height: 36px;border:1px solid #ccc;text-align: center;color:#ff3333;width:101px;margin-left:8px;cursor: pointer;
					img{
						width:101px;height:36px;
					}
					&.count{
						color:#666;
					}
				}
			}
			&.btn-box{
				.get-btn{
					display: block;width:284px;height:38px;line-height: 38px;text-align: center;font-size: 18px;
					color:#fff;background:$hover;border-radius:2px;
					&:hover{
						background: $cur;
					}
				}
			}
		}

	}
	.crumbs{
		height: 56px;padding-bottom: 10px;
		line-height: 56px;font-size: 12px;
		a{
			color:#666;
			&:hover{
				color:$hover;
			}
		}
	}
	.empty{height: 20px;}
	.main{
		padding-bottom: 20px;
		.content{
			width:950px;
			.option1,.option2{
				float: left;padding-top: 20px;
			}
			.option1{
				width:210px;padding-left:20px;
				.img-box{
					width:209px;height: 209px;border:1px solid #eee;text-align:center;line-height:209px;
					img{
						width:135px;height: 135px;
					}
				}
				li{
					float: left;font-size: 12px;color:#999;line-height: 36px;padding-right:25px;position: relative;
					.collect,.shareBtn{
						&:hover,&.cur{
							color:$hover;
						}
						.layer{
							color: #999;
						}
					}
					.collect2{
						color: #999;
						.collectRed{
							color:red;
						}
					}
					cursor: pointer;
					.ico{
						font-size:28px;vertical-align: middle;
					}
					.layer{
						width:104px;height:54px;border:1px solid #eee;cursor: default;
						position: absolute;padding:2px 10px;left:0;top:34px;color: #999;
						&:hover{
							color:#999;
						}
						.code-layer{
							position: absolute;box-shadow: 0 0 10px #e1e1e1;width:200px;background: #fff;
							z-index: 10;padding-bottom:20px;right:-220px;top:0;
							.tit{
								line-height: 45px;text-align: center;font-size: 16px;color:#333;
							}
							.img{
								text-align: center;
								img{
									height:150px;width:150px;
								}
							}
						}
						.con{
							padding:4px 0;
							.social-share-icon{
								width:18px;height:20px;display: inline-block;cursor: pointer;vertical-align: middle;
								background: url(../../static/images/detail/ico.png) no-repeat;text-indent: -999px;
								margin-right: 5px;
								&.icon-weibo{
									background-position: left -60px;
								}
								&.icon-wechat{
									background-position: left -40px;position: relative;
									.wechat-qrcode{
										width:220px;height:220px;background:#fff;border:1px solid #eee;z-index:40;display: none;
										position: absolute;right:-300px;top:-28px;
										.qrcode{
											text-align: center;
											img{
												margin:0 auto;
											}
										}
										h4{line-height: 50px;}
										h4,.help{text-indent: 0;text-align: center;}
										.help{
											padding: 10px 0 0 0;font-size:12px;
											p{line-height: 20px;}
										}
									}
									&:hover{
										color:#333;
										.wechat-qrcode{
											display: block;
										}
									}
								}
								&.icon-qzone{
									background-position: left -20px;
								}
							}
						}
						.close{
							color:#ccc;position: absolute;top:-5px;right:-5px;cursor: pointer;
							i{
								font-size: 30px;
							}
						}
						.triangle{
							display: block;width:8px;height:4px;position: absolute;
							background: url(../../static/images/detail/ico.png) no-repeat left -80px;
							left:36px;top:-4px;
						}
					}
				}
			}
			.option2{
				width: 650px;padding: 20px 30px 0 40px;
				dt{
					color:#666;width:100px;text-align: justify;text-align-last: justify;
				}
				dd{
					width:515px;padding-left:10px;
				}
				dt,dd{
					display: inline-block;vertical-align: top;
				}
				.title{
					font-size: 26px;padding-bottom: 10px;
				}
				.msg{
					border-top:1px dotted #ddd;border-bottom: 1px dotted #ddd;
					padding:6px 0;line-height: 20px;color:#999;
					&.padding{
						margin-bottom: 20px;
					}
				}
				.price{
					dt,dd{
						line-height: 56px;
					}
					dd{
						color:$hover;font-weight: bold;font-size: 24px;
						.empty{
							color:#333;font-size: 16px;font-weight: normal;
						}
					}
				}
				.sp,.type1,.type2,.time,.num{
					padding-bottom: 10px;
				}
				.type2.padding{
					padding-top:20px;
				}
				.sp,.type1{
					position: relative;
				}
				.sp{
					border-bottom:1px dotted #ddd;
					.more{
						position: absolute;line-height: 20px;font-size: 12px;cursor: pointer;
						bottom: 0px;right:0;width:50px;text-align: right;color:#999;
						.ico{
							font-size: 25px;vertical-align: middle;
						}
					}
					dt{line-height: 20px;}
					dd{
						li{
							height:20px;line-height: 20px;padding-bottom: 10px;font-size:12px;overflow: hidden;text-overflow:ellipsis;white-space:nowrap;
							.name{
								display: inline-block;background: $hover;
								color:#fff;padding:0 9px;line-height: 20px;
							}
							.status{
								color:$hover;padding:0 6px;
							}
							.type{
								color:#ff8800;
							}
						}
						&.overflow{
							max-height:90px;overflow: hidden;
						}
					}
				}
				.type1{
					padding-top: 20px;
					.more{
						position: absolute;line-height: 30px;font-size: 12px;cursor: pointer;
						right:0;width:50px;text-align: right;color:#999;top:20px;
						.ico{
							font-size: 25px;vertical-align: middle;
						}
					}
					dt{
						line-height: 30px;
					}
					dd{
						span{
							display: block;padding:0 17px;line-height: 28px;float: left;height: 28px;
							border:1px solid #eee;margin:0 10px 10px 0;cursor: pointer;
							&.cur,&:hover{
								border:1px solid $hover;color: $hover;
							}
						}
						&.overflow{
							height:40px;overflow: hidden;
						}
					}
				}
				.type2,.time{
					dt{
						line-height: 36px;
					}
					dd{
						span{
							display: block;line-height: 34px;border:1px solid #eee;text-align: center;padding:0 10px;min-width: 108px;
							margin:0 10px 10px 0;cursor: pointer;float: left;height: 34px;
							&.cur,&:hover{
								border:1px solid $hover;color: $hover;
							}
						}
					}
				}
				.time{
					position: relative;
					.layer{
						position: absolute;background: rgba(0,0,0,0.7);border-radius: 3px;width:150px;height:40px;line-height: 40px;
						text-align: center;color:#fff;left:95px;top:0;
					}
				}
				.num{
					dt{line-height: 30px;}
					dd{
						.add,.reduce,input{
							float: left;text-align: center;line-height: 28px;font-size: 16px;
						}
						.add,.reduce{
							border:1px solid #eee;width: 28px;color:#999;cursor: pointer;
						}
						input{
							border:none;border-top: 1px solid #eee;border-bottom: 1px solid #eee;width:60px;
						}
					}
				}
				.btn-box{
					padding-top: 10px;position: relative;
					span{
						width:180px;display: block;float: left;height:46px;line-height: 46px;border-radius: 2px;
						text-align: center;margin-right:40px;font-size:20px;cursor: pointer;
						&.zx-btn{
							background: $hover;color:#fff;border:1px solid $hover;
							&:hover{
								background:$cur;
							}
						}
						&.add-btn{
							background: #ffe5e7;border:1px solid $hover;color:$hover;color:$hover;
							&:hover{
								background:$cur;color:#fff;
							}
						}
					}
				}
			}
		}
		.aside{
			width:230px;margin-left:10px;text-align: center;
			.adviser-msg{
				font-weight: bold;padding:10px 40px 20px;line-height: 22px;
			}
			&.aside2{
				margin:0 10px 0 0;
			}
			.title{
				background: #f0f0f0;
				font-size: 24px;
				line-height: 48px;
			}
			.img-box{
				margin:38px auto 0;
				width:114px;height:122px;
				overflow: hidden;
				background: url(../../static/images/detail/adviser.png) no-repeat;
				img{
					width:114px;
				}
			}
			.adviser{
				padding-bottom: 12px;
				.name,li{
					font-size: 16px;
				}
				.name{
					line-height: 34px;padding-bottom: 8px;
				}
				li{

					.ico{
						font-size: 30px;vertical-align: middle;
						position: relative; top:-2px;
					}
					height: 26px;line-height: 26px;overflow: hidden;
				}
			}
			.btn{
				display: inline-block;width:150px;height:36px;line-height: 36px;margin:18px 0 30px;
				color: #fff;background: $hover;border-radius: 2px;
				&:hover{
					background: $cur;
				}
			}
			.code-box{
				color:#999;
			}
		}
		.content,.aside{
			float: left;background: #fff;min-height:477px; padding-bottom: 40px; box-sizing: border-box; 
			&.jHeight{
				height: 660px;
			}
			&.jHeight2{
				height: 720px;
			}
		}
		.content3{
			float: left;width:950px;
			.empty-box{
				padding:50px 0 0 240px;background: #fff;height:260px;
				.img,.msg{float: left;}
				.img{
					width:148px;height: 148px;background: url(../../static/images/detail/empty.png) no-repeat;
				}
				.msg{
					line-height: 148px;padding-left: 38px;font-size: 16px;
				}
			}
			.tj-list{
				.tj-title{
					height:40px;line-height: 40px;font-size: 16px;padding:0 20px;background: #f0f0f0;margin-top:10px;
					.btn-box{
						float: right;line-height: 40px;
						.preBtn,.addBtn{
							display: inline-block;height: 40px;vertical-align: top;line-height: 40px;cursor: pointer;
							i{
								font-size: 18px;
							}
						}
						.preBtn{margin-right:10px;}
					}
				}
				.list-box{
					padding-top:10px;overflow: hidden;
					ul{
						width:10000px;
						li{
							float: left;width:230px;margin-right: 10px;
							height:200px;padding-top:30px;background:#fff;
							cursor: pointer;
							&:hover{
								position: relative;
								top:-3px;
								.tit{
									color: #e52e3a;
								}
							}
							.img{
								width:65px;height: 65px;margin:0 auto;
								margin-bottom: 20px;
								img{
									width:65px;height: 65px;
								}
							}
							.tit{
								font-size: 16px;text-align: center;height:40px;white-space: normal;
								line-height: 20px;
							}
							.tit,.msg{
								padding:0 30px;overflow: hidden;text-overflow: ellipsis;
							}
							.msg{
								color: #999;font-size: 12px;white-space: nowrap;line-height: 34px;
							}
							.price{
								color: $hover;font-size: 16px;font-weight: bold;text-align: center;
							}
						}
					}
				}
			}
		}
		.aside2,.content2{
			height:auto;
			.title2{
				line-height: 40px;background: #f0f0f0;padding-left:18px;text-align: left;color: #666;
			}
			&.content2{
				.title2{
					padding-left: 30px;
				}
			}
		}
		.aside2{
			.service-list{
				padding:0 15px 10px;
				li{
					border-bottom: 1px dotted #ddd;padding:20px 0 10px;
					a{display: block;}
					&:hover{
						position: relative;
						top:-2px;
						.name{
							color:#e52e3a;
						}
					}
					&:last-child{
						border-bottom: none;
					}
					.img-box2{
						width:92px;height: 92px;overflow: hidden;margin:0 auto;
						img{
							width:92px;height: 92px;
						}
					}
					.name{
						font-size: 16px;padding: 10px 0;line-height: 20px;width: 165px;margin: 0 auto;
					}
					.msg{
						line-height: 18px;color:#bbb;padding:0 30px;height: 36px;overflow: hidden;text-overflow:ellipsis;white-space:nowrap;
					}
					.price{
						color:$hover;font-size: 16px;font-weight: bold;line-height: 45px;
					}
				}
			}
		}
		.content2{
			margin-bottom: 20px;
			.service{
				overflow: hidden;min-height: 500px;font-size: 16px;
				img{
					width:950px;
				}
			}
		}
	}
}

</style>
<style lang='scss' scoped>
	.advisory{
	position: relative;
	display: block;
	width: 100px;
	height: 16px;
	color: #4685c3;
	margin: 14px auto 0;
	text-align: center;
	cursor: pointer;
	top:-16px;
	z-index: 1;
	.icon{
		font-size: 16px;
		color: inherit;
		font-weight: bold;
	}
	&:hover{
		color: #e52e3a;
	}
	.icon-right{
		position: relative;
		top:1px;
	}
}
</style>

