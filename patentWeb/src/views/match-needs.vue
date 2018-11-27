<template>
  <div class="page-match">
    <Top></Top>
    <HeadModel></HeadModel>
    <div class="content">
        <div class="w1190 main">
            <Match type="needs" @needsList="needsList"></Match>
            <Matching :process="process" type="needs" @processChange="processChange" @changePagesInfo="changePagesInfo" @careHandle="careHandle" @sendPatent="sendPatent"></Matching>
        </div>
    </div>
    <!-- 最新政策结束 -->
    <FootModel :isLink="isLink"></FootModel>
    <div class="mask" v-show="isSend || isSuc"></div>
    <!-- 给TA发专利 -->
    <div class="fasong" v-if="patentInfo != null" v-show="isSend">
        <h3>给TA发专利</h3>
        <div class="box">
            <img v-if="patentInfo.head_img != ''" :src="patentInfo.head_img" alt="">
            <img v-else src="../assets/images/u26.jpg" alt="">
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
import Top from '@/components/top.vue';
import HeadModel from '@/components/header.vue';
import FootModel from '@/components/footer.vue';

import Match from '@/components/match/match.vue';
import Matching from '@/components/match/matching.vue';

import cookies from 'js-cookie'

import {GET_MORE_NEEDS_LIST } from '@/components/patent/module'

import { api } from '@/assets/js/util.js'

export default {
  name: 'Index',
  components: {
    Top,
    HeadModel,
    FootModel,
    Match,
    Matching
  },
  data () {
    return {
        process: 'start',
        url: '',
        isLink: false,
        page: 1,
        patentInfo: null,
        isSend: false,
        isSuc: false,
        token: cookies.get('token'),
        file: null,
        isMatchSuc: true,
        promoteInfo: {
            title: '发送成功',
            subTitle: '等待买家确认',
            desc: '如果符合买家要求，将第一时间与您联系'
        }
    }
  },
  metaInfo () {
    return {
      title: '找需求_卖专利_专利转让_专利交易-中细软专利超市',
      meta: [{
          name: 'description',
          content: '中细软专利超市拥有大量的专利买家资源,能够迅速根据您的专利为您匹配买家,找需求,卖专利,专利转让,专利交易就到中细软专利超市,大品牌值得信赖.'
      },{
          name: 'keywords',
          content: '找需求,卖专利,专利转让,专利交易,中细软专利超市'
      }]
    }
  },
  methods: {
    needsList: function(url){
      this.process = 'processing';
      this.url = url;
      this.$store.dispatch(GET_MORE_NEEDS_LIST, {'page_size': 6, 'url': url});
    },
    processChange: function(process){
      this.process = process;
    },
    changePagesInfo: function(){
      var p = parseInt(this.page) + 1;
      this.page = p;
      var size = p * 6;
      this.$store.dispatch(GET_MORE_NEEDS_LIST, {'page_size': size, 'url': this.url});
    },
    sendPatent: function(info){
        if(this.token == undefined){
            location.href = '/login?goback='+ this.$route.fullPath;
        }else{
            this.patentInfo = info;
            this.isSend = true;
        }
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
                _this.isMatchSuc = true;
                var size = parseInt(_this.page) * 6;
                _this.$store.dispatch(GET_MORE_NEEDS_LIST, {'page_size': size, 'url': _this.url});
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
        });
    },
    closeLayer: function(){
        this.isSend = false;
        this.isSuc = false;
    },
    careHandle: function(type,info){
        var _this = this;
        var Api = api();
        if(this.token == undefined){
            location.href = '/login?goback='+ this.$route.fullPath;
        }else{
            var data = {
                'type': 'cn',
                'id': info.needs_id,
                'action': type
            }
            Api.post('/user/index/care?token='+_this.token,data).then(function(res){
                if(res.data.code == 200){
                    var size = parseInt(_this.page) * 6;
                    _this.$store.dispatch(GET_MORE_NEEDS_LIST, {'page_size': size, 'url': _this.url});
                }
            });
        }
    },
    fileUpload: function(e){
        var file = e.target.files[0];
        this.file = file;
    }
  }
}
</script>

<style lang="scss" scoped>
$main: #333;
$red: #cc0000;
$green: #37b8cf;
$border01: #ccc;
$border02: #ddd;
input[type=file]{ position: absolute; opacity: 0; top: 0; left: 0; }
.page-match .content{
    width: 100%;
    background: url(../assets/images/match/p-banner.jpg) center bottom no-repeat #0d273d;
    .main{
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 40px 0 67px;
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
    background: url(../assets/images/suc.png) no-repeat 0 0 #cccccc;
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
    background: url(../assets/images/close.png) no-repeat 0 0;
    background-size: 16px 16px;
}
.shibai .suc-img{background-image: url("../assets/images/err.png");}
</style>
