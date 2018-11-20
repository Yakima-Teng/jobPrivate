<template>
    <div class="six">
        <top></top>
        <div class="head-bg" :class="{'shadow':isShadow}">
            <head-part></head-part>
            <navigate></navigate>
        </div>

        <!-- 活动导航  -->
        <div class="activity-nav">
            <div class="an-box">
                <img class="an-img" src="../../static/images/activity/DoubleEleven-2018/six/img-nav.png" />
                <ul class="an-con">
                    <li>
                        <a href="javascript:void(0);">
                            <p class="ac-date">11月5日</p>
                            <p>品牌专场</p>
                        </a>
                    </li>
                    <li class="ac-cur">
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

        <!-- 商标明码标价区 -->
        <div class="w1200 one">
            <p class="title"><img src="../../static/images/activity/DoubleEleven-2018/six/img-onetitle.png" /></p>
            <ul class="clearfix one-tab">
                <li class="ot-cur"><p class="ot-bg"></p><p class="ot-text">服装鞋帽（25类）</p><em class="line"></em></li>
                <li><p class="ot-bg"></p><p class="ot-text">日化用品（03类）</p><em class="line"></em></li>
                <li><p class="ot-bg"></p><p class="ot-text">餐饮住宿（43类）</p><em class="line"></em></li>
                <li><p class="ot-bg"></p><p class="ot-text">酒类（33类）</p><em class="line"></em></li>
                <li><p class="ot-bg"></p><p class="ot-text">方便食品（30类）</p></li>
            </ul>
            <ul class=" clearfix one-con" style="display: block;">
                <li @click="openzxFn">
                    <a href="javascript:void(0);"  ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one01.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one02.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one03.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one04.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one05.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one06.png" /> </a>
                </li>
            </ul>
            <ul class=" clearfix one-con">
                <li @click="openzxFn">
                    <a href="javascript:void(0);"  ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one07.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one08.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one09.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one10.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one11.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one12.png" /> </a>
                </li>
            </ul>
            <ul class=" clearfix one-con">
                <li @click="openzxFn">
                    <a href="javascript:void(0);"  ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one13.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one14.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one15.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one16.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one17.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one18.png" /> </a>
                </li>
            </ul>
            <ul class=" clearfix one-con">
                <li @click="openzxFn">
                    <a href="javascript:void(0);"  ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one19.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one20.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one21.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one22.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one23.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one24.png" /> </a>
                </li>
            </ul>
            <ul class=" clearfix one-con">
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one25.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one26.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one27.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one28.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one29.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-one30.png" /> </a>
                </li>
            </ul>
        </div>
        <!-- /商标明码标价区 -->

        <!-- 精品商标区 -->
        <div class="w1200 two">
            <p class="two-title"><img src="../../static/images/activity/DoubleEleven-2018/six/img-twotitle.png" /></p>
            <ul class="clearfix two-tab">
                <li class="tt-cur"><p class="tt-bg"></p><p class="tt-text">服装鞋帽（25类）</p><em class="line"></em></li>
                <li><p class="tt-bg"></p><p class="tt-text">日化用品（03类）</p><em class="line"></em></li>
                <li><p class="tt-bg"></p><p class="tt-text">餐饮住宿（43类）</p><em class="line"></em></li>
                <li><p class="tt-bg"></p><p class="tt-text">酒类（33类）</p><em class="line"></em></li>
                <li><p class="tt-bg"></p><p class="tt-text">方便食品（30类）</p></li>
            </ul>
            <ul class=" clearfix two-con" style="display: block;">
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two01.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two02.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two03.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two04.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two05.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two06.png" /> </a>
                </li>
            </ul>
            <ul class=" clearfix two-con">
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two07.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two08.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two09.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two10.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two11.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two12.png" /> </a>
                </li>
            </ul>
            <ul class=" clearfix two-con">
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two13.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two14.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two15.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two16.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two17.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two18.png" /> </a>
                </li>
            </ul>
            <ul class=" clearfix two-con">
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two19.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two20.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two21.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two22.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two23.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two24.png" /> </a>
                </li>
            </ul>
            <ul class=" clearfix two-con">
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two25.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two26.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two27.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two28.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two29.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-two30.png" /> </a>
                </li>
            </ul>
        </div>
        <!-- /精品商标区 -->

        <!-- 专利交易区 -->
        <div class="w1200 three">
            <p class="three-title"><img src="../../static/images/activity/DoubleEleven-2018/six/img-threetitle.png" /></p>
            <ul class="clearfix three-tab">
                <li class="tht-cur"><p class="tht-bg"></p><p class="tht-text">医药类</p><em class="line"></em></li>
                <li><p class="tht-bg"></p><p class="tht-text">环保类</p><em class="line"></em></li>
                <li><p class="tht-bg"></p><p class="tht-text">工程类</p></li>
            </ul>
            <ul class=" clearfix three-con" style="display: block;">
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-three01.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-three02.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-three03.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-three04.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-three05.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-three06.png" /> </a>
                </li>
            </ul>
            <ul class=" clearfix three-con">
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-three07.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-three08.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-three09.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-three10.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-three11.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-three12.png" /> </a>
                </li>
            </ul>
            <ul class=" clearfix three-con">
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-three13.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-three14.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-three15.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-three16.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-three17.png" /> </a>
                </li>
                <li @click="openzxFn">
                    <a href="javascript:void(0);" ><img src="../../static/images/activity/DoubleEleven-2018/six/img-three18.png" /> </a>
                </li>
            </ul>
        </div>
        <!-- /专利交易区 -->

        <!-- 服务承诺 -->
        <div class="four">
            <p class="four-title"><img src="../../static/images/activity/DoubleEleven-2018/six/img-fourtitle.png" /></p>
            <ul class="clearfix four-con">
                <li>
                    <p class="thc-img"><img src="../../static/images/activity/DoubleEleven-2018/six/img-four01.png" /></p>
                    <p class="thc-text">17年用心服务</p>
                </li>
                <li>
                    <p class="thc-img"><img src="../../static/images/activity/DoubleEleven-2018/six/img-four02.png" /></p>
                    <p class="thc-text">30万+用户好评</p>
                </li>
                <li>
                    <p class="thc-img"><img src="../../static/images/activity/DoubleEleven-2018/six/img-four03.png" /></p>
                    <p class="thc-text">全程专属顾问</p>
                </li>
                <li>
                    <p class="thc-img"><img src="../../static/images/activity/DoubleEleven-2018/six/img-four04.png" /></p>
                    <p class="thc-text">流程节点提醒</p>
                </li>
                <li>
                    <p class="thc-img"><img src="../../static/images/activity/DoubleEleven-2018/six/img-four05.png" /></p>
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
                <p>1、本页中的商标及专利均为低价出售，活动价截止11月6日23:59前有效。</p>
                <p>2、精选商标及专利的库存情况随时可能变化，请与专属顾问确认后再下单。</p>
                <p>3、活动解释权归中细软创新科技服务云平台。</p>
            </div>
        </div>
        <!-- /活动规则 -->

        <bottom></bottom>
        <foot></foot>
        <fixed-part></fixed-part>
        <!-- 左侧楼层导航 -->
        <div class="floor-nav">
            <ul class="fn-con">
                <li class="fnc-cur"><a href="javascript:void(0);">商标明码<br />标价区</a></li>
                <li><a href="javascript:void(0);">精品<br />商标区</a></li>
                <li><a href="javascript:void(0);">专利<br />交易区</a></li>
                <li><a href="javascript:void(0);">服务承诺</a></li>
                <li><a href="javascript:void(0);">活动规则</a></li>
            </ul>
            <a href="javascript:void(0);" class="fn-top"><img src="../../static/images/activity/DoubleEleven-2018/six/img-floornav.png" /></a>
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
        name: "double-eleven-2018-6",
        metaInfo () {
            return {
                title: '商标专利不用等一天全搞定-2018超级品类日-中细软集团创新科技服务云平台',
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

            //tab效果筛选  obj事件对象,oEvent事件,oCon展开窗口,className-css名
            function fnTabCon(obj,oEvent,oCon,className){
                $(obj).on(oEvent,function(){
                    var index = $(this).index();
                    $(this).addClass(className).siblings().removeClass(className);
                    $(oCon).hide();
                    $(oCon).eq(index).show();
                });
            }
            fnTabCon('.one-tab li','mouseover','.one-con','ot-cur');
            fnTabCon('.two-tab li','mouseover','.two-con','tt-cur');
            fnTabCon('.three-tab li','mouseover','.three-con','tht-cur');


            //左侧楼层点击定位到对应楼层效果
            var Onefloor = $('.one').offset().top,
                Twofloor = $('.two').offset().top +300,
                Threefloor = $('.three').offset().top+550,
                Fourfloor = $('.four').offset().top+800,
                Rulefloor = $('.rule').offset().top+800,
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
    .activity-nav{ height: 105px; background-color: #7700cb; border:solid 2px #6700af;
        .an-box{ width: 1200px; margin: 0 auto;
            .an-img{ margin-top: 10px; float: left;}
            .an-con{ width: 1008px; height: 105px;  float: right; background: url("../../static/images/activity/DoubleEleven-2018/six/bg-nav.png") no-repeat right 50px;
                li{ float: left; width: 201px; text-align: center; padding-top: 22px;
                    a{ display: block;
                        p{ font-size: 18px; color: #fff;
                            &.ac-date{ height: 25px; line-height: 25px; background: url("../../static/images/activity/DoubleEleven-2018/six/bg-date01.png") no-repeat center; font-size: 16px; color: #fff; margin-bottom: 20px; }
                        }
                    }
                    &.ac-cur a .ac-date{ background: url("../../static/images/activity/DoubleEleven-2018/six/bg-date02.png") no-repeat center; color: #fff;}
                }
            }
        }
    }

    .six{ background-color: #fcf3ff;
        /* banner*/
        .banner{ height: 592px; background: url("../../static/images/activity/DoubleEleven-2018/six/img-banner.jpg") no-repeat center;}

        /* 商标明码标价区*/
        .one{ padding-top: 100px;
            .title{ text-align: center; }
            .one-tab{ height: 56px; background-color: #ededed; margin-top: 60px;
                li{ float: left; width: 240px; line-height: 56px; position: relative;z-index: 0; text-align: center; cursor: pointer;
                    .ot-text{ position: relative; z-index: 2; font-size: 20px; color: #999; line-height: 56px;}
                    .ot-bg{ width: 240px; height: 62px; background: url("../../static/images/activity/DoubleEleven-2018/six/bg-tabcur.png") no-repeat center; left: 0; top: 0; z-index: 1; position: absolute; display: none;}
                    .line{ width: 1px; height: 40px; background-color: #d2d2d2; display: inline-block; position: absolute; right: 0; top: 8px; z-index: 0;}
                    &.ot-cur,&:hover{
                        .ot-text{ color: #fff;}
                        .ot-bg{ display: block;}
                    }
                }
            }
            .one-con{ padding: 50px 0 50px 18px; background-color: #fff; display: none;
                li{ float: left; margin-right: 13px;
                    a{ display: block;}
                    &:last-child{ margin-right: 0;}
                }
            }
        }

        /* 精品商标区*/
        .two{ padding-top: 100px;
            .two-title{ text-align: center;}
            .two-tab{ height: 56px; background-color: #ededed; margin-top: 60px;
                li{ float: left; width: 240px; line-height: 56px; position: relative;z-index: 0; text-align: center; cursor: pointer;
                    .tt-text{ position: relative; z-index: 2; font-size: 20px; color: #999; line-height: 56px;}
                    .tt-bg{ width: 240px; height: 62px; background: url("../../static/images/activity/DoubleEleven-2018/six/bg-tabcur.png") no-repeat center; left: 0; top: 0; z-index: 1; position: absolute; display: none;}
                    .line{ width: 1px; height: 40px; background-color: #d2d2d2; display: inline-block; position: absolute; right: 0; top: 8px; z-index: 0;}
                    &.tt-cur,&:hover{
                        .tt-text{ color: #fff;}
                        .tt-bg{ display: block;}
                    }
                }
            }
            .two-con{ padding: 50px 0 50px 18px; background-color: #fff; display: none;
                li{  float: left; margin-right: 13px;
                    a{ display: block;}
                    &:last-child{ margin-right: 0;}
                }
            }
        }

        /* 专利交易区*/
        .three{ padding-top: 100px;
            .three-title{ text-align: center;}
            .three-tab{ height: 56px; background-color: #ededed; margin-top: 60px;
                li{ float: left; width: 400px; line-height: 56px; position: relative;z-index: 0; text-align: center; cursor: pointer;
                    .tht-text{ position: relative; z-index: 2; font-size: 20px; color: #999; line-height: 56px;}
                    .tht-bg{ width: 400px; height: 62px; background: url("../../static/images/activity/DoubleEleven-2018/six/bg-tabcur.png") no-repeat center; left: 0; top: 0; z-index: 1; position: absolute; display: none;}
                    .line{ width: 1px; height: 40px; background-color: #d2d2d2; display: inline-block; position: absolute; right: 0; top: 8px; z-index: 0;}
                    &.tht-cur,&:hover{
                        .tht-text{ color: #fff;}
                        .tht-bg{ display: block;}
                    }
                }
            }
            .three-con{ padding: 50px 0 50px 18px; background-color: #fff; display: none;
                li{  float: left; margin-right: 13px;
                    a{ display: block;}
                    &:last-child{ margin-right: 0;}
                }
            }
        }

        /* 服务承诺*/
        .four{ padding: 100px 0;
            .four-title{ text-align: center;}
            .four-con{ margin: 0 auto; width: 1200px; padding-top: 60px;
                li{ width: 213px; float: left; background-color: #fff; border: solid 1px #d987ff; border-radius: 10px; text-align: center; margin-right: 25px; padding-bottom: 20px;
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
        .floor-nav{ height:408px; width: 96px; padding-left: 14px;  position: fixed; top: 50%; margin-top: -325px; left: 50%; margin-left:-720px; background: url("../../static/images/activity/DoubleEleven-2018/six/bg-floornav.png") no-repeat center; text-align: center; z-index: 9; display: none;
            .fn-con{ padding-top: 95px; width: 82px;
                li{  margin-bottom: 4px; background-color: #8935f1;
                    a{ display: block; line-height: 20px; font-size: 16px; color: #fff; padding: 5px 0;}
                    &.fnc-cur,&:hover{ background-color: #6827b8;}
                }
            }
            .fn-top{ display: block; width: 84px; margin-top: 10px;}
        }
        @media screen and (max-width: 1600px) {
            .floor-nav{ left: 0; margin-left: 0;}
        }
    }

</style>