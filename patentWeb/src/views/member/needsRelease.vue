<template>
  <div class="my-needs">
    <div class="  w1190">
      <member-nav :navbox="navbox" ></member-nav>
      <div class="main-box">
        <div class="img-box"><img src="../../assets/images/member/xqfb.jpg" alt=""></div>
        <div class="form-box">
          <div class="left-title">
              <h3>发布需求</h3>
              <span v-show="isErr">{{error}}</span>
          </div>
          <div class="shenqing2">
                  <em>专利要求</em>
                  <textarea v-model="ask" placeholder="可输入4-100字"></textarea> 
              </div>
              <div class="leixing">
                  <h3>类型要求</h3>
                  <label><input type="checkbox" v-model="type" value="105">发明专利</label>
                  <label><input type="checkbox" v-model="type" value="106">实用新型</label>
                  <label><input type="checkbox" v-model="type" value="107">外观专利</label>
              </div>
              <div class="xiazheng">
                  <h3>下证要求</h3>
                  <label><input type="checkbox" v-model="status" value="98">已下证</label>
                  <label><input type="checkbox" v-model="status" value="99">授权未交费</label>
              </div>
              <a class="btn-qr" href="javascript:void(0);" @click="submitHandle">确认提交</a>
        </div>
        <div class="aside-list" v-if="needs">
          <h3>有更多人正在发布需求</h3>
          <div class="right_bottom">
              <div class="box" v-for="(need, index) in needs.list" :key="index">
                  <img v-if="need.head_img" :src="need.head_img" alt="">
                  <img v-else src="../../assets/images/u26.jpg" alt="">
                  <p><i>{{need.nick}}</i> 发布需求</p>
                  <em>{{need.ago}}</em>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import memberNav from '@/components/member/memberNav'

import { GET_NEEDS_LIST } from '@/components/patent/module'

import { api } from '@/assets/js/util.js'

export default {
  components:　{
    memberNav
  },
  data () {
    return {
      navbox: "needs",
      token: this.$store.state.token,
      ask: '',
      isErr: false,
      error: '',
      type: [],
      status: []
    }
  },
  created(){
    this.$store.dispatch(GET_NEEDS_LIST,{page: 1, url:'/needs?page_size=5&p=1'});
  },
  computed: {
      needs(){
          var needs = this.$store.state.patent.needs;
          return needs != null ? needs.needs : null;;
      }
  },
  methods: {
    submitHandle: function(){
      var Api = api();
      var _this = this;
      if(!this.ask.length){
        this.isErr = true;
        this.error = '请输入专利需求';
        return false;
      }else{
        this.isErr = false;
        this.error = ''
      }
      if(!this.type.length){
        this.isErr = true;
        this.error = '请选择专利类型';
        return false;
      }else{
        this.isErr = false;
        this.error = ''
      }
      if(!this.status.length){
        this.isErr = true;
        this.error = '请选择下证要求';
        return false;
      }else{
        this.isErr = false;
        this.error = ''
      }
      var data = {
        'content': _this.ask,
        'type': _this.type,
        'money_stauts': _this.status,
        'urgent': 2
      }
      Api.post('/user/needs/add?token='+this.token, data).then(res => {
        if(res.data.code == 200){
          _this.$router.go(0);
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.my-needs{
  background-color: #f2f3f4;
  .w1190{
    padding:30px 0;
  }
  .main-box{
    padding-bottom: 80px;
    overflow: hidden;
    margin-left: 180px; 
    background-color: #fff;
  }
  .form-box{
    width: 510px;overflow: hidden; padding-top: 20px; padding-left: 20px; float: left;
    .left-title{width: 100%;overflow: hidden; }
    .left-title h3{float: left; font-size: 18px;color: #333333;line-height: 40px; }
    .left-title span{float: left;width: 260px;height: 30px;background-color: #fff4f4;font-size: 12px;color: #FF0000;text-align: center;line-height: 30px;border: 1px solid #f1b8b8;margin-left: 78px;margin-top: 5px; }

    .shenqing2{width: 440px;margin-left: 70px;margin-top: 25px;overflow: hidden;}
    .shenqing2 em{float: left;width: 60px; line-height: 30px; font-size: 14px;color: #666;}
    .shenqing2 textarea{float: left; box-sizing: border-box; width: 360px;height: 120px;border: 1px solid #ddd;border-radius: 5px;padding-left: 10px;padding-top: 10px;margin-left: 20px;}
    .leixing{width: 418px;margin-left: 70px;margin-top: 20px;font-size: 0px;}
    .leixing h3{display: inline-block; font-size: 14px;color: #666;margin-right: 20px;} 
    .leixing label{font-size: 14px;color: #666;margin-right: 30px;line-height: 16px;}
    .xiazheng{width: 418px;margin-left: 70px;margin-top: 20px;font-size: 0px;}
    .xiazheng h3{display: inline-block; font-size: 14px;color: #666;margin-right: 20px;} 
    .xiazheng label{font-size: 14px;color: #666;margin-right: 30px;line-height: 16px;}
    .xiazheng label:nth-child(2){margin-right: 43px;}
    .xiazheng label:nth-child(3){margin-right: 0px;}
    .btn-qr{display: block;width: 180px;height: 40px;line-height: 40px;background-color: #cc0000;text-align: center;color: #fff;font-size: 14px;border-radius: 5px;margin: 20px auto 0;}
  }
  .aside-list{
    float: right; display: inline-block; 
    margin-right: 20px; margin-top: 20px; margin-bottom: 40px; 
    border-left: 1px solid #dddddd;
    h3{font-size: 14px;color: #333;line-height:40px;margin-left: 20px; }
    .right_bottom{
      box-sizing: border-box; width: 100%; padding-left: 20px;padding-top: 10px; 
      .box{width: 220px;height: 60px;border-bottom: 1px dashed #dddddd;}
      .box:nth-last-of-type(1){border-bottom: none;}
      .box img{float: left; width: 40px;height: 40px;margin-top: 10px; border-radius: 50%; }
      .box p{float: left; font-size: 12px;color: #999999;line-height: 60px;margin-left: 10px;}
      .box p i{color: #219f9e;}
      .box em{float: right;color: #999999;font-size: 12px;line-height: 60px;}
      }
  }

}
</style>

