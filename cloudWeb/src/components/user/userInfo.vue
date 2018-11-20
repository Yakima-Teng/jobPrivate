<template>
 <div class="container">
     <p class="user-head">个人资料</p>
     <div class="user-cont">
            <div class="h-portrait clearfix">
             <h6>头&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;像 :</h6>
             <el-upload
                class="avatar-uploader"
                action="http://upload.gbicom.com/controller.php"
                :data='{upfile:"upfile",action:"uploadimage"}'
                name="upfile"
                :show-file-list="false"
                :auto-upload='true'
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p>仅支持jpg、jpeg格式，文件小于2M</p>
         </div>
         <div class="username clearfix">
             <h6>用&nbsp;户&nbsp;名 :<span>*</span></h6>
             <input type="text" v-model="username" @focus="usernameFocus" @blur="usernameBlur">
             <p>可用于登录哦~</p>
         </div>
         <i v-show="step" class="step" :class="[{err:error},{sus:success}]">{{stepMsg}}</i>
         <div class="usersex clearfix">
             <h6>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别 :</h6>
             <input type="radio" name="sex" value='1' v-model="gender"><span>男</span>
             <input type="radio" name="sex" value='2' v-model="gender"><span>女</span>
             <input type="radio" name="sex" value='3' v-model="gender"><span>保密</span>
         </div>
         <div class="birthday clearfix">
             <h6>生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日 :</h6>
             <div class="block">
                <el-date-picker
                v-model="birthdayVal"
                value-format="yyyyMMdd"
                type="date"
                placeholder="选择日期">
                </el-date-picker>
            </div>
         </div>
         <div class="region">
             <h6>所在地区:</h6>
             <!-- <select id="cmbProvince" name="cmbProvince" v-model="pro" @click="noshow"></select>
             <span v-show="show" @click="noshow">{{pro2}}</span>  
             <select id="cmbCity" name="cmbCity" v-model="city" @click="noshow"></select>  
             <span v-show="show" @click="noshow">{{city2}}</span> 
             <select id="cmbArea" name="cmbArea"  v-model="area" @click="noshow"></select> 
             <span v-show="show" @click="noshow">{{area2}}</span>  -->
             <v-distpicker :province="select.province" :city="select.city" :area="select.area" @selected="onSelected" hide-area></v-distpicker>
         </div>
         <div class="user-address clearfix">
             <h6>详细地址:</h6>
             <input type="text" v-model="address">
         </div>
         <div class="user-mail clearfix">
             <h6>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 :</h6>
             <input type="text" v-model="email">
         </div>
         <button @click="sub">确定</button>
     </div>
 </div>
</template>
<script>
import { addressInit } from "../../static/js/address.js"
import { formatDateTime } from "../../static/js/util.js"
import Api from '../../static/js/api.js'
// import VDistpicker from 'v-distpicker'
import {mapState} from 'vuex'
export default {
metaInfo () {
    return {
        title: '账户信息-创新科技服务云平台',
    }
},
 data() {
  return {
      imageUrl: '',
      birthdayVal:'',
      select: {
            province:'',
            city:'',
            area:''
        },
    //   pro:'请选择省份',  //省
    //   city:'请选择城市', //市
    //   area:'请选择区县', //区
      username:'',
      gender:3,
      address:'',
      email:'',
      file:'',
      sustitle:false,
    //   pro2:'',  //省
    //   city2:'', //市
    //   area2:'', //区
      show:true,
      num:0,
      step:false,//信息提示
      stepMsg:'支持中文、英文字母、数字，两种及以上的组合，4-20个字符',
      error:false,
      success:false,
      oredername:'',
  }
 }, 
 components: {
    //  VDistpicker 
 },
 computed: {
     ...mapState(['isLogin'])
},
 created () {
     if(this.isLogin){
		this.getUserinfo();  
	}else{
        this.userView=this.$route.query.userView;
		this.$router.push({path:'/login',query:{userView:this.userView}})
	}
     
   
 },
 beforeMount() {
   // 只会在浏览器执行 
   this.$options.components.VDistpicker = resolve => require(['v-distpicker'], resolve);
   
  },
 methods: {
     onSelected(data) {
         //三级联动全部完成
	  this.select = {
		  province:data.province.value,
		  city:data.city.value,
		  area:data.city.value
	  }
    },
    handleAvatarSuccess(res, file) {
        //设置用户头像
        this.imageUrl = res.url;
    },
    beforeAvatarUpload(file) {
        this.file=file;
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 或 JPEG 格式!');
        }
        if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
    },
    sub(){
        //保存
        this.setUserinfo();
    },
    getUserinfo(){
        //获取用户信息
        Api.getUserInfo().then(res=>{
            console.log(res);
            if(res.data.code==200){
                this.imageUrl=res.data.data.header_img;
                this.birthdayVal=res.data.data.birthday;
                this.address=res.data.data.address;
                this.username=res.data.data.username;
                this.gender=res.data.data.gender;
                this.email=res.data.data.email;
                this.oredername=res.data.data.username;
                this.select.province=res.data.data.province
                this.select.city=res.data.data.city
                this.select.area=res.data.data.area;
            }
        })
    },
    setUserinfo(){
        //设置用户信息
        var data={
            imageUrl:this.imageUrl,
            birthdayVal:this.birthdayVal,
            pro:this.select.province,
            city:this.select.city,
            area:this.select.area,
            address:this.address,
            username: this.username,
            gender: this.gender,
            email:this.email
        }
        Api.setUserInfo(data).then(res=>{
            if(res.data.code==200){
                this.$message({
                    message: '恭喜你，修改成功',
                    type: 'success',
                    duration:1500,
                });
                this.num=0;
            }else{
                this.$message({
                    message: res.data.msg,
                    type: 'error',
                    duration:1500,
                });
            }
        })
    },
    checkUserName(){
        //检查用户名是否可用
        this.stepMsg='支持中文、英文字母、数字，两种及以上的组合，4-20个字符';
        this.success=false;
        this.error=false;
        if(this.oredername!=this.username){
            Api.checkuserName(this.username).then(res=>{
                console.log(res);
                if(res.data.code==504){
                    this.stepMsg=res.data.msg
                    this.success=false;
                    this.error=true;
                }else if(res.data.code==505){
                    this.stepMsg=res.data.msg
                    this.success=false;
                    this.error=true;
                }else if(res.data.code==506){
                    this.stepMsg=res.data.msg
                    this.success=false;
                    this.error=true;
                }else if(res.data.code==200){
                    this.stepMsg="可以使用"
                    this.success=true;
                    this.error=false;
                }
            })
        }else{
            this.step=false;
        }
    },
    usernameFocus(){
        this.step=true;
    },
    usernameBlur(){
        var reg=/^(?=.*[a-z])(?=.*[0-9])|(?=.*[a-z])(?=.*[\u4E00-\u9FA5])|(?=.*[0-9])(?=.*[\u4E00-\u9FA5])[\u4E00-\u9FA5A-Za-z0-9]{4,20}$/gi;
        if(reg.test(this.username)){
            this.checkUserName();
        }else{
            this.stepMsg="用户名格式错误"
            this.success=false;
            this.error=true; 
        }
        
    },
    // noshow(){
    //     if(this.num==0){
    //         this.pro = '请选择省份'
    //         this.city = '请选择城市'
    //         this.area = '请选择区县'
    //         this.show=false;
    //         this.num=1;
    //     }else{
    //         this.show=false;
    //     }
    // }
 }
}
</script>

<style scoped lang="scss">
    .user-head{
        font-size: 16px;
        color: #333333;
        font-weight: bold;
        padding: 28px 0 14px 42px;
        border-bottom: 1px solid #eeeeee;
        background: white;
        width: 1040px;
        box-sizing: border-box; 
        margin-top: 10px;
    }
    .user-cont{
        padding: 80px 110px;
        background: white;
        margin-bottom: 80px;
        h6{
            float: left;
            width: 64px;
            font-size: 14px;
            color: #666666;
            margin-right: 20px;
            height: 34px;
            line-height: 34px;
        }
        div~div{
            margin-top: 30px;
        }
        .step{
            font-size: 12px;
            position: relative;
            left:85px;
            &.err{
                color:#e52e3a;
            }
            &.sus{
                color:#34bb45;
            }
        }
        .h-portrait{
            position: relative;
            
            p{
                float: left;
                padding-top: 96px;
                font-size: 14px;
                color: #999999;
                margin-left: 16px;
            }
        }
        .username{
            h6{
                position: relative;
                span{
                    position: absolute;
                    left:-14px;
                    color:#e52e3a;
                    font-size: 12px;
                    top:13px;
                }
            }
            input{
                width: 320px;
                height: 34px;
                line-height: 34px;
                border: 1px solid #e5e5e5;
                float: left;
                padding-left: 10px;
            }
            p{
                float: left;
                font-size: 14px;
                color: #999999;
                margin-top: 12px;
                margin-left: 16px;
            }
        }
        .usersex{
            input{
                margin-left: 40px;
                position: relative;
                top:2px;
            }
            span{
                margin-left: 10px;
                font-size: 14px;
                color: #333333;
                line-height: 34px;
            }
        }
        .region{
            position: relative;
            select{
                width: 98px;
                height: 34px;
                border: 1px solid #e5e5e5;
            }
            span{
                font-size: 15px;
                position: absolute;
                top:10px;
                color: #666;
                background: white;
                display: inline-block;
                width: 75px;
            }
            span:nth-child(3){
                left:89px;
            }
            span:nth-child(5){
                left:192px;
            }
            span:nth-child(7){
                left:295px;
            }
            
        }
        .user-address{
             input{
                width: 400px;
                height: 34px;
                line-height: 34px;
                border: 1px solid #e5e5e5;
                padding-left: 10px;
            }
        }
        .user-mail{
            input{
                width: 400px;
                height: 34px;
                line-height: 34px;
                border: 1px solid #e5e5e5;
                padding-left: 10px;
            }
        }
        button{
            outline: none;
            border: none;
            width: 84px;
            height: 32px;
            line-height: 32px;
            font-size: 16px;
            cursor: pointer;
            color:white;
            background:#e52e3a;
            margin-top:40px;
            margin-left:100px ;
            display: block;
            &:hover{
                background:#ff3341;
            }
        }
    }
</style>
<style>
    .avatar-uploader{
        float: left;
    }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 110px;
    height: 110px ;
    line-height: 110px !important;
    text-align: center;
  }
  .avatar {
    width: 110px;
    height: 110px;
    display: block;
  }
  .el-input__inner{
      border-radius: 0;
  }
</style>