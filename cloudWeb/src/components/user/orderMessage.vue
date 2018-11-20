<template>
 <div class="container">
     <p class="orderMessage-head">订单消息</p>
     <div class="orderMessage-body" :class="{marbody:total<10}">
         <ul v-if="!msgNone">
             <li class="selectAll clearfix"  > 
                 <div>
                     <input type="checkbox" id="quan" @click="checkAll($event)"> 全选
                 </div>
                 <p @click="delAll()">
                     删除
                 </p>
             </li>
             <li v-for='(item,index) in orderMsg.list' :key="index">
                 <input type="checkbox" v-model="checkData" class="checkItem" :value="item.id"  > 
                 <span>{{item.title}}</span> 
                 <em>{{item.addtime}}</em>
                 <var v-html="item.content"></var>
                 <!-- <a href="#">查看详情 ></a> -->
                 <i>
                     <img src="../../static/images/user/orderMessage/del.png" alt="" @click="delmsg(item.id)">
                 </i>
             </li>
             <!-- <li>
                 <input type="checkbox" v-model="checkData" class="checkItem" value="banana"> 
                 <span>订单待支付提醒</span> 
                 <em>2018.07.01   11:23:13</em>
                 <var>【云平台】您的订单，单号“123456”还有3小时失效，请您尽快支付。</var>
                 <a href="#">查看详情 ></a>
                 <i>
                     <img src="../../static/images/user/orderMessage/del.png" alt="">
                 </i>
             </li> -->
             <!-- <li>
                 <input type="checkbox" v-model="checkData" class="checkItem" value="orange"> 
                 <span>订单待支付提醒</span> 
                 <em>2018.07.01   11:23:13</em>
                 <var>【云平台】您的订单，单号“123456”还有3小时失效，请您尽快支付。</var>
                 <a href="#">查看详情 ></a>
                 <i>
                     <img src="../../static/images/user/orderMessage/del.png" alt="">
                 </i>
             </li>
             <li>
                 <input type="checkbox"> 
                 <span>订单待支付提醒</span> 
                 <em>2018.07.01   11:23:13</em>
                 <var>【云平台】您的订单，单号“123456”还有3小时失效，请您尽快支付。</var>
                 <a href="#">查看详情 ></a>
                 <i>
                     <img src="../../static/images/user/orderMessage/del.png" alt="">
                 </i>
             </li>
             <li>
                 <input type="checkbox"> 
                 <span>订单待支付提醒</span> 
                 <em>2018.07.01   11:23:13</em>
                 <var>【云平台】您的订单，单号“123456”还有3小时失效，请您尽快支付。</var>
                 <a href="#">查看详情 ></a>
                 <i>
                     <img src="../../static/images/user/orderMessage/del.png" alt="">
                 </i>
             </li>
             <li>
                 <input type="checkbox"> 
                 <span>订单待支付提醒</span> 
                 <em>2018.07.01   11:23:13</em>
                 <var>【云平台】您的订单，单号“123456”还有3小时失效，请您尽快支付。</var>
                 <a href="#">查看详情 ></a>
                 <i>
                     <img src="../../static/images/user/orderMessage/del.png" alt="">
                 </i>
             </li>
             <li>
                 <input type="checkbox"> 
                 <span>订单待支付提醒</span> 
                 <em>2018.07.01   11:23:13</em>
                 <var>【云平台】您的订单，单号“123456”还有3小时失效，请您尽快支付。</var>
                 <a href="#">查看详情 ></a>
                 <i>
                     <img src="../../static/images/user/orderMessage/del.png" alt="">
                 </i>
             </li> -->
         </ul>
         <msgnone v-if='msgNone'></msgnone>
     </div>
     <div class="pagination-body" v-if="total>10"><pagination @changePagesInfo="changePagesInfo"></pagination></div>
 </div>
</template>
<script>
import pagination from '../common/pagination.vue';
import {postFn,formatDateTimeD} from '../../static/js/util.js'
import msgnone from '../common/user/msgnone.vue';
import {mapState,mapActions} from 'vuex'
export default {
    metaInfo () {
        return {
            title: '消息中心-创新科技服务云平台',
        }
    },
 data() {
  return {
      checkData: [], // 双向绑定checkbox数据数组
      orderMsg:'',
      total:0,
      msgNone:true,//控制有没有订单消息
  }
 },
 created () {
     if(this.isLogin){
		this.getoredeMes();  
	}else{
        this.userView=this.$route.query.userView;
		this.$router.push({path:'/login',query:{userView:this.userView}})
	}
   
 },
 computed: {
     ...mapState(['isLogin'])
},
 components: {
     pagination,
     msgnone,
 },
  watch: { // 监视双向绑定的数据数组
    'checkData':{
        handler(){ // 数据数组有变化将触发此函数
            if(this.checkData.length == this.orderMsg.list.length){
                document.querySelector('#quan').checked=true;
            }else {
                document.querySelector('#quan').checked=false;
            }
        },
        deep: true // 深度监视
    }
 },
 methods: {
      ...mapActions(['update_msgNum']),
    checkAll(e){ // 点击全选事件函数
        var checkObj = document.querySelectorAll('.checkItem'); // 获取所有checkbox项
        if(e.target.checked){ // 判定全选checkbox的勾选状态
            for(var i=0;i<checkObj.length;i++){
                if(!checkObj[i].checked){ // 将未勾选的checkbox选项push到绑定数组中
                    this.checkData.push(checkObj[i].value);
                }
            }
        }else { // 如果是去掉全选则清空checkbox选项绑定数组
            this.checkData = [ ];
        }
    },
    getoredeMes(){
        //获取订单消息
        var data={
            read_state:'all',
            page:1,
            limit:10
        }
        var that=this;
        postFn('/message/message/msg/getordermsg',data,function(res){
            console.log(res);
            if(res.data.code==200){
                that.orderMsg=res.data.data;
                if(that.orderMsg.total!=0){
                    that.msgNone=false;
                }else{
                     that.msgNone=true;
                }
                that.update_msgNum(0);
                that.total=that.orderMsg.total;
                var last_page=Math.ceil(that.orderMsg.total/10);
                that.$store.dispatch("getLastPage", last_page);
                console.log(that.orderMsg);
            }
        })
    },
    delAll(){
        //删除全部信息
        this.deloredeMes(this.checkData);
        this.checkData=[];
    },
    delmsg(id){
        //删除一个信息
        var data=[id];
        this.deloredeMes(data);
    },
    deloredeMes(id){
        //删除请求
        var data={
            msg_id:id
        }
        var that=this;
        postFn('/message/message/msg/delmsg',data,function(res){
            if(res.data.code==200){
                that.getoredeMes();
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
        this.dataFun(page);
    },
    dataFun: function(curPage){
        var data={
            read_state:'all',
            page:curPage,
            limit:10
        }
        var that=this;
        postFn('/message/message/msg/getordermsg',data,function(res){
            if(res.data.code==200){
                that.orderMsg=res.data.data;
                var last_page=Math.ceil(that.orderMsg.total/10);
                that.total=that.orderMsg.total;
                that.$store.dispatch("getLastPage", last_page);
                that.$store.dispatch("jumpAction", {page: curPage});
                window.scrollTo(0, 0);
                that.checkData = [ ];
            }
        })
    },
 }
}
</script>

<style scoped lang="scss">
    
    .orderMessage-head{
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
    .orderMessage-body{
        min-height: 600px;
        padding: 26px 56px 10px 40px;
        &.marbody{
            margin-bottom:80px;
        }
        background: white;
        width: 1040px;
        box-sizing: border-box;  
        position: relative;
        ul{
            li{
                input{
                    position: relative;
                    top:1px;
                }
            }
            .selectAll{
                background: #fbfbfb;
                padding-left: 20px;
                margin-bottom: 12px;
                border-bottom: none !important;
                div{
                    float: left;
                    height: 34px;
                    line-height: 34px;
                }
                p{
                    float: right;
                    height: 34px;
                    line-height: 34px;
                    cursor: pointer;
                }
            }
            li~li{
                padding-left: 20px;
                font-size: 16px;
                line-height: 93px;
                position: relative;
                span{
                    color:#333333;
                    margin-left: 1px;
                    display: inline-block;
                    width: 112px;
                }
                em{
                    color: #999999;
                    margin-left: 12px;
                    font-size: 14px;
                    display: inline-block;
                    width: 130px;
                }
                var{
                    color: #666666;
                    margin-left: 46px;
                    font-size: 14px;
                }
                a{
                    color: #4685c3;
                    &:hover{
                        color: #e52e3a;
                    }
                }
                i{
                    position: absolute;
                    right:12px;
                    top:37px;
                    cursor: pointer;
                }
            }
            li:not(:nth-last-child(1)){
                border-bottom: 1px dashed #d8d8d8;
            }
        }
    }
    .pagination-body{
        overflow: hidden;
        padding-bottom: 40px;
        background: white;
        margin: 0 auto 80px;
    }
</style>

<style lang="scss">
    .orderMessage-body{
        ul{
            li~li{
                var{
                    a{
                        margin-left:20px;
                        color: #4685c3;
                        &:hover{
                            color: #e52e3a;
                        }
                    }
                }
            }
        }
    }
</style>

