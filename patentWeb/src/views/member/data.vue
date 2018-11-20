<template>
  <div class="member-data ">
    <div class="w1190">
      <memberNav :navbox="navbox" ></memberNav>
      <div class="show-main">
        <div class="content-ctt">
            <div class="ctt-right">
                <h2>会员资料</h2>
                <div class="ctt-r-box-H">
                    <div class="lxfs">
                      <h3>联系方式</h3>
                      <p><span>昵称</span><input v-model="ruleForm.nick" type="text" ></p>
                      <p><span>所在公司/机构</span><input v-model="ruleForm.agent" type="text"></p>  
                    </div>
                    <div class="lxfs">
                        <h3>联系方式</h3>
                        <p><span>微信</span><input v-model="ruleForm.weixin" type="text"></p>
                        <p><span>QQ</span><input type="text" v-model="ruleForm.qq"></p>
                        <p><span>邮箱</span><input type="text" v-model="ruleForm.email" ></p>
                    </div>
                    <a href="javascript:void(0);" @click="submitFn" class="btn">保存</a>
                </div>
                <div class="ctt-r-box-W"></div>
            </div>
        </div>
      </div>
      <div  v-show="editOk" class="cloud"></div>
      <div v-show="editOk" class="caozuo-suc boxmoren">
      <div class="suc-img"></div>
          <div class="suc-title">
              <p>操作成功</p>
              <p>会员资料修改成功</p>
          </div>
          <a href="javascript:void(0);" @click="editOk = false" class="close icon-cuohao"></a>
      </div>
    </div>
  </div>
</template>


<script>
import memberNav from '@/components/member/memberNav.vue'

import cookies from 'js-cookie'

import { api } from '@/assets/js/util.js'
const Api = api();

export default {
  components: {
    memberNav
  },
  data () {
    return {
      navbox: 'member',
      token: '',
      editOk: false,
      ruleForm: {
        nick: '',
        agent: '',
        weixin: '',
        qq: '',
        email: ''
      }
    }
  },
  methods: {
    submitFn () {
      let that = this;
      let url = `/user/index/edit?token=${this.token}`;
      // console.log(this.ruleForm);
      Api.post(url, this.ruleForm).then( res => {
        // console.log(res.data)
        if (res.data.code == 200) {
          this.editOk = true;
          setTimeout(() => {
            that.editOk = false;
          }, 3000);
        }
      })
    },
    getDataFn () {
      let token = cookies.get('token');
      this.token = token;
      let url = `/user/index/index?token=${token}`;
      // console.log(url);
      Api.get(url).then( res => {
        console.log(res.data);
        this.ruleForm.nick = res.data.user.nick;
        this.ruleForm.qq = res.data.user.qq;
        this.ruleForm.weixin = res.data.user.weixin;
        this.ruleForm.email = res.data.user.email;
        this.ruleForm.agent = res.data.user.agent;
      })
    }
  },
  mounted () {
    this.getDataFn();
  }
}
</script>


<style lang="scss" scoped>
$white: #fff;
$main: #333;
$red: #cc0000;
$green: #37b8cf;
$border01: #ccc;
$border02: #ddd;

.member-data{
  overflow: hidden;
  background-color: #f2f3f4; padding:30px 0;
  .w1190{
    overflow: hidden;
  }
}
/* content */
.show-main{
  clear: both;overflow: hidden;
  height: 600px; margin-left: 180px; padding-left: 20px; padding-top: 20px;
  background-color: $white;
  
  .content-ctt{
    overflow: hidden;
    .ctt-right h2{font-size: 18px;color: #333333;line-height: 40px;}
     .ctt-right .ctt-r-box-H{width: 410px;}
    .ctt-right .ctt-r-box-H .lxfs{clear: both; width: 410px;margin-top: 20px;margin-left: 20px;overflow: hidden;}
    .ctt-r-box-H .lxfs h3{font-size: 14px;color: #333333;line-height: 30px;}
    .ctt-r-box-H .lxfs p{width: 100%; clear: both; font-size: 14px;color: #999999;margin-top: 10px;overflow: hidden;}
    .ctt-r-box-H .lxfs p span{float: left;width: 100px;height: 40px; text-align: right;margin-right: 10px;line-height: 40px;}
    .ctt-r-box-H .lxfs p input{float: left;box-sizing: border-box; padding-left: 20px; width: 300px;height: 40px;border: 1px solid #dddddd;border-radius: 5px;}
    .ctt-right .ctt-r-box-H .btn{display: block;width: 300px;height: 40px;background-color: #cc0000;border-radius: 5px;text-align: center;line-height: 40px;color: #fff;margin-top: 20px;margin-left: 130px;}
    .ctt-right .ctt-r-box-W{display: none;}
    }
  }

.caozuo-suc{ width: 420px;height: 100px;padding-left: 17px;padding-top: 25px; position: fixed; top:50%; left:50%;  transform: translate(-50%, -70%); box-sizing: border-box; z-index:200; background-color: #fff;}
.suc-img{float: left; width: 50px;height: 50px;background:url("../../assets/images/member/patent-icon-01.png") no-repeat 0 0 #cccccc;border-radius: 50%;margin-right: 15px; }
.caozuo-suc .suc-title{float: left; }
.caozuo-suc .suc-title p{font-size: 18px;color: #333;}
.caozuo-suc .suc-title p:nth-child(2){font-size: 14px;margin-top: 10px;}
.close{position: absolute;right: 20px;top: 20px;width: 16px;height: 16px;  color:#ccc; font-size: 20px; }

.cloud{
  position: fixed;
  top:0; left:0; width: 100%; height: 100%; z-index:100;
  background-color: rgba(0, 0, 0, 0.6);
}

</style>
