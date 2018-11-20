<template>
 <div class="container">
     <p class="contacts-head">联系人管理</p>
     <div class="contacts-body">
        <div class="add-cont">
            <button @click="add">添加+</button>
        </div>
        <div class="contacts-cont clearfix" v-if="!contactsNone">
            <div class="contacts-info" v-for="(item,index) in contentInfo" :key="index">
                <p><em>联&nbsp;系&nbsp;人</em><var>:</var><span>{{item.contact}}</span></p>
                <!-- {{item.area}} -->
                <p class="addr"> <em>详细地址</em><var>:</var><span :title='item.title'>{{item.province}}{{item.city}}{{item.address}}</span></p>
                <p> <em>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱</em><var>:</var><span>{{item.email}}</span></p>
                <p> <em>手机号码</em><var>:</var><span>{{item.phone}}</span></p>
                <p> <em>固定电话</em><var>:</var><span>{{item.tel}}</span></p>
                <i @click="del(item.id)"></i>
                <div class="operation">
                    <span class="default" v-if="item.default==1">默认地址</span>
                    <span  v-else @click="setdefault(item.id)">设为默认</span>
                    <span @click="update(item)">编辑</span>
                </div>
            </div>
            <!-- <div class="contacts-info">
                <p><em>联&nbsp;系&nbsp;人</em><var>:</var><span>邓女士</span></p>
                <p class="addr"> <em>详细地址</em><var>:</var><span title="北京市海淀区龙岐路商业大厦3号楼3单元101">北京市海淀区龙岐路商业大厦3号楼3单元101北京市海淀区龙岐路商业大厦3号楼3单元101</span></p>
                <p> <em>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱</em><var>:</var><span>13120491911@139.com</span></p>
                <p> <em>手机号码</em><var>:</var><span>132526486212</span></p>
                <p> <em>固定电话</em><var>:</var><span>132526486212</span></p>
                <i @click="del"></i>
                <div class="operation">
                    <span >设为默认</span>
                    <span @click="update(item)">编辑</span>
                </div>
            </div> -->
        </div>
        <contactsnone v-if="contactsNone"></contactsnone>
        <div class="pagination-body" v-show="!contactsNone" v-if="total>6"><pagination @changePagesInfo="changePagesInfo"></pagination></div>
     </div>
     <div class="adv">
        <img src="../../static/images/user/order/adv-adv.jpg" alt="">
    </div>
    <div class="mask" v-show="mask"></div>
    <div class="pop" v-show="pop">
         <h5>{{pophead}}</h5>
         <p>
             <em>*</em><span>联&nbsp;系&nbsp;人</span><var>:</var> <input type="text"  v-model="name" @focus="nameFocusFn"> <br>
             <strong v-show="nameError"><em>*</em>姓名不能为空</strong>
         </p>
         <p>
             <em>*</em><span>所属地区</span><var>:</var>
             <!-- <select id="cmbProvince" name="cmbProvince" v-model="pro" @focus="adFocusFn"></select>  
             <select id="cmbCity" name="cmbCity" v-model="city" @focus="adFocusFn"></select>  
             <select id="cmbArea" name="cmbArea" v-model="area" @focus="adFocusFn"></select> <br> -->
             <v-distpicker :province="select.province" :city="select.city" :area="select.area" @selected="onSelected"  @province="onChangeProvince" hide-area></v-distpicker><br>
             <strong v-show="addressError"><em>*</em>地址不能为空</strong>
         </p>
         <p>
             <em>*</em><span>详细地址</span><var>:</var> <input type="text" v-model="address" @focus="ad2FocusFn"><br>
             <strong v-show="addressDError"><em>*</em>地址不能为空</strong>
         </p>
         <p>
             <em>*</em><span>手机号码</span><var>:</var> <input type="text"  v-model="tel" maxlength="11" @focus="telFocusFn"><br>
             <strong v-show="telError"><em>*</em>请输入正确的手机号</strong>
         </p>
         <p class="spe">
             <span>固定电话</span><var>:</var> <input type="text" v-model="phone">
         </p>
         <p class="spe">
            <span>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱</span><var>:</var> <input type="text" v-model="mail">
         </p>
         <div class="btn-body">
             <button class="sure" @click="sure">确定</button>
             <button class="cancel" @click="close">取消</button>
         </div>
         <i class="close" @click="close"></i>
     </div>
     <div class="pop2" v-show="pop2">
         <p></p>
         <p>您确定要删除该联系人信息吗？</p>
         <button class="cancel" @click="delsure">确定</button>
         <button class="sure" @click="close">取消</button>
         <i class="close" @click="close"></i>
     </div>
 </div>
</template>

<script>
import { addressInit } from "../../static/js/address.js";
import pagination from '../common/pagination.vue';
import {mapState} from 'vuex';
import Api from '../../static/js/api.js';
import contactsnone from '../common/user/contactsnone.vue';
// import VDistpicker from 'v-distpicker';
export default {
    metaInfo () {
        return {
            title: '服务中心-创新科技服务云平台',
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
      pophead:"新增联系人",
      contentInfo:'', //数据内容
      name:'',
      address:'',
      tel:'',
      phone:'',
      mail:'',
      nameError:false,
      addressError:false,
      addressDError:false,
      telError:false,
      id:' ',//联系人id
      contactsNone:true,//控制有没有联系人
      total:'',//联系人总数
  }
 },
 created() {
     if(this.isLogin){
        this.getCon()
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
     ...mapState(['userInfo','isLogin']),
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
		this.name = ''
		this.address = ''
		this.tel = ''
		this.phone = ''
		this.mail = ''
		this.nameError = false
		this.addressError = false
		this.addressDError = false
		this.telError = false
		this.mailError = false
        this.mask=false;
        this.pop=false;
        this.pop2=false;
        this.id=" ";//联系人id
    },
    sure:function(){
        //确认弹框
        if(this.pophead=="新增联系人"){
            const reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g,that = this;
            if(!(that.name!='')){
                that.nameError = true
            }else if(!(that.select.province!='') || !(that.select.city!='') || !(that.select.city!='市')){//|| !(that.select.area!='')
                that.addressError = true
            }else if(!(that.address!='')){
                that.addressDError = true
            }else if(!reg.test(that.tel)){
                this.telError = true
            }else{
                var data = {
                    name:that.name,
                    tel:that.tel,
                    phone:that.phone,
                    pro:that.select.province,
                    city:that.select.city,
                    area:that.select.area,
                    address:that.address,
                    mail:that.mail
                }
                Api.addContact(data).then(res=>{
                    if(res.data.code==200){
                        this.close();
                        this.getCon();
                    }
                })
                
            }
        }else if(this.pophead=="编辑联系人"){
             const reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g,that = this;
            if(!(that.name!='')){
                that.nameError = true
            }else if(!(that.select.province!='') || !(that.select.city!='') || !(that.select.city!='市') ){//|| !(that.select.area!='')
                that.addressError = true
            }else if(!(that.address!='')){
                that.addressDError = true
            }else if(!reg.test(that.tel)){
                this.telError = true
            }else{
                console.log("走到这里了",that.select.city);
                var data = {
                    id:that.id,
                    name:that.name,
                    tel:that.tel,
                    phone:that.phone,
                    pro:that.select.province,
                    city:that.select.city,
                    area:that.select.area,
                    address:that.address,
                    mail:that.mail
                }
                Api.setContact(data).then(res=>{
                    console.log(res);
                    if(res.data.code==200){
                        this.close();
                        this.getCon();
                    }
                })
                
            }
        }
    },
    add:function(){
        //新增联系人
        this.pophead="新增联系人",
        this.mask=true;
        this.pop=true;
    },
    update:function(item){
        //编辑联系人
        this.pophead="编辑联系人"
        this.name=item.contact;
        this.tel=item.phone;
        this.phone=item.tel;
        this.select = {
		  province:item.province,
		  city:item.city,
		  area:item.area
	    }
        // this.prp=item.province;
        // this.city=item.city;
        // this.area=item.area;
        // this.pro="请选择省份";
        // this.city="请选择城市",
        // this.area="请选择区县";
        this.address=item.address;
        this.mail=item.email;
        this.id=item.id;
        this.mask=true;
        this.pop=true;
    },
    del(id){
        //删除联系人
        this.id=id
        this.mask=true;
        this.pop2=true;
    },
    delsure(){
        //确定删除
        Api.delContact(this.id).then(res=>{
            console.log(res);
            if(res.data.code==200){
                this.getCon();
                this.close();
            }
        })
    },
    getCon(){
        //获取联系人
        Api.getContact().then(res=>{
            if(res.data.code==200){
                this.contentInfo=res.data.data.list;
                this.total=res.data.data.total;
                var last_page=Math.ceil(res.data.data.total/6);
                this.$store.dispatch("getLastPage", last_page);
                this.$store.dispatch("jumpAction", {page: 1});
                console.log(this.total,"=>total");
                if(this.contentInfo.length!=0){
                    this.contactsNone=false;
                }else{
                     this.contactsNone=true;
                }
                this.contentInfo.forEach(element => {
                    element.title=element.province+element.city+element.address;
                    // +element.area
                });
                this.contentInfo.sort(function(a,b){
                    return b.default-a.default;
                })
            }
            
        })
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
    setdefault(id){
        //设置默认
        Api.setDefault(id).then(res=>{
            if(res.data.code==200){
                this.getCon();
            }
        })
    },
      changePagesInfo: function(type,curPage){ // 页码更改操作
        var page = curPage;
        if(type == 'add'){
            page = curPage + 1;
        }else if(type == 'less'){
            page = curPage - 1;
        }
        this.dataFun(page);
    },
    dataFun: function(curPage){
        Api.getContact(curPage).then(res=>{
            if(res.data.code==200){
                this.contentInfo=res.data.data.list;
                var last_page=Math.ceil(res.data.data.total/6);
                this.total=res.data.data.total;
                this.$store.dispatch("getLastPage", last_page);
                this.$store.dispatch("jumpAction", {page: curPage});
                this.contentInfo.forEach(element => {
                    element.title=element.province+element.city+element.address;
                    // +element.area
                });
                 window.scrollTo(0, 0);
            }
        })
    },
 },
 components: {
     contactsnone,
    //  VDistpicker,
     pagination
 }
}
</script>

<style scoped lang="scss">
    .contacts-head{
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
    .contacts-body{
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
        .contacts-cont{
            min-height: 600px;
        }
        .contacts-info{
            margin-top: 10px;
            font-size: 14px;
            color: #999999;
            padding: 30px 20px 30px 38px;
            border: 1px solid #eeeeee;
            width: 470px;
            box-sizing: border-box;
            height: 200px;
            position: relative;
            float: left;
            margin-left: 20px;
            p{

                em{
                    display: inline-block;
                    width: 56px;
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
        width: 525px;
        padding: 22px 42px;
        border-radius: 10px;
        box-sizing: border-box;
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
            select~select{
                margin-left: 8.5px;
            }
            strong{
                font-size: 12px;
                color:#e52e3a ;
                margin-left: 103px;
                font-weight: normal;
                em{
                    margin-right: 9px;
                    position: relative;
                    top:2px;
                }
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
                width: 56px;
                
            }
            var{
                padding-left:5px ;
                padding-right: 19px;
            }
            input{
                color: #333333;
                width: 320px;
                height: 38px;
                line-height: 38px;
                border: 1px solid #e5e5e5;
                padding-left: 10px;
                box-sizing: border-box;
            }
        }
        p~p{
            margin-top: 8px;
        }
        .btn-body{
             margin-left: 104px;
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
        border-radius: 10px;
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
    .pagination-body{
        overflow: hidden;
        padding-top: 40px;
        background: white;
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

