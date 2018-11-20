<template>
   <div class="contact">
	   <span class="close" @click="closeFn"><i class="icon-close"></i></span>
	   <div class="title">
		   <span v-if="contactObj!=null">修改联系人</span><span v-else>新增联系人</span>
	   </div>
	  <div class="form">
		   <dl class="clearfix">
				<dt class="name"><em>*</em>联系人姓名：</dt>
				<dd class="input-box">
					<input type="text" class="txt" v-model="contactObj.contact" @focus="nameFocusFn" v-if="contactObj!=null" />
					<input type="text" class="txt" v-model="name" @focus="nameFocusFn" v-else />
					<div class="empty"><span class="error" v-show="nameError">*姓名为能为空</span></div>
				</dd>
			</dl>
			<dl class="clearfix">
				<dt class="name"><em>*</em>联 系 地 址：</dt>
				<dd class="input-box clearfix">
					 <span>
						<v-distpicker  :province="select.province" :city="select.city" :area="select.area" @selected="onSelected"  @province="onChangeProvince" hide-area></v-distpicker>
					 </span>
					 <div class="clr"></div>
					<div class="empty"><span class="error" v-show="addressError">*地址不能为空</span></div>
				</dd>
			</dl>
			<dl class="clearfix">
				<dt class="name"><em>*</em>详 细 地 址：</dt>
				<dd class="input-box">
					<input type="text" class="txt" v-model="contactObj.address" @focus="ad2FocusFn" v-if="contactObj!=null" />
					<input type="text" class="txt" v-model="address" @focus="ad2FocusFn" v-else />
					<div class="empty"><span class="error" v-show="addressDError">*地址不能为空</span></div>
				</dd>
			</dl>
			<dl class="clearfix">
				<dt class="name"><em>*</em>手 &nbsp; &nbsp; &nbsp; 机：</dt>
				<dd class="input-box">
					<input type="text" class="txt" v-model="contactObj.phone" maxlength="11" @focus="telFocusFn" v-if="contactObj!=null" />
					<input type="text" class="txt" v-model="tel" maxlength="11" @focus="telFocusFn" v-else />
					<div class="empty"><span class="error" v-show="telError">*请输入正确的手机号</span></div>
				</dd>
			</dl>
			<dl class="clearfix">
				<dt class="name"><em></em>固 定 电 话：</dt>
				<dd class="input-box">
					<input type="text" class="txt" v-model="contactObj.tel" v-if="contactObj!=null" />
					<input type="text" class="txt" v-model="phone" v-else />
					<div class="empty"></div>
				</dd>
			</dl>
			<dl class="clearfix">
				<dt class="name"><em></em>邮 &nbsp; 箱：</dt>
				<dd class="input-box">
					<input type="text" class="txt" v-model="contactObj.email" v-if="contactObj!=null" />
					<input type="text" class="txt" v-model="mail" v-else />
					<div class="empty"></div>
				</dd>
			</dl>
			<dl class="clearfix">
				<dt class="name"></dt>
				<dd class="input-box clearfix">
					<a href="javascript:void(0)" class="affirmBtnBtn" @click="reviseFn" v-if="contactObj!=null">确定</a>
					<a href="javascript:void(0)" class="affirmBtnBtn" @click="addContactFn" v-else>确定</a>
					<a href="javascript:void(0)" class="cancel" @click="closeFn">取消</a>
				</dd>
			</dl>
	  </div>
   </div>
</template>

<script>
import {postFn} from '../../static/js/util.js'
// import VDistpicker from 'v-distpicker'
export default {
  props:['contactObj'],
  components:{
	//   VDistpicker 
  },
  data(){
  	return{
		select: {
			province:'',
			city:'',
			area:''
		},
		thisLayer:false, 
		name:'',
		address:'',
		tel:'',
		phone:'',
		mail:'',
		nameError:false,
		addressError:false,
		addressDError:false,
		telError:false,
		mailError:false,
		contactList:[],
  	}
  },
  watch:{
	  contactObj(data){
		  if(data!=null){
			  this.select = {
				  province:data.province,
				  city:data.city,
				  area:data.area
			  }
		  }else{
			  this.select = {
				  province:'',
				  city:'',
				  area:''
			  }
		  }
	  }
  },
  beforeMount() {
   // 只会在浏览器执行 
   this.$options.components.VDistpicker = resolve => require(['v-distpicker'], resolve);
   
  },
  methods: {
	  onChangeProvince(data) {
         if(data.value!=this.select.province){
             this.select = {
                province:data.value,
                city:'',
			}
			if(data.value!='省'){
				this.contactObj.province=data.value;
				this.contactObj.city='';
			}
         }
    },
	onSelected(data) {
	  this.select = {
		  province:data.province.value,
		  city:data.city.value,
		  area:data.city.value
	  }
	  this.contactObj.province=data.province.value;
	  this.contactObj.city=data.city.value;
	  this.contactObj.area=data.city.value;
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
	closeFn(){
		this.$emit('layerFn',this.thisLayer)
		this.select =  {
			province:'',
		  	city:'',
		  	area:''
		}
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
	},
	addContactFn(){
		const reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g,that = this;
		if(!(that.name.trim()!='')){
			that.nameError = true
		}else if(that.select.province==''||that.select.city==''||that.select.area==''||!(that.select.city!='市')){
			that.addressError = true
			setTimeout(function(){
				that.addressError = false
			},3000)
		}else if(!(that.address.trim()!='')){
			that.addressDError = true
		}else if(!reg.test(that.tel)){
			this.telError = true
		}else{
			var data = {
				contact:that.name,
				phone:that.tel,
				tel:that.phone,
				province:that.select.province,
				city:that.select.city,
				area:that.select.area,
				address:that.address,
				email:that.mail
			}
			postFn("/user/user/contact/add",data,function(res){
				if(res.data.code==200){
					that.$emit('layerFn',that.thisLayer)
					var data={
						limit:10000,
					}
					postFn('/user/user/contact/get',data,function(r){
						if(r.data.code==200){
							that.contactList = r.data.data.list
							that.$emit('contactFn',that.contactList)
						}
					})
					that.select =  {
						province:'',
						city:'',
						area:''
					}
					that.name = ''
					that.address = ''
					that.tel = ''
					that.phone = ''
					that.mail = ''
					that.nameError = false
					that.addressError = false
					that.addressDError = false
					that.telError = false
					console.log('创建成功')
				}
			})
		}
	},
	reviseFn(){
		const reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g,that = this;
		if(that.contactObj.contact.trim()==''){
			that.nameError = true
		}else if(that.contactObj.province==''||that.contactObj.city==''||that.contactObj.area==''|| !(that.contactObj.city!='市')){
			that.addressError = true
			setTimeout(function(){
				that.addressError = false
			},3000)
		}else if(that.contactObj.address.trim()==''){
			that.addressDError = true
		}else if(!reg.test(that.contactObj.phone)){
			this.telError = true
		}else{
			var data = {
				contact:that.contactObj.contact,
				id:that.contactObj.id,
				phone:that.contactObj.phone,
				tel:that.contactObj.tel,
				province:that.select.province,
				city:that.select.city,
				area:that.select.area,
				address:that.contactObj.address,
				email:that.contactObj.email
			}
			postFn('/user/user/contact/set',data,function(res){
				if(res.data.code==200){
					that.nameError = false
					that.addressError = false
					that.addressDError = false
					that.telError = false
					console.log('修改成功')
					var data={
						limit:10000,
					}
					postFn('/user/user/contact/get',data,function(r){
						if(r.data.code==200){
							that.contactList = r.data.data.list
							that.$emit('contactFn',that.contactList)
							that.select =  {
								province:'',
								city:'',
								area:''
							}
						}
					})
					that.$emit('layerFn',that.thisLayer)
				}
			})
		}
	} 
 }
}
</script>

<style lang="scss">
$hover:#e52e3a;
$cur:#FF3342;
.contact{
	background: #fff;border-radius: 10px;position: fixed;left:50%;top:50%;margin:-292px 0 0 -272px;padding-bottom: 40px;
	z-index: 51;width:544px;
	.title{
		line-height: 84px;font-size: 26px;padding:10px 0 0 60px;
	}
	.form{
		.name,.input-box{
			float: left;
		}
		.name{
			em{color:red;padding-right:10px;vertical-align: middle;}color:#666;line-height: 36px;padding-left:42px;width:110px;height: 36px;text-align: justify;text-align-last: justify;
		}
		.input-box{
			padding-left: 6px;
			.txt{
				height:34px;width:300px;padding:0 10px;border:1px solid #eee;
			}
			select{
				border:1px solid #eee;line-height: 36px;width:156px;float: left;margin-right:10px;
				&:last-child{
					margin:0;
				}
			}
			.empty{
				height:20px;line-height: 20px;font-size: 12px;color:$hover;
			}
			.affirmBtnBtn,.cancel{
				display: block;float: left;width:140px;height:46px;line-height: 46px;border-radius: 2px;color:#fff;font-size: 20px;text-align: center;
			}
			.affirmBtnBtn{
				background: $hover;margin-right: 40px;
				&:hover{
					background:$cur;
				}
			}
			.cancel{background: #ccc;
				&:hover{
					background:$hover;
				}
			}
		}
	}
	.close{
		position: absolute;right:-8px;top:-6px;cursor: pointer;
		color:#ccc;
		i{
			font-size: 68px;
		}
	}
}
</style>
