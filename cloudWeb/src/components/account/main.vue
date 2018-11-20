<template>
   <div class="mains">
	   <span class="close" @click="closeFn"><i class="icon-close"></i></span>
	   <div class="title">
		   <span v-if="mainObj!=null">修改合同主体</span><span v-else>新增合同主体</span>
	   </div>
	  <div class="form">
		  <dl class="clearfix">
				<dt class="name"><em></em>主 体 类 型：</dt>
				<dd class="input-box radio-box" v-if="mainObj!=null">
					<input type="radio" id="one" value="2" v-model="mainObj.main_type" checked="checked">
					<label for="one">企业</label>
					<input type="radio" id="two" value="1" v-model="mainObj.main_type">
					<label for="two">个人</label>
					<div class="empty"></div>
				</dd>
				<dd class="input-box radio-box" v-else>
					<input type="radio" id="one" value="2" v-model="picked" checked="checked">
					<label for="one">企业</label>
					<input type="radio" id="two" value="1" v-model="picked">
					<label for="two">个人</label>
					<div class="empty"></div>
				</dd>
		  </dl>
		   <dl class="clearfix">
				<dt v-if='mainObj!=null&&mainObj.main_type==2' class="name"><em>*</em>主 体 名 称：</dt>
				<dt v-if='mainObj!=null&&mainObj.main_type==1' class="name"><em>*</em>客 户 名:</dt>
				<dt v-if='mainObj==null&&picked==2' class="name"><em>*</em>主 体 名 称：</dt>
				<dt v-if='mainObj==null&&picked==1' class="name"><em>*</em>客 户 名:</dt>
				<dd class="input-box">
					<input type="text" class="txt" v-model="mainObj.main_title" @focus="mainFocus" v-if="mainObj!=null" />
					<input type="text" class="txt" v-model="main" @focus="mainFocus" v-else />
					<div class="empty">
						<span class="error" v-if='picked==2&&mainObj==null' v-show="mainError">*主体名称不能为空</span> 
						<span class="error" v-if='picked==1&&mainObj==null' v-show="mainError">*客户名不能为空</span>
						<span class="error" v-if='mainObj!=null&&mainObj.main_type==2' v-show="mainError">*主体名称不能为空</span> 
						<span class="error" v-if='mainObj!=null&&mainObj.main_type==1' v-show="mainError">*客户名不能为空</span>
					</div>
				</dd>
			</dl>
			<dl class="clearfix" v-if="mainObj==null&&picked==2">
				<dt class="name"><em>*</em>纳税人识别号：</dt>
				<dd class="input-box">
					<input type="text" class="txt" v-model="code" @focus="codeFocus" />
					<div class="empty"><span class="error" v-show="codeError">*识别号不能为空</span></div>
				</dd>
			</dl>
			<dl class="clearfix" v-if="mainObj==null&&picked==1">
				<dt class="name"><em>*</em>身 份 证 号：</dt>
				<dd class="input-box">
					<input type="text" class="txt" v-model="code" @focus="codeFocus"/>
					<div class="empty"><span class="error" v-show="codeError">*身份证号码不能为空</span></div>
				</dd>
			</dl>
			<dl class="clearfix" v-if="mainObj!=null&&mainObj.main_type==2">
				<dt class="name"><em>*</em >纳税人识别号：</dt>
				<dd class="input-box">
					<input type="text" class="txt" v-model="mainObj.company_code" @focus="codeFocus" />
					<div class="empty"><span class="error"  v-show="codeError">*识别号不能为空</span></div>
				</dd>
			</dl>
			<dl class="clearfix" v-if="mainObj!=null&&mainObj.main_type==1">
				<dt class="name"><em>*</em>身 份 证 号：</dt>
				<dd class="input-box">
					<input type="text" class="txt" v-model="mainObj.company_code" @focus="codeFocus"/>
					<div class="empty"><span class="error" v-show="codeError">*身份证号码不能为空</span></div>
				</dd>
			</dl>
			<dl class="clearfix">
				<dt class="name"><em>*</em>所 属 地 区：</dt>
				<dd class="input-box clearfix">
					 <span>
						<v-distpicker  :province="select.province" :city="select.city" :area="select.area" @selected="onSelected" @province="onChangeProvince"  hide-area></v-distpicker>
					 </span>
					 <div class="clr"></div>
					<div class="empty"><span class="error" v-show="adError">*所属地区不能为空</span></div>
				</dd>
			</dl>
			<dl class="clearfix">
				<dt class="name"><em>*</em>详 细 地 址：</dt>
				<dd class="input-box">
					<input type="text" class="txt" v-model="mainObj.address" @focus="ad2Focus" v-if="mainObj!=null"/>
					<input type="text" class="txt" v-model="address" @focus="ad2Focus" v-else/>
					<div class="empty"><span class="error" v-show="ad2Error">*地址不能为空</span></div>
				</dd>
			</dl>
			<dl class="clearfix">
				<dt class="name"><em>*</em>联    系   人：</dt>
				<dd class="input-box">
					<input type="text" class="txt" v-model="mainObj.contact" @focus="nameFocus" v-if="mainObj!=null"/>
					<input type="text" class="txt" v-model="name" @focus="nameFocus" v-else/>
					<div class="empty"><span class="error" v-show="nameError">姓名不能为空</span></div>
				</dd>
			</dl>
			<dl class="clearfix">
				<dt class="name"><em>*</em>手 机 号 码：</dt>
				<dd class="input-box">
					<input type="text" class="txt" v-model="mainObj.phone" @focus="telFocus" maxlength="11" v-if="mainObj!=null" />
					<input type="text" class="txt" v-model="tel" @focus="telFocus" maxlength="11" v-else />
					<div class="empty"><span class="error" v-show="telError">*请输入正确的手机号</span></div>
				</dd>
			</dl>
			<dl class="clearfix">
				<dt class="name"><em></em>固 定 电 话：</dt>
				<dd class="input-box">
					<input type="text" class="txt" v-model="mainObj.tel" v-if="mainObj!=null" />
					<input type="text" class="txt" v-model="phone" v-else />
					<div class="empty"></div>
				</dd>
			</dl>
			<dl class="clearfix">
				<dt class="name"><em></em>邮 &nbsp; 箱：</dt>
				<dd class="input-box">
					<input type="text" class="txt" v-model="mainObj.email" v-if="mainObj!=null" />
					<input type="text" class="txt" v-model="mail" v-else />
					<div class="empty"></div>
				</dd>
			</dl>
			<dl class="clearfix">
				<dt class="name"></dt>
				<dd class="input-box clearfix">
					<a href="javascript:void(0)" class="affirmBtn" @click="reviseFn" v-if="mainObj!=null">确定</a>
					<a href="javascript:void(0)" class="affirmBtn" @click="submitFn" v-else>确定</a>
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
  props:['mainObj'],
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
		  picked:'2',
		  main:'',
		  code:'',
		  address:'',
		  name:'',
		  tel:'',
		  phone:'',
		  mail:'',
		  mainError:false,
		  codeError:false,
		  adError:false,
		  ad2Error:false,
		  nameError:false,
		  telError:false,
		  mailError:false,
		  mainList:[],
  	}
  },
  watch:{
	  mainObj(data){
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
  methods: {
	 onChangeProvince(data) {
         if(data.value!=this.select.province){
             this.select = {
                province:data.value,
                city:'',
			}
			if(data.value!='省'){
				this.mainObj.province=data.value;
				this.mainObj.city='';
			}
         }
    },
	onSelected(data) {
	  this.select = {
		  province:data.province.value,
		  city:data.city.value,
		  area:data.city.value
	  }
	  this.mainObj.province=data.province.value;
	  this.mainObj.city=data.city.value;
	  this.mainObj.area=data.city.value;
    },
	 closeFn(){
		this.$emit('mainFn',this.thisLayer)
		this.picked = '2'
		this.main = ''
		this.code = ''
		this.address = ''
		this.select =  {
			province:'',
		  	city:'',
		  	area:''
		}
		this.name = ''
		this.tel = ''
		this.phone = ''
		this.mail = ''
		this.mainError = false
		this.codeError = false
		this.adError = false
		this.ad2Error = false
		this.nameError = false
		this.telError = false
		this.telError = false
	 },
	 mainFocus(){
		 this.mainError = false
	 },
	 codeFocus(){
		 this.codeError = false
	 },
	 ad2Focus(){
		 this.ad2Error = false
	 },
	 nameFocus(){
		 this.nameError = false
	 },
	 telFocus(){
		 this.telError = false
	 },
	 submitFn(){
		const reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g,that = this;
		if(!(that.main!='')){
			that.mainError = true
		}else if(!(that.code!='')){
			that.codeError = true
		}else if(that.select.province==''||that.select.city==''||that.select.area==''|| !(that.select.city!='市')){
			that.adError = true
			setTimeout(function(){
				that.adError = false
			},3000)
		}else if(!(that.address!='')){
			that.ad2Error = true
		}else if(!(that.name!='')){
			that.nameError = true
		}else if(!reg.test(that.tel)){
			this.telError = true
		}else{
			var data = {
				main_type:that.picked,
				main_title:that.main,
				company_code:that.code,
				contact:that.name,
				phone:that.tel,
				tel:that.phone,
				province:that.select.province,
				city:that.select.city,
				area:that.select.area,
				address:that.address,
				email:that.mail
			}
			postFn('/user/user/contract/add',data,function(res){
				if(res.data.code==200){
					that.$emit('mainFn',that.thisLayer)
					var mainData = {
						id:null,
						limit:10000,
					}
					postFn('/user/user/contract/get',mainData,function(r){
						if(r.data.code==200){
							that.mainList = r.data.data.list
							that.$emit('mainListFn',that.mainList)
						}
					})
					that.main = ''
					that.code = ''
					that.address = ''
					that.select =  {
						province:'',
						city:'',
						area:''
					}
					that.name = ''
					that.tel = ''
					that.phone = ''
					that.mail = ''
					that.mainError = false
					that.codeError = false
					that.adError = false
					that.ad2Error = false
					that.nameError = false
					that.telError = false
					console.log('创建成功')
				}
			})
		}
	 },
	 reviseFn(){
		 const reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g,that = this;
		if(!(that.mainObj.main_title.trim()!='')){
			that.mainError = true
		}else if(!(that.mainObj.company_code.trim()!='')){
			that.codeError = true
		}else if(that.mainObj.province==''||that.mainObj.city==''||that.mainObj.area==''|| !(that.mainObj.city!='市')){
			that.adError = true
			setTimeout(function(){
				that.adError = false
			},3000)
		}else if(!(that.mainObj.address.trim()!='')){
			that.ad2Error = true
		}else if(!(that.mainObj.contact.trim()!='')){
			that.nameError = true
		}else if(!reg.test(that.mainObj.phone)){
			this.telError = true
		}else{
			var data = {
				id:that.mainObj.id,
				main_type:that.mainObj.main_type,
				main_title:that.mainObj.main_title,
				company_code:that.mainObj.company_code,
				contact:that.mainObj.contact,
				phone:that.mainObj.phone,
				tel:that.mainObj.tel,
				province:that.select.province,
				city:that.select.city,
				area:that.select.area,
				address:that.mainObj.address,
				email:that.mainObj.email
			}
			postFn('/user/user/contract/set',data,function(res){
				if(res.data.code==200){
					that.$emit('mainFn',that.thisLayer)
					//获取主体
					var mainData = {
						id:null,
						limit:10000,
					}
					postFn('/user/user/contract/get',mainData,function(r){
						if(r.data.code==200){
							that.mainList = r.data.data.list
							console.log(that.mainList)
							that.$emit('mainListFn',that.mainList)
						}
					})
					that.mainError = false
					that.codeError = false
					that.adError = false
					that.ad2Error = false
					that.nameError = false
					that.telError = false
					that.select =  {
						province:'',
						city:'',
						area:''
					}
					console.log('修改成功')
				}
			})
		}
	 }
 },
 created(){
	
 },
 beforeMount() {
   // 只会在浏览器执行 
   this.$options.components.VDistpicker = resolve => require(['v-distpicker'], resolve);
   
  },
}
</script>

<style lang="scss">
$hover:#e52e3a;
$cur:#FF3342;
.mains{
	background: #fff;border-radius: 10px;position: fixed;left:50%;top:50%;margin:-342px 0 0 -272px;padding-bottom: 40px;
	z-index: 51;width:544px;
	.title{
		line-height: 84px;font-size: 26px;padding:10px 0 0 60px;
	}
	.form{
		.name,.input-box{
			float: left;
		}
		.name{
			em{
				color:red;vertical-align: middle;width:20px;display: inline-block;
			}
			color:#666;line-height: 36px;padding-left:42px;width:120px;height: 36px;text-align: justify;text-align-last: justify;
		}
		.input-box{
			padding-left: 6px;
			.txt{
				height:34px;width:300px;padding:0 10px;border:1px solid #eee;
			}
			select{
				border:1px solid #eee;height:36px;line-height: 36px;width:156px;float: left;margin-right:10px;
				padding-top: 0;padding-bottom:0;
				&:last-child{
					margin:0;
				}
			}
			.empty{
				height:20px;line-height: 20px;font-size: 12px;color:$hover;
			}
			.affirmBtn,.cancel{
				display: block;float: left;width:140px;height:46px;line-height: 46px;border-radius: 2px;color:#fff;font-size: 20px;text-align: center;
			}
			.affirmBtn{
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
			&.radio-box{
				line-height: 36px;
				label{margin-right:40px;}
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
