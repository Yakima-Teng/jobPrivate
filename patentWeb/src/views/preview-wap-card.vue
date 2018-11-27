<template>
  <div class="preview-card">
    <div class="card-box" v-show="tabIndex == 0">
      <nav v-if="cardInfo">
          <div class="banner"><img v-if="cardInfo.banner" :src="require('../assets/images/preview/wap_'+cardInfo.banner+'.jpg')" /><img v-else src="../assets/images/preview/wap_1.jpg" /></div>
          <div class="vip-tx"><img v-if="cardInfo.head_img" :src="cardInfo.head_img" alt=""><img v-else src="../assets/images/u26.jpg" alt=""></div>
          <div class="grxx">
              <span>{{cardInfo.call}}</span>
              <a :href="'tel:'+cardInfo.mobile">联系我</a>
              <!-- <p>知识产权顾问</p> -->
              <p v-if="cardInfo.agent">{{cardInfo.agent}}</p>
          </div>
          <p class="jj">简介：{{cardInfo.desc}}</p>
      </nav>
      <div class="zx" v-if="patent && patent.list.length">
          <h3>最新发布专利</h3>
          <ul>
              <li v-for="(item, index) in patent.list" :key="index">
                  <div v-if="item._source.type == 106" class="box_bg pract">实用</div>
                  <div v-else-if="item._source.type == 107" class="box_bg outward">外观</div>
                  <div v-else class="box_bg invent">发明</div>
                  <div class="slzl-box">
                      <p class="p1 cur">{{ item._source.name }}</p>
                      <p class="p2">{{ item._source.attrs.status_str }}</p>
                  </div>
              </li>
          </ul>
      </div>
    </div>
    <div class="patent-box" v-show="tabIndex == 1">
      <!-- head -->
      <div class="head-title" v-if="cardInfo">
          <img v-if="cardInfo.head_img" :src="cardInfo.head_img" alt=""><img v-else src="../assets/images/u26.jpg" alt="">
          <span>{{cardInfo.call}}</span>
          <p>TA的名片</p>
      </div>
      <div class="input-wrap" v-if="patent && patent.list.length">
          <input type="text" placeholder="专利关键词" v-model="search">
          <a href="javascript:void(0);" class="find" @click="searchResult2"></a>
      </div>
      <!-- content -->
      <div class="content-box">
          <div class="ctt-list clearfix" v-if="patent && patent.list.length">
              <a :class="{'cur': selectIndex == 0}" href="javascript:void(0);" @click="selectCut(0)">专利类型<i></i></a>
              <a :class="{'cur': selectIndex == 1}" href="javascript:void(0);" @click="selectCut(1)">下证状态<i></i></a>
              <a :class="{'cur': selectIndex == 2}" href="javascript:void(0);" @click="selectCut(2)">价格范围<i></i></a>
              <ul v-show="selectIndex == 0">
                <li @click="typeSelect(0)" :class="{'cur': type == 0}">不限</li>
                <li @click="typeSelect(105)" :class="{'cur': type == 105}">发明专利</li>
                <li @click="typeSelect(106)" :class="{'cur': type == 106}">实用新型</li>
                <li @click="typeSelect(107)" :class="{'cur': type == 107}">外观专利</li>
              </ul>
              <ul v-show="selectIndex == 1">
                <li @click="statusSelect(0)" :class="{'cur': status == 0}">不限</li>
                <li @click="statusSelect(98)" :class="{'cur': status == 98}">已下证</li>
                <li @click="statusSelect(99)" :class="{'cur': status == 99}">授权未缴费</li>
              </ul>
              <ul v-show="selectIndex == 2">
                <li :class="{'cur': price == ''}" @click="priceSelect('')">不限</li>
                <li :class="{'cur': price == '0'}" @click="priceSelect('0')">面议</li>
                <li :class="{'cur': price == '1,2000'}" @click="priceSelect('1,2000')">2000以下</li>
                <li :class="{'cur': price == '1,5000'}" @click="priceSelect('1,5000')">2000-5000</li>
                <li :class="{'cur': price == '5000,10000'}" @click="priceSelect('5000,10000')">5000-1万</li>
                <li :class="{'cur': price == '10000,20000'}" @click="priceSelect('10000,20000')">1-2万</li>
                <li :class="{'cur': price == '20000,30000'}" @click="priceSelect('20000,30000')">2-3万</li>
                <li :class="{'cur': price == '30000,50000'}" @click="priceSelect('30000,50000')">3-5万</li>
                <li :class="{'cur': price == '50000,100000'}" @click="priceSelect('50000,100000')">5-10万</li>
                <li :class="{'cur': price == '100000'}" @click="priceSelect('100000')">10万以上</li>
              </ul>
          </div>
          <ul v-if="patent && patent.list.length">
              <li v-for="(item, index) in patent.list" :key="index">
                  <p><em v-if="item._source.type == 106" class="pract">实用</em><em v-else-if="item._source.type == 107" class="outward">外观</em><em v-else class="pract">发明</em>{{ item._source.name }}</p>
                  <p>领域：{{item._source.attrs.area}}</p>
                  <p>
                      <span>{{ item._source.attrs.status_str }}</span>
                      <span v-if="parseInt(item._source.attrs.price) > 0">￥{{ item._source.attrs.price }}</span>
                      <span v-else>面议</span>
                  </p>
              </li>
          </ul>
          <!-- load -->
          <div class="load" v-show="loading"><i class="icon-load"></i>加载中...</div>
      </div>
    </div>
    <div class="lianxi" v-if="cardInfo">
        <h3>联系我</h3>
        <ul>
            <li v-if="cardInfo.mobile">
                <span>电话</span>
                <span>{{ cardInfo.mobile }}</span>
                <a :href="'tel:'+cardInfo.mobile">呼叫</a>
            </li>
            <li v-if="cardInfo.weixin">
                <span>微信</span>
                <span>{{ cardInfo.weixin }}</span>
                <a href="javascript:void(0);" v-clipboard:copy="cardInfo.weixin" v-clipboard:success="onCopyFn" v-clipboard:error="onErrorFn">复制</a>
            </li>
            <li v-if="cardInfo.qq">
                <span>QQ</span>
                <span>{{cardInfo.qq}}</span>
                <a href="javascript:void(0);" v-clipboard:copy="cardInfo.qq" v-clipboard:success="onCopyFn" v-clipboard:error="onErrorFn">复制</a>
            </li>
        </ul>
    </div>
    <div class="list">
        <a href="javascript:void(0);" :class="{'cur': tabIndex == 0}" @click="tabCutFun(0)" >名片</a>
        <a href="javascript:void(0);" :class="{'cur': tabIndex == 1}" @click="tabCutFun(1)">在售专利</a>
        <a v-if="cardInfo" :href="'tel:'+cardInfo.mobile">联系我</a>
    </div>
    <div v-show="selectIndex != -1" class="cloud"></div>
  </div>
</template>

<script>
import cookies from 'js-cookie'

import { GET_CARD_INFO,GET_CARD_PATENT_LIST,GET_MORE_CARD_PATENT_LIST } from '@/components/preview/module'
import { resizable } from '@/assets/js/util.js'
export default {
  name: 'WapCard',
  asyncData({ store, route }){
      var url = '/c/'+route.params.short;
      return store.dispatch(GET_CARD_INFO, url);
  },
  metaInfo () {
    return {
      meta: [{
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
      }]
    }
  },
  data () {
    return {
        tabIndex: 0,
        searchType: 'keywords',
        search: '',
        type: '',
        status: '',
        price: '',
        keywords: '',
        page: 1,
        uid: '',
        short: '',
        bgImg: '1',
        selectIndex: -1,
        loading: false
    }
  },
  mounted(){
    resizable();
    var _this = this;
    var short = this.$route.params.short;
    this.short = short;
    var url = '';
    if(short == undefined){
        url = '/user/card/index?token='+ cookies.get('token');
        // url = '/user/card/index?token=4940a8406b76f8111808819abe8f041f';
    }else{
        url = '/c/'+short;
    }
    this.$store.dispatch(GET_CARD_INFO, url);
  },
  computed:{
    cardInfo(){
        var card = this.$store.state.card.cardInfo;
        if(card){
            this.uid = card.uid;
            if(card.banner){
              this.bgImg = card.banner;
            }
            this.$emit('setCardInfo', card);
        }
        return card;
    },
    patent(){
        return this.$store.state.card.patentObj;
    }
  },
  methods: {
    tabCutFun(index){
      var _this = this;
      this.tabIndex = index;
      var url = '/patent?uid='+ this.uid;
      if(index == 0){
          this.$store.dispatch(GET_CARD_PATENT_LIST, {page:1, url: url});
        }else if(index == 1 && this.patent && this.patent.list.length){
          $(window).scrollTop(0);
          this.searchResult2();
          $(window).scroll(function(){
            if(!_this.loading && $(this).scrollTop() >= $('body').height() - $(window).height()){
              _this.loading = true;
              setTimeout(function(){
                var page = parseInt(_this.$store.state.current_page) +1;
                var url = '/patent?sale_status=95&uid='+ _this.uid;
                if(_this.search){
                  url += '&search='+_this.search;
                }
                if(_this.type){
                  url += '&type='+_this.type;
                }
                if(_this.status){
                  url += '&status='+_this.status;
                }
                if(_this.price){
                  url += '&price='+_this.price;
                }
                _this.$store.dispatch(GET_MORE_CARD_PATENT_LIST, {page: page, url: url});
                _this.loading = false;
              }, 500);
            }
          });
        }
    },
    onCopyFn: function() {
      alert('复制成功')
    },
    onErrorFn: function() {
      alert('复制失败')
    },
    searchResult2: function(){
      var url = '/patent?sale_status=95&uid='+ this.uid;
      if(this.search){
        url += '&search='+this.search;
      }
      this.type = 0;
      this.status = 0;
      this.price = '';
      this.$store.dispatch(GET_CARD_PATENT_LIST, {page:1, url: url});
    },
    typeSelect: function(type){
        this.type = type;
        this.selectIndex = -1;
        var url = '/patent?sale_status=95&uid='+ this.uid;
        if(this.keywords){
          url += '&search='+this.keywords;
        }
        if(this.type){
          url += '&type='+this.type;
        }
        if(this.status){
          url += '&status='+this.status;
        }
        if(this.price){
          url += '&price='+this.price;
        }
        this.$store.dispatch(GET_CARD_PATENT_LIST, {page:1, url: url});
    },
    statusSelect: function(status){
        this.status = status;
        this.selectIndex = -1;
        var url = '/patent?sale_status=95&uid='+ this.uid;
        if(this.keywords){
          url += '&search='+this.keywords;
        }
        if(this.type){
          url += '&type='+this.type;
        }
        if(this.status){
          url += '&status='+this.status;
        }
        if(this.price){
          url += '&price='+this.price;
        }
        this.$store.dispatch(GET_CARD_PATENT_LIST, {page:1, url: url});
    },
    priceSelect: function(price){
        this.price = price;
        this.selectIndex = -1;
        var url = '/patent?sale_status=95&uid='+ this.uid;
        if(this.keywords){
          url += '&search='+this.keywords;
        }
        if(this.type){
          url += '&type='+this.type;
        }
        if(this.status){
          url += '&status='+this.status;
        }
        if(this.price){
          url += '&price='+this.price;
        }
        this.$store.dispatch(GET_CARD_PATENT_LIST, {page:1, url: url});
    },
    selectCut: function(index){
      this.selectIndex = index;
    }
  }
}
</script>

<style lang="scss" scoped>
.cloud{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255,255,255,.1);
}
.preview-card{ width: 16rem; margin: auto; overflow: hidden;
  nav{ width: 100%; padding-bottom: 1rem; background-color: #fff; overflow: hidden;
    .banner{ width: 100%; height: 10.5rem;
      img{ width: 100%; height: 100%;}
    }
    .vip-tx{ width: 4.5rem; height: 4.5rem; border-radius: 50%; margin: -8.25rem auto 0; overflow: hidden; position: relative;
      img{ max-width: 100%; max-height: 100%;}
    }
    .grxx{ position: relative; width: 14.5rem; padding: 0.75rem; margin: 1.5rem auto 0;border-radius: 0.25rem; background-color: #fff; box-shadow: 0px 0px 0.25rem rgba(0, 0, 0, 0.349019607843137); overflow: hidden; box-sizing: border-box;
      span{ float: left; line-height: 1.25rem; font-size: 0.8rem; color: #333; }
      a{ float: right; width: 3.5rem; line-height: 1.5rem; border: 1px solid #cc0000; border-radius: 0.25rem; font-size: 0.6rem; color: #cc0000; text-align: center;}
      p {clear: both;font-size: 0.6rem;color: #999;line-height: 1rem; margin-top: 0.25rem;}
    }
    .jj{ width: 14.5rem; margin: 0.75rem auto 0; font-size: 0.6rem; line-height: 1rem; color: #666;}
  }
  .zx{ margin-top: 0.5rem; width: 100%; padding: 0.5rem 0.75rem; background-color: #fff; box-sizing: border-box;
    h3{ font-size: 0.7rem; color: #333; line-height: 1.5rem;}
    ul{
      li{ width: 100%; display: flex; flex-direction: row; border-bottom: 1px solid #ddd; padding: 0.75rem 0; overflow: hidden;
        .box_bg{ width: 2rem; height: 1rem; font-size: 0.6rem; line-height: 1rem; color: #fff; text-align: center; border-radius: 0.25rem; 
          &.pract{background-color: #80CCCC;}
          &.outward{background-color: #99cce6;}
          &.invent{background-color: #f0b3b3;}
        }
        .slzl-box{ margin-left: 0.5rem; width: calc(100% - 2.5rem); overflow: hidden;
          p{ font-size: 0.6rem; line-height: 1rem;
            &.p1{ color: #333; }
            &.p2{ color: #999; margin-top: 0.25rem; }
          }
        }
        &:last-child{ border-bottom: 0 none;}
      }
    }
  }
  .head-title{width: 100%;box-sizing: border-box;padding: 0.375rem 0.5rem 0.375rem 0.75rem ; background-color: #fff; overflow: hidden;
    img{float: left;width: 1.5rem;height: 1.5rem; border-radius: 50%;}
    span, p{font-size: 0.7rem;line-height: 1.5rem;}
    span{float: left;margin-left: 0.25rem;color: #333;}
    p{float: right;color: #999;}
  }
  .input-wrap{ position: relative; width: 14.75rem; margin: 0.5rem auto 0; overflow: hidden;
    input{float: left; width: 100%;height: 1.75rem;font-size: 0.6rem;box-sizing: border-box;padding-left: 0.5rem;border-radius: 0.875rem;border: 1px solid #dddddd;}
    a.find{position: absolute; width: 0.9rem;height: 0.9rem;right: 0.5rem;top: 0.425rem; background: url("../assets/images/preview/find.png") no-repeat 0 0;background-size: 100%; }
  }
  .content-box{width: 100%;overflow: hidden;margin-top: 0.5rem;
    .ctt-list{position:relative; width: 100%;box-sizing: border-box;
      a{position: relative; float: left;width: 33.3333%;height: 2rem;box-sizing: border-box;border-bottom: 1px solid #dddddd; line-height: 2rem;background-color: #fff;font-size: 0.7rem;color: #666;padding-left: 1rem;padding-right: 0.75rem; 
        &:nth-child(2){border-left: 1px solid #ddd;border-right: 1px solid #ddd; }
        i{float: right; width: 0.5rem;height: 0.3rem;background: url("../assets/images/preview/b-sanjiao.png") no-repeat 0 0;background-size:100%;margin-top: 0.85rem;  }
        &.cur{
          color: #cc0000;
          i{ background-image: url("../assets/images/preview/u-sanjiao.png"); }
        }
      }
      ul{ position: absolute; width: 100%; left: 0; top: 2rem; z-index: 9;
        li{ padding: 0; padding-left: 1rem; height:1.85rem; line-height: 1.85rem; font-size: 0.7rem; border-bottom: 0 none; box-sizing: border-box;
          &.cur{ color: #cc0000;}
        }
      }
    }
    ul{width: 100%;margin: 0 auto; 
      li{width: 100%;background-color: #fff;border-bottom: 1px solid #ddd;box-sizing: border-box;padding:0.75rem;
        p{ line-height: 1rem; font-size: 0.6rem; color: #999;
          &:first-child{ color: #333; font-size: 0.7rem;
            em{float: left;width: 2rem;height: 1rem;font-size: 0.6rem;color: #fff;line-height: 1rem;border-radius: 0.25rem;text-align: center;margin-right: 0.45rem;
              &.pract{background-color: #80CCCC;}
              &.outward{background-color: #99cce6;}
              &.invent{background-color: #f0b3b3;}
            }
          }
          &:nth-child(2){ margin-top: 0.25rem; }
          &:last-child{ margin-top: 0.75rem; display: flex; flex-direction: row; justify-content: space-between; overflow: hidden;
            span{ display: block; line-height: 1rem;
              &:first-child{font-size: 0.6rem;color: #999; }
              &:last-child{ font-size: 0.7rem;color: #cc0000; }
            }
          }
        }
        &:last-child{ border-bottom: 0 none;}
      }
    }
    .load{width: 3.375rem; margin: 0.75rem auto; padding: 0.375rem 0; line-height: 0.75rem; font-size: 0.6rem; color: #999;
      i{ display: inline-block; width: 0.75rem; height: 0.75rem; margin-right: 0.25rem; background: url("../assets/images/preview/loading.png") center no-repeat; background-size: 100%; vertical-align: top; }
    }
  }
  .card-box{ margin-bottom: 0.5rem;}
  .lianxi{ width: 100%; padding: 0.5rem 0.75rem 2rem; background-color: #fff; box-sizing: border-box; overflow: hidden;
    h3{ font-size: 0.7rem; color: #333; line-height: 1.5rem; margin-bottom: 0.75rem; }
    li{ width: 100%; margin-bottom: 1.25rem; background: none 0 0.1rem no-repeat; background-size: 100%; overflow: hidden;
      span{ float: left; font-size: 0.6rem; line-height: 1rem; color: #999; margin-left: 1.375rem;
        &:nth-child(2){ margin-left: 0.625rem; color: #333;}
      }
      a{ float: right; width: 3.5rem; font-size: 0.6rem; line-height: 1.2rem; color: #333; border: 1px solid #ddd; border-radius: 0.25rem; text-align: center;}
      &:nth-child(1){background-image: url("../assets/images/preview/dianhua.png"); background-size: 0.85rem 0.85rem;}
      &:nth-child(2){background-image: url("../assets/images/preview/weixin.png"); background-size: 0.85rem 0.7rem;}
      &:last-child{background-image: url("../assets/images/preview/qq.png"); background-size: 0.7rem 0.8rem;}
    }
  }
  .list{ position: fixed; left: 50%; bottom: 0; transform: translateX(-50%); display: flex; flex-direction: row; width: 16rem;
    a{ display: block; flex: 1; height: 2rem; border: 1px solid #cc0000; border-right: 0 none; color: #cc0000; background-color: #fff; font-size: 0.6rem; line-height: 2rem; box-sizing: border-box; text-align: center;
      &.cur{ background-color: #cc0000; color: #fff; }
      &:last-child{ border-right: 1px solid #cc0000;}
    }
  }
}

.preview .preview-card .list{ position: absolute;}

</style>

