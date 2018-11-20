<template>
 <div class="container">
     <div class="content-box">
        <div class="content">
            <ul>
                <li class="user-box">
                    <div class="user" v-if="userInfo.header_img!=null&&userInfo.header_img!=''">
                        <img :src="userInfo.header_img" alt="">
                    </div>
                    <div class="user" v-else>
                        <img src="../../static/images/user/user.png" alt="">
                    </div>
                    <div class="user-info">
                        <p>
                            <i v-show="step" :class="[{err:error},{sus:success}]">{{stepMsg}}</i>
                            <span>用户名: </span>
                            <span class="input-box">
                                <input type="text" disabled="disabled" v-model="userName" ref="username" :class="{active:step}" @blur="regular()">
                                <b v-show="regularStep" :class="{error:error}"></b>
                            </span>
                            <a href="javascript:void(0);" @click="update()" v-show="step==false" >修改 </a>
                            <button v-show="stepBtn" @click="postUser()">保存</button>
                            <em>可用于登录哦~</em>
                        </p>
                        <p>
                            <span>可使用的优惠券: </span>
                            <var @click="toCou" class="couvar">{{couponNum}}</var>
                            <span class="z-border">张</span>
                            <span class="l-span">累计消费金额: </span>
                            <var>{{consumptiontotal}}</var>
                            <span>元</span>
                        </p>
                    </div>
                </li>
                <li><span></span>我的订单</li>
                <li class="order-box">
                    <div class="order">
                        <div class="waitPay" @click="toWaitpay">
                            <p></p>
                            <span>待付款</span>
                            <var v-show="wait_payment!=0">{{wait_payment}}</var>
                        </div>
                        <div class="handle" @click="tohandle">
                            <p></p>
                            <span>办理中</span>
                            <var v-show="dealt!=0">{{dealt}}</var>
                        </div>
                        <div class="allOrder" @click="toOrder">
                            <p></p>
                            <span>全部订单</span>
                        </div>
                    </div>
                </li>
                <li><span></span>账户安全</li>
                <li class="account">
                    <div class="telToken">
                        <p class="tel-left">
                            <i></i>
                            <span>手机验证</span>
                            <em>您的验证手机号码为:</em>
                            <var>{{reptel}}</var>
                        </p>
                        <!-- <p class="tel-right">修改 <i></i></p> -->
                    </div>
                    <div class="passToken">
                        <p class="tel-left">
                            <i></i>
                            <span>登录密码</span>
                            <em>互联网账号存在被盗风险，建议您定期更改密码以保护账户安全。</em>
                        </p>
                        <p class="tel-right" @click="changePass">修改 <i></i></p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="right-content">
            <div class="adviser" v-if="userInfo.adviser!=''&&userInfo.adviser!='apply'&&userInfo.adviser!=null">
                <ul>
                    <li class="adv-pho">
                        <div ref="pho"></div>
                        <p>我的专属顾问</p>
                        <em @click="updAdv">更换顾问</em>
                    </li>
                    <li>
                        姓名 : <span>{{advInfo.adv_name}}</span>   
                    </li>
                    <li>
                        工号 : <span>{{advInfo.job_number}}</span>
                    </li>
                    <li>
                        电话 : <span>{{advInfo.mobile}}</span>
                    </li>
                    <li>
                        邮箱 : <span>{{advInfo.mailbox}}</span>
                    </li>
                </ul>
            </div>
            <div class="adviser" v-else>
                <ul>
                    <li class="adv-pho">
                        <div ><img src="../../static/images/detail/adviser.png" alt=""></div>
                        <p>我的专属顾问</p>
                    </li>
                    <li>
                        姓名 : <span></span>   
                    </li>
                    <li>
                        工号 : <span></span>
                    </li>
                    <li>
                        电话 : <span>010-67443880</span>
                    </li>
                    <li>
                        邮箱 : <span>xinxibu@gbicom.com</span>
                    </li>
                </ul>
            </div>
            <div class="collection">
                <div class="collection-head">
                    <p>
                        <span></span>
                        <em>我收藏的商品</em>
                        <a href="JavaScript:void(0);" @click="openUrl">查看更多<i></i></a>
                    </p>
                </div>
                <div class="collection-content" v-if="collectionNone">
                    <p></p>
                    <span>您目前还没有收藏商品哦~</span>
                </div>
                <div class="collection-shop" v-show="!collectionNone" >
                    <div v-show="!collectionNone" v-for="(item,index) in collection" :key="index">
                        <div @click="to(item.product_id)"   class="collectionBox"   v-if="item.sku_info!=''">
                            <div><img :src="item.product_img" alt=""></div>
                            <p>{{item.product_name}}</p>
                            <span :title="item.product_desc">{{item.product_desc}}</span>
                            <em v-if="item.sku_info.sku_buy_status == 1">￥{{item.sku_info.sku_price}}</em>
                            <a v-if="item.sku_info.sku_buy_status != 1" class="advisory" @click.stop="openzxFn">立即咨询<i class="icon icon-right"></i></a>
                        </div>
                        <!-- <div @click="to(item.product_id)"   class="collectionBox" v-else>
                            <div><img :src="item.product_img" alt=""></div>
                            <p>{{item.product_name}}</p>
                            <span :title="item.product_desc">{{item.product_desc}}</span>
                            <span class="sku_info">已下架</span>
                        </div> -->
                    </div>
                    <!-- <div @click="to(item.product_id)" class="collectionBox" v-show="!collectionNone" v-for="(item,key,index) in collection" :key="index" v-if="item.sku_info!=''">
                        <div><img :src="item.product_img" alt=""></div>
                        <p>{{item.product_name}}</p>
                        <span :title="item.product_desc">{{item.product_desc}}</span>
                        <em v-if="item.sku_info.sku_price!=''">￥{{item.sku_info.sku_price}}</em>
                    </div> -->
                    <!-- <div class="collectionBox" v-show="!collectionNone">
                        <div><img src="../../static/images/user/1.png" alt=""></div>
                        <p>提供注册商标使用证据（商标撤三答辩）</p>
                        <span>为国内人申请人提供包括商标</span>
                        <em>￥1590.00</em>
                    </div>
                    <div class="collectionBox" v-show="!collectionNone">
                        <div><img src="../../static/images/user/2.png" alt=""></div>
                        <p>提供注册商标使用证据（商标撤三答辩）</p>
                        <span>为国内人申请人提供包括商标</span>
                        <em>￥1590.00</em>
                    </div>
                    <div class="collectionBox" v-show="!collectionNone">
                        <div><img src="../../static/images/user/3.png" alt=""></div>
                        <p>提供注册商标使用证据（商标撤三答辩）</p>
                        <span>为国内人申请人提供包括商标</span>
                        <em>￥1590.00</em>
                    </div> -->
                </div>
            </div>
        </div>
     </div>
     <div class="update-adviser" v-show="upd_adv">
         <p>更换顾问留言</p>
         <textarea name="" id="" cols="30" rows="10" v-model="textVal" @click="cleanVal" @blur="resetVal" @focus="cleanVal" >
             
         </textarea>
         <div>
            <button class="sure" @click="sure">确定</button>
            <button class="cancel"  @click="cancel">取消</button>
         </div>
         <i @click="cancel"></i>
     </div>
     <div class="success" v-show="suF">
         <div></div>
         <p>信息提交成功</p>
         <p class="mbotop">我们将在1-2个工作日内与您取得联系</p>
         <button @click="cancel">关闭</button>
     </div>
     <div class="mask" v-show="mask"></div>
 </div>
</template>

<script>
import Api from '../../static/js/api.js'
import Api2 from '../../static/js/api2.js'
import {postFn} from '../../static/js/util.js'
import {mapState} from 'vuex'
export default {
metaInfo () {
    return {
        title: '个人中心-创新科技服务云平台',
    }
},
computed: {
     ...mapState(['isLogin'])
},
 data() {
  return {
      userName:'',//用户名
      step:false,//信息提示
      stepMsg:'支持中文、英文字母、数字，两种及以上的组合，4-20个字符',
      stepBtn:false,
      regularStep:false,//正则判断
      error:true, //错误提示
      success:false,
      mask:false,//遮罩层
      upd_adv:false,//更换顾问
      textVal:"请您简要描述更换顾问的理由或对顾问的要求，感谢", //textarea值
      suF:false,//信息提交成功
      collectionNone:true,//有没有收藏
      collectionDataId:" ",//商品id
      collection:'',//收藏商品
      userInfo:'',//用户信息
      advInfo:'',
      reptel:'',//替换的*号的电话
      tel:'',
      ordername:'',
      couponNum:0,//优惠券数量
      consumptiontotal:0,//总消费金额
      wait_payment:0,//待付款
      dealt:0,//办理中

  }
 },
 created() {
     if(this.isLogin){
		this.getCollect();
        this.getUserinfo();
        this.getWaitNum();
	}else{
        this.userView=this.$route.query.userView;
		this.$router.push({path:'/login',query:{userView:this.userView}})
	}
     
     
 },
 methods: {
   update:function(){
       //更改用户名
       this.step=true;
       this.stepBtn=true;
       this.$refs.username.removeAttribute("disabled");
       this.$refs.username.focus();
   },
   regular:function () {
       //用户名正则匹配
       var reg=/^(?=.*[a-z])(?=.*[0-9])|(?=.*[a-z])(?=.*[\u4E00-\u9FA5])|(?=.*[0-9])(?=.*[\u4E00-\u9FA5])[\u4E00-\u9FA5A-Za-z0-9]{4,20}$/gi
       if(reg.test(this.userName)){
            this.checkUserName();
       }else{
           this.stepMsg='用户名格式错误'
           this.error=true;
           this.success=false;
       }
      
       
   },
   postUser:function(){
       //发送用户名
       if(this.error==false){
           this.setUserName();
       }
   },
   sure:function(){
       //确认更换顾问弹窗
       console.log(this.textVal);
       if(this.textVal!="请您简要描述更换顾问的理由或对顾问的要求，感谢"){
            Api.updateadv(this.textVal).then(res=>{
                console.log(res);
                if(res.data.code==200){
                    this.upd_adv=false;
                    this.suF=true;
                }
            })
        }else{
            this.textVal="请您简要描述更换顾问的理由或对顾问的要求，感谢"
            this.$message({
                message: '请您简要描述更换顾问的理由或对顾问的要求，感谢',
                type: 'error',
                duration:1500,
            });
        }
       
   },
   updAdv:function () {
       //更换顾问
       this.mask=true;
       this.upd_adv=true;
   },
   cancel:function () {
       //取消
       this.resetVal();
       this.mask=false;
       this.upd_adv=false;
       this.suF=false;
   },
   replaceVal:function(){
        var reg = /\s+/g;
        this.textVal = this.textVal.replace(reg, ' ');
    },
   cleanVal:function(){
       //清除顾问val
       var tval="请您简要描述更换顾问的理由或对顾问的要求，感谢";
       if(tval==this.textVal){
           this.textVal="";
       }
   },
   resetVal:function(){
       //重置VAl
       this.replaceVal();
       if(this.textVal==""||this.textVal==" "){
           this.textVal="请您简要描述更换顾问的理由或对顾问的要求，感谢"
       }
   },
   openUrl:function(){
       //打开个人中心收藏页
         window.open(window.location.origin + '/home/collect')
   },
    getCollect(){
        //获取收藏
         Api.getCollect().then(res=>{
             var data=[]
             if(res.data.code==200){
                 this.collectionDataId=res.data.data;
                 var product_ids=[];
                 this.collectionDataId.list.forEach(element => {
                     product_ids.push(element.collect_id);
                 });
                 var data={
                     product_ids :product_ids + '',
                     want_array:1,
                 };
                 var that=this;
                 postFn("/product/product/infos",data,function(res){
                     if(res.data.code==200){
                         if(res.data.data!=""&&res.data.data_2.valid_sku_num>0){
                                that.collectionNone=false;
                                that.collection=res.data.data
                        }
                     }
                 })
             }
         })
     }, 
     getUserinfo(){
         //获取用户信息
        Api.getUserInfo().then(res=>{
            console.log(res);
            if(res.data.code==200){
                this.userName=res.data.data.username;
                this.ordername=res.data.data.username;
                this.userInfo=res.data.data;
                this.tel=res.data.data.tel;
                this.consumptiontotal=res.data.data.consumption_total;
                this.reptel=(this.userInfo.tel+"").replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
                if(this.userInfo.adviser!=''&&this.userInfo.advInfo!='apply'&&this.userInfo.adviser!=null){
                    this.getAdv();
                }
                this.getCouNum();
            }
        })
    },
    setUserName(){
        //设置用户名
        Api.setuserName(this.userName).then(res=>{
            if(res.data.code==504){
                this.stepMsg=res.data.msg
                this.error=true;
            }else if(res.data.code==505){
                this.stepMsg=res.data.msg
                this.error=true;
            }else if(res.data.code==506){
                this.stepMsg=res.data.msg
                this.error=true;
            }else if(res.data.code==200){
                this.step=false;
                this.stepBtn=false;
                this.regularStep=false;
                this.success=false;
                this.error=false;
                this.getUserinfo();
                this.stepMsg='支持中文、英文、字母，两种及以上的组合，4-20字符',
                this.$refs.username.setAttribute("disabled","disabled");
                this.$message({
                    message: '恭喜你，修改成功',
                    type: 'success'
                });
            }
        })
    }, 
    checkUserName(){
        //查询用户名是否可使用
        if(this.ordername!=this.userName){
            Api.checkuserName(this.userName).then(res=>{
                console.log(res);
                if(res.data.code==504){
                    this.stepMsg=res.data.msg
                    this.error=true;
                    this.success=false;
                }else if(res.data.code==505){
                    this.stepMsg=res.data.msg
                    this.error=true;
                    this.success=false;
                }else if(res.data.code==506){
                    this.stepMsg=res.data.msg
                    this.error=true;
                    this.success=false;
                }else if(res.data.code==200){
                    this.stepMsg="可以使用"
                    this.error=false;
                    this.success=true;
                }
            })
        }else{
            this.step=false;
            this.stepBtn=false;
            this.regularStep=false;
            this.$refs.username.setAttribute('disabled',"true");
        }
    },
    getAdv(){
        //获取顾问
        var data={
            // job_number:'BJ01024'
            job_number:this.userInfo.adviser,
        }
        var that=this;
        postFn("/sundry/adviser/adv_info",data,function(res){
            if(res.data.code==200&&res.data.data!=''){
                that.advInfo=res.data.data;
                if(that.advInfo.face_photo!=''&&that.advInfo.face_photo!=null&&that.advInfo.face_photo!=undefined){
                    that.$refs.pho.style.background='url('+that.advInfo.face_photo+') 0 0 no-repeat';
                }
                that.$refs.pho.style.backgroundSize='100%';
                console.log(that.advInfo,"顾问信息");
            }
        })
        
    },
    changePass(){
        //修改密码
        this.$router.push('/changePassword');
    },
    toCou(){
        //去优惠券页面
        this.$router.push('/home/coupon');
    },
    getCouNum(){
        //获取优惠券数量
        var data={
            uid:this.userInfo.id,
        }
        var that=this;
        postFn('/event/coupon/notused_coupons',data,function(res){
            console.log(res,"couponNum")
            if(res.data.code==200){
                that.couponNum=res.data.data.total
            }
        })
    },
    toWaitpay(){
        //去代付款页面
        this.$router.push({path:'/home/order',query:{num:1}});
    },
    tohandle(){
        //去办理中页面
        this.$router.push({path:'/home/order',query:{num:2}});
    },
    toOrder(){
        //去全部订单页面
        this.$router.push({path:'/home/order',query:{num:0}});
    },
    to(id){
        //去商品详情页
       window.open(window.location.origin +'/'+id);
    },
    getWaitNum(){
        //获取代付款办理中数量
        Api2.getOrderStat().then(res=>{
            console.log(res,"resNUMapi2");
            if(res.data.code==200){
                this.wait_payment=res.data.data.wait_payment;
                this.dealt=res.data.data.dealt;
            }
        })
    }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
    .advisory{
        position: relative;
        display: block;
        width: 100px;
        text-align: center;
        height: 18px;
        color: #4685c3;
        margin: 14px auto 0;
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
    .content-box{
        padding-top: 10px;
        padding-bottom: 80px;
        float: left;
        overflow: hidden;
        .content{
            width: 760px;
            float: left;
            ul{
                background: white;
                li:nth-child(2n){
                    font-size: 16px;
                    color: #333333;
                    margin: 0 21px;
                    background: #fbfbfb;
                    padding-left: 12px;
                    height: 32px;
                    line-height: 32px;
                    span{
                        border-left: 2px solid #e52e3a;
                        padding-right: 12px;
                        display: inline-block;
                        height: 12px;
                        position: relative;
                        top:1px;
                    }
                }
                .user-box{
                    background: white;
                    overflow: hidden;
                    padding: 78px 40px;
                    .user{
                        width: 122px;
                        height: 122px;
                        float: left;
                        border-radius: 50%;
                        overflow: hidden;
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                    .user-info{
                        float: left;
                        margin-left: 34px;
                        margin-top: 21px;
                        p{
                            color:#666;
                            font-size: 16px;
                            position: relative;
                            i{
                                position: absolute;
                                top:-28px;
                                left:0px;
                                font-size: 14px;
                                &.err{
                                    color:#e52e3a;
                                }
                                &.sus{
                                    color:#34bb45;
                                }
                            }
                            a{
                                color: #4685c3;
                                font-size: 16px;
                                &:hover{
                                    color:#e52e3a;
                                }
                            }
                            .input-box{
                                position: relative;
                                b{
                                    position: absolute;
                                    top:-6px;
                                    right:11px;
                                    width: 22px;
                                    height: 24px;
                                    background: url(../../static/images/user/xbt.png) no-repeat -76px -126px;
                                    &.error{
                                        background-position-x: -130px;
                                    }
                                }
                            }
                            input{
                                font-size: 22px;
                                font-weight: bold;
                                width: 239px;
                                height: 41px;
                                line-height: 41px;
                                border: none;
                                outline: none;
                                padding-left: 12px;
                                &.active{
                                    border:1px solid #8dafe6;
                                }
                            }
                            button{
                                width: 50px;
                                height: 24px;
                                background: #e52e3a;
                                color: white;
                                margin: 0 7px;
                                border: none;
                                outline: none;
                                cursor: pointer;
                                &:hover{
                                    background: #ff3341;
                                }
                            }
                            em{
                                color:#999999;
                            }
                            var{
                                color: #e52e3a;
                                font-size: 22px;
                                font-weight: bold;
                                
                                &.couvar{
                                    cursor: pointer;
                                    &:hover{
                                        color: #ff3341;
                                        position: relative;
                                        top:-3px;
                                    }
                                }
                                
                            }
                            .z-border{
                                border-right: 1px solid #eeeeee;
                                padding-right: 20px;
                            }
                            .l-span{
                                padding-left: 20px;
                            }
                        }
                        p:nth-child(2){
                            margin-top: 35px;
                        }
                    }
                }
                .order-box{
                    padding-bottom: 50px;
                    .order{ 
                        width: 476px;
                        margin: 0px auto;
                        overflow: hidden;
                        
                        div{
                            position: relative;
                            width: 60px;
                            float: left;
                            text-align: center;
                            font-size: 14px;
                            color: #333333;
                            cursor: pointer;
                            &:hover{
                                color:#e52e3a;
                            }
                            &~div{
                                margin-left: 148px;
                            }
                            p{
                                width: 48px;
                                height: 36px;
                                background: url(../../static/images/user/xbt.png) no-repeat;
                                margin: 45px auto 22px;
                            }
                            &.waitPay{
                                p{
                                    background-position: -69px 0;
                                }
                            }
                            &.handle{
                                p{
                                    background-position: -162px 0;
                                }
                            }
                            &.allOrder{
                                p{
                                    background-position: -266px 0;
                                }
                            }
                            var{
                                position: absolute;
                                top:31px;
                                right: -14px;
                                width: 22px;
                                height: 14px;
                                background: url(../../static/images/user/xbt.png) -288px -68px no-repeat;
                                color: white;
                                font-size: 12px;
                                text-align: center;
                            }
                        }
                    }
                }
                .account{
                    padding: 12px 50px;
                    .telToken{
                        overflow: hidden;
                        padding: 36px 0 ;
                        border-bottom: 1px solid #eeeeee;
                    }
                    .passToken{
                        overflow: hidden;
                        padding: 36px 0 ;
                    }
                    div{
                        .tel-left{
                            float: left;
                            line-height: 25px;
                            i{
                                display: inline-block;
                                background: url(../../static/images/user/xbt.png) -282px -130px no-repeat;
                                width: 28px;
                                height: 25px;
                                vertical-align: top;
                            }
                            span{
                                font-size: 18px;
                                color: #333333;
                                margin-left: 20px;
                                font-weight: bold;
                            }
                            em{
                                margin-left: 37px;
                                color: #999;
                                font-size: 14px;
                            }
                            var{
                                font-size: 14px;
                                color: #333;
                            }
                        }
                        .tel-right{
                            float: right;
                            font-size: 14px;
                            color: #4685c3;
                            cursor: pointer;
                            position: relative;
                            top:7px;
                            i{
                                display: inline-block;
                                background: url(../../static/images/user/xbt.png) no-repeat -154px -78px;
                                width: 4px;
                                height: 8px;
                            }
                            &:hover{
                                color:#e52e3a;
                                i{
                                    background-position:-221px -78.1px;
                                }
                            }
                        }
                    }
                }
            }
        }
        .right-content{
            float: left;
            margin-left: 10px;
            .adviser{
                width: 270px;
                background: white;
                ul{
                    padding-bottom: 14px;
                    .adv-pho{
                        padding: 18px 12px 23px 28px;
                        position: relative;
                        div{
                            width: 66px;
                            height: 66px;
                            border-radius: 50%;
                            background: url(../../static/images/detail/adviser.png) 0px 0px no-repeat;
                            background-size: 100%;
                            display: inline-block;
                            vertical-align: middle;
                            margin-top: -4px;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        p{
                            font-size: 16px;
                            color: #111111;
                            display: inline-block;
                            margin-left: 15px;
                        }
                        em{
                            position: absolute;
                            top:18px;
                            right: 12px;
                            font-size: 12px;
                            color: #a1a1a1;
                            text-decoration: underline;
                            cursor: pointer;
                            &:hover{
                                color:#e52e3a;
                            }
                        }
                    }
                    li{
                        padding-left: 28px;
                        color: #a9a9a9;
                        font-size: 14px;
                    }
                    li~li{
                        margin-bottom: 14px;
                    }
                }
            }
            .collection{
                width: 270px;
                margin-top: 10px;
                background: white;
                .collection-head{
                    padding: 22px 20px;
                    border-bottom: 1px solid #eeeeee;
                    span{
                        border-left: 2px solid #e52e3a;
                        padding-right: 12px;
                        display: inline-block;
                        height: 12px;
                        position: relative;
                        top:1px;
                    }
                    em{
                        font-size: 15px;
                        color: #333333;
                    }
                    a{
                        font-size: 12px;
                        color:#999999;
                        margin-left: 56px;
                        text-decoration: underline;
                        i{
                            margin-left:4px;
                            display: inline-block;
                            background: url(../../static/images/user/xbt.png) no-repeat -248px -79px;
                            width: 4px;
                            height: 8px;
                        }
                        &:hover{
                            color:#e52e3a;
                            i{
                                background-position:-221px -79px;
                            }
                        }
                    }
                }
                .collection-content{
                    text-align: center;
                    height: 339px;
                    p{
                        background:url(../../static/images/user/xbt.png) no-repeat -216px -202px;
                        width: 43px;
                        height: 42px;
                        margin: 90px auto 0;
                    }
                    span{
                        display: inline-block;
                        margin-top: 28px;
                        color: #a1a1a1;
                        font-size: 14px;
                    }
                }
                .collection-shop{
                    text-align: center;
                    padding: 0 32px;
                    height: 429px;
                    overflow: auto;
                    .collectionBox{
                        padding: 0 20px 22px;
                        border-bottom: 1px dashed #dcdcdc;
                        cursor: pointer;
                        height: 230px;
                        box-sizing: border-box;
                        &:hover{
                            position: relative;
                            top:-4px;
                            p{
                                color:#e52e3a;
                            }
                        }
                        div{
                            padding-top: 10px;
                            img{
                                width: 92px;
                                height: 92px;
                            }
                        }
                        p{
                            margin-top: 10px;
                            font-size: 16px;
                            line-height: 20px;
                            color:#333333;
                        }
                        span{
                            margin-top: 10px;
                            display: block;
                            font-size: 12px;
                            color:#999999;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            word-break: break-all;
                            &.sku_info{
                                font-size: 16px;
                            }
                        }
                        em{
                            margin-top: 15px;
                            display: block;
                            font-size: 16px;
                            color: #e52e3a;
                        }
                    }
                    
                }
            }
        }
    }
    .update-adviser{
        width: 458px;
        padding: 40px;
        border-radius: 10px;
        position: fixed;
        top:50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background: white;
        z-index: 2;

        p{
            font-size: 26px;
            color: #333333;
        }
        textarea{
            padding-left: 15px;
            padding-top:15px;
            margin-top:25px;
            width: 461px;
            resize: none;
            overflow-y: scroll;
            background: #fbfbfb;
            font-size: 16px;
            color: #bbbbbb;
            border:none;
        }
        div{
            width: 348px;
            margin: 30px auto 0;
            button{
                width: 140px;
                height: 46px;
                color: white;
                outline: none;
                border: none;
                cursor: pointer;
                font-size: 20px;
            }
            .sure{
                background: #e52e3a;
                &:hover{
                    background: #ff3341;
                }
            }
            .cancel{
                margin-left: 63px;
                background: #cccccc;
                &:hover{
                    background: #e52e3a;
                }
            }
        }
        i{
            position: absolute;
            top:20px;
            right:20px;
            width: 21px;
            height: 21px;
            background: url(../../static/images/user/xbt.png) -81px -66px no-repeat;
            cursor: pointer;
        }
    }
    .success{
        width: 458px;
        padding: 40px;
        border-radius: 10px;
        position: fixed;
        top:50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background: white;
        z-index: 2;
        text-align: center;
        div{
            width: 47px;
            height: 46px;
            background: url(../../static/images/user/xbt.png) 0 -198px no-repeat;
            margin: 0 auto;
        }
        p{
            margin-top: 20px;
        }
        .mbotop{
            margin-bottom:44px;
        }
        button{
            outline: none;
            border: none;
            width: 140px;
            height: 46px;
            color: white;
            font-size: 20px;
            background: #e52e3a;
            cursor: pointer;
            &:hover{
                background: #ff3341;
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
        z-index: 1;
    }
</style>
