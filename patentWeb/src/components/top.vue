<template>
  <!-- 头部 -->
    <div class="header">
      <div class="w1190">
        <div class="header_right">
            <ul class="clearfix">
                <li class="hr">我的专利<i class="icon"></i>
                    <div class="baise"></div>
                    <div class="xl1">
                        <router-link tag="a" target="_blank" to="/member/patent" class="a1">管理专利</router-link>
                        <router-link tag="a" target="_blank" to="/member/patent/collect" class="a2">收藏的专利</router-link>
                    </div>
                </li>
                <li class="hr">我的需求<i class="icon"></i>
                    <div class="baise"></div>
                    <div class="xl1">
                        <router-link tag="a" target="_blank" to="/member/needs" class="a1">发布的需求</router-link>
                        <router-link tag="a" target="_blank" to="/member/needs/collect" class="a2">收藏的需求</router-link>
                        <router-link tag="a" target="_blank" to="/member/needs/quote" class="a3">报价的需求</router-link>
                    </div>
                </li>
                <li><router-link tag="a" target="_blank" to="/member/myCard/pc">名片管理</router-link></li>
                <li><router-link tag="a" target="_blank" to="/member/groom">推荐函</router-link></li>
                <li><a href="javascript:void(0)" @click="contactFun">在线客服</a></li>
                <li>服务热线：400-700-0065</li>
            </ul>
        </div>
        <div class="header_left">
            <p>
                <span v-if="isLogin">欢迎来到中细软旗下专利转让服务平台！</span>
                <span v-else>欢迎回来！{{nick}}</span><a v-if="!isLogin" href="javascript:void(0)" @click="logout">退出</a>
                <a v-if="isLogin" tag="a" target="_blank" href="javascript:void(0);" @click="loginFun">请登录&nbsp;</a>
                <a v-if="isLogin" tag="a" target="_blank" href="javascript:void(0);" @click="registFun">免费注册</a>
            </p>
        </div>
      </div>
    </div>
    <!-- 头部结束 -->
</template>

<script>
import { api, openzx } from '@/assets/js/util'
import cookies from 'js-cookie'
export default {
  name: 'Top',
  data () {
    return {
      isLogin: cookies.get('token') == undefined, // 未登录
      nick: cookies.get('nick')
    }
  },
  methods: {
    contactFun: function(){
        openzx();
    },
    loginFun: function(){
        location.href = "/login?goback=" + this.$route.fullPath;
    },
    registFun: function(){
        location.href = "/register?goback=" + this.$route.fullPath;
    },
    logout: function(){
        var Api = api();
        Api.get('/user/index/logout?token='+ cookies.get('token')).then(function(res){
            if(res.data.code == 200){
                cookies.remove('token', { path: '' });
                cookies.remove('nick', { path: '' });
                cookies.remove('uid', { path: '' });
                location.href="/";
            }
        });
    }
  }
}
</script>

<style lang="scss" scoped>
$main: #333;
$border01: #ccc;
$border02: #ddd;
$red: #cc0000;
/* 头部 */
.header{width: 100%;margin: 0 auto;border-bottom: 1px solid $border02; background-color: #fff;
    .w1190{ height: 36px; }
    .header_right{float: right;
        ul{
            li{position: relative;float: left;height: 36px;font-size: 12px;line-height: 36px;color: lighten($main, 20%); padding-left: 10px; padding-right: 10px;
                & > a{ color: inherit;
                    &:hover{ color: $red;}
                }
                &.hr{ border-left: 1px solid white; border-right: 1px solid white;
                    .icon{ display: inline-block; margin-left: 6px; width: 8px; height: 5px;background: url(../assets/images/u301.png) left top no-repeat;vertical-align: middle;}
                    .xl1{display: none; position: absolute;top: 35px;left: -1px; width: 102px;border: 1px solid #dddddd;background-color: #fff;z-index: 1;
                        a{display: block;padding-left: 10px;color: lighten($main, 20%);line-height: 30px;
                            &:hover{ color: $red;}
                        }
                    }
                    &:hover{border-color: $border02; box-sizing: border-box;
                        .xl1{ display: block;}
                    }
                }
            }
        }
    }
    .header_left{
        float: left;
        p{color: lighten($main, 40%);font-size: 12px;line-height: 36px;}
        a{ color: lighten($main, 20%);
            &:hover{ color: $red;}
        }
    }
    
}
/* 头部结束 */
</style>
