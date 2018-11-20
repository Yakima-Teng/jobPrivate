<template>
 <div class="container-main">
    <top></top>
     <userHead></userHead>
     <div class="orderDetails-box">
         <div class="orderDet-body">
             <div class="el-body">
                 <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/home' }">个人中心</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{path:'/home/order?num=0'}">我的订单</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{path:'/home/order?num='+ordernum}">{{orderTap}}</el-breadcrumb-item>
                    <el-breadcrumb-item >订单号:{{orderData.info.ordeNnumber}}</el-breadcrumb-item>
                </el-breadcrumb>
             </div>
            <div class="orderDet-t clearfix">
                <div class="order-l">
                    <p>订单号: <span >{{orderData.info.ordeNnumber}}</span></p>
                    <p>{{orderData.info.orderCreateTime}}</p>
                    <p :class="[{isconf:isconf},{iswait:iswait}]">{{orderData.info.orderState}}</p>
                    <button @click="confirm" v-if="orderData.info.confirm_type==0">确认服务</button>
                    <p class="time" v-if="orderData.info.payState==1"><i></i><span>剩余{{orderData.info.remainPay_hour}}小时{{orderData.info.remainPay_min}}分</span></p>
                    <button @click="pay" v-if="orderData.info.payState==1">付款</button>
                    <p class="nth-f">联系顾问 <i> <span> <em></em>{{orderData.adviser.mailbox}}</span></i><i> <span><em></em>{{orderData.adviser.mobile}}</span></i></p>
                </div>
                <div class="order-r" v-if="orderData.info.orderState!='已取消'">
                    <trackfive  :dataD="orderData.schedule"></trackfive>
                </div>
                <div class="order-rt" v-else>
                    <trackthree  :dataD="orderData.schedule"></trackthree>
                </div>
            </div>
            <div class="order-details clearfix">
                <div class="det-l" v-if="notrack==false">
                    <p class="det-t">服务跟踪</p>
                    <p class="det-n">{{orderData.server.name}}</p>
                    <tracking :dataT="orderData.server.step" type='server'></tracking>
                </div>
                <ul class="det-r" :class="{notrack:notrack}" v-if="notrack==false">
                    <li>
                        <div v-if='orderData.info.payState==1||orderData.info.payState==4'>
                            <h6>付款信息</h6>
                            <p>
                                <em>付款方式 : </em>
                                <span>{{orderData.info.payName}}</span>
                            </p>
                            <p>
                                <em>商品总额 :</em>
                                <span>￥{{orderData.info.ordermount}}</span>
                            </p>
                            <p>
                                <em>优惠金额 :</em>
                                <span>￥{{orderData.info.discountPrice}}</span>
                            </p>
                            <p>
                                <em>应付总额 :</em>
                                <span>￥{{orderData.info.payPrice}}</span>
                            </p>
                        </div>
                        <div v-else>
                            <h6>付款信息</h6>
                            <p>
                                <em>付款方式 : </em>
                                <span>{{orderData.paymentInfo.payName}}</span>
                            </p>
                            <p>
                                <em>商品总额 :</em>
                                <span>￥{{orderData.paymentInfo.sumPrice}}</span>
                            </p>
                            <p>
                                <em>优惠金额 :</em>
                                <span>￥{{orderData.paymentInfo.discountPrice}}</span>
                            </p>
                            <p>
                                <em>付款总额 :</em>
                                <span>￥{{orderData.paymentInfo.payPrice}}</span>
                            </p>
                        </div>
                        <div v-if='orderData.contractInfo!=""'>
                            <h6>合同信息</h6>
                            <p>
                                <em>合同编号 : </em>
                                <span>{{orderData.contractInfo.contractNum}}</span>
                            </p>
                            <p>
                                <em>合同主体 : </em>
                                <span>{{orderData.contractInfo.mainTitle}}</span>
                            </p>
                            <p>
                                <em>签订日期 : </em>
                                <span>{{orderData.contractInfo.createDate}}</span>
                            </p>
                            <p>
                                <em>合同类型 : </em>
                                <span>{{orderData.contractInfo.type}}</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div v-if='orderData.adviser!=""'>
                            <h6>顾问信息</h6>
                            <p>
                                <em>姓名 : </em>
                                <span>{{orderData.adviser.adv_name}}</span>
                            </p>
                            <p>
                                <em>工号 : </em>
                                <span>{{orderData.adviser.job_number}}</span>
                            </p>
                            <p>
                                <em>电话 : </em>
                                <span>{{orderData.adviser.mobile}}</span>
                            </p>
                            <p>
                                <em>邮箱 : </em>
                                <span>{{orderData.adviser.mailbox}}</span>
                            </p>
                        </div>
                        <div v-if='orderData.invInfo!=""'>
                            <!-- <h6>发票信息</h6>
                            <p>
                                <em>发票类型 : </em>
                                <span>{{orderData.invInfo.type}}</span>
                            </p>
                            <p>
                                <em>发票抬头 : </em>
                                <span>{{orderData.invInfo.title}}</span>
                            </p>
                            <p>
                                <em>发票内容 : </em>
                                <span>{{orderData.invInfo.content}}</span>
                            </p> -->
                        </div>
                        
                    </li>
                    <li>
                        <div v-if='orderData.contactInfo!=""'>
                            <h6>联系人信息</h6>
                            <p>
                                <em>联系人 : </em>
                                <span>{{orderData.contactInfo.contactName}}</span>
                            </p>
                            <p>
                                <em>地&nbsp;&nbsp;&nbsp;址 : </em>
                                <span class="addressL">{{orderData.contactInfo.contactAddress}}</span>
                            </p>
                            <p>
                                <em>手机号 : </em>
                                <span>{{orderData.contactInfo.phone}}</span>
                            </p>
                        </div>
                        <!-- <div>
                            <h6>快递信息</h6>
                            <p>
                                <em>第三方快递 : </em>
                                <span>圆通</span>
                            </p>
                            <p>
                                <em>快递单号 : </em>
                                <span>456788255671</span>
                            </p>
                            <p>
                                <em>发货时间 : </em>
                                <span>2018-02-10    10:12:10</span>
                            </p>
                        </div> -->
                    </li>
                </ul>
                <ul class="det-r" :class="{notrack:notrack}" v-else>
                    <li>
                        <div v-if='orderData.info.payState==1||orderData.info.payState==4'>
                            <h6>付款信息</h6>
                            <p>
                                <em>付款方式 : </em>
                                <span>{{orderData.info.payName}}</span>
                            </p>
                            <p>
                                <em>商品总额 :</em>
                                <span>{{orderData.info.ordermount}}</span>
                            </p>
                            <p>
                                <em>优惠金额 :</em>
                                <span>{{orderData.info.discountPrice}}</span>
                            </p>
                            <p>
                                <em>应付总额 :</em>
                                <span>{{orderData.info.payPrice}}</span>
                            </p>
                        </div>
                        <div v-else>
                            <h6>付款信息</h6>
                            <p>
                                <em>付款方式 : </em>
                                <span>{{orderData.paymentInfo.payName}}</span>
                            </p>
                            <p>
                                <em>商品总额 :</em>
                                <span>{{orderData.paymentInfo.sumPrice}}</span>
                            </p>
                            <p>
                                <em>优惠金额 :</em>
                                <span>{{orderData.paymentInfo.discountPrice}}</span>
                            </p>
                            <p>
                                <em>付款总额 :</em>
                                <span>{{orderData.paymentInfo.payPrice}}</span>
                            </p>
                        </div>
                        <div v-if='orderData.adviser!=""'>
                            <!-- <h6>发票信息</h6>
                            <p>
                                <em>发票类型 : </em>
                                 <span>{{orderData.invInfo.type}}</span>
                            </p>
                            <p>
                                <em>发票抬头 : </em>
                                 <span>{{orderData.invInfo.title}}</span>
                            </p>
                            <p>
                                <em>发票内容 : </em>
                                <span>{{orderData.invInfo.content}}</span>
                            </p> -->
                        </div>
                        
                    </li>
                    <li>
                        <div v-if='orderData.adviser!=""'>
                            <h6>顾问信息</h6>
                            <p>
                                <em>姓名 : </em>
                                <span>{{orderData.adviser.adv_name}}</span>
                            </p>
                            <p>
                                <em>工号 : </em>
                                <span>{{orderData.adviser.job_number}}</span>
                            </p>
                            <p>
                                <em>电话 : </em>
                                <span>{{orderData.adviser.mobile}}</span>
                            </p>
                            <p>
                                <em>邮箱 : </em>
                                <span>{{orderData.adviser.mailbox}}</span>
                            </p>
                        </div>
                        <!-- <div>
                            <h6>快递信息</h6>
                            <p>
                                <em>第三方快递 : </em>
                                <span>圆通</span>
                            </p>
                            <p>
                                <em>快递单号 : </em>
                                <span>456788255671</span>
                            </p>
                            <p>
                                <em>发货时间 : </em>
                                <span>2018-02-10    10:12:10</span>
                            </p>
                        </div> -->
                    </li>
                    <li>
                        <div v-if='orderData.contactInfo!=""'>
                            <h6>联系人信息</h6>
                            <p>
                                <em>联系人 : </em>
                                <span>{{orderData.contactInfo.contactName}}</span>
                            </p>
                            <p>
                                <em>地&nbsp;&nbsp;&nbsp;址 : </em>
                                <span class="addressL">{{orderData.contactInfo.contactAddress}}</span>
                            </p>
                            <p>
                                <em>手机号 : </em>
                                <span>{{orderData.contactInfo.phone}}</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div v-if='orderData.contractInfo!=""'>
                            <h6>合同信息</h6>
                            <p>
                                <em>合同编号 : </em>
                                <span>{{orderData.contractInfo.contractNum}}</span>
                            </p>
                            <p>
                                <em>合同主体 : </em>
                                <span>{{orderData.contractInfo.mainTitle}}</span>
                            </p>
                            <p>
                                <em>签订日期 : </em>
                                <span>{{orderData.contractInfo.createDate}}</span>
                            </p>
                            <p>
                                <em>合同类型 : </em>
                                <span>{{orderData.contractInfo.type}}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="order-info">
                <div class="info-t">
                    <span>服务信息</span>
                    <!-- <span>商品编号 : <em>PA010011</em> </span> -->
                    <span>和我联系<i @click="open"></i></span>
                </div>
                <div class="info-c clearfix" v-if='orderData.info.goods==undefined'>
                    <div class="order-z clearfix">
                        <div @click="togoods(orderData.info)">
                            <img :src="orderData.info.productImg" alt="">
                        </div>
                        <div>
                            <p @click="togoods(orderData.info)" :title="orderData.info.productName">{{orderData.info.productName}}</p>
                            <p>{{orderData.info.productSku}}</p>
                            <p :title="orderData.info.productDesc">{{orderData.info.productDesc}}</p>
                        </div>
                        <p class="c-list"><em class="c-name">{{orderData.info.activity_type}}</em> <span class="c-status">{{orderData.info.activity_title}}</span> <span class="c-type">{{orderData.info.activity_content}}</span></p>
                        <div class="order-pri">
                            <span>￥{{orderData.info.productSkuprice}}</span>
                            <span>×{{orderData.info.num}}</span>
                        </div>
                    </div>
                    <div class="order-p">
                        <p :class="{nomal:orderData.info.sumPrice==orderData.info.payPrice}">总额:￥{{orderData.info.sumPrice}}</p>
                        <p class="ful" v-if='(orderData.info.sumPrice!=orderData.info.payPrice)&&(orderData.info.orderState=="已取消"||orderData.info.orderState=="等待付款")'>应付:￥{{orderData.info.payPrice}}</p>
                        <p class="ful" v-if='(orderData.info.sumPrice!=orderData.info.payPrice)&&(orderData.info.orderState=="办理中"||orderData.info.orderState=="已完成")'>实付:￥{{orderData.info.payPrice}}</p>
                    </div>
                    <!-- <div class="order-z clearfix">
                        <div>
                            <img :src="orderData.info.productImg" alt="">
                        </div>
                        <div>
                            <p>{{orderData.info.productName}}</p>
                            <p>{{orderData.info.productSku}}</p>
                            <p :title="orderData.info.productDesc">{{orderData.info.productDesc}}</p>
                        </div>
                        <p class="c-list"><em class="c-name">{{orderData.info.activity_type}}</em> <span class="c-status">{{orderData.info.activity_title}}</span> <span class="c-type">{{orderData.info.activity_content}}</span></p>
                        <div class="order-pri">
                            <span>￥{{orderData.info.productSkuprice}}</span>
                            <span>×{{orderData.info.num}}</span>
                        </div>
                    </div>
                    <div class="order-z clearfix">
                        <div>
                            <img :src="orderData.info.productImg" alt="">
                        </div>
                        <div>
                            <p>{{orderData.info.productName}}</p>
                            <p>{{orderData.info.productSku}}</p>
                            <p :title="orderData.info.productDesc">{{orderData.info.productDesc}}</p>
                        </div>
                        <p class="c-list"><em class="c-name">{{orderData.info.activity_type}}</em> <span class="c-status">{{orderData.info.activity_title}}</span> <span class="c-type">{{orderData.info.activity_content}}</span></p>
                        <div class="order-pri">
                            <span>￥{{orderData.info.productSkuprice}}</span>
                            <span>×{{orderData.info.num}}</span>
                        </div>
                    </div>
                    <div class="order-z clearfix borderNone" >
                        <div>
                            <img :src="orderData.info.productImg" alt="">
                        </div>
                        <div>
                            <p>{{orderData.info.productName}}</p>
                            <p>{{orderData.info.productSku}}</p>
                            <p :title="orderData.info.productDesc">{{orderData.info.productDesc}}</p>
                        </div>
                        <p class="c-list"><em class="c-name">{{orderData.info.activity_type}}</em> <span class="c-status">{{orderData.info.activity_title}}</span> <span class="c-type">{{orderData.info.activity_content}}</span></p>
                        <div class="order-pri">
                            <span>￥{{orderData.info.productSkuprice}}</span>
                            <span>×{{orderData.info.num}}</span>
                        </div>
                    </div> -->
                </div>
                <div class="info-c clearfix" v-else>
                    <div v-for="(item,index) in orderData.info.goods" :key="index">
                        <div class="order-z clearfix" v-if="index==0">
                            <div @click="togoods(orderData.info.goods[0])">
                                <img :src="orderData.info.goods[0].productImg" alt="">
                            </div>
                            <div>
                                <p @click="togoods(orderData.info.goods[0])" :title="orderData.info.goods[0].productName">{{orderData.info.goods[0].productName}}</p>
                                <p>{{orderData.info.goods[0].productSku}}</p>
                                <p :title="orderData.info.goods[0].productDesc">{{orderData.info.goods[0].productDesc}}</p>
                            </div>
                            <p class="c-list"><em class="c-name">{{orderData.info.goods[0].activity_type}}</em> <span class="c-status">{{orderData.info.goods[0].activity_title}}</span> <span class="c-type">{{orderData.info.goods[0].activity_content}}</span></p>
                            <div class="order-pri">
                                <span>￥{{orderData.info.goods[0].productSkuprice}}</span>
                                <span>×{{orderData.info.goods[0].num}}</span>
                            </div>
                        </div>
                        <div class="order-p" v-if="index==0">
                            <p :class="{nomal:orderData.info.ordermount==orderData.info.payPrice}">总额:￥{{orderData.info.ordermount}}</p>
                            <p class="ful" v-if='orderData.info.ordermount!=orderData.info.payPrice'>应付:￥{{orderData.info.payPrice}}</p>
                        </div>
                        <div class="order-z clearfix" v-if="index>0" :class="{borderNone:orderData.info.goods.length==index+1}">
                            <div @click="togoods(item)">
                                <img :src="item.productImg" alt="">
                            </div>
                            <div>
                                <p @click="togoods(item)" :title="item.productName">{{item.productName}}</p>
                                <p>{{item.productSku}}</p>
                                <p :title="item.productDesc">{{item.productDesc}}</p>
                            </div>
                            <p class="c-list"><em class="c-name">{{item.activity_type}}</em> <span class="c-status">{{item.activity_title}}</span> <span class="c-type">{{item.activity_content}}</span></p>
                            <div class="order-pri">
                                <span>￥{{item.productSkuprice}}</span>
                                <span>×{{item.num}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
     </div>
    <div class="mask" v-show="mask"></div>
    <div class="pop sus" v-show="sus">
         <p></p>
         <p>感谢您对本次服务的反馈！</p>
         <button class="cancel" @click="close">关闭</button>
         <i class="close" @click="close"></i>
     </div>
     <bottom></bottom>
     <foot></foot>
 </div>
</template>

<script>
import top from '../common/top.vue'
import foot from '../common/foot.vue'
import bottom from '../common/bottom.vue'
import userHead from '../common/user/userhead.vue'
import trackfive from '../common/user/trackfive.vue';
import trackthree from '../common/user/trackthree.vue';
import track from '../common/user/track.vue';
import {postFn,openzx} from '../../static/js/util.js';
import {mapState} from 'vuex'
import Api from '../../static/js/api2.js'
export default {
metaInfo () {
    return {
        title: '订单详情-创新科技服务云平台',
    }
},
 data() {
  return {
      ordernum:0,
      orderId:'124556286567',
    //   dataD:[{
    //       stu:3,
    //       name:"订单提交",
    //       time:'2018-08-03   22:15:30',
    //   },{
    //       stu:3,
    //       name:"付款成功",
    //       time:'2018-08-03   22:15:30',
    //   },{
    //       stu:3,
    //       name:"订单受理",
    //       time:'2018-08-03   22:15:30',
    //   },{
    //       stu:2,
    //       name:"资料递交官方单位",
    //       time:'2018-08-03   22:15:30',
    //   },{
    //       stu:1,
    //       name:"完成",
    //       time:'2018-08-03   22:15:30',
    //   },
    //   ],
      dataF:[{
          stu:3,
          name:"订单提交",
          time:'2018-08-03   22:15:30',
      },{
          stu:3,
          name:"已取消",
          time:'2018-08-03   22:15:30',
      },{
          stu:3,
          name:"完成",
          time:'2018-08-03   22:15:30',
      },
      ],
        dataT:[{
          stu:3,
          name:"审核",
          time:'2018-08-03   22:15:30',
      },{
          stu:3,
          name:"报件",
          time:'2018-08-03   22:15:30',
      },{
          stu:2,
          name:"受理通知书",
          time:'2018-08-03   22:15:30',
      },{
          stu:1,
          name:"核准",
          time:'2018-08-03   22:15:30',
      },{
          stu:1,
          name:"核准完成",
          time:'2018-08-03   22:15:30',  
      },
      ],
      mask:false,//遮罩层
      sus:false,//成功弹窗
      orderData:'',//订单数据
      notrack:true,//有没有服务进度 true为没有
      confirmBtn:true,//控制按钮
      isconf:false,//控制已完成已取消class
      iswait:false,//控制代付款class
      ordertype:''//订单类型
  }
 },
 created () {
     if(this.isLogin){
         //    console.log(this.$route);
        this.ordernum=this.$route.query.num;
        // console.log(this.$route.params.id);
        this.orderId=this.$route.params.id //获取url里的参数
        this.ordertype=this.$route.query.type 
        console.log(this.ordertype,"this.ordertype");
        this.gerOrder();
     }else{
         this.$router.push({path:'/login',query:{userView:true}});
	}

 },
 methods: {
     open(){
         //打开商务通
         openzx();
     },
     close:function(){
         this.mask=false;
         this.sus=false;
     },
     confirm:function(){
         //确认服务
         this.orderConfirm(this.orderId,this.orderData.info.ordeNnumber)
        //  this.mask=true;
        //  this.sus=true;
        //  this.confirmBtn=false;
        //  this.isconf=true;
     },
     orderConfirm(){
         //确认请求
        Api.postorderconfirm(this.orderId,this.orderData.info.ordeNnumber).then(res=>{
            console.log(res);
            if(res.data.code==200){
                 this.mask=true;
                 this.sus=true;
                 this.confirmBtn=false;
                 this.isconf=true;
            }
        })
    },
     gerOrder(){
         //获取订单信息
         Api.postorderId(this.orderId,this.ordertype).then(res=>{
             console.log(res);
             if(res.data.code==200){
                 this.orderData=res.data.data;
                 if(this.orderData.info.payState==1){
                     this.setTime(this.orderData);
                 }
                 console.log(this.orderData.info.goods,"goods")
                 if(this.orderData.server==''){
                     this.notrack=true;
                 }else{
                     this.notrack=false;
                 }
                 if(this.orderData.info.orderState=="办理中"){
                     this.isconf=false;
                     this.iswait=false;
                 }else if(this.orderData.info.orderState=="等待付款"){
                     this.iswait=true;
                     this.isconf=false;
                 }else{
                     this.iswait=false;
                     this.isconf=true;
                 }
             }
         })
     },
     pay(){
         //去付款
         window.open(this.orderData.info.payUrl)
     },
     setTime(el){
         //订单详情计时器
         var that=this;
         var min=setInterval(function () {
             if(el.info.remainPay_min>0){
                 el.info.remainPay_min--;
                 if(el.info.remainPay_min<10){
                     el.info.remainPay_min='0'+el.info.remainPay_min;
                 }
             }else if(el.info.remainPay_min==0){
                 el.info.remainPay_hour--;
                 if(el.info.remainPay_hour<10){
                     el.info.remainPay_hour='0'+el.info.remainPay_hour;
                 }
                 el.info.remainPay_min=59;
                 if(!(el.info.remainPay_hour>0)){
                     that.orderData.info.payState=4;
                 }
             }
         },1000*60)
     },
     togoods(el){
         //去商品详情
        window.open(window.location.origin +'/'+el.productID)
    }
 },
 computed: {
     ...mapState(['isLogin']),
   orderTap:function(){
       if(this.ordernum==0){
           return "全部订单"
       }else if(this.ordernum==1){
           return "待付款"
       }else if(this.ordernum==2){
           return "已付款办理中"
       }
   }  
 },
 components: {
     'top':top,
     'foot':foot,
     'bottom':bottom,
     'userHead':userHead,
     'trackfive':trackfive,
     'tracking':track,
     'trackthree':trackthree
 }
}
</script>

<style scoped lang="scss">
    .orderDetails-box{
        background: #fafafa;
        .orderDet-body{
            width: 1190px;
            margin: 0 auto;
            padding-bottom: 80px;
            .el-body{
                padding: 32px 0px;
            }
            .orderDet-t{
                background: white;
                padding: 42px 0;
                .order-l{
                    float: left;
                    border-right: 1px dashed #eaeaea;
                    width: 320px;
                    text-align: center;
                    p{
                        font-size: 14px;
                        color: #999999;
                    }
                    p:nth-child(1){
                        span{
                            color: #333333;
                        }
                    }
                    p:nth-child(2){
                        margin-top: 10px;
                        font-size: 12px;
                    }
                    p:nth-child(3){
                        margin: 32px 0 20px;
                        font-size: 26px;
                        color: #ff8800;
                        &.isconf{
                            color: #999999;
                        }
                        &.iswait{
                            color:#e52e3a;
                        }
                    }
                    .time{
                        i{
                            display: inline-block;
                            width: 14px;
                            height: 14px;
                            background: url(../../static/images/user/order/xbt.png) -68px 0 no-repeat;
                            vertical-align: middle;
                            margin-top: -4px;
                        }
                        span{
                            margin-left: 3px;
                        }
                        margin-bottom: 10px;
                    }
                    button{
                        outline: none;
                        border:1px solid #e52e3a;
                        color: #e52e3a;
                        background: white;
                        font-size: 14px;
                        width: 98px;
                        height: 26px;
                        cursor: pointer;
                        &:hover{
                            background: #e52e3a;
                            color: white;
                        }
                    }
                    .nth-f{
                        margin-top: 26px;
                        i{
                            background: url(../../static/images/user/order/detxbt.png) no-repeat;
                            width: 20px;
                            height: 20px;
                            display: inline-block;
                            margin-left: 9px;
                            cursor: pointer;
                            vertical-align: middle;
                            margin-top: -4px;
                            position: relative;
                            &:hover{
                                span{
                                    display: block;
                                }
                            }
                            span{
                                position: absolute;
                                left:0px;
                                top:25px;
                                border: 1px solid #e52e3a;
                                padding: 6px;
                                display: none;
                                em{
                                    position: absolute;
                                    top:-5px;
                                    left: 5px;
                                    background: url(../../static/images/user/order/detxbt.png) -434px -19px no-repeat;
                                    width: 7px;
                                    height: 5px;
                                }
                            }
                            
                        }
                        i:nth-child(1){
                            background-position: -538px -82px;
                            &:hover{
                                background-position-y:-37px;
                            }
                        }
                        i:nth-child(2){
                            background-position:-581px -82px;
                            &:hover{
                                background-position-y:-37px;
                            }
                        }
                    }
                }
                .order-r{
                    float: left;
                    margin-top: 46px;
                }
                .order-rt{
                    float: left;
                    margin-left:160px;
                    margin-top: 46px;
                }
            }
            .order-details{
                margin-top: 20px;
                .det-l{
                    background: #fefefe;
                    width: 320px;
                    height: 446px;
                    padding-left: 20px;
                    padding-top: 20px;
                    float: left;
                    overflow-y: auto;
                    .det-t{
                        font-size: 16px;
                        color: #333333;
                    }
                    .det-n{
                        font-size: 14px;
                        color: #999999;
                        margin-top: 10px;
                        margin-bottom: 36px;
                    }
                }
                .det-r{
                    float: left;
                    width: 838px;
                    height: 466px;
                    margin-left: 12px;
                    box-sizing: border-box;
                    background: #fefefe;
                    padding-top: 32px;
                    &.notrack{
                        width: 1190px;
                        margin-left: 0px;
                        height: 264px;

                        li{
                            height:200px;
                        }
                    }
                    li{
                        width: 279px;
                        padding-left: 30px;
                        height:368px;
                        box-sizing: border-box;
                        float: left;
                        div{
                            h6{
                                font-size: 16px;
                                color: #333333;
                            }
                            p{
                                margin-top: 20px;
                                color: #999999;
                                font-size: 14px;
                                span{
                                    color: #333333;
                                    &.addressL{
                                        line-height: 24px;
                                    }
                                }
                            }
                        }
                        div:nth-child(1){
                            height: 150px;
                        }
                        div:nth-child(2){
                            margin-top: 66px;
                        }
                    }
                    
                    li:not(:nth-last-child(1)){
                        border-right: 1px dashed #eaeaea;
                    }
                }
            }
            .order-info{
                margin-top: 20px;
                .info-t{
                    background: #f3f3f3;
                    padding-left: 20px;
                    height: 38px;
                    line-height: 38px;
                    border: 1px solid #eaeaea;
                    span{
                        font-size: 14px;
                        color: #999999;
                    }
                    span:nth-child(1){
                        font-size: 16px;
                        color: #333333;
                    }
                    // span:nth-child(2){
                    //     em{
                    //         color: #333333;
                    //     }
                    // }
                    span:nth-child(2){
                        display: inline-block;
                        vertical-align: middle;
                        i{
                            vertical-align: middle;
                            margin-left: 8px;
                            width: 20px;
                            height: 20px;
                            display: inline-block;
                            background: url(../../static/images/user/order/detxbt.png) -566px -9px no-repeat;
                            cursor: pointer;
                        }
                    }
                    span~span{
                        margin-left: 104px;
                    }
                }
                .info-c{
                    border: 1px solid #eaeaea;
                    border-top:none;
                    // margin-bottom: 80px;
                    background: #fefefe;
                    .order-z{
                        width: 903px;
                        padding: 30px 22px;
                        border-right: 1px solid #eeeeee;
                        border-bottom: 1px solid #eeeeee;
                        &.borderNone{
                             border-bottom:none;
                        }
                        float: left;
                        position: relative;
                        .c-list{
                            font-size: 12px;
                            line-height: 20px;
                            overflow: hidden;
                            padding: 10px 60px 0 0;
                            // text-overflow: ellipsis;
                            // vertical-align: middle;
                            white-space: nowrap;
                            position: absolute;
                            bottom:10px;
                            left:130px;
                            em{
                                background: #e52e3a;
                                color: #fff;
                                display: inline-block;
                                line-height: 20px;
                                padding: 0 9px;
                            }
                            .c-status {
                                color: #e52e3a;
                                padding: 0 6px;
                            }
                            .c-type {
                                color: #f80;
                            }
                        }
                        div{
                            float: left;
                        }
                        div:nth-child(1){
                            width: 86px;
                            height: 86px;
                            line-height: 86px;
                            text-align: center;
                            border: 1px solid #eeeeee;
                            cursor: pointer;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        div:nth-child(2){
                            font-size: 14px;
                            height: 86px;
                            margin-left: 20px;
                            color: #999999;
                            p:nth-child(1){
                                font-size: 16px;
                                color: #333333;
                                width: 190px;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                word-break: break-all;
                                overflow: hidden;
                                cursor: pointer;
                                &:hover{
                                    color: #e52e3a;
                                }
                            }
                            p:nth-child(2){
                                margin-top: 10px;
                            }
                            p:nth-child(3){
                                margin-top: 23px;
                                width: 190px;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                word-break: break-all;
                                overflow: hidden;
                            }
                        }
                    }
                    .order-pri{
                        float: left;
                        margin-left: 110px;
                        span:nth-child(1){
                            display: inline-block;
                            min-width: 84px;
                        }
                        span:nth-child(2){
                            margin-left: 44px;
                        }
                    }
                    .order-p{
                        float: left;
                        width: 240px;
                        text-align: center;
                         p{ 
                            font-size: 14px;
                        }
                        p:nth-child(1){
                            margin-top: 38px;
                            text-decoration: line-through;
                            color: #999999;
                            &.nomal{
                                text-decoration:none;
                                color: #333333;
                            }
                        }
                        p:nth-child(2){
                            margin-top: 10px;
                        }
                        .ful{
                            color: #e52e3a;
                        }
                    }
                }
            }
        }
    }
    .mask{
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #7d7d7d;
        opacity: 0.7;
        z-index: 5;
    }
    .pop{
        width: 498px;
        padding: 40px;
        border-radius: 30px;
        position: fixed;
        top:50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 7;
        background: white;
        text-align: center;
        &.sus{
            p:nth-child(1){
                width: 44px;
                height: 44px;
                background-position:-306px -31px;
            }
        }
        p:nth-child(1){
            width: 48px;
            height: 48px;
            margin: 38px auto 26px;
            background: url(../../static/images/user/order/coxbt.png) -229px -29px no-repeat;
        }
        p:nth-child(2){
            font-size: 20px;
            color:#666666;
            margin-bottom: 48px;
        }
        button{
                width: 140px;
                height: 46px;
                color: white;
                outline: none;
                border: none;
                cursor: pointer;
                font-size: 20px;
        }
        .cancel{
            background: #e52e3a;
            &:hover{
                background: #ff3341;
            }
        }
        .sure{
            margin-left: 63px;
            background: #cccccc;
            &:hover{
                background: #e52e3a;
            }
        }
        i{
            position: absolute;
            top:20px;
            right:20px;
            width: 21px;
            height: 21px;
            background: url(../../static/images/user/order/coxbt.png) -159px -43px no-repeat;
            cursor: pointer;
        }
    }
</style>
<style>
.el-icon-arrow-right{
    color: #666666;
}
.el-breadcrumb__inner{
    color: #666666;
}
.el-breadcrumb__inner.is-link{
    color: #666666;
    font-weight: normal;
}
.el-breadcrumb__inner.is-link:hover{
    color:#e52e3a;
}
</style>
