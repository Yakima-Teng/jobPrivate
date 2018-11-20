<template>
  <body>
    <div class="login-box">
        <div class="login-ctt">
            <div class="login-left">
                <span><img src="../assets/images/login/login.png" alt=""></span>
            </div>
            <div class="login-right">
                <div class="right-top">
                    <a href="javascript:void(0);" @click="loginTypeFn(true)" :class="{'cur': loginType}" class="mm-login">密码登录</a>
                    <a href="javascript:void(0);" @click="loginTypeFn(false)" :class="{'cur': !loginType}" class="dx-login">短信验证登录</a>
                </div>
                <span v-show="err" class="err">{{errText}}</span>
                <div class="mmdl" v-show="loginType">
                    <p class="phone"><input type="text" placeholder="手机号" v-model="ruleForm.mobile" class="phone-num" style="ime-mode:disabled;" maxlength="11"></p>
                    <p class="password"><input type="password" placeholder="密码" v-model="ruleForm.passwd" ></p>
                    <router-link to="/forget" class="wjmm">忘记密码</router-link>
                    <a href="javascript:void(0);" @click="loginFn('passwd');" class="btn">登录</a>
                </div>
                <div class="dxdl" v-show="!loginType">
                    <p class="phone"><input v-model="ruleForm.mobile" type="text" placeholder="手机号" class="phone-num" style="ime-mode:disabled;" onpaste="return false;" maxlength="11"></p>
                    <p class="dx"><input type="text" v-model="ruleForm.smscode" placeholder=" 短信验证码"><a @click="getCodeFn();" v-show="getCode" href="javascript:void(0);" class="btn-huoqu">获取验证码</a><a href="javascript:void(0);" class="cf" v-show="!getCode">重发验证码(<em>{{getTime}}</em>)</a></p>
                    <a href="javascript:void(0);" @click="loginFn('code');" class="btn">登录</a>
                </div>
                <router-link to='/register' class="zhuce">免费注册</router-link>
            </div>
        </div>
    </div>
</body>
</template>

<script>
import { api } from '@/assets/js/util.js'
const Api = api();

import cookies from 'js-cookie'

export default {
  name: 'login',
  data () {
    return {
      // 登陆方式
      loginType: true,
      // 验证码变量
      getCode: true,
      getTime: 60,

      // 验证变量
      err: false,
      errText: '',

      // 表单
      ruleForm: {
        mobile: '',
        passwd: '',
        smscode: ''
      },
    }
  },
  methods: {
    // 登陆方式切换
    loginTypeFn (type) {
      this.loginType = type;
      this.err = false;
    },
    // 获取验证码
    getCodeFn () {
      let that = this;
      this.phoneFn();
      if (this.phoneFn() == false) {
        console.log(this.ruleForm.mobile);
        return false
      }
      let data = {
        mobile: this.ruleForm.mobile
      }
      let url = '/login/mcode'
      Api.post(url, data).then( res => {
        this.getCode = false;
        let timer = setInterval(function () {
          if (that.getTime > 0) {
            that.getTime--
          } else {
            that.getTime = 60
            clearInterval(timer)
            timer = null
            that.getCode = true
          }
        }, 1000)
      })
    },
    
    loginFn (obj) {
      this.phoneFn();
      if (this.phoneFn() == false) {
        return false;
      }
      let url = '/login/login'
      if (obj == 'passwd') {
        url = '/login/loginp'
      }
      let goback = this.$route.query.goback;
      Api.post(url, this.ruleForm).then( res => {
        if (res.data.code == 200) {
          
          cookies.set('nick', res.data.response.nick, { expires: 7, path: '' });
          cookies.set('token', res.data.response.token, { expires: 7, path: '' });
          cookies.set('uid', res.data.response.uid, { expires: 7, path: '' });
          
          location.href = goback;
          
        } else {
          alert(res.data.msg)
        }
      })
    },
    phoneFn () {
      const reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g;
      if (!reg.test(this.ruleForm.mobile)) {
        this.errText = "请输入正确的手机号码"
        this.err = true
        return false
      }
    },
  }
}
</script>

<style lang="scss" scoped>

.err{display: block;width: 280px;height: 30px;text-align: center;line-height: 30px;background-color: #fff4f4;color: #ff0000;font-size: 12px;}
.login-box{width: 100%;height: 580px;background: url("../assets/images/login/banner.jpg") no-repeat 0 0;overflow: hidden;}
.login-box .login-ctt{width: 852px;height: 460px;background-color: #fff;margin: 90px auto 0;}
.login-ctt .login-left{float: left; width: 492px;height: 100%;box-sizing: border-box;border-right: 1px solid #eeeeee;}
.login-ctt .login-left span{display: block;width: 385px;height: 210px;box-shadow: 5px 5px 10px #8992a2;margin-top: 75px;margin-left: 60px;border-radius: 5px;}
.login-ctt .login-right{box-sizing: border-box; float: left; width: 360px;height: 100%;padding: 10px 40px 0px;}
.login-right .right-top{width: 100%;overflow: hidden;}
.login-right .right-top a{color: #666666; float: left;height: 50px;text-align: center;border-bottom: 1px solid #dddddd;line-height: 50px;
  &.cur{color: #cc0000;border-bottom: 2px solid #cc0000;}
  &:nth-child(1){ width: 135px;}
  &:nth-child(2){width: 145px;}
}
/* 登录 */
.login-right .mmdl{width: 100%;overflow: hidden; }
.login-right .mmdl p{width: 280px;height: 40px;}
.login-right .mmdl p.phone{margin-top: 10px;}
.login-right .mmdl p input{padding-left: 10px; box-sizing: border-box;border-radius: 5px; width: 280px;height: 40px;border: 1px solid #cccccc;}
.login-right .mmdl p.password{margin-top: 20px;}
.login-right .mmdl .wjmm{ float: right; font: 12px;color: #666666;margin-top: 15px;margin-bottom: 24px; overflow: hidden;}
.login-right .mmdl .btn{clear: both;display:block;overflow: hidden; font-size: 14px;color: #fff;width: 280px;height: 40px;line-height: 40px;text-align: center;background-color: #cc0000;border-radius: 4px;}
.login-right .zhuce{float: right;color:#cc0000;font-size: 12px; margin-top: 25px;}
/* 验证 */
.login-right .dxdl{width: 280px;}
.login-right .dxdl p{width: 280px;height: 40px;}
.login-right .dxdl p.phone{margin-top: 10px;}
.login-right .dxdl p input{padding-left: 10px;box-sizing: border-box;border-radius: 5px; width: 280px;height: 40px;border: 1px solid #cccccc;}
.login-right .dxdl p.dx{margin-top: 20px;}
.login-right .dxdl .dx input{width: 150px;} 
.login-right .dxdl .dx .btn-huoqu,.login-right .dxdl .dx .cf{display: inline-block; box-sizing: border-box; width: 120px;height: 40px;box-sizing: border-box;border-radius: 5px;text-align: center;line-height: 40px;border: 1px solid #cccccc;margin-left: 10px;font-size: 14px;color:#666666; }
.login-right .dxdl .dx .cf{background-color: rgba(242, 243, 244, 1);}
.login-right .dxdl .btn{clear: both;display:block;overflow: hidden; font-size: 14px;color: #fff;width: 280px;height: 40px;line-height: 40px;text-align: center;background-color: #cc0000;border-radius: 4px;margin-top: 20px;}

</style>

