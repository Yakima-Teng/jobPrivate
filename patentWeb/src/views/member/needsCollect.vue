<template>
<div class="patent-butler">
  <div class="w1190">
    <patent-nav  :navbox="navbox" ></patent-nav>
    <div class="show-main">
      <div class="top-list">
          <h2>收藏的需求</h2>
          <div class="list-wrap">
              <div :class="{'cur': tabIndex == 0}" @click="tabCutFun(0)"><a href="javascript:void(0);">全部</a><em>{{totalNum}}</em></div>
              <div :class="{'cur': tabIndex == 2}" @click="tabCutFun(2)"><a href="javascript:void(0);">加急</a></div>
              <div :class="{'cur': tabIndex == 3}" @click="tabCutFun(3)"><a href="javascript:void(0);">过期</a></div>
          </div>
      </div>
      <div class="input-wrap">
        <input type="text" placeholder="需求关键词" v-model="search">
        <a href="javascript:void(0);" class="find" @click="searchResult"></a>
      </div>
      <div class="list-box">
        <needs-list type="collect" :newsList="newsList" :sortType="sort" :status="status" @searchBytypeOrStatus="searchBytypeOrStatus" @deleteNeedsById="deleteNeedsById"  @sendPatent="sendPatent"></needs-list>
        <div class="list-bottom">
          <div class="page-box">
            <page-module v-if="$store.state.last_page > 1" @changePagesInfo="changePagesInfo"></page-module>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  <div class="mask" v-show="isSend || isSuc"></div>
    <!-- 给TA发专利 -->
    <div class="fasong" v-if="patentInfo != null" v-show="isSend">
        <h3>给TA发专利</h3>
        <div class="box">
            <img v-if="patentInfo.head_img != ''" :src="patentInfo.head_img" alt="">
            <img v-else src="../../assets/images/u26.jpg" alt="">
            <em>要求：</em>
            <span v-for="(tag, j) in patentInfo.tags" :key="j">{{tag}}</span>
            <p>已有<i>{{patentInfo.offer}}人</i>发专利</p>
        </div>
        <p class="fasong-title">{{patentInfo.content}}</p>
        <div class="excel">
            <label for="file">选择excel文件</label><input id="file" type="file" accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" @change="fileUpload" />
            <p>上传文件请按照模板规范填写，<a target="_blank" :href="'http://patent.d.gbicom.cn/user/patent/tpl?token='+token">下载excel模板</a></p>
        </div>
        <div class="qrfs-wrap">
            <p v-if="file && file.name.length">{{file.name}} 文件上传成功!</p>
            <a href="javascript:void(0);" class="btn" @click="submitSend(patentInfo.needs_id)">确认发送</a>
        </div>
        <a href="javascript:void(0);" class="close" @click="closeLayer"></a>
    </div>
    <!-- 发送成功 -->
    <div class="yes-no" :class="{'shibai':!isMatchSuc}" v-show="isSuc">
        <div class="suc-img"></div>
        <h3>{{promoteInfo.title}}</h3>
        <p class="p1">{{isMatchSuc ? promoteInfo.subTitle : promoteInfo.desc}}</p>
        <p v-if="isMatchSuc">{{promoteInfo.desc}}</p>
        <a href="javascript:void(0);" class="close" @click="closeLayer"></a> 
    </div>
</div>
</template>

<script>

import patentNav from '@/components/member/memberNav'
import pageModule from '@/components/pagination'
import needsList from '@/components/member/needsList'

import cookies from 'js-cookie'

import { api } from '@/assets/js/util.js'

export default {
  name: 'Needs',
  components: {
    patentNav,
    pageModule,
    needsList
  },
  data () {
    return {
      navbox: 'needs',
      search: '',
      totalNum: 0,
      newsList: [],
      sort: '',
      status: '',
      tabIndex: 0,
      patentInfo: null,
      isSend: false,
      isSuc: false,
      file: null,
      isMatchSuc: true,
      promoteInfo: {
          title: '发送成功',
          subTitle: '等待买家确认',
          desc: '如果符合买家要求，将第一时间与您联系'
      },
      token: cookies.get('token')
    }
  },
  created(){
    var url = '/user/needs/collect?token='+this.token;
    this.dataFun(url);
  },
  methods: {
    dataFun(url){
      var Api = api();
      var _this = this;
      Api.get(url).then(res => {
        if(res.data.code == 200){
          _this.totalNum = res.data.needs.total;
          _this.newsList = res.data.needs.list;
          _this.$store.commit('jumpHandle', res.data.needs.page);
          _this.$store.commit('changeLastPage', res.data.needs.totalPage);
        }
      });
    },
    tabCutFun: function(index){
      this.tabIndex = index;
      var url = '/user/needs/collect?p=1&token='+this.token;
      if(index == 1){
        url += '&offer=1';
      }else if(index == 2){
        url += '&urgent=1';
      }else if(index == 3){
        url += '&expire=1';
      }
      this.dataFun(url);
    },
    searchBytypeOrStatus: function(type, status){ // 类别搜索
      this.sort = type;
      this.status = status;
      var url = '/user/needs/collect?p=1&token='+this.token;
      if(this.search != ''){
        url += '&search=' + this.search;
      }
      if(type != '' && type != '0'){
        url += '&type='+ type;
      }
      if(status != '' && status != '0'){
        url += '&status='+ status;
      }
      this.dataFun(url);
    },
    searchResult: function(){ // 关键字搜索
      var url = '/user/needs/collect?p=1&token='+this.token
      if(this.search != ''){
        url += '&search=' + this.search;
      }
      this.sort = '';
      this.status = '';
      this.dataFun(url);
    },
    sendPatent: function(info){
        this.patentInfo = info;
        this.isSend = true;
    },
    submitSend: function(id){
        var _this = this;
        var Api = api();
        var token = this.token;
        var formdata = new FormData();
        formdata.append('id', id);
        formdata.append('file', this.file);
        Api.postFile('/user/needs/offer?token='+token, formdata).then(function(res){
            if(res.data.code == 200){
                var promoteInfo = {
                    title: '发送成功',
                    subTitle: '等待买家确认',
                    desc: '如果符合买家要求，将第一时间与您联系'
                }
                var url = '/user/needs/collect?p='+_this.$store.state.current_page+'&token='+this.token;
                if(this.search != ''){
                  url += '&search=' + this.search;
                }
                if(type != '' && type != '0'){
                  url += '&type='+ type;
                }
                if(status != '' && status != '0'){
                  url += '&status='+ status;
                }
                _this.dataFun(url);
                _this.isMatchSuc = true;
            }else{
                var promoteInfo = {
                    title: '发送失败',
                    desc: res.data.msg
                }
                _this.isMatchSuc = false;
            }
            _this.promoteInfo = promoteInfo;
            _this.isSend = false;
            _this.isSuc = true;
            _this.file = null;
        });
    },
    closeLayer: function(){
        this.isSend = false;
        this.isSuc = false;
    },
    deleteNeedsById: function(id){
      var Api = api();
      var _this = this;
      var p = this.$store.state.current_page;
      var url = 'user/index/care?token='+this.token+'&type=cn&action=uncare&id='+id;
      Api.get(url).then(res => {
        if(res.data.code == 200){
          var url = '/user/needs/collect?p='+p+'&token='+this.token;
          if(_this.search != ''){
            url += '&search=' + _this.search;
          }
          if(_this.type != '' && _this.type != '0'){
            url += '&type='+ _this.type;
          }
          if(_this.status != '' && _this.status != '0'){
            url += '&status='+ _this.status;
          }
          _this.dataFun(url);
        }
      });
    },
    fileUpload: function(e){
        var file = e.target.files[0];
        this.file = file;
    },
    changePagesInfo: function(type,curPage){ // 页码更改操作
        var page = curPage;
        var _this = this;
        if(type == 'add'){
            page = curPage + 1;
        }else if(type == 'less'){
            page = curPage - 1;
        }
        var url = '/user/needs/care?p='+page+'&token='+this.token;
        if(_this.search != ''){
          url += '&search=' + _this.search;
        }
        if(_this.type != '' && _this.type != '0'){
          url += '&type='+ _this.type;
        }
        if(_this.status != '' && _this.status != '0'){
          url += '&status='+ _this.status;
        }
        _this.dataFun(url);
    }
  }
}
</script>


<style lang="scss" scoped>
input[type=file]{ position: absolute; opacity: 0; top: 0; left: 0; }
$white: #fff;
$main: #333;
$red: #cc0000;
$green: #37b8cf;
$border01: #ccc;
$border02: #ddd;


.patent-butler{
  padding:30px 0;
  background-color: #f2f3f4;
  .w1190{
    overflow: hidden;
  }
}
.show-main{
  background-color: $white;
  padding:20px; margin-left: 180px;
  .top-list{
    width: 100%;overflow: hidden;
    h2{float: left; font-size: 18px;color: #333333;line-height: 40px;text-align: center;margin-right: 30px;}
    .list-wrap{width: 524px; float: left;overflow: hidden;}
    .list-wrap div{float: left;box-sizing: border-box;padding-left: 10px; height: 40px;line-height: 40px;margin-right: 20px;}
    .list-wrap div:last-of-type{margin-right: 0px;}
    .list-wrap div a{color:#666666;font-size: 14px; }
    .list-wrap div em{ margin-left: 10px; display: inline-block; padding:0 6px; box-sizing: border-box; background-color: #bdc4cc;text-align: center;line-height: 18px;border-radius: 10px;color: #fff;margin-top: 10px;font-size: 12px;}
    .list-wrap div.cur{border-bottom: 2px solid #cc0000;}
    .list-wrap div.cur a{color: #cc0000;}
    .list-wrap div.cur em{background-color: #cc0000;}
    }
    .input-wrap{ position: relative; width: 320px;height: 40px; margin-top: 20px; border-radius: 5px; background-color: #fff;border: 1px solid #dddddd;box-sizing: border-box;
      input{ float: left; width: 318px;height: 38px;border: none;box-sizing: border-box;padding-left: 10px;border-radius: 5px;}
      .find{position: absolute; width: 22px;height: 22px;right: 10px;top: 10px; background: url("../../assets/images/member/find.png") no-repeat 0 0;}
    }
    .list-box{
     .list-bottom{
      overflow: hidden;
      .page-box{
        overflow: hidden;
      }
      .btm-f-l{
        float: left;
        width: 50%;
        input[type=checkbox]{float: left;margin-top: 27px;}
        a{float: left;width: 97px;height: 30px;text-align: center;line-height: 30px;margin-left: 14px;border: 1px solid #cccccc;border-radius: 5px;margin-top: 20px;color: #666666;}
        .cj{width: 139px;margin-left: 10px;}
        span{float: left;margin-top: 20px;color: #666666;font-size: 14px;line-height: 30px;margin-left: 10px;}
        em{padding-left: 4px;}
        
        }

    }
  }
}
.fasong,.yes-no{
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: #fff;
    transform: translate(-50%, -50%);
    border: 1px solid #d7d7d7;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #d7d7d7;
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    z-index: 9;
}
.fasong{width: 550px;height: 420px;}
.fasong h3{font-size: 18px;color: #333;line-height: 30px;}
.fasong .box{width: 100%;margin-top: 20px;overflow: hidden;}
.fasong .box img{float: left;margin-right: 10px;width: 40px; height: 40px; border-radius: 50%;}
.fasong .box em{float: left; font-size: 12px;color: #999;line-height: 24px;margin-top: 8px;}
.fasong .box span{float: left;padding-left:5px; padding-right:5px;height: 24px;box-sizing: border-box;border: 1px solid #ddd;font-size:12px;text-align: center;line-height: 22px;color: #999;border-radius: 5px;margin-right: 10px;margin-top: 8px;}
.fasong .box p{float:right;font-size: 14px;color: #333;line-height: 24px;margin-top: 8px;}
.fasong .box p i{color: #cc0000;}
.fasong .fasong-title{clear: both; margin-top: 10px;padding: 20px;background-color: #f2f3f4;border-radius: 5px;font-size: 14px;line-height: 20px;color: #333;}
.fasong .excel{width: 100%;margin-top: 20px;overflow: hidden;margin-bottom: 20px;}
.fasong .excel label{float: left;box-sizing: border-box;border: 1px solid #ddd;border-radius: 5px;text-align: center;line-height: 40px;width: 160px;height: 40px;font-size: 14px;color: #666;margin-right: 10px; }
.fasong .excel p{font-size: 14px;color: #666;float: left;line-height: 40px;}
.fasong .excel p a{color: #cc0000;}
.fasong .qrfs-wrap{width: 100%;padding-top: 20px;border-top: 1px solid #ddd;}
.fasong .qrfs-wrap p{float: left; font-size: 14px;color: #999;line-height: 40px;}
.fasong .qrfs-wrap .btn{float: right;width: 140px;height: 40px;line-height: 40px;text-align: center;border-radius: 5px;font-size: 14px;color: #fff;background-color: #cc0000;}
/* 发送成功 发送失败 */
.yes-no{width: 360px;height: 210px;}
.yes-no .suc-img{
    margin: 10px auto 0;
    width: 50px;
    height: 50px;
    background: url(../../assets/images/suc.png) no-repeat 0 0 #cccccc;
    border-radius: 50%;}
.yes-no h3{font-size: 18px;color: #333;line-height: 30px;text-align: center;margin-top: 20px;}
.yes-no p{width:260px; margin:auto; font-size: 14px; line-height: 20px; color: #666;text-align: center;}
.yes-no p.p1{margin-top: 10px;}
.close {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 16px;
    height: 16px;
    background: url(../../assets/images/close.png) no-repeat 0 0;
    background-size: 16px 16px;
}
.shibai .suc-img{background-image: url("../../assets/images/err.png");}
</style>
