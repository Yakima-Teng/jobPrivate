<template>
  <div class="user-rcmd-pc">
    <div class="w1190">
      <aside class="aside-left">
        <p class="title">{{tableData.title}}</p>
        <p class="saoma">扫码直接分享</p>
        <div class="img-box"><img :src="tableData.qrcode" alt=""><i></i></div>
        <p class="lianjie">{{link}}</p>
        <a href="javascript:void(0);" v-clipboard:copy="link" v-clipboard:success="onCopyFn" v-clipboard:error="onErrorFn" class="btn3">复制链接分享</a>
        <a   :href="'http://patent.d.gbicom.cn/rcmd/download?id=' + tableData.rcmd_id" target="_blank" class="btn4">下载excel版</a>
      </aside>
      <section class="show-content">
        <header class="cmder-header">
            <div class="mingpian-footer">
                <img v-if="userData.head_img" :src="userData.head_img" alt="">
                <div class="geren">
                    <span>{{userData.nick == '' ? userData.mobile : userData.nick}}</span>
                    <em>{{userData.agent}}</em>
                </div>
            </div>
            <div class="lianxi-fs">
                <div class="tel">
                    <p>电话</p>
                    <h4>{{userData.mobile}}</h4>
                </div>
                <div class="weixin">
                    <p>微信</p>
                    <h4>{{userData.weixin}}</h4>
                </div>
                <div class="weixin">
                    <p>QQ</p>
                    <h4>{{userData.qq}}</h4>
                </div>
            </div>
            <p v-show="tableData.desc && tableData.desc != ''" class="mingpian-title">{{tableData.desc}}</p>
        </header>
        <div class="patent-list">
          <h3>推荐的专利</h3>
          <div class="table-box">
            <table>
              <tbody>
                <tr>
                  <th>专利信息</th>
                  <th>专利类型</th>
                  <th>下证状态</th>
                  <th v-if="tableData.show_column && tableData.show_column.indexOf('area') >= 0" >专利领域</th>
                  <th v-if="tableData.show_column &&tableData.show_column.indexOf('price') >= 0">价格</th>
                </tr>
                <tr v-for="key in tableData.content" :key="key.p_id" >
                  <td class="patent-info" >
                    <p>{{key.name}}</p>
                    <span>申请号：{{key.reg_id}}</span>
                  </td>
                  <td>{{key.type_str}}</td>
                  <td>{{key.status_str}}</td>
                  <td  v-if="tableData.show_column && tableData.show_column.indexOf('area') >= 0">{{key.area}}</td>
                  <td  v-if="tableData.show_column && tableData.show_column.indexOf('price') >= 0" class="money">￥{{key.price}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
    
  </div>
</template>

<script>
import cookies from 'js-cookie'

import { api } from '@/assets/js/util.js'
const Api = api();

import { GET_RCMD_DATA } from '@/components/rcmd/rcmd'

import Vue from 'vue';

export default {
  name: 'rcmdPc',
  data () {
    return {
      link: ''
    }
  },
  asyncData({ store, route }){
      let url = route.params;
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
      const url = `http://patent.d.gbicom.cn/user/rcmd/download?token=${cookies.get('token')}&id=${d}`;
      window.open(url);
      // Api.get(url).then( res => {
      //   console.log(res.data);
      // })
    }
  },
  
}
</script>


<style lang="scss" scoped>
.user-rcmd-pc{
  padding:30px 0;
  background-color: #f2f3f4;
  .w1190{
    margin:0 auto;
    overflow: hidden;
  }
  .aside-left{
    float: left; width: 210px;  background-color: #fff; box-sizing: border-box;padding:30px 20px;border: 1px solid #ddd;
    .title{
      text-align: center; word-wrap:break-word;
      margin:0 auto;
      font-size: 18px;  line-height: 30px;
      color:#333
    }
    .saoma{
      height: 30px;
      font-size: 12px; margin-top: 30px;
      color: #666;
      text-align: center;
      line-height: 30px;
    }
    .img-box{
      width: 140px; height: 140px; margin: 10px auto 0 ; border:1px solid #ddd;
      img{
        width: 100%; height: 100%;
      }
    }
    .lianjie{
      line-height: 20px;
      font-size: 12px;
      color: #999;
      margin-top: 13px;
      text-align: center; word-wrap:break-word;
    }
    a{
      display: block;
      width: 140px;
      height: 40px;
      box-sizing: border-box;
      border: 1px solid #cccccc;
      border-radius: 5px;
      font-size: 14px;
      color: #333333;
      text-align: center;
      line-height: 40px;
      margin: 20px auto 0;
      &.btn3{
        margin-top: 10px;
        background-color: #cc0000;
        color: #fff;
        border: none;
      }
    }
  }
  .show-content{
    float: left; margin-left:20px ;
    .cmder-header{
      position: relative; width: 960px;height: 180px; clear: both;background:url("../assets/images/member/tuijianhan.jpg") no-repeat 0 0;padding-left: 20px;padding-top: 20px;padding-right: 20px;box-sizing: border-box;
      .mingpian-footer{
        float: left; position: relative;width: 392px;height: 50px;clear: both;overflow: hidden; 
         img{float: left;width: 50px;height: 50px; border-radius: 50%; }
        .geren{
          float: left; width: 332px; margin-left: 10px; 
          span{display: block; line-height: 30px;font-size: 14px;color: #fff; }
          em{display: inline-block; padding:0 10px; font-size: 12px;color: #fff; line-height: 20px; border: 1px solid #127f75;border-bottom-color: #2a4c74;border-radius: 20px;box-sizing: border-box; }
          }
      }
      .lianxi-fs{
        float: right;width: 382px;overflow: hidden;  
        div{width: 100px;float: left; margin-right: 20px;padding-right: 20px; }
        div:nth-child(1), div:nth-child(2){border-right: 1px dashed #44485a;}
        div:nth-child(3){margin-right:0;padding-right: 0;}
        div p{font-size: 14px;color: #fff;text-align: center;line-height: 20px; }
        div h4{ font-size: 14px;color: #fff;font-weight: bold;margin-top: 10px; text-align: center;width: 100px;line-height: 20px;}
      }
      .mingpian-title{position: absolute;top: 110px;left: 20px;; clear: both; width: 920px;height: 120px;background-color: #fff; font-size: 14px;color: #333;line-height: 26px;border-radius: 10px;box-shadow: 0px 0px 10px gray;box-sizing: border-box;padding: 20px 50px 0;}
    }
  }
  .patent-list{
    width: 960px; padding:80px 20px 0;
    box-sizing: border-box;
    
    background-color: #fff;
    h3{
      font-size: 18px;
      color: #333;
      font-weight: bold;
      line-height: 35px;
    }
    .table-box{
       margin-top: 10px; width: 100%;
      table{
        width: 100%;
      }
      th{
        font-size: 14px; line-height: 50px; 
        color: #999;border-bottom: 1px solid #ddd; background-color: #f6f6f6;
      }
      td{
        text-align: center;
        font-size: 14px; color:#666; padding:20px;
        border-bottom: 1px solid #dddddd;
        &:first-of-type{
          text-align: left;
        }
      }
      .money{
        color:#cc0000;
      }
      .patent-info{
        width: 320px;
        p{
          line-height: 1.6; margin-bottom: 10px;
          color:#333;
        }
        span{
         
          color:#999;
        }
      }
    }
  }
}
</style>
