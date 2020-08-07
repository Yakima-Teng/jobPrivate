<template>
	<view class="page-crew-basic">
		<view class="info-title">安检基本信息</view>
		<view class="info-list-box">
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
		<view class="exam-info" v-if="qxxx.length>0">
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
</template>

<script>
export default {
	data() {
		return {
			baseInfo: {},
			id:'',
			type:'',
			szyt:false,
			bzhw:false,
			gtsz:false,
			qxxx:[]
		};
	},
	onLoad(options){
		this.id=options.id;
		this.type=options.type;
		this.getXQByid(options.type,options.id);
		// this.getHwzjxx(options.type,options.declareId);
	},
	methods:{
		getXQByid(str,id){
			if(str==='fsc'){
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
				console.log('》》》》》》》》暂无现场安全检查的详情接口！！！！！！！！！！！');
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

</style>
