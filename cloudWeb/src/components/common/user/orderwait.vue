<template>
 <div class="container">
     <div v-for='(item,index) in orderData' :key="index">
         <div class="order-c" v-if="item.goods.length>1">
            <div class="order-t">
                <p class="clearfix">
                    <span class="o-time">{{item.create_time}}</span>
                    <span class="o-num">订单号:
                        <em >{{item.orderNumber}}</em>
                    </span>
                    <i @click="open"></i>
                    <span class="o-contact">和我联系</span>
                </p>
            </div>
            <div class="order-d clearfix" v-for="(el,el_index) in item.goods" :key='el_index'>
                <ul class="clearfix" v-if="el_index==0">
                    <li class="clearfix box1" >
                        <div class="order-z clearfix">
                            <div @click="togoods(item.goods[0])">
                                <img :src="el.img" alt="">
                            </div>
                            <div>
                                <p :title='el.title' @click="togoods(item.goods[0])">{{el.title}}</p>
                                <p>{{el.skushow}}</p>
                                <p :title="el.desc">{{el.desc}}</p>
                            </div>
                        </div>
                        <div class="order-p ">
                            <span>￥{{el.price}}</span>
                            <span>x{{el.count}}</span>
                        </div>
                    </li>
                    <li class="box2 box5">
                        <p :class="{nomal:item.order_amount==item.order_price}">总额:￥{{item.order_amount}}</p>
                        <p class="ful" v-if='item.order_amount!=item.order_price'>应付:￥{{item.order_price}}</p>
                    </li>
                    <li class="box3 box5">
                        <p class="ful">等待付款</p>
                        <p @click="openUrl(item.order_id,1)">订单详情</p>
                    </li>
                    <li class="box4 box5">
                        <div>
                            <p><i></i><span>剩余{{el.remainPay_hour}}小时{{el.remainPay_min}}分</span></p>
                            <button @click="pay(el)">付款</button>
                            <p @click="cancelOrder(item)">取消订单</p>
                        </div>
                    </li>
                </ul>
                <ul class="clearfix" v-if="el_index>0" >
                    <li class="clearfix box1" >
                        <div class="order-z clearfix">
                            <div @click="togoods(el)">
                                <img :src="el.img" alt="">
                            </div>
                            <div>
                                <p :title='el.title'  @click="togoods(el)">{{el.title}}</p>
                                <p>{{el.skushow}}</p>
                                <p :title="el.desc">{{el.desc}}</p>
                            </div>
                        </div>
                        <div class="order-p ">
                            <span>￥{{el.price}}</span>
                            <span>x{{el.count}}</span>
                        </div>
                    </li>
                    <li class="box2 " :class="{box5:item.goods.length!=el_index+1}">
                        
                    </li>
                    <li class="box3"  :class="{box5:item.goods.length!=el_index+1}">
                        
                    </li>
                    <li class="box4" :class="{box5:item.goods.length!=el_index+1}">
                        
                    </li>
                </ul>
                <!-- <ul class="clearfix">
                    <li class="clearfix box1" >
                        <div class="order-z clearfix">
                            <div>
                                <img src="../../../static/images/user/order/logo.png" alt="">
                            </div>
                            <div>
                                <p>软件著作权</p>
                                <p>加急办理</p>
                                <p>为国内人申请人提供获得商标专用</p>
                            </div>
                        </div>
                        <div class="order-p ">
                            <span>￥1590.00</span>
                            <span>×1</span>
                        </div>
                    </li>
                    <li class="box2 ">
                        
                    </li>
                    <li class="box3 ">
                        
                    </li>
                    <li class="box4 ">
                    </li>
                </ul> -->
            </div>
        </div>
        <div class="order-c" v-if="item.goods.length==1">
            <div class="order-t">
                <p class="clearfix">
                    <span class="o-time">{{item.goods[0].create_time}}</span>
                    <span class="o-num">订单号:
                        <em >{{item.orderNumber}}</em>
                    </span>
                    <i @click="open"></i>
                    <span class="o-contact">和我联系</span>
                </p>
            </div>
            <div class="order-d clearfix">
                <ul class="clearfix"> 
                    <li class="clearfix box1">
                        <div class="order-z clearfix">
                            <div @click="togoods(item.goods[0])">
                                <img :src="item.goods[0].img" alt="">
                            </div>
                            <div>
                                <p :title='item.goods[0].title' @click="togoods(item.goods[0])">{{item.goods[0].title}}</p>
                                <p>{{item.goods[0].skushow}}</p>
                                <p :title='item.goods[0].desc'>{{item.goods[0].desc}}</p>
                            </div>
                        </div>
                        <div class="order-p">
                            <span>￥{{item.goods[0].price}}</span>
                            <span>x{{item.goods[0].count}}</span>
                        </div>
                    </li>
                    <li class="box2">
                        <p :class="{nomal:item.goods[0].price==item.goods[0].pay_price}">总额:￥{{item.goods[0].price}}</p>
                        <p class="ful" v-if='item.goods[0].price!=item.goods[0].pay_price'>应付:￥{{item.goods[0].pay_price}}</p>
                    </li>
                    <li class="box3">
                        <div>
                            <p  class="ful">{{item.goods[0].order_state}}</p>
                            <p @click="openUrl(item.goods[0].goods_id,2)">订单详情</p>
                        </div>
                    </li>
                    <li class="box4">
                        <div>
                            <p><i></i><span>剩余{{item.goods[0].remainPay_hour}}小时{{item.goods[0].remainPay_min}}分</span></p>
                            <button @click="pay(item.goods[0])">付款</button>
                            <p @click="cancelOrder(item)">取消订单</p>
                        </div>
                    </li>
                    </ul>
            </div>
        </div>
     </div>
        <!-- <div class="order-c">
            <div class="order-t">
                <p class="clearfix">
                    <span class="o-time">2018-08-03 22:15:30</span>
                    <span class="o-num">订单号:
                        <em >124556286567</em>
                    </span>
                    <i></i>
                    <span class="o-contact">和我联系</span>
                    
                </p>
            </div>
            <div class="order-d clearfix">
                <ul class="clearfix">
                    <li class="clearfix box1" >
                        <div class="order-z clearfix">
                            <div>
                                <img src="../../../static/images/user/order/logo.png" alt="">
                            </div>
                            <div>
                                <p>软件著作权</p>
                                <p>加急办理</p>
                                <p>为国内人申请人提供获得商标专用</p>
                            </div>
                        </div>
                        <div class="order-p ">
                            <span>￥1590.00</span>
                            <span>×1</span>
                        </div>
                    </li>
                    <li class="box2 box5">
                        <p>总额:￥1590.00</p>
                        <p class="ful">应付:￥1310.00</p>
                    </li>
                    <li class="box3 box5">
                        <p class="ful">等待付款</p>
                        <p @click="openUrl">订单详情</p>
                    </li>
                    <li class="box4 box5">
                        <div>
                            <p><i></i><span>剩余23小时24分</span></p>
                            <button>付款</button>
                            <p @click="cancelOrder">取消订单</p>
                        </div>
                    </li>
                </ul>
                <ul class="clearfix">
                    <li class="clearfix box1" >
                        <div class="order-z clearfix">
                            <div>
                                <img src="../../../static/images/user/order/logo.png" alt="">
                            </div>
                            <div>
                                <p>软件著作权</p>
                                <p>加急办理</p>
                                <p>为国内人申请人提供获得商标专用</p>
                            </div>
                        </div>
                        <div class="order-p ">
                            <span>￥1590.00</span>
                            <span>×1</span>
                        </div>
                    </li>
                    <li class="box2 box5">
                        <p>总额:￥1590.00</p>
                        <p class="ful">应付:￥1310.00</p>
                    </li>
                    <li class="box3 box5">
                        <p class="ful">等待付款</p>
                        <p @click="openUrl">订单详情</p>
                    </li>
                    <li class="box4 box5">
                        <div>
                            <p><i></i><span>剩余23小时24分</span></p>
                            <button>付款</button>
                            <p @click="cancelOrder">取消订单</p>
                        </div>
                    </li>
                </ul>
                <ul class="clearfix">
                    <li class="clearfix box1" >
                        <div class="order-z clearfix">
                            <div>
                                <img src="../../../static/images/user/order/logo.png" alt="">
                            </div>
                            <div>
                                <p>软件著作权</p>
                                <p>加急办理</p>
                                <p>为国内人申请人提供获得商标专用</p>
                            </div>
                        </div>
                        <div class="order-p ">
                            <span>￥1590.00</span>
                            <span>×1</span>
                        </div>
                    </li>
                    <li class="box2 ">
                        <p>总额:￥1590.00</p>
                        <p class="ful">应付:￥1310.00</p>
                    </li>
                    <li class="box3 ">
                        <p class="ful">等待付款</p>
                        <p @click="openUrl">订单详情</p>
                    </li>
                    <li class="box4 ">
                        <div>
                            <p><i></i><span>剩余23小时24分</span></p>
                            <button>付款</button>
                            <p @click="cancelOrder">取消订单</p>
                        </div>
                    </li>
                </ul>
                
            </div>
        </div> -->
 </div>
</template>

<script>
import {openzx} from '../../../static/js/util.js';
export default {
 props:['orderData'],
 data() {
  return {
      orderId:'124556286567'
  }
 },
 methods:{
     open(){
         //打开商务通
         openzx();
     },
     cancelOrder:function(el){
         //取消订单
         this.$emit('cancelOrder',el.orderNumber)
     },
     openUrl:function(goods_id,type){
         //打开订单详情
         window.open(window.location.origin + '/home/order/'+goods_id+'?num=1&type='+type)
     },
     pay(el){
         //付款
         window.open(el.payUrl);
     },
     togoods(el){
         //去商铺详情
        window.open(window.location.origin +'/'+el.product_id)
    }
 },
 components: {

 },
}
</script>

<style scoped lang="scss">
    .container{
        .order-c{
            border: 1px solid #f1f1f1;
            border-bottom:none;
            margin-top: 10px;
            .order-t{
                background:#f3f3f3 ;
                height: 38px;
                line-height: 38px;
                padding-left: 20px;
                font-size: 14px;
                color:#999999;
                p{
                    width: 487px;
                    padding-top: 12px;
                    float: left;
                }
                .o-num{
                    margin-left: 30px;
                    em{
                        color: #333333;
                    }
                }
                span:nth-child(1){
                    float: left;
                }
                span:nth-child(2){
                    float: left;
                }
                i:nth-child(3){
                    float: right;
                }
                .o-contact{
                   margin-right: 2px;
                   float: right;
                }
                i{
                    display:inline-block;
                    width: 19px;
                    height: 19px;
                    background: url(../../../static/images/user/order/xbt.png) -141px 0 no-repeat;
                    vertical-align: middle;
                    margin-top: -4px;
                    cursor: pointer;
                }
            }
            .order-d{
                li{
                    float: left;
                    height: 142px;
                    border-bottom: 1px solid #eeeeee;
                    box-sizing: border-box;
                }
                li:not(.box4){
                    border-right: 1px solid #eeeeee;
                }
                .box1{
                    width: 532px;
                    box-sizing: border-box;
                    padding: 30px 22px;
                    .order-z{
                        float: left;
                        
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
                            width: 190px;
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
                                    color:#e52e3a;
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
                    .order-p{
                        float: left;
                        text-align: center;
                        margin-left: 45px;
                        span:nth-child(2){
                            margin-left: 30px;
                        }
                    }
                }
                .box2{
                    width: 162px;
                    p{
                        text-align: center;
                        font-size: 14px;
                    }
                    p:nth-child(1){
                        margin-top: 37px;
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
                .box3{
                    width: 148px;
                    p{
                        text-align: center;
                        font-size: 14px;
                    }
                    p:nth-child(1){
                        margin-top: 37px;
                    }
                    p:nth-child(2){
                        margin-top: 10px;
                        color: #666666;
                        cursor: pointer;
                        &:hover{
                            color: #e52e3a;
                        }
                    }
                    .ful{
                        color: #e52e3a;
                    }
                    .susful{
                        font-size: 14px;
                        color: #999999;
                    }
                }
                .box4{
                    width: 154px;
                    font-size: 14px;
                    text-align: center;
                    float: right;
                    p:nth-child(1){
                        font-size: 12px;
                        color: #a9a9a9;
                        i{
                            display: inline-block;
                            width: 14px;
                            height: 14px;
                            background: url(../../../static/images/user/order/xbt.png) -68px 0 no-repeat;
                            vertical-align: middle;
                            margin-top: -4px;
                        }
                        span{
                            margin-left: 3px;
                        }
                        margin-top: 37px;
                        margin-bottom: 10px;
                    }
                    button{
                        width: 98px;
                        height: 26px;
                        outline: none;
                        border: 1px solid #e52e3a;
                        color: #e52e3a;
                        cursor: pointer;
                        background: white;
                        &:hover{
                                color: white;
                                background: #e52e3a;
                        }
                        &.again{
                            color:#666666;
                            border:1px solid #eeeeee;
                            background:#fbfbfb ;
                            display: inline-block;
                            margin-top: 50%;
                            &:hover{
                                color: white;
                                background: #e52e3a;
                                border: 1px solid #e52e3a;
                            }
                        }
                    }
                    p:nth-child(3){
                        color: #666666;
                        margin-top: 10px;
                        cursor: pointer;
                        &:hover{
                            color: #e52e3a;
                        }

                    }
                }
                .box5{
                    border-bottom:none;
                }
            }
        }
    }
</style>
