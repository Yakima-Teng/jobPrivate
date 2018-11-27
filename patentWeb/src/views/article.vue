<template>
  <div class="page-article">
    <Top></Top>
    <HeadModel></HeadModel>
    <div class="content">
        <div class="content-ctt">
            <div class="content-left" v-if="info">
                <div class="left-title">
                    <h2>{{info.detail.title}}</h2>
                    <div class="date"><span>{{info.detail.create_time}}</span><em>{{info.detail.click}}</em></div>
                    <p>{{info.detail.desc}}</p>
                </div>
                <div class="left-info" v-html="info.detail.content"></div>
                <div class="share">
                  <div class="bdsharebuttonbox">
                    <a href="#" class="bds_more" data-cmd="more"></a>
                    <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
                    <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
                    <a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
                    <a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a>
                    <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
                  </div>
                </div>
                <div class="switch">
                    <router-link tag="a" target="_blank" :to="'/article/'+info.prev.arc_type_id+'/'+info.prev.arc_id" v-if="info.prev"><span>上一篇：</span>{{info.prev.title}}</router-link>
                    <router-link tag="a" target="_blank" :to="'/article/'+info.next.arc_type_id+'/'+info.next.arc_id" v-if="info.next"><span>下一篇：</span>{{info.next.title}}</router-link>
                </div>
            </div>
            <div class="content-right">
                <div class="right_top">
                    <p>为您申报高新企业认证</p>
                    <p>享最高百万资金扶持</p>
                    <a href="javascript:void(0);" class="btn" @click="contactFun">我要申报</a>
                </div>
                <div class="right_middle" v-if="news">
                    <div class="middle_title">
                        <span>相关政策</span>
                        <!-- <router-link target="_blank" :to="'/policy?id='+type">更多</router-link> -->
                        <router-link target="_blank" :to="{path: '/policy', query: {'id': type}}">更多</router-link>
                    </div>
                    <router-link target="_blank" class="middle_box" v-for="(item, index) in news.list" :key="index" :to="'/article/'+item.arc_type_id+'/'+item.arc_id">
                        <p>{{item.title}}</p>
                    </router-link>
                </div>
                <div class="right_bottom" v-if="patent">
                    <div class="bottom_title">
                        <span>推荐专利资源</span>
                        <router-link target="_blank" to="/patent">更多</router-link>
                    </div>
                    <router-link target="_blank" class="bottom_box" v-for="(item, index) in patent.list" :key="index" :to="'/pDetail/'+item._source.p_id">
                        <div v-if="item._source.type == 106" class="box_left pract">实用</div>
                        <div v-else-if="item._source.type == 107" class="box_left outward">外观</div>
                        <div v-else class="box_left invent">发明</div>
                        <div class="box_right">
                            <p>{{ item._source.name }}</p>
                            <span>申请号：{{ item._source.reg_id }}</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <FootModel :isLink="footLink"></FootModel>
  </div>
</template>

<script>
import Top from '@/components/top.vue';
import HeadModel from '@/components/header.vue';
import FootModel from '@/components/footer.vue';

import { GET_NEWS_DETAIL } from '@/components/policy/module'

import { openzx } from '@/assets/js/util'

export default {
  name: 'Article',
  asyncData({ store, route }){
      return store.dispatch(GET_NEWS_DETAIL, {'type':route.params.type, 'id':route.params.id});
  },
  mounted(){ // 此处数据不会被ssr读取到
    var _this = this;
    // this.$store.dispatch(GET_NEWS_DETAIL,{'type':this.type, 'id':this.id});
    $('.nav .nav_right').find('a').last().addClass('cur');
    setTimeout(function(){
      _this.setShare();
    },500);
  },
  components: {
    Top,
    HeadModel,
    FootModel
  },
  metaInfo () {
    var title = '';
    var desc = '';
    if(this.info){
      title = this.info.detail.title;
      desc = this.info.detail.desc;
    }
    return {
      title: title+'-中细软专利超市',
      meta: [{
          name: 'description',
          content: desc
      },{
          name: 'keywords',
          content: title+',中细软,中细软专利超市'
      }]
    }
  },
  computed: {
    info(){
        return this.$store.state.policy.detailInfo
    },
    news(){
      return this.$store.state.policy.newsList
    },
    patent(){
      return this.$store.state.policy.patent
    }
  },
  data () {
    return {
      id: '',
      type: '',
      footLink: false
    }
  },
  created(){
    var params = this.$route.params;
    var id = params.id;
    this.id = id;
    this.type = params.type;
  },
  methods: {
    contactFun: function(){
        openzx();
    },
    setShare(){
      //分享相关代码
      window._bd_share_config={
        "common":{
          "bdSnsKey":{},
          "bdText":"",
          "bdMini":"2",
          "bdMiniList":false,
          "bdPic":"",
          "bdStyle":"0",
          "bdSize":"32"
        },
        "share":{},
        "image":{
          "viewList":["qzone","tsina","tqq","renren","weixin"],
          "viewText":"分享到：",
          "viewSize":"16"
        },
        "selectShare":{
          "bdContainerClass":null,
          "bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]
        }
      };
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5);
      document.body.appendChild(s);
    }
  }
}
</script>

<style lang="scss" scoped>
$main: #333;
.page-article{
  .content{width: 100%; margin: 0 auto;clear: both;background-color: #f2f3f4;overflow: hidden;
    .content-ctt{width: 1190px;margin: 20px auto 0;
      .content-left{float: left; width: 890px;box-sizing: border-box;padding: 20px 20px 30px;background-color: #fff;
        .left-title{width: 100%; padding-bottom: 20px;box-sizing: border-box;border-bottom:1px solid #e6e6e6;
          h2{font-size: 24px;color: $main;line-height: 50px;}
          .date{font-size: 12px; line-height: 20px; color: lighten($main, 40%);
            em{display:inline-block;margin-left: 30px;padding-left: 22px; background: url("../assets/images/policy/liuliang.png") no-repeat 0 1px;}
          }
          p{width: 850px; font-size: 14px;color: lighten($main, 40%);margin-top: 18px;line-height: 26px;}
        }
        .left-info{width: 850px; padding-top: 20px;
          p{text-indent: 2em;font-size: 14px;color: $main;line-height: 26px;margin-bottom: 26px;
            &:last-child{ margin-bottom: 0;}
          }
        }
        .left-fujian{width: 850px;height: 120px;box-sizing: border-box;border: 1px solid #dddddd;border-radius: 5px;margin-top: 30px;padding: 20px;
          p{font-size: 14px;line-height:20px;color: lighten($main, 40%);}
          a{display: block; font-size: 14px;line-height:20px;color: #6666CC;margin-top: 10px;}
        }
        .share{width: 850px;background-color: #f2f3f4;padding: 20px 0;border-radius: 5px;margin-top: 30px; overflow: hidden;
          .bdsharebuttonbox{ width: 228px; margin: auto; }
        }
        .switch{width: 100%;margin-top: 30px;
          a{display: block; font-size: 14px;line-height:30px;color: #000000;
            &:nth-child(2){margin-top: 10px;}
          }
          span{color: lighten($main, 40%);}
        }
      }
      .content-right{float: right;width: 280px;
        .right_top{width: 280px;height: 190px;box-sizing: border-box;padding:20px 20px 0; background: -webkit-linear-gradient(left top,#6666cc,#663399);
          p:nth-child(1){font-size: 18px;color: #fff;text-align: center;line-height: 40px;}
          p:nth-child(2){font-size: 22px;color: #fff;text-align: center;line-height: 44px;}
          .btn{display: block;width: 240px;height: 40px;background-color: #fff;color:#6666cc;text-align: center;line-height: 40px;border-radius: 5px;margin-top: 16px;}
        }
        .right_middle{width: 100%;
          .middle_title{width: 100%;height: 50px;font-size:14px;color: $main;
            span{float: left; line-height: 50px;}
            a{float: right; line-height: 50px;color: $main;}
          }
          .middle_box{ display: block; width: 100%;box-sizing: border-box;padding: 20px;margin-bottom: 10px;background-color: #fff;
            p{font-size: 14px;line-height:20px;color: #666666;}
            &:last-child{margin-bottom:0px;}
          }
        }
        .right_bottom{width: 100%;
          .bottom_title{width: 100%;height: 50px;font-size:14px;color: $main;
            span{float: left; line-height: 50px;}
            a{float: right; line-height: 50px;color: $main;}
          }
          .bottom_box{ display: block; width: 100%;box-sizing: border-box;padding: 20px 0px 20px 20px; margin-bottom: 10px;background-color: #fff;overflow: hidden;
            .box_left{float: left;width: 50px;height: 30px;text-align: center;line-height: 30px;color: #fff;font-size:14px;border-radius: 5px; 
              &.pract{background-color: #80cccc;}
              &.invent{background-color: #f0b3b3;}
              &.outward{background-color: #99cce6;}
            }
            .box_right{float: left;margin-left: 10px;font-size: 14px;
              p{color: $main;width: 180px;margin-bottom: 10px; line-height: 20px;}
              span{color: lighten($main, 40%);line-height: 20px;}
            }
          }
        }
      }
    }
  }
}
</style>
