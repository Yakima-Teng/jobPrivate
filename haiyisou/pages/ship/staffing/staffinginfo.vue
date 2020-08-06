<template>
	<view class="page-crew-basic">
		<view class="info-title">证书信息</view>
		<view class="info-list-box">
			<view class="info-list" >
			        <text class="left">船舶登记号</text>
			        {{baseInfo.shipRegNo}}
			</view>
			
			<view class="info-list" >
			        <text class="left">配员版本号</text>
			        {{baseInfo.manningVersion}}
			</view>
			
			<view class="info-list" >
			        <text class="left">船舶类型</text>
			        {{baseInfo.shipType}}
			</view>
			
			<view class="info-list" >
			        <text class="left">国籍版本号</text>
			        {{baseInfo.nationVersion}}
			</view>
			
			<view class="info-list" >
			        <text class="left">船舶识别号</text>
			        {{baseInfo.shipId}}
			</view>
			
			<view class="info-list" >
			        <text class="left">IMO编号</text>
			        {{baseInfo.shipImo}}
			</view>
			
			<view class="info-list" >
			        <text class="left">船舶呼号</text>
			        {{baseInfo.shipCallsign}}
			</view>
			
			<view class="info-list" >
			        <text class="left">中文船名</text>
			        {{baseInfo.shipNameCn}}
			</view>
			
			<view class="info-list" >
			        <text class="left">英文船名</text>
			        {{baseInfo.shipNameEn}}
			</view>
			
			<view class="info-list" >
			        <text class="left">船舶种类</text>
			        {{baseInfo.shipTypeCode}}
			</view>
			
			<view class="info-list" >
			        <text class="left">总吨（吨）</text>
			        {{baseInfo.shipGrosston}}
			</view>
			
			<view class="info-list" >
			        <text class="left">主机功率（KW）</text>
			        {{baseInfo.shipEnginePower}}
			</view>
			
			<view class="info-list" >
			        <text class="left">载客定额</text>
			        {{baseInfo.shipPassengerNum}}
			</view>
			
			<view class="info-list" >
			        <text class="left">船籍港代码</text>
			        {{baseInfo.regportCode}}
			</view>
			
			<view class="info-list" >
			        <text class="left">GMDSS操作员类型</text>
			        {{baseInfo.gmdssType}}
			</view>
			
			<view class="info-list" >
			        <text class="left">航区</text>
			        {{baseInfo.naviArea}}
			</view>
			
			<view class="info-list" >
			        <text class="left">英文航区</text>
			        {{baseInfo.sailingareaEn}}
			</view>
			
			<view class="info-list" >
			        <text class="left">自动化程度代码</text>
			        {{baseInfo.autodegreCode}}
			</view>
			
			<view class="info-list" >
			        <text class="left">救生设备最大人数</text>
			        {{baseInfo.rescueNum}}
			</view>
			
			<view class="info-list" >
			        <text class="left">GMDSS设备装备情况</text>
			        {{baseInfo.gmdssSituation}}
			</view>
			
			<view class="info-list" >
			        <text class="left">船舶公约类型</text>
			        {{baseInfo.shipconvenType}}
			</view>
			
			<view class="info-list" >
			        <text class="left">水域代码</text>
			        {{baseInfo.watersCode}}
			</view>
			
			<view class="info-list" >
			        <text class="left">特殊要求</text>
			        {{baseInfo.specialReq}}
			</view>
			
			<view class="info-list" >
			        <text class="left">定线航行标志</text>
			        {{baseInfo.routingNaviMark}}
			</view>
			
			<view class="info-list" >
			        <text class="left">定线航行起始地点</text>
			        {{baseInfo.routingNaviStart}}
			</view>
			
			<view class="info-list" >
			        <text class="left">定线航行终止地点</text>
			        {{baseInfo.routingNaviEnd}}
			</view>
			
			<view class="info-list" >
			        <text class="left">证书起始有效期</text>
			        {{baseInfo.expdateStart}}
			</view>
			
			<view class="info-list" >
			        <text class="left">证书截止有效期</text>
			        {{baseInfo.expdateEnd}}
			</view>
			
			<view class="info-list" >
			        <text class="left">状态标志</text>
			        {{baseInfo.statusFlag}}
			</view>
			
			<view class="info-list" >
			        <text class="left">机构代码</text>
			        {{baseInfo.orgId}}
			</view>
			
			<view class="info-list" >
			        <text class="left">备注</text>
			        {{baseInfo.remark}}
			</view>
			
			<view class="info-list" >
			        <text class="left">英文备注</text>
			        {{baseInfo.remarkEn}}
			</view>
			
			<view class="info-list" >
			        <text class="left">背书</text>
			        {{baseInfo.endorse}}
			</view>
			
			<view class="info-list" >
			        <text class="left">证书印刷号</text>
			        {{baseInfo.certPrintNo}}
			</view>
			
			<view class="info-list" >
			        <text class="left">注销登记号码</text>
			        {{baseInfo.regDeletionNo}}
			</view>
			
			<view class="info-list" >
			        <text class="left">证书编号</text>
			        {{baseInfo.certSerialNo}}
			</view>
			
			<view class="info-list" >
			        <text class="left">发证机关</text>
			        {{baseInfo.issuOrgCode}}
			</view>
			
			<view class="info-list" >
			        <text class="left">签发地点</text>
			        {{baseInfo.issuePlace}}
			</view>
			
			<view class="info-list" >
			        <text class="left">签发日期</text>
			        {{baseInfo.issuDate}}
			</view>
			
			<view class="info-list" >
			        <text class="left">申办单号</text>
			        {{baseInfo.bidNo}}
			</view>
			
			<view class="info-list" >
			        <text class="left">无效形式</text>
			        {{baseInfo.invaForm}}
			</view>
			
			<view class="info-list" >
			        <text class="left">作废人姓名</text>
			        {{baseInfo.invamanName}}
			</view>
			
			<view class="info-list" >
			        <text class="left">作废日期</text>
			        {{baseInfo.invaDate}}
			</view>
			
			<view class="info-list" >
			        <text class="left">无效原因</text>
			        {{baseInfo.invaType}}
			</view>
			
			<view class="info-list" >
			        <text class="left">受理机构</text>
			        {{baseInfo.acceptOrg}}
			</view>
			
			<view class="info-list" >
			        <text class="left">受理时间</text>
			        {{baseInfo.acceptTime}}
			</view>
			
			<view class="info-list" >
			        <text class="left">适用范围中文</text>
			        {{baseInfo.applyScopeCn}}
			</view>
			
			<view class="info-list" >
			        <text class="left">证书版本</text>
			        {{baseInfo.certVersion}}
			</view>
		</view>
		<view class="exam-info" v-if="pylist.length>0">
			<view class="info-title">配员信息</view>
			<view class="info info-exam-subject">
				<view class="main">
					<view class="subject-list" v-for="(item,index) in pylist" :key="index">
						<view class="subject-num">{{index+1}}</view>
						<view class="subject-info">
							<view class="name">{{item.postNameCn}}</view>
							<text class="text">证书：{{item.convclau}}</text>
							<view class="text">配员/申请人数：{{item.crewNumber}}/{{item.applNum}}</view>
							<view class="text">核准人数/专业：{{item.manningNum}}/{{item.majorCode}}</view>
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
				shipRegNo:'',
				pylist:[]
			}
		},
		onLoad(options){
			this.shipRegNo=options.shipRegNo;
			this.getPyxx(options.shipRegNo);
		},
		methods: {
			getPyxx(shipRegNo){
				const that = this;
				//组装参数
				let params = {'parentId': ''};
				//请求后台数据
				that.api.requestNoLoading('/sea/s/m?ship_reg_no='+shipRegNo)
				.then(res => {
					console.log('>>'+JSON.stringify(res.result));
					if(res.code!=200){
						uni.showToast({
							title: res.message,
							icon:'none'
						});
						return;
					}
					that.baseInfo = res.result[0].manningCertEntity;
					console.log(JSON.stringify(res.result[0].manningDetailList));
					that.pylist = res.result[0].manningDetailList;
				
				});	
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
.page-crew-basic{padding: 0 40rpx;
	.info-title{font-size: 40rpx; font-weight: bold; margin:44rpx 0 70rpx;}
	.info-list{ padding-left: 4rpx; font-size:32rpx; border-bottom: 1rpx solid #e5e5e5; padding-bottom: 38rpx; margin-bottom: 36rpx; display: flex; justify-content: space-between; font-weight: 600;
		.left{font-weight: normal;}
	}
}
</style>
