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
.page-crew-basic{padding: 0 40rpx;
	.info-title{font-size: 40rpx; font-weight: bold; margin:44rpx 0 70rpx;}
	.info-list{ padding-left: 4rpx; font-size:32rpx; border-bottom: 1rpx solid #e5e5e5; padding-bottom: 38rpx; margin-bottom: 36rpx; display: flex; justify-content: space-between; font-weight: 600;
		.left{font-weight: normal;}
	}
}
.subject-list{ width: 100%; background-color: #fff; box-shadow: 0 2rpx 20rpx rgba($color: #0a3752, $alpha: .15); margin-bottom: 10rpx; border-radius:15rpx 0 0 0; padding: 32rpx 0 22rpx; display: flex; flex-wrap: wrap;
		.subject-num{ width: 64rpx; height:48rpx; line-height: 48rpx; color:#fff; font-size:24rpx; background-color: #3882f9; text-align: center; border-radius:0 20rpx 20rpx 0; margin-right: 29rpx; }
		.subject-info{ width: calc(100% - 64rpx -29rpx); overflow: hidden; font-weight: normal;
			.name{ font-size: 36rpx; margin-bottom: 20rpx; font-weight: 600; line-height: 48rpx;}
			.lable{ margin-bottom: 27rpx; font-size:24rpx;
				>text{ display: inline-block; padding: 8rpx 17rpx; border-radius:5rpx; margin-right: 10rpx;
					&.green{ background-color: #e4f3f0; color:#2cab91; }
					&.blue{ background-color: #ebf2fe; color:#3882f9; }
					&.gray{ background-color: #f0eff4; color:#666; }
				}
			}
			.text{ width: 578rpx; color:#666; margin-bottom: 10rpx; font-weight: 300;}
		}
	}


</style>
