<template>
	<view class="page-crew-basic">
		<view class="info-title">简介信息</view>
		<view class="info-list-box">
			<view class="info-list" >
				<text class="left">船舶登记号</text>
				{{baseInfo.shipRegNo}}
			</view>
			<view class="info-list" >
				<text class="left">船舶识别号</text>
				{{baseInfo.shipId}}
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
				<text class="left">原中文船名</text>
				{{baseInfo.origShipNameCn}}
			</view>
			<view class="info-list" >
				<text class="left">初次登记号</text>
				{{baseInfo.shipFirstregNo}}
			</view>
			<view class="info-list" >
				<text class="left">IMO编号</text>
				{{baseInfo.shipImo}}
			</view>
			<view class="info-list" >
				<text class="left">MMSI编号</text>
				{{baseInfo.mmsi}}
			</view>
			<view class="info-list" >
				<text class="left">船籍港代码</text>
				{{baseInfo.regportCode}}
			</view>
			<view class="info-list" >
				<text class="left">航线代码</text>
				{{baseInfo.shipRouteCode}}
			</view>
			<view class="info-list" >
				<text class="left">船舶种类代码</text>
				{{baseInfo.shipTypeCode}}
			</view>
			<view class="info-list" >
				<text class="left">船舶价值</text>
				{{baseInfo.shipValue}}
			</view>
			<view class="info-list" >
				<text class="left">夏季满载吃水</text>
				{{baseInfo.shipSummerDraft}}
			</view>
			<view class="info-list" >
				<text class="left">核定抗风等级</text>
				{{baseInfo.shipWindLevel}}
			</view>
			<view class="info-list" >
				<text class="left">最小干舷</text>
				{{baseInfo.shipMinimumFreeboard}}
			</view>
			<view class="info-list" >
				<text class="left">箱位</text>
				{{baseInfo.shipContainerNum}}
			</view>
			<view class="info-list" >
				<text class="left">车位</text>
				{{baseInfo.shipParkingNum}}
			</view>
			<view class="info-list" >
				<text class="left">客位</text>
				{{baseInfo.shipPassengerNum}}
			</view>
			<view class="info-list" >
				<text class="left">IC卡号</text>
				{{baseInfo.icCardNo}}
			</view>
			<view class="info-list" >
				<text class="left">抵押权标志</text>
				{{baseInfo.mortgageFlag}}
			</view>
			<view class="info-list" >
				<text class="left">光租标志</text>
				{{baseInfo.bareboatFlag}}
			</view>
			<view class="info-list" >
				<text class="left">变更标志</text>
				{{baseInfo.alterFlag}}
			</view>
			<view class="info-list" >
				<text class="left">状态标志</text>
				{{baseInfo.statusFlag}}
			</view>
			<view class="info-list" >
				<text class="left">发卡标志</text>
				{{baseInfo.handoutCardFlag}}
			</view>
			<view class="info-list" >
				<text class="left">融资租赁标志</text>
				{{baseInfo.financialLeaseFlag}}
			</view>
			<view class="info-list" >
				<text class="left">休眠标志</text>
				{{baseInfo.hibernateFlag}}
			</view>
			<view class="info-list" >
				<text class="left">试航船舶标志</text>
				{{baseInfo.trialShipFlag}}
			</view>
			<view class="info-list" >
				<text class="left">备注</text>
				{{baseInfo.remark}}
			</view>
			<view class="info-list" >
				<text class="left">船检登记号</text>
				{{baseInfo.shipInspectNo}}
			</view>
			<view class="info-list" >
				<text class="left">船舶呼号</text>
				{{baseInfo.shipCallsign}}
			</view>
			<view class="info-list" >
				<text class="left">航区代码</text>
				{{baseInfo.sailingareaCode}}
			</view>
			<view class="info-list" >
				<text class="left">船体材料代码</text>
				{{baseInfo.shipHullMaterialCode}}
			</view>
			<view class="info-list" >
				<text class="left">建成日期</text>
				{{baseInfo.shipBuiltDate}}
			</view>
			<view class="info-list" >
				<text class="left">造船厂名称</text>
				{{baseInfo.shipyardCn}}
			</view>
			<view class="info-list" >
				<text class="left">英文造船厂名称</text>
				{{baseInfo.shipyardEn}}
			</view>
			<view class="info-list" >
				<text class="left">造船地点</text>
				{{baseInfo.shipBuiltAddrCn}}
			</view>
			<view class="info-list" >
				<text class="left">造船地点英文名称</text>
				{{baseInfo.shipBuiltAddrEn}}
			</view>
			<view class="info-list" >
				<text class="left">船舶总长</text>
				{{baseInfo.shipLength}}
			</view>
			<view class="info-list" >
				<text class="left">型宽</text>
				{{baseInfo.shipBreadth}}
			</view>
			<view class="info-list" >
				<text class="left">型深</text>
				{{baseInfo.shipDepth}}
			</view>
			<view class="info-list" >
				<text class="left">总吨</text>
				{{baseInfo.shipGrosston}}
			</view>
			<view class="info-list" >
				<text class="left">净吨</text>
				{{baseInfo.shipNetton}}
			</view>
			<view class="info-list" >
				<text class="left">参考载重吨</text>
				{{baseInfo.shipDwt}}
			</view>
			<view class="info-list" >
				<text class="left">主机种类代码</text>
				{{baseInfo.shipEngineTypeCode}}
			</view>
			<view class="info-list" >
				<text class="left">主机功率</text>
				{{baseInfo.shipEnginePower}}
			</view>
			<view class="info-list" >
				<text class="left">主机数量</text>
				{{baseInfo.shipEngineNum}}
			</view>
			<view class="info-list" >
				<text class="left">推进器数量</text>
				{{baseInfo.shipPropellerNum}}
			</view>
			<view class="info-list" >
				<text class="left">推进器种类代码</text>
				{{baseInfo.shipPropellerKindCode}}
			</view>
			<view class="info-list" >
				<text class="left">原船籍港名称</text>
				{{baseInfo.origRegportName}}
			</view>
			<view class="info-list" >
				<text class="left">源系统代码</text>
				{{baseInfo.sourceCode}}
			</view>
			<view class="info-list" >
				<text class="left">数据来源</text>
				{{baseInfo.dataOrgCode}}
			</view>
			<view class="info-list" >
				<text class="left">创建日期</text>
				{{baseInfo.createDate}}
			</view>
			<view class="info-list" >
				<text class="left">创建记录的用户或进程</text>
				{{baseInfo.creator}}
			</view>
			<view class="info-list" >
				<text class="left">最后更新日期</text>
				{{baseInfo.lastUpdateDate}}
			</view>
			<view class="info-list" >
				<text class="left">最近更新的用户或进程</text>
				{{baseInfo.updateBy}}
			</view>
			<view class="info-list" >
				<text class="left">删除标志1是0否</text>
				{{baseInfo.deleteFlag}}
			</view>
			<view class="info-list" >
				<text class="left">LANDING 到 共享库的同步状态</text>
				{{baseInfo.processStatus}}
			</view>
			<view class="info-list" >
				<text class="left">识别号标示符</text>
				{{baseInfo.shipIdFlag}}
			</view>
			<view class="info-list" >
				<text class="left">原英文船名</text>
				{{baseInfo.origShipNameEn}}
			</view>
			<view class="info-list" >
				<text class="left">原船舶登记号</text>
				{{baseInfo.origShipRegNo}}
			</view>
			<view class="info-list" >
				<text class="left">海船内河船标志</text>
				{{baseInfo.shipRegionType}}
			</view>
			<view class="info-list" >
				<text class="left">改建日期</text>
				{{baseInfo.shipRebuiltDate}}
			</view>
			<view class="info-list" >
				<text class="left">改建地点</text>
				{{baseInfo.shipRebuiltAddrCn}}
			</view>
			<view class="info-list" >
				<text class="left">英文改建地点</text>
				{{baseInfo.shipRebuiltAddrEn}}
			</view>
			<view class="info-list" >
				<text class="left">原注销日期</text>
				{{baseInfo.origDeletionDate}}
			</view>
			<view class="info-list" >
				<text class="left">永久封存备注</text>
				{{baseInfo.permanentSealRemark}}
			</view>
			<view class="info-list" >
				<text class="left">扣押标志</text>
				{{baseInfo.detentionFlag}}
			</view>
			<view class="info-list" >
				<text class="left">船舶识别号封存标志</text>
				{{baseInfo.shipidSealFlag}}
			</view>
			<view class="info-list" >
				<text class="left">机构代码</text>
				{{baseInfo.orgCode}}
			</view>
			<view class="info-list" >
				<text class="left">创建员代码</text>
				{{baseInfo.creatorCode}}
			</view>
			<view class="info-list" >
				<text class="left">创建时间</text>
				{{baseInfo.createTime}}
			</view>
			<!-- <view class="info-list" >
				<text class="left">操作员代码</text>
				{{baseInfo.operatorCode}}
			</view>
			<view class="info-list" >
				<text class="left">操作时间</text>
				{{baseInfo.operateTime}}
			</view>
			<view class="info-list" >
				<text class="left">操作标志</text>
				{{baseInfo.operateFlag}}
			</view>
			<view class="info-list" >
				<text class="left">自动生成</text>
				{{baseInfo.importTime}}
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseInfo: {}
			}
		},
		onLoad(options) {
			this.getBaseInfo(options.shipRegNo);
		},
		methods: {
			getBaseInfo(ship_reg_no){
				const that = this;
				//组装参数
				let params = {'parentId': ''};
				//请求后台数据
				that.api.requestNoLoading('/sea/s/b?ship_reg_no='+ship_reg_no)
				.then(res => {
					if(res.code!=200){
						uni.showToast({
							title: res.message,
							icon:'none'
						});
						return;
					}
					console.log(JSON.stringify(res));
					that.baseInfo = res.result[0];//变量名称参照更新后的文档
					
					// that.baseInfo = res.result;//变量名称参照更新后的文档
					
				});	
			},
		}
	}
</script>

<style lang="scss">
@import '@/static/css/common';
</style>
