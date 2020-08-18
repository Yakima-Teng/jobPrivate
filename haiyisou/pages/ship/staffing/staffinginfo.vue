<template>
	<view class="page-crew-basic">
		<view class="crew-exam-aq-title">
		  <!-- 当前页签直接在 page-crew-exam 上添加cur即可-->
		  <view :class="tabsType == item.type?'page-crew-exam cur':'page-crew-exam'"  v-for="(item, index) in goodsList" :key="index" @click="getList(item.type)" >
		    <view class="title">{{item.goodsTitle}}</view>
		  </view>
		</view>
		<!-- <view class="info-title">配员信息</view> -->
		<view class="info-list-box" v-if="tabsType=='jb'">
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
			
			<view class="info" >
				<text  class="left" style="font-size: 16px;opacity: .6;">适用范围中文：</text><view class="main">{{baseInfo.applyScopeCn}}</view>
			    <!-- <text class="left">适用范围中文</text> -->
			        
			</view>
			<view class="info-list" ></view>
			<view class="info-list" >
			        <text class="left">证书版本</text>
			        {{baseInfo.certVersion}}
			</view>
		</view>
		<view class="exam-info" v-if="tabsType=='py'||pylist.length>0">
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
				goodsList:[{
					goodsTitle:"基本信息",
					type:'jb'
				},{
					goodsTitle:"配员信息",
					type:'py'
					
				}],
				baseInfo: {},
				shipRegNo:'',
				pylist:[],
				tabsType:'jb',
			}
		},
		onLoad(options){
			this.shipRegNo=options.shipRegNo;
			this.getPyxx(options.shipRegNo);
		},
		methods: {
			getList(type){
				this.tabsType=type;
				console.log(type);
				
			},
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
@import '@/static/css/common';
.crew-exam-aq-title{ padding: 30rpx 40rpx; font-size: 28rpx; display: flex; justify-content: space-between; align-items: center;
	  .page-crew-exam{ height: 70rpx; line-height: 70rpx; border:1px solid rgba(136,136,136,.6); border-radius:8px 0px 0px 8px; color:#191919; width: 50%; float: left; text-align: center;
	    &:first-child{ border-right: 0;}
	    &:last-child{ background-color:rgba(255,255,255,1); border:1px solid rgba(136,136,136,.6); border-left: 0; border-radius:0px 8px 8px 0px;}
	    &.cur{ background-color: #3882F9; color:#fff; border-color: #3882F9;}
	  }
	}
</style>
