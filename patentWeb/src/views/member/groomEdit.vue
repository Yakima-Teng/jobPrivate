<template>
  <div class="groom-edit">
    <div class="w1190">
      <h3 class="title">推荐函编辑</h3>
      <div class="form-box">
        <div class="tjh-mc">
            <span>推荐函名称 <em>*</em></span>
            <span class="err" v-show="err" >{{errText}}</span>
            <input v-model="ruleForm.title" type="text">
        </div>
        <div class="kcb">
            <p>开场白（选填）</p>
            <textarea v-model="ruleForm.desc" placeholder="根据您的需求，为您推荐了符合要求的专利"></textarea>
        </div>
        <div class="xsnr">
            <p>显示内容</p>
            <a href="javascript:void(0);" @click="showColumnFn('area')" :class="{cur: ruleForm.show_column.indexOf('area') >=0}" >专利领域</a>
            <a href="javascript:void(0);" @click="showColumnFn('price')" :class="{cur: ruleForm.show_column.indexOf('price') >=0}" >价格</a>
        </div>
        <div class="w-q-m">
            <p>联系电话（选填）</p>
            <div  v-show="rules.mobileType" class="show-list">
              <span>{{ruleForm.mobile == '' ? '未设置' : ruleForm.mobile}}</span>
              <a href="javascript:void(0);"  @click="rules.mobileType = false" class="edit-btn" ></a>
            </div>
            <div  v-show="!rules.mobileType" class="edit-list">
              <input v-model="rules.mobile" type="text">
              <a href="javascript:void(0);" @click="rcmdFn('mobile')" class="qd"></a>
              <a href="javascript:void(0);"  @click="rules.mobileType = true"  class="qx">取消</a>
            </div>
        </div>
        <div class="w-q-m">
            <p>微信（选填）</p>
            <div  v-show="rules.weixinType" class="show-list">
              <span>{{ruleForm.weixin == '' ? '未设置' : ruleForm.weixin}}</span>
              <a class="edit-btn"  @click="rules.weixinType = false "  href="javascript:void(0);"></a>
            </div>
            <div v-show="!rules.weixinType" class="edit-list">
              <input type="text" v-model="rules.weixin">
              <a href="javascript:void(0);" @click="rcmdFn('weixin')" class="qd"></a>
              <a href="javascript:void(0);"  @click="rules.weixinType = true" class="qx">取消</a>
            </div>
        </div>
        <div class="w-q-m">
            <p>QQ（选填）</p>
            <div v-show="rules.qqType" class="show-list">
              <span>{{ruleForm.qq == '' ? '未设置' : ruleForm.qq}}</span>
              <a  class="edit-btn"  @click="rules.qqType = false " href="javascript:void(0);"></a>
            </div>
            <div v-show="!rules.qqType" class="edit-list">
              <input v-model="rules.qq" type="text">
              <a href="javascript:void(0);" @click="rcmdFn('qq')" class="qd"></a>
              <a href="javascript:void(0);"  @click="rules.qqType = true" class="qx">取消</a>
            </div>
        </div>
        <div class="w-q-m">
            <p>邮箱（选填）</p>
            <div  v-show="rules.emailType" class="edit-list">
              <span>{{ruleForm.email == '' ? '未设置' : ruleForm.email}}</span>
              <a  class="edit-btn" @click="rules.emailType = false" href="javascript:void(0);"></a>
            </div>
            <div  v-show="!rules.emailType" class="edit-list">
              <input v-model="rules.email" type="text">
              <a href="javascript:void(0);" @click="rcmdFn('email')" class="qd"></a>
              <a href="javascript:void(0);"  @click="rules.emailType = true" class="qx">取消</a>
            </div>
        </div>
      </div>
      <div class="patent-list">
        <div class="right-top">
            <label><input type="checkbox" @change="checkAllFn"><span>全选</span></label>
            <a href="javascript:void(0);" @click="delPatentFn" class="del">删除</a>
            <!-- <a href="javascript:void(0);" class="tj" >添加专利</a> -->
            <router-link to="/member/patent" target="_blank"  class="tj" >添加专利</router-link>
        </div>
        <div class="table-box">
          <table>
            <tbody>
              <tr>
                <th width="50" ></th>
                <th>专利信息</th>
                <th width="150">类型</th>
                <th width="150">下证状态</th>
                <th  >专利领域</th>
                <th width="150">报价</th>
              </tr>
              <tr v-for="(key, index) in ruleForm.content" :key="key.p_id" >
                <td>
                  <input @change="checkFn" :i="index"  type="checkbox">
                </td>
                <td class="patent-info">
                  <p>{{key.name}}</p>
                  <p>申请号：{{key.reg_id}}</p>
                </td>
                <td>{{key.type_str}}</td>
                <td>{{key.money_status}}</td>
                <td>{{key.area}}</td>
                <td>
                  <input type="text"  v-model="key.price" >元
                </td>
              </tr>
              <!-- <tr>
                <td>
                  <input type="checkbox">
                </td>
                <td class="patent-info">   
                  <p>一种视频监控设备支架的地面固定装置一种视频监控设备支架的地面固定装置</p>
                  <p>申请号：2013105039145</p>
                </td>
                <td>实用新型</td>
                <td>未缴费</td>
                <td>LED、灯头、点钞机、灯头、点钞机</td>
                <td>
                  <input type="text" placeholder="1000">元
                </td>
              </tr> -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <a href="javascript:void(0);" @click="submitFn" class="form-btn">保存预览</a>
  </div>
</template>

<script>
import { api } from '@/assets/js/util.js'
const Api = api();

import cookies from 'js-cookie'

import pages from '@/components/pagination'

export default {
  components: {
    pages
  },
  data () {
    return {
      token: cookies.get('token'),
      err: false,
      errText: '',
      ruleForm: {
        title: '',
        mobile: '',
        weixin: '',
        qq: '',
        content: '',
        uid: '',
        email: '',
        show_column: '',
        desc: ''

      },
      rules: {
        mobileType: true,
        mobile: '',        
        qqType: true,
        qq: '',
        weixinType: true,
        weixin: '',
        emailType: true,
        email: ''
      },
    }
  },
  methods: {
    // 显示内容修改
    showColumnFn(data) {
      let i = this.ruleForm.show_column.indexOf(data);
      if (i >= 0) {
        this.ruleForm.show_column.splice(i, 1)
      } else {
        this.ruleForm.show_column.push(data)
      }
    },
    // 左侧编辑展示切换
    rcmdFn (data) {
      this.ruleForm[data] = this.rules[data];
      this.rules[data + 'Type'] = true;
    },
    // 删除专利
    checkAllFn(el) {
      let that = this;
      let e = el.target;
      let list = document.querySelector('.table-box').querySelectorAll('input[type=checkbox]');

      [].forEach.call(list, function (el) {
        el.checked = e.checked
        if (el.checked) {
          that.ruleForm.content.forEach( e => {
            e.del = true
          })
        } else {
          that.ruleForm.content.forEach( e => {
            e.del = false
          })
        }
      })
    },
    checkFn(el) {
      let i = el.target.getAttribute('i');
      if (el.target.checked) {
        this.ruleForm.content[i].del = true
      } else {
        this.ruleForm.content[i].del = false
      }
    },
    delPatentFn () {
      let list = this.ruleForm.content.filter( el => {
        if (!el.del) {
          return el
        }
      })
      this.ruleForm.content = list
    },
    // 提交
    submitFn (e) {
      let u = this.$route.query;
      let url;
      if(this.ruleForm.title == ''){
        this.err = true;
        this.errText = '请输入推荐函名称';
      }else{
        this.err = false;
        if (u.id && u.id != '') {
          url = `/user/rcmd/edit?token=${this.token}&id=${u.id}`;
        } else {
          url = `/user/rcmd/add?token=${this.token}`;
        }
        Api.post(url, this.ruleForm).then( res => {
          if (res.data.code != 200) {
            this.err = true;
            this.errText = res.data.msg
          } else {
            location.href = res.data.url;
          }
        });
      }
    },
    // 获取数据
    getDataFn () {
      this.ruleForm['uid'] = cookies.get('uid');
      let url;
    
      let u = this.$route.query;
      if (u.id && u.id != '') {
        url = `/user/rcmd/edit?token=${this.token}&id=${u.id}&pid=${u.p ? u.p : ''}`;
      } else {
        url = `/user/rcmd/add?token=${this.token}&pid=${u.p ? u.p : ''}`;
      }
      Api.get(url).then( res => {
        if (res.data.code == 200) {
          this.ruleForm = res.data.rcmd;
          this.ruleForm.show_column = res.data.rcmd.show_column ? res.data.rcmd.show_column : [];
          this.ruleForm.content.forEach( el => {
            el.del = false
          })
          this.rules.mobile = res.data.rcmd.mobile
          this.rules.weixin = res.data.rcmd.weixin
          this.rules.qq = res.data.rcmd.qq
          this.rules.email = res.data.rcmd.email
        }
      })
      const listUrl = `/user/rcmd/index${this.token}`;
    },
    // getListFn () {
    //   const url = `/user/patent/user_patent?token=${this.token}&p=${this.pageId}`;
    //   console.log(url);
    //   Api.get(url).then( res => {
    //     console.log(res.data);
    //     this.listData = res.data.patent.list
    //     console.log(this.listData);
    //   })
    // }
  },
  mounted () {
    this.getDataFn();
    // this.getListFn();
  }
}
</script>

<style lang="scss" scoped>
.groom-edit{
  padding:30px 0;
  background-color: #f2f3f4;
  .w1190{
    overflow: hidden;
  }
  .title{
    display: block;
    height: 30px;
    color: #333;
    font-size: 18px;
    line-height: 30px
  }
  .form-box{
    float: left;width: 311px; height: 720px;  background-color: #fff;box-sizing: border-box;border-right: 1px solid #dddddd; padding: 20px 20px 0;margin-top: 25px;overflow: hidden;}
    .tjh-mc{width: 100%;height: 60px; overflow: hidden; }
    .tjh-mc span:nth-child(1){float: left;font-size: 14px;color: #999;width: 100px;height: 30px;line-height: 30px;
      em{ color: #cc0000;}
    }
    .tjh-mc span.err{float: left;width: 170px;height: 30px;box-sizing: border-box;border: 1px solid #f1b8b8;background-color: #fff4f4;text-align: center;line-height: 30px;color: #ff0000;font-size: 12px; }
    .tjh-mc input{width: 270px;height: 30px;box-sizing: border-box;border: 1px solid #ddd;clear: both; }
    .kcb{width: 100%;height: 110px; overflow: hidden;margin-top: 20px;}
    .kcb p{width: 290px;height: 30px;line-height: 30px;color: #999;font-size: 14px; }
    .kcb textarea{display:block; width: 270px;height: 80px;box-sizing: border-box;border: 1px solid #ddd;padding-left: 10px;padding-top: 10px; }
    .xsnr{width: 100%;overflow: hidden;margin-top: 20px;}
    .xsnr p{width: 270px;height: 30px;line-height: 30px;font-size: 14px;color: #999;}
    .xsnr a{float: left; margin-right: 10px; font-size: 14px;line-height: 30px;box-sizing: border-box;border: 1px solid #cccccc;border-radius: 5px;color: #333;text-align: center; padding:0 10px; }
    .xsnr a.cur{ padding-left: 30px; padding-right: 10px; border-color: #009999;color: #009999;background: url("../../assets/images/member/blue-right.png")  no-repeat  10px center;text-align: left; background-size: 14px 10px;margin-right: 10px; }
    .w-q-m input{float: left; width: 160px;height: 30px;box-sizing: border-box;border: 1px solid #ddd;padding-left: 10px;margin-top: 10px;margin-right: 12px; }
    .w-q-m .qd{float: left;width: 40px;height: 30px;line-height: 30px; border-radius: 5px;background:url("../../assets/images/member/duihao.png") no-repeat  10px 9px #009999;background-size: 19px 12px; margin-top: 10px;margin-right: 8px; }
    .w-q-m .qx{float: left;width: 50px;height: 30px;line-height: 30px;text-align: center;border-radius: 5px;margin-top: 10px;box-sizing: border-box;border: 1px  solid #ddd;font-size: 14px;color: #333; }
    .w-q-m{width: 100%;overflow: hidden;margin-top: 20px; }
    .w-q-m p{width: 270px;height: 30px;line-height: 30px;font-size: 14px;color: #999;}
    .w-q-m span{float: left;font-size: 14px;color: #333;line-height: 30px; }
    .w-q-m a.edit-btn{float: right;width: 20px;height: 20px;background: url("../../assets/images/member/bianji.png") no-repeat 0 0;background-size: 20px 19px; }
    .edit-list, .show-list{
      overflow: hidden;
    }
    .table-box{
      width: 100%; height:650px;
      overflow-y: scroll;
      table{
        width: 100%;
      }
      th{
        height: 40px;
        background-color: #f6f6f6;
        box-sizing: border-box;
        border-top: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
        text-align: center;
        margin-right: 20px;
      }
      td{
        color:#333; line-height: 1.5; font-size: 14px;
      }
      td,th{
        text-align: center;
        padding:10px 0 ;
        border-bottom: 1px solid #dddddd;
        &:nth-of-type(2){
          text-align: left;
        }
      }
      .patent-info{
        p{
          line-height: 1.5;
        }
        p:nth-of-type(2){
          font-size: 13px;
          color: #999999;
          margin-top: 10px;
        }
      }
      input[type='checkbox']{
        width: 16px;
        height: 16px;
        background-color: #fff;
        border: 1px solid #c9c9c9;
        border-radius: 3px;
        outline: none;
        vertical-align: middle;
        background-color: #fff;
      }
      input[type='text']{
        width: 90px;
        height: 30px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        padding-left: 10px;
      }
    }
  .patent-list{
    width: 879px; float: left;margin-top: 25px;background-color: #fff;overflow: hidden;
    .right-top{
      overflow: hidden;
      width: 100%;height: 70px;box-sizing: border-box;padding:20px 20px 0;background-color: #fff; 
        label{
          float: left;margin-top: 8px;  
          span{ font-size: 14px;color: #333;margin-left: 10px;margin-right: 10px;line-height: 20px; }
          input{
            outline: none;  vertical-align: middle;  
            width: 16px;   height: 16px; margin-top: -3px; border-radius: 3px;
            background-color: #fff;  border: 1px solid #c9c9c9; background-color: #fff;
          }
        }
        .del{float: left;width: 70px;height: 30px;box-sizing: border-box;border: 1px solid #ddd;border-radius: 5px;text-align: center;line-height: 30px;font-size: 14px;color: #333; }
        .tj{width: 100px;height: 30px;line-height: 30px;text-align: center;background-color: #cc0000;font-size: 14px;color: #fff;border-radius: 5px;float: right; }
      }
    
    .more-btn{
      display: block;
      width: 200px;
      height: 40px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 14px;
      color: #333;
      text-align: center;
      line-height: 40px;
      margin: 20px auto 0;
      clear: both;
    }
  }
  .form-btn{
    display: block;
    width: 200px;
    height: 40px;
    margin: 20px auto;
    line-height: 40px;
    box-sizing: border-box;
    font-size: 14px;
    color: #fff;
    background-color: #cc0000;
    border-radius: 5px;
    text-align: center;
  }
  .layer-list{
    position: fixed;  box-sizing: border-box;
    top:50%; left:50%; width: 900px; padding:60px 20px 40px; z-index: 200;
    background-color: #fff;
    transform: translate(-50%, -50%); 
    .table-box{
      height:500px;
    }
    .close{position: absolute;right: 20px;top: 20px;width: 16px;height: 16px;  color:#ccc; font-size: 26px; }

  }
  .cloud{
    position: fixed;
    top:0; left:0; width: 100%; height: 100%; z-index:100;
    background-color: rgba(0, 0, 0, 0.6);
  }
}
</style>


