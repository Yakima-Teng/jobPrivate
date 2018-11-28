<template>
  <div class="page-index">
    <Top></Top>
    <HeadModel></HeadModel>
    <!-- banner -->
    <div class="banner">
        <h2>汇聚海量资源  助力创新发展</h2>
        <div class="bn_title">
            <p><i class="icon icon-bianji"></i>已发布专利需求<strong>{{needs != null ? needs.total : 8325}}</strong>条</p>
            <p class="last"><i class="icon icon-geren"></i>已有注册卖家<strong>{{ user != null ? user.saleCount : 302}}</strong>位</p>
        </div>
        <div class="w1190 ban_ctt">
            <div class="banner_left">
                <div class="tab">
                    <a href="javascript:void(0);" class="zlzy" :class="{'cur' : tabIndex == 0 }" @click="tabCut(0)">专利资源  <em>已收录：</em><span>{{ patent != null ? patent.total :  2383127}}件</span></a>
                    <a href="javascript:void(0);" class="zlxq" :class="{'cur' : tabIndex == 1 }" @click="tabCut(1)">专利需求</a>
                    <a href="javascript:void(0);" :class="{'cur' : tabIndex == 2 }" @click="tabCut(2)">地区政策</a>
                </div>
                <div class="qiehuan" v-show="tabIndex == 0">
                    <div class="ipt">
                        <div class="gjc">
                            {{patentCurrent}}
                            <div class="xl1">
                                <a href="javascript:void(0);" class="a1" @click="dropDownPatent('关键词')">关键词</a>
                                <a href="javascript:void(0);" class="a2" @click="dropDownPatent('专利申请号')">专利申请号</a>
                            </div>
                        </div>
                        <input type="text" :placeholder="patentPlace" v-model="patentInp">
                        <router-link tag="a" target="_blank" :to="{path: '/patent',query: {'searchType':searchType, 'search':patentInp, 'type':patentType, 'status': patentStatus.toString()}}"><span>专利搜索</span></router-link>
                    </div>
                    <div class="check">
                        <div class="zllx">
                            <span>专利类型：</span>
                            <label><input type="radio" value="105" v-model="patentType">发明</label>
                            <label><input type="radio" value="106" v-model="patentType">实用新型</label>
                            <label class="last"><input type="radio" value="107" v-model="patentType">外观</label>
                        </div>
                        <div class="xzzt">
                            <span>下证状态：</span>
                            <label><input type="checkbox" value="98" v-model="patentStatus">已下证</label>
                            <label class="last"><input type="checkbox" value="99" v-model="patentStatus">未缴费</label>
                        </div>
                    </div>
                    <div class="hot">
                        <span>热门关键词：</span>
                        <router-link tag="a" class="em" target="_blank" to="/patent?searchType=keywords&search=软件">软件</router-link>
                        <router-link tag="a" class="em" target="_blank" to="/patent?searchType=keywords&search=医疗">医疗</router-link>
                        <router-link tag="a" class="em" target="_blank" to="/patent?searchType=keywords&search=大数据">大数据</router-link>
                        <router-link tag="a" class="em" target="_blank" to="/patent?searchType=keywords&search=化肥">化肥</router-link>
                        <router-link tag="a" class="em" target="_blank" to="/patent?searchType=keywords&search=食品">食品</router-link>
                        <router-link tag="a" class="em" target="_blank" to="/patent?searchType=keywords&search=电缆">电缆</router-link>
                        <router-link tag="a" class="em" target="_blank" to="/patent?searchType=keywords&search=智能">智能</router-link>
                        <router-link tag="a" class="em last" target="_blank" to="/patent?searchType=keywords&search=工程">工程</router-link>
                    </div>
                </div>
                <div class="qiehuan" v-show="tabIndex == 1">
                    <div class="ipt">
                        <input type="text" placeholder="需求关键词" v-model="needsInp">
                        <router-link tag="a" target="_blank" :to="{path: '/hall',query: {'search':needsInp, 'type':needsType, 'status': needsStatus.toString()}}"><span>需求搜索</span></router-link>
                    </div>
                    <div class="check">
                        <div class="zllx">
                            <span>专利类型：</span>
                            <label><input type="radio" value="105" v-model="needsType">发明</label>
                            <label><input type="radio" value="106" v-model="needsType">实用新型</label>
                            <label class="last"><input type="radio" value="107" v-model="needsType">外观</label>
                        </div>
                        <div class="xzzt">
                            <span>下证状态：</span>
                            <label><input type="checkbox" value="98" v-model="needsStatus">已下证</label>
                            <label class="last"><input type="checkbox" value="99" v-model="needsStatus">未缴费</label>
                        </div>
                    </div>
                </div>
                <div class="qiehuan" v-show="tabIndex == 2">
                        <div class="ipt">
                            <input type="text" placeholder="相关政策关键词" v-model="policyInp">
                            <router-link tag="a" target="_blank" :to="'/policy?search='+policyInp"><span>政策搜索</span></router-link>
                        </div>
                        <div class="hot" v-if="sortsList">
                            <router-link tag="a" class="em" target="_blank" :to="'/policy?search='+sort.name" v-for="(sort, index) in sortsList.list" :key="index">{{sort.name}}</router-link>
                        </div>
                </div>
            </div>
            <div class="banner_right">
                <div class="ban-r-top">
                    <img v-if="isLogin && user != null" :src="user.user.head_img" alt=""><img v-else src="../assets/images/u26.jpg" alt="">
                    <div class="denglu">
                        <p v-if="!isLogin">Hi！您好</p>
                        <p v-if="isLogin && user != null">{{user.user.nick != '' ? user.user.nick : user.user.mobile}},欢迎回来！</p>
                        <p class="p2" v-if="!isLogin || user== null">还未登录，<a href="/login?goback=/">请登录</a></p>
                        <p class="p2" v-else><router-link target="_blank" to="/member/patent">会员中心</router-link>&nbsp;&nbsp;<a href="javascript:void(0)" @click="logout">退出</a></p>
                    </div>
                    <router-link tag="a" target="_blank" class="btn1" to="/member/patent/P">出售专利</router-link><router-link tag="a" target="_blank" class="btn2" to="/member/needs/release">发布需求</router-link>
                </div>
                <div class="ban-r-bottom">
                    <div class="r_ctt1">
                        <h3>{{ isLogin && user && user.pub.salePatent ? user.pub.salePatent : 0}}</h3>
                        <p>出售的专利</p>
                        <router-link tag="a" target="_blank" class="cloud" to="/member/patent"></router-link>
                    </div>
                    <div class="r_ctt2">
                        <h3>{{ isLogin && user && user.pub.collectPatent ? user.pub.collectPatent : 0}}</h3>
                        <p>收藏的专利</p>
                        <router-link tag="a" target="_blank" class="cloud" to="/member/patent/collect"></router-link>
                    </div>
                    <div class="r_ctt3">
                        <h3>{{ isLogin && user && user.pub.publishNeeds ? user.pub.publishNeeds : 0}}</h3>
                        <p>发布的需求</p>
                        <router-link tag="a" target="_blank" class="cloud" to="/member/needs"></router-link>
                    </div>
                    <div class="r_ctt4">
                        <h3>{{ isLogin && user && user.pub.collectNeeds ? user.pub.collectNeeds : 0}}</h3>
                        <p>收藏的需求</p>
                        <router-link tag="a" target="_blank" class="cloud" to="/member/needs/collect"></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- banner结束 -->
    <div class="content">
        <div class="w1190 content_ctt clearfix">
            <div class="ctt_box">
                <img src="../assets/images/index/content.png" alt="">
                <i class="mask1"></i>
                <div class="ctt_title">
                    <p class="p1">供求匹配</p>
                    <p class="p2">我有需求！我有专利！</p>
                    <p class="p3">智能一键匹配</p>
                </div>
                <div class="ul ul1">
                    <router-link tag="a" target="_blank" class="li1" to="/matchN">匹配需求</router-link>
                    <em></em>
                    <router-link tag="a" target="_blank" class="li2" to="/matchP">匹配专利</router-link>
                    <div class="sanjiao"></div>
                </div>
            </div>
            <div class="ctt_box">
                <img src="../assets/images/index/content_01.png" alt="">
                <i class="mask2"></i>
                <div class="ctt_title">
                    <p class="p1">专利管家</p>
                    <p class="p2">专利管理如此简单</p>
                    <p class="p3">发布、下载、更新</p>
                </div>
                <div class="ul ul2">
                    <router-link tag="a" target="_blank" class="li1" to="/member/patent">管理专利</router-link>
                    <em></em>
                    <router-link tag="a" target="_blank" class="li2" to="/member/patent/p">更新专利</router-link>
                </div>
            </div>
            <div class="ctt_box">
                <img src="../assets/images/index/content_02.png" alt="">
                <i class="mask3"></i>
                <div class="ctt_title">
                    <p class="p1">专利名片</p>
                    <p class="p2">还在发excel吗?</p>
                    <p class="p3">一张名片全搞定，在线更新，方便快捷</p>
                </div>
                <div class="ul ul3">
                    <router-link tag="a" target="_blank" class="li1" to="/member/myCard/pc">新建名片</router-link>
                    <em></em>
                    <router-link tag="a" target="_blank" class="li2" to="/member/myCard/pc">名片管理</router-link>
                </div>
            </div>
            <div class="last ctt_box">
                <img src="../assets/images/index/content_03.png" alt="">
                <i class="mask4"></i>
                <div class="ctt_title">
                    <p class="p1">专利推荐函</p>
                    <p class="p2">给客户推荐专利?</p>
                    <p class="p3">一键生成，发送形式多样（二维码、ppt）</p>
                </div>
                <div class="ul ul4">
                    <router-link tag="a" target="_blank" class="li1" to="/member/groom/edit">新建推荐函</router-link>
                    <em></em>
                    <router-link tag="a" target="_blank" class="li2" to="/member/groom">推荐函管理</router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="content2">
      <div class="w1190 content2_ctt">
        <div class="content2_left">
          <h3 class="news-sl"><router-link class="p-sl" tag="a" target="_blank" to="/patent">更多专利</router-link>最新收录专利</h3>
          <List v-if="patent != null" type="index" :list="patent" :collect="collect" @careHandle="careHandle"></List>
          <router-link tag="a" target="_blank" to="/patent" class="btn">更多专利</router-link>
        </div>
        <div class="content2_right">
          <h3 class="xq"><a class="a-change" href="javascript:void(0);" @click="changeNeeds">换一组</a>最新需求</h3>
          <List v-if="needs != null" type="needs" :list="needs" @sendPatent="sendPatent"></List>
          <router-link tag="a" target="_blank" to="/hall" class="btn">更多需求</router-link>
        </div>
      </div>
    </div>
    <!-- 最新政策 -->
    <div class="news-zc">
        <div class="w1190 news-zc-ctt" v-if="newsList">
            <div class="top">
                <span class="span1">最新政策</span>
                <router-link tag="a" target="_blank" to="/policy" class="span2">更多地区政策</router-link>
            </div>
            <router-link target="_blank" class="box" v-for="(news, index) in newsList.list" :key="index" :to="'/article/'+news.arc_type_id+'/'+news.arc_id">
                <img :src="news.img" alt="">
                <p>{{news.title}}</p>
                <div class="chengshi">{{news.type_name}}</div>
            </router-link>
        </div>
    </div>
    <!-- 最新政策结束 -->
    <FootModel :linkList="linkList"></FootModel>
    <Fixed></Fixed>
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
            <p>上传文件请按照模板规范填写，<a target="_blank" :href="baseUrl+'/user/patent/tpl?token='+token">下载excel模板</a></p>
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
import Fixed from '@/components/patent/fixed.vue';

import List from '@/components/index/list.vue';

import cookies from 'js-cookie'

import { GET_NEEDS_LIST } from '@/components/index/module'
import { GET_INDEX,GET_LINK,GET_INDEX_NEEDS_LIST } from '@/components/index/module'

import { api,API_HOST } from '@/assets/js/util.js'

export default {
  name: 'Index',
  asyncData({ store, route }){
    return Promise.all([store.dispatch(GET_INDEX),store.dispatch(GET_LINK)])
  },
    data() {
		return {
            tabIndex: 0,
            patentType: '',
            patentStatus: [],
            needsType: '',
            needsStatus:[],
            patentCurrent: '关键词',
            patentPlace: '专利关键词（多个词请用小写;隔开）',
            searchType: 'keywords',
            patentInp: '',
            needsInp: '',
            policyInp: '',
            patentInfo: null,
            isSend: false,
            isSuc: false,
            file: null,
            isMatchSuc: true,
            baseUrl: API_HOST,
            promoteInfo: {
                title: '发送成功',
                subTitle: '等待买家确认',
                desc: '如果符合买家要求，将第一时间与您联系'
            },
            token: cookies.get('token'),
            isLogin: cookies.get('token') != undefined && cookies.get('token').length
		}
    },
    metaInfo () {
        return {
        title: '中细软专利超市',
        meta: [{
            name: 'description',
            content: ''
        },{
            name: 'keywords',
            content: '中细软专利超市'
        }]
        }
    },
   mounted(){ // 此处数据不会被ssr读取到
    this.$store.dispatch(GET_INDEX);
    this.$store.dispatch(GET_LINK);
   },
  components: {
    Top,
    HeadModel,
    FootModel,
    List,
    Fixed
  },
  computed: {
    patent(){
        var patent = this.$store.state.index.patent;
        return patent != null ? patent.patent : null;
    },
    collect(){
        var patent = this.$store.state.index.patent;
        return patent != null ? patent.collect : [];
    },
    needs(){
        var needs = this.$store.state.index.needs;
        return needs;
    },
    user(){
        var user = this.$store.state.index.userStatic;
        return user;
    },
    sortsList(){
      return this.$store.state.index.sortList
    },
    newsList(){
      return this.$store.state.index.newsList
    },
    linkList(){
        return this.$store.state.index.linkList
    }
  },
  methods: {
    tabCut: function(index){
        this.tabIndex = index;
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
    careHandle: function(type,info){
        var _this = this;
        var Api = api();
        if(this.token == undefined){
            location.href = '/login?goback='+ this.$route.fullPath;
        }else{
            var data = {
                'type': 'cp',
                'id': info._source.p_id,
                'action': type
            }
            Api.get('/user/index/care?type=cp&id='+info._source.p_id+'&action='+type+'&token='+_this.token).then(function(res){
                if(res.data.code == 200){
                    _this.$store.dispatch(GET_INDEX);
                }
            });
        }
    },
    changeNeeds: function(){
        var p = parseInt(this.$store.state.current_page) + 1;
        this.$store.dispatch(GET_INDEX_NEEDS_LIST, {url: '/needs?page_size=5', page: p});
    },
    logout: function(){
        var Api = api();
        Api.get('/user/index/logout?token='+ cookies.get('token')).then(function(res){
            if(res.data.code == 200){
                cookies.remove('token', { path: '' });
                cookies.remove('nick', { path: '' });
                cookies.remove('uid', { path: '' });
                cookies.remove('mobile', { path: '' });
                location.href="/";
            }
        });
    },
    sendPatent: function(info){
        if(this.token == undefined){
            location.href = '/login?goback='+ this.$route.fullPath;
        }else if(info.is_offer == 0){
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
                var payload = {
                    page: _this.curPage,
                    url: '/needs?page_size=5'
                }
                _this.$store.dispatch(GET_INDEX_NEEDS_LIST, payload);
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
.page-index{
    /* banner开始 */
    .banner{ position: relative; width: 100%;height: 410px;padding-top:88px;background:url("../assets/images/index/banner.jpg") no-repeat center top;box-sizing: border-box;
        h2{font-size: 39px;color: white;text-align: center;line-height: 42px;}
        .bn_title{width: 412px;margin: 28px auto 0; overflow: hidden;
            p{ float: left;font-size: 15px;color: white;margin-right: 26px;width: 190px; line-height: 16px;
            i{font-size:16px;margin-right: 10px; vertical-align: top;}
            &:last-child{ margin-right: 0;}
            }
        }
        .ban_ctt{ position: absolute; margin-top: 85px; left: 50%; transform: translateX(-50%); display: flex; justify-content: space-between;
            .banner_left{width: 870px;height: 340px;background-color: white;box-shadow: 0 0 10px #d6d6d7;font-size: 0;-webkit-text-size-adjust:none;}
            .banner_left .qiehuan{width: 100%;}
            .banner_left a{display: inline-block; width: 290px;height: 60px;background-color:#F2F3F4;font-size: 18px;color:$main;line-height: 60px;text-align: center;
                &.cur,&:hover{background-color: white;color: $red;}
            }
            .banner_left a.zlxq{width: 288px;border-left: 1px solid $border02;border-right: 1px solid $border02;}
            .banner_left a.zlzy em{font-size: 14px;color: lighten($main, 40%);}
            .banner_left a.zlzy span{font-size: 14px;}
            .banner_left .qiehuan .ipt{width: 690px;height: 46px;border: 1px solid $red;border-radius: 4px;margin: 60px auto 0;}
            .banner_left .qiehuan .ipt .gjc{position: relative; box-sizing: border-box;padding-left: 20px; float: left; width: 130px;height: 46px;font-size: 14px;color: lighten($main, 20%);line-height: 46px;background: url("../assets/images/xiasanjiao2.png") no-repeat 100px 20px;cursor: pointer;
            .xl1{display: none; position: absolute;top: 45px;left: -1px; width: 130px;height: 81px;border: 1px solid $border02;background-color: white;z-index: 10;overflow: hidden;
                    a{display: block;padding-left: 10px;width:130px;height: 40px; background-color: white;color: $main;font-size: 14px;padding-left: 20px;text-align: left;overflow: hidden;line-height: 40px;box-sizing: border-box;
                    &:hover{ color: $red;}
                }
            }
            &:hover .xl1{ display: block;}
            }
            .banner_left .qiehuan .ipt input{float: left; padding-left: 8px; width: 420px;height: 46px; border: none;border-left: 1px solid $red; box-sizing: border-box;}
            .banner_left .qiehuan .ipt a{display:inline-block; box-sizing: border-box; width: 140px;height: 46px;line-height: 46px;border: none; cursor: pointer;color:white;background: url("../assets/images/sousuo.png") no-repeat 15px 12px $red;}
            .banner_left .qiehuan .ipt a span{padding-left: 20px;}
            .banner_left .qiehuan:nth-of-type(3),.banner_left .qiehuan:nth-of-type(4){
                .ipt{
                    overflow: hidden;
                    input{border-left: 0 none; width: 550px;}
                }
            }
            .check{width: 617px; margin: 30px auto 0;overflow: hidden;}
            .check .zllx{float: left;margin-right: 65px;width: 300px;}
            .check .zllx span{font-size: 14px;color: lighten($main, 40%);margin-right: 16px;}
            .check .zllx label{font-size: 14px;color: lighten($main, 20%);margin-right: 28px;}
            .check .zllx label.last{margin: 0;}
            .check .xzzt{float: left;width: 234px;}
            .check .xzzt span{font-size: 14px;color: lighten($main, 40%);margin-right: 15px;}
            .check .xzzt label{font-size: 14px;color: lighten($main, 20%);margin-right: 28px;}
            .check .xzzt label.last{margin: 0;}
            .banner_left .hot{clear: both;}
            .hot{overflow: hidden;width: 570px;margin-top: 25px;margin-left: 111px;}
            .hot span{float: left; font-size: 14px;color: lighten($main, 40%);margin-right: 16px;line-height: 30px;}
            .hot .em{ float: left; width: 49px;height: 30px; margin-bottom: 10px; background-color: #F2F2F2;margin-right: 10px;font-size: 14px;color: lighten($main, 20%);text-align: center;line-height: 30px;border-radius: 5px;
                &:hover{ background-color: $red; color: #fff; }
            }
            .hot .last{margin: 0;}
            .banner_left .qiehuan:last-child{
                .hot{ margin-left: 90px; width: 708px;}
            }
            .banner_right{width: 300px;height: 340px;margin-left: 20px;background-color: white;box-shadow: 0 0 10px #d6d6d7;}
            .banner_right .ban-r-top{width: 300px;height: 150px;border-bottom: 1px solid $border02;}
            .ban-r-top img{display: block; float: left; width: 60px;height: 60px;border-radius:50%;margin-left: 20px;margin-top: 20px;}
            .ban-r-top .denglu{width: 190px;height: 60px; float: left; font-size: 14px;color: $main;padding-top:20px;}
            .ban-r-top .denglu p{width: 190px;height: 30px;line-height: 30px;margin-left: 10px;}
            .ban-r-top .denglu p.p2{ font-size: 12px;color: $main;margin-left: 10px;}
            .ban-r-top .denglu a{color: $red;}
            .ban-r-top > a{display: inline-block;width: 123px;height: 34px; text-align: center; line-height: 32px;border: 1px solid $red;color: $red;font-size: 14px;background-color: white;border-radius: 5px;margin-top: 15px;}
            .ban-r-top .btn1{margin-left: 20px;}
            .ban-r-top .btn2{margin-left: 10px;}
            .ban-r-bottom{width: 260px;height: 150px;padding: 20px;}
            .ban-r-bottom div{position: relative;float: left; width: 125px;height: 70px;background-color: #f2f3f4;}
            .ban-r-bottom div h3{font-size: 16px;color: $main;text-align: center;margin-top: 15px;}
            .ban-r-bottom div p{ font-size: 12px;color: lighten($main, 40%);text-align: center;padding-top: 10px;}
            .ban-r-bottom div a{ position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;}
            .ban-r-bottom .r_ctt1{margin-right: 10px;margin-bottom: 10px;}
            .ban-r-bottom .r_ctt2{margin-bottom: 10px;}
            .ban-r-bottom .r_ctt3{margin-right: 10px;}
        }
        }
        /* banner结束 */

        .content{width: 100%; padding-top: 240px; padding-bottom: 50px; overflow: hidden;background-color: #f2f3f4;
        .content_ctt .ctt_box{position: relative; float: left; width: 275px;height: 260px;margin-right: 30px; background-color: white;
            &:hover{ box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.247058823529412);}
        }
        .content_ctt div.last{margin-right: 0;}
        .content_ctt div img{width: 275px;height: 150px;}
        .content_ctt div i{position: absolute;left: 0;top: 0; width: 275px;height: 150px;opacity: 0.8;}
        .content_ctt div .mask1{background-color:#0f9282;}
        .content_ctt div .mask2{background-color:#6666CC;}
        .content_ctt div .mask3{background-color:#2d84d0;}
        .content_ctt div .mask4{background-color:#bd3b48;}
        .content_ctt div .ctt_title{position: absolute;left: 0;top: 0;width: 275px;height: 150px;color: white;}
        .content_ctt div .ctt_title p.p1{font-size: 20px;margin-top: 20px;margin-left: 20px;}
        .content_ctt div .ctt_title p.p2{font-size: 12px;margin-top: 15px;margin-left: 20px;}
        .content_ctt div .ctt_title p.p3{font-size: 12px;margin-top: 12px;margin-left: 20px;}
        .content_ctt .ctt_box .ul{box-sizing: border-box; width: 100%;padding: 24px 20px 20px;overflow: hidden;position: relative;}
        .content_ctt .ctt_box .ul em{ width: 1px;height: 30px;background-color: $border02;position: absolute;left: 138px;top: 35px;}
        .content_ctt .ctt_box .ul a{ float: left; width: 100px;padding-top: 36px;text-align: center;line-height: 30px; color: lighten($main, 20%); }   
        .content_ctt .ctt_box .ul .li1{margin-right: 35px;}
        .ctt_box .ul1 .li1{background: url("../assets/images/index/index_01.png") no-repeat 35px 0px;}
        .ctt_box .ul1 .li2{background: url("../assets/images/index/index_02.png") no-repeat 35px 0px;}
        .ctt_box .ul2 .li1{background: url("../assets/images/index/index_03.png") no-repeat 35px 0px}
        .ctt_box .ul2 .li2{background: url("../assets/images/index/index_04.png") no-repeat 35px 0px}
        .ctt_box .ul3 .li1{background: url("../assets/images/index/index_05.png") no-repeat 35px 0px}
        .ctt_box .ul3 .li2{background: url("../assets/images/index/index_06.png") no-repeat 35px 0px}
        .ctt_box .ul4 .li1{background: url("../assets/images/index/index_07.png") no-repeat 35px 0px}
        .ctt_box .ul4 .li2{background: url("../assets/images/index/index_08.png") no-repeat 35px 0px}
        }
        .content2{ background-color: #fff;}
        .content2_ctt{ display: flex; flex-direction: row; justify-content: space-between; padding-bottom: 44px;
        .content2_left{ width: 870px;
            .news-sl{width: 100%;font-size: 18px;color: $red;line-height: 80px;}
            .p-sl{float: right;font-size: 13px;color: $red;line-height: 80px;width: 78px; text-align: right;background: url("../assets/images/index/gengduozl.png") no-repeat left center;}
            .btn{width: 200px;height: 46px;display: block;margin: 20px auto 0;border: 1px solid $red;border-radius: 5px;color: $red;font-size: 14px;line-height: 46px;text-align: center;}
        }
        .content2_right{
            .xq{font-size: 18px;color: $green;line-height: 80px;}
            .a-change{float: right;font-size: 14px;color: $green;line-height: 80px;width: 64px; text-align: right;background: url("../assets/images/index/gengxin.png") no-repeat left center;}
            .btn{display: block;width: 160px;height: 40px;text-align: center;line-height: 40px;margin: 20px auto 0;border:1px solid #099;color: #099;font-size: 14px;border-radius: 5px;}
        }
        }

        .news-zc{width: 100%;background-color: #f2f3f4; padding-bottom: 50px; overflow: hidden;
        .top{width: 100%;height: 80px;
            .span1,.span2{color: $main;line-height: 80px;}
            .span1{font-size: 18px;float: left;}
            .span2{font-size: 14px; float: right;
            &:hover{ color: $red;}
            }
        }
        .box{position: relative; width: 275px; padding-bottom: 20px;float: left;margin-right: 30px;background-color: white;
            .chengshi{position: absolute;top: 126px; right: 10px;background-color: white;font-size: 12px;padding: 0 10px;color: lighten($main, 20%);text-align: center;line-height: 24px;border-radius: 5px;}
            img{width: 275px;height: 160px;}
            p{font-size: 14px;height: 48px;color: $main;padding-top: 20px;padding-left: 20px;line-height: 24px;}
            &:last-child{ margin-right: 0;}
            &:hover{box-shadow:  0 0 10px #d7d8d9;}
        }
    }
    input[type=file]{ position: absolute; opacity: 0; top: 0; left: 0; }
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
}
</style>
