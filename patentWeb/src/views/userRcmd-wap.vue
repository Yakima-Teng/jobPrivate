<template>
  <div class="user-rcmd-wap">
    <div class="head-title">
        <img v-if="!userData.header_img" src="../assets/images/u26.jpg" alt="">
        <img v-if="userData.header_img" :src="userData.head_img" alt="">
        <span>{{userData.nick == '' ? userData.mobile : userData.nick}}</span>
        <router-link to="/">TA的名片</router-link>
    </div>
    <div class="banner">
        <p v-show="tableData.desc && tableData.desc != ''">{{tableData.desc}}</p>
    </div>
    <div class="content">
        <div class="patent-list"  v-for="key in tableData.content" :key="key.p_id">
          <p><em :class="{fm: key.type == 105 , wg: key.type == 107}"  class="patent-type">{{key.type_str.substr(0, 2)}}</em>{{key.name}}</p>
          <p v-if="tableData.show_column && tableData.show_column.indexOf('area') >= 0">{{key.area}}</p>
          <p><span>授权未缴费</span><span  v-if="tableData.show_column && tableData.show_column.indexOf('price') >= 0" >{{key.price == '0' ? '面议' : '￥' + key.price}}</span></p>
        </div>
        
    </div>
    <div class="lianxi">
        <h3>联系我</h3>
        <ul>
            <li>
                <i class="icon-dianhua"></i><span>电话</span>
                <span>{{tableData.mobile}}</span>
                <a :href="'tel:' + tableData.mobile">呼叫</a>
            </li>
            <li>
                <i class="icon-weixin"></i><span>微信</span>
                <span>{{tableData.weixin}}</span>
                <a href="javascript:void(0);"  v-clipboard:copy="tableData.weixin" v-clipboard:success="onCopyFn" v-clipboard:error="onErrorFn" >复制</a>
            </li>
            <li>
                <i class="icon-qq1"></i><span>QQ</span>
                <span>{{tableData.qq}}</span>
                <a href="javascript:void(0);"  v-clipboard:copy="tableData.qq" v-clipboard:success="onCopyFn" v-clipboard:error="onErrorFn">复制</a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { api,API_HOST } from '@/assets/js/util.js'

import cookies from 'js-cookie'

const Api = api();

import { GET_RCMD_DATA } from '@/components/rcmd/rcmd'


import Vue from 'vue';
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import { resizable } from '@/assets/js/util.js'

export default {
  name: 'rcmdPc',
  data () {
    return {
      link: ''
    }
  },
  asyncData({ store, route }){
      return Promise.all([store.dispatch(GET_RCMD_DATA, `/r/${url.id}`)])
  },
  computed: {
    tableData () {
      var data = this.$store.state.rcmd.tableData;
      return data != null ? data : [];
    },
    userData () {
      var data = this.$store.state.rcmd.userData;
      return data != null ? data : [];
    }
  },
  mounted　() { // 非ssr请求
    this.getDataFn();
    resizable();
    
    let url = this.$route.params;
    this.$store.dispatch(GET_RCMD_DATA, `/r/${url.id}`);
  },
  methods: {
    getDataFn () {
      // let query = this.$route.params;
      // const url =`/r/${query.id}`
      // console.log(url);
      // Api.get(url).then( res => {
      //   console.log(res.data);
      //   this.tableData = res.data.rcmd;
      //   this.userData = res.data.user;
      //   if (!this.userData.head_img) {
      //     this.userData.head_img =  require('../assets/images/u26.jpg');
      //   }
      // })
      this.link = window.location.href;
    },
    onCopyFn() {
      alert('复制成功')
    },
    onErrorFn() {
      alert('复制失败')
    },
    downFn (d) {
      let data = {
        id: d
      }
      const url = `${API_HOST}/user/rcmd/download?token=${cookies.get('token')}&id=${d}`;
      window.open(url);
      // Api.get(url).then( res => {
      //   console.log(res.data);
      // })
    }
  },
  
}
</script>


<style lang="scss" scoped>

@function resize ($size) {
  @return $size * 2.5
}

.user-rcmd-wap{
  width: resize(6.4rem);; margin: auto; overflow: hidden;
  .head-title{
    width: 100%;height: resize(0.9rem);box-sizing: border-box;padding-left: resize(0.3rem);padding-right: resize(0.2rem);
    img{float: left;width: resize(0.6rem);height: resize(0.6rem);margin-top: resize(0.15rem); border-radius: 50%; }
    span,a{font-size: resize(0.28rem);line-height: resize(0.5rem);margin-top: resize(0.2rem);}
    span{float: left;margin-left: resize(0.1rem);color: #333;}
    a{float: right;color: #999;}
  }
  .banner{
    position: relative; width: resize(6.4rem);height: resize(1.7rem);background: url("../assets/images/member/tuijianhan.jpg") no-repeat 0 0;
    p{position: absolute;top: resize(0.8rem);left: resize(0.3rem); width: resize(5.8rem);height: resize(1.5rem);background-color: #fff;border-radius: resize(0.1rem);box-sizing: border-box;padding-left: resize(0.3rem);padding-top: resize(0.3rem);padding-right: resize(0.45rem); font-size: resize(0.28rem);color: #333;box-shadow: 0rem 0rem resize(0.2rem) #d9d9d9; }
  }
  .content{
    width: resize(6.4rem);     padding-top: resize(0.6rem);
    overflow: hidden;
    background-color: #fff;
  }
  .patent-list{
    width: 100%;  background-color: #fff; border-bottom: 2px solid #ddd; box-sizing: border-box; padding: resize(0.3rem) 0.5rem 0.75rem;
    p:nth-child(1){width: resize(5.8rem); font-size: resize(0.28rem);color: #333;line-height: resize(0.4rem);}
    p:nth-child(1) em.patent-type{
      display: inline-block;width: resize(0.8rem);height: resize(0.4rem);font-size: resize(0.24rem);color: #fff;line-height: resize(0.4rem);background-color: #80cccc;border-radius: resize(0.1rem);text-align: center;margin-right: resize(0.18rem);
      &.fm{
        background-color: rgba(240, 179, 179, 1);
      }
      &.wg{
        background-color: rgba(153, 204, 230, 1);
      }
    }

    p:nth-child(2){ width: resize(5.8rem); font-size: resize(0.24rem);color: #999;line-height: resize(0.4rem);margin-top: resize(0.1rem);}
    p:nth-child(3){width: 100%;margin-top: resize(0.3rem);overflow: hidden;}
    p:nth-child(3) span:nth-child(1){float: left;font-size: resize(0.24rem);color: #999;line-height: resize(0.4rem);}
    p:nth-child(3) span:nth-child(2){float: right;font-size: resize(0.28rem);color:#cc0000;line-height: resize(0.4rem);}
  }
  .lianxi{
    margin: resize(0.2rem) auto 0;box-sizing: border-box;padding: resize(0.2rem) resize(0.3rem); 
    background-color: #fff;
    h3{font-size: reszie(0.28rem);color: #333;line-height: resize(0.6rem);}
    ul{width: 100%;clear: both; overflow: hidden; }
    li{ 
      margin-top: resize(0.26rem); width: 100%; background-size: reszie(0.34rem) reszie(0.34rem);margin-bottom: reszie(0.5rem);
      span{font-size: resize(0.24rem);color: #999;margin-left: 0.2rem; line-height: resize(0.4rem);  }
      a{float: right;width: resize(1.4rem);height: resize(0.5rem);text-align: center;line-height: resize(0.5rem);font-size: resize(0.24rem);color: #333;border: 1px solid #ddd;border-radius: resize(0.05rem); }
      i{
        font-size: 0.6rem; color: #999;
      }
      }

    
  }
}
</style>
