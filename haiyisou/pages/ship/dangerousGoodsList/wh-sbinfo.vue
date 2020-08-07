
<template>
	<view class="page-crew-basic">
		<view class="info-title">基本信息</view>
		<view class="info-list-box">
			<view class="info-list" >
				<text class="left"> 申报单号</text>
				{{baseInfo.declareId}}
			</view>
			<view class="info-list" >
				<text class="left"> 航次编号</text>
				{{baseInfo.voyageId}}
			</view>
			<view class="info-list" >
				<text class="left"> 船舶编号 </text>
				{{baseInfo.shipNo}}
			</view>
			<view class="info-list" >
				<text class="left"> 船舶识别号 </text>
				{{baseInfo.shipId}}
			</view>
			<view class="info-list" >
				<text class="left"> IMO编号</text>
				{{baseInfo.shipImo}}
			</view>
			<view class="info-list" >
				<text class="left"> 初始登记号 </text>
				{{baseInfo.shipFirstregNo}}
			</view>
			<view class="info-list" >
				<text class="left"> 牌舶号</text>
				{{baseInfo.shipCardNo}}
			</view>
			<view class="info-list" >
				<text class="left"> 船舶呼号 </text>
				{{baseInfo.shipCallsign}}
			</view>
			<view class="info-list" >
				<text class="left"> 中文船名 </text>
				{{baseInfo.shipNameCn}}
			</view>
			<view class="info-list" >
				<text class="left"> 英文船名	</text>
				{{baseInfo.shipNameEn}}
			</view>
			<view class="info-list" >
				<text class="left"> 国籍 </text>
				{{baseInfo.shipNationCode}}
			</view>
			<view class="info-list" >
				<text class="left"> 船籍港 </text>
				{{baseInfo.shipRegportCode}}
			</view>
			<view class="info-list" >
				<text class="left">海船/内陆船</text>
				{{baseInfo.shipRegionType}}
			</view>
			<view class="info-list" >
				<text class="left"> 船舶种类</text>
				{{baseInfo.shipTypeCode}}
			</view>
			<view class="info-list" >
				<text class="left"> 建成日期 </text>
				{{baseInfo.shipBuiltDate}}
			</view>
			<view class="info-list" >
				<text class="left"> 总吨 </text>
				{{baseInfo.shipGrosston}}
			</view>
			<view class="info-list" >
				<text class="left"> 净吨 </text>
				{{baseInfo.shipNetton}}
			</view>
			<view class="info-list" >
				<text class="left"> 参考总载重吨 </text>
				{{baseInfo.shipDwt}}
			</view>
			<view class="info-list" >
				<text class="left"> 船舶长度 </text>
				{{baseInfo.shipLength}}
			</view>
			<view class="info-list" >
				<text class="left"> 船舶型宽</text>
				{{baseInfo.shipBreadth}}
			</view>
			<view class="info-list" >
				<text class="left"> 船舶所有人</text>
				{{baseInfo.shipOwner}}
			</view>
			<view class="info-list" >
				<text class="left"> 船舶经营人 </text>
				{{baseInfo.shipOperator}}
			</view>
			<view class="info-list" >
				<text class="left"> 船舶管理人</text>
				{{baseInfo.shipManager}}
			</view>
			<view class="info-list" >
				<text class="left">MMSI</text>
				{{baseInfo.shipMmsi}}
			</view>
			<view class="info-list" >
				<text class="left"> 提交海事机构 </text>
				{{baseInfo.orgCode}}
			</view>
			<view class="info-title">申报信息</view>
			<view class="info-list" >
				<text class="left"> 航次 </text>
				{{baseInfo.voyageNo}}
			</view>
			<view class="info-list" >
				<text class="left"> 进出港 </text>
				{{baseInfo.portFlag}}
			</view>
			<view class="info-list" >
				<text class="left"> 内外贸 </text>
				{{baseInfo.tradeFlag}}
			</view>
			<view class="info-list" >
				<text class="left"> 靠泊港口 </text>
				{{baseInfo.adPort}}
			</view>
			<view class="info-list" >
				<text class="left"> 抵离港时间 </text>
				{{baseInfo.adTime}}
			</view>
			<view class="info-list" >
				<text class="left"> 靠泊泊位 </text>
				{{baseInfo.adBerth}}
			</view>
			<view class="info-list" >
				<text class="left"> 开始作业时间 </text>
				{{baseInfo.workTimeBegin}}
			</view>
			<view class="info-list" >
				<text class="left"> 结束作业时间 </text>
				{{baseInfo.workTimeEnd}}
			</view>
			<view class="info-list" >
				<text class="left"> 上一港 </text>
				{{baseInfo.prevPort}}
			</view>
			<view class="info-list" >
				<text class="left"> 下一港 </text>
				{{baseInfo.nextPort}}
			</view>
			<view class="info-list" >
				<text class="left"> 联系人姓名 </text>
				{{baseInfo.contactPerson}}
			</view>
			<view class="info-list" >
				<text class="left"> 联系方式 </text>
				{{baseInfo.contactPhone}}
			</view>
			<view class="info-list" >
				<text class="left"> 申报标识 </text>
				{{baseInfo.declareFlag}}
			</view>
			<view class="info-list" >
				<text class="left"> 船长编号 </text>
				{{baseInfo.captainId}}
			</view>
			<view class="info-list" >
				<text class="left"> 船长姓名 </text>
				{{baseInfo.captainName}}
			</view>
			<view class="info-list" >
				<text class="left"> 船长证书编号 </text>
				{{baseInfo.captainCertNo}}
			</view>
			<view class="info-list" >
				<text class="left"> 申报员编号 </text>
				{{baseInfo.declarerId}}
			</view>
			<view class="info-list" >
				<text class="left"> 申报员姓名 </text>
				{{baseInfo.declarerName}}
			</view>
			<view class="info-list" >
				<text class="left"> 申报员证书编号 </text>
				{{baseInfo.declarerCertNo}}
			</view>
			<view class="info-list" >
				<text class="left"> 申报单位编号 </text>
				{{baseInfo.companyId}}
			</view>
			<view class="info-list" >
				<text class="left"> 申报单位名称 </text>
				{{baseInfo.companyName}}
			</view>
			<view class="info-list" >
				<text class="left"> 申报时间	 </text>
				{{baseInfo.declareTime}}
			</view>
			<view class="info-list" >
				<text class="left"> 申报状态	 </text>
				{{baseInfo.declareStatus}}
			</view>
			<view class="info-list" >
				<text class="left"> 申报方式	 </text>
				{{baseInfo.declareWay}}
			</view>
			<view class="info-list" >
				<text class="left"> 申报账号	 </text>
				{{baseInfo.declareAccount}}
			</view>
			<view class="info-list" >
				<text class="left"> 备注 </text>
				{{baseInfo.remark}}
			</view>
				<view class="exam-info" v-if="hwxx.length>0">
					<view class="info-title">货物信息</view>
					<view class="info info-exam-subject">
						<view class="main">
							<view class="subject-list" v-for="(item,index) in hwxx" :key="index">
								<view class="subject-num">{{index+1}}</view>
								<view class="subject-info">
									<view class="name">{{item.goodsNameCn}}{{item.unno}}</view>
									<text class="text">货物流向：{{item.goodsDirection}}</text>
									<view class="text">总重量（数量）/吨：{{item.totalWeight}}</view>
									<view class="text">发货人：{{item.consignor}}</view>
								</view>
							</view>
					</view>
				</view>
				
			</view>
		</view>
		<view class="exam-info" v-if="zjxx.length>0">
			<view class="info-title">运输组件</view>
			<view class="info info-exam-subject">
				<view class="main">
					<view class="subject-list" v-for="(item,index) in zjxx" :key="index">
						<view class="subject-num">{{index+1}}</view>
						<view class="subject-info">
							<view class="subject-info">
								<view class="text">货物序号：{{item.goodsSerialNo}}</view>
								<view class="text">成组件编号：{{item.containerNo}}</view>
								<view class="text">类型规格尺寸：{{item.containerSpec}}</view>
								<view class="text">箱内货物件数：{{item.insideQuantity}}</view>
								<view class="text">整箱/拼箱：{{item.fclLclFlag}}</view>
								<view class="text">箱内货物净重：{{item.insideWeight}}</view>
								<view class="text">集装箱装箱证明书ID（出口）：{{item.containerCertId}}</view>
							</view>
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
			declareId:'',
			type:'',
			hwxx:[],
			zjxx:[]
		};
	},
	onLoad(options){
		console.log(options.declareId)
		this.declareId=options.declareId;
		this.type=options.type;
		this.getWhXQByType(options.type,options.declareId);//基本信息和申报信息
		this.getHwxx(options.type,options.declareId);
		this.getHwzjxx(options.type,options.declareId);//货物组件
	},
	methods:{
		getWhXQByType(str,declareId){
			this.api.request('/sea/view/getGoodsDeclarationDetails?type='+declareId,{},'GET').then(res=>{
				if(res.code!=200){
					uni.showToast({
						title: res.message,
						icon:'none'
					});
					return;
				}
				console.log('>>>>>>>>'+str);
				if(str==='szytsb'){
					console.log(res.result[0]);
					this.baseInfo=(res.result)[0];
				}
				if(str==='bzhwsb'){
					this.baseInfo=(res.result)[0];
				}
				if(str==='gtszhw'){
					this.baseInfo=(res.result)[0];
				}
			})
		},
		getHwxx(str,declareId){
			this.api.request('/sea/view/declarationOfGoods?type='+declareId,{},'GET').then(res=>{
				 console.log(str);
				  console.log("货物信息>>>>"+JSON.stringify(res));
				  if(res.code!=200){
				  	uni.showToast({
				  		title: res.message,
				  		icon:'none'
				  	});
				  	return;
				  }
				if(str==='szytsb'){
					if(typeof(res.result[0].szyt)==='undefined'){
						return;
					}
					console.log('1111111111');
					this.hwxx=res.result[0].szyt;
				}
				if(str==='bzhwsb'){
					if(typeof(res.result[0].bzhw)==='undefined'){
						return;
					}
					this.hwxx=res.result[0].bzhw;
				}
				if(str==='gtszhw'){
					if(typeof(res.result[0].gtsz)==='undefined'){
						return;
					}
					this.hwxx=res.result[0].gtsz;
				}
			})
		},
		getHwzjxx(str,declareId){
			if(str==='bzhwsb'){
				this.api.request('/sea/view/declarationOfContainer?declareId='+declareId,{},'GET').then(res=>{
					if(str==='bzhwsb'){
						console.log('组件信息>>'+JSON.stringify(res));
						 this.zjxx=res.result[0].carriageCon;
					}
				})
			}
		}
	}
}
</script>

<style lang="scss">
	
.exam-info-title{ background-color: #ebf2fe; color:#3882f9; padding: 0 40rpx; height:98rpx; line-height: 98rpx; font-size:28rpx; border-bottom: 1rpx solid #e5e5e5;}
.exam-info{  font-size:32rpx; padding-top: 0px;padding-left: 0px;padding-right: 0px;padding-bottom: 0px;
	.info{ display: flex; flex-wrap: wrap; justify-content: space-between; margin-bottom: 34rpx; padding-bottom: 10rpx; border-bottom: 1rpx solid #e5e5e5;
		>text{ display: block; margin-bottom: 25rpx;}
		.main{@extend text; font-weight: 600;}
		&.info-exam-subject{ flex-direction: column; justify-content: space-between; align-content: flex-start; 
			.main{ margin-top: 10rpx;}
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
}
@import '@/static/css/common';
</style>
