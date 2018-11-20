<template>
<div class="page-index">
    <top></top>
    <div class="head-bg" :class="{'shadow':isShadow}">
        <head-part></head-part>
        <navigate></navigate>
    </div>
    <banner></banner>
    <div class="bg">
        <slide></slide>
        <section class="floor-box" id="brand">
            <title-part type="brand" content="商标服务"></title-part>
            <service type="brand"></service>
        </section>
        <section class="floor-box" id="patent">
            <title-part type="patent" content="专利服务"></title-part>
            <service type="patent"></service>
        </section>
        <section class="floor-box" id="copyright">
            <title-part type="copyright" content="版权服务"></title-part>
            <service type="copyright"></service>
        </section>
        <section class="floor-box" id="trade">
            <title-part type="trade" content="商标交易"></title-part>
            <trade></trade>
        </section>
        <section class="floor-box" id="company">
            <title-part type="service" :isSub="isSub" :currentIndex="serviceIndex" @serviceTabCut="serviceTabCut"></title-part>
            <service-other type="service-other" :currentIndex="serviceIndex" @serviceTabCut="serviceTabCut"></service-other>
        </section>
        <section class="floor-box" id="classic">
            <title-part type="case" content="经典案例"></title-part>
            <other type="case"></other>
        </section>
        <section class="floor-box" id="approve">
            <title-part type="fessional" content="专业认可"></title-part>
            <slider type="approve"></slider>
        </section>
        <section class="floor-media" id="media">
            <title-part type="media" content="媒体报道"></title-part>
            <other type="media"></other>
        </section>
    </div>
    <bottom></bottom>
    <foot></foot>
    <fixed-part></fixed-part>
    <floor></floor>
</div>
</template>

<script>
import top from './common/top.vue'
import headPart from './common/head.vue'
import navigate from './common/nav.vue'

import banner from './index/banner.vue'
import slide from './index/slide.vue'
import titlePart from './index/title.vue'
import service from './index/service.vue'
import trade from './index/trade.vue'
import serviceOther from './index/service-other.vue'
import slider from './index/slide_02.vue'
import other from './index/other.vue'

import bottom from './common/bottom.vue'
import foot from './common/foot.vue'

import fixedPart from './index/fixed.vue'
import floor from './index/floor.vue'

import { GET_CONVENIENT } from './index/module'

import { GET_BRAND_CONVENIENT } from './index/module'
import { GET_BRAND_NEWS } from './index/module'
import { GET_BRAND_SEO } from './index/module'

import { GET_PATENT_CONVENIENT } from './index/module'
import { GET_PATENT_NEWS } from './index/module'
import { GET_PATENT_SEO } from './index/module'

import { GET_COPYRIGHT_CONVENIENT } from './index/module'
import { GET_COPYRIGHT_NEWS } from './index/module'
import { GET_COPYRIGHT_SEO } from './index/module'

export default {
    asyncData(_ref) {
        if(_ref!=undefined){
            let store=_ref.store;
            return Promise.all([
                store.dispatch("getServiceCate"),
                store.dispatch(GET_CONVENIENT),
                store.dispatch(GET_BRAND_CONVENIENT),
                store.dispatch(GET_BRAND_NEWS),
                store.dispatch(GET_BRAND_SEO),
                store.dispatch(GET_PATENT_CONVENIENT),
                store.dispatch(GET_PATENT_NEWS),
                store.dispatch(GET_PATENT_SEO),
                store.dispatch(GET_COPYRIGHT_CONVENIENT),
                store.dispatch(GET_COPYRIGHT_NEWS),
                store.dispatch(GET_COPYRIGHT_SEO)
            ])
        }else{
            window.location.reload()
        }
    },
    metaInfo () {
      return {
        title: '商标查询_专利查询_商标注册_版权登记-创新科技服务云平台',
        meta: [{
            name: 'description',
            content: '创新科技服务云平台专业提供商标注册,商标查询,专利查询,专利申请,版权登记,工商财税,商标转让,法律,设计等服务,费用透明,流程简单,成功率高!'
        },{
            name: 'keywords',
            content: '商标查询,专利查询,商标注册,版权登记-创新科技服务云平台'
        }]
      }
    },
    data(){
        return{
            isShadow: false,
            isSub: true,
            activeIndex: 0,
            serviceIndex: 0
        }
    },
    methods: {
        activeTabCut: function(index){
            this.activeIndex = index;
        },
        serviceTabCut: function(index){
            this.serviceIndex = index;
        }
    },
    components: {
        top,
        headPart,
        navigate,
        banner,
        slide,
        service,
        trade,
        titlePart,
        serviceOther,
        slider,
        other,
        bottom,
        foot,
        fixedPart,
        floor
    },
}
</script>

<style lang="scss">
.bg{
    background-color: #fafafa;
}
.floor-media{
    padding-bottom: 70px;
}
</style>