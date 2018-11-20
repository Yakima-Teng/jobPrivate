<template>
    <div class="member">
        <div class="top">
            <div class="w1190">
                <router-link tag="a" target="_blank" class="return" to="/"><i class="icon-fanhui"></i>返回专利超市首页</router-link>
                <ul>
                    <li><a href="javascript:void(0)" @click="contactFun"><i class="icon-wodekefu"></i>在线客服</a></li>
                    <li><a href="javascript:void(0)"><i class="icon-telephone"></i>400-700-0065</a></li>
                </ul>
            </div>
        </div>
        <section class="header">
            <div class="w1190 clearfix">
                <div class="user-info">
                    <span class="user"><em class="img-box"><img :src="headImg"/></em><em class="nick">{{username}}</em><i class="icon-xiajiantou"></i></span>
                    <div class="dropdown">
                        <ul>
                            <li><router-link tag="a" to="/member/data">个人资料</router-link></li>
                            <li><a class="logout" @click="logoutFn()" href="javascript:void(0)">退出</a></li>
                        </ul>
                    </div>
                </div>
                <!-- <a class="message new" href="#"><i class="icon-youxiang"></i><i class="new-msg"></i><em>99+</em></a> -->
                <header class="logo"><div class="logo-box"></div><em class="bar"></em><span>专利超市</span></header>
                <nav class="nav">
                    <router-link tag="a" to="/member/patent"><i class="icon-guanjia"></i>专利管家</router-link>
                    <router-link tag="a" to="/member/needs"><i class="icon-wodexuqiu"></i>我的需求</router-link>
                    <router-link tag="a" to="/member/myCard/pc"><i class="icon-mingpian"></i>我的名片</router-link>
                    <router-link tag="a" to="/member/groom"><i class="icon-tuijianhan"></i>推荐函</router-link>
                </nav>
            </div>
        </section>
        <!--content-->
        <router-view></router-view>
        <!--/content-->
        <footer class="footer">&copy; 2018 北京中细软网络科技有限公司 版权所有 京ICP备11017069号 </footer>
    </div>
</template>

<script>
import { openzx, api } from '@/assets/js/util'
const Api = api();

import cookies from 'js-cookie'

export default {
  name: 'Member',
  data () {
    return {
      username: '',
      headImg: ''
    }
  },
  methods: {
    contactFun: function(){
        openzx();
    },
    logoutFn() {
      let url = `/user/index/logout?token=${this.$store.state.token}`
      Api.get(url).then( res => {
        if (res.data.code == 200) {
          cookies.remove('token');
          cookies.remove('nick');
          cookies.remove('uid');
          this.$route.push({
            path: '/'
          })
        }
      })
    },
    getDataFn () {
      let url = `/user/index/index?token=${this.$store.state.token}`;
      Api.get(url).then( res => {
        if (res.data.user.head_img && res.data.user.head_img != '') {
          this.headerImg = res.data.user.head_img;
        } else {
          this.headImg = require('../assets/images/u26.jpg');
        }
        if (res.data.user.nick && res.data.user.nick != '') {
          this.username = res.data.user.nick
        } else {
          this.username = res.data.user.mobile
        }
      })
    }
  },
  mounted() {
    this.getDataFn();
  }
}
</script>

<style lang="scss" scoped>
$main: #333;
$red: #cc0000;
$border02: #ddd;
.top{
    width: 100%;
    background-color: $red;
    overflow: hidden;
    .w1190{
        display: flex;
        justify-content: space-between;
        a{
            display: block;
            font-size: 12px;
            color: white;
            line-height: 34px;
            i{
                margin-right: 5px;
                font-size: 18px;
                vertical-align: middle;
                margin-top: -3px;
            }
            &.return i{ font-size: 14px;}
        }
        ul{
            display: flex;
            flex-direction: row;
            overflow: hidden;
            li:first-child{margin-right: 30px;}
            li:last-child a{ font-size: 14px;}
        }
    }
}
.header{
    background-color: #fff;
    border-bottom: 1px solid rgba(215, 215, 215, 1);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.149019607843137);
    .w1190{
        .logo, .nav{
            float: left;
        }
        .logo{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 12px 0;
            .logo-box{
               width: 101px;
               height: 42px;
               background: url(../assets/images/u88.png) left top no-repeat;
               background-size: 100%;
            }
            .bar{
                display: block;
                 margin-top: 6px;
                width: 0;
                height: 30px;
                border-left: 1px solid $border02;
                margin: 0 10px;
            }
            span{
                display: block;
                font-size: 16px;
                color: $main;
                line-height: 30px;
            }
        }
        .message{
            float: right;
            margin-top: 18px;
            margin-right: 12px;
            color: $main;
            font-size: 14px;
            line-height: 30px;
            i{
                display: inline-block;
                vertical-align: top;
                &.icon-youxiang{
                    margin-top: 7px;
                    font-size: 20px;
                    color: #999;
                }
                &.new-msg{
                    display: none;
                    width: 8px;
                    height: 8px;
                    background: url(../assets/images/u56.png) left top no-repeat;
                    margin-left: -4px;
                    margin-top: 3px;
                }
            }
            em{
                display: inline-block;
                line-height: 30px;
                margin-left: 4px;
            }
            &.new{
                .new-msg{ display: inline-block; }
            }
        }
        .nav{
            margin-left: 64px;
            display: flex;
            flex-direction: row;
            a{
                display: block;
                margin-right: 40px;
                font-size: 14px;
                color: $main;
                line-height: 63px;
                border-bottom: 3px solid #fff;
                i{
                    color: #999;
                    font-size: 20px;
                    margin-right: 10px;
                    vertical-align: middle;
                    &.icon-guanjia{
                        font-size: 18px;
                    }
                    &.icon-mingpian{
                        font-size: 22px;
                    }
                }
                &:hover, &.cur{
                    color: $red;
                    border-color: $red;
                    i{
                        color: $red;
                    }
                }
            }
        }
        .user-info{
            float: right;
            padding: 18px 0;
            height: 30px;
            cursor: pointer;
            .user{
                padding-left: 18px;
                display: flex;
                flex-direction: row;
                .img-box{
                    width: 30px;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid $border02;
                    border-radius: 50%;
                    box-sizing: border-box;
                    overflow: hidden;
                    img{
                        max-width: 30px;
                        max-height: 30px;
                    }
                }
                .nick{
                    margin-left: 10px;
                    font-size: 14px;
                    color: $main;
                    line-height: 30px;
                }
                .icon-xiajiantou{
                    margin-left: 10px;
                    display: block;
                    font-size: 12px;
                    line-height: 30px;
                }
            }
            .dropdown{
                display: none; position: absolute;
                margin-top: 18px;
                width: 136px;
                padding: 10px 10px 10px 20px;
                background-color: white;
                box-sizing: border-box;
                border: 1px solid rgba(215, 215, 215, 1);
                border-top: 0 none;
                a{
                    font-size: 14px;
                    color: $main;
                    line-height: 30px;
                    &:hover{
                        color: $red;
                    }
                }
            }
            &:hover .dropdown{
                display: block;
            }
        }
    }
}
.footer{
    background-color: #fff;
    font-size: 14px;
    color: $main;
    line-height: 80px;
    text-align: center;
}
</style>
