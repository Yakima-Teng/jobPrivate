<template>
    <div class="seven">
        <top></top>
        <div class="head-bg" :class="{'shadow':isShadow}">
            <head-part></head-part>
            <navigate></navigate>
        </div>

        <!-- 活动导航  -->
        <div class="activity-nav">
            <div class="an-box">
                <img class="an-img" src="../../static/images/activity/DoubleEleven-2018/seven/img-nav.png" />
                <ul class="an-con">
                    <li>
                        <a href="javascript:void(0);">
                            <p class="ac-date">11月5日</p>
                            <p>品牌专场</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <p class="ac-date">11月6日</p>
                            <p>交易专场</p>
                        </a>
                    </li>
                    <li class="ac-cur">
                        <a href="javascript:void(0);">
                            <p class="ac-date">11月7日</p>
                            <p>专利专场</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <p class="ac-date">11月8日</p>
                            <p>法律专场</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <p class="ac-date">11月9日</p>
                            <p>商标专场</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- /活动导航 -->

        <!-- banner -->
        <div class="banner"></div>
        <!--/banner -->

        <!-- 明星产品直降 -->
        <div class="one">
            <p class="title"><img src="../../static/images/activity/DoubleEleven-2018/seven/img-onetitle.png" /></p>
            <ul class=" clearfix w1200 one-con">
                <li @click="openzxFn">
                    <a href="javascript:void(0);"  ><img src="../../static/images/activity/DoubleEleven-2018/seven/img-one01.png" /> </a>
                </li>
                <li>
                    <a :href="url + '/126'" target="_blank" ><img src="../../static/images/activity/DoubleEleven-2018/seven/img-one02.png" /> </a>
                </li>
                <li>
                    <a :href="url + '/122'" target="_blank" ><img src="../../static/images/activity/DoubleEleven-2018/seven/img-one03.png" /> </a>
                </li>
            </ul>
        </div>
        <!-- /明星产品直降 -->

        <!-- 基础产品直降 -->
        <div class="w1200 two">
            <p class="two-title"><img src="../../static/images/activity/DoubleEleven-2018/seven/img-twotitle.png" /></p>
            <ul class=" clearfix two-con">
                <li>
                    <a :href="url + '/38'" target="_blank"><img src="../../static/images/activity/DoubleEleven-2018/seven/img-two01.png" /></a>
                </li>
                <li>
                    <a :href="url + '/29'" target="_blank"><img src="../../static/images/activity/DoubleEleven-2018/seven/img-two02.png" /></a>
                </li>
                <li>
                    <a :href="url + '/37'" target="_blank"><img src="../../static/images/activity/DoubleEleven-2018/seven/img-two03.png" /></a>
                </li>
                <li  @click="openzxFn">
                    <a href="javascript:void(0);"><img src="../../static/images/activity/DoubleEleven-2018/seven/img-two04.png" /></a>
                </li>
            </ul>
        </div>
        <!-- /基础产品直降 -->

        <!-- 专利运营服务 -->
        <div class="w1200 three">
            <p class="three-title"><img src="../../static/images/activity/DoubleEleven-2018/seven/img-threetitle.png" /></p>
            <ul class=" clearfix three-con">
                <li @click="openzxFn">
                    <a href="javascript:void(0);"><img src="../../static/images/activity/DoubleEleven-2018/seven/img-three01.png" /></a>
                </li>
                <li  @click="openzxFn">
                    <a href="javascript:void(0);"><img src="../../static/images/activity/DoubleEleven-2018/seven/img-three02.png" /></a>
                </li>
                <li  @click="openzxFn">
                    <a href="javascript:void(0);"><img src="../../static/images/activity/DoubleEleven-2018/seven/img-three03.png" /></a>
                </li>
                <li  @click="openzxFn">
                    <a href="javascript:void(0);"><img src="../../static/images/activity/DoubleEleven-2018/seven/img-three04.png" /></a>
                </li>
            </ul>
        </div>
        <!-- /专利运营服务 -->

        <!-- 服务承诺 -->
        <div class="four">
            <p class="four-title"><img src="../../static/images/activity/DoubleEleven-2018/seven/img-fourtitle.png" /></p>
            <ul class="clearfix four-con">
                <li>
                    <p class="thc-img"><img src="../../static/images/activity/DoubleEleven-2018/seven/img-four01.png" /></p>
                    <p class="thc-text">17年用心服务</p>
                </li>
                <li>
                    <p class="thc-img"><img src="../../static/images/activity/DoubleEleven-2018/seven/img-four02.png" /></p>
                    <p class="thc-text">30万+用户好评</p>
                </li>
                <li>
                    <p class="thc-img"><img src="../../static/images/activity/DoubleEleven-2018/seven/img-four03.png" /></p>
                    <p class="thc-text">全程专属顾问</p>
                </li>
                <li>
                    <p class="thc-img"><img src="../../static/images/activity/DoubleEleven-2018/seven/img-four04.png" /></p>
                    <p class="thc-text">流程节点提醒</p>
                </li>
                <li>
                    <p class="thc-img"><img src="../../static/images/activity/DoubleEleven-2018/seven/img-four05.png" /></p>
                    <p class="thc-text">安心售后无忧</p>
                </li>
            </ul>
        </div>
        <!-- /服务承诺 -->

        <!-- 活动规则 -->
        <div class="w1200 rule">
            <div class="rule-bg"></div>
            <div class="rule-con">
                <h2>活动规则</h2>
                <p>1、本专场产品报价限11月7日当日有效。</p>
                <p>2、页面中标注立即咨询的产品，可与专属顾问咨询后下单。</p>
                <p>3、活动解释权归中细软创新科技服务云平台所有。</p>
            </div>
        </div>
        <!-- /活动规则 -->

        <bottom></bottom>
        <foot></foot>
        <fixed-part></fixed-part>
        <!-- 左侧楼层导航 -->
        <div class="floor-nav">
            <ul class="fn-con">
                <li class="fnc-cur"><a href="javascript:void(0);">明星产品</a></li>
                <li><a href="javascript:void(0);">基础产品</a></li>
                <li><a href="javascript:void(0);">专利运营</a></li>
                <li><a href="javascript:void(0);">服务承诺</a></li>
                <li><a href="javascript:void(0);">活动规则</a></li>
            </ul>
            <a href="javascript:void(0);" class="fn-top"><img src="../../static/images/activity/DoubleEleven-2018/seven/img-floornav.png" /></a>
        </div>
        <!-- /左侧楼层导航 -->

    </div>
</template>

<script>
    import top from '../common/top.vue'
    import headPart from '../common/head.vue'
    import navigate from '../common/nav.vue'
    import bottom from '../common/bottom.vue'
    import foot from '../common/foot.vue'
    import fixedPart from '../index/fixed.vue'
    import {postFn,setCookie,openzx} from '../../static/js/util.js'
    import {mapActions,mapState} from 'vuex'

    export default {
        name: "double-eleven-2018-7",
        metaInfo () {
            return {
                title: '专利申请早发明变成宝-2018超级品类日-中细软集团创新科技服务云平台',
                // meta: [{
                //     name: 'description',
                //     content: '创新科技服务云平台专业提供商标注册,商标查询,专利查询,专利申请,版权登记,工商财税,商标转让,法律,设计等服务,费用透明,流程简单,成功率高!'
                // },{
                //     name: 'keywords',
                //     content: '商标查询,专利查询,商标注册,版权登记-创新科技服务云平台'
                // }]
            }
        },
        data(){
            return{
                isShadow: true,
                url:'http://www.gbicom.com'
            }
        },
        components: {
            top,
            headPart,
            navigate,
            bottom,
            foot,
            fixedPart
        },
        computed:{
            ...mapState(["userInfo","isLogin"]),
        },
        methods: {
            ...mapActions(['update_userInfo', 'update_num', 'update_isLogin']),

            openzxFn(){
                //打开商务通
                openzx()
            }

        },
        mounted(){

            //左侧楼层点击定位到对应楼层效果
            var Onefloor = $('.one').offset().top,
                Twofloor = $('.two').offset().top +400,
                Threefloor = $('.three').offset().top+700,
                Fourfloor = $('.four').offset().top+1000,
                Rulefloor = $('.rule').offset().top+900,
                curObj =$('.floor-nav').find('li');
            curObj.eq(0).on('click',function(){
                $('body,html').animate({
                    scrollTop: Onefloor
                },500);
                return false;
            });
            curObj.eq(1).on('click',function(){
                $('body,html').animate({
                    scrollTop: Twofloor
                },500);
                return false;
            });
            curObj.eq(2).on('click',function(){
                $('body,html').animate({
                    scrollTop: Threefloor
                },500);
                return false;
            });
            curObj.eq(3).on('click',function(){
                $('body,html').animate({
                    scrollTop: Fourfloor
                },500);
                return false;
            });
            curObj.eq(4).on('click',function(){
                $('body,html').animate({
                    scrollTop: Rulefloor
                },500);
                return false;
            });
            $('.floor-nav .fn-top').on('click',function(){
                $('body,html').animate({
                    scrollTop: 0
                },500);
                return false;
            });

            //左侧楼层导航显示隐藏效果
            $(window).scroll(function(){
              if($(window).scrollTop() >= 800){
                  $('.floor-nav').show();
              }else{

                  $('.floor-nav').hide();
              }

                if($(window).scrollTop() > Onefloor && $(window).scrollTop()<Twofloor-100){
                    curObj.removeClass('fnc-cur').eq(0).addClass('fnc-cur');
                }else if($(window).scrollTop() >= Twofloor-100 &&  $(window).scrollTop()<= Threefloor-100 ){
                    curObj.removeClass('fnc-cur').eq(1).addClass('fnc-cur');
                }else if( $(window).scrollTop() >= Threefloor-100 &&  $(window).scrollTop()<= Fourfloor-100){
                    curObj.removeClass('fnc-cur').eq(2).addClass('fnc-cur');
                }else if( $(window).scrollTop() >= Fourfloor-100 &&  $(window).scrollTop()<= Rulefloor-220){
                    curObj.removeClass('fnc-cur').eq(3).addClass('fnc-cur');
                }else if( $(window).scrollTop() >= Rulefloor-220){
                    curObj.removeClass('fnc-cur').eq(4).addClass('fnc-cur');
                }
                console.log($(window).scrollTop() +':'+ Twofloor +':'+ (Threefloor+1500 )+':'+ Rulefloor);
            });
        }
    }
</script>

<style scoped lang="scss">
    .w1200{ width: 1200px; margin: 0 auto;}
    /* 活动导航*/
    .activity-nav{ height: 105px; background-color: #1314b7; border:solid 2px #0b0c8b;
        .an-box{ width: 1200px; margin: 0 auto;
            .an-img{ margin-top: 10px; float: left;}
            .an-con{ width: 1008px; height: 105px;  float: right; background: url("../../static/images/activity/DoubleEleven-2018/seven/bg-nav.png") no-repeat right 50px;
                li{ float: left; width: 201px; text-align: center; padding-top: 22px;
                    a{ display: block;
                        p{ font-size: 18px; color: #fff;
                            &.ac-date{ height: 25px; line-height: 25px; background: url("../../static/images/activity/DoubleEleven-2018/seven/bg-date01.png") no-repeat center; font-size: 16px; color: #fff; margin-bottom: 20px; }
                        }
                    }
                    &.ac-cur a .ac-date{ background: url("../../static/images/activity/DoubleEleven-2018/seven/bg-date02.png") no-repeat center; color: #fff;}
                }
            }
        }
    }

    .seven{ background-color: #d5eaff;
        /* banner*/
        .banner{ height: 769px; background: url("../../static/images/activity/DoubleEleven-2018/seven/img-banner.jpg") no-repeat center;}

        /* 明星产品直降*/
        .one{ padding-top: 100px;
            .title{ text-align: center; }
            .one-con{ padding-top: 50px;
                li{ float: left; margin-right: 20px;
                    a{ display: block;
                        &:hover{
                            img{ filter: drop-shadow(0 0 2px #9acbf7) drop-shadow(0 0 15px #9acbf7) drop-shadow(0 0 5px #9acbf7); -webkit-filter: drop-shadow(0 0 2px #9acbf7) drop-shadow(0 0 15px #9acbf7) drop-shadow(0 0 5px #9acbf7);}

                        }
                    }
                    &:last-child{ margin-right: 0;}
                }
            }
        }

        /* 基础产品直降*/
        .two{ padding-top: 100px;
            .two-title{ text-align: center;}
            .two-con{ padding-top: 60px;
                li{  float: left; margin: 0 19px 20px 0;
                    a{ display: block;}
                    &:nth-child(4n){ margin-right: 0;}
                }
            }
        }

        /* 专利运营服务*/
        .three{ padding-top: 100px;
            .three-title{ text-align: center;}
            .three-con{ padding-top: 60px;
                li{  float: left; margin: 0 19px 20px 0;
                    a{ display: block;}
                    &:nth-child(4n){ margin-right: 0;}
                }
            }
        }

        /* 服务承诺*/
        .four{ padding: 100px 0;
            .four-title{ text-align: center;}
            .four-con{ margin: 0 auto; width: 1200px; padding-top: 60px;
                li{ width: 213px; float: left; background-color: #fff; border: solid 1px #b6edc6; border-radius: 10px; text-align: center; margin-right: 25px; padding-bottom: 20px;
                    .thc-img{ padding: 24px 0;}
                    .thc-text{ color: #333; font-size: 20px; font-family: '汉仪旗黑Y1';}
                    &:last-child{ margin-right: 0;}
                }
            }
        }

        /* 活动规则*/
        .rule{ margin-bottom: 100px; position: relative;
            .rule-bg{ width: 100%; height: 100%; position: absolute; left: 0; top: 0; background-color: #fff; filter: alpha(opacity(42)); opacity: 0.42; z-index: 0;}
            .rule-con{  padding: 40px 0 60px 25px;   font-family: '汉仪旗黑Y1'; position: relative;; z-index: 1;
                h2{ color: #333;   font-size: 26px; padding-bottom: 30px;}
                p{ color: #999; font-size: 16px; padding: 8px 0; }
            }
        }

        /* 左侧楼层导航*/
        .floor-nav{ height:359px; width: 96px; padding-left: 14px;  position: fixed; top: 50%; margin-top: -325px; left: 50%; margin-left:-720px; background: url("../../static/images/activity/DoubleEleven-2018/seven/bg-floornav.png") no-repeat center; text-align: center; z-index: 9; display: none;
            .fn-con{ padding-top: 95px; width: 82px;
                li{  margin-bottom: 4px; background-color: #2f4aef;
                    a{ display: block; line-height: 20px; font-size: 16px; color: #fff; padding: 5px 0;}
                    &.fnc-cur,&:hover{ background-color: #1b31b7;}
                }
            }
            .fn-top{ display: block; width: 84px; margin-top: 10px;}
        }
        @media screen and (max-width: 1600px) {
            .floor-nav{ left: 0; margin-left: 0;}
        }
    }

</style>