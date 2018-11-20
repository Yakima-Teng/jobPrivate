<template>
<div class="patent-butler">
  <div class="w1190">
    <patent-nav  :navbox="navbox" ></patent-nav>
    <div class="show-main">
      <div class="banner">
        <img src="../../assets/images/member/patent-banner.jpg" alt="">
      </div>
      <h3 class="title">发布/更新专利</h3>
      <div class="form-left form-box">
          <p class="inp-list err-list" ><em>单个专利发布</em><span v-show="leftErrText != ''" class="err">{{leftErrText}}</span></p>
          <p class="inp-list" ><em>申请号</em><input v-model="ruleLeftForm.reg_id" class="text-list" type="text"></p>
          <p class="inp-list" ><em>出售价格</em><input  :disabled="my" v-model="ruleLeftForm.price" type="text" class="my text-list"><i>元</i><label class="face-to-face"><input @change="myFn"  type="checkbox"><span>面议</span></label></p>
          <p class="inp-list" ><em>专利领域</em><textarea v-model="ruleLeftForm.area" name="" id="" placeholder="选填"></textarea></p>
          <a href="javascript:void(0);" class="form-btn" @click="submitFn" >确认提交</a>
          <p class="to-talk"><label ><input type="checkbox" @click="leftYjFn" /><span>接受议价</span></label></p>
      </div>
      <div class="form-right form-box">
          <p class="inp-list err-list" ><em>专利批量处理</em><i>推荐</i><span class="err" v-show="rightErrText != ''" >{{rightErrText}}</span></p>
          <p class="inp-list" ><em>上传文件</em><label href="javascript:void(0);" class="xq-excel"><input type="file">选取excel文件</label></p>
          <p class="inp-list up-info" >上传文件请按照模板规范格式填写</p>
          <a href="javascript:void(0);" @click="getTemFn" class="xz-excel">下载excel模版</a>
          <a href="javascript:void(0);" @click="pSubmitFn" class="form-btn">确认提交</a>
          <p class="to-talk"><label ><input  @click="rightYjFn" type="checkbox"><span>接受议价</span></label></p>
      </div>
    </div>
  </div>
  <div v-show="editOk" class="cloud" ></div>
  <div v-show="editOk" class="caozuo-suc">
      <div class="suc-img"></div>
      <div class="suc-title">
          <p>操作成功</p>
          <p>内容已成功提交</p>
      </div>
      <a href="javascript:void(0);" @click="editOk = false" class="close icon-cuohao"></a>
  </div>
</div>
</template>

<script>
import { api } from '@/assets/js/util.js'
const Api = api();


import patentNav from '@/components/member/memberNav'
import pagentHead from '@/components/member/patentHead'
import pageModule from '@/components/pagination'

export default {
  components: {
    patentNav,
    pageModule,
    pagentHead
  },
  data () {
    return {
      navbox: 'patent',
      
      leftErrText: '',
      rightErrText: '',

      rightKan: 2,
      my: false,
      editOk: false,
      
      ruleLeftForm: {
        area: '',
        price: '',
        is_kan: '',
        reg_id: ''
      }
    }
  },
  methods: {
    getTemFn () {
      window.open(`http://patent.d.patent.local/user/patent/tpl?token=${this.$store.state.token}`)
    },
    myFn (el) {
      if (el.target.checked){
        this.ruleLeftForm.price = 0;
        this.my = true
      } else {
        this.ruleLeftForm.price = '';
        this.my = false
      }
    },
    rightYjFn (el) {
      if (el.target.checked) {
        this.rightKan = 1
      } else {
        this.rightKan = 2
      }
      // console.log(this.ruleLeftForm.is_kan);
    },
    leftYjFn (el) {
      if (el.target.checked) {
        this.ruleLeftForm.is_kan = 1
      } else {
        this.ruleLeftForm.is_kan = 2
      }
      // console.log(this.ruleLeftForm.is_kan);
    },
    submitFn () {
      let that = this;
      const url = `/user/patent/sale?token=${this.$store.state.token}`;
      Api.post(url, this.ruleLeftForm).then( res => {
        console.log(res.data)
        if (res.data.code != 200) {
          this.leftErrText = res.data.msg
        } else {
          this.editOk = true;
          setTimeout(() => {
            this.editOk = false;
          }, 3000);
        }
      })
    },
    pSubmitFn () {
      const url = `/user/patent/sale_import?token=${this.$store.state.token}`;
      let f = document.querySelector('.xq-excel').querySelector('input').files[0];
      let formdata = new FormData();
      formdata.append('xls', f);
      formdata.append('is_kan', this.rightKan);
      Api.postFile(url, formdata).then( res => {
        if (res.data.code != 200) {
          this.rightErrText = res.data.msg
        } else {
          this.editOk = true;
          setTimeout(() => {
            this.editOk = false;
          }, 3000);
        }
      })
    }
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


.patent-butler{
  padding:30px 0;
  background-color: #f2f3f4;
  .w1190{
    overflow: hidden;
  }
}
.show-main{
  overflow: hidden;
  background-color: $white;
  margin-left: 180px; padding-bottom: 50px;
  .banner{
    width: 100%;
    img{
      display: block;
    }
  }
  .title{
    font-size: 18px;
    color: #333333;
    line-height: 80px;
    margin-left: 20px;
  }
  .form-btn{
    clear: both;
    display: block;
    margin: 20px auto 0;
    width: 180px;
    height: 40px;
    font-size: 14px;
    color: #fff;
    line-height: 40px;
    text-align: center;
    background-color: #cc0000;
    border-radius: 5px;
  }
  .form-left{
    float: left;
    margin-left: 20px;
  }
  .form-right{
    float: right;
    margin-right: 20px; width: 480px;
  }
  .form-box{
    box-sizing: border-box;
    padding-bottom: 30px; padding-right: 40px;  padding-left: 20px;  padding-top: 20px; height: 410px;
    border: 1px solid #eeeeee;
    .inp-list{
      margin-bottom: 20px;
      &.err-list{
        em{line-height: 30px;  height: 30px;} 
        i{
          display: inline-block;
          width: 60px; margin-right: 10px;
          height: 30px;
          background-color: #009999;
          text-align: center;
          line-height: 30px;
          color: #fff;
          border-radius: 5px;
        }
      }
      .err{
        box-sizing: border-box; text-align: center; display: inline-block;
        padding:0 20px; height: 30px;  line-height: 30px; font-size: 12px; border-radius: 4px;
        background-color: #fff4f4;  color: #ff0000;   border: 1px solid #f1b8b8;
      }
      em { 
        text-align: right; display: inline-block; vertical-align: top;
        width: 100px;  margin-right: 10px;  line-height: 40px; font-size: 14px;;
      }
      input.text-list, textarea{
        width: 260px;   height: 40px; 
        box-sizing: border-box;  border: 1px solid #cccccc;
        border-radius: 5px;  padding-left: 10px;
        &.my{
          width: 180px;  border: 1px solid #cccccc;  background-color: #f2f3f4;
        }
      }
      .face-to-face{
        margin-left: 10px;
      }
      textarea{
        height:90px; padding:10px;
      }
      .xq-excel{
        box-sizing: border-box; display: inline-block; cursor: pointer;
        width: 200px;
        height: 40px;
        border: 1px solid #cccccc;
        border-radius: 5px;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        color: #666666;
        input{
          position: absolute;
          top:0; left:0; z-index: -999;
        }
      }
    }
    .to-talk{
      text-align: center;
      margin-top: 20px; font-size: 14px;
      color: #666666;
      input[type='checkbox'] {
        margin-right: 6px;
      }
    }
    .up-info{
      font-size: 14px; margin-left: 110px;
      color: #666666;
    }
    .xz-excel{
      display: block;
      color: #cc0000;
      margin-top: 20px;
      font-size: 14px;
      margin-left: 110px;
    }
  }
}
.caozuo-suc{ width: 420px;height: 100px;padding-left: 17px;padding-top: 25px; position: fixed; top:50%; left:50%;  transform: translate(-50%, -70%); box-sizing: border-box; z-index:200; background-color: #fff;}
.suc-img{float: left; width: 50px;height: 50px;background:url("../../assets/images/member/patent-icon-01.png") no-repeat 0 0 #cccccc;border-radius: 50%;margin-right: 15px; }
.caozuo-suc .suc-title{float: left; }
.caozuo-suc .suc-title p{font-size: 18px;color: #333;}
.caozuo-suc .suc-title p:nth-child(2){font-size: 14px;margin-top: 10px;}
.caozuo-suc .close {
  float: right;
  color:#999; font-size: 20px; margin-right: 20px; margin-top: -10px;
}
.cloud{
  position: fixed;
  top:0; left:0; width: 100%; height: 100%; z-index:100;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
