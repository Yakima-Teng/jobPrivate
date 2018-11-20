<template>
  <div class="login-box">
      <div class="login-ctt">
          <div class="login-left">
              <span><img src="../assets/images/login/login.png" alt=""></span>
          </div>
          <div class="reg">
              <div class="reg-top">
                  <a href="javascript:void(0);">账号注册</a>
                  <a href="javascript:void(0);">已有账号？<em>立即登录</em></a>
              </div>
              <span class="err" id="err-style"  v-show="err != ''" >{{err}}</span>
              <div class="zc-ctt">
                <form>
                  <p class="phone"><input type="text" name="mobile" v-model="ruleForm.mobile" placeholder="手机号码" class="phone-num" style="ime-mode:disabled;" onpaste="return false;" maxlength="11"></p>
                  <p class="password"><input name="password" v-model="ruleForm.passwd" type="password" placeholder="密码"></p>
                  <p class="phone phone1"><input name="name" type="text" v-model="ruleForm.nick" placeholder="您的称呼" class="phone-num" style="ime-mode:disabled;" onpaste="return false;"></p>
                  <p class="dx"><input type="text" name="code" v-model="ruleForm.smscode" placeholder=" 短信验证码"><a @click="getCodeFn();" v-show="getCode" href="javascript:void(0);" class="btn-huoqu">获取验证码</a><a href="javascript:void(0);" class="cf" v-show="!getCode">重发验证码(<em>{{ getTime }}</em>)</a></p>
                  <a href="javascript:void(0);" class="btn" @click="submitForm">确认注册</a>
                </form>
              </div>
              <p class="tyxy">注册视为同意<a>《专利超市服务协议》</a></p>
          </div>
      </div>
  </div>
</template>

<script>
import { api } from '@/assets/js/util.js'
const Api = api();


export default {
  name: 'Regist',
  data () {
    return {
      // 验证码变量
      getCode: true,
      getTime: 60,
      err: '',

      // 表单
      ruleForm: {
        mobile: '',
        passwd: '',
        nick: '',
        smscode: ''
      },

    }
  },
  methods: {
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
    phoneFn () {
      const reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g;
      if (!reg.test(this.ruleForm.mobile)) {
        this.err = "请输入正确的手机号码"
        return false
      }
    },
    submitForm(){
      if (this.phoneFn == false) {
        return false
      }
      const url = `/login/register`;
      Api.post(url, this.ruleForm).then( res => {
        console.log(res.data)
        if (res.data.code == 200) {
          this.$router.push({
            path: '/login'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.err{display: block;width: 280px;height: 30px;text-align: center;line-height: 30px;background-color: #fff4f4;color: #ff0000;font-size: 12px;}
.login-box{width: 100%;height: 580px;background: url("../assets/images/login/banner.jpg") no-repeat 0 0;overflow: hidden;}
.login-box .login-ctt{width: 852px;height: 460px;background-color: #fff;margin: 90px auto 0;}
.login-ctt .login-left{float: left; width: 492px;height: 100%;box-sizing: border-box;border-right: 1px solid #eeeeee;}
.login-ctt .login-left span{display: block;width: 385px;height: 210px;box-shadow: 5px 5px 10px #8992a2;margin-top: 75px;margin-left: 60px;border-radius: 5px;}

.reg .zc-ctt p.password{margin-top: 20px;}
.reg .zc-ctt{width: 280px;}
.reg .zc-ctt p{width: 280px;height: 40px;}
.reg .zc-ctt p.phone{margin-top: 10px;}
.reg .zc-ctt p input{padding-left: 10px;box-sizing: border-box;border-radius: 5px; width: 280px;height: 40px;border: 1px solid #cccccc;}
.reg .zc-ctt p.dx{margin-top: 20px;}
.reg .zc-ctt .dx input{width: 150px;} 
.reg .zc-ctt .dx .btn-huoqu,.login-right .dxdl .dx .cf,.reg .zc-ctt .dx .cf{display: inline-block; box-sizing: border-box; width: 120px;height: 40px;box-sizing: border-box;border-radius: 5px;text-align: center;line-height: 40px;border: 1px solid #cccccc;margin-left: 10px;font-size: 14px;color:#666666; }
.reg .zc-ctt .dx .cf{background-color: rgba(242, 243, 244, 1);}
.reg .zc-ctt .btn{clear: both;display:block;overflow: hidden; font-size: 14px;color: #fff;width: 280px;height: 40px;line-height: 40px;text-align: center;background-color: #cc0000;border-radius: 4px;margin-top: 20px;}
/* 注册 */
.reg{float: right; width: 360px;height: 460px;box-sizing: border-box; margin: 0 auto;padding: 10px 40px 40px;}
.reg .reg-top{width: 100%;height: 50px;box-sizing: border-box;border-bottom: 2px solid #cc0000;}
.reg .reg-top a:nth-child(1){float: left; font-size: 14px;color: #cc0000;line-height: 50px;}
.reg .reg-top a:nth-child(2){float: right; font-size: 12px;color: #666666;line-height: 50px;}
.reg .reg-top a:nth-child(2) em{color: #cc0000;}
.reg .zc-ctt{display: block;}
.reg .zc-ctt p.phone1{margin-top: 20px;}
.reg .tyxy{float: right; font-size: 12px;color: #999999;margin-top: 20px;}
.reg .tyxy i{color: #333333;}

</style>

