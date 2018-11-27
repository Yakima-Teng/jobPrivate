<template>
  <div class="member-data ">
    <div class="w1190">
      <memberNav :navbox="navbox" ></memberNav>
      <div class="show-main">
        <div class="content-ctt">
            <div class="ctt-right">
                <h2>会员资料</h2>
                <div class="ctt-r-box-H">
                  <label class="up-img"><input @change="upImgFn" type="file">点击上传头像</label>
                  <div class="img-list">
                    <span class="img-box"><img v-if="imgSrc==''"  src="../../assets/images/u26.jpg" alt=""><img v-if="imgSrc!=''" :src="imgSrc" alt=""></span>
                    <span class="img-box"><img v-if="imgSrc==''"  src="../../assets/images/u26.jpg" alt=""><img v-if="imgSrc!=''" :src="imgSrc" alt=""></span>
                    <span class="img-box"><img  v-if="imgSrc==''"  src="../../assets/images/u26.jpg" alt=""><img v-if="imgSrc!=''" :src="imgSrc" alt=""></span>
                  </div>
                  <a href="javascript:void(0);" @click="submitFn" class="btn">保存</a>
                </div>
                <div class="ctt-r-box-W"></div>
            </div>
        </div>
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
      imgSrc: '',
      token: cookies.get('token')
    }
  },
  methods: {
    upImgFn (el) {
       if (typeof (FileReader) === 'undefined') {
          alert('您的浏览器暂不支持上传图片，请将浏览器切换至极速模式，或使用谷歌浏览器')
      } 
      let that = this;
      let file = el.target.files;
      if (file[0].type.indexOf('image/') < 0) {
        alert('请上传图片');
      }
      var reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = function (el) {
        // console.log(el.currentTarget.result);
        that.imgSrc = el.currentTarget.result;
      }
    },
    submitFn () {
      let that = this;
      let url = `/user/index/edit?token=${this.token}`;
      let f = document.querySelector('.up-img').querySelector('input').files[0]
      // console.log(f);
      let formdata = new FormData();
      formdata.append('head_img', f)
      Api.postFile(url, formdata).then( res => {
        // console.log(res.data);
        this.$router.go(0);
      })
    },
    getDataFn () {
      let token = this.token;
      let url = `/user/index/index?token=${token}`;
      // console.log(url);
      Api.get(url).then( res => {
        // console.log(res.data);
        if (res.data.user.head_img) {
          this.imgSrc = res.data.user.head_img;
        }
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
    h2{font-size: 18px;color: #333333;line-height: 40px;}
    .ctt-r-box-H{
      .up-img{
        display: block; cursor: pointer;
        width: 200px;
        height: 40px; 
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-top: 20px;
        margin-left: 130px;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        color: #666;
        input{
          position: absolute; top:0; left:0; z-index:-999;
        }
      }
      .img-list{
        overflow: hidden; 
        width: 100%; margin-top: 40px; margin-left: 130px;
        .img-box{
          display: inline-block; position: relative;
          margin-right: 50px; 
          border: 1px solid #ddd;
          img{
            display: block; 
            width: 100%; height: 100%;
          }
          &:first-of-type{
            width: 200px; height: 200px;
            &:after{
              content: "200 * 200";
              display: block; text-align: center;
              font-size: 12px; width: 100%; margin-top: 10px;
              color: #999; 
            }
          }
          &:nth-of-type(2) {
            width: 120px; height: 120px;
            &:after{
              content: "120 * 120";
              display: block; text-align: center;
              font-size: 12px; width: 100%; margin-top: 10px;
              color: #999; 
            }
          }
          &:nth-of-type(3) {
            width: 50px; height: 50px;
            &:after{
              content: "50 * 50";
              display: block; text-align: center;
              font-size: 12px; width: 100%; margin-top: 10px;
              color: #999; 
            }
          }
        }
      }
      .btn{
        display: block;
        width: 300px;
        height: 40px;
        background-color: #cc0000;
        border-radius: 5px;
        text-align: center;
        line-height: 40px;
        color: #fff;
        font-size: 14px;
        margin-left: 130px;
        margin-top: 40px;
      }
    }
  }
}


</style>
