<template>
	<view class="page-crew-seniority">
		<HeaderSearch></HeaderSearch>
		<view class="postReport-box">
			<view class="postReport-list postReport-goin">
				<view class="postReport-header">
					<view class="icon">进</view>
					<view class="info">
						<text>青岛港</text>
						<view class="sep"><image src="../../../static/icon-huan.png" mode=""></image></view>
						<text>连云港</text>
					</view>
				</view>
				<view class="postReport-main">
					<view class="title">
						<text>报告时间：2020-01-01 03:30:03</text>
						<view class="status">已撤销</view>
					</view>
					<view class="info">申办人：李明宇</view>
					<view class="info">报告机构：连云港海事局</view>
					<view class="info">报告编号：CBBG202001010</view>
					<view class="info">预抵时间：2020-01-01 03:30:03</view>
				</view>
			</view>
			<view class="postReport-list postReport-out">
				<view class="postReport-header">
					<view class="icon">出</view>
					<view class="info">
						<text>连云港</text>
						<view class="sep"><image src="../../../static/icon-chu.png" mode=""></image></view>
						<text>上海港</text>
					</view>
				</view>
				<view class="postReport-main">
					<view class="title">
						<text>2020-01-01 03:30:03</text>
						<view class="status">未撤销</view>
					</view>
					<view class="info">申办人：李明宇</view>
					<view class="info">报告机构：连云港海事局</view>
					<view class="info">报告编号：CBBG202001010</view>
					<view class="info">预抵时间：2020-01-01 03:30:03</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import HeaderSearch from '@/components/crew/header-search';
import SunuiGrand from '@/components/crew/sunui-grand';

export default {
  components: {
    HeaderSearch,
    SunuiGrand
  },
  data() {
    return {
		sTime:'2020-09-09',
		// showSize:'6',
		properties:[{
			message:'报告编号',
			property:'reportNo'
		 },{
			message:'机构',
			property:'orgCode'
		 },{
			message:'进出港类型',
			property:'arrivalOrLeave'
		 },{
			message:'上一港口名称',
			property:'prePortName'
		 },{
			message:'下一港口名称',
			property:'nextPortName'
		 },{
			message:'预抵/预离时间',
			property:'expectTime'
		 },{
			message:'申办人姓名',
			property:'bidName'
		 },{
			message:'是否已撤销',
			property:'ifRevokeStr'
		 },{
			message:'港口名称',
			property:'reportPortName'
		 },{
			message:'是否中途挂靠',
			property:'berthCode'
		 },{
			message:'停靠泊位',
			property:'berthName'
		 },{
			message:'报告时间',
			property:'reportTime'
		 },{
			message:'手机号码',
			property:'mobilePhone'
		 },{
			message:'其他人员',
			property:'otherQuantity'
		 },{
			message:'本港卸/装货量',
			property:'portDangerCargo'
		 },{
			message:'实载客量',
			property:'actualCapacity'
		 },{
			message:'本港下/上客量',
			property:'portPassenger'
		 },{
			message:'实载车量',
			property:'realVehicle'
		 },{
			message:'本港卸/装车量',
			property:'portVehicle'
		 },{
			message:'驳船数量',
			property:'numOfBarge'
		 },{
			message:'本港解/加载驳船数量',
			property:'portBarge'
		 },{
			message:'实载集装箱运量',
			property:'realContainerQay'
		 },{
			message:'本港卸/装集装箱运量',
			property:'portContainerQay'
		 },{
			message:'经度',
			property:'latitude'
		 },{
			message:'纬度',
			property:'latitude'
		 },{
			message:'航次日报',
			property:'voyageReport'
		 },{
			message:'航次数',
			property:'frequency'
		 },{
			message:'航行区段',
			property:'navigationSection'
		 }],
	  portList:[
		  {
			reportid:"报告主键11",
			regshipid:"已注册船舶主键22",
			shipidnumber:"船舶识别号33",
			regno:"船舶登记号44",
			initregno:"初次登记号",
			checkno:"船检登记号",
			shipname:"中文船名",
			shipnameen:"英文船名",
			imo:"IMO",
			mmsi:"MMSI",
			callsign:"船舶呼号11",
			portcode:"船籍港代码22",
			markcode:"海船/内河船标识代码3",
			typecode:"船舶种类代码",
			grosstonnage:"总吨位",
			nettonnage:"净吨位",
			deadweight:"参考载重吨",
			enginepower:"总功率",
			ratedseat:"客位",
			overalllength:"船舶总长",
			mouldedbreadth:"船舶型宽",
			mouldeddepth:"船舶型深",
			linecode:"核定航线代码",
			areacode:"核定航区代码",
			builddate:"建造日期",
			owner:"所有人",
			owneraddress:"所有人地址",
			ownertelephone:"所有人联系电话",
			ownercorporation:"所有人法人代表",
			operator:"经营人",
			operatoraddress:"经营人地址",
			operatortelephone:"经营人联系电话",
			operatorcorporation:"经营人法人代表",
			businesscode:"业务编码",
			reportnumber:"报告编号",
			orgcode:"报告机构代码",
			reportportname:"港口名称",
			reportportcode:"港口编号",
			arrivalorleave:"进出港类型",
			arrivalreportid:"进港报告主键",
			nextportname:"下一港口名称",
			nextportcode:"下一港口编号",
			reporttime:"报告时间",
			applicant:"申办人姓名",
			mobilephone:"手机号码",
			expecttime:"预抵/预离时间",
			ifanchored:"是否中途挂靠",
			foredraft:"前吃水",
			aftdraft:"后吃水",
			berthcode:"停靠泊位代码",
			berthname:"停靠泊位",
			otherquantity:"其他人员",
			realcargo:"实载货量",
			portcargo:"本港卸/装货量",
			realdangercargo:"实载危险品货量",
			portdangercargo:"本港卸/装危险品货量",
			realpassenger:"实载客量",
			portpassenger:"本港下/上客量",
			realvehicle:"实载车量",
			portvehicle:"本港卸/装车量",
			realbarge:"驳船数量",
			portbarge:"本港解/加载驳船数量",
			realcontainerqay:"实载集装箱运量",
			portcontainerqay:"本港卸/装集装箱运量",
			longitude:"经度",
			latitude:"纬度",
			ifrevoke:"是否已撤销",
			datasource:"数据来源",
			syscreated:"创建时间",
			syscreatedby:"创建人",
			sysorg:"创建机构代码",
			sysdept:"创建部门代码",
			syslastupd:"最后修改时间",
			syslastupdby:"最后修改人",
			voyagereport:"航次日报",
			frequency:"航次数",
			navigationsection:"航行区段",
			ifaudit:"是否已审核",
			audittime:"审核时间",
			auditer:"审核人",
			import_time:"自动生成",																	
		  },
		  {
			reportid:"报告主键",
			regshipid:"已注册船舶主键",
			shipidnumber:"船舶识别号",
			regno:"船舶登记号",
			initregno:"初次登记号",
			checkno:"船检登记号",
			shipname:"中文船名",
			shipnameen:"英文船名",
			imo:"IMO",
			mmsi:"MMSI",
			callsign:"船舶呼号",
			portcode:"船籍港代码",
			markcode:"海船/内河船标识代码",
			typecode:"船舶种类代码",
			grosstonnage:"总吨位",
			nettonnage:"净吨位",
			deadweight:"参考载重吨",
			enginepower:"总功率",
			ratedseat:"客位",
			overalllength:"船舶总长",
			mouldedbreadth:"船舶型宽",
			mouldeddepth:"船舶型深",
			linecode:"核定航线代码",
			areacode:"核定航区代码",
			builddate:"建造日期",
			owner:"所有人",
			owneraddress:"所有人地址",
			ownertelephone:"所有人联系电话",
			ownercorporation:"所有人法人代表",
			operator:"经营人",
			operatoraddress:"经营人地址",
			operatortelephone:"经营人联系电话",
			operatorcorporation:"经营人法人代表",
			businesscode:"业务编码",
			reportnumber:"报告编号",
			orgcode:"报告机构代码",
			reportportname:"港口名称",
			reportportcode:"港口编号",
			arrivalorleave:"进出港类型",
			arrivalreportid:"进港报告主键",
			nextportname:"下一港口名称",
			nextportcode:"下一港口编号",
			reporttime:"报告时间",
			applicant:"申办人姓名",
			mobilephone:"手机号码",
			expecttime:"预抵/预离时间",
			ifanchored:"是否中途挂靠",
			foredraft:"前吃水",
			aftdraft:"后吃水",
			berthcode:"停靠泊位代码",
			berthname:"停靠泊位",
			otherquantity:"其他人员",
			realcargo:"实载货量",
			portcargo:"本港卸/装货量",
			realdangercargo:"实载危险品货量",
			portdangercargo:"本港卸/装危险品货量",
			realpassenger:"实载客量",
			portpassenger:"本港下/上客量",
			realvehicle:"实载车量",
			portvehicle:"本港卸/装车量",
			realbarge:"驳船数量",
			portbarge:"本港解/加载驳船数量",
			realcontainerqay:"实载集装箱运量",
			portcontainerqay:"本港卸/装集装箱运量",
			longitude:"经度",
			latitude:"纬度",
			ifrevoke:"是否已撤销",
			datasource:"数据来源",
			syscreated:"创建时间",
			syscreatedby:"创建人",
			sysorg:"创建机构代码",
			sysdept:"创建部门代码",
			syslastupd:"最后修改时间",
			syslastupdby:"最后修改人",
			voyagereport:"航次日报",
			frequency:"航次数",
			navigationsection:"航行区段",
			ifaudit:"是否已审核",
			audittime:"审核时间",
			auditer:"审核人",
			import_time:"自动生成",
		  }
	  ],
	  shipId:''
    }
  },
  onLoad(options){
	  this.shipId=options.shipId;
	  this.getReportListByshipId(options.shipId);
  },
  methods: {
	  //获取进出港列表详情
	  getReportListByshipId(shipId){
		  const that = this;
		  //组装参数
		  let params = {'parentId': ''};
		  //请求后台数据
		  that.api.requestNoLoading('/sea/s/sr/c?ship_id='+shipId+'&begin_time=&end_time=',{},'GET')
		  .then(res => {
		  	console.log('>>进出港报告'+JSON.stringify(res));
		  	that.portList = res.result;//变量名称参照更新后的文档
		  	// if(res.code!=200){
		  	// 	uni.showToast({
		  	// 		title: res.msg,
		  	// 		icon:'none'
		  	// 	});
		  	// 	return;
		  	// }
		  	// that.baseInfo = res.result;//变量名称参照更新后的文档
		  });	
	  }
  }
}
</script>

<style lang="scss">
@import '@/pages/crew/info';
.postReport-box{ padding-top: 120rpx;}
.postReport-list{ border-bottom: 10rpx solid rgba(240,239,244,1); padding: 38rpx 40rpx;
	.postReport-header{border-bottom: 1rpx solid rgba(229,229,229,1); display: flex; padding-bottom: 26rpx; margin-bottom: 24rpx;
		.icon{ width: 48rpx; height:48rpx; border-radius:8px;font-size:24rpx; text-align: center; line-height: 49rpx; margin-right: 20rpx;}
		.info{ display: flex; align-items: center; font-size: 36rpx;
			.sep{ border:1rpx dashed #000; width: 74rpx; height:27rpx; line-height:27rpx; text-align: center; margin: 0 10rpx;
				>image{ width: 72rpx; height:25rpx;}
			}
		}
	}
	.postReport-main{ font-size: 28rpx;
		.title{ display: flex; justify-content: space-between; margin-bottom: 10rpx;
			.status{ font-size: 24rpx;}
		}
		.info{ opacity: .6;}
	}
	&.postReport-goin{
		.postReport-header{
			.icon{ background-color:rgba(19,195,127,.1);color:rgba(19,195,127,1);}
		}
		.postReport-main{ 
			.title{ 
				.status{ color: rgba(212,51,51,1);}
			}
		}
	}
	&.postReport-out{
		.postReport-header{
			.icon{ background-color:rgba(229,78,71,.1);color:rgba(229,78,71,1);}
		}
		.postReport-main{ 
			.title{ 
				.status{ color: rgba(48,173,181,1);}
			}
		}
	}
}
</style>
