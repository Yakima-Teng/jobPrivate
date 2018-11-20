<template>
    <div class="eight" v-if='active==1'> 
        
        <top></top>
        <div class="head-bg" :class="{'shadow':isShadow}">
            <head-part></head-part>
            <navigate></navigate>
        </div>

        <!-- 活动导航  -->
        <div class="activity-nav">
            <div class="an-box">
                <img class="an-img" src="../../static/images/activity/DoubleEleven-2018/eight/img-nav.png" />
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
                    <li>
                        <a href="javascript:void(0);">
                            <p class="ac-date">11月7日</p>
                            <p>专利专场</p>
                        </a>
                    </li>
                    <li class="ac-cur">
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

        <!-- 秒杀专区 -->
        <div class="w1200 one" id="one">
            <div class="one-title"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-onetitle.png" /></div>
            <ul class="clearfix one-con">
                <li>
                    <div class="oc-con">
                        <span class="oc-icon"></span>
                        <p class="oc-img"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-one01.png" /></p>
                        <h3>60分钟律师咨询</h3>
                        <p class="oc-text">仅限前50名抢购</p>
                        <p class="price"><span>￥</span>0.00</p>
                        <p class="oc-btn"><a href="javascript:void(0);" id="1" @click="seckillFn($event)">{{text}}</a></p>
                        <p class="hint"><span>免费咨询使用期限：</span>2018年11月8日-2018年12月31日</p>
                    </div>
                    <div class="geted" v-show="oneGeted"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-onegeted.png" /></div>
                    <div class="sell-out" v-show="oneFinish"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-onesellout.png" /></div>
                </li>
                <li>
                    <div class="oc-con">
                        <span class="oc-icon"></span>
                        <p class="oc-img"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-one02.png" /></p>
                        <h3>合同起草</h3>
                        <p class="oc-text">仅限前50名抢购  限一次服务</p>
                        <p class="price"><span>￥</span>0.00</p>
                        <p class="oc-btn"><a href="javascript:void(0);" id="2" @click="seckillFn($event)">{{text}}</a></p>
                    </div>
                    <div class="geted" v-show="twoGeted"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-onegeted.png" /></div>
                    <div class="sell-out" v-show="twoFinish"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-onesellout.png" /></div>
                </li>
                <li>
                    <div class="oc-con">
                        <span class="oc-icon"></span>
                        <p class="oc-img"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-one03.png" /></p>
                        <h3>律师函</h3>
                        <p class="oc-text">仅限前50名抢购  限一次服务</p>
                        <p class="price"><span>￥</span>0.00</p>
                        <p class="oc-btn"><a href="javascript:void(0);" id="3" @click="seckillFn($event)">{{text}}</a></p>
                    </div>
                    <div class="geted" v-show="threeGeted"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-onegeted.png" /></div>
                    <div class="sell-out" v-show="threeFinish"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-onesellout.png" /></div>
                </li>
            </ul>
        </div>
        <!-- /秒杀专区 -->

        <!-- 企业必备法律服务 -->
        <div class="w1200 two">
            <div class="two-title"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-twotitle.png" /></div>
            <ul class="clearfix two-con">
                <li @click="openzxFn"><a href="javascript:void(0);"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-two01.png" /></a></li>
                <li @click="openzxFn"><a href="javascript:void(0);"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-two02.png" /></a></li>
                <li @click="openzxFn"><a href="javascript:void(0);"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-two03.png" /></a></li>
                <li @click="openzxFn"><a href="javascript:void(0);"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-two04.png" /></a></li>
            </ul>
        </div>
        <!-- /企业必备法律服务 -->

        <!-- 全年无忧法律服务 -->
        <div class="w1200 three">
            <div class="three-title"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-threetitle.png" /></div>
            <ul class="clearfix three-con">
                <li @click="openzxFn"><a href="javascript:void(0);"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-three01.png" /></a></li>
                <li @click="openzxFn"><a href="javascript:void(0);"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-three02.png" /></a></li>
                <li @click="openzxFn"><a href="javascript:void(0);"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-three03.png" /></a></li>
                <li @click="openzxFn"><a href="javascript:void(0);"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-three04.png" /></a></li>
            </ul>
        </div>
        <!-- /全年无忧法律服务 -->

        <!-- 服务承诺 -->
        <div class="w1200 four">
            <h2 class="four-title"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-fourtitle.png" /></h2>
            <ul class="clearfix four-con">
                <li>
                    <p class="fc-img"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-four01.png" /></p>
                    <p class="fc-text">17年用心服务</p>
                </li>
                <li>
                    <p class="fc-img"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-four02.png" /></p>
                    <p class="fc-text">30万+用户好评</p>
                </li>
                <li>
                    <p class="fc-img"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-four03.png" /></p>
                    <p class="fc-text">全程专属顾问</p>
                </li>
                <li>
                    <p class="fc-img"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-four04.png" /></p>
                    <p class="fc-text">流程节点提醒</p>
                </li>
                <li>
                    <p class="fc-img"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-four05.png" /></p>
                    <p class="fc-text">安心售后无忧</p>
                </li>
            </ul>
        </div>
        <!-- /服务承诺 -->

        <!-- 活动规则 -->
        <div class="w1200 rule">
            <div class="rule-bg"></div>
            <div class="rule-con">
                <h2>活动规则</h2>
                <p>1、在本专场购买5000元以上，赠送120分钟律师咨询服务。</p>
                <p>2、本专场产品报价限11月8日当日有效。</p>
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
                <li class="fnc-cur"><a href="javascript:void(0);">秒杀专区</a></li>
                <li><a href="javascript:void(0);">企业必备<br />法律服务</a></li>
                <li><a href="javascript:void(0);">全年无忧<br />法律服务</a></li>
                <li><a href="javascript:void(0);">服务承诺</a></li>
                <li><a href="javascript:void(0);">活动规则</a></li>
            </ul>
            <a href="javascript:void(0);" class="fn-top"><img src="../../static/images/activity/DoubleEleven-2018/eight/img-floornav.png" /></a>
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
    import Api from '../../static/js/api2.js'

    export default {
        name: "double-eleven-2018-8",
        metaInfo () {
            return {
                title: '怕风险找律师-2018超级品类日-中细软集团创新科技服务云平台',
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
                oneFinish:false,
                twoFinish:false,
                threeFinish:false,
                oneGeted:false,
                twoGeted:false,
                threeGeted:false,
                active:0,
                text:'立即秒杀'
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
        created(){
            // this.getActivityTime();
        },
        methods: {
            ...mapActions(['update_userInfo', 'update_num', 'update_isLogin']),
            //获取库存数及是否秒杀
            getActivityTime(){
                Api.getActivityTime().then(res=>{
                    if(res.data.code=200){
                        this.active=res.data.data.four;
                    }
                })
            },
            getRepertory(){
                var that =this;
                var data = null;
                postFn('/sundry/seckill/get_store',data,function(res){
                    console.log(res.data);
                    if(res.data.code==200){

                        var goodsOne = res.data.data[0],
                            goodsTwo = res.data.data[1],
                            goodsThree = res.data.data[2];

                        if(goodsOne.is_buy == 1){
                            that.oneGeted = true;
                            that.oneFinish = false;
                        }else{
                            that.oneGeted = false;
                            if(goodsOne.number == 0){
                                that.oneFinish = true;
                            }else{
                                that.oneFinish = false;
                            }
                        }
                        if(goodsTwo.is_buy == 1){
                            that.twoGeted = true;
                            that.twoFinish = false;
                        }else{
                            that.twoGeted = false;
                            if(goodsTwo.number == 0){
                                that.twoFinish = true;
                            }else{
                                that.twoFinish = false;
                            }
                        }
                        if(goodsThree.is_buy == 1){
                            that.threeGeted = true;
                            that.threeFinish = false;
                        }else{
                            that.threeGeted = false;
                            if(goodsThree.number == 0){
                                that.threeFinish = true;
                            }else{
                                that.threeFinish = false;
                            }
                        }
                        if(goodsOne.type == 0){
                            that.text ='即将开抢'
                        }else{
                            that.text ='立即秒杀'
                        }
                    }else{
                        console.log('发送失败')
                    }
                });
            },

            seckillFn(e){   //秒杀
                const that = this;
                if(that.isLogin){
                   var tel = that.userInfo.tel;
                   var data = {
                       time:2019,
                       goods_id: e.currentTarget.id,
                       mobile:tel
                   }
                   postFn('/sundry/seckill/purchase',data,function(res){
                       if(res.data.code==200){
                           that.getRepertory();
                       }
                   })
                }else{
                    that.$router.push('/login?activityLaw=true')
                }
            },
            openzxFn(){
                //打开商务通
                openzx()
            },
            init(){
                //获取库存数及是否秒杀
                var that = this;
                that.getRepertory();
                //左侧楼层点击定位到对应楼层效果
                var Onefloor = $('.one').offset().top,
                    Twofloor = $('.two').offset().top,
                    Threefloor = $('.three').offset().top + 290,
                    Fourfloor = $('.four').offset().top + 500,
                    Rulefloor = $('.rule').offset().top + 400,
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
                    if($(window).scrollTop() > Onefloor && $(window).scrollTop()<Twofloor){
                        curObj.removeClass('fnc-cur').eq(0).addClass('fnc-cur');
                    }else if($(window).scrollTop() >= Twofloor&&  $(window).scrollTop()<= Threefloor-30 ){
                        curObj.removeClass('fnc-cur').eq(1).addClass('fnc-cur');
                    }else if( $(window).scrollTop() >= Threefloor-30 &&  $(window).scrollTop()<= Fourfloor-30){
                        curObj.removeClass('fnc-cur').eq(2).addClass('fnc-cur');
                    }else if( $(window).scrollTop() >= Fourfloor-30 &&  $(window).scrollTop()<= Rulefloor-200){
                        curObj.removeClass('fnc-cur').eq(3).addClass('fnc-cur');
                    }else if( $(window).scrollTop() >= Rulefloor-200 ){
                        curObj.removeClass('fnc-cur').eq(4).addClass('fnc-cur');
                    }
                });
            }
        },
        updated () {
            this.init();
        },
        mounted(){
            this.getActivityTime()
            // this.init();
            //     //获取库存数及是否秒杀
            //     var that = this;
            //     that.getRepertory();
            //
            //     console.log($('.one').offset(),'.one');
            //     //左侧楼层点击定位到对应楼层效果
            //     var Onefloor = $('.one').offset().top,
            //         Twofloor = $('.two').offset().top,
            //         Threefloor = $('.three').offset().top + 290,
            //         Fourfloor = $('.four').offset().top + 500,
            //         Rulefloor = $('.rule').offset().top + 400,
            //         curObj =$('.floor-nav').find('li');
            //
            //     curObj.eq(0).on('click',function(){
            //         $('body,html').animate({
            //             scrollTop: Onefloor
            //         },500);
            //         return false;
            //     });
            //     curObj.eq(1).on('click',function(){
            //         $('body,html').animate({
            //             scrollTop: Twofloor
            //         },500);
            //         return false;
            //     });
            //     curObj.eq(2).on('click',function(){
            //         $('body,html').animate({
            //             scrollTop: Threefloor
            //         },500);
            //         return false;
            //     });
            //     curObj.eq(3).on('click',function(){
            //         $('body,html').animate({
            //             scrollTop: Fourfloor
            //         },500);
            //         return false;
            //     });
            //     curObj.eq(4).on('click',function(){
            //         $('body,html').animate({
            //             scrollTop: Rulefloor
            //         },500);
            //         return false;
            //     });
            //     $('.floor-nav .fn-top').on('click',function(){
            //         $('body,html').animate({
            //             scrollTop: 0
            //         },500);
            //         return false;
            //     });
            //
            //     //左侧楼层导航显示隐藏效果
            //     $(window).scroll(function(){
            //       if($(window).scrollTop() >= 800){
            //           $('.floor-nav').show();
            //       }else{
            //
            //           $('.floor-nav').hide();
            //       }
            //
            //       if($(window).scrollTop() > Onefloor && $(window).scrollTop()<Twofloor){
            //           curObj.removeClass('fnc-cur').eq(0).addClass('fnc-cur');
            //       }else if($(window).scrollTop() >= Twofloor&&  $(window).scrollTop()<= Threefloor-30 ){
            //           curObj.removeClass('fnc-cur').eq(1).addClass('fnc-cur');
            //       }else if( $(window).scrollTop() >= Threefloor-30 &&  $(window).scrollTop()<= Fourfloor-30){
            //           curObj.removeClass('fnc-cur').eq(2).addClass('fnc-cur');
            //       }else if( $(window).scrollTop() >= Fourfloor-30 &&  $(window).scrollTop()<= Rulefloor-200){
            //           curObj.removeClass('fnc-cur').eq(3).addClass('fnc-cur');
            //       }else if( $(window).scrollTop() >= Rulefloor-200 ){
            //           curObj.removeClass('fnc-cur').eq(4).addClass('fnc-cur');
            //       }
            //     });
         }
    }
</script>

<style scoped lang="scss">

    .w1200{ width: 1200px; margin: 0 auto;}
    /* 活动导航*/
    .activity-nav{ height: 105px; background-color: #00905b; border: solid 2px #007c4e;
        .an-box{ width: 1200px; margin: 0 auto;
            .an-img{ margin-top: 10px; float: left;}
            .an-con{ width: 1008px; height: 105px; float: right; background: url("../../static/images/activity/DoubleEleven-2018/eight/bg-nav.png") no-repeat right 50px;
                li{ float: left; width: 201px; text-align: center; padding-top: 22px;
                    a{ display: block;
                        p{ font-size: 18px; color: #fff;
                            &.ac-date{ height: 25px; line-height: 25px; background: url("../../static/images/activity/DoubleEleven-2018/eight/bg-date01.png") no-repeat center; font-size: 16px; color: #fff; margin-bottom: 20px; }
                        }
                    }
                    &.ac-cur a .ac-date{ background: url("../../static/images/activity/DoubleEleven-2018/eight/bg-date02.png") no-repeat center; color: #096236;}
                }
            }
        }
    }

    .eight{ background-color: #e1f5ed;
        /* banner*/
        .banner{ height: 768px; background: url("../../static/images/activity/DoubleEleven-2018/eight/img-banner.jpg") no-repeat center;}

        /* 秒杀专区*/
        .one{ padding-top: 100px;
            .one-title{ text-align: center;}
            .one-con{ padding-top: 80px;
                li{ float: left;  margin-right: 21px;  position: relative;
                    .oc-con{ position: relative; z-index: 0; width: 378px; height: 427px; background-color: #fff; border: solid 4px #b6edc6; border-radius: 10px; text-align: center;
                        .oc-icon{ width: 87px; height: 72px; position: absolute; right: 10px; top: 10px; background: url("../../static/images/activity/DoubleEleven-2018/eight/icon01.png") no-repeat center; }
                        .oc-img{ padding: 50px 0;}
                        h3{ font-family: '汉仪旗黑X1-65W'; font-size: 28px; color: #333;}
                        .oc-text{ font-family: '汉仪旗黑X1-45W'; color: #999; font-size: 18px; padding: 15px 0 30px 0; }
                        .price{ color: #f14444;  font-size: 26px; font-weight: bold;
                            span{ font-size: 20px; font-weight: normal;}
                        }
                        .oc-btn{ margin-top: 10px;
                            a{ display: inline-block; width: 227px; height: 46px; line-height: 46px;  font-family: '汉仪旗黑X1'; font-size: 26px; color: #fff; background: url("../../static/images/activity/DoubleEleven-2018/eight/bg-btn01.png") no-repeat center; }
                        }
                        .hint{ font-size: 14px; color: #666; margin-top: 25px;
                            span{ color: #999;}
                        }
                    }
                    .geted,.sell-out{ position: absolute; left: 0; top:0; z-index: 1;}
                    &:last-child{ margin-right: 0;}
                    &:hover{ box-shadow: 0 0 40px #87f0c5;}
                }
            }
        }

        /* 企业服务专区*/
        .two{ padding-top: 100px;
            .two-title{ text-align: center;}
            .two-con{ padding-top: 60px;
                li{  float: left; margin-right: 19px;
                    a{ display: block;
                        &:hover{
                            img{ filter: drop-shadow(0 0 2px #b0f2d7) drop-shadow(0 0 15px #b0f2d7) drop-shadow(0 0 5px #b0f2d7); -webkit-filter: drop-shadow(0 0 2px #b0f2d7) drop-shadow(0 0 15px #b0f2d7) drop-shadow(0 0 5px #b0f2d7);}
                        }
                    }
                    &:last-child{ margin-right: 0;}
                }
            }
        }

        /* 全年无忧法律服务*/
        .three{ padding-top: 100px;
            .three-title{ text-align: center;}
            .three-con{ padding-top: 60px;
                li{ float: left; margin-right: 19px;
                    a{ display: block;
                        &:hover{
                            img{ filter: drop-shadow(0 0 2px #b0f2d7) drop-shadow(0 0 15px #b0f2d7) drop-shadow(0 0 5px #b0f2d7); -webkit-filter: drop-shadow(0 0 2px #b0f2d7) drop-shadow(0 0 15px #b0f2d7) drop-shadow(0 0 5px #b0f2d7);}
                        }
                    }
                    &:last-child{ margin-right: 0;}
                }
            }
        }

        /* 服务承诺*/
        .four{ padding: 100px 0;
            .four-title{ text-align: center;
                span{ font-size: 20px; font-weight: normal;}
            }
            .four-con{  padding-top: 60px;
                li{ width: 213px; float: left; background-color: #fff; border: solid 1px #b6edc6; border-radius: 10px; text-align: center; margin-right: 25px; padding-bottom: 20px;
                    .fc-img{ padding: 24px 0;}
                    .fc-text{ color: #333; font-size: 20px; font-family: '汉仪旗黑Y1';}
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
        .floor-nav{ height:449px; width: 96px; padding-left: 14px;  position: fixed; top: 50%; margin-top: -225px; left: 50%; margin-left:-720px; background: url("../../static/images/activity/DoubleEleven-2018/eight/bg-floornav.png") no-repeat center; text-align: center; z-index: 9; display: none;
            .fn-con{ padding-top: 120px; width: 82px;
                li{ margin-bottom: 4px; background-color: #0a8e54; padding: 5px 0;
                    a{ display: block; line-height: 20px; font-size: 16px; color: #fff;}
                    &.fnc-cur,&:hover{ background-color: #065b36;}
                }
            }
            .fn-top{ display: block; width: 84px; margin-top: 10px;}
        }
        @media screen and (max-width: 1600px) {
            .floor-nav{ left: 0; margin-left: 0;}
        }
    }

</style>