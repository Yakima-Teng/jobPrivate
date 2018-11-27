<template>
  <div class="forget">
    <div class="header-box">
      <alone-header :name="pageName"></alone-header>
    </div>
    <div class="main-box">
      <div class="box-title">
          <em class="cur">1</em>
          <div class="dashed"></div>
          <em :class="{cur: step > 1}" >2</em>
          <div class="dashed"></div>
          <em :class="{cur: step > 2}" >3</em>
      </div>
      <div v-show="step == 1" class="form-box">
        <table>
          <tbody>
            <tr>
              <th></th>
              <td  colspan="2">
                <p v-show="errText != ''" class="err" >{{errText}}</p>
              </td>
            </tr>
            <tr>
              <th>手机号码</th>
              <td colspan="2" >
                <input maxlength="11" v-model="stepOneForm.mobile" type="text">
              </td>
            </tr>
            <tr>
              <th>短信验证码</th>
              <td>
                <input v-model="stepOneForm.smscode" class="code" type="text">
              </td>
              <td>
                <span　v-show="getCode" @click="getCodeFn();" class="get_code">获取验证码</span>
                <span　v-show="!getCode" class="get_code">（{{getTime}}s）后获取</span>
              </td>
            </tr>
            <tr>
              <th></th>
              <td colspan="2">
                <button @click="stepOneFn" class="form-btn">立即找回</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-show="step == 2" class="form-box">
        <table>
          <tbody>
            <tr>
              <th></th>
              <td  colspan="2">
                <p v-show="errText　!= ''" class="err" >{{errText}}</p>
              </td>
            </tr>
            <tr>
              <th>新密码</th>
              <td colspan="2" >
                <input v-model="stepTwoForm.passwd" type="password">
              </td>
            </tr>
            <tr>
              <th>确认密码</th>
              <td colspan="2" >
                <input v-model="stepTwoForm.repasswd" type="password">
              </td>
            </tr>
            <tr>
              <th></th>
              <td colspan="2">
                <button @click="stepTwoFn" class="form-btn">确认修改</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-show="step == 3" class="form-box">
        <div class="forget-ok">修改成功</div>
        <button class="form-btn">直接登录</button>
      </div>
    </div>
    <foot-model :isLink="footLink"></foot-model>
  </div>
</template>

<script>

import aloneHeader from '@/components/aloneHeader.vue';
import FootModel from '@/components/footer.vue'

import { api } from '@/assets/js/util.js'
const Api = api();

export default {
  components: {
    aloneHeader,
    FootModel
  },
  metaInfo () {
    return {
      title: '找回密码-中细软专利超市'
    }
  },
  data () {
    return {
      footLink: false,
      // header名字
      pageName: '找回密码',
      //　获取验证码按钮切换
      getCode: true,
      getTime: 60,
      //　错误提示
      errText: '',
      //　步骤
      step: 1,

      stepOneForm: {
        mobile: '',
        smscode: ''
      },
      stepTwoForm: {
        mobile: '',
        passwd: '',
        repasswd: ''
      }
    }
  },
  methods: {
    getCodeFn () {
      let that = this;
      if (this.phoneFn() == false) {
        this.errText = '请输入正确的手机号码';
        return false
      } else {
        this.errText = '';
      }
      let data = {
        mobile: this.stepOneForm.mobile
      }
      let url = '/login/mcode';
      Api.post(url, data).then( res => {
        if (res.data.code == 200) {
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
        } else {
          this.errText = res.data.msg
        }
      })
      
    },
    phoneFn () {
      const reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g;
      if (!reg.test(this.stepOneForm.mobile)) {
        this.errText = "请输入正确的手机号码"
        this.err = true
        return false
      }
    },
    stepOneFn () {
      if (this.phoneFn() == false) {
        this.errText = '请输入正确的手机号码';
        return false
      } else {
        this.errText = '';
      }

      let url = '/login/forget';
      Api.post(url, this.stepOneForm).then( res => {
        if (res.data.code == 200) {
          this.errText = '';
          this.step = 2;
          this.stepTwoForm.mobile = this.stepOneForm.mobile
        } else {
          this.errText = res.data.msg
        }
      })
    },
    stepTwoFn () {
      if (this.stepTwoForm.passwd == '') {
        this.errText = '请输入密码'
        return false;
      }
      if (this.stepTwoForm.passwd != this.stepTwoForm.repasswd) {
        this.errText = '两次密码不一致'
        return false;
      }
      let url = '/login/repasswd';
      Api.post(url, this.stepTwoForm).then( res => {
        if (res.data.code == 200) {
          this.errText = '';
          this.step = 3;
        } else {
          this.errText = res.data.msg
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.forget{
  min-height: 100vh;
  background-color: #fff;
  .header-box{
    border-bottom: 1px solid #dddddd;
  }
  .main-box{
    padding:50px 0 200px;
  }
  .box-title{
    width: 460px;height: 20px;  margin:0 auto 0;
    em{float: left;width: 20px; height: 20px;border-radius: 10px;background-color:#dddddd;font-size: 12px;color: #fff;text-align: center;line-height: 20px;}
    .dashed{float: left; width: 180px;height: 1px; border-bottom:2px #eee dotted; margin-left: 10px;margin-right: 10px;margin-top: 10px;}
    em.cur{background-color: #009999;}
  }
  .form-box{
    width: 420px; margin:0 auto 0;
    td, th{
      padding-top: 20px;
    }
    input{
      width: 300px;
      height: 40px;
      box-sizing: border-box;
      border: 1px solid #dddddd;
      border-radius: 5px;
      padding-left: 10px;
      &.code{
            width: 170px;
      }
    }
    .err{
      display: block;
      width: 300px;
      height: 30px;
      box-sizing: border-box;
      background-color: #fff4f4;
      line-height: 30px;
      text-align: center;
      font-size: 12px;
      color: #ff0000;
      border: 1px solid #f1b8b8;
    }
    th{
      width: 70px;
      text-align: right;
      padding-right: 10px;
      line-height: 40px;
      font-size: 14px;
      color: #333;
    }
    .get_code{
      float: right; cursor: pointer;
      width: 120px;
      height: 40px;
      box-sizing: border-box;
      border: 1px solid #dddddd;
      border-radius: 5px;
      text-align: center;
      line-height: 40px;
      font-size: 14px;
      color: #666666;
    }
    .form-btn{
      display: block; border:none; cursor: pointer;
      width: 300px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      border-radius: 5px; 
      margin: 0 auto 0;
      background-color: #009999;
    }
    .forget-ok{
      width: 100px; line-height: 40px; padding-left: 50px; background: url("../assets/images/forget/suc.png") no-repeat left center; margin: 50px auto 40px; color:#666;  font-size: 18px; 
    }
  }
}
</style>

