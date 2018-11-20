<template>
 <div class="container">
     <p class="contract-head">合同主体</p>
     <div class="contract-body">
        <div class="add-cont">
            <button @click="add">新增+</button>
        </div>
        <div class="contract-cont clearfix" v-if="!contractNone">
            <div class="contract-info" v-for="(item,index) in contentInfo" :key="index">
                <p><em>主&nbsp;&nbsp;体&nbsp;&nbsp;类&nbsp;&nbsp;型</em><var>:</var><span v-if="item.main_type==1">个人</span><span v-if="item.main_type==2">企业</span></p>
                <p> <em v-if='item.main_type==2'>主&nbsp;&nbsp;体&nbsp;&nbsp;名&nbsp;&nbsp;称</em><em v-else>客&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</em><var>:</var><span>{{item.main_title}}</span></p>
                <p> <em v-if='item.main_type==2'>纳税人识别号</em><em v-else>身&nbsp;&nbsp;份&nbsp;&nbsp;证&nbsp;&nbsp;号</em><var>:</var><span>{{item.company_code}}</span></p>
                <p> <em>联&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人</em><var>:</var><span>{{item.contact}}</span></p>
                <p> <em>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱</em><var>:</var><span>{{item.email}}</span></p>
                <p class="addr"> 
                    <em>详&nbsp;&nbsp;细&nbsp;&nbsp;地&nbsp;&nbsp;址</em><var>:</var>
                    <!-- {{item.area}} -->
                    <span :title="item.title">{{item.province}}{{item.city}}{{item.address}}</span>
                </p>
                <p> <em>手&nbsp;&nbsp;机&nbsp;&nbsp;号&nbsp;&nbsp;码</em><var>:</var><span>{{item.phone}}</span></p>
                <p> <em>固&nbsp;&nbsp;定&nbsp;&nbsp;电&nbsp;&nbsp;话</em><var>:</var><span>{{item.tel}}</span></p>
                <i @click="del(item.id)"></i>
                <div class="operation">
                    <span class="default" v-if="item.default==1">默认地址</span>
                    <span  v-else @click="setdefault(item.id)">设为默认</span>
                    <span @click="update(item)">编辑</span>
                </div>
            </div>
            <!-- <div class="contract-info">
                <p><em>主&nbsp;&nbsp;体&nbsp;&nbsp;类&nbsp;&nbsp;型</em><var>:</var><span>公司</span></p>
                <p> <em>主&nbsp;&nbsp;体&nbsp;&nbsp;名&nbsp;&nbsp;称</em><var>:</var><span>北京一鸣公司</span></p>
                <p> <em>纳税人识别号</em><var>:</var><span>122222222</span></p>
                <p> <em>联&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人</em><var>:</var><span>王明</span></p>
                <p> <em>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱</em><var>:</var><span>100867@qq.com</span></p>
                <p class="addr"> <em>详&nbsp;&nbsp;细&nbsp;&nbsp;地&nbsp;&nbsp;址</em><var>:</var><span title="北京市海淀区龙岐路商业大厦3号楼3单元101  ">北京市海淀区龙岐路商业大厦3号楼3单元101北京市海淀区龙岐路商业大厦3号楼3单元101</span></p>
                <p> <em>手&nbsp;&nbsp;机&nbsp;&nbsp;号&nbsp;&nbsp;码</em><var>:</var><span>132526486212</span></p>
                <p> <em>固&nbsp;&nbsp;定&nbsp;&nbsp;电&nbsp;&nbsp;话</em><var>:</var><span>132526486212</span></p>
                <i @click="del"></i>
                <div class="operation">
                    <span >设为默认</span>
                    <span @click="update">编辑</span>
                </div>
            </div> -->
        </div>
        <contractnone v-if="contractNone"></contractnone>
     </div>
     <div class="adv">
        <img src="../../static/images/user/order/adv-adv.jpg" alt="">
    </div>
    <div class="mask" v-show="mask"></div>
    <!-- 合同弹框 -->
    <div class="pop" v-show="pop">
         <h5>{{pophead}}</h5>
         <p class="type spe"><span>主&nbsp;&nbsp;体&nbsp;&nbsp;类&nbsp;&nbsp;型</span><var>:</var> <input type="radio" name="type" value="1" v-model="type">个人 <input type="radio" name="type" value="2" v-model="type">企业</p>
         <p>
             <em>*</em><span v-if="type==2">主&nbsp;&nbsp;体&nbsp;&nbsp;名&nbsp;&nbsp;称</span><span v-else>客&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span><var>:</var><input type="text" v-model="subName" @focus="subNameFocusFn"><br>
             <strong v-show="subNameError" v-if='type==2'><em>*</em>主体名称不能为空</strong>
             <strong v-show="subNameError" v-else><em>*</em>客户名不能为空</strong>
         </p>
         <p v-if="type==2">
             <em>*</em><span>纳税人识别号</span><var>:</var><input type="text" v-model="recNumbe" @focus="recNumberFocusFn">
             <strong v-show="recNumberError"><em>*</em>纳税人识别号不能为空</strong>
         </p>
         <p v-if="type==1">
             <em>*</em><span>身&nbsp;&nbsp;份&nbsp;&nbsp;证&nbsp;&nbsp;号</span><var>:</var><input type="text" v-model="recNumbe" @focus="recNumberFocusFn">
             <strong v-show="recNumberError"><em>*</em>身份证号码不能为空</strong>
         </p>
         <p>
             <em>*</em><span>所&nbsp;&nbsp;属&nbsp;&nbsp;地&nbsp;&nbsp;区</span><var class="speVar">:</var>
             <!-- <select id="cmbProvince" name="cmbProvince" v-model="pro" @focus="adFocusFn"></select>  
             <select id="cmbCity" name="cmbCity" v-model="city" @focus="adFocusFn"></select>  
             <select id="cmbArea" name="cmbArea" v-model="area" @focus="adFocusFn"></select> <br> -->
             <!-- @selected="onSelected"  -->
              <v-distpicker :province="select.province" :city="select.city" :area="select.area" @selected="onSelected" @province="onChangeProvince" hide-area></v-distpicker><br>
             <strong v-show="addressError"><em>*</em>地址不能为空</strong>
         </p>
         <p>
             <em>*</em><span>详&nbsp;&nbsp;细&nbsp;&nbsp;地&nbsp;&nbsp;址</span><var>:</var><input type="text" v-model="address" @focus="ad2FocusFn"><br>
             <strong v-show="addressDError"><em>*</em>地址不能为空</strong>
         </p>
         <p>
             <em>*</em><span>联&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人</span><var>:</var><input type="text" v-model="name" @focus="nameFocusFn"><strong v-show="nameError"><em>*</em>姓名不能为空</strong>
         </p>
         <p>
             <em>*</em><span>手&nbsp;&nbsp;机&nbsp;&nbsp;号&nbsp;&nbsp;码</span><var>:</var><input type="text" v-model="phone" maxlength="11" @focus="telFocusFn"><br>
             <strong v-show="telError"><em>*</em>请输入正确的手机号</strong>
         </p>
         <p class="spe">
             <span>固&nbsp;&nbsp;定&nbsp;&nbsp;电&nbsp;&nbsp;话</span><var>:</var><input type="text" v-model="tel">
         </p>
         <p class="spe">
             <span>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱</span><var>:</var><input type="text" v-model="mail">
         </p>
         <div class="btn-body">
             <button class="sure" @click="sure">确定</button>
             <button class="cancel" @click="close">取消</button>
         </div>
         <i class="close" @click="close"></i>
     </div>
     <!-- /合同弹框 -->
     <!-- 删除弹框 -->
     <div class="pop2" v-show="pop2">
         <p></p>
         <p>您确定要删除该合同主体吗？</p>
         <button class="cancel" @click="delsure">确定</button>
         <button class="sure" @click="close">取消</button>
         <i class="close" @click="close"></i>
     </div>
     <!-- /删除弹框 -->
 </div>
</template>

<script>
import { addressInit } from "../../static/js/address.js"
import Api from '../../static/js/api.js'
import contractnone from '../common/user/contractnone.vue';
// import VDistpicker from 'v-distpicker';
import {mapState} from 'vuex'
export default {
metaInfo () {
    return {
        title: '合同管理-创新科技服务云平台',
    }
},
 data() {
  return {
      mask:false,
      pop:false,
      pop2:false,
      select: {
            province:'',
            city:'',
            area:''
        },
    //   pro:'',  //省
    //   city:'', //市
    //   area:'' , //区
      contentInfo:'', //数据内容
      pophead:"新增合同主体",
      type:'1',  //主体类型
      subName:'',  //主体名称
      recNumbe:'', //纳税人识别号
      name:'',     //联系人姓名
      address:'',
      tel:'',
      phone:'',
      mail:'',
      subNameError:false,//信息提示
      recNumberError:false,
      nameError:false,
      addressError:false,
      addressDError:false,
      telError:false,
      id:'',//合同id
      contractNone:true,//控制有没有合同信息
  }
 },
 created () {
     if(this.isLogin){
		this.getCon();
	}else{
        this.userView=this.$route.query.userView;
		this.$router.push({path:'/login',query:{userView:this.userView}})
	}
     
 },
beforeMount() {
   // 只会在浏览器执行 
   this.$options.components.VDistpicker = resolve => require(['v-distpicker'], resolve);
   
  },
 computed: {
     ...mapState(['isLogin'])
},
 methods: {
    onChangeProvince(data) {
        //省内容改变
         if(data.value!=this.select.province){
             this.select = {
                province:data.value,
                city:'',
		        area:''
            }
         }
    },
     onSelected(data) {
         //三级联动全部选择完
	  this.select = {
		  province:data.province.value,
		  city:data.city.value,
		  area:data.city.value
      }
      this.adFocusFn();
    },
   close:function(){
       //关闭弹窗
        // this.pro = '请选择省份'
		// this.city = '请选择城市'
        // this.area = '请选择区县'
        this.select={
            province:'',
            city:'',
            area:''
        },
        this.type='1',  
        this.subName='',  
        this.recNumbe='', 
        this. name='',     
        this.address='',
        this. tel='',
        this.phone='',
        this. mail='',
         this.mask=false;
         this.pop=false;
         this.pop2=false;
     },
    sure:function(){
        //确认弹框
        if(this.pophead=="新增合同主体"){
            const reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g,that = this;
            if(!(that.subName!='')){
                that.subNameError = true
            }else if(!(that.recNumbe!='')){
                that.recNumberError = true
            }else if(!(that.select.province!='') || !(that.select.city!='')|| !(that.select.city!='市') ){//|| !(that.select.area!='')
                that.addressError = true
            }else if(!(that.address!='')){
                that.addressDError = true
            }else if(!(that.name!='')){
                that.nameError = true
            }else if(!reg.test(that.phone)){
                this.telError = true
            }else{
                var data = {
                    type:that.type,
                    subName:that.subName,
                    recNumbe:that.recNumbe,
                    name:that.name,
                    tel:that.tel,
                    phone:that.phone,
                    pro:that.select.province,
                    city:that.select.city,
                    area:that.select.area,
                    address:that.address,
                    mail:that.mail
                }
                Api.addContract(data).then(res=>{
                    if(res.data.code==200){
                        this.close();
                        this.getCon();
                    }
                })
            }
        }else if(this.pophead=="编辑合同主体"){
            const reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g,that = this;
            if(!(that.subName!='')){
                that.subNameError = true
            }else if(!(that.recNumbe!='')){
                that.recNumberError = true
            }else if(!(that.select.province!='') || !(that.select.city!='')|| !(that.select.city!='市') ){//|| !(that.select.area!='')
                that.addressError = true
            }else if(!(that.address!='')){
                that.addressDError = true
            }else if(!(that.name!='')){
                that.nameError = true
            }else if(!reg.test(that.phone)){
                this.telError = true
            }else{
                var data = {
                    id:that.id,
                    type:that.type,
                    subName:that.subName,
                    recNumbe:that.recNumbe,
                    name:that.name,
                    tel:that.tel,
                    phone:that.phone,
                    pro:that.select.province,
                    city:that.select.city,
                    area:that.select.area,
                    address:that.address,
                    mail:that.mail
                }
                Api.setContract(data).then(res=>{
                    if(res.data.code==200){
                        this.close();
                        this.getCon();
                    }
                })
            }
        }
        // this.close();
    },
    add:function(){
        //新增合同主体
        this.pophead="新增合同主体",
        this.mask=true;
        this.pop=true;
    },
    update:function(item){
        //编辑合同主体
        this.pophead="编辑合同主体"
        this.type=item.main_type ,
        this.subName=item.main_title,
        this.recNumbe=item.company_code,
        this.name=item.contact;
        this.tel=item.tel;
        this.phone=item.phone;
        // this.pro="请选择省份";
        // this.city="请选择城市",
        // this.area="请选择区县";
        this.select = {
		  province:item.province,
		  city:item.city,
		  area:item.area
        }
        console.log(this.select);
        this.address=item.address;
        this.mail=item.email;
        this.id=item.id;
        this.mask=true;
        this.pop=true;
    },
    del(id){
        //删除合同主体
        this.id=id;
        this.mask=true;
        this.pop2=true;
    },
    recNumberFocusFn(){
        this.recNumberError=false
    },
    subNameFocusFn(){
        this.subNameError=false
    },
    nameFocusFn(){
	    this.nameError = false
	},
	adFocusFn(){
		this.addressError = false
	},
	ad2FocusFn(){
		this.addressDError = false
	},
	telFocusFn(){
		this.telError = false
    },
    getCon(){
        //获取合同主体
        Api.getContract().then(res=>{
            if(res.data.code==200){
                this.contentInfo=res.data.data.list;
                console.log(this.contentInfo);
                this.contentInfo.forEach(element => {
                    element.title=element.province+element.city+element.area+element.address;
                });
                if(this.contentInfo.length!=0){
                    this.contractNone=false;
                }else{
                     this.contractNone=true;
                }
                this.contentInfo.sort(function(a,b){
                    return b.default-a.default;
                })
            }
        })
    },
    setdefault(id){
        //设置默认
        Api.setContractDefault(id).then(res=>{
            if(res.data.code==200){
                this.getCon();
            }
        })
    },
    delsure(){
        //确认删除
        Api.delContract(this.id).then(res=>{
            if(res.data.code==200){
                this.close();
                this.getCon();
            }
        })
    },
 },
 components: {
     contractnone,
    //  VDistpicker
 }
}
</script>

<style scoped lang="scss">
    .contract-head{
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
    .contract-body{
        min-height: 600px;
        padding: 20px;
        background: white;
        width: 1040px;
        box-sizing: border-box;  
        position: relative;
        .add-cont{
            height: 55px;
            padding-top: 6px;
            padding-left: 20px;
            button{
                outline: none;
                border:1px solid #e52e3a;
                color: #e52e3a;
                background: white;
                cursor: pointer;
                width: 98px;
                height: 28px;
                font-size: 14px;
                &:hover{
                    background: #ff3341;
                    color: white;
                }
            }
        }
        .contract-cont{
            min-height: 600px;
        }
        .contract-info{
            margin-top: 10px;
            font-size: 14px;
            color: #999999;
            padding: 30px 20px 30px 38px;
            border: 1px solid #eeeeee;
            width: 470px;
            box-sizing: border-box;
            height: 302px;
            position: relative;
            float: left;
            margin-left: 20px;
            p{

                em{
                    display: inline-block;
                    width: 84px;
                }
                var{
                    padding: 0 6px;
                }
                span{
                    color: #333;
                }
                &.addr{
                    span{
                        display: inline-block;
                        width: 278px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        word-break: break-all;
                        overflow: hidden;
                    }
                }
            }
            p~p{
                margin-top: 18px;
            }
            i{
                position: absolute;
                background: url(../../static/images/user/contacts/contxbt.png) -41px 0 no-repeat;
                width: 12px;
                height: 12px;
                top:21px;
                right: 20px;
                cursor: pointer;
            }
            .operation{
                position: absolute;
                right: 20px;
                bottom: 30px;
                span{
                    margin-left: 14px;
                    font-size:12px ;
                    color: #4685c3;
                    cursor: pointer;
                    &:hover{
                        color: #e52e3a;
                    }
                    &.default{
                        cursor: default;
                        color: #d3d3d3;
                    }
                }
            }
        }
    }
    .adv{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .mask{
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #7d7d7d;
        opacity: 0.7;
        z-index: 5;
    }
    .pop{
        width: 474px;
        padding: 22px 42px;
        // box-sizing: border-box;
        border-radius: 10px;
        position: fixed;
        top:50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 7;
        background: white;
        h5{
            font-size: 26px;
            color: #333333;
            margin-bottom: 30px;
        }
        P{
            color: #666666;
            font-size: 14px;
            height: 52px;
            &.spe{
                span{
                    margin-left: 16px;
                }
            }
             select{
                    width: 98px;
                    height: 36px;
                    border: 1px solid #e5e5e5;    
            }
            strong{
                font-size: 12px;
                color:#e52e3a ;
                margin-left: 129px;
                font-weight: normal;
                em{
                    margin-right: 9px;
                    position: relative;
                    top:2px;
                }
            }
            select~select{
                margin-left: 9px;
            }
            em{
                color:#e52e3a ;
                font-size: 12px;
                margin-right: 9px;
                position: relative;
                top:1px;
            }
            span{
                display: inline-block;
                height: 38px;
                line-height: 38px;
                width: 84px;
                
            }
            var{
                padding-left:5px ;
                padding-right: 16px;
                &.speVar{
                    padding-right: 12px;
                }
            }
            input{
                color: #333333;
                width: 320px;
                box-sizing: border-box;
                height: 38px;
                line-height: 38px;
                border: 1px solid #e5e5e5;
                padding-left: 10px;
            }
            &.type{
                input{
                    width:23px;
                    height: 14px;
                    position: relative;
                    top:3px;
                    margin-right: 10px;
                }
                input:nth-child(4){
                    margin-left: 15px;
                }
            }
        }
        p~p{
            margin-top: 8px;
        }
        .btn-body{
            margin-left: 130px;
            margin-top: 20px;
            width: 320px;
            box-sizing: border-box;
        }
        button{
                width: 140px;
                height: 46px;
                color: white;
                outline: none;
                border: none;
                cursor: pointer;
                font-size: 20px;
        }
        .sure{
            background: #e52e3a;
            &:hover{
                background: #ff3341;
            }
        }
        .cancel{
            margin-left: 34px;
            background: #cccccc;
            &:hover{
                background: #e52e3a;
            }
        }
        i{
            position: absolute;
            top:20px;
            right:20px;
            width: 20px;
            height: 20px;
            background: url(../../static/images/user/contacts/contxbt.png) 0 0 no-repeat;
            cursor: pointer;
        }
    }
    .pop2{
        width: 498px;
        padding: 40px;
        border-radius:10px;
        box-sizing: border-box;
        position: fixed;
        top:50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 7;
        background: white;
        text-align: center;
        &.sus{
            p:nth-child(1){
                width: 44px;
                height: 44px;
                background-position:-306px -31px;
            }
        }
        p:nth-child(1){
            width: 48px;
            height: 48px;
            margin: 38px auto 26px;
            background: url(../../static/images/user/contacts/contxbt.png) -61px 0px no-repeat;
        }
        p:nth-child(2){
            font-size: 20px;
            color:#666666;
            margin-bottom: 48px;
        }
        button{
                width: 140px;
                height: 46px;
                color: white;
                outline: none;
                border: none;
                cursor: pointer;
                font-size: 20px;
        }
        .cancel{
            background: #e52e3a;
            &:hover{
                background: #ff3341;
            }
        }
        .sure{
            margin-left: 63px;
            background: #cccccc;
            &:hover{
                background: #e52e3a;
            }
        }
        i{
            position: absolute;
            top:20px;
            right:20px;
            width: 21px;
            height: 21px;
            background: url(../../static/images/user/contacts/contxbt.png) 0 0 no-repeat;
            cursor: pointer;
        }
    }
</style>
<style>
.distpicker-address-wrapper{
    display: inline;
}
.distpicker-address-wrapper select{
    width: 158px;
    height: 38px;
}
</style>
