<template>
  <div class="preview-pc">
    <preview-head v-if="cardInfo" :tabIndex="tabIndex" @tabCutFun="tabCutFun" :cardInfo="cardInfo"></preview-head>
    <div class="main-card" v-show="tabIndex == 0">
        <div class="bottom-wrap">
            <div class="bottom-left">
                <h3>最新发布专利</h3>
                    <div class="input-wrap">
                        <div class="gjc">
                            {{patentCurrent}}
                            <div class="xl1">
                                <a href="javascript:void(0);" class="a1" @click="dropDownPatent('关键词')">关键词</a>
                                <a href="javascript:void(0);" class="a2" @click="dropDownPatent('专利申请号')">专利申请号</a>
                            </div>
                        </div>
                        <input type="text" v-model="search">
                        <a href="javascript:void(0);" class="find" @click="searchResult"></a>
                    </div>
                    <ul v-if="patent">
                        <li v-for="(item, index) in patent.list" :key="index">
                            <div v-if="item._source.type == 106" class="box_bg pract">实用</div>
                            <div v-else-if="item._source.type == 107" class="box_bg outward">外观</div>
                            <div v-else class="box_bg invent">发明</div>
                            <div class="slzl-box">
                                <p class="p1 cur">{{ item._source.name }}</p>
                                <p class="p2">申请号：{{ item._source.reg_id }}</p>
                            </div>
                            <span class="span1">{{ item._source.attrs.status_str }}</span>
                            <span v-if="parseInt(item._source.attrs.price) > 0" class="span4 cur">￥{{ item._source.attrs.price }}</span>
                            <span v-else class="span4 cur">面议</span>
                        </li>
                    </ul>
                    <a href="javascript:void(0);" class="more" @click="tabCutFun(1)">更多专利</a>
            </div>
            <div class="bottom-right" v-if="cardInfo">
                <div class="top"><img v-if="cardInfo.head_img" :src="cardInfo.head_img" alt=""><img v-else src="../assets/images/u26.jpg" alt=""></div>
                <div class="gyw-ctt">
                    <p>{{cardInfo.call}}</p>
                    <p class="p1" v-if="cardInfo.agent">{{cardInfo.agent}}</p>
                    <!-- <p>知识产权顾问</p> -->
                    <p v-if="cardInfo.desc">{{cardInfo.desc}}</p>
                    <p>{{cardInfo.url}}</p>
                </div>
            </div>
        </div>
        <div class="bottom-footer" v-if="cardInfo">
          <div class="mingpian-footer">
              <img v-if="cardInfo.head_img" :src="cardInfo.head_img" alt=""><img v-else src="../assets/images/u26.jpg" alt="">
              <div class="geren">
                  <span>{{cardInfo.call}}</span>
                  <em v-if="cardInfo.agent">{{cardInfo.agent}}</em>
              </div>
          </div>
          <div class="lianxi-fs">
              <div class="tel">
                  <p>电话</p>
                  <h4>{{cardInfo.mobile}}</h4>
              </div>
              <div class="weixin" v-if="cardInfo.weixin">
                  <p>微信</p>
                  <h4>{{cardInfo.weixin}}</h4>
              </div>
          </div>
        </div>
    </div>
    <div class="main-patent" v-show="tabIndex == 1">
      <div class="right-middle">
        <div class="middle-info">
            <p>共找到"<em>搜索的关键词</em>"相关专利{{patent ? patent.total : 0}}件</p>
            <div class="input-wrap">
                <input type="text" placeholder="专利关键词" v-model="keywords">
                <a href="javascript:void(0);" class="find" @click="searchResult2"></a>
            </div>
        </div>
        <div class="middle-ctt">
            <ul>
                <li>
                    <p>专利类型</p>
                    <a href="javascript:void(0);" :class="{'cur': type == 0}" @click="typeSelect(0)">不限</a>
                    <a href="javascript:void(0);" :class="{'cur': type == 105}" @click="typeSelect(105)">发明专利</a>
                    <a href="javascript:void(0);" :class="{'cur': type == 106}" @click="typeSelect(106)">实用新型</a>
                    <a href="javascript:void(0);" :class="{'cur': type == 107}" @click="typeSelect(107)">外观专利</a>
                </li>
                <li>
                    <p>下证状态</p>
                    <a href="javascript:void(0);" :class="{'cur': status == 0}" @click="statusSelect(0)">不限</a>
                    <a href="javascript:void(0);" :class="{'cur': status == 98}" @click="statusSelect(98)">已下证</a>
                    <a href="javascript:void(0);" :class="{'cur': status == 99}" @click="statusSelect(99)">授权未缴费</a>
                </li>
                <li>
                    <p>价格范围</p>
                    <a href="javascript:void(0);" :class="{'cur': price == ''}" @click="priceSelect('')">不限</a>
                    <a href="javascript:void(0);" :class="{'cur': price == '0'}" @click="priceSelect('0')">面议</a>
                    <a href="javascript:void(0);" :class="{'cur': price == '1,2000'}" @click="priceSelect('1,2000')">2000以下</a>
                    <a href="javascript:void(0);" :class="{'cur': price == '1,5000'}" @click="priceSelect('1,5000')">2000-5000</a>
                    <a href="javascript:void(0);" :class="{'cur': price == '5000,10000'}" @click="priceSelect('5000,10000')">5000-1万</a>
                    <a href="javascript:void(0);" :class="{'cur': price == '10000,20000'}" @click="priceSelect('10000,20000')">1-2万</a>
                    <a href="javascript:void(0);" :class="{'cur': price == '20000,30000'}" @click="priceSelect('20000,30000')">2-3万</a>
                    <a href="javascript:void(0);" :class="{'cur': price == '30000,50000'}" @click="priceSelect('30000,50000')">3-5万</a>
                    <a href="javascript:void(0);" :class="{'cur': price == '50000,100000'}" @click="priceSelect('50000,100000')">5-10万</a>
                    <a href="javascript:void(0);" :class="{'cur': price == '100000'}" @click="priceSelect('100000')">10万以上</a>
                </li>
            </ul>
        </div>
      </div>
      <div class="right-bottom">
        <div class="bottom-title">
            <span class="zlxx">专利信息</span>
            <span class="zllx">专利类型</span>
            <span class="xzzt">下证状态</span>
            <span class="zlly">专利领域</span>
            <span class="jg">价格</span>
        </div>
        <ul v-if="patent">
            <li v-for="(item, index) in patent.list" :key="index">
                <div class="slzl-box">
                    <p class="p1 cur">{{ item._source.name }}</p>
                    <p class="p2">申请号：{{ item._source.reg_id }}</p>
                </div>
                <span class="span1">{{ item._source.attrs.type_str }}</span>
                <span class="span2">{{ item._source.attrs.status_str }}</span>
                <span class="span3">{{ item._source.desc }}</span>
                <span v-if="parseInt(item._source.attrs.price) > 0" class="span4 cur">￥{{ item._source.attrs.price }}</span>
                <span v-else class="span4 cur">面议</span>
            </li>
        </ul>
        <div class="bottom-ft">
          <Pagination v-if="$store.state.last_page > 1" @changePagesInfo="changePagesInfo"></Pagination>
        </div>
      </div>
      <div class="bottom-footer" v-if="cardInfo">
        <div class="mingpian-footer">
            <img v-if="cardInfo.head_img" :src="cardInfo.head_img" alt=""><img v-else src="../assets/images/u26.jpg" alt="">
            <div class="geren">
                <span>{{cardInfo.call}}</span>
                <em v-if="cardInfo.agent">{{cardInfo.agent}}</em>
            </div>
        </div>
        <div class="lianxi-fs">
            <div class="tel">
                <p>电话</p>
                <h4>{{cardInfo.mobile}}</h4>
            </div>
            <div class="weixin" v-if="cardInfo.weixin">
                <p>微信</p>
                <h4 v-if="cardInfo.weixin">{{cardInfo.weixin}}</h4>
            </div>
        </div>
      </div>
    </div>
    <div class="main-info" v-if="cardInfo" v-show="tabIndex == 2">
        <h3>联系我</h3>
        <p class="mart30">
            <em>称呼</em>
            <span>{{cardInfo.call}}</span>
        </p>
        <p v-if="cardInfo.agent">
            <em>所在公司/机构</em>
            <span>{{cardInfo.agent}}</span>
        </p>
        <!-- <p>
            <em>职位</em>
            <span>知识产权顾问</span>
        </p> -->
        <p v-if="cardInfo.desc">
            <em>简介</em>
            <span>{{cardInfo.desc}}</span>
        </p>
        <p class="lx-info mart30">联系信息</p>
        <p>
            <em>电话</em>
            <span>{{cardInfo.mobile}}</span>
        </p>
        <p v-if="cardInfo.weixin">
            <em>微信</em>
            <span>{{cardInfo.weixin}}</span>
        </p>
        <p v-if="cardInfo.qq">
            <em>QQ</em>
            <span>{{cardInfo.qq}}</span>
        </p>
        <p v-if="cardInfo.email">
            <em>邮箱</em>
            <span>{{cardInfo.email}}</span>
        </p>
    </div>
  </div>
</template>

<script>
import previewHead from '@/components/preview/preview-head'
import Pagination from '@/components/pagination.vue';

import { GET_CARD_INFO,GET_CARD_PATENT_LIST } from '@/components/preview/module'

export default {
  name: 'PreviewPC',
  asyncData({ store, route }){
      var url = '/c/'+route.params.short;
      return store.dispatch(GET_CARD_INFO, url);
  },
  components: {
    previewHead,
    Pagination
  },
  data () {
    return {
        tabIndex: 0,
        searchType: 'keywords',
        patentCurrent: '关键词',
        search: '',
        type: '',
        status: '',
        price: '',
        keywords: '',
        page: 1,
        uid: '',
        short: ''
    }
  },
  mounted(){
    var short = this.$route.params.short;
    this.short = short;
    var url = '';
    if(short == undefined){
        // url = '/user/card/index?token='+this.$store.state.token;
        url = '/user/card/index?token=4940a8406b76f8111808819abe8f041f';
    }else{
        url = '/c/'+short;
    }
    this.$store.dispatch(GET_CARD_INFO, url);
  },
  computed: {
    cardInfo(){
        var card = this.$store.state.card.cardInfo;
        if(card){
            this.uid = card.uid;
            this.$emit('setCardInfo', card);
        }
        return card;
    },
    patent(){
        return this.$store.state.card.patentObj;
    }
  },
  methods: {
    changePagesInfo: function(type,curPage){ // 页码更改操作
        var page = curPage;
        if(type == 'add'){
            page = curPage + 1;
        }else if(type == 'less'){
            page = curPage - 1;
        }
        this.type = type;
        var url = '/patent?sale_status=95&uid='+ this.uid;
        if(this.keywords){
          url += '&search='+this.keywords;
        }
        if(this.type){
          url += '&type='+type;
        }
        if(this.status){
          url += '&status='+this.status;
        }
        if(this.price){
          url += '&price='+this.price;
        }
        this.$store.dispatch(GET_CARD_PATENT_LIST, {page:this.$store.state.current_page, url: url});
    },
    tabCutFun: function(index){
        this.tabIndex = index;
        if(index == 0){
          this.searchResult();
        }else if(index == 1){
          this.searchResult2();
        }
    },
    dropDownPatent: function(current){
        this.patentCurrent = current;
        if(current == '关键词'){
            this.patentPlace = '专利关键词（多个词请用小写;隔开）';
            this.searchType = 'keywods';
        }else{
            this.patentPlace = '专利申请号';
            this.searchType = 'reg_id';
        }
    },
    searchResult: function(){
      var url = '/patent?uid='+ this.uid;
      if(this.search){
        url += '&searchType='+this.searchType+'&search='+this.search;
      }
      this.$store.dispatch(GET_CARD_PATENT_LIST, {page:1, url: url});
    },
    searchResult2: function(){
      var url = '/patent?sale_status=95&uid='+ this.uid;
      if(this.keywords){
        url += '&search='+this.keywords;
      }
      this.type = 0;
      this.status = 0;
      this.price = '';
      this.$store.dispatch(GET_CARD_PATENT_LIST, {page:1, url: url});
    },
    typeSelect: function(type){
        this.type = type;
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
        this.type = type;
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
        this.type = type;
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
    }
  }
}
</script>

<style lang="scss" scoped>
.preview-pc{ width: 960px; margin: auto; overflow: hidden;
  .main-card{width: 100%; background-color: #fff;margin-top: 10px;overflow: hidden; 
    .bottom-wrap{width: 100%; padding-bottom: 40px; overflow: hidden; }
    .bottom-left{float: left;width: 650px;box-sizing: border-box;padding-left: 20px;background-color: #fff;overflow: hidden; 
      h3{font-size: 18px;color: #333;line-height: 80px;float: left; }
      .input-wrap{float: right; position: relative; width: 320px;height: 40px; margin-top: 20px;border-radius: 5px; background-color: #fff;border: 1px solid #dddddd;box-sizing: border-box;margin-right: 20px;
        .gjc{ position: relative;box-sizing: border-box;padding-left: 10px;float: left;width: 101px;height: 38px;font-size: 14px;color: #666666;line-height: 40px;background: url(../assets/images/xiasanjiao2.png) no-repeat 72px 16px;cursor: pointer;z-index: 1;background-color: #fff;border-right: 1px solid #dddddd;border-top-left-radius:5px;border-bottom-left-radius: 5px;
          .xl1{display: none; position: absolute;top: 38px;left: -1px; width: 102px;height: 82px;border: 1px solid #dddddd;background-color: #fff;z-index: 10;box-sizing: border-box;
            a{box-sizing: border-box; display: block;padding-left: 10px;width:100px;height: 40px;color: #333333; background-color: #fff;font-size: 14px;text-align: left;line-height: 40px;
              &:hover,&.cur{color: #cc0000;}
            }
          }
          &:hover .xl1{display: block;}
        }
        input{ float: left; width: 217px;height: 38px;border: none;box-sizing: border-box;padding-left: 10px;border-radius: 5px;}
        a.find{position: absolute; width: 22px;height: 22px;right: 10px;top: 10px; background: url("../assets/images/preview/find.png") no-repeat 0 0; background-size: 100%;}
      }
      ul{width: 100%;clear: both;border-top: 1px solid #dddddd;
        li{width: 100%;padding: 20px 0;border-bottom: 1px solid #dddddd;overflow: hidden;
          .box_bg{float: left; width: 50px;height: 50px;font-size: 14px;color: #fff;text-align: center;line-height: 50px;border-radius: 5px;
            &.pract{background-color: #80CCCC;}
            &.outward{background-color: #99cce6;}
            &.invent{background-color: #f0b3b3;}
          }
          .slzl-box{float: left; width: 280px;padding-left: 20px;
            p{ font-size: 14px; line-height: 20px;
              &.p1{color: #333333;}
              &.p2{color: #999999;margin-top: 10px;}
            }
          }
          span{display: inline-block;width: 60px;height: 20px; font-size: 14px;color: #666666;padding-left: 90px;line-height: 20px;}
          .span4{width: 100px;padding-left: 20px;text-align: right;color: #cc0000; }
        }
      }
      .more{display: block;width: 160px;height: 40px;text-align: center;line-height: 40px;color: #333;font-size: 14px;border: 1px solid #dddddd;margin: 20px auto 0;border-radius: 20px; }
    }
    .bottom-right{ float: right; width: 260px;height: 474px;border-radius: 5px;box-shadow: 0px 0px 20px #ddd;margin-top: 20px;margin-right: 20px; overflow: hidden;
      .top{position: relative; width: 100%;height: 210px;background: url("../assets/images/preview/wdmp.jpg") no-repeat 45px 40px; 
        img{position: absolute;left: 90px;top: 84px; width: 80px;height: 80px;border-radius: 50%;}
      }
      .gyw-ctt{width: 100%;box-sizing: border-box;padding-left: 30px;padding-top: 30px;
        p{width: 184px; padding-left: 25px;font-size: 12px;color: #666;line-height: 20px;margin-top: 12px;
          &:nth-child(1){background: url("../assets/images/preview/vip-1.jpg") no-repeat 0 3px;margin-top: 0px;}
          &:nth-child(2){background: url("../assets/images/preview/vip-2.jpg") no-repeat 0 3px;}
          &:nth-child(3){background: url("../assets/images/preview/vip-3.jpg") no-repeat 0 3px;}
          &:nth-child(4){background: url("../assets/images/preview/vip-4.jpg") no-repeat 0 3px;}
          &:nth-child(5){background: url("../assets/images/preview/vip-5.jpg") no-repeat 0 3px;width: 181px;}
        }
      }
    }
  }
  .main-patent{
    .right-middle{width: 960px;height: 210px;background-color: #fff;margin-top: 10px;box-sizing: border-box;padding:10px 20px 0; 
      .middle-info{width: 100%;height: 40px; 
        p{float: left; font-size: 14px;color: #333;line-height: 40px;text-align: left; 
          em{color: #cc0000; }
        }
        .input-wrap{float: right; position: relative; width: 350px;height: 40px;border-radius: 5px; background-color: #fff;border: 1px solid #dddddd;box-sizing: border-box;
          input{ float: left; width: 348px;height: 38px;border: none;box-sizing: border-box;padding-left: 10px;border-radius: 5px;}
          a.find{position: absolute; width: 22px;height: 22px;right: 10px;top: 10px; background: url("../assets/images/preview/find.png") no-repeat 0 0; background-size: 100%;}
        }
      }
      .middle-ctt{width: 100%;border-top: 1px solid #dddddd;margin-top: 10px; 
        ul{width: 100%;overflow: hidden; 
          li{width: 100%;height: 30px;margin-top: 10px;font-size: 14px; 
            p{float: left;width: 90px;height: 30px;line-height: 30px;color: #333; }
            a{float: left;line-height: 30px;margin-right: 35px;color: #999; 
              &:nth-child(2){width: 49px;text-align: center;margin-right: 10px; }
              &.cur{background-color: #cc0000;color: #fff;border-radius: 5px; }
            }
          } 
        }
      } 
    }
    .right-bottom{width: 100%;height: 810px;background-color: #fff;margin-top: 10px; 
      .bottom-title{width: 100%;height: 50px;box-sizing: border-box;border-bottom: 1px solid #ddd; 
        span{float: left;line-height: 50px;font-size: 14px;color: #999; 
          &:nth-child(1){width: 280px;margin-left: 20px;margin-right: 50px; }
          &:nth-child(2),&:nth-child(3){width: 80px;margin-right: 30px; }
          &:nth-child(4){width: 220px;margin-right: 30px; }
          &:nth-child(5){width: 100px; }
        }
      }
      ul{width: 100%;box-sizing: border-box;padding-left:20px;padding-right: 20px;clear: both; 
        li{width: 100%; padding:20px 0;border-bottom: 1px solid #dddddd; overflow: hidden;
          .slzl-box{float: left; width: 280px;
            p{ font-size: 14px; line-height: 20px;
              &.p1{color: #333333;}
              &.p2{color: #999999;margin-top: 10px;}
            }
          }
          span{float: left;width: 80px;height: 20px; font-size: 14px;color: #666666;padding-left: 30px;line-height: 20px;}
          .span1{padding-left: 50px; }
          .span3{width: 220px; }
          .span4{width: 100px;color: #cc0000; }
        }
      }
      .bottom-ft{width: 100%;height: 80px;padding-right: 20px; box-sizing: border-box; clear: both;overflow: hidden;}
    }
    .bottom-footer{ border-top: 0 none; margin-top: 10px; }
  }
  .main-info{clear: both; width: 960px;height: 510px;margin-top: 10px;background-color: #fff; 
    h3{padding-left: 20px;padding-top: 20px;font-size: 18px;color: #000000;line-height: 30px; }
    p{clear: both; font-size: 14px;color: #333;line-height: 30px;margin-left: 50px;margin-top: 10px;overflow: hidden;}
    p em{float: left;width: 90px;height: 30px; line-height: 30px;text-align: right;color: #666;margin-right: 10px; }
    p span{float: left; width: 760px;height: 30px;line-height: 30px; }
    p.mart30{margin-top: 30px;}
  }
  .bottom-footer{clear: both; width: 100%;height: 90px;background-color:#fff;border-top: 1px solid #dddddd;box-sizing: border-box;padding-left: 20px;padding-top: 20px;padding-right: 20px;margin-top: 40px;
    .mingpian-footer{float: left; position: relative;width: 392px;height: 50px;clear: both; 
      img{float: left;width: 50px;height: 50px; border-radius: 50%; }
      .geren{float: left; width: 332px;height: 50px;overflow: hidden;margin-left: 10px;
        span{display: block; line-height: 30px;font-size: 14px;color: #333; }
        em{display: block; width: 332px;height: 20px;font-size: 12px;color: #999; }
      }

    }
    .lianxi-fs{float: right; height: 44px;margin-top: 10px; 
      div{width: 82px;float: left; 
        &:nth-child(1){padding-right: 20px;}
        &.weixin{border-left: 1px dashed #dedede;}
        p{font-size: 12px;color: #999;text-align: center; }
        h4{ font-size: 12px;color: #333;font-weight: bold;margin-top: 10px; text-align: center;}
      }
    }
  }
}

</style>

