<template>
    <div class="nine">
        <top></top>
        <div class="head-bg" :class="{'shadow':isShadow}">
            <head-part></head-part>
            <navigate></navigate>
        </div>

        <!-- 活动导航  -->
        <div class="activity-nav">
            <div class="an-box">
                <img class="an-img" src="../../static/images/activity/DoubleEleven-2018/nine/img-nav.png" />
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
                    <li>
                        <a href="javascript:void(0);">
                            <p class="ac-date">11月8日</p>
                            <p>法律专场</p>
                        </a>
                    </li>
                    <li class="ac-cur">
                        <a href="javascript:void(0);">
                            <p class="ac-date">11月8-9日</p>
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

        <!-- 热销专区 -->
        <div class="one">
            <h3 class="title">云平台下单可享受满5件打<span>9</span>折、满10件打<span>8.5折</span></h3>
            <ul class=" clearfix one-con">
                <li>
                    <a :href="url + '/27'" target="_blank" ><img src="../../static/images/activity/DoubleEleven-2018/nine/img-one01.png" /> </a>
                </li>
                <li>
                    <a :href="url + '/36'" target="_blank" ><img src="../../static/images/activity/DoubleEleven-2018/nine/img-one02.png" /> </a>
                </li>
                <li>
                    <a :href="url + '/35'" target="_blank"><img src="../../static/images/activity/DoubleEleven-2018/nine/img-one03.png" /> </a>
                </li>
                <li>
                    <a :href="url + '/176'" target="_blank"><img src="../../static/images/activity/DoubleEleven-2018/nine/img-one04.png" /> </a>
                </li>
                <li  @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/nine/img-one05.png" /> </a>
                </li>
                <li  @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/nine/img-one06.png" /> </a>
                </li>
            </ul>
        </div>
        <!-- /热销专区 -->

        <!-- 企业服务专区 -->
        <div class="two">
            <ul class=" clearfix two-con">
                <li  @click="openzxFn">
                    <a href="javascript:void(0);"><img src="../../static/images/activity/DoubleEleven-2018/nine/img-two01.png" /></a>
                </li>
                <li  @click="openzxFn">
                    <a href="javascript:void(0);"><img src="../../static/images/activity/DoubleEleven-2018/nine/img-two02.png" /></a>
                </li>
                <li  @click="openzxFn">
                    <a href="javascript:void(0);"><img src="../../static/images/activity/DoubleEleven-2018/nine/img-two03.png" /></a>
                </li>
                <li  @click="openzxFn">
                    <a href="javascript:void(0);"><img src="../../static/images/activity/DoubleEleven-2018/nine/img-two04.png" /></a>
                </li>
                <li  @click="openzxFn">
                    <a href="javascript:void(0);"><img src="../../static/images/activity/DoubleEleven-2018/nine/img-two05.png" /></a>
                </li>
                <li  @click="openzxFn">
                    <a href="javascript:void(0);"><img src="../../static/images/activity/DoubleEleven-2018/nine/img-two06.png" /></a>
                </li>

            </ul>
        </div>
        <!-- /企业服务专区 -->

        <!-- 行业专区 -->
        <div class="three">
            <ul class="three-con">
                <li class="clearfix">
                    <div class="thc-img">
                        <img  src="../../static/images/activity/DoubleEleven-2018/nine/img-three01.png" />
                    </div>
                    <div class="thc-right">
                        <h3>服装鞋帽行业推荐组合</h3>
                        <p class="thcr-text">90%的行业用户会选择注册5个商标+2个专利</p>
                        <p><a class="three-download" id="1"  href="javascript:void(0);" @click="downloadFn($event)">行业知识产权攻略下载</a></p>
                        <p><a  @click="openzxFn" class="three-btn" href="javascript:void(0);">立即咨询</a></p>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="thc-img">
                        <img  src="../../static/images/activity/DoubleEleven-2018/nine/img-three02.png" />
                    </div>
                    <div class="thc-right">
                        <h3>食品餐饮行业推荐组合</h3>
                        <p class="thcr-text">85%的行业用户会选择注册6个商标+2个专利<br />+1个LOGO设计</p>
                        <p><a class="three-download" id="2"  href="javascript:void(0);" @click="downloadFn($event)">行业知识产权攻略下载</a></p>
                        <p><a @click="openzxFn" class="three-btn" href="javascript:void(0);">立即咨询</a></p>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="thc-img">
                        <img  src="../../static/images/activity/DoubleEleven-2018/nine/img-three03.png" />
                    </div>
                    <div class="thc-right">
                        <h3>文化教育行业推荐组合</h3>
                        <p class="thcr-text">94%的行业用户会选择注册5个商标+5个版权</p>
                        <p><a class="three-download" id="3"  href="javascript:void(0);" @click="downloadFn($event)">行业知识产权攻略下载</a></p>
                        <p><a @click="openzxFn" class="three-btn" href="javascript:void(0);">立即咨询</a></p>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="thc-img">
                        <img  src="../../static/images/activity/DoubleEleven-2018/nine/img-three04.png" />
                    </div>
                    <div class="thc-right">
                        <h3>家居建材行业推荐组合</h3>
                        <p class="thcr-text">88%的行业用户会选择注册6个商标<br />+2个LOGO+1个起名</p>
                        <p><a class="three-download" id="4"   href="javascript:void(0);" @click="downloadFn($event)">行业知识产权攻略下载</a></p>
                        <p><a @click="openzxFn" class="three-btn" href="javascript:void(0);">立即咨询</a></p>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="thc-img">
                        <img  src="../../static/images/activity/DoubleEleven-2018/nine/img-three05.png" />
                    </div>
                    <div class="thc-right">
                        <h3>信息科技行业推荐组合</h3>
                        <p class="thcr-text">93%的行业用户会选择注册5个商标+2个专利<br />+1个贯标+1个高新</p>
                        <p><a class="three-download" id="5" href="javascript:void(0);" @click="downloadFn($event)">行业知识产权攻略下载</a></p>
                        <p><a @click="openzxFn" class="three-btn" href="javascript:void(0);">立即咨询</a></p>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="thc-img">
                        <img  src="../../static/images/activity/DoubleEleven-2018/nine/img-three06.png" />
                    </div>
                    <div class="thc-right">
                        <h3>地产金融行业推荐组合</h3>
                        <p class="thcr-text">91%的行业用户会选择注册2个商标+1个贯标<br />+1个高新</p>
                        <p><a class="three-download" id="6"  href="javascript:void(0);" @click="downloadFn($event)">行业知识产权攻略下载</a></p>
                        <p><a @click="openzxFn" class="three-btn" href="javascript:void(0);">立即咨询</a></p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- /行业专区 -->

        <!-- 服务承诺 -->
        <div class="four">
            <h2 class="four-title">{ 服务承诺 }<br /><span>交给我，您放心！</span></h2>
            <ul class="clearfix four-con">
                <li>
                    <p class="fc-img"><img src="../../static/images/activity/DoubleEleven-2018/nine/img-four01.png" /></p>
                    <p class="fc-text">17年用心服务</p>
                </li>
                <li>
                    <p class="fc-img"><img src="../../static/images/activity/DoubleEleven-2018/nine/img-four02.png" /></p>
                    <p class="fc-text">30万+用户好评</p>
                </li>
                <li>
                    <p class="fc-img"><img src="../../static/images/activity/DoubleEleven-2018/nine/img-four03.png" /></p>
                    <p class="fc-text">全程专属顾问</p>
                </li>
                <li>
                    <p class="fc-img"><img src="../../static/images/activity/DoubleEleven-2018/nine/img-four04.png" /></p>
                    <p class="fc-text">流程节点提醒</p>
                </li>
                <li>
                    <p class="fc-img"><img src="../../static/images/activity/DoubleEleven-2018/nine/img-four05.png" /></p>
                    <p class="fc-text">安心售后无忧</p>
                </li>
            </ul>
        </div>
        <!-- /服务承诺 -->

        <!-- 活动规则 -->
        <div class="rule">
            <div class="rule-con">
                <h2>活动规则</h2>
                <p>1.本页面中的活动价仅限11月8-9日有效。</p>
                <p>2.页面中标注立即咨询的产品，可与专属顾问咨询后下单。</p>
                <p>3.活动解释权归中细软创新科技服务云平台所有。</p>
            </div>
        </div>
        <!-- /活动规则 -->

        <bottom></bottom>
        <foot></foot>
        <fixed-part></fixed-part>
        <!-- 左侧楼层导航 -->
        <div class="floor-nav">
            <ul class="fn-con">
                <li class="fnc-cur"><a href="javascript:void(0);">热销专区</a></li>
                <li><a href="javascript:void(0);">企业服务专区</a></li>
                <li><a href="javascript:void(0);">行业专区</a></li>
                <li><a href="javascript:void(0);">服务承诺</a></li>
                <li><a href="javascript:void(0);">活动规则</a></li>
            </ul>
            <a href="javascript:void(0);" class="fn-top"><img src="../../static/images/activity/DoubleEleven-2018/nine/img-floornav.png" /></a>
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
    import {postFn,setCookie,openzx,openDownloadDialog} from '../../static/js/util.js'
    import {mapActions,mapState} from 'vuex'

    export default {
        name: "double-eleven-2018-9",
        metaInfo () {
            return {
                title: '注册商标今天最划算-2018超级品类日-中细软集团创新科技服务云平台',
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


    downloadFn(e){   //文档下载
                const that = this;
                if(that.isLogin){
                    var tel = that.userInfo.tel;
                    var data = {
                        id:e.currentTarget.id,
                        mobile:tel
                    }
                    postFn('/sundry/down/down', data, function (res) {
                        if (res.data.code == 200) {
                            console.log(res.data.data);
                            // var $eleForm = $("<form method='get'></form>");
                            // $eleForm.attr("action",res.data.data);
                            // $eleForm.attr('target','_blank');
                            // $eleForm.append($("<input type='hidden'></input>"));
                            // $('body').append($eleForm);
                            // //提交表单，实现下载
                            // $eleForm.submit();
                            // $eleForm.remove();

                            // 创建隐藏的可下载链接
                            // var eleLink = document.createElement('a');
                            // eleLink.download = res.data.data;
                            // eleLink.style.display = 'none';
                            // //不转 直接下载cont链接
                            // eleLink.href = res.data.data;
                            // // 触发点击
                            // document.body.appendChild(eleLink);
                            // eleLink.click();
                            // // 然后移除
                            // document.body.removeChild(eleLink);
                            e.target.className = 'down';
                            openDownloadDialog(res.data.data);
                        }
                    })
                }else{
                    that.$router.push('/login?activityBrand=true')
                }
            },

            openzxFn(){
                //打开商务通
                openzx()
            }
        },
        mounted(){

            //左侧楼层点击定位到对应楼层效果
            var Onefloor = $('.one').offset().top,
                Twofloor = $('.two').offset().top,
                Threefloor = $('.three').offset().top,
                Fourfloor = $('.four').offset().top,
                Rulefloor = $('.rule').offset().top,
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
                }else if( $(window).scrollTop() >= Threefloor-100 &&  $(window).scrollTop()<= Fourfloor-200 ){
                    curObj.removeClass('fnc-cur').eq(2).addClass('fnc-cur');
                }else if( $(window).scrollTop() >= Fourfloor-200 &&  $(window).scrollTop()<= Rulefloor-200){
                    curObj.removeClass('fnc-cur').eq(3).addClass('fnc-cur');
                }else if( $(window).scrollTop() >= Rulefloor ){
                    curObj.removeClass('fnc-cur').eq(4).addClass('fnc-cur');
                }

            });
        }
    }
</script>

<style scoped lang="scss">
    /* 活动导航*/
    .activity-nav{ height: 105px; background-color: #a50023; border:solid 2px #a20031;
        .an-box{ width: 1200px; margin: 0 auto;
            .an-img{ margin-top: 10px; float: left;}
            .an-con{ width: 1008px; height: 105px;  float: right; background: url("../../static/images/activity/DoubleEleven-2018/nine/bg-nav.png") no-repeat right 50px;
                li{ float: left; width: 201px; text-align: center; padding-top: 22px;
                    a{ display: block;
                        p{ font-size: 18px; color: #fff;
                            &.ac-date{ height: 25px; line-height: 25px; background: url("../../static/images/activity/DoubleEleven-2018/nine/bg-date01.png") no-repeat center; font-size: 16px; color: #fff; margin-bottom: 20px; }
                        }
                    }
                    &.ac-cur a .ac-date{ background: url("../../static/images/activity/DoubleEleven-2018/nine/bg-date02.png") no-repeat center; color: #a50023;}
                }
            }
        }
    }

    .nine{
        /* banner*/
        .banner{ height: 636px; background: url("../../static/images/activity/DoubleEleven-2018/nine/img-banner.jpg") no-repeat center;}

        /* 热销专区*/
        .one{ height: 1359px; background: url("../../static/images/activity/DoubleEleven-2018/nine/bg-one.jpg") no-repeat center;
            .title{ text-align: center; font-size: 22px; color: #fff6d9; padding-top: 230px;
                span{ color: #fffc01; font-weight: bold; }
            }
            .one-con{ width: 1160px; margin: 0 auto; padding: 100px 0 0 40px;
                li{ float: left; margin: 0 10px 15px 10px;
                    a{ display: block;
                        &:hover{
                            img{ filter: drop-shadow(0 0 2px #f0abbc) drop-shadow(0 0 15px #f0abbc) drop-shadow(0 0 5px #f0abbc); -webkit-filter: drop-shadow(0 0 2px #f0abbc) drop-shadow(0 0 15px #f0abbc) drop-shadow(0 0 5px #f0abbc);}

                        }
                    }
                }
            }
        }

        /* 企业服务专区*/
        .two{ height: 1206px; background: url("../../static/images/activity/DoubleEleven-2018/nine/bg-two.jpg") no-repeat center;
            .two-con{ width: 1160px; margin: 0 auto; padding: 335px 0 0 40px;
                li{  float: left; margin: 0 10px 15px 10px;
                    a{ display: block;
                        &:hover{
                        img{ filter: drop-shadow(0 0 2px #e6b1fe) drop-shadow(0 0 15px #e6b1fe) drop-shadow(0 0 5px #e6b1fe); -webkit-filter: drop-shadow(0 0 2px #e6b1fe) drop-shadow(0 0 15px #e6b1fe) drop-shadow(0 0 5px #e6b1fe);}
                        }
                    }
                }
            }
        }

        /* 行业专区*/
        .three{ height: 1377px; background: url("../../static/images/activity/DoubleEleven-2018/nine/bg-three.jpg") no-repeat center;
            .three-con{ width: 1170px; margin: 0 auto; padding: 370px 0 0 30px;
                li{ width: 536px; height: 258px; background-color: #fff; border: solid 4px #f73e91; border-radius: 20px; float: left; margin: 0 20px 15px 10px;
                    .thc-img{ width: 150px; float: left; text-align: center; padding-top: 70px;}
                    .thc-right{ float: left; padding-top: 30px;
                        h3{ font-size: 30px; color: #333; font-weight: bold; font-family: '汉仪旗黑X1-65W';}
                        .thcr-text{ font-size: 18px; color: #999; height: 72px; padding-top: 8px; line-height: 28px;}
                        .three-download{ display: inline-block; padding-bottom: 10px; text-decoration: underline; font-size: 20px; color: #186acf;
                            &:hover{ color: #f52857; }
                        }
                        .down{ color: #00387e; display: inline-block; padding-bottom: 10px; text-decoration: underline; font-size: 20px;
                            &:hover{ color: #f52857; }
                        }
                        .three-btn{ display: inline-block; width: 178px; height: 43px; line-height: 43px; background: url("../../static/images/activity/DoubleEleven-2018/nine/bg-btn.png") no-repeat center; text-align: center; font-size: 24px; color: #fff; }
                    }
                }
            }
        }

        /* 服务承诺*/
        .four{ height: 575px; background: url("../../static/images/activity/DoubleEleven-2018/nine/bg-four.jpg") no-repeat center;
            .four-title{ text-align: center; font-family: '汉仪旗黑X1-85W'; color: #fff6d9; font-size: 44px; font-weight: bold; padding-top: 116px;
                span{ font-size: 20px; font-weight: normal;}
            }
            .four-con{ margin: 0 auto; width: 1200px; padding-top: 60px;
                li{ width: 213px; float: left; background-color: #fff; border: solid 3px #9e0030; border-radius: 10px; text-align: center; margin-right: 25px; padding-bottom: 20px;
                    .fc-img{ padding: 24px 0;}
                    .fc-text{ color: #333; font-size: 20px; font-family: '汉仪旗黑Y1';}
                    &:last-child{ margin-right: 0;}
                }
            }
        }

        /* 活动规则*/
        .rule{ height: 556px; background: url("../../static/images/activity/DoubleEleven-2018/nine/bg-rule.jpg") no-repeat center;
            .rule-con{ width: 1200px; margin: 0 auto; padding-top: 125px; font-family: '汉仪旗黑Y1';
                h2{ color: #fff6d9;   font-size: 36px; padding: 0 0 50px 50px;}
                p{ color: #f7aeb8; font-size: 22px; padding: 12px 0 12px 50px; }
            }
        }

        /* 左侧楼层导航*/
        .floor-nav{ height:449px; width: 141px; padding-left: 16px;  position: fixed; top: 50%; margin-top: -325px; left: 50%; margin-left:-780px; background: url("../../static/images/activity/DoubleEleven-2018/nine/bg-floornav.png") no-repeat center; text-align: center; z-index: 9;  display: none;
            .fn-con{ padding-top: 100px; width: 126px;
                li{ height: 40px;  margin-bottom: 4px; background-color: #b22bfb;
                    a{ display: block; line-height: 40px; font-size: 18px; color: #fff;}
                    &.fnc-cur,&:hover{ background-color: #c76df8;}
                }
            }
            .fn-top{ display: block; width: 126px;}
        }
        @media screen and (max-width: 1600px) {
            .floor-nav{ left: 0; margin-left: 0;}
        }
    }

</style>