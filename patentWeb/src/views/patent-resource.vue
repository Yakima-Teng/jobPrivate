<template>
  <div class="patent-resource">
    <Top></Top>
    <HeadModel></HeadModel>
    <div class="patent-search">
        <div class="content_ctt">
            <div class="input-wrap">
                <div class="gjc">
                    {{patentCurrent}}
                    <div class="xl1">
                        <a href="javascript:void(0);" class="a1" @click="dropDownPatent('关键词')">关键词</a>
                        <a href="javascript:void(0);" class="a2" @click="dropDownPatent('专利申请号')">专利申请号</a>
                    </div>
                </div>
                <input type="text" :placeholder="patentPlace" v-model="search">
                <a class="find" href="javascript:void(0)" @click="searchFn"></a>
            </div>
            <div class="btn-wrap">
                <router-link to="member/patent/P" target="_blank"  class="btn-cs">出售专利</router-link>
            </div>
            <div class="select-wrap">
                <select @change="searchFn" v-model="type">
                    <option value="">专利类型：不限</option>
                    <option value="105">专利类型：发明</option>
                    <option value="106">专利类型：实用新型</option>
                    <option value="107">专利类型：外观</option>
                </select>
                <select  @change="searchFn"  v-model="status">
                    <option value="">下证状态：不限</option>
                    <option value="98">下证状态：已下证</option>
                    <option value="99">下证状态：未缴费</option>
                </select>
                <select @change="searchFn"  v-model="price">
                    <option value="">价格：不限</option>
                    <option value="0">价格：面议</option>
                    <option value="1,2000">价格：2000以下</option>
                    <option value="1,5000">价格：5000以下</option>
                    <option value="5000,10000">价格：5000-1万</option>
                    <option value="10000,20000">价格：1-2万</option>
                    <option value="20000,30000">价格：2-3万</option>
                    <option value="30000,50000">价格：3-5万</option>
                    <option value="50000,100000">价格：5-10万</option>
                    <option value="100000">价格：10万以上</option>
                </select>
            </div>
        </div>
    </div>
    <div class="content2">
        <div class="content2_ctt clearfix">
            <div class="content2_left">
                <h3 class="title">
                    <div class="page">
                        <a class="prev" v-if="curPage > 1" href="javascript:void(0)" @click="changePagesInfo('less', curPage)"></a>
                        <a class="prev-none" v-else href="javascript:void(0)"></a>
                        <a class="next" v-if="curPage < lastPage" href="javascript:void(0)" @click="changePagesInfo('add', curPage)"></a>
                        <a class="next-none" v-else href="javascript:void(0)"></a>
                    </div>查询专利结果{{ patent != null ? patent.total : 0 }}条</h3>
                
                <List type="patent" v-if="patent != null" :list="patent" :collect="collect" @openLayer="openLayer" @careHandle="careHandle"></List>
                <!--分页-->
                <Pagination v-if="$store.state.last_page > 1" @changePagesInfo="changePagesInfo"></Pagination>
                <!--/分页-->
            </div>
            <Need v-if="needs != null" :list="needs"></Need>
        </div>
    </div>
    <FootModel :isLink="footLink"></FootModel>
    <Fixed></Fixed>
    <div class="mask" v-show="isAdvisory || isSuc"></div>
    <div class="layer layer-advisory" v-if="curPatentInfo" v-show="isAdvisory">
        <h3>专利咨询</h3>
        <p class="desc">{{curPatentInfo._source.name}}</p>
        <input type="text" class="mobile" :class="{'error': isMAErr}" name="mobile" v-model="mobileA" placeholder="请输入您的手机号" maxlength="11" @focus="focusHandle('isMAErr')" />
        <a class="btn-submit" href="javascript:void(0)" @click="submitAdvisory">提交</a>
        <a href="javascript:void(0);" class="close" @click="closeLayer('isAdvisory')"></a>
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
import Pagination from '@/components/pagination.vue';
import List from '@/components/index/list.vue';
import Need from '@/components/patent/need.vue';
import Fixed from '@/components/patent/fixed.vue';

import cookies from 'js-cookie'

import { GET_PATENT, GET_PATENT_LIST } from '@/components/patent/module'

import { api,openzx } from '@/assets/js/util.js'

export default {
  name: 'Patent',
  asyncData({ store, route }){
    var query = route.query;
    var url = '/patent?p=1';
    if(query.searchType != undefined && query.searchType != ''){
        url += '&searchType='+query.searchType;
    }
    if(query.search != undefined && query.search != ''){
        url += '&search=' + query.search;
    }
    if(query.type != undefined && query.type != ''){
        url += '&type=' + query.type;
    }
    if(query.status != undefined && query.status != ''){
        url += '&status=' + query.status;
    }
    if(query.price != undefined && query.price != ''){
        url += '&price=' + query.price;
    }
    return Promise.all([store.dispatch(GET_PATENT, url)])
  },
  mounted(){ // 此处数据不会被ssr读取到
    this.$store.dispatch(GET_PATENT,this.urlFun(this));
  },
  components: {
    Top,
    HeadModel,
    FootModel,
    List,
    Pagination,
    Need,
    Fixed
  },
  metaInfo () {
    return {
      title: '专利资源_专利转让_专利交易-中细软专利超市',
      meta: [{
          name: 'description',
          content: '中细软专利超市拥有大量发明专利,外观专利,实用新型专利资源,中细软专业顾问为您提供一对一贴心服务,办理专利转让,专利交易就到中细软专利超市.'
      },{
          name: 'keywords',
          content: '专利资源,专利转让,专利交易,中细软专利超市'
      }]
    }
  },
  data () {
    return {
      searchType: '',
      patentCurrent: '',
      patentPlace: '',
      search: '',
      status: '',
      type: '',
      price: '',
      isAdvisory: false,
      isSuc: false,
      mobileA: '',
      isMAErr: false,
      token: cookies.get('token'),
      curPatentInfo: null,
      footLink: false
    }
  },
  created(){
      var query = this.$route.query;
      this.searchType = query.searchType;
      if(query.searchType == 'keywords'){
          this.patentCurrent = '关键词';
          this.patentPlace = '专利关键词（多个词请用小写;隔开）';
      }else{
          this.patentCurrent = this.patentPlace = '专利申请号';
      }
      if(query.search != undefined){
          this.search = query.search;
      }
      if(query.status != undefined){
          this.status = query.status;
      }
      if(query.type != undefined){
      this.type = query.type;
      }
      if(query.price != undefined){
          this.price = query.price;
      }
  },
  computed: {
    patent(){
        var patent = this.$store.state.patent.patent;
        return patent != null ? patent.patent : null;
    },
    collect(){
        var patent = this.$store.state.patent.patent;
        return patent != null ? patent.collect : [];
    },
    needs(){
        var needs = this.$store.state.patent.needs;
        return needs;
    },
    curPage(){
        return this.$store.state.current_page
    },
    lastPage(){
        return this.$store.state.last_page
    }
  },
  methods: {
    searchFn () {
      window.location.href = this.urlFun(this);
    },
    urlFun:function(query){
        var url = '/patent?searchType='+query.searchType;
        if(query.search != undefined && query.search != ''){
            url += '&search=' + query.search;
        }
        if(query.type != undefined && query.type != ''){
            url += '&type=' + query.type;
        }
        if(query.status != undefined && query.status != ''){
            url += '&status=' + query.status;
        }
        if(query.price != undefined && query.price != ''){
            url += '&price=' + query.price;
        }
        return url;
    },
    dropDownPatent: function(current){
        this.patentCurrent = current;
        if(current == '关键词'){
            this.patentPlace = '专利关键词（多个词请用小写;隔开）';
            this.searchType = 'keywords';
        }else{
            this.patentPlace = '专利申请号';
            this.searchType = 'reg_id';
        }
    },
    changePagesInfo: function(type,curPage){ // 页码更改操作
        var page = curPage;
        var _this = this;
        if(type == 'add'){
            page = curPage + 1;
        }else if(type == 'less'){
            page = curPage - 1;
        }
        var _this = this;
        var payload = {
            page,
            url: _this.urlFun(_this)
        }
        this.$store.dispatch(GET_PATENT_LIST, payload);
    },
    openLayer: function(item){
        this.curPatentInfo = item;
        this.isAdvisory = true;
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
    careHandle: function(type,info){
        var _this = this;
        var Api = api();
        if(this.token == undefined){
            location.href = '/login?goback='+ this.$route.fullPath;
        }else{
            Api.get('/user/index/care?type=cp&id='+info._source.p_id+'&action='+type+'&token='+_this.token).then(function(res){
                if(res.data.code == 200){
                    var payload = {
                        page: _this.curPage,
                        url: _this.urlFun(_this)
                    }
                    _this.$store.dispatch(GET_PATENT_LIST, payload);
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
                'reg_id': _this.curPatentInfo.reg_id,
                'name': _this.curPatentInfo.name,
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
.patent-resource{
    .patent-search{width: 100%;height: 159px; margin:0 auto;background: url("../assets/images/patent/zlzy.png") no-repeat 0 0;background-size: 100%;
        .content_ctt{width: 1190px;height: 100%;overflow: hidden;margin: 0 auto;
            .input-wrap{float: left; position: relative; width: 720px;height: 40px;margin: 30px auto 0;border-radius: 5px; background-color: #fff;border: 1px solid #fff;
                .gjc{ position: relative;box-sizing: border-box;padding-left: 10px;float: left;width: 130px;height: 40px;font-size: 14px;color: lighten($main, 20%);line-height: 40px;background: url(../assets/images/xiasanjiao2.png) no-repeat 100px 16px;cursor: pointer;z-index: 20;background-color: #fff;
                    .xl1{display: none; position: absolute;top: 40px;left: -1px; width: 130px;height: 81px;border: 1px solid $border02;background-color: #fff;z-index: 10;overflow: hidden;
                        a{box-sizing: border-box; display: block;padding-left: 10px;color: $main;width:130px;height: 40px; background-color: #fff;font-size: 14px;padding-left: 20px;text-align: left;overflow: hidden;line-height: 40px;
                            &:hover{color: $red;}
                        }
                    }
                    &:hover .xl1{ display: block; }
                }
                input{ float: left; padding-left: 10px; width: 589px;height: 40px;border: none;border-left: 1px solid $border01; box-sizing: border-box;}
                a.find{position: absolute; width: 22px;height: 22px;right: 10px;top: 10px; background: url("../assets/images/patent/gjc-sousuo.png") no-repeat 0 0;}
            }
        }
        .btn-wrap{float: right; width: 160px;height: 40px;overflow: hidden;margin-top: 30px;
            .btn-cs{display: block;box-sizing: border-box;width: 100%;height: 100%;border: 1px solid #fff;border-radius: 5px;text-align: center;line-height: 40px;color: #fff;}
        }
        .select-wrap{clear: both;width: 620px;height: 40px;padding-top: 20px;
            select{float: left; width: 200px;height: 40px;background-color: #fff;border-radius: 5px;margin-right: 10px; font-size: 14px;color: lighten($main, 20%);
                &:nth-child(3){margin-right: 0px;}
            }

        }
    }
    .content2{width: 100%;margin: 0 auto;clear: both;padding-bottom: 50px; background-color: #fff;
        .content2_ctt{width: 1190px;margin: 0 auto;
            .content2_left{float: left; width: 900px;
                .title{font-size: 14px;color: #999999;line-height: 60px;}
                .page{float: right;width: 70px;height: 30px;margin-top: 20px;font-size: 0px;
                    a{display: inline-block;box-sizing: border-box; width: 30px;height: 30px;border: 1px solid $border01;border-radius: 5px;}
                    a.prev-none{background: url("../assets/images/patent/prev-none.png") no-repeat 10px 8px;margin-right: 10px; }
                    a.prev{background: url("../assets/images/patent/prev.png") no-repeat 10px 8px;margin-right: 10px; }
                    a.next-none{background: url("../assets/images/patent/next-none.png") no-repeat 10px 8px;}
                    a.next{background: url("../assets/images/patent/next.png") no-repeat 10px 8px;}
                }
            }
        }
    }
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
