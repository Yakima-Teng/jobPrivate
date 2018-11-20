<template>
 <div class="container">
     <p class="order-head">我的订单</p>
     <div class="order-body">
        <div class="tapHead">
            <div class="tapH" v-for='(item,index) in options' :key="item.id" :class="{active:num==index}" @click="tap(index)"><p></p>
            <span>{{item}}</span></div>
            <div class="search" :class="[{error:error},{errorAn:errorAn}]" @keyup.enter="search">
                 <input type="text" v-model="searchVal"   :class="{active:num1==1}"  @click="show()" @blur="blur1" ref="show" @focus="clean">
                 <span v-show="num1==0"  @click="show()">商品名称/订单号</span>
                  <i @click="search"></i>
             </div>
        </div>
        <ul class="title clearfix">
            <li>订单详情</li>
            <li>金额</li>
            <li>
                <div class="title-t" >{{state}}<i></i></div>
                <div class="title-co">
                    <p @click="changeC(index)" v-for="(item,index) in stateOpt" :key="item.id">{{item}}</p>
                    <!-- <p @click="changeC(1)">等待付款</p>
                    <p @click="changeC(2)">办理中</p>
                    <p>已完成</p>
                    <p>已取消</p> -->
                </div>
            </li>
            <li>操作</li>
        </ul>
        <ordernone v-if="ordernum"></ordernone>
        <orderall  v-show="num==0&&!ordernum" @cancelOrder="cancelOrder" :orderData="orderData" @confirm="confirm"></orderall>
        <orderwait  v-show="num==1&&!ordernum" @cancelOrder="cancelOrder" :orderData="orderData"></orderwait>
        <orderhandle  v-show="num==2&&!ordernum" @confirm="confirm" :orderData="orderData"></orderhandle>
     </div>
     <div class="pagination-body" v-if="total>4"><pagination @changePagesInfo="changePagesInfo"></pagination></div>
     <div class="adv">
        <img src="../../static/images/user/order/adv-adv.jpg" alt="">
    </div>
     <div class="mask" v-show="mask"></div>
     <div class="pop" v-show="pop">
         <p></p>
         <p>订单取消后将无法恢复，确认取消？</p>
         <button class="cancel" @click="close">再想想</button>
         <button class="sure" @click="sure">提交</button>
         <i class="close" @click="close"></i>
     </div>
     <div class="pop sus" v-show="sus">
         <p></p>
         <p>感谢您对本次服务的反馈！</p>
         <button class="cancel" @click="close">关闭</button>
         <i class="close" @click="close"></i>
     </div>
 </div>
</template>

<script>
import orderall from '../common/user/orderall.vue';
import orderwait from '../common/user/orderwait.vue';
import orderhandle from '../common/user/orderhandle.vue';
import ordernone from '../common/user/ordernone.vue';
import pagination from '../common/pagination.vue';
import {postFn} from '../../static/js/util.js'
import Api from '../../static/js/api2.js'
import {mapState} from 'vuex'
export default { 
metaInfo () {
    return {
        title: '我的订单-创新科技服务云平台',
    }
},
 data() {
  return {
      options:['全部订单',"待付款","已付款办理中"], //tap切换头部
      ordernum:true,//控制有没有订单
      num:0,    //tap切换控制
      num1:0,  //控制显示隐藏
      searchVal:"",
      error:false, //错误提示
      errorAn:false,//错误提示动画
      mask:false,//遮罩层
      pop:false, //弹窗
      sus:false,//成功弹窗
      stateOpt:['全部状态','等待付款','办理中','已完成','已取消'],
      index:0,//保存stateOpt的index
      orderData:'',//订单数据
      total:'',//分页总数
      orderId:'',//订单id
      searchCriteria:''//搜索条件
  }
 },
 created () {
     if(this.isLogin){
        this.num=this.$route.query.num;
        this.$store.dispatch("jumpAction", {page: 1});
        if(this.num==0){
            this.getOrder(0);
        }else if(this.num==1){
            this.getOrder(1);
        }else if(this.num==2){
            this.getOrder(2);
        }
	}else{
        this.userView=this.$route.query.userView;
		this.$router.push({path:'/login',query:{userView:this.userView}})
	}
     
 },
 mounted() {
     
 },
 methods:{
     tap:function(index){
         //tap切换
        this.index=index;
        this.num=index
        this.$store.dispatch("jumpAction", {page: 1});
        this.orderData='';
        this.searchCriteria='';
        this.searchVal='';
        this.total=0;
        if(this.num==0){
            this.getOrder(0);
        }else if(this.num==1){
            this.getOrder(1);
        }else if(this.num==2){
            this.getOrder(2);
        }
      },
     show:function () {
         this.num1=1
         this.$refs.show.focus();
     },
     blur1:function(){
         this.replaceVal();
         if(this.searchVal!=""&&this.searchVal!=" "){
            this.num1=1;
         }else{
             this.num1=0;
             this.searchVal="";
         }
     },
     clean:function(){
         this.num1=1;
     },
     replaceVal:function(){
        var reg = /\s+/g;
        this.searchVal = this.searchVal.replace(reg, ' ');
     },
     upclass:function(){
         //非空验证动画
         this.error=true;
         setTimeout(() => {
             this.errorAn=true;
         }, 0);
         setTimeout(() => {
             this.errorAn=false;
         }, 500);
         setTimeout(() => {
             this.errorAn=true;
         }, 1000);
         setTimeout(() => {
             this.errorAn=false;
             this.error=false;
         }, 1500);
     },
     search:function(){
         //搜索订单
         this.replaceVal();
         if(this.searchVal!=""&&this.searchVal!=" "){
             this.orderData="";
             this.$store.dispatch("jumpAction", {page: 1});
             this.total=0;
             if(this.index<2){
                this.index=this.num;
            }
             var data={
                 searchKey:this.searchVal,
                 order_state:this.index,
                 page:1,
                 page_show:4,
            }
            var that=this;
            postFn('/order/order/orderlist/index',data,function(res){
                console.log(res);
                if(res.data.data.length==0){
                    that.ordernum=true;
                }else{
                    that.ordernum=false;   
                }
                if(res.data.code==200){
                    that.num=0;
                    that.orderData=res.data.data;
                    that.page=res.data.page;
                    that.total=that.page.totalNum;
                    var last_page=Math.ceil(that.page.totalNum/4);
                    console.log(that.total);
                    that.$store.dispatch("getLastPage", last_page);
                    that.searchCriteria=res.data.search;
                }
            })
            
         }else{
            this.upclass(); 
         }
     },
     close:function(){
         //关闭弹窗
         this.mask=false;
         this.pop=false;
         this.sus=false;
     },
     sure:function(){
         //确认弹窗
         Api.postorderCancel(this.orderId).then(res=>{
             console.log(res);
             if(res.data.code==200){
                 this.close();
                 if(this.num==0){
                     this.getOrder(0);
                 }else if(this.num==1){
                     this.getOrder(1);
                 }
                 
             }
         })
     },
     cancelOrder:function(id){
         //取消订单
         this.orderId=id;
         this.mask=true;
         this.pop=true;
     },
     changeC:function(index,val){
         //状态切换
         this.index=index;
         this.orderData='';
         this.total=0;
         this.$store.dispatch("jumpAction", {page: 1});
             let data={
                 order_state:index,
                 searchKey:this.searchCriteria.searchKey,
                 page:1,
                 page_show:4,
             }
            let that=this;
              postFn('/order/order/orderlist/index',data,function(res){
                console.log(res);
                if(res.data.code==200){
                    that.orderData=res.data.data;
                    if(that.orderData.length==0){
                        that.ordernum=true;
                    }else{
                          that.ordernum=false;   
                    }
                    that.page=res.data.page;
                    that.total=that.page.totalNum;
                    var last_page=Math.ceil(that.page.totalNum/4);
                    console.log(that.total);
                    that.$store.dispatch("getLastPage", last_page);
                }
            })
         
        //  if(index==4){
        //      let data={
        //          order_state:4,
        //          page:1,
        //          page_show:4,
        //     }
        //     let that=this;
        //       postFn('/order/order/orderlist/index',data,function(res){
        //         console.log(res);
        //         if(res.data.code==200){
        //             that.orderData=res.data.data;
        //             that.page=res.data.page;
        //             that.total=that.page.totalNum;
        //             var last_page=Math.ceil(that.page.totalNum/4);
        //             console.log(that.total);
        //             that.$store.dispatch("getLastPage", last_page);
        //         }
        //     })
        //  }
         if(index>2){
             this.num=0
         }else{
             this.num=index;
         }
         
     },
     confirm:function(par){
         //确认服务
         this.mask=true;
         this.sus=true;
         this.getOrder(par)
     },
    getOrder(par){
        //获取订单
        var data={
            order_state:par,
            page:1,
            page_show:4,
        }
        var that=this;
        postFn('/order/order/orderlist/index',data,function(res){
            console.log(res);
            if(res.data.code==200){
                that.orderData=res.data.data;
                if(that.orderData.length>0){
                    that.ordernum=false;
                }else{
                     that.ordernum=true;
                }
                that.page=res.data.page;
                that.total=that.page.totalNum;
                var last_page=Math.ceil(that.page.totalNum/4);
                console.log(that.total);
                that.$store.dispatch("jumpAction", {page: 1});
                that.$store.dispatch("getLastPage", last_page);
            }
        })
    },
    changePagesInfo: function(type,curPage){ // 页码更改操作
        var page = curPage;
        if(type == 'add'){
            page = curPage + 1;
        }else if(type == 'less'){
            page = curPage - 1;
        }
        if(this.index<2){
            this.index=this.num;
        }
        this.dataFun(page,this.index,this.searchCriteria.searchKey);
    },
    dataFun: function(curPage,index,searchVal=''){
        var data={
            order_state:index,
            page:curPage,
            page_show:4,
            searchKey:searchVal,
        }
        console.log(searchVal,'=>searchVal');
        var that=this;
        postFn('/order/order/orderlist/index',data,function(res){
            console.log(res);
            if(res.data.code==200){
                that.orderData=res.data.data;
                that.page=res.data.page;
                that.total=that.page.totalNum;
                var last_page=Math.ceil(that.page.totalNum/4);
                that.$store.dispatch("getLastPage", last_page);
                that.$store.dispatch("jumpAction", {page: curPage});
                console.log(that.orderData);
                window.scrollTo(0, 0);
            }
        })
    },
 },
 computed: {
     ...mapState(['isLogin']),
     state:function(){
         return this.stateOpt[this.index]
     }
     
 },
 components: {
     'orderall':orderall,
     'orderwait':orderwait,
     'orderhandle':orderhandle,
     'ordernone':ordernone,
     'pagination':pagination
 }
}
</script>

<style scoped lang="scss">
    .order-head{
        font-size: 16px;
        color: #333333;
        font-weight: bold;
        padding: 28px 0 14px 42px;
        border-bottom: 1px solid #eeeeee;
        background: white;
        width: 1040px;
        box-sizing: border-box; 
        margin-top: 10px;
    }
    .order-body{
        min-height: 600px;
        padding: 20px;
        background: white;
        width: 1040px;
        box-sizing: border-box;  
        position: relative;
        .tapHead{
            overflow: hidden;
            .tapH{
                padding: 0 20px;
                font-size: 14px;
                color: #333333;
                cursor: pointer;
                float: left;
                position: relative;
                box-sizing: border-box;
                position: relative;
                &:not(:nth-last-child(1)) p{
                    position: absolute;
                    top:0;
                    right:0;
                    height: 14px;
                    border-right: 1px solid #eeeeee;
                }
                &:hover{
                    color: #e52e3a;
                }
                &.active{
                    span{
                        display: block;
                        color: #e52e3a;
                        padding-bottom: 13px;
                        width: 100%;
                        border-bottom: 1px solid #e52e3a;
                    }
                }
            }
           .search{
                position: relative;
                color:#bbbbbb;
                float: right;
                border: 1px solid #ccc;
                width: 271px;
                box-sizing: border-box;
                &.error{
                    border-color: #e52e3a;
                }
                &.errorAn{
                    background: #fff2f3;
                }
                input{
                    width: 244px;
                    height: 30px;
                    padding-left: 17px;
                    background: #fff;
                    box-sizing: border-box;
                    border: none;
                    background: transparent;
                }
                span{
                    position: absolute;
                    top:8px;
                    left:20px;
                    font-size: 14px;
                    &.errorAn{
                        background: #fff2f3;
                    }
                }
                i{
                    display: block;
                    width: 18px;
                    height: 16px;
                    position: absolute;
                    cursor: pointer;
                    top:8px;
                    right: 6px;
                    background: url(../../static/images/user/order/xbt.png) 0 0 no-repeat;
                }
            }
            
        }
        .title{
            background: #f5f5f5;
            text-align: center;
            margin-top: 14px;
            li{
                height: 32px;
                line-height: 32px;
                float: left;
                font-size: 14px;
                color: #666666;
            }
            li:nth-child(1){
                width: 532px;
                text-align: center
            }
            li:nth-child(2){
                width: 162px;
                text-align: center
            }
            li:nth-child(3){
                width: 148px;
                text-align: center;
                position: relative;
                cursor: pointer; 
                &:hover {
                    .title-co{
                        display: block;
                    }
                    i{
                        background-position-x:-49px ;
                    }
                }  
                .title-t{
                    position: relative;
                    z-index: 3;
                    height: 32px;
                    line-height: 32px;
                }
                .title-co{
                   width: 96px;
                   position: absolute;
                   top:0;
                   left:31px;
                   z-index: 2;
                   text-align: left;
                   padding: 36px 0 15px 15px;
                   border: 1px solid #f2f1f1;
                   background: white;
                   display: none;
                   p:hover{
                       color: #e52e3a;
                   }
                   p~p{
                       padding-top: 15px;
                   }

                }
                i{
                    display: block;
                    position: absolute;
                    top:15px;
                    right:35px;
                    width: 7px;
                    height: 4px;
                    background: url(../../static/images/user/order/xbt.png) -40px -8px no-repeat;
                    
                }
            }
            li:nth-child(4){
                width: 154px;
                text-align: center
            }
        }
        // .pagination-body{
        //     width: 634px;
        //     position: absolute;
        //     left: 50%;
        //     bottom:40px;
        //     transform: translateX(-50%);
        // }
    }
    .pagination-body{
            overflow: hidden;
            padding-bottom: 40px;
            background: white;
            margin: 0 auto;
    }
    .adv{
        margin-top: 20px;
        margin-bottom: 20px;
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
        border-radius: 10px;
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
