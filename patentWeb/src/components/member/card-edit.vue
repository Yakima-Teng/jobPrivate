<template>
<!-- 编辑 -->
<div class="bianji" v-show="isEdit">
    <h3>名片编辑</h3>
    <div class="bianji-wrap">
        <div class="bianji-left">
            <span class="err" v-show="isErr">{{error}}</span>
            <p class="p1"><span>您名片的称呼</span><input type="text" v-model="call"></p>
            <p class="p2"><span>所在公司/机构</span><input type="text" v-model="agen"></p>
            <div class="jianjie">
                <em>简介</em>
                <textarea v-model="desc"></textarea> 
            </div>
            <p class="p3">
                <span class="s1">专利信息显示</span>
                <label><input type="checkbox" v-model="show" value="price"><span>显示价格</span></label>
                <label><input type="checkbox" v-model="show" value="area"><span>显示专利领域</span></label>
            </p>
            <h4>联系信息</h4>
            <p class="l-p1"><span>电话</span><input type="text" placeholder="选填" v-model="tel"></p>
            <p class="l-p2"><span>微信</span><input type="text" placeholder="选填" v-model="wx"></p>
            <p class="l-p3"><span>QQ</span><input type="text" placeholder="选填" v-model="qq"></p>
            <p class="l-p4"><span>邮箱</span><input type="text" placeholder="选填" v-model="email"></p>
        </div>
        <div class="bianji-right">
            <h4>名片封面</h4>
            <div class="r-box img1 mar-r10 mar-b10" @click="coverChoose(1)">
                <p><em :class="{'cur':curIndex == 1}"></em>封面名称</p>
            </div>
            <div class="r-box img2 mar-b10" @click="coverChoose(2)">
                <p><em :class="{'cur':curIndex == 2}"></em>封面名称</p>
            </div>
            <div class="r-box img3 mar-r10 mar-b10" @click="coverChoose(3)">
                <p><em :class="{'cur':curIndex == 3}"></em>封面名称</p>
            </div>
            <div class="r-box img4 mar-b10" @click="coverChoose(4)">
                <p><em :class="{'cur':curIndex == 4}"></em>封面名称</p>
            </div>
            <div class="r-box img5 mar-r10 mar-b10" @click="coverChoose(5)">
                <p><em :class="{'cur':curIndex == 5}"></em>封面名称</p>
            </div>
            <div class="r-box img6 mar-b10" @click="coverChoose(6)">
                <p><em :class="{'cur':curIndex == 6}"></em>封面名称</p>
            </div>
            <div class="r-box img7 mar-r10" @click="coverChoose(7)">
                <p><em :class="{'cur':curIndex == 7}"></em>封面名称</p>
            </div>
            <div class="r-box img8" @click="coverChoose(8)">
                <p><em :class="{'cur':curIndex == 8}"></em>封面名称</p>
            </div>
        </div>
        <div class="bianji-bottom">
            <p>您还没有在售的专利，建议先添加专利</p>
            <router-link class="fb" to="/member/patent/p">发布专利</router-link>
            <a href="javascript:void(0);" class="bc" @click="savePublish">保存发布</a>
        </div>
    </div>
</div>
</template>

<script>
import { api } from '@/assets/js/util.js'
export default {
  props: ['isEdit', 'cardInfo'],
  data(){
      return {
          isErr: false,
          error: '',
          call: '',
          agen: '',
          desc: '',
          show: [],
          tel: '',
          wx: '',
          qq: '',
          email: '',
          curIndex: 0
      }
  },
  created(){
      this.call = this.cardInfo.call;
      this.agen = this.cardInfo.agen;
      this.desc = this.cardInfo.desc;
      this.show = this.cardInfo.show_column == null ? [] : this.cardInfo.show_column;
      this.tel = this.cardInfo.mobile;
      this.wx = this.cardInfo.weixin;
      this.qq = this.cardInfo.qq;
      this.email = this.cardInfo.email;
      this.curIndex = this.cardInfo.banner == null ? 1 : parseInt(this.cardInfo.banner);
  },
  methods: {
      coverChoose: function(index){
          this.curIndex = index;
      },
      savePublish: function(){
        var Api = api();
        var card = {
            'banner': this.curIndex.toString()
        };
        if(this.call == ''){
            this.isErr = true;
            this.error = '请输入您名片上的称呼';
            return false;
        }else{
            this.isErr = false;
            this.error = '';
            card['call'] = this.call;
        }
        if(this.agen == ''){
            this.isErr = true;
            this.error = '请输入您所在的公司/机构';
            return false;
        }else{
            this.isErr = false;
            this.error = '';
            card['agen'] = this.agen;
        }
        if(this.desc == ''){
            this.isErr = true;
            this.error = '请输入简介';
            return false;
        }else{
            this.isErr = false;
            this.error = '';
            card['desc'] = this.desc;
        }
        if(!this.show.length){
            this.isErr = true;
            this.error = '请选择专利信息显示内容';
            return false;
        }else{
            this.isErr = false;
            this.error = '';
            card['show_column'] = this.show;
        }
        if(this.tel){
            card['mobile'] = this.tel;
        }
        if(this.wx){
            card['weixin'] = this.wx;
        }
        if(this.qq){
            card['qq'] = this.qq;
        }
        if(this.email){
            card['email'] = this.email;
        }
        Api.post('/user/card/edit?token='+this.$store.state.token,card).then(function(res){
            if(res.data.code == 200 ){
                _this.$router.go(0);
            }
        });
      }
  }
}
</script>


<style lang="scss" scoped>
.bianji{width: 760px;height: 590px;position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); background-color: #fff;z-index: 9;}
.bianji h3{font-size: 18px;color: #000;line-height: 30px;margin-left: 20px;margin-top: 20px;}
.bianji .bianji-left{float: left;width: 450px;margin-top: 10px;margin-bottom: 20px;}
.bianji .bianji-left .err{display: block;width: 400px;height: 30px;border: 1px solid #f1b8b8;background-color: #fff4f4;font-size: 12px;color: #FF0000;text-align: center;line-height: 30px;box-sizing: border-box;margin-left: 50px;}

.bianji .bianji-left .p1,.bianji .bianji-left .p2,.bianji .bianji-left .l-p1,.bianji .bianji-left .l-p2,.bianji .bianji-left .l-p3,.bianji .bianji-left .l-p4{width: 400px;margin-top: 10px;overflow: hidden;margin-left: 50px;}

.bianji .bianji-left .p1 span,.bianji .bianji-left .p2 span,.bianji .bianji-left .l-p1 span,.bianji .bianji-left .l-p2 span,.bianji .bianji-left .l-p3 span,.bianji .bianji-left .l-p4 span{width: 90px; float: left;font-size: 14px;color: #666666;line-height: 30px;margin-right: 10px;}
.bianji .bianji-left .p1 input,.bianji .bianji-left .p2 input,.bianji .bianji-left .l-p1 input,.bianji .bianji-left .l-p2 input,.bianji .bianji-left .l-p3 input,.bianji .bianji-left .l-p4 input{float: left;width: 300px;height: 30px;border: 1px solid #dddddd;border-radius: 5px;box-sizing: border-box;padding-left: 10px;}
.bianji .bianji-left .jianjie{width: 400px;overflow: hidden;margin-top: 10px;margin-left: 50px;}
.bianji-left .jianjie em{float: left;width: 90px;line-height: 30px;text-align: right;margin-right: 10px;font-size:14px;color: #666;}
.bianji-left .jianjie textarea{ float: left; box-sizing: border-box; width: 300px; height: 60px; border: 1px solid #ddd; border-radius: 5px; overflow-y: scroll; color: #000;font-size: 14px;
}
.bianji-left .p3{width: 400px;margin-top: 10px;overflow: hidden;margin-left: 50px;}
.bianji-left .p3 .s1{width: 90px;height: 30px; float: left;font-size: 14px;line-height: 30px;color:#666;margin-right: 10px; }
.bianji-left .p3 label{float: left;overflow: hidden;}
.bianji-left .p3 label input{ margin-top: 8px;vertical-align: top;}
.bianji-left .p3 label span{margin-left: 10px;line-height: 30px;color: #666;font-size: 14px;}
.bianji-left .p3 label:nth-child(3){margin-left: 22px;}
.bianji-left h4{font-size: 14px;color: #000;margin-top: 20px; margin-left: 50px;width: 121px;height: 30px;line-height: 30px;}

.bianji-left .l-p1 span,.bianji .bianji-left .l-p2 span,.bianji .bianji-left .l-p3 span,.bianji .bianji-left .l-p4 span{text-align: right;}
.bianji-right{float: right; width: 250px;margin-right: 20px;}
.bianji-right h4{width: 90px;height: 30px;line-height: 30px;font-size: 14px;color: #666;margin-bottom: 10px;}
.bianji-right .r-box{position: relative; width: 120px;height: 80px;float: left;}
.mar-r10{margin-right: 10px;}
.mar-b10{margin-bottom: 10px;}
.img1{background: url("../../assets/images/preview/pc_s_1.jpg") no-repeat 0 0;}
.img2{background: url("../../assets/images/preview/pc_s_2.jpg") no-repeat 0 0;}
.img3{background: url("../../assets/images/preview/pc_s_3.jpg") no-repeat 0 0;}
.img4{background: url("../../assets/images/preview/pc_s_4.jpg") no-repeat 0 0;}
.img5{background: url("../../assets/images/preview/pc_s_5.jpg") no-repeat 0 0;}
.img6{background: url("../../assets/images/preview/pc_s_6.jpg") no-repeat 0 0;}
.img7{background: url("../../assets/images/preview/pc_s_7.jpg") no-repeat 0 0;}
.img8{background: url("../../assets/images/preview/pc_s_8.jpg") no-repeat 0 0;}

.bianji-right .r-box p{position: absolute;left:0;bottom:0; width: 120px;height: 20px;text-align: center;line-height: 20px;font-size: 12px;color: #fff;background: rgba(74,75,77,0.5);padding-left: -20px;}

.bianji-right .r-box p em{display: none; position: absolute;left: 0;bottom: 0; float: left;width: 20px;height: 20px;box-sizing: border-box;border: 1px solid #ddd;background:url("../../assets/images/member/box-xuanqu.png")no-repeat 3px 4px #fff;background-size: 14px 10px; }
.bianji-right .r-box p em.cur{display: block;}
.bianji-bottom{clear: both; width: 100%;height: 80px;box-sizing: border-box;border-top: 1px solid #ddd;}
.bianji-bottom p{float: left;width: 250px;padding-left: 20px;font-size: 14px;color: #FF0000;line-height: 30px;margin-left: 20px;margin-top: 25px;background: url("../../assets/images/member/err.png")no-repeat 0 8px;background-size: 15px 15px;}
.bianji-bottom a{float: left;margin-left: 20px;width: 100px;height: 40px;box-sizing: border-box;border: 1px solid #ddd;border-radius: 5px;text-align: center;line-height: 40px;font-size: 14px;color: #666;margin-top: 20px;}
.bianji-bottom a.bc{float: right;width: 150px;color: #fff;background-color: #cc0000;margin-right: 20px;border: none;}
</style>
