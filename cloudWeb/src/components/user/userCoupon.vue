<template>
 <div class="container">
     <p class="coupon-head">我的优惠券</p>
     <div class="coupon-body">
         <div class="tapHead">
            <div class="tapH" v-for='(item,index) in options' :key="item.id" :class="{active:num==index}" @click="tap(index)"><p></p>
            <span>{{item}}</span></div>
        </div>
        <div class="coupon-cont clearfix">
            <div class="coupon-b " v-show="!couponNone" v-for="(item,index) in couponData.data" :key="index">
                <div class="coupon-h" :class="[{used:num==1},{overdue:num==2}]">
                    <p><em>￥</em><span>{{item.free_price}}</span> <var></var></p>
                    <p>{{item.use_start_time}}-{{item.use_end_time}}</p>
                    <p>满{{item.limit_price}}可用</p>
                </div>
                <div class="coupon-c">
                    <div> 
                        <p>使用条件 : {{item.cou_explain}}</p> 
                        <i></i> 
                        <p>
                            使用条件: 
                            <span>
                                {{item.cou_explain}}
                            </span>   
                            <em></em>
                        </p>
                    </div>
                    <p>优惠券码 : <span>{{item.code}}</span></p>
                    <p>叠加限制 : <span v-if="item.use_type==1">可与其他优惠叠加使用</span><span v-else>不可与其他优惠叠加</span></p>
                </div>
            </div>
            <!-- <div class="coupon-b " v-show="!couponNone">
                <div class="coupon-h" :class="[{used:num==1},{overdue:num==2}]">
                    <p><em>￥</em><span>99</span> <var></var></p>
                    <p>2018.08.08-2018.08.31</p>
                    <p>满2999可用</p>
                </div>
                <div class="coupon-c">
                    <div> 
                        <p>使用条件 : 仅限用于商标注册服务，请联系专属顾问使用使</p> 
                        <i></i> 
                        <p>
                            使用条件: 
                            <span>
                                仅限用于商标注册 
                                服务，请联系专属顾问使用使 
                                仅限用于商标注册服务，请联 
                                系专属顾问使用使仅限用于商 
                                标注册服务，请联
                                系专属顾问使用使仅限用于商
                                标注册服务，请联系专属顾问
                                使用使仅限用于商标注册服务，
                                请联系专属顾问使用使仅限用
                                于商标注册仅限用于商标注册
                                服务，请联系专属顾问使用使
                                服务
                            </span>   
                            <em></em>
                        </p>
                    </div>
                    <p>优惠券码 : <span>41987797873</span></p>
                    <p>可叠加 : <span>可与其他优惠叠加使用</span></p>
                </div>
            </div> -->
        </div>
        <div class="coupon-none" v-show="couponNone">
            <i></i>
            <p v-show='num==0'>目前没有优惠券可以使用</p>
            <p v-show='num==1'>目前没有优惠券使用记录</p>
            <p v-show='num==2'>目前没有已过期优惠券</p>
        </div>
     </div>
     <div class="pagination-body" v-show="!couponNone" v-if="total>8"><pagination @changePagesInfo="changePagesInfo"></pagination></div>
     <div class="adv">
        <img src="../../static/images/user/order/adv-adv.jpg" alt="">
    </div>
 </div>
</template>

<script>
import pagination from '../common/pagination.vue';
import {postFn,formatDateTimeT} from '../../static/js/util.js'
import {mapState} from 'vuex';
export default {
metaInfo () {
    return {
        title: '财产管理-创新科技服务云平台',
    }
},
 data() {
  return {
      options:['未使用的优惠券',"已使用的优惠券","已过期的优惠券"], //tap切换头部
      num:0,
      couponNone:true,
      couponData:"",
      total:'',
  }
 },
 created() {
     if(this.isLogin){
		this.getCoupon();
	}else{
        this.userView=this.$route.query.userView;
		this.$router.push({path:'/login',query:{userView:this.userView}})
	}
     
 },
 computed: {
     ...mapState(['userInfo','isLogin']),
 },
 components: {
     'pagination':pagination
 },
 methods: {
     tap:function(index){
         //tap切换
        this.num=index
        this.couponNone=true;
        this.getCoupon();
    },
    getCoupon(){
        //获取优惠券
        var data={
            // uid:1,
            uid:this.userInfo.id,
            status:this.num+1,
            page:1,
            size:8,
        }
        var that=this;
        postFn('/event/coupon/user_coupons',data,function(res){
            console.log(res);
            if(res.data.code==200){
                that.couponData=res.data.data.data;
                var last_page=Math.ceil(that.couponData.total/8);
                    that.total=that.couponData.total;
                    that.$store.dispatch("getLastPage", last_page);
                if(that.couponData.data.length!=0){
                    that.couponNone=false;
                }else{
                    that.couponNone=true;
                }
                console.log(that.couponData);
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
            // uid:'1',
            uid:this.userInfo.id,
            status:this.num+1,
            page:curPage,
            size:8,
        }
        var that=this;
        postFn('/event/coupon/user_coupons',data,function(res){
            console.log(res);
            if(res.data.code==200){
                that.couponData=res.data.data.data;
                that.couponData.data.forEach(element => {
                    element.starDate=formatDateTimeT(element.use_start_time);
                    element.endDate=formatDateTimeT(element.use_end_time);
                });
                var last_page=Math.ceil(that.couponData.total/8);
                that.total=that.couponData.total;
                that.$store.dispatch("getLastPage", last_page);
                that.$store.dispatch("jumpAction", {page: curPage});
                console.log(that.couponData);
                window.scrollTo(0, 0);
            }
        })
    },
 }
}
</script>

<style scoped lang="scss">
    .coupon-head{
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
    .coupon-body{
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
        }
        .coupon-cont{
            padding-top: 10px;
            
        }
        .coupon-b{
            width: 225px;
            margin-top: 20px;
            margin-left: 20px;
            float: left;
            .coupon-h{
                width: 225px;
                height: 173px;
                background: url(../../static/images/user/coupon/couxbt.png) 0 0 no-repeat;
                overflow: hidden;
                &.used{
                    background-position-x: -273px;
                    p:nth-child(1){
                        var{
                            background-position-y: -236px;
                            display: block;
                        }
                    }
                }
                &.overdue{
                    background-position-x: -273px;
                    p:nth-child(1){
                        var{
                            background-position-y: -181px;
                            display: block;
                        }
                    }
                }
                p{
                    text-align: center;
                    color: white;
                }
                p~p{
                    margin-top: 12px;
                }
                p:nth-child(1){
                    margin-top: 35px;
                    position: relative;
                    // width: 146px;
                    // text-align: right;
                    em{
                        font-size: 20px;
                        position: relative;
                        top:-28px;
                    }
                    span{
                        font-size: 60px;
                    }
                    var{
                        position: absolute;
                        width: 67px;
                        height: 45px;
                        background: url(../../static/images/user/coupon/couxbt.png) -386px -181px no-repeat;
                        right: 3px;
                        top:0px;
                        display: none;
                    }
                }
            }
            .coupon-c{
                background:#fafafa;
                height: 150px;
                padding: 16px 14px;
                border-radius: 0 0 10px 10px;
                p{
                    font-size: 13px;
                    color: #999999;
                    span{
                        color: #333333;
                    }
                }
                p~p{
                    margin-top: 14px;
                }
                div:nth-child(1){
                    padding: 10px 0 22px;
                    position: relative;
                    p:nth-child(1){
                        height: 35px;
                        overflow: hidden;
                        line-height: 19px;
                        
                    }
                    i{
                        background: url(../../static/images/user/coupon/couxbt.png) -219px -235px no-repeat;
                        width: 9px;
                        height: 4px;
                        position: absolute;
                        right: 5px;
                        bottom: 26px;
                    }
                    &:hover{
                        i{
                            background-position-x: -254px;
                        }
                        p:nth-child(3){
                            display: block;
                        }
                    }
                    p:nth-child(3){
                        color: #333333;
                        padding: 28px 20px;
                        border: 1px solid #cccccc;
                        position: absolute;
                        top:37px;
                        left: -15px;
                        width: 224px;
                        box-sizing: border-box;
                        background: white;
                        display: none;
                        span{
                            color: #999999;
                            line-height: 20px;
                        }
                        em{
                             background: url(../../static/images/user/coupon/couxbt.png) -305px -232px no-repeat;
                            position: absolute;
                            width: 9px;
                            height: 7px;
                            top:-6PX;
                            right: 15PX;
                        }
                    }
                }
            }
        }
        .coupon-none{
            width: 100%;
            height: 100%;
            text-align: center;
            i{
                display: block;
                width: 126px;
                height: 114px;
                background: url(../../static/images/user/coupon/couxbt.png) -40px -201px no-repeat;
                margin: 94px auto 45px;
            }
            p{
                font-size: 18px;
                color: #333333;
            }
        }
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
</style>
