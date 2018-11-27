<template>
  <div class="patent-detail">
    <Top></Top>
    <HeadModel></HeadModel>
    <div class="banner" v-if="info">
        <div class="banner-ctt">
            <div class="banner-left">
                <ul>
                    <li><router-link target="_blank" to="/">首页 ></router-link> </li>
                    <li><router-link target="_blank" to="/patent">专利资源 ></router-link> </li>
                    <li><a href="javascript:void(0)">{{info.name}}</a></li>
                </ul>
                <div class="img"><img src="../assets/images/patent/xiangqing.png" alt=""></div>
            </div>
            <div class="banner-right">
                <h3></h3>
                <div class="right-box">
                    <div class="box-title">
                        <div class="title-show pract" v-if="info.type == 106">实用</div>
                        <div class="title-show outward" v-else-if="info.type == 107">外观</div>
                        <div class="title-show invent" v-else>发明</div>
                        <p>{{info.name}}</p>
                    </div>
                    <div class="box-content1">
                        <span>申请号</span>
                        <em>{{info.reg_id}}</em>
                        <a target="_blank" href="http://cpquery.sipo.gov.cn/">去专利局核对信息</a>
                    </div>
                    <div class="box-content2">
                        <span>下证状态</span>
                        <em v-if="info.low.status == 99">未缴费</em>
                        <em v-else>已下证</em>
                    </div>
                    <div class="box-content3">
                        <span>主分类号</span>
                        <em>{{info.low.cat}}</em>
                    </div>
                </div>
                <div class="right-box2">
                    <div class="box2-left">
                        <div class="box2-left-top">
                            <span>价格</span>
                            <i v-if="isLogin">￥{{info.low.price}}</i> 
                            <div v-if="isLogin && info.low.is_kan == 1" class="kanjia"><em>砍</em>该专利卖家接受<a href="javascript:void(0);">砍价</a>，最多可砍<a href="javascript:void(0);">15%</a></div>
                            <p v-if="!isLogin">登录后可见，<router-link target="_blank" :to="'/login?goback=/pDetail/'+info.p_id">立即登录</router-link></p>
                        </div>
                        <div class="box2-left-bottom" v-if="isLogin">
                            <p>该专利有{{info.attrs.length}}个卖家报价，<span>显示所有价格</span></p>
                            <div class="sh">
                                <ul>
                                    <li v-for="(item, index) in info.attrs" :key="index">
                                        <a href="javascript:void(0);">{{item.nick}}</a>
                                        <span v-if="parseFloat(item.price)">￥{{item.price}}</span>
                                        <span v-else>面议</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="box2-right">
                        <a class="btn-atOnce" href="javascript:void(0);" v-if="info.active_attrs_count" @click="openLayer('isAdvisory')">立即咨询</a>
                        <a class="btn-sold" href="javascript:void(0);" v-else>已售</a>
                        <a class="btn-kan" v-if="info.low.is_kan == 1" href="javascript:void(0);" @click="openLayer('isBargain')">砍价<span>最多可砍15%</span></a>
                        <a class="btn-collect" href="javascript:void(0);" v-if="!info.isCollect" @click="careHandle('care')">收藏</a>
                        <a class="btn-collect" href="javascript:void(0);" v-else @click="careHandle('uncare')">已收藏</a>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <!-- content -->
    <div class="content">
        <div class="content-ctt">
            <div class="ctt-left" v-if="info">
                <div class="left-head">
                    <div class="zlxq">
                        <i></i><h3>专利详情</h3>
                    </div>
                    <p class="sqrq">
                        <span>申请日期</span><em>{{info.reg_date_str}}</em>
                    </p>
                    <p class="sqr">
                        <span>申请人</span>
                        <em>{{info.apply_name}}</em>
                    </p>
                    <p class="fmr">
                        <span>发明人</span>
                        <em>{{info.inventor}}</em>
                    </p> 
                    <p class="zlzy">
                        <span>专利摘要</span>
                        <em>{{info.note}}</em>
                    </p>
                </div>
                <div class="left-content">
                    <div class="fwbz">
                        <i></i><h3>服务保障</h3>
                    </div>
                    <div class="box-wrap">
                        <div class="content-box">
                            <img src="../assets/images/patent/fxtx.png" alt="">
                            <h5>放心挑选</h5>
                            <p>挑选合适专利，专业顾问免费提供风险检测，评估、砍价等</p>
                        </div>
                        <div class="content-box">
                            <img src="../assets/images/patent/jybh.png" alt="">
                            <h5>交易保障</h5>
                            <p>签订三方转让协议，转让费用支付到中细软账户，待交易完成买方确认后，放款给卖方</p>
                        </div>
                        <div class="content-box">
                            <img src="../assets/images/patent/sxdb.png" alt="">
                            <h5>手续代办</h5>
                            <p>中细软免费提供所有转让材料收集、整理、提交等手续</p>
                        </div>
                        <div class="content-box">
                            <img src="../assets/images/patent/wysh.png" alt="">
                            <h5>无忧售后</h5>
                            <p>中细软提供所有转让材料收集、整理、提交等准备手续</p>
                        </div>
                    </div>
                </div>
                <div class="left-bottom">
                    <div class="zrcl">
                        <i></i><h3>转让材料须知</h3>
                    </div>
                    <div class="box-tab">
                        <div class="tab1">买卖双方需提供</div>
                        <div class="tab2">平台提供</div>
                        <div class="tab3">转让后买方可获得</div>
                        <div class="tab-left">
                            <div></div>
                            <div>企业</div>
                            <div>个体</div>
                            <div>买方</div>
                            <div>企业营业执照<br>企业组织机构代码证</div>
                            <div>身份证</div>
                            <div>卖方</div>
                            <div>企业营业执照<br>专利证书原件</div>
                            <div>身份证<br>专利证书原件</div>
                        </div>
                        <div class="tab-right">
                            <div>
                                <p>专利代理委托书</p>
                                <p>专利权转让协议</p>
                                <p>办理文件副本请求书</p>
                                <p>发明人变更声明</p>
                            </div>
                            <div>
                                <p>专利证书</p>
                                <p>手续合格通知书</p>
                                <p>专利登记簿副本</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ctt-right" v-if="like">
                <h3>相似专利</h3>
                <router-link tag="a" target="_blank" class="ctt-r-box" v-for="(item, j) in like.list" :key="j" :to="'/pDetail/'+item._source.p_id">
                    <div class="box_left pract" v-if="item._source.type == '106'">实用</div>
                    <div class="box_left outward" v-else-if="item._source.type == '107'">外观</div>
                    <div class="box_left invent" v-else>发明</div>
                    <div class="box_right">
                        <p>{{ item._source.name }}</p>
                        <span>申请号：{{ item._source.reg_id }}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    <!-- link -->
    <div class="link"><a href="javascript:void(0);" @click="contactFun"><img src="../assets/images/patent/link.jpg" alt=""></a></div>
    <FootModel :isLink="footLink"></FootModel>
    <Fixed></Fixed>
    <div class="mask" v-show="isAdvisory || isBargain || isSuc"></div>
    <div class="layer layer-advisory" v-if="info" v-show="isAdvisory">
        <h3>专利咨询</h3>
        <p class="desc">{{info.name}}</p>
        <input type="text" class="mobile" :class="{'error': isMAErr}" name="mobile" v-model="mobileA" placeholder="请输入您的手机号" maxlength="11" @focus="focusHandle('isMAErr')" />
        <a class="btn-submit" href="javascript:void(0)" @click="submitAdvisory">提交</a>
        <a href="javascript:void(0);" class="close" @click="closeLayer('isAdvisory')"></a>
    </div>
    <div class="layer layer-bargain" v-if="info" v-show="isBargain">
        <h3>请输入您期望的价格</h3>
        <p class="desc">{{info.name}}</p>
        <p class="quote">卖家报价<span>20000</span>元</p>
        <input type="text" class="price" :class="{'error': isPBErr}" name="price" v-model="price" placeholder="您期望的价格" @focus="focusHandle('isPBErr')" />
        <input type="text" class="mobile" :class="{'error': isMBErr}" v-model="mobileB" name="mobile" placeholder="请输入您的手机号" maxlength="11" @focus="focusHandle('isMBErr')" />
        <a class="btn-submit" href="javascript:void(0)" @click="submitBargain">提交</a>
        <a href="javascript:void(0);" class="close" @click="closeLayer('isBargain')"></a>
    </div>
    <div class="layer yes-no" v-show="isSuc">
        <div class="suc-img"></div>
        <h3>提交成功</h3>
        <p class="p1">正在为您联系卖家确认专利价格以及专利信息稍后将由您的专利顾问与您联系</p>
        <p class="p2">如有任何问题可联系<a href="javascript:void(0)" @click="contactFun">在线客服</a><br>或拨打400-700-0065咨询</p>
        <a href="javascript:void(0);" class="close" @click="closeLayer('isSuc')"></a> 
    </div>
  </div>
</template>

<script>
import Top from '@/components/top.vue';
import HeadModel from '@/components/header.vue';
import FootModel from '@/components/footer.vue';
import Fixed from '@/components/patent/fixed.vue';

import { GET_PATENT_DETAIL } from '@/components/patent/module'

import cookies from 'js-cookie'

import { api,openzx } from '@/assets/js/util.js'

export default {
  name: 'PatentDetail',
  asyncData({ store, route }){
      return store.dispatch(GET_PATENT_DETAIL, route.params.id);
  },
  metaInfo () {
    var name = '';
    if(this.info){
      name = this.info.name;
    }
    return {
      title: name+'-中细软专利超市',
      meta: [{
          name: 'description',
          content: '中细软专利超市为您提供'+name+'专利信息,'+name+'专利价格,专业顾问为您提供一对一贴心服务,办理专利转让,专利交易就到中细软专利超市.'
      },{
          name: 'keywords',
          content: name+',中细软专利超市'
      }]
    }
  },
  data () {
    return {
      id: '',
      isAdvisory: false,
      isBargain: false,
      isSuc: false,
      mobileA: '',
      isMAErr: false,
      mobileB: '',
      price: '',
      isMBErr: false,
      isPBErr: false,
      token: cookies.get('token'),
      isLogin: cookies.get('token') != undefined && cookies.get('token').length,
      footLink: false
    }
  },
  created(){
    var id = this.$route.params.id;
    this.id = id;
  },
  mounted(){ // 此处数据不会被ssr读取到
    $('.nav .nav_right').find('a').eq(1).addClass('cur');
    // this.$store.dispatch(GET_PATENT_DETAIL, this.id);
  },
  components: {
    Top,
    HeadModel,
    FootModel,
    Fixed
  },
  computed: {
    info(){
        var detail = this.$store.state.patent.detailInfo;
        return detail != null ? detail.detail : null;
    },
    like(){
        var detail = this.$store.state.patent.detailInfo;
        return detail != null ? detail.like : null;
    }
  },
  methods: {
    openLayer: function(type){
        this[type] = true;
    },
    closeLayer: function(type){
        this[type] = false;
    },
    focusHandle: function(type){
        this[type] = false;
    },
    contactFun: function(){
        openzx();
    },
    careHandle: function(type){
        var _this = this;
        var Api = api();
        if(this.token == undefined){
            location.href = '/login?goback='+ this.$route.fullPath;
        }else{
            Api.get('/user/index/care?type=cp&id='+_this.info.p_id+'&action='+type+'&token='+_this.token).then(function(res){
                if(res.data.code == 200){
                    _this.$store.dispatch(GET_PATENT_DETAIL, _this.id);
                }
            });
        }
        
    },
    submitAdvisory: function(){
        var Api = api();
        var _this = this;
        var reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g;
        if(!reg.test(this.mobileA)){
            this.isMAErr = true;
            this.mobileA = '';
        }else{
            this.isMAErr = false;
            var data = {
                'reg_id': _this.info.reg_id,
                'name': _this.info.name,
                'mobile': _this.mobileA
            }
            Api.post('/patent/ask',data).then(function(res){
                if(res.data.code == 200){
                    _this.mobileA = '';
                    _this.isAdvisory = false;
                    _this.isSuc = true;
                }
            });
        }
    },
    submitBargain: function(){ // 
        var Api = api();
        var _this = this;
        var reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g;
        if(!reg.test(this.mobileA)){
            this.isMAErr = true;
            this.mobileA = '';
        }else{
            this.isMAErr = false;
            var data = {
                'reg_id': _this.info.reg_id,
                'name': _this.info.name,
                'mobile': _this.mobileB,
                'price': _this.price
            }
            Api.post('/patent/ask',data).then(function(res){
                if(res.data.code == 200){
                    _this.mobileB = '';
                     _this.price = '';
                    _this.isAdvisory = false;
                    _this.isSuc = true;
                }
            });
        }
    }
  }
}
</script>

<style lang="scss" scoped>
$main: #333;
$red: #cc0000;
$border01: #ccc;
$border02: #ddd;
input.error{ border-color: $red !important;}
input.error::-webkit-input-placeholder {
    color: $red;
}
input.error::-moz-placeholder {
    color: $red;
}
input.error:-ms-input-placeholder {
    color: $red;
}
.patent-detail{
    .banner{width: 100%;height: 340px;background-color: #f2f3f4; margin: 0 auto; padding-bottom: 20px;
        .banner-ctt{width: 1190px;margin: 0 auto;
            .banner-left{float: left; width: 320px;
                ul{width: 320px;overflow: hidden;font-size: 12px;color: lighten($main, 20%);}
                li{float: left;line-height: 60px;
                    a{ color:$main;}
                }
                .img{clear: both; width: 320px;height: 220px;background-color: #fff;box-sizing: border-box;padding: 35px 85px;
                    img{width: 150px;height: 150px;}
                }
            }
            .banner-right{float: left;width: 850px;margin-left: 20px;
                h3{float: right; font-size: 12px;color: lighten($main, 20%);padding-left: 26px;height: 60px;}
                .right-box{width: 100%;overflow: hidden;
                    .box-title{width: 100%;overflow: hidden;
                        .title-show{float: left;width: 50px;height: 30px;color: #fff;text-align: center;line-height: 30px;border-radius: 5px;
                            &.pract{ background-color:#80cccc; }
                            &.outward{background-color: #99cce6;}
                            &.invent{background-color: #f0b3b3;}
                        }
                        p{float: left; font-size: 20px;color: $main;margin-left: 10px;}
                    }
                    .box-content1,.box-content2,.box-content3{width: 100%;clear: both;font-size: 12px;color: lighten($main, 20%);margin-top: 20px;
                        span{float: left;width: 70px;height: 30px; text-align: right;line-height: 30px;margin-right: 30px;}
                    }
                    .box-content1{
                        em{float: left;width: 130px;height: 30px; line-height: 30px;}
                        a{float: left;width: 133px;height: 30px;line-height: 30px;text-align: center;font-size: 14px;color: lighten($main, 20%);background-color: #fff;box-sizing: border-box;border-radius: 5px;border: 1px solid $border01;}
                    }
                    .box-content2{margin-top: 0px;
                        .wenhao{float: left;width: 14px;height: 14px;border-radius: 50%; background:url("../assets/images/patent/wenhao.png")no-repeat 4px 3px $border01;margin-top: 9px; }
                    }
                    .box-content2 em,.box-content3 em{float: left;line-height: 30px;margin-right: 10px;}
                }
                .right-box2{width: 840px;clear: both;border-top: 1px dashed $border02;margin-left: 6px;margin-top: 10px;
                    .box2-left{float: left;
                        .box2-left-top{margin-top: 26px;width: 100%;overflow: hidden;
                            span{float: left;width: 60px;height: 30px;line-height: 30px;text-align: right;margin-right: 30px;font-size: 14px;color: lighten($main, 20%);}
                            i{float: left; font-style: normal;color: $red;font-size:18px;line-height: 30px;margin-right: 10px;}
                            .kanjia{float: left;width: 244px;height: 30px;box-sizing: border-box;border: 1px solid #c2e1e2;background-color: #e7efef;border-radius: 5px;line-height: 30px;font-size: 12px; color: lighten($main, 20%);
                                em{float: left; width: 20px;height: 20px;margin-left: 9px;margin-top: 5px;border-radius: 100%;color: #fff;text-align:center;line-height: 20px;background-color: #009999;font-size: 10px;margin-right: 10px;}
                                a{color: #189aa2;}
                            }
                            p{ float: left; font-size: 14px; line-height: 30px; color: #cc0000;
                                a{ color: inherit;}
                            }
                        }
                        .box2-left-bottom{position: relative; clear: both; margin-top: 15px;width: 200px;height: 40px;box-sizing: border-box;border-top: 1px dashed $border02;
                            p{text-align: center;line-height: 40px;font-size: 12px;color: lighten($main,40%);
                                span{color: lighten($main, 20%);}
                            }
                            .sh{display: none; position: absolute;left: 0;top: 40px; width: 200px;background-color: #fff;border-radius: 5px;box-shadow: 0px 0px 10px #e2e3e4;
                                ul{box-sizing: border-box; width: 100%;padding-left: 10px;padding-top: 15px;}
                                li{width: 100%;overflow: hidden;
                                    a{float: left;width: 50px;height: 20px;font-size:12px;text-align: center;line-height: 20px;color: #fff;border-radius: 5px;background-color: $border01;margin-bottom: 10px;}
                                    span{float: left;color: $red;font-size: 14px;line-height:20px;margin-left: 10px;}
                                }
                            }
                            &:hover div{display: block;}
                        }
                    }
                    .box2-right{float: right;margin-top: 20px;
                        a.btn-atOnce, a.btn-kan{float: left; width: 140px;height: 40px;background-color: $red;text-align: center;line-height: 40px;color: #fff;font-size: 14px;border-radius: 5px;margin-right: 10px;}
                        a.btn-kan{position: relative; background-color: #009999;
                            span{display: none; position: absolute;left: 0;top: 40px; width: 140px;height: 30px;background-color: #e7efef;text-align: center;line-height: 30px;color: #009999;font-size: 12px;}
                            &:hover span{display: block;}
                        }
                        a.btn-collect{float: left; height: 40px;box-sizing: border-box;line-height: 40px;padding-left: 36px;font-size: 14px;color: lighten($main,40%);border-radius: 5px;background: url("../assets/images/patent/shoucang.png") no-repeat 13px 13px #fff; padding-right: 10px;}
                        a.btn-sold{background-color: #999999;}
                    }
                }
            }
        }
    }
    /* content */
    .content{width: 100%;margin: 0 auto;clear: both;padding-bottom:50px;overflow: hidden; background-color: #fff;}
    .content .content-ctt{width: 1190px;margin: 0 auto;}
    .content .content-ctt .ctt-left{float: left;width: 780px;margin-top: 20px;}
    .ctt-left .left-head{width: 100%;}
    .left-head .zlxq{width: 100%;height: 50px;}
    .left-head .zlxq i{float: left; width: 3px;height: 20px;background-color: $red;margin-right: 10px;margin-top: 15px;}
    .left-head .zlxq h3{float: left; font-size: 18px;color: $main;line-height: 50px;}
    .left-head .sqrq,.left-head .sqr,.left-head .fmr,.left-head .zlzy{clear: both; font-size: 14px;overflow: hidden;}
    .left-head .sqrq{margin-top: 10px;}
    .left-head .sqrq span,.left-head .sqr span,.left-head .fmr span,.left-head .zlzy span{float: left;width: 57px; line-height: 24px; color: $main;text-align: right;}
    .left-head .sqrq em,.left-head .sqr em,.left-head .fmr em,.left-head .zlzy em{float: left; color: lighten($main, 20%);margin-left: 33px;width: 680px;line-height: 24px;}
    .left-head .sqr,.left-head .fmr,.left-head .zlzy{margin-top: 30px;}
    .ctt-left .left-content{width: 100%;}
    .left-content .fwbz{width: 100%;margin-top: 40px;overflow: hidden;}
    .left-content .fwbz i{float: left; width: 3px;height: 20px;background-color: $red;margin-right: 10px;margin-top: 15px;}
    .left-content .fwbz h3{float: left; font-size: 18px;color: $main;line-height: 50px;}
    .left-content .box-wrap{width: 100%;overflow: hidden;}
    .box-wrap .content-box{float: left;width: 150px;margin-right: 60px;margin-top: 37px;}
    .box-wrap .content-box:nth-last-of-type(1){margin-right: 0px;}
    .box-wrap .content-box:nth-of-type(1) img{width: 50px;height: 40px;margin-left: 50px;}
    .box-wrap .content-box:nth-of-type(2) img{width: 40px;height: 44px;margin-left: 55px;}
    .box-wrap .content-box:nth-of-type(3) img{width: 50px;height: 43px;margin-left: 50px;}
    .box-wrap .content-box:nth-of-type(4) img{width: 48px;height: 48px;margin-left: 50px;}
    .box-wrap .content-box h5{font-size: 14px;color: $red;width: 100%;line-height: 30px;text-align: center;margin-top: 10px;}
    .box-wrap .content-box p{width: 100%;font-size: 14px;color: lighten($main, 20%);line-height: 24px;}
    .ctt-left .left-bottom{width: 100%;margin-top: 40px;}
    .left-bottom .zrcl{width: 100%;clear: both;overflow: hidden;}
    .left-bottom .zrcl i{float: left; width: 3px;height: 20px;background-color: $red;margin-right: 10px;margin-top: 15px;}
    .left-bottom .zrcl h3{float: left; font-size: 18px;color: $main;line-height: 50px;}
    .left-bottom .box-tab{margin-top: 10px;width: 780px;height: 220px;border: 1px solid $border02;font-size: 14px;}
    .left-bottom .box-tab .tab1,.left-bottom .box-tab .tab2,.left-bottom .box-tab .tab3{float: left; width: 380px;height: 40px;box-sizing: border-box;border-bottom: 1px solid $border02;text-align: center;line-height:40px;color: $main;background-color: #f2f3f4;}
    .left-bottom .box-tab .tab2,.left-bottom .box-tab .tab3{width: 200px;}
    .left-bottom .box-tab .tab-left{float: left;box-sizing: border-box;width: 380px;overflow: hidden;}
    .box-tab .tab-left div:nth-child(1){float: left;width: 80px;height: 40px;box-sizing: border-box;border-right: 1px solid $border02;border-bottom: 1px solid $border02;}
    .box-tab .tab-left div:nth-child(2),.box-tab .tab-left div:nth-child(3){float: left;box-sizing: border-box;width: 150px;height: 40px;text-align: center;line-height: 40px;color: lighten($main, 20%);border-right: 1px solid $border02;border-bottom: 1px solid $border02;}
    .box-tab .tab-left div:nth-child(4),.box-tab .tab-left div:nth-child(7){float: left; width: 80px;height: 70px;box-sizing: border-box;text-align: center;line-height: 70px;color: $main;border-right: 1px solid $border02;border-bottom: 1px solid $border02;}
    .box-tab .tab-left div:nth-child(5),.box-tab .tab-left div:nth-child(6),.box-tab .tab-left div:nth-child(8),.box-tab .tab-left div:nth-child(9){float: left;box-sizing: border-box;width: 150px;line-height: 20px;height: 70px;text-align: center;color:lighten($main, 20%);border-right: 1px solid $border02;border-bottom: 1px solid $border02;padding-top: 20px;}
    .box-tab .tab-left div:nth-child(6){line-height: 70px;padding-top: 0px;}
    .box-tab .tab-right{float: right;width: 400px;overflow: hidden;}
    .box-tab .tab-left div:nth-child(7),.box-tab .tab-left div:nth-child(8),.box-tab .tab-left div:nth-child(9){border-bottom: none;}
    .box-tab .tab-right div:nth-child(1),.box-tab .tab-right div:nth-child(2){float: left; width: 200px;height: 180px;text-align: center;box-sizing: border-box;border-right: 1px solid $border02;color: lighten($main, 20%);padding-top: 55px;
        p{line-height:20px;}
    }
    .box-tab .tab-right div:nth-child(2){border-right: none;}
    .content-ctt .ctt-right{float: right;width: 370px;height: 470px;box-sizing: border-box; box-shadow: 0px 0px 10px $border01;margin-top: 70px;border-radius: 5px;overflow: hidden;padding-top: 20px;padding-left: 20px;}
    .content-ctt .ctt-right h3{font-size: 14px;color: $main;line-height: 30px;font-weight: bold;}
    .ctt-right .ctt-r-box{display: block;width: 330px;box-sizing: border-box; margin-top: 20px;background-color: #fff;overflow: hidden;}
    .ctt-right .ctt-r-box .box_left{float: left;width: 50px;height: 30px;text-align: center;line-height: 30px;color: #fff;font-size:14px;border-radius: 5px; 
        &.pract{ background-color:#80cccc; }
        &.outward{background-color: #99cce6;}
        &.invent{background-color: #f0b3b3;}
    }
    .ctt-right .ctt-r-box:nth-last-child(1){margin-bottom: 0px;}
    .ctt-right .ctt-r-box:nth-last-child(2){margin-top: 30px;}
    .ctt-right .ctt-r-box .box_right{float: left;margin-left: 10px;font-size: 14px;}
    .ctt-right .ctt-r-box .box_right p{color: $main;width: 260px; line-height: 20px;margin-bottom: 10px;}
    .ctt-right .ctt-r-box .box_right span{color: lighten($main,40%);}
    /* link */
    .link{width: 100%;height: 140px; margin:0 auto;clear: both;}
    .link a img{width: 100%;height: 140px;}

    .layer{
        position: fixed;
        top: 50%;
        left: 50%;
        background-color: #fff;
        transform: translate(-50%, -50%);
        border: 1px solid #d7d7d7;
        border-radius: 5px;
        box-shadow: 0px 0px 10px #d7d7d7;
        padding: 20px 20px 50px;
        box-sizing: border-box;
        z-index: 9;
        h3{ font-size: 18px; line-height: 30px; color: #333;}
        p{ margin: auto; width: 340px; font-size: 14px; line-height: 20px; text-align: center; color: #333;
            &.desc{ margin-top: 30px;}
            &.quote{ margin-top: 10px; line-height: 20px; color: #999;
                span{ color: #cc0000;}
            }
        }
        input[type=text]{
            display:block;
            margin: auto;
            width: 260px; 
            height: 40px; 
            font-size: 14px; 
            padding-left: 10px;
            border: 1px solid #ddd; 
            border-radius: 5px;
            box-sizing: border-box;
        }
        .btn-submit{
            display:block;
            margin: 20px auto 0;
            width: 260px;
            height: 40px;
            font-size: 14px;
            line-height: 40px;
            background-color: #cc0000;
            color: #fff;
            text-align: center;
        }
        .close {
            position: absolute;
            right: 20px;
            top: 20px;
            width: 16px;
            height: 16px;
            background: url(../assets/images/close.png) no-repeat 0 0;
            background-size: 16px 16px;
        }
        &.layer-advisory{
            width: 420px;
            .mobile{ margin-top: 20px;}
        }
        &.layer-bargain{
            width: 420px;
            .price{ margin-top: 20px;}
            .mobile{ margin-top: 10px;}
        }
        &.yes-no{width: 360px;
            .suc-img{ margin: 10px auto 0; width: 50px; height: 50px; background: url(../assets/images/suc.png) no-repeat 0 0 #cccccc; border-radius: 50%;}
            h3{text-align: center;margin-top: 20px;}
            p{ color: #666;text-align: center; width: 280px; margin: 10px auto 0;
                &.p1{ padding-bottom: 10px; border-bottom: 1px solid #ddd;}
                &.p2{ font-size: 12px;
                    a{ color: #cc0000;}
                }
            }
        }
    }
}
</style>
