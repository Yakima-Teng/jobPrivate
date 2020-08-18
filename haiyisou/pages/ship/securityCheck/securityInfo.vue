<template>
	<view class="page-crew-basic" v-if="gqjc">
		<view class="crew-exam-aq-title">
		  <!-- 当前页签直接在 page-crew-exam 上添加cur即可-->
		  <view :class="tabsType == item.type?'page-crew-exam cur':'page-crew-exam'"  v-for="(item, index) in goodsList" :key="index" @click="getList(item.type)" >
		    <view class="title">{{item.goodsTitle}}</view>
		  </view>
		</view>
		<!-- <view class="info-title">安检基本信息</view> -->
		<view class="info-list-box" v-if="tabsType=='jbxx'">
			<view class="info-list" >
				<text class="left"> 检查类型</text>
				{{baseInfo.inspectType}}
			</view>
			<view class="info-list" >
				<text class="left"> 船长证书号</text>
				{{baseInfo.captainCertNo}}
			</view>
			<view class="info-list" >
				<text class="left"> 船长联系方式 </text>
				{{baseInfo.captainPhone}}
			</view>
			<view class="info-list" >
				<text class="left"> 检查港 </text>
				{{baseInfo.portCode}}
			</view>
			<view class="info-list" >
				<text class="left"> 检查日期</text>
				{{baseInfo.inspectDate}}
			</view>
			<view class="info-list" >
				<text class="left"> 检查员 </text>
				{{baseInfo.inspectorName}}
			</view>
			<view class="info-list" >
				<text class="left"> 船舶是否滞留</text>
				{{baseInfo.detentionMark}}
			</view>
			<view class="info-list" >
				<text class="left"> 实习安检员 </text>
				{{baseInfo.praticeInspectorName}}
			</view>
			<view class="info-list" >
				<text class="left"> 安检类型 </text>
				{{baseInfo.inspectType}}
			</view>
			<view class="info-list" >
				<text class="left"> 是否专项检查	</text>
				{{baseInfo.isSpecialInsp}}
			</view>
			<view class="info-list" >
				<text class="left"> 是否通过入沪专项安检 </text>
				{{baseInfo.isPassSpecInsp}}
			</view>
			<view class="info-list" >
				<text class="left"> 备注 </text>
				{{baseInfo.remark}}
			</view>
		</view>
		<view class="exam-info" v-if="tabsType=='qxxx'">
			<view class="info-title">缺陷信息</view>
			<view class="info info-exam-subject">
				<view class="main">
					<view class="subject-list" v-for="(item,index) in qxxx" :key="index">
						<view class="subject-num">{{index+1}}</view>
						<view class="subject-info">
							<view class="text">缺陷代码：{{item.defectCode}}</view>
							<view class="text">缺陷描述：</view>
							<view class="text">{{item.defectDescription}}</view>
							<view class="text">处理意见代码：</view>
							<view class="text">{{item.processingCode}}</view>
							<view class="text">处理意见说明：</view>
							<view class="text">{{item.handlingComments}}</view>
							<view class="text">执法依据：</view>
							<view class="text">{{item.enforceFoundation}}</view>
							<view class="text">滞留缺陷是否与船险机构有关：</view>
							<view class="text">{{item.isInspectOrgRelated}}</view>
						</view>
					</view>
			</view>
		</view>
		</view>
	</view>
	<view class="page-crew-basic" v-else-if="xcjc">
		<view class="crew-exam-aq-title">
		  <!-- 当前页签直接在 page-crew-exam 上添加cur即可-->
		  <view :class="tabsType == item.type?'page-crew-exam cur':'page-crew-exam'"  v-for="(item, index) in goodsList" :key="index" @click="getList(item.type)" >
		    <view class="title">{{item.goodsTitle}}</view>
		  </view>
		</view>
		<!-- <view class="info-title">安检基本信息</view> -->
		<view class="info-list-box" v-if="tabsType=='jbxx'">
			<view class="info-list" >
				<text class="left"> 检查类型</text>
				{{baseInfo.preliminaryReviewSign}}
			</view>
			<view class="info-list" >
				<text class="left"> 船长姓名</text>
				{{baseInfo.captainName}}
			</view>
			<view class="info-list" >
				<text class="left"> 检查机构 </text>
				{{baseInfo.inspectOrg}}
			</view>
			<view class="info-list" >
				<text class="left"> 检查地点 </text>
				{{baseInfo.inspectionSite}}
			</view>
			<view class="info-list" >
				<text class="left"> 检查日期</text>
				{{baseInfo.inspectDate}}
			</view>
			<view class="info-list" >
				<text class="left"> 检查员 </text>
				{{baseInfo.inspectorName}}
			</view>
			
			<view class="info-list" >
				<text class="left"> 实习安检员 </text>
				{{baseInfo.praticeInspectorName}}
			</view>
			<view class="info-list" >
				<text class="left"> 是否符合检查时限要求 </text>
				{{baseInfo.inspectTimeLimit}}
			</view>
			
			<view class="info-list" >
				<text class="left"> 是否专项检查 </text>
				{{baseInfo.isSpecialInspect}}
			</view>
			<view class="info-list" >
				<text class="left"> 专项检查名称	</text>
				{{baseInfo.inspectType}}
			</view>
			<view class="info-list" >
				<text class="left"> 是否启用安全检查 </text>
				{{baseInfo.ifSafeinspect}}
			</view>
			<view class="info-list" >
				<text class="left"> 发现问题或违章 </text>
				{{baseInfo.problemOrViolation}}
			</view>
			<view class="info-list" >
				<text class="left"> 备注 </text>
				{{baseInfo.remark}}
			</view>
		</view>
		<view class="exam-info" v-if="tabsType=='qxxx'">
			<view class="info-title">缺陷信息</view>
			<view class="info info-exam-subject">
				<view class="main">
					<view class="subject-list" v-for="(item,index) in qxxx" :key="index">
						<view class="subject-num">{{index+1}}</view>
						<view class="subject-info">
							<view class="text">检查代码：{{item.contentCode}}</view>
							<view class="text">检查内容：</view>
							<view class="text">{{item.contentDesc}}</view>
							<view class="text">检查结果：{{item.result}}</view>
							<view class="text">处理意见代码：{{item.commentCode}}</view>
							<view class="text">处理意见说明：</view>
							<view class="text">{{item.commentDesc}}</view>
							<view class="text">是否发现问题或违章：{{item.ifProblem}}</view>
							<view class="text">违章或问题说明：</view>
							<view class="text">{{item.description}}</view>
							<view class="text">操作：{{item.deleteFlag}}</view>
						</view>
					</view>
			</view>
		</view>
		</view>
	</view>
	
</template>

<script>
export default {
	data() {
		return {
			goodsList:[{
				goodsTitle:"安检基本信息",
				type:'jbxx'
			},{
				goodsTitle:"缺陷信息",
				type:'qxxx'
				
			}],
			baseInfo: {},
			id:'',
			type:'',
			szyt:false,
			bzhw:false,
			gtsz:false,
			gqjc:false,
			xcjc:false,
			qxxx:[],
			tabsType:'jbxx'
		};
	},
	onLoad(options){
		uni.setNavigationBarTitle({
			title:options.title
		})
		this.id=options.id;
		this.type=options.type;
		this.getXQByid(options.type,options.id);
	},
	methods:{
		getList(type){
			this.tabsType=type;
			console.log(type);
			
		},
		getXQByid(str,id){
			if(str==='fsc'){
				this.gqjc=true;
				this.api.request('/sea/Secure/ShipAndflagState?domesticSecurityNumber='+id,{},'GET').then(res=>{
					console.log('>>>>>'+JSON.stringify(res));
					if(res.code!=200){
						uni.showToast({
							title: res.message,
							icon:'none'
						});
						return;
					}
					// console.log(res.result[0].szyt);
					this.baseInfo=res.result[0];
					// this.szyt=true;
					
				})
				//获取缺陷信息
				this.api.request('/sea/Secure/ShipflagStateDetail?domesticSecurityNumber='+id,{},'GET').then(res=>{
					console.log('>>>>>'+JSON.stringify(res));
					if(res.code!=200){
						uni.showToast({
							title: res.message,
							icon:'none'
						});
						return;
					}
					// console.log(res.result[0].szyt);
					this.qxxx=res.result;
					// this.szyt=true;
					
				})
			}else{
				this.xcjc=true;
				this.api.request('/sea/Secure/getSiteSupervisionDetail?inspectNo='+this.id,{},'GET').then(res=>{
					console.log('>>>>>'+JSON.stringify(res));
					if(res.code!=200){
						uni.showToast({
							title: res.message,
							icon:'none'
						});
						return;
					}
					// console.log(res.result[0].szyt);
					this.baseInfo=res.result[0];
					// this.szyt=true;
					
				});
				//获取缺陷信息
				this.api.request('/sea/Secure/getSiteSuperDetail?inspectNo='+this.id,{},'GET').then(res=>{
					console.log('>>>>>'+JSON.stringify(res));
					if(res.code!=200){
						uni.showToast({
							title: res.message,
							icon:'none'
						});
						return;
					}
					// console.log(res.result[0].szyt);
					this.qxxx=res.result;
					// this.szyt=true;
					
				})
			}
			
		},
		getHwzjxx(str,declareId){
			const that=this;
			console.log('>>>>>'+str);
			//+declareId
			if(str==='bzhwhy'){
				that.api.request('/sea/view/declarationOfContainer?declareId=DGCL01908200949534518BJ',{},'GET').then(res=>{
					if(res.code!=200){
						uni.showToast({
							title: res.message,
							icon:'none'
						});
						return;
					}
					if(str==='bzhwhy'){
						console.log('组件信息>>'+JSON.stringify(res.result[0].carriageCon));//trafficCon
						  that.zjxx=res.result[0].carriageCon;
					}
				})
			}
		}
	}
}
</script>

<style lang="scss">

@import '@/static/css/common';
.crew-exam-aq-title{ padding: 30rpx 40rpx; font-size: 28rpx; display: flex; justify-content: space-between; align-items: center;
	  .page-crew-exam{ height: 70rpx; line-height: 70rpx; border:1px solid rgba(136,136,136,.6); border-radius:8px 0px 0px 8px; color:#191919; width: 50%; float: left; text-align: center;
	    &:first-child{ border-right: 0;}
	    &:last-child{ background-color:rgba(255,255,255,1); border:1px solid rgba(136,136,136,.6); border-left: 0; border-radius:0px 8px 8px 0px;}
	    &.cur{ background-color: #3882F9; color:#fff; border-color: #3882F9;}
	  }
	}
</style>
