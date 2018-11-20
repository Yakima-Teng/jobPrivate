<template>
  <article>
    <Top></Top>
    <HeadModel></HeadModel>
    <div  class="need-hall">
    <section class="w1190">
      <div class="content_left">
        <div class="left_top">
            <h3 class="title">找需求</h3>
            <div class="ipt">
                <input type="text" placeholder="需求关键词" v-model="search">
            </div>
            <div class="select-wrap">
                <select v-model="type">
                    <option value="">专利类型：不限</option>
                    <option value="105">专利类型：发明</option>
                    <option value="106">专利类型：实用新型</option>
                    <option value="107">专利类型：外观</option>
                </select>
                <select v-model="status">
                    <option value="">下证状态：不限</option>
                    <option value="98">下证状态：已下证</option>
                    <option value="99">下证状态：未缴费</option>
                </select>
            </div>
            <p class="zj"><label><input type="checkbox" value="3" v-model="nearday" />最近三天发布</label></p>
            <router-link class="btn" target="_blank" :to="{path: '/hall',query: {'searchType':'keywords', 'search':search, 'type':type, 'status': status, 'nearday': nearday.toString()}}">搜索</router-link>
        </div>
        <div class="left_middle">
            <div class="left">
                <p class="first"><i></i><span>我有需求</span></p>
                <p>现在发布需求</p>
                <p>将有<span>{{needs != null ? needs.saleCount : 0 }}</span>位卖家会看到</p>
            </div>
            <div class="right">
                <router-link target="_blank" class="btn" to="/member/needs/release">立即发布</router-link>
            </div>
        </div>
        <div class="left_footer">
            <h3>还在满世界找需求？</h3>
            <p>提交你的专利</p>
            <p>坐等需求自己找上门</p>
            <img src="../assets/images/hall/zhaoxq.jpg" alt="">
            <router-link target="_blank" class="btn" to="/matchN">开始匹配</router-link>
        </div>
      </div>
      <div class="content-right">
        <h3 class="search">找到专利需求{{needs != null ? needs.total : 0}}条</h3>
        <div class="list-box" v-if="needs != null">
          <div class="right-box" v-for="(item, index) in needs.list" :key="index">
                <div class="ji" v-if="item.urgent == 1">急</div>
              <div class="box-left">
                  <img v-if="item.head_img != ''" :src="item.head_img" alt="">
                  <img v-else src="../assets/images/u26.jpg" alt="">
                  <p>{{item.nick}}</p>
              </div>
              <div class="box-right">
                  <div class="r-box-left">
                      <p>{{item.content}}</p>
                      <div class="yaoqiu">
                          <em>要求：</em>
                          <span v-for="(tag, j) in item.tags" :key="j">{{tag}}</span>
                      </div>
                      <div class="yxq">有效期{{item.expire}}</div>
                  </div>
                  <div class="r-box-right">
                      <a href="javascript:void(0);" class="coll" v-if="collect.indexOf(item.needs_id) == -1" @click="careHandle('care', item)">收藏</a>
                      <a href="javascript:void(0);" class="coll not" v-else @click="careHandle('uncare', item)">已收藏</a>
                      <a href="javascript:void(0);" class="give" @click="sendPatent(item)" v-if="item.is_offer">给TA发专利</a>
                      <a href="javascript:void(0);" class="give cur" v-else>已发过专利</a>
                      <p>有{{item.offer}}人发专利</p>
                  </div>
              </div>
          </div>
        </div>
        <page v-if="$store.state.last_page > 1" @changePagesInfo="changePagesInfo" ></page>
      </div>
    </section>
    </div>
    <FootModel :isLink="footLink"></FootModel>
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
            <p>上传文件请按照模板规范填写，<a target="_blank" :href="'http://patent.d.patent.local/user/patent/tpl?token='+$store.state.token">下载excel模板</a></p>
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

  </article>
</template>

<script>
import Top from '@/components/top.vue'
import HeadModel from '@/components/header.vue'
import FootModel from '@/components/footer.vue'

import page from '@/components/pagination'

import { GET_NEEDS_LIST } from '@/components/patent/module'

import { api } from '@/assets/js/util.js'

export default {
    name: 'Hall',
    asyncData({ store, route }){
        var url = '/needs?p=1';
        var query = route.query;
        if(query.search != undefined && query.search != ''){
            url += '&search=' + query.search;
        }
        if(query.type != undefined && query.type != ''){
            url += '&type=' + query.type;
        }
        if(query.status != undefined && query.status != ''){
            url += '&money_status=' + query.status;
        }
        if(query.nearday != undefined && query.nearday == 3){
            url += '&nearday=' + query.nearday;
        }
        return Promise.all([store.dispatch(GET_NEEDS_LIST, {page:1, url:url})])
    },
    mounted(){ // 此处数据不会被ssr读取到
        var _this = this;
        this.$store.dispatch(GET_NEEDS_LIST,{page: 1, url: _this.urlFun(_this,1)});
    },
    components: {
        Top,
        HeadModel,
        FootModel,
        page
    },
    data () {
        return {
            search: '',
            status: '',
            type: '',
            nearday: [],
            patentInfo: null,
            isSend: false,
            isSuc: false,
            file: null,
            isMatchSuc: true,
            footLink: false,
            token: this.$store.state.token,
            promoteInfo: {
                title: '发送成功',
                subTitle: '等待买家确认',
                desc: '如果符合买家要求，将第一时间与您联系'
            }
        }
    },
    created(){
        var query = this.$route.query;
        if(query.search != undefined){
            this.search = query.search;
        }
        if(query.status != undefined){
            this.status = query.status;
        }
        if(query.type != undefined){
            this.type = query.type;
        }
        if(query.nearday != undefined){
            this.nearday = [];
        }
    },
    computed: {
        needs(){
            var needs = this.$store.state.patent.needs;
            return needs != null ? needs.needs : null;;
        },
        collect(){
            var needs = this.$store.state.patent.needs;
            return needs != null ? needs.collect : [];
        },
        curPage(){
            return this.$store.state.current_page
        }
    },
    methods: {
        urlFun:function(query,p){
            var url = '/needs?p='+p;
            if(query.search != undefined && query.search != ''){
                url += '&search=' + query.search;
            }
            if(query.type != undefined && query.type != ''){
                url += '&type=' + query.type;
            }
            if(query.status != undefined && query.status != ''){
                url += '&money_status=' + query.status;
            }
            if(query.nearday != undefined && query.nearday == 3){
                url += '&nearday=' + query.nearday;
            }
            return url;
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
                url: _this.urlFun(_this,page)
            }
            this.$store.dispatch(GET_NEEDS_LIST, payload);
        },
        sendPatent: function(info){
            this.patentInfo = info;
            this.isSend = true;
        },
        submitSend: function(id){
            var _this = this;
            var Api = api();
            var token = this.$store.state.token;
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
                    var payload = {
                        page: _this.curPage,
                        url: _this.urlFun(_this)
                    }
                    _this.$store.dispatch(GET_NEEDS_LIST, payload);
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
                Api.get('/user/index/care?type=cn&id='+info.needs_id+'&action='+type+'&token='+_this.token).then(function(res){
                    if(res.data.code == 200){
                        var payload = {
                            page: _this.curPage,
                            url: _this.urlFun(_this)
                        }
                        _this.$store.dispatch(GET_NEEDS_LIST, payload);
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
input[type=file]{ position: absolute; opacity: 0; top: 0; left: 0; }
.w1190{
  overflow: hidden;
}
.need-hall{
  padding-bottom:40px;
  background-color: #f2f3f4;
  .content_left{float: left; width: 280px;margin-top: 20px;}
  .content_left{
    .left_top{
      box-sizing: border-box; width: 100%;height: 340px;padding-left: 20px;padding-right: 20px; background: -webkit-linear-gradient(left top,#009999,#009966);overflow: hidden;
        .title{font-size: 18px;color: #fff;margin-top: 20px;text-align: center;}
        .ipt{position: relative; width: 240px;height: 40px;margin-top: 10px;}
        .ipt input{width: 100%;height: 100%;padding-left: 10px;border-radius: 5px;border: none; box-sizing: border-box;}
        .select-wrap{width: 240px;padding-top: 20px;}
        .select-wrap select{display: block; width: 240px;height: 40px;border-radius: 5px;background-color: #fff;font-size: 14px;color: #666666;}
        .select-wrap select:nth-child(2){margin-top: 10px;}
        .zj{position: relative;margin-top: 22px;color: #fff;}
        .zj input{ width: 16px; height: 16px; margin-right: 8px; vertical-align: middle;}
        .zj label{display: inline-block; font-size: 14px;line-height: 20px; color: #fff;}
        .btn{display: block;box-sizing: border-box;border: 1px solid #fff;border-radius: 5px; width: 240px;height: 40px;margin-top: 22px;font-size: 14px;text-align: center;line-height: 40px;color: #fff;}
      }
      .left_middle{
        box-sizing: border-box; background-color: #fff; border-left: 1px solid #dddddd; border-right: 1px solid #dddddd;border-bottom: 1px solid #dddddd; width: 100%;height: 120px;padding-left: 20px;padding-right: 20px;overflow: hidden;
        .left{float: left;width: 150px;}
        .left .first{ font-size: 0px;color: #009999;margin-top: 20px;overflow: hidden;}
        .left .first i{float: left;;box-sizing: border-box; width: 30px;height: 30px;border:2px solid #009999;border-radius: 50%;background: url("../assets/images/hall/buld.png") no-repeat 5px 2px; margin-right: 10px;}
        .left .first span{float: left; font-size: 14px;color:#009999;line-height: 30px;}
        .left p:nth-child(2){margin-top: 10px; line-height: 20px;}
        .left p:nth-child(2),.left p:nth-child(3){clear: both; font-size: 12px;color: #333333;}
        .left p:nth-child(3){ line-height: 22px; }
        .left p:nth-child(3) span{font-size: 18px;}
        .right{float: right; width: 80px;height: 40px;}
        .right .btn{display: block;width: 80px;height: 40px;box-sizing: border-box;border: 1px solid #009999;text-align: center;line-height: 40px;color: #009999;border-radius: 5px;margin-top: 60px;}
      }
      .left_footer{
        clear: both; width: 280px;height: 305px;box-sizing: border-box;border: 1px solid #dddddd; margin-top: 10px;background-color: #fff;
        h3{font-size: 18px;color: #009999;margin-top: 30px;text-align: center;}
        p{color: #333333;font-size: 12px;text-align: center;line-height: 20px;}
        p:nth-child(2){margin-top: 10px;}
        img{display: block; width: 86px;height: 86px; margin:15px auto 0;}
        .btn{display: block;box-sizing: border-box;border: 1px solid #009999;border-radius: 5px; width: 120px;height: 40px;margin: 20px auto 0;text-align: center;line-height: 40px;color: #009999;font-size:14px; }
      }
    }
  .content-right{float: right; width: 880px;margin-left: 30px;
      h3.search{font-size: 14px;color: #999999;line-height: 70px; }
      .right-box{
        position: relative; box-sizing: border-box; overflow: hidden;
        width: 880px;  margin-bottom: 10px;
        border-bottom:1px solid #dddddd;  background-color: #fff;
        .ji{ 
            position: absolute; text-align: center;
            left: 0;top: 0;width: 24px;height: 24px; font-size: 12px; line-height: 24px;
            background-color: #ff9966;color: #fff;
        }
        .box-left{
          position: relative; float: left; box-sizing: border-box; width: 90px; height: 100%;  padding-left: 20px; padding-top: 20px; padding-bottom: 20px;
          img{
            width: 50px;height: 50px; border-radius: 50%;
          }
          p{font-size: 14px; line-height: 20px; color: #999999;margin-top: 10px;text-align: left;}
        }
        .box-right{
          float: left;box-sizing: border-box; width: 790px;height: 100%; padding-left: 20px;padding-top: 20px;  padding-right: 20px; overflow: hidden; border-left:1px dashed #dddddd; padding-bottom: 20px;
          .r-box-left{float: left;width: 470px;height: 100%;overflow: hidden;}
          }
          .r-box-right{
            float: right;font-size: 0px;
            a:nth-child(1){
              display: inline-block;width: 70px;height: 30px;box-sizing: border-box;padding-left: 32px; font-size: 14px;color: #666666;margin-right: 10px;line-height: 30px;background: url("../assets/images/u278.png") no-repeat 10px 8px;
              &.not{width: 85px;background-image: url("../assets/images/u287.png");background-color: #cc0000;border-radius: 5px;color: #fff;}
              }
            a:nth-child(2){
              display: inline-block;width: 120px;height: 30px;box-sizing: border-box;color: #009999;border-radius: 5px;line-height: 30px;padding-left: 34px;border: 1px solid #009999;font-size: 14px;background:url("../assets/images/hall/give.png") no-repeat 8px 4px;
              &.cur{background-image:url("../assets/images/hall/give02.png");background-color: #f2f3f4;border: none;color: #999999; }
              }
            p{font-size: 12px;color: #999999;margin-top: 10px;text-align: right;}
          }
      }
      .r-box-left{
        float: left;width: 470px;height: 100%; overflow: hidden;
        p{font-size: 14px;color: #333333; line-height: 20px;}
        .yaoqiu{
            float: left;  margin-top: 20px; margin-right: 37px; width: 250px;
            em{float: left; font-size: 12px;color: #999999;width: 45px; line-height: 24px;}
            span{float: left;box-sizing: border-box; width: 59px;height: 24px;border: 1px solid #dddddd;border-radius: 5px; text-align: center;line-height: 22px; font-size: 12px;color: #999999;margin-right: 10px;}
            span:nth-child(4){margin-right: 0;}
            }
        .yxq{float: left;margin-top: 20px;font-size: 12px;color: #999999;line-height: 20px;padding-left: 24px;background: url("../assets/images/hall/djs.png") no-repeat 0 2px;}
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
