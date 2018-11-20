<template>
 <div class="container">
     <div v-for='(item,index) in orderData' :key="index">
        <div class="order-c"  v-if="item.goods.length==1">
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
                <ul class="order-d clearfix">
                    <li class="clearfix">
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
                    <li>
                        <p :class="{nomal:item.goods[0].price==item.goods[0].pay_price}">总额:￥{{item.goods[0].price}}</p>
                        <p class="ful" v-if='item.goods[0].price!=item.goods[0].pay_price'>实付:￥{{item.goods[0].pay_price}}</p>
                    </li>
                    <li>
                        <p class="ful">{{item.goods[0].order_state}}</p>
                        <p @click="openUrl(item.goods[0].goods_id,2)">订单详情</p>
                    </li>
                    <li>
                        <div>
                            <button  @click="again(item.goods[0])" v-show="item.goods[0].confirm_type==0">确认服务</button>
                            <div>订单跟踪 <div class="track-f"><trackhandle :dataT="item.goods[0].schedule" type='schedule'></trackhandle></div></div>
                        </div>
                    </li>
                </ul>
        </div>
        <div class="order-c order-f"  v-if="item.goods.length>1">
            <div class="order-t">
                <p class="clearfix">
                    <span class="o-time">{{item.create_time}}</span>
                    <span class="o-num">订单号:
                        <em >{{item.orderNumber}}</em>
                    </span>
                    <span class="state">订单状态:
                        <em>已拆分</em>
                    </span>
                </p>
                <span class="money">订单总金额:
                    <em>￥{{item.order_price}}</em>
                </span>
                <span class="details">订单拆分详情</span>
            </div>
            <ul class="order-d clearfix" v-for='(el,indexEL) in item.goods' :key="indexEL">
                <li class="clearfix">
                    <p class="order-t order-ft">
                        <span class="o-time">{{el.create_time}}</span>
                        <span class="o-num">订单号:
                            <em >{{el.child_order_num}}</em>
                        </span>
                        <i @click="open"></i>
                        <span class="o-contact">和我联系</span>
                    </p>
                    <div class="order-z clearfix">
                        <div @click="togoods(el)">
                            <img :src="el.img" alt="">
                        </div>
                        <div>
                            <p :title="el.title" @click="togoods(el)">{{el.title}}</p>
                            <p>{{el.skushow}}</p>
                            <p :title="el.desc">{{el.desc}}</p>
                        </div>
                    </div>
                    <div class="order-p">
                        <span>￥{{el.price}}</span>
                        <span>x{{el.count}}</span>
                    </div>
                </li>
                <li>
                    <p :class="{nomal:el.price==el.pay_price}">总额:￥{{el.price}}</p>
                    <p class="ful" v-if='el.price!=el.pay_price'>实付:￥{{el.pay_price}}</p>
                </li>
                <li>
                    <p class="ful">{{el.order_state}}</p>
                    <p @click="openUrl(el.goods_id,2)">订单详情</p>
                </li>
                <li>
                    <button class="again" @click="again(el)" v-show="el.confirm_type==0">确认服务</button>
                    <div :class="{isagainT:el.confirm_type==1}">订单跟踪 <div class="track-f"><trackhandle :dataT="el.schedule" type='schedule'></trackhandle></div></div>
                </li>
            </ul>
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
            <ul class="order-d clearfix">
                <li class="clearfix">
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
                    <div class="order-p">
                        <span>￥1590.00</span>
                        <span>×1</span>
                    </div>
                </li>
                <li>
                    <p>总额:￥1590.00</p>
                    <p class="ful">应付:￥1310.00</p>
                </li>
                <li>
                    <p class="ful">办理中</p>
                    <p @click="openUrl">订单详情</p>
                </li>
                <li>
                    <div>
                        <div>订单跟踪 <div class="track-f"><trackhandle :dataT="dataT"></trackhandle></div></div>
                    </div>
                </li>
            </ul>
        </div>
         <div class="order-c order-f" >
            <div class="order-t">
                <p class="clearfix">
                    <span class="o-time">2018-08-03 22:15:30</span>
                    <span class="o-num">订单号:
                        <em >124556286567</em>
                    </span>
                    <span class="state">订单状态:
                        <em>已拆分</em>
                    </span>
                </p>
                <span class="money">订单总金额:
                    <em>￥1590.00</em>
                </span>
                <span class="details">订单拆封详情</span>
            </div>
            <ul class="order-d clearfix">
                <li class="clearfix">
                    <p class="order-t order-ft">
                        <span class="o-time">2018-08-03 22:15:30</span>
                        <span class="o-num">订单号:
                            <em >124556286567</em>
                        </span>
                        <i></i>
                        <span class="o-contact">和我联系</span>
                    </p>
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
                    <div class="order-p">
                        <span>￥1590.00</span>
                        <span>×1</span>
                    </div>
                </li>
                <li>
                    <p>总额:￥1590.00</p>
                    <p class="ful">应付:￥1310.00</p>
                </li>
                <li>
                    <p class="ful">办理中</p>
                    <p @click="openUrl">订单详情</p>
                </li>
                <li>
                    <button class="again" @click="again" v-show="!isagain">确认服务</button>
                    <div :class="{isagainT:isagain}">订单跟踪 <div class="track-f"><trackhandle :dataT="dataT"></trackhandle></div></div>
                </li>
            </ul>
        </div> -->
 </div>
</template>

<script>
import track from './track.vue';
import Api from '../../../static/js/api2.js'
import {openzx} from '../../../static/js/util.js'
export default {
 props:['orderData'],
 data() {
  return {
      dataT:[{
          stu:3,
          name:"订单提交"
      },{
          stu:3,
          name:"付款成功"
      },{
          stu:2,
          name:"订单受理"
      },{
          stu:1,
          name:"资料递交官方单位"
      },{
          stu:1,
          name:"完成"
      },
      ],
      orderId:'124556286567',
      isagain:false,
  }
 },
 created () {
   console.log(this.orderData);  
 },
 methods: {
     open(){
         //打开商务通
         openzx();
     },
     again:function(el){
         //确认服务
         this.orderConfirm(el.goods_id,el.child_order_num,el)
     },
     openUrl:function(goods_id,type){
         //打开订单详情页
         window.open(window.location.origin + '/home/order/'+goods_id+'?num=2&type='+type)
     },
    orderConfirm(id,orderNumber,el){
        //确认服务
        Api.postorderconfirm(id,orderNumber).then(res=>{
            console.log(res);
            if(res.data.code==200){
                this.$emit('confirm',2)
                this.isagain=true;
            }
        })
    },
    togoods(el){
        //去商品详情页
        window.open(window.location.origin +'/'+el.product_id)
    }
 },
 components: {
     'trackhandle':track
 }
}
</script>

<style scoped lang="scss">
    .container{
        .order-c{
            border: 1px solid #f1f1f1;
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
                border-bottom: 1px solid #eeeeee;
                li{
                    float: left;
                    height: 142px;
                }
                li:not(:nth-last-child(1)){
                    border-right: 1px solid #eeeeee;
                }
                li:nth-child(1){
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
                    .order-p{
                        float: left;
                        text-align: center;
                        margin-left: 45px;
                        span:nth-child(2){
                            margin-left: 30px;
                        }
                    }
                }
                li:nth-child(2){
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
                li:nth-child(3){
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
                        color: #ff8800;
                    }
                }
                li:nth-child(4){
                    width: 154px;
                    font-size: 14px;
                    text-align: center;
                    
                    div:nth-child(1){
                        position: relative;
                        font-size: 14px;
                        color: #666666;
                        margin-top: 37px;
                        cursor: pointer;
                        &:hover{
                            color: #e52e3a;
                            .track-f{
                                display: block;
                            }
                        }
                        &.track-f{
                            position: absolute;
                            top:-16px;
                            right: 47px;
                            width: 180px;
                            background: white;
                            border: 1px solid #eeeeee;
                            z-index: 3;
                            display: none;
                        }
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
                            margin-top: 50%;
                        }
                    }
                    div:nth-child(2){
                        position: relative;
                        color: #666666;
                        margin-top: 10px;
                        cursor: pointer;
                        &:hover{
                            color: #e52e3a;
                            .track-f{
                                display: block;
                            }
                        }
                        &.isagainT{
                            margin-top: 78px;
                        }
                        &.track-f{
                            position: absolute;
                            top:-16px;
                            right: 47px;
                            width: 180px;
                            background: white;
                            border: 1px solid #eeeeee;
                            z-index: 3;
                            display: none;
                        }
                    }
                }
            }
        }
        .order-f{
            position: relative;
            .state{
               float: right;
                em{
                    color:#333333;
                }
            }
            .money{
                margin-left: 50px;
                padding-top: 12px;
                float: left;
                em{
                    color:#333333;
                }
            }
            .details{
                position: absolute;
                top:12px;
                right:20px;
            }
            .order-d{
                li{
                    height: 210px;
                }
                li~li{
                    p:nth-child(1){
                        padding-top: 40px
                    }
                }
            }
            .order-ft{
                background:white;
                margin-top: 16px;
                line-height: 0;
                height: 16px;
                margin-bottom: 30px;
                padding-left: 0;
            }
        }
    }
</style>
