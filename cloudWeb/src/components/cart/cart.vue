<template>
    <div class="cart">
      <top></top>
	  <div class="head-box">
	  	<head-part subtitle="购物车"></head-part>
	  </div>
	  <fixed-part></fixed-part>
	  <div class="main">
		  <!--购物车有商品-->
		  <div v-if="list.length">
		  <div class="coupon w1190">
			<!-- <router-link to=""><span><i class="icon-coupon"></i></span>领取优惠券</router-link> -->
		  </div>
		  <div class="content w1190">
			  <div class="cart-list clearfix">
				  <div class="top clearfix">
					  <div class="tab1">
						  <span :class="{allcheck:true,cur:allCheck==true}" @click="allCheckFn"></span>
					  </div>
					  <div class="tab2">
						  <label for="check2" class="pointer" @click="allCheckFn">全选</label>
					  </div>
					  <div class="tab3">
						  服务信息
					  </div>
					  <div class="tab4">
						  单价
					  </div>
					  <div class="tab5">
						  数量
					  </div>
					  <div class="tab6">
						  金额
					  </div>
					  <div class="tab7">
						  操作
					  </div>
				  </div>
				  <ul>
					  <li :class="{list:true,disabled:item.select2==true}" v-for="(item,index) of list">
						  <div class="box clearfix">
							  <div class="tab1 check">
								  <span :class="{allcheck:true,cur:item.select==true&&item.select2==false}" @click="singleCheck(index)"></span>
							  </div>
							  <div class="tab2">
								  <div class="img-box">
									  <div class="layer">{{item.shoppingMsg}}</div><div class="bg"></div>
									  <router-link :to="'/'+item.product_id">
										  <img :src="item.product_info.product_img" />
									  </router-link>
								  </div>
							  </div>
							  <div class="tab8">
								  <div class="clearfix">
										<div class="tab3">
											<div class="name">
												<router-link :to="'/'+item.product_id" target="_blank" v-if="item.sku_info.sku_name!=undefined&&item.sku_info.sku_name!=''&&item.sku_info.sku_name!=null">
													{{item.sku_info.sku_name}}
												</router-link>
												<router-link :to="'/'+item.product_id"  target="_blank" v-else>{{item.product_info.product_name}}</router-link>
											</div>
										</div>
										<div class="tab4 u-price">
											<span  v-if='item.sku_info.is_on_sale==1&&item.sku_info.sku_buy_status == 1'>￥{{item.sku_info.sku_price}}</span>
											<span v-else>￥---</span>
										</div>
										<div class="tab5">
											<span class="reduce" @click="reduceFn(index)" :class='{classWait:classWait}'>-</span>
											<input type="text" class="num" v-model="item.cart_count" @change="changeNumFn(index)" />
											<span class="add" @click="addFn(index)" :class='{classWait:classWait}'>+</span>
											<div class="bg"></div>
										</div>
								  </div>
								  <div class="msg" v-if="item.sku_info.sku_desc!=undefined&&item.sku_info.sku_desc!=''&&item.sku_info.sku_desc!=null" :title='item.product_info.product_desc'>{{item.sku_info.sku_desc}}</div>
								  <div class="msg" v-else :title='item.product_info.product_desc'>{{item.product_info.product_desc}}</div>
								  <div class="type">
									  {{item.sku_info.sku_show}}<em v-if="item.sku_info.sku_spec_group_name!=null&&item.sku_info.sku_spec_group_name!=undefined">{{item.sku_info.sku_spec_group_name}}</em>
									  </div>
							  </div>
							  <div class="tab6">
								  <div :class="{price:true,cur:item.cart_discount_price!=undefined&&item.cart_discount_price!=null&&item.cart_discount_price!=''}" v-if='item.sku_info.is_on_sale==1&&item.sku_info.sku_buy_status == 1'>￥{{item.cart_price}}</div>
								  <div v-else>￥---</div>
								  <div class="c-price" v-if="item.cart_discount_price!=undefined&&item.cart_discount_price!=null&&item.cart_discount_price!=''">优惠后金额：<em>￥{{item.cart_discount_price}}</em></div>
							  </div>
							  <div class="tab7" >
								  <span class="collect" @click="collectFn(index)" v-if="item.iscollect==false&&!item.select2">
									  添加收藏夹
									  <div class="layer" v-show="success"><i class="icon-ok"></i>已成功加入收藏夹！</div>
								  </span>
								  <span class="iscollect"  v-if="item.iscollect==true&&!item.select2">
									  已收藏
								  </span>
								  <span class="del" @click="singleDel(index)">删除</span>
							  </div>
						  </div>
						  <div :class="{cxBox:true,cx:true,hidden:item.slide}" v-if="item.activity.length">
							  <div class="layer"></div>
							  <ul>
								  <li class="c-list"  v-for="(i,ind) of item.activity" @click="actTabFn(ind,index,item.cart_id,i.info.is_select)">
									  <span :class="{radio:true,cur:i.info.is_select==1}"></span>
										<em class="c-name" v-if="i.info.type_tag!=''">{{i.info.type_tag}}</em>
										<span class="c-status">{{i.info.rule_title}}</span>
										<span class="c-type">{{i.info.msg}}</span>
								  </li>
							  </ul>
							  <div class="more" @click="cSlideFn(index)" v-if="item.activity.length>2">
								<span v-if="item.slide">展开<em class="icon-xiala ico"></em></span>
								<span v-else>收起<em class="icon-top1 ico"></em></span>
							 </div>
						  </div>
					  </li>
				  </ul>
				  <div class="c-msg">
					
				  </div>
				  <div class="bottom clearfix" :class="{fixed:fixed==true}">
					  <div :class="{box:true,}">
					  <div class="layer" v-show="success2"><i class="icon-ok"></i>已成功加入收藏夹！</div>
					  <ul class="clearfix">
						  <li class="b-num">已选 <em>{{priceData.count}}</em> 件</li>
						  <li class="price-list">
							  <span>合计金额：<em>￥{{priceData.sum_price}}</em></span>
							  <span>优惠金额：<em>￥{{priceData.discount_price}}</em></span>
						  </li>
						  <li class="b-count">应付金额：<em>￥{{priceData.pay_price}}</em></li>
						  <li class="btn-box" @click="accountFn"><a href="javascript:void(0)">去结算</a></li>
					  </ul>
					  <span class="fun">
						  <span class="check-box" @click="allCheckFn">
							  <span :class="{allcheck:true,cur:allCheck==true}"></span><label class="pointer">全选</label>
						  </span>
						  <a href="javascript:void(0)" class="b-del" @click="allDel">删除选中项</a>
						  <a href="javascript:void(0)" class="b-collect" @click="collect2Fn(list)">收藏选中项</a>
					  </span>
					</div>
				  </div>
			  </div>
		  </div>
		  </div>
		  <!--/购物车有商品-->
		  <!--购物车为空-->
		  <div class="content w1190 clearfix cart-empty" v-else>
			  <div class="img-box"></div>
			  <div class="msg">
				  购物车空空如也~~<br />赶紧去看看心仪的服务吧~~
				  <router-link to="/" class="link">去逛逛</router-link>
			  </div>
		  </div>
		  <!--/购物车为空-->
		  <!--足迹收藏-->
		  <ul class="collect-title clearfix">
			<li :class="{cur:zsIndex==index}" v-for="(item,index) of zsList" @click="zsTabFn(index)">{{item}}</li>
		 </ul>
		 <!--足迹-->
		<div v-show="zsIndex==0">
			<div class="collect-box" v-if="historyList.length">
				<div class="slide-box">
					<span v-if="historyList.length>5">
						<a href="javascript:void(0)" class="pre-btn" @click="prevFun"><i class="icon-left"></i></a>
						<a href="javascript:void(0)" class="add-btn" @click="autoPlay(historyList)"><i class="icon-right"></i></a>
					</span>
					<ul class="clearfix"  :style="{marginLeft:mleft+'px'}">
						<li v-for="(item,index) of historyList " v-if="item.sku_info!=''">
							<router-link :to="'/'+item.product_id" target="_blank" >
								<div class="img-box"><img :src="item.product_img" /></div>
								<!-- <div class="name" v-if="item.sku_info.sku_name!=''&&item.sku_info.sku_name!=undefined&&item.sku_info.sku_name!=null">{{item.sku_info.sku_name}}</div> -->
								<div class="name">{{item.product_name}}</div>
								<!-- <div class="msg" v-if="item.sku_info.sku_desc!=''&&item.sku_info.sku_desc!=undefined&&item.sku_info.sku_desc!=null">{{item.sku_info.sku_desc}}</div> -->
								<div class="msg" >{{item.product_desc}}</div>
								<div class="price" v-if="item.sku_info.sku_buy_status == 1">￥{{item.sku_info.sku_price}}</div>
							</router-link>
							<a v-if="item.sku_info.sku_buy_status != 1" class="advisory" @click.stop="openzxFn">立即咨询<i class="icon icon-right"></i></a>
						</li>
					</ul>
				</div>
			</div>
			<!--/足迹收藏-->
			<!--足迹收藏为空-->
			<div class="cart-empty2 w1190 clearfix" v-else>
				<div class="img-box"></div><div class="msg">您还没有浏览过任何服务~~</div>
			</div>
			<!--/足迹收藏为空-->
		</div>
		<!--/足迹-->
		<!--收藏-->
		<div v-show="zsIndex==1">
			<div class="collect-box" v-if="collectList.length">
				<div class="slide-box">
					<span v-if="collectList.length>5">
						<a href="javascript:void(0)" class="pre-btn" @click="prevFun2"><i class="icon-left"></i></a>
						<a href="javascript:void(0)" class="add-btn" @click="autoPlay2(collectList)"><i class="icon-right"></i></a>
					</span>
					<ul class="clearfix" :style="{marginLeft:mleft2+'px'}">
						<li v-for="(item,index) of collectList" v-if="item.sku_info!=''">
							<router-link :to="'/'+item.product_id"  target="_blank" >
								<div class="img-box"><img :src="item.product_img" /></div>
								<!-- <div class="name" v-if="item.sku_info.sku_name!=''&&item.sku_info.sku_name!=undefined&&item.sku_info.sku_name!=null">{{item.sku_info.sku_name}}</div> -->
								<div class="name" >{{item.product_name}}</div>
								<!-- <div class="msg" v-if="item.sku_info.sku_desc!=''&&item.sku_info.sku_desc!=undefined&&item.sku_info.sku_desc!=null">{{item.sku_info.sku_desc}}</div> -->
								<div class="msg" >{{item.product_desc}}</div>
								<div class="price" v-if="item.sku_info.sku_buy_status == 1">￥{{item.sku_info.sku_price}}</div>
							</router-link>
								<a v-if="item.sku_info.sku_buy_status != 1" class="advisory" @click.stop="openzxFn">立即咨询<i class="icon icon-right"></i></a>
						</li>
					</ul>
				</div>
			</div>
			<!--/足迹收藏-->
			<!--足迹收藏为空-->
			<div class="cart-empty2 w1190 clearfix" v-else>
				<div class="img-box"></div><div class="msg">您还没有收藏过任何服务~~</div>
			</div>
			<!--/足迹收藏为空-->
		</div>
		<!--/收藏-->
	  </div>
	  <bottom></bottom>
  	  <foot></foot>
    </div>
</template>

<script>
import fixedPart from '../../components/index/fixed.vue'
import headPart from '../../components/common/head.vue'
import top from '../../components/common/top.vue'
import bottom from '../../components/common/bottom.vue'
import foot from '../../components/common/foot.vue'
import {postFn,openzx} from '../../static/js/util.js'
import faildVue from '../account/faild.vue'
import {mapActions,mapState} from 'vuex'
import Api from '../../static/js/Api2.js'
export default {
metaInfo () {
	return {
		title: '购物车-创新科技服务云平台',
		meta: []
	}
},
  data(){
  	return{
		  slide:0,    //促销信息是否展开index
		  zsList:['我的足迹','我的收藏'],
		  zsIndex:0,
		  list:[],
		  page:1,
		  collectList:[],
		  historyList:[],
		  currentIndex: 0,
		  currentIndex2:0,
		  mleft: 0,
		  mleft2: 0,
		  priceData:{},
		  success:false,    //收藏成功后提醒弹层
		  success2:false,   //选中商品收藏成功后提醒
		  idArr:[],     //我的收藏夹商品id
		  allCheck:true,     //是否全选
		  act_select:true,
		  classWait:false,// 数量操作等待状态
		  fixed:false,
  	}
  },
  computed:mapState(["userInfo","isLogin"]),
  methods: {
	  ...mapActions(['update_num']),
	  openzxFn(){
		  openzx()
	  },
		cSlideFn(index){
			//促销展开OR收起
			this.list[index].slide = !this.list[index].slide
			this.slide = index
		},
		zsTabFn(index){
			//我的足迹、我的收藏切换
			this.zsIndex = index
		},
		autoPlay(list) {
		  const that = this;
		  console.log(list);
		  console.log(list.length,this.currentIndex,'=>autoplay');
			if(list.length - this.currentIndex > 5){
				this.currentIndex++;
				var i = 0;
				var _this = this;
				var t = setInterval(function(){
					if(i<240){
						i+=10; 
						_this.mleft -= 10.1;
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
						_this.mleft += 10.1;
					}else{
						clearInterval(t);
					}
    			},10);
			}	
		},
		autoPlay2(list) {
		  const that = this;
			if(list.length - this.currentIndex2 > 5){
				this.currentIndex2++;
				var i = 0;
				var _this = this;
				var t = setInterval(function(){
					if(i<240){
						i+=10; 
						_this.mleft2 -= 10.1;
					}else{
						clearInterval(t);
					}
    		},10);
			}
			this.page++
			this.getListFn()
		},
		prevFun2(){
			if(this.currentIndex2 > 0){
				this.currentIndex2--;
				var i = 240;
				var _this = this;
				var t = setInterval(function(){
					if(i>0){
						i-=10;
						_this.mleft2 += 10.1;
					}else{
						clearInterval(t);
					}
    			},10);
			}	
		},
		getListFn(){
			//获取收藏商品的列表
			const that = this;
			var data = {
				type:1,
				page:that.page,
				limit:20
			}
			var idArr = [];
			postFn('/user/user/collect/get',data,function(res){
				if(res.data.code==200){
					const list = res.data.data.list;
					for(var i=0,len=list.length; i<len; i++){
						idArr.push(list[i].collect_id)
					}
					that.idArr = idArr
					var goodsData = {
						product_ids :idArr + ''
					}
					postFn('/product/product/infos',goodsData,function(r){
						if(r.data.code==200){
							if(r.data.data!=''&&r.data.data!=null&&r.data.data_2.valid_sku_num>0){
								var list = []
								for(var i in r.data.data){
									if(r.data.data[i].sku_info!=''){
										list.push(r.data.data[i])
									}
								}
								that.collectList = list
							}
						}
					})
				}
			})
		},
		getFootFn(){
			//获取足迹商品列表
			const that = this;
			var data = {
				page:that.page,
				limit:20
			}
			var idArr = [];
			postFn('/user/user/footprint/get',data,function(res){
				console.log(res)
				if(res.data.code==200){
					const list = res.data.data.list;
					for(var i=0,len=list.length; i<len; i++){
						idArr.push(list[i].footprint_id)
					}
					that.idArr = idArr
					var goodsData = {
						product_ids :idArr + ''
					}
					postFn('/product/product/infos',goodsData,function(r){
						if(r.data.code==200){
							if(r.data.data!=''&&r.data.data!=null&&r.data.data_2.valid_sku_num>0){
								var list = []
								for(var i in r.data.data){
									if(r.data.data[i].sku_info!=''){
										list.push(r.data.data[i])
									}
								}
								that.historyList = list
							}
						}
					})
				}
			})
		},
		addCollect(collect_id,s){
			 //收藏商品
		  const that = this;
		  var data = {
			  type:1,
			  collect_id:collect_id
		  }
		  postFn('/user/user/collect/add',data,function(res){
				if(res.data.code==200||res.data.code==531||res.data.msg.indexOf('已经收藏')!=-1){
					// s = true
					// setTimeout(function(){
					// 	s = false
					// },3000)
					// console.log('收藏成功')
					that.$message({
						message: '成功加到我的收藏',
						type: 'success',
						duration:1500,
					});
					that.checkcollects(that.list);
					that.getListFn();
				}else{
					console.log(res)
				}
		  })
		},
		actTabFn(ind,index,id,i){
			//促销活动切换
			if(i!=1){
				const that = this;
				var data = {
					uid:that.userInfo.id,
					cart_id:id,
					act_id:that.list[index].activity[ind].info.act_id
				}
				postFn('/product/cart/change_select_act',data,function(res){
					if(res.data.code==200){
						if(ind==that.list[index].activity.length-1){
							that.act_select = false
						}else{
							that.act_select = true
						}
						that.cartListFn()
					}
				})
			}
		},
		collectFn(index){
			//单个收藏
			this.addCollect(this.list[index].product_id,this.list[index].iscollect)
		},
		collect2Fn(){
			//收藏选中项
			const that = this;
			var arr = [];
			for(var i=0,len=that.list.length; i<len; i++){
				if(that.list[i].select){
					arr.push({type:1,collect_id:that.list[i].product_id})
				}
			}
			if(arr.length==0){
				this.$message({
                    message: '抱歉你并没有选中任何商品',
                    type: 'error',
                    duration:1500,
                });
			}else{
				var data={
			  		collect_arr:arr
				}
				postFn('/user/user/collect/adds',data,function(res){
					if(res.data.code==200||res.data.code==531||res.data.msg.indexOf('已经收藏')!=-1){
						// s = true
						// setTimeout(function(){
						// 	s = false
						// },3000)
						// console.log('收藏成功')
						that.$message({
							message: '成功加到我的收藏',
							type: 'success',
							duration:1500,
						});
						that.checkcollects(that.list);
						that.getListFn();
					}else{
						console.log(res)
					}
				})
			}
			
		},
	    delFn(cart_id){
		  //删除购物车商品
		  const that = this;
		  var data = {
			  uid:that.userInfo.id,
			  cart_id:cart_id
		  }
		  postFn('/product/cart/delete',data,function(res){
			  if(res.data.code==200){
				  console.log('删除成功')
				  that.cartListFn()
			  }else{
				  console.log(res)
			  }
		  })
	   },
		singleDel(index){
				//单个删除
			this.delFn(this.list[index].cart_id)
		},
		allDel(){
			//删除多个
			var arr = [];
			for(var i=0,len=this.list.length; i<len; i++){
				if(this.list[i].select){
					arr.push(this.list[i].cart_id)
				}
			}
			if(arr.length==0){
				this.$message({
                    message: '抱歉你并没有选中任何商品',
                    type: 'error',
                    duration:1500,
                });
			}else{
				this.delFn(arr+'')
			}
			
		},
		reduceFn(index){
			//减少商品数量
			if(!this.classWait){
				const that = this;
				if(that.list[index].cart_count>1){
					that.list[index].cart_count -=1
				}
				that.reviseCount(index,that.list[index].cart_count)
			}
		},
		addFn(index){
			//增加商品数量
			if(!this.classWait){
				const that = this;
				that.list[index].cart_count +=1
				that.reviseCount(index,that.list[index].cart_count)
			}
		},
		changeNumFn(index){
			//输入框修改商品数量
			const that = this,reg = /\D|^0/g;
			if(that.list[index].cart_count==0){
				that.list[index].cart_count=1;
			}
			that.reviseCount(index,that.list[index].cart_count)
		},
		reviseCount(index,num){
			//修改购物车数量
			this.classWait=true;
			const that = this;
			var data = {
				uid:that.userInfo.id,
				cart_id:that.list[index].cart_id,
				num:num
			}
			postFn('/product/cart/modify_num',data,function(res){
				if(res.data.code==200){
					console.log('修改数量成功')
					that.cartListFn()
					that.classWait=false;
				}else{
					console.log(res)
					that.classWait=false;
				}
			})
		},
		cartListFn(){
			//获取购物车列表数据
			const that = this;
			var data = {
					uid:that.userInfo.id
				}
			postFn('/product/cart/list',data,function(res){
				console.log(res)
				if(res.data.code==200){ 
					var list = [],select = [],num = 0,obj = null;
					list = res.data.data.list
					if(list.length){
						for(var i=0,len=list.length; i<len; i++){
							num += list[i].cart_count
							list[i].activity = [];
							list[i].slide = true
							for(var n in list[i].act_list){
								list[i].activity.push(list[i].act_list[n])
								list[i].activity.forEach((el,index)=>{
									if(el.info.is_select==1&&index>1){
										list[i].slide =false;
									}
								})
							}
							if(list[i].show==1){
								list[i].select = true
								select.push(list[i])
							}else{
								list[i].select = false
							}
							if(list[i].sku_info.is_on_sale==1&&list[i].sku_info.sku_buy_status == 1){
								list[i].select2 = false
								
							}else if(list[i].sku_info.is_on_sale==1&&list[i].sku_info.sku_buy_status == 2){
								list[i].shoppingMsg="此商品可在线咨询";
								list[i].select2 = true
								list[i].select = false
							}else{
								list[i].shoppingMsg="已下架";
								list[i].select2 = true
								list[i].select = false
							}
						}
						var canSelect=[];
						list.forEach(el=>{
							if(el.select2!=true){
								canSelect.push(el);
							}
						})
						if(canSelect.length==select.length&&canSelect.length!=0){
							that.allCheck = true
						}else{
							that.allCheck = false
						}
					}
					that.update_num(num)
					that.checkcollects(list);
					// that.list = list
					//购物车列表大于等于3条，下面的结算条吸附到底部
					if(list.length>=3){
						that.fixed = true
					}
					that.priceData = res.data.data.price_data
				}
			})
		},
		reviseCheckFn(cart_id,show){
			//修改选中状态
			const that = this;
			var data = {
				uid:that.userInfo.id,
				cart_id:cart_id,
				show:show
			}
			postFn('/product/cart/change_select',data,function(res){
				if(res.data.code==200){
					console.log('修改选中状态成功')
					that.cartListFn()
				}else{
					console.log(res)
				}
			})
		},
		singleCheck(index){
			//单个修改选中状态
			const that = this;
			if(that.list[index].show==1){
				this.reviseCheckFn(this.list[index].cart_id,2)
			}else{
				this.reviseCheckFn(this.list[index].cart_id,1)
			}
		},
		allCheckFn(){
			//全选修改选中状态
			const that = this;
			var arr = [];
			for(var i=0,len=that.list.length; i<len; i++){
				arr.push(that.list[i].cart_id)
			}
			if(that.allCheck){
				this.reviseCheckFn(arr+'',2)
				that.allCheck = false
			}else{
				this.reviseCheckFn(arr+'',1)
				that.allCheck = true
			}
		},
		accountFn(){
			this.cartListFn()
			if(this.priceData.count!=0&&parseInt(this.priceData.pay_price)!=0){
				this.$router.push('/pay')
			}else{
				this.$message({
                    message: '抱歉你并没有选中任何可购买的商品',
                    type: 'error',
                    duration:1500,
                });
			}
		},
		checkcollects(list){
			//检查是否收藏
			var data=[];
			list.forEach(element => {
				let c={
					type:1,
					collect_id:element.product_id
				}
				data.push(c);
			});
			Api.postCheckcollects(data).then(res=>{
				list.forEach(element => {
					res.data.data.forEach(el2=>{
						if(element.product_id==el2.collect_id){
							if(el2.state=='true'){
								element.iscollect=true;
							}else{
								element.iscollect=false;
							}
							// element.iscollect=el2.state;
						}
					})
					
				})
				this.list=list
			})

		}
 },
 components: {
    top,
    bottom,
	foot,
	fixedPart,
	headPart
 },
 created(){
	const that = this;
	if(that.userInfo!=''&&that.isLogin!=false){
		that.getFootFn()
		that.getListFn()
		that.cartListFn()
		//滚动时结算条是否吸附到底部
		window.onscroll = function(){
		 if(that.list.length>=3){
			 
			 var top = $(window).scrollTop();
			 console.log($('.c-msg').get(0).getBoundingClientRect().top);
			if($('.c-msg').get(0).getBoundingClientRect().top<740){
				that.fixed = false
			}else{
				that.fixed = true
			}
		 }
		};
		console.log('我走这里了')
	}else{
		that.$router.push('/login?cart=true')
		console.log('我去登陆了',that.userInfo,that.isLogin);
	}
 },
 destroyed () {
	 window.onscroll=null;
 }
}
</script>

<style lang="scss">
$hover:#e52e3a;
$cur:#FF3342;
.pointer{cursor: pointer;}
.cart{
	font-size: 14px;
	.head-box{
		padding-bottom: 36px;
	}
	.main{
		background: #fafafa;padding:20px 0 80px;
		.coupon{
			line-height: 40px;background: #fff;position: relative;
			a{
				color:$hover;
				&:hover{
					color:$cur;
				}
			}
			span{padding:0 20px;}
			i{
				font-size: 30px;vertical-align: middle;
			}
		}
		.content{
			margin-top: 10px;background: #fff;
		}
		.cart-empty{
			padding:55px 0;
			.img-box,.msg{
				float: left;height:255px;
			}
			.img-box{
				width:545px;background: url(../../static/images/cart/empty.jpg) no-repeat right top;
			}
			.msg{
				padding:82px 0 0 54px;
				line-height: 26px;font-size: 16px;
				.link{
					background: $hover;color:#fff;text-align: center;border-radius: 2px;
					width:80px;height:35px;display:block;line-height: 35px;margin-top:16px;
					&:hover{
						background: $cur;
					}
				}
			}
		}
		.cart-empty2{
			padding:55px 0 30px;
			.img-box,.msg{
				float: left;height:128px;
			}
			.img-box{
				width:500px;background: url(../../static/images/empty.png) no-repeat right top;
			}
			.msg{
				padding-left:38px;line-height: 128px;font-size: 16px;
			}
		}
		.more{
			position: absolute;line-height: 20px;font-size: 12px;cursor: pointer;
			bottom: 0;right:0;width:50px;text-align: right;color:#999;
			.ico{
				font-size: 25px;vertical-align: middle;
			}
		}
		.cart-list{
			.allcheck{
				width:14px;height:14px;display: inline-block;background: url(../../static/images/cart/radio.png) no-repeat -13px -14px;vertical-align: middle;cursor: pointer;
				&.cur{
					background-position: -13px top;
				}
			}
			padding:0 20px 30px;
			.tab1,.tab2,.tab3,.tab4,.tab5,.tab6,.tab7,.tab8{
				float: left;
			}
			.tab1,.tab4,.tab5,.tab6{
				text-align: center;
			}
			.tab1{width:62px;}
			.tab2,.tab5{width:120px;}
			.tab3{width:280px;}
			.tab4{width:188px;}
			.tab6{width:288px;}
			.tab7{width:90px;}
			.tab8{width:588px;}
			.tab5{
				.bg{
					display: none;
				}
			}
			.top{
				padding-top:14px;border-bottom:1px solid #eee;
				.tab1,.tab2,.tab3,.tab4,.tab5,.tab6,.tab7{
					line-height: 50px;
				}
			}
			.list{
				padding:20px 0;border-bottom:1px dotted #ddd;overflow: hidden;
				.check,.img-box{
					line-height: 100px;
				}
				.img-box{
					height:98px;width:98px;border:1px solid #eee;position: relative;
					a{
						display: block;
					}
					img{
						height:98px;width:98px;
					}
					.layer{
						position: absolute;width:98px;line-height: 32px;text-align: center;color: #999;left:0;bottom: -28px;font-size: 12px;
						display: none;
					}
					.bg{
						background: rgba(255,255,255,0.2);position: absolute;width:50px;height:98px;left:-62px;top:0;z-index: 2;display: none;
					}
				}
				.name{
					font-size: 16px;
				}
				.name,.price,.u-price,.collect{
					line-height: 30px;
				}
				.c-price,.del,.msg{line-height: 24px;}
				.c-price{
					font-size: 12px;color:#999;
					em{color:$hover;font-weight: bold;font-size: 14px;}
				}
				.msg{font-size: 12px;padding-right: 20px;text-overflow:ellipsis;white-space: nowrap;overflow: hidden;color:#999;width:300px;}
				.collect,.del{
					color:#4685c3;display: block;cursor: pointer;
					&:hover{
						color:$hover;
					}
				}
				.iscollect{
					line-height: 30px;
					color: #ccc;
				}
				.collect{
					position: relative;
					.layer{
						position: absolute;height:50px;line-height: 50px;background: #fff;width:200px;text-align: center;
						color: green;box-shadow: 0 1px 3px 0 rgba(0,0,0,0.08);z-index: 2;bottom:-50px;border:1px solid #eee;right: 0;
						i{
							font-size: 20px;vertical-align: middle;margin-right: 8px;
						}
					}
				}
				.add,.reduce,.num{
					float: left;height:28px;text-align: center;line-height: 28px;
				}
				.add,.reduce{
					border:1px solid #eee;width:28px;cursor: pointer;&.classWait{cursor: wait};
				}
				.num{
					border:none;border-top:1px solid #eee;border-bottom:1px solid #eee;width:60px;font-size: 16px;
				}
				.price{
					color:$hover;font-weight: bold;padding:0;text-align: center;
					&.cur{
						font-weight: normal;color:#333;text-decoration:line-through;padding-left:65px;
					}
				}
				.type{
					margin:16px 0 10px;line-height: 20px;background: #eee;font-size: 12px;padding:0 10px;display:inline-block;color:#999;
					em{padding-left:10px;}
				}
				.cxBox{
					position: relative;width:588px;padding-left:182px;
					&.hidden{height:60px;overflow: hidden;}
				}
				.cx{
					position: relative;
					.layer{
						width:588px;height: 500px;left:182px;top:0;background: rgba(255,255,255,0.01);position: absolute;z-index: 2;display: none;
					}
				}
				.c-list{
					font-size: 12px;padding:10px 60px 0 0;line-height: 20px;vertical-align: middle;
					overflow: hidden;text-overflow:ellipsis;white-space: nowrap;cursor: pointer;
					.radio{
						display: inline-block;width:13px;height: 13px;background: url(../../static/images/cart/radio.png) no-repeat left -13px;margin-right: 5px;
						&.cur{
							background-position: left top;
						}
					}
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
				&.disabled{
					color: #ccc;
					.img-box{
						.layer,.bg{
							display: block;
						}
					}
					.cx{
						.layer{
							display: block;
						}
					}
					.c-list .c-name{background: #eee;}
					a,.price,.msg,.type,.c-list .c-name,.c-status,.c-type,.more{
						color: #ccc;
					}
					.tab5{
						position: relative;
						.bg{
							position: absolute;
							top:0;
							left: 0;
							width:300px;
							height: 30px;
							z-index: 3;
							background: rgba(255,255,255,0.2);
							display: block;
						}
					}
				}
			}
			.c-msg{
				height:22px;font-size: 12px;padding-right: 155px;color:$hover;text-align: right;padding-top:20px;
			}
			.bottom{
				height:60px;position: relative;
				.box{width:1150px;margin:0 auto;background: #fafafa;}
				.fixed.box{
					position: fixed;bottom: 0;z-index: 5;background: #f0f0f0;box-sizing: border-box;left:50%;
					transform: translate(-50%,0);width:1200px;
					width: 1200px;
				}
				&.fixed{
					box-shadow: 0px -2px 3px rgba(0,0,0,.07);
					position: fixed;
					background: #fafafa;
					bottom: 0;
					left: 0;
					width: 100%;
					z-index:3;
					ul{
						li{
							&.btn-box{
								a{
									position: relative;
									top:-2px;
								}
							}
							
						}
					}
					
					
				}
				.layer{
						position: absolute;height:50px;line-height: 50px;background: #fff;width:200px;text-align: center;left:210px;top:-60px;
						color: green;box-shadow: 0 1px 3px 0 rgba(0,0,0,0.08);z-index: 2;border:1px solid #eee;right: 0;
						i{
							font-size: 20px;vertical-align: middle;margin-right: 8px;
						}
				}
				.fun{
					padding-left:24px;line-height:60px;
					.check-box{
						.allcheck,label{vertical-align: middle;}
						.allcheck{margin-right: 25px;}
					}
					.check{margin-right:30px;}
					.b-collect,.b-del{
						color:#4685c3;
						&:hover{
							color:$hover;
						}
					}
					.b-del{margin:0 20px 0 44px;}
				}
				ul{
					float: right;
					li{
						float: left;height:36px;line-height:36px;margin-top:12px;
						&.price-list,&.b-num{
							color:#999;
						}
						&.b-num{
							padding-right: 20px;
							em{color:$hover;font-weight: bold;}
						}
						&.price-list{
							padding:0 18px;border-right:1px solid #eee;border-left:1px solid #eee;
							span{
								display: block;
								&:last-child{
									padding-top:10px;
								}
								em{
									color:#333;
								}
							}
						}
						&.b-count{
							padding:0 18px;
							em{font-size: 24px;font-weight: bold;color:$hover;}
						}
						&.btn-box{
							height:60px;margin:0;width:120px;text-align:center;font-size:20px;
							a{
								display: block;color:#fff;background: $hover;height: 60px;line-height: 60px;
								&:hover{
									background:$cur;
								}
							}
						}
					}
				}
			}
		}
		.collect-title{
				height:38px;font-size: 16px;border-bottom:2px solid $hover;margin:20px auto 0;width:1200px;background:#fff;
				li{
					width:104px;text-align: center;float: left;line-height: 38px;cursor: pointer;
					&.cur{
						background:$hover;color:#fff;
					}
				}
			}
		.collect-box{
			margin:0 auto;width:1210px;padding:10px 5px 0;height:230px;position: relative;
			.slide-box{
				height: 240px;overflow: hidden;
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
					left:-40px;
				}
				.add-btn{
					right:-40px;
				}
				ul{width:10000px;}
				li{
					float: left;width:230px;margin:0 6px;background:#fff;text-align: center;height:230px;cursor: pointer;display:block;
					.img-box{
						width:75px;height:75px;margin:28px auto 18px;text-align: center;
						img{
							width:75px;height: 75px;
						}
					}
					.name,.msg{
						padding:0 28px;overflow: hidden;text-overflow: ellipsis;
						}
					.name{
						font-size: 16px;line-height: 18px;height:36px;
					}
					.msg{
						line-height: 30px;color:#999;font-size: 12px;overflow: hidden;text-overflow: ellipsis;white-space:nowrap;
					}
					.price{
						font-size: 16px;color:$hover;font-weight: bold;
					}
					&:hover{
						margin-top:-4px;
					}
					.sku_info{
						font-size: 16px;
					}
				}
			}
		}
	}
}


</style>
<style lang="scss" scoped>
.advisory{
	position: relative;
	display: block;
	width: 100px;
	height: 18px;
	color: #4685c3;
	text-align: center;
	margin: 14px auto 0;
	top:-16px;
	cursor: pointer;
	z-index: 1;
	.icon{
		font-size: 16px;
		color: inherit;
		font-weight: bold;
		// vertical-align: text-bottom;
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

