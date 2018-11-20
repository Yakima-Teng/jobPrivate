<template>
	<div v-if="empty==true" class="loading">加载中...</div>
    <div class="account" v-else>
      <top></top>
	  <div class="head-box">
	  	<head-part subtitle="结算页"></head-part>
	  </div>
	  <div class="main">
		  <div class="title w1190">填写并核对订单信息</div>
		  <!--添加联系人-->
		  <div class="add w1190">
			  <div class="detail">
				  <div class="tit"><span class="addBtn" @click="addContactFn">新增<i class="icon-add"></i></span>联系人信息</div>
				  <div class="list" v-if="contactList.length">
					  <ul >
						  <!-- :class="{hidden:slide}" -->
						  <li :class="{clearfix:true,cur:item.default==1||item.cur==true}" v-for="(item,index) of contactList" @click="checkContactFn(index)" v-show='index < showIndex'>
							  <div class="border">
								    <div class="name">{{item.contact}}</div>
									<div class="tel">{{item.phone}}</div>
									<div class="address">{{item.province}}{{item.city}}{{item.address}}</div>
									<!-- {{item.area}} -->
									<div class="change">
										<span class="revise" @click.stop="reviseFn(index)">修改</span>
										<span class="del" @click.stop="delContactFn(item.id)" v-if="item.default!=1">删除</span>
									</div>
									<div class="triangle"></div>
							  </div>
						  </li>
					  </ul>
					   <!-- @click="slideFn" -->
					  <div class="more" @click="showIndexFn" v-if="contactList&&contactList.length>1">
						<span v-if="showIndex<=1">展开联系人<em class="icon-xiala ico"></em></span>
						<span v-else>收起联系人<em class="icon-top1 ico"></em></span>
					 </div>
				  </div>
			  </div>
		  </div>
		  <!--/添加联系人-->
		  <!--合同主体-->
		  <!-- <div class="content w1190">
			  <div class="h-list">
				  <div class="tit"><span class="addBtn" @click="mainLayerFn">新增<i class="icon-add"></i></span>合同主体</div>
				  <div class="box">
					 <span v-if="mainList.length>3">
						  <a href="javascript:void(0)" class="pre-btn" @click="prevFun"><i class="icon-left"></i></a>
					  	  <a href="javascript:void(0)" class="add-btn" @click="autoPlay"><i class="icon-right"></i></a>
					 </span>
					  <ul class="clearfix" :style="{marginLeft:mleft+'px'}">
						  <li :class="{cur:item.default==1||item.cur==true}" v-for="(item,index) of mainList" @click="checkMainFn(index)">
							  <div class="border">
								<a href="javascript:void(0)" class="close" v-if="item.default!=1" @click.stop="delMainFn(item.id)"><i class="icon-close"></i></a>
								<div class="triangle"></div>
									<div class="tab clearfix">
										<div class="option1">主 体 类 型：</div>
										<div class="option2"><span v-if="item.main_type==1">个人</span><span v-if="item.main_type==2">企业</span></div>
									</div>
									<div class="tab clearfix">
										<div class="option1" v-if="item.main_type==2">主 体 名 称：</div>
										<div class="option1" v-if="item.main_type==1">客 户 名：</div>
										<div class="option2">{{item.main_title}}</div>
									</div>
									<div class="tab clearfix">
										<div class="option1" v-if="item.main_type==2">纳税人识别号：</div>
										<div class="option1" v-if="item.main_type==1">身 份 证 号：</div>
										<div class="option2">{{item.company_code}}</div>
									</div>
									<div class="tab clearfix">
										<div class="option1">联 系 人：</div>
										<div class="option2">{{item.contact}}</div>
									</div>
									<div class="tab clearfix">
										<div class="option1">手 机 号 码：</div>
										<div class="option2">{{item.phone}}</div>
									</div>
									<div class="tab clearfix">
										<div class="option1">固 定 电 话：</div>
										<div class="option2">{{item.tel}}</div>
									</div>
									<div class="tab clearfix">
										<div class="option1">详 细 地 址：</div>
										<div class="option2 option3">{{item.province}}{{item.city}}{{item.address}}</div>
									</div>
									<div class="tab clearfix">
										<div class="option1">邮 箱：</div>
										<div class="option2">{{item.email}}</div>
									</div>
									<div class="change">
										<span @click.stop="editFn(index)">编辑</span>
									</div>
							  </div>
						  </li>
					  </ul>
				  </div>
			  </div>
		  </div> -->
		  <!-- {{item.area}}详细地址以后添加 -->
		  <!--/合同主体-->
		  <!--服务信息-->
		  <div>
		  <div class="content w1190">
			  <div class="cart-list clearfix">
				  <div class="tit2">服务信息</div>
				  <div class="top clearfix">
					  <div class="tab2">
						  服务信息
					  </div>
					  <div class="tab3" style="height:50px">
						 
					  </div>
					  <div class="tab4">
						  单价
					  </div>
					  <div class="tab5">
						  数量
					  </div>
					  <div class="tab6 name">
						  金额
					  </div>
					  <div class="tab7">
						  备注
					  </div>
				  </div>
				  <ul>
					  <li class="list" v-for="(item,index) of list">
						  <div class="box clearfix">
							  <div class="tab2">
								  <div class="img-box"><router-link :to="'/'+item.product_id"><img :src="item.product_info.product_img" /></router-link></div>
							  </div>
							  <div class="tab8">
								  <div class="clearfix">
										<div class="tab3">
											<div class="name" v-if="item.sku_info.sku_name!=''&&item.sku_info.sku_name!=undefined&&item.sku_info.sku_name!=null">
												<router-link :to="'/'+item.product_id">{{item.sku_info.sku_name}}</router-link>
											</div>
											<div class="name" v-else>
												<router-link :to="'/'+item.product_id">{{item.product_info.product_name}}</router-link>
											</div>
										</div>
										<div class="tab4 u-price">
											<span>￥{{item.sku_info.sku_price}}</span>
										</div>
										<div class="tab5">
											<span class="num">{{item.cart_count}}</span>
										</div>
								  </div>
								  <div class="msg" v-if="item.sku_info.sku_desc!=''&&item.sku_info.sku_desc!=undefined&&item.sku_info.sku_desc!=null">
									  {{item.sku_info.sku_desc}}
								  </div>
								  <div class="msg" v-else>
									  {{item.product_info.product_desc}}
								  </div>
								  <div class="type">
									  {{item.sku_info.sku_show}}
									  <em v-if="item.sku_info.sku_spec_group_name!=null&&item.sku_info.sku_spec_group_name!=''&&item.sku_info.sku_spec_group_name!=undefined">{{item.sku_info.sku_spec_group_name}}</em>
								  </div>
							  </div>
							  <div class="tab6">
								  <div :class="[{price:true},{cur:item.cart_price!=item.cart_pay},{price_black:true}]">￥{{item.cart_price}}</div>
								  <div class="c-price" v-if="item.cart_price!=item.cart_pay">优惠后金额：<em>￥{{item.cart_pay}}</em></div>
							  </div>
							  <div class="tab7">
								  <span class="bz" @click="bzShowFn(index)" :title="item.bzTxt">
									  <i class="icon-remark"></i>
									  <div class="layer" v-show="item.bz!=1">
										  <textarea placeholder="请输入您的备注内容" v-model="item.bzTxt"></textarea>
										  <a href="javascript:void(0)" class="btn" @click.stop="closeBz(index)">确认</a>
										  <div class="icoBox"><span class="ico"></span></div>
							  			  <div class="icoBox icoBox2"><span class="ico2"></span></div>
									  </div>
									</span>
							  </div>
						  </div>
						  <div class="cxBox">
							  <ul>
								  <li class="c-list" v-if="item.act_info!=''&&item.act_info!=undefined&&item.act_info!=null">
									  <em class="c-name">{{item.act_info.type_tag}}</em>
									  <span class="c-status">{{item.act_info.rule_title}}</span>
									  <span class="c-type">{{item.act_info.msg}}</span>
								  </li>
							  </ul>
						  </div>
					  </li>
				  </ul>
			  </div>
		  </div>
		  </div>
		  <!--/服务信息-->
		  <!--发票信息-->
		  <div class="content w1190">
			  <div class="receipt">
				  <div class="tit2">发票信息</div>
				  <div class="check-wrap">
					  <span class="checkBtn" v-for="(item,index) of receipt" @click="receiptTabFn(index)">
						  <span :class="{radio:true,cur:receiptCur==index}"></span>{{item}}
						  <div class="layer" v-if="index==0&&receiptCur==0">
							  如需开具发票，请咨询您的专属顾问，或咨询客服热线<em>400-700-0065</em>。
							  <div class="icoBox"><span class="ico"></span></div>
							  <div class="icoBox icoBox2"><span class="ico2"></span></div>
						  </div>
					 </span>
				  </div>
			  </div>
		  </div>
		  <!--/发票信息-->
		  <!--留言信息-->
		  <div class="content w1190">
			  <div class="ly">
				  <div class="tit2">留言信息</div>
				  <textarea class="txt" placeholder="请输入您的留言内容" v-model="lyTxt"></textarea>
			  </div>
		  </div>
		  <!--/留言信息-->
		  <!--优惠券支付-->
		  <div class="content w1190">
			  <div class="ly">
				  <div class="tit2">优惠券支付</div>
				  <div class="coupon-list" v-if="couponList.length">
					   <ul class="clearfix">
						   <li :class="{clearfix:true,disable:item.disable==true,cur:item.cur==true,default:true}" v-for="(item,index) of couponList"> <!--class加cur时右下角出现红色三角，class加disable时优惠券置灰,class加default时为初始状态-->
							   <div class="bg"></div>
							   <div @click="couponCheck(item.use_type,item.sku_id,index)" class="box">
									<div class="triangle"></div>
									<div class="circle"></div>
									<div class="coupon-name">{{item.cou_range_name}}</div>
									<div class="coupon-msg clearfix">
										<div class="price">
											<span><i>￥</i><em class="count">{{parseFloat(item.free_price)}}</em></span>
											<span class="msg">满{{item.limit_price}}</span>
										</div>
										<div class="msg-box">
											<span><em class="name">优惠券码：</em>{{item.code}}</span>
											<span><em class="name">有限期：</em>{{item.use_start_time}} - {{item.use_end_time}}</span>
											<span v-if="item.use_type==1">限服务品类、可与其他优惠叠加使用</span>
											<span v-if="item.use_type==2">限服务品类、不可与其他优惠叠加使用</span>
										</div>
									</div>
							   </div>
						   </li>
					   </ul>
				  </div>
				  <div class="c-empty" v-else>暂无优惠券</div>
			  </div>
		  </div>
		  <!--/优惠券支付-->
		  <!--提交订单-->
		  <div class="content w1190">
			  <div class="order clearfix">
				  <ul class="clearfix">
					  <li class="msg1">
						  <div><span>合计金额：</span>￥{{countObj.sum_price}}</div>
						  <div><span>优惠金额：</span>￥{{countObj.discount_price}}</div>
						  <div><span>优惠券：</span>￥{{couponPrice}}</div>
					  </li>
					  <li class="msg2">
						 <span class="txt"> 应付金额:</span>
						 <div class="rate">￥{{countObj.pay_price}}</div>
					  </li>
					  <li class="btn-box"><a href="javascript:void(0)" class="btn" @click="submitFn">提交订单</a></li>
				  </ul>
			  </div>
		  </div>
		  <!--/提交订单-->
	  </div>
	  <bottom></bottom>
  	  <foot></foot>
	  <div class="back-top" @click="backTopFn"><i class="icon-top"></i></div>
	  <mask-layer v-show="addContactLayer||addMainLayer||failed||affirmDel"></mask-layer>
	  <contact-layer v-show="addContactLayer" @layerFn="layerFn" :contactObj='contactObj' @contactFn="contactFn"></contact-layer>
	  <mainLayer v-show="addMainLayer" @mainFn="mainFn" @mainListFn="mainListFn" :mainObj="mainObj"></mainLayer>
	  <faildLayer v-show="failed" @failLayerFn="failLayerFn"></faildLayer>
	  <div class="ts-layer" v-show="tsLayer">{{tsTxt}}</div>
	  <affirm v-show="affirmDel" :delObj="delObj" @delALayer="delALayer"></affirm>
    </div>
</template>

<script>
import headPart from '../../components/common/head.vue'
import top from '../../components/common/top.vue'
import bottom from '../../components/common/bottom.vue'
import foot from '../../components/common/foot.vue'
import maskLayer from '../../components/account/mask.vue'
import contactLayer from '../../components/account/contact.vue'
import mainLayer from '../../components/account/main.vue'
import faildLayer from '../../components/account/faild.vue'
import affirm from '../../components/account/affirm.vue'
import {backTop,postFn} from '../../static/js/util.js'
import {mapState} from 'vuex'
export default {
metaInfo () {
	return {
		title: '订单结算-创新科技服务云平台',
		meta: []
	}
},
  data(){
  	return{
		showIndex:1, 
		slide:true,
		addContactLayer:false,
		addMainLayer:false,
		failed:false,     	//提交订单失败提示是否显示true为显示
		affirmDel:false,  //联系人或主体删除时的确认弹层是否显示
		delObj:null, //联系人或主体删除时往子组件传递的信息
		zsIndex:0,
		contactList:[],  	//联系人列表
		mainList:[],     	//主体列表
		currentIndex: 0,
		mleft: 0,
		contactObj:null,
		mainObj:null,
		countObj:null,
		empty:true,
		list:[],   	//购物的商品列表
		receipt:['需要','不需要'],   //发票
		receiptCur:1,   //发票索引
		couponList:[],    //优惠券列表
		skuList:[],		//购物的商品sku列表
		couponPrice:0,     //选中优惠券的总价格
		couponIdList:[],    //已经选中的优惠券
		contactsID:'',   //联系人ID
		contractID:'',    	//合同主体ID
		lyTxt:'',  //留言信息
		tsTxt:'请选择联系人',    //未选择联系人或主体时提示语
		tsLayer:false,      //未选择联系人或主体时提示弹层
  	}
  },
  computed:mapState(["userInfo","isLogin"]),
  methods: {
	  showIndexFn() {
		  if(this.showIndex==1){
		  	this.showIndex = 100;
		  }else{
			 this.showIndex = 1; 
		  }
	  },
	  delALayer(layer,txt){
		  const that = this;
		  that.affirmDel = layer
		  if(txt.indexOf('联系人删除成功')!=-1){
			  that.getContact()
		  }else if(txt.indexOf('合同主体删除成功')!=-1){
			  that.getContract()
		  }
	  },
	//   slideFn(){
	// 	  //促销展开OR收起
	// 	  this.slide = !this.slide
	//   },
	  addContactFn(){
		  //打开添加联系人弹层
		  this.addContactLayer = true
	  },
	  mainLayerFn(){
		  //打开添加主体弹层
		this.addMainLayer = true
	  },
	  layerFn(layer){
		  //关闭添加联系人弹层
		 this.addContactLayer = layer
		 this.contactObj = null
	  },
	  mainFn(layer){
		  //关闭添加主体弹层
		 this.addMainLayer = layer
		 this.mainObj = null
	  },
	  mainListFn(list){
		  this.mainList = list
	  },
	  contactFn(list){
		  this.contactList = list
	  },
	  submitFn(){
		//提交订单
		const that = this;
		for(var i=0; i<that.contactList.length; i++){
			if(that.contactList[i].default==1){
				that.contactsID = that.contactList[i].id
			}
		}
		// for(var i=0; i<that.mainList.length; i++){
		// 	if(that.mainList[i].default==1){
		// 		that.contractID = that.mainList[i].id
		// 	}
		// }
		// if(!(that.contactsID!='')){
		// 	that.tsLayer = true
		// 	that.tsTxt = '请选择联系人'
		// 	setTimeout(function(){
		// 		that.tsLayer = false
		// 	},2000)
		// }
		// else if(!(that.contractID!='')){
		// 	that.tsLayer = true
		// 	setTimeout(function(){
		// 		that.tsLayer = false
		// 	},2000)
		// 	that.tsTxt = '请选择合同主体'
		// }
		// else{
			var idList = [];
			if(that.couponIdList.length){
				for(var i=0; i<that.couponIdList.length; i++){
					idList.push(that.couponIdList[i].id)
				}
			}
			var bzSkuList = [],bzTxtList = [],bzObj = {};
			for(var i=0; i<that.list.length; i++){
				bzSkuList.push(that.list[i].sku_id)
				bzTxtList.push(that.list[i].bzTxt)
			}
			for(var i=0; i<bzSkuList.length; i++){
				for (var key in bzTxtList) {
					key = bzSkuList[i];
					bzObj[key] = bzTxtList[i]
				}
			}
			const data = {
				contactsID:that.contactsID,
				// contractID:that.contractID,
				remmarks:that.lyTxt,
				couponID:idList + '',
				goodsRemark:bzObj
			}
			if(that.receiptCur==0){
				data.needInv = 1
			}else if(that.receiptCur==1){
				data.needInv = 2
			}
			console.log(that.contactsID,"=>that.contactsID");
			postFn('/order/order/index',data,function(res){
				console.log(res)
				if(res.data.code==200){
					window.location.href = res.data.data.jump_url
					that.failed = false
				}else{
					that.failed = true
				}
			})
		// }
	  },	  
	  failLayerFn(layer){
		  //关闭提交订单失败提示层
		  this.failed = layer
	  },
	  zsTabFn(index){
		  //我的足迹、我的收藏切换
		  this.zsIndex = index
	  },
	  autoPlay() {
		  //主体滑动：右滑
			if(this.mainList.length - this.currentIndex > 3){
				this.currentIndex++;
				var i = 0;
				var _this = this;
				var t = setInterval(function(){
					if(i<380){
						i+=10; 
						_this.mleft -= 10;
					}else{
						clearInterval(t);
					}
    			},10);
			}
		},
		prevFun(){
			//主体滑动：左滑
			if(this.currentIndex > 0){
				this.currentIndex--;
				var i = 380;
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
		backTopFn(){
			//回到顶部
			backTop(this)
		},
		reviseFn(index){
			//编辑联系人
			this.contactObj = this.contactList[index]
			this.addContactLayer = true
		},
		editFn(index){
			//编辑主体
			this.mainObj = this.mainList[index]
			this.addMainLayer = true
		},
		delContactFn(id){
			//删除联系人
			const that = this;
			that.delObj = {
				id:id,
				txt:'您确定要删除该联系人信息吗？'
			}
			that.affirmDel = true
			/*var data = {
				id:id
			}
			postFn('/user/user/contact/del',data,function(res){
				if(res.data.code==200){
					postFn('/user/user/contact/get','',function(res){
						if(res.data.code==200){
							that.contactList = res.data.data
						}
					})
					console.log('删除成功')
				}
			})*/
		},
		delMainFn(id){
			//删除主体
			const that = this;
			that.delObj = {
				id:id,
				txt:'您确定要删除该合同主体吗？'
			}
			that.affirmDel = true
			/*if(that.userInfo!=''){
				var data = {
					id:id
				}
				postFn('/user/user/contract/del',data,function(res){
					if(res.data.code==200){
						that.getContract()   //获取主体列表
						console.log('删除成功')
					}
				})
			}else{
				that.$router.push('/login')
			}*/
		},
		receiptTabFn(index){
			//发票切换
			this.receiptCur = index
		},
		bzShowFn(index){
			//备注显示or隐藏
			var newList = [];
			for(var i=0; i<this.list.length; i++){
				var type = 1
				if(type==1){
					type = 2
				}else{
					type = 1
				}
				this.list[index].bz = type
				newList.push(this.list[i])
			}
			this.list = newList
		},
		closeBz(index){
			//关闭备注弹层
			var newList = [];
			for(var i=0; i<this.list.length; i++){
				this.list[index].bz = 1
				newList.push(this.list[i])
			}
			this.list = newList
		},
		getProductFn(){
			const that = this;
			//获取结算时的相应商品
			that.empty = true
			var countData = {
				uid:that.userInfo.id
			}
			postFn('/product/cart/pre_order',countData,function(res){
				console.log(res)
				if(res.data.code==200){
					that.empty = false
					that.countObj = res.data.data.price_data
					for(var i=0; i<res.data.data.list.length; i++){
						res.data.data.list[i].bz = 1
						res.data.data.list[i].bzTxt = ''
					}
					that.list = res.data.data.list
					for(var i=0; i<res.data.data.coupon_list.length; i++){
						res.data.data.coupon_list[i].cur = false
					}
					that.couponList = res.data.data.coupon_list
					var skuList = [];
					if(res.data.data.sku_map_list!=''){
						for(var i in res.data.data.sku_map_list){
							res.data.data.sku_map_list[i].sku = i
							skuList.push(res.data.data.sku_map_list[i])
						}
						that.skuList = skuList
					}
				}else{
					that.empty = true
					that.$router.push({path:'/home/order',query:{num:0}})
				}
			})
		},
		getContact(){
			const that = this;
			var data={
				limit:10000,
			}
			postFn('/user/user/contact/get',data,function(res){
				console.log(res)
				if(res.data.code==200){
					var list = [],newList = [];
					for(var i=0,len=res.data.data.list.length; i<len; i++){
						res.data.data.list[i].cur = false
						if(res.data.data.list[i].default==1){
							list.push(res.data.data.list[i])
							that.contactsID = res.data.data.list[i].id
						}else{
							newList.push(res.data.data.list[i])
							that.contactsID = ''
						}
					}
					that.contactList = list.concat(newList)
				}
			})
		},
		getContract(){
			const that = this;
			//获取主体
			var data = {
				id:null,
				limit:10000,
			}
			postFn('/user/user/contract/get',data,function(res){
				console.log(res)
				if(res.data.code==200){
					var list = [],newList = [];
					for(var i=0,len=res.data.data.list.length; i<len; i++){
						res.data.data.list[i].cur = false
						if(res.data.data.list[i].default==1){
							list.push(res.data.data.list[i])
							that.contractID = res.data.data.list[i].id
						}else{
							newList.push(res.data.data.list[i])
							that.contractID = ''
						}
					}
					that.mainList = list.concat(newList)
				}
			})
		},
		couponCheck(type,id,index){
			//优惠券选择
			const that = this,skuList = this.skuList;
			// 应付金额为0不处理
			if(that.countObj.pay_price == 0){
			    return;
			}
			// 正常选中的加减
            that.couponList[index].cur = !that.couponList[index].cur;
			if (that.couponList[index].cur){
                that.couponIdList.push(that.couponList[index]);
				that.couponPrice += parseFloat(that.couponList[index].free_price);
				// that.couponPrice = Math.abs(that.couponPrice)
                that.countObj.pay_price -= parseFloat(that.couponList[index].free_price);
                if(that.countObj.pay_price <=0){
                    that.countObj.pay_price = 0;
				}else{
                    that.countObj.pay_price = parseFloat(that.countObj.pay_price.toFixed(2));
				}
			}else{
                that.couponIdList.splice(that.couponIdList.map(x=>x.code).indexOf(that.couponList[index].code),1);
				that.couponPrice -= parseFloat(that.couponList[index].free_price);
				// that.couponPrice = Math.abs(that.couponPrice)
                that.countObj.pay_price += parseFloat(that.couponList[index].free_price);
                that.countObj.pay_price = parseFloat(that.countObj.pay_price.toFixed(2));
			}
			// 如果取消了所有优惠券，则恢复所有优惠券可选
			if(that.couponIdList.length == 0){
                that.couponList.map(function (x,i) {
					that.couponList[i].disable = false;
                })
				return;
			}else{
				// 选择的优惠数量判断
				let checkCount = that.couponIdList.filter(x=>x.sku_id == id).length;
				let skuCount = skuList.filter(x=>parseInt(x.sku)==id)[0].cart_count;
				that.couponIdList.forEach(element => {
					if(element.sku_id==id){
						skuCount--;
						element.maxCount=skuCount;
						if(element.maxCount==0){
							 that.couponList.map(function (x,i) {
								if(x.sku_id==element.sku_id){
									if (!x.cur){
										that.couponList[i].disable = true;
									}
								}
								
							})
						}else{
							that.couponList.map(function (x,i) {
								if(x.sku_id==element.sku_id){
									if (!x.cur){
										that.couponList[i].disable = false;
									}
								}
							})
						}
					}
				});
                // if (checkCount == skuCount){
                //     that.couponList.map(function (x,i) {
				// 		if(x.sku_id==id){
				// 			if (!x.cur){
				// 				that.couponList[i].disable = true;
				// 			}
				// 		}
                        
                //     })
                // }else{
                //     that.couponList.map(function (x,i) {
                //         if (!x.cur){
                //             that.couponList[i].disable = false;
                //         }
                //     })
                // }
            }
			// 互斥选择
			that.couponList.map(function (x,i) {
				if (x.use_type != type){
				    that.couponList[i].disable = true;
				}
            })
		},
		checkContactFn(index){
			//选择联系人
			console.log("=>222");
			const that  = this;
			var newList = [];
			for(var i=0; i<that.contactList.length; i++){
				that.contactList[i].cur = false
				that.contactList[i].default = 2
				that.contactList[index].cur = true
				newList.push(that.contactList[i])
			}
			that.contactList = newList
			that.contactsID = that.contactList[index].id
		},
		checkMainFn(index){
			//选择主体
			var newList = [];
			for(var i=0; i<this.mainList.length; i++){
				this.mainList[i].cur = false
				this.mainList[i].default = 2
				this.mainList[index].cur = true
				newList.push(this.mainList[i])
			}
			this.mainList = newList
			this.contractID = this.mainList[index].id
		}
 },
 components: {
    top,
    bottom,
	foot,
	headPart,
	maskLayer,
	contactLayer,
	mainLayer,
	faildLayer,
	affirm
 },
 created(){
	const that = this;
	if(that.userInfo!=''&&that.isLogin!=false){
		//获取联系人
		that.getContact()
		that.getContract()   //获取主体列表
		that.getProductFn()   //获取结算时的商品列表
	}else{
		that.$router.push('/login')
	}
 }
}
</script>

<style lang="scss">
$hover:#e52e3a;
$cur:#FF3342;

.loading{
	line-height: 150px;text-align: center;font-size: 30px;
}
.ts-layer{
	position: fixed;width:300px;height:100px;line-height: 100px;z-index: 100;font-size: 18px;border-radius: 4px;color:#fff;
	text-align: center;left:50%;top:50%;margin-left:-190px;background: rgba(0,0,0,0.6);margin-top:-50px;
}
.account{
	font-size: 14px;
	.head-box{
		padding-bottom: 36px;
	}
	.back-top{
		width:40px;height: 40px;background: #eee;position:fixed;left:50%;bottom:60px;margin-left:620px;text-align:center;line-height:35px;
		cursor: pointer;
		i{
			font-size: 30px;vertical-align: middle;
		}
		&:hover{
			background: $hover;color:#fff;
		}
	}
	.main{
		background: #fafafa;padding:0 0 80px;
		.title{
			line-height: 55px;font-size: 16px;
		}
		.tit{
			line-height: 55px;font-size:16px;font-weight:bold;padding-top:10px;
			.addBtn{
				float: right;color:#4685c3;line-height:55px;font-size:14px;font-weight:normal;cursor: pointer;
				i{
					color:#999;font-size: 30px;vertical-align: middle;
				}
			}
		}
		.tit2{font-size: 16px;font-weight: bold;padding-top: 25px;}
		.triangle{
			width:26px;height:23px;display: none;background: url(../../static/images/cart/address_ico.png) no-repeat;
			position: absolute;right:-1px;bottom: -1px;
		}
		.detail{
			background: #fff;padding:0 30px 52px;position: relative;
			.list{
				ul{
					&.hidden{
						height:45px;overflow: hidden;
					}
				}
				.more{
					position: absolute;line-height: 18px;font-size: 12px;cursor: pointer;
					bottom: 24px;width:120px;color:#999;left:30px;
					.ico{
						font-size: 25px;vertical-align: middle;
					}
				}
			}
			li{
				border:1px solid #fff;position: relative; height: 36px;margin-bottom:10px;cursor: pointer;
				.border{
					height:36px;border:1px solid #eee;
				}
				.name,.tel,.address,.change{
					float: left;line-height: 36px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;height:36px;
				}
				.name{
					width:120px;padding-left: 20px;
				}
				.tel{width:230px;}
				.address{width:620px;padding-right:10px;}
				.change{
					width:110px;cursor: pointer;text-align:right;
					span{
						padding-right: 15px;color:#4685c3;
						&:hover{
							color:$hover;
						}
					}
				}
				&.cur{
					border:1px solid $hover;
					.border{
						border:1px solid $hover;
						
					}
					.triangle{
						display: block;
					}
				}

			}
		}
		.h-list{
			padding:0 30px 30px;position: relative;
			.tit{
				line-height: 45px;
				.addBtn{
					line-height: 45px;
				}
			}
			.box{
				padding-top:10px;overflow: hidden;width:1131px;
				.pre-btn,.add-btn{
					position: absolute;display:block;top:50%;z-index: 5;margin-top:-15px;
					i{
						font-size: 30px;color:#999;
					}
					&:hover{
						i{color:#333;}
					}
				}
				.pre-btn{
					left:0;
				}
				.add-btn{
					right:0;
				}
				ul{width:10000px;}
				li{
					width:368px;height:310px;border: 1px solid #eee;position: relative;float: left;margin-right:10px;cursor: pointer;
					.border{
						width:338px;height:288px;border: 1px solid #fff;padding:20px 0 0 30px;
						.tab{
							border-bottom:none;
						}
					}
					.close{
						position: absolute;right:-6px;top:-8px;
						i{
							font-size: 45px;color:#bbb;
						}
					}
					.option1,.option2{float: left;line-height: 28px;vertical-align: top;padding-left:5px;}
					.option1{color:#999;text-align: right;width:98px;text-align: justify;text-align-last: justify;}
					.option2{
						width:180px;overflow: hidden;text-overflow:ellipsis;height: 28px;white-space: nowrap;
						&.option3{
							max-height: 56px;
						}
					}
					.change{
						text-align: right;padding:10px 20px 0 0;position:absolute;bottom:15px;right:0;
						span{
							color:#4685c3;font-size: 12px;padding-right:14px;cursor: pointer;
							&:hover{
								color:$hover;
							}
						}
					}
					&.cur{
						border:1px solid $hover;
						.border{
							border:1px solid $hover;
						}
						.triangle{
							display: block;
						}
					}
				}
			}
		}
		.content{
			background: #fff;margin-top:20px;
		}
		.cart-list{
			padding:0 30px 30px;
			.tab2,.tab3,.tab4,.tab5,.tab6,.tab7,.tab8{
				float: left;
			}
			.tab4,.tab5{
				text-align: center;
			}
			.tab2{width:120px;}
			.tab5{width:120px;}
			.tab3{width:340px;}
			.tab4{width:188px;}
			.tab6{
				width:238px;
				&.name{padding-left:70px;width:168px;}
			}
			.tab7{width:100px;padding-left:20px;}
			.tab8{width:648px;}
			.top{
				border-bottom:1px solid #eee;
				.tab2,.tab3,.tab4,.tab5,.tab6,.tab7{
					line-height: 50px;
				}
			}
			.list{
				padding:20px 0;border-bottom:1px dotted #ddd;
				.check,.img-box{
					line-height: 100px;
				}
				.img-box{
					height:98px;width:98px;border:1px solid #eee;
					a{
						display: block;
					}
					img{
						height:98px;width:98px;
					}
				}
				.name{
					font-size: 16px;
				}
				.u-price{color:$hover;font-weight: bold;}
				.name,.price,.u-price,.collect{
					line-height: 30px;
				}
				.c-price,.msg{line-height: 24px;}
				.c-price{
					font-size: 12px;color:#999;
					em{color:$hover;font-weight: bold;font-size: 14px;}
				}
				.msg{font-size: 12px;padding-right: 20px;text-overflow:ellipsis;white-space: nowrap;overflow: hidden;color:#999;width: 320px;}
				.num{
					line-height: 30px;
				}
				.price{
					color:$hover;font-weight: bold;padding-left:70px;
					&.cur{
						font-weight: normal;color:#333;text-decoration:line-through;
					}
					&.price_black{
						color: #333;
						font-weight: normal;
					}
				}
				.type{
					margin:16px 0 10px;line-height: 20px;background: #eee;font-size: 12px;padding:0 10px;display:inline-block;color:#999;
					em{padding-left:10px;}
				}
				.bz{
					line-height: 30px;display: inline-block;position: relative;cursor: pointer;
					i{
						font-size: 30px;color: #999;
					}
					.layer{
						position: absolute;width:156px;height:134px;border:1px solid #eee;box-shadow: 0 1px 5px 0 rgba(0,0,0,0.08);
						z-index: 2;background: #fff;padding:8px 8px 0;bottom:-145px;left:-70px;
						textarea{
							width:146px;border:1px solid #eee;height:72px;line-height: 18px;padding:5px;
						}
						.btn{
							display: block;margin:8px auto 0;width:80px;height:25px;line-height: 25px;text-align: center;color:#fff;
							background: $hover;font-size: 12px;border-radius: 2px;
							&:hover{
								background: $cur;
							}
						}
						.icoBox{position: absolute;width:10px;height:10px;top:-12px;left: 50%;margin-left:-6px;}
						.ico,.ico2{
							display: block; float:left; overflow:hidden; height:0; width:0;
						}
						.ico{
							border:6px solid rgba(0,0,0,0); border-bottom:6px solid #eee;
						}
						.icoBox2{
							top:-9px;margin-left:-5px;
						}
						.ico2{
							border:5px solid rgba(0,0,0,0); border-bottom:5px solid #fff;
						}
					}
				}
				.cxBox{
					position: relative;width:588px;padding-left:120px;
				}
				.c-list{
					font-size: 12px;padding:10px 60px 0 0;line-height: 20px;vertical-align: middle;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;
					.c-name{
						display: inline-block;background: $hover;
						color:#fff;padding:0 9px;line-height: 20px;
					}
					.c-status{
						color:$hover;padding:0 6px;
					}
					.c-type{
						color:#ff8800;
					}
				}
			}
		}
		.receipt{
			padding:0 30px 55px;
			.check-wrap{
				padding-top:18px;
				.checkBtn{
					margin-right: 40px;position: relative;display:inline-block;cursor: pointer;
					.radio{
						margin-right:8px;vertical-align: middle;width:13px;height: 13px;display: inline-block;
						background: url(../../static/images/cart/radio.png) no-repeat left -13px; 
						&.cur{
							background-position: left top;
						}
					}
					.layer{
						position: absolute;z-index: 2;width:390px;height: 22px;line-height: 22px;border:1px solid #eee;
						box-shadow:0 1px 5px 0 rgba(0,0,0,0.08);font-size: 12px;padding-left:10px;bottom:-30px;left:16px;
						em{
							color:$hover;font-weight: bold;
						}
						.icoBox{position: absolute;width:10px;height:10px;top:-12px;left: 10px;}
						.ico,.ico2{
							display: block; float:left; overflow:hidden; height:0; width:0;
						}
						.ico{
							border:6px solid rgba(0,0,0,0); border-bottom:6px solid #eee;
						}
						.icoBox2{
							top:-9px;left:11px;
						}
						.ico2{
							border:5px solid rgba(0,0,0,0); border-bottom:5px solid #fff;
						}
					}
				}
			}
		}
		.ly{
			padding:0 30px 30px;
			.txt{
				margin-top:20px;
				border:none;background:#fafafa;width:1090px;height:60px;line-height: 22px;padding:10px 20px;
			}
		}
		.coupon-list{
			padding-top:20px;position: relative;
			li,li .box{
				float: left;position: relative;height:102px;width:400px;margin:0 20px 10px 0;cursor: pointer;
			}
			li{
				.bg{
					height:102px;width:400px;position: absolute;background: rgba(255,255,255,0.01);z-index: 2;
					left:0;top:0;display: none;box-sizing: border-box;
				}
				.triangle{right:0;bottom: 0;}
				&.cur{
					.triangle{
						display: block;
					}
				}
				.circle{
					width:12px;height: 12px;border-radius: 50%;top:50%;left:-6px;margin-top:-6px;position: absolute;background:#fff;
				}
				.coupon-name,.coupon-msg{
					float: left;
				}
				.coupon-name{
					width:30px;background:#3fbaef;color: #fff;text-align: center;height:88px;font-weight: bold;font-size: 18px;padding:14px 5px 0;line-height: 25px;
				}
				.coupon-msg{
					height:70px;border:6px solid #3fbaef;border-left:none;width:354px;padding:10px 0;
					.price,.msg-box{
						float: left;
					}
					.price{
						border-right:1px dotted #ddd;width:120px;
						span{
							display: block;text-align: center;color:#3fbaef;
							.count{
								font-weight: bold;font-size: 48px;font-family: Arial;
							}
							i{font-weight: bold;font-size:16px;}
							&.msg{
								padding-top:4px;
							}
						}
					}
					.msg-box{
						padding-left:10px;width:220px;
						span{
							display:block;line-height: 22px;font-size:12px;overflow: hidden;white-space: nowrap;text-overflow:ellipsis;
							.name{color:#999;}
						}
					}
				}
				&.disable{
					cursor: default;
					.bg{
						display: block;
					}
					.coupon-name{
						background:#e0e0e0;
					}
					.coupon-msg{
						border:6px solid #e0e0e0;border-left:none;
						.price{
							span{color:#e0e0e0;}
						}
						.msg-box{
							span{
								color:#e0e0e0;
								.name{color:#e0e0e0;}
							}
						}
					}
				}
			}
		}
		.c-empty{
			line-height: 50px;
		}
		.order{
			padding:30px 0;
			ul{float: right;}
			li{
				float: left;height:58px;overflow: hidden;
				&.msg1,&.msg2{
					border-right:1px dotted #ddd;padding:0 28px;
				}
				&.msg1{
					div{
						padding-bottom:6px;
						span{color:#999;}
					}
				}
				&.msg2{
					.txt{color:#999;}
					.rate{
						font-size: 30px;font-weight: bold;color:$hover;padding-top:12px;
					}
				}
				&.btn-box{
					padding:0 65px 0 30px;
					.btn{
						display: inline-block;width:180px;height:48px;line-height: 48px;color:#fff;font-size:20px;text-align: center;border-radius: 2px;
						background: $hover;
						&:hover{
							background: $cur;
						}
					}
				}
			}
		}
	}
}
</style>
