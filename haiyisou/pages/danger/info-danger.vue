<template>
	<view class="page-danger-info">
		<view class="danger-info-header">
			<view class="title">{{wxInfoMaintainEntity.goodsNameCn}}</view>
			<text>{{wxInfoMaintainEntity.goodsDes}}</text>
		</view>
		<luBarTabNav :tabList="tabList" :barFixed="barFixed" :iconShow="false" :transitionShow="transitionShow" :barHeight="barHeight" :barTop="barTop" :barId="barId" ref="barTabNav">
		    <view class="danger-info-list" id="inToView00">
		    	<view class="danger-title">基本信息</view>
		    	<view class="danger-info">
		    		<view class="info"><text class="title">货物名称（中文）：</text><text class="txt">{{wxInfoMaintainEntity.goodsNameCn}}</text></view>
		    		<view class="info"><text class="title">货物名称（英文）：</text><text class="txt">{{wxInfoMaintainEntity.goodsNameEn}}</text></view>
		    		<view class="info"><text class="title">其他名称（中文）：</text><text class="txt">{{wxInfoMaintainEntity.otherNameCn}}</text></view>
		    		<view class="info"><text class="title">其他名称（英文）：</text><text class="txt">{{wxInfoMaintainEntity.otherNameEn}}</text></view>
		    		<view class="info"><text class="title">CAS No：</text><text class="txt">{{wxInfoMaintainEntity.casNo}}</text></view>
		    		<view class="info"><text class="title">EC No：</text><text class="txt">{{wxInfoMaintainEntity.ecNo}}</text></view>
		    		<view class="info"><text class="title">分子式：</text><text class="txt">{{wxInfoMaintainEntity.molecularFormula}}</text></view>
		    		<view class="info"><text class="title">分子量：</text><text class="txt">{{wxInfoMaintainEntity.molecularWeight}}</text></view>
		    	</view>
		    </view>
		    <view class="danger-info-list" id="inToView01">
		    	<view class="danger-title">成分识别</view>
		    	<view class="danger-info">
		    		<view class="info">
		    			<text>成分</text>
		    			<text>CAS_NO</text>
		    			<text>百分比</text>
		    		</view>
					<view v-for="(item,index) in wxConstituentIdentifEntity" :key="index">
		    		<view class="info" >
		    			<text>{{item.component}}</text>
		    			<text>{{item.percentage}}</text>
		    			<text>{{item.casNo}}</text>
		    		</view>
					</view>
		    	</view>
		    </view>
		    <view class="danger-info-list" id="inToView02" >
		    	<view class="danger-title">物化特性和化学特性</view>
		    	<view class="danger-info">
		    		<view class="info"><text class="title">物理形态：</text><text class="txt">{{wxInfoMaintainEntity.physicalForm}}</text></view>
		    		<view class="info"><text class="title">熔点：</text><text class="txt">{{wxInfoMaintainEntity.meltingPoint}}</text></view>
		    		<view class="info"><text class="title">沸点：</text><text class="txt">{{wxInfoMaintainEntity.boilingPoint}}</text></view>
		    		<view class="info"><text class="title">20℃时的密度：</text><text class="txt">{{wxInfoMaintainEntity.density}}</text></view>
		    		<view class="info"><text class="title">水中溶解度：</text><text class="txt">{{wxInfoMaintainEntity.solubility}}</text></view>
		    		<view class="info"><text class="title">PH值：</text><text class="txt">{{wxInfoMaintainEntity.phValue}}</text></view>
		    		<view class="info"><text class="title">PH值(1%水溶液)：</text><text class="txt">{{wxInfoMaintainEntity.aqueousSolutionPh}}</text></view>
		    		<view class="info"><text class="title">20℃时的蒸汽压：</text><text class="txt">{{wxInfoMaintainEntity.vaporPressure}}</text></view>
		    		<view class="info"><text class="title">挥发性成分：</text> <text class="txt">{{wxInfoMaintainEntity.volatileConstituents}}</text></view>
		    		<view class="info"><text class="title">挥发性：</text> <text class="txt">{{wxInfoMaintainEntity.volatility}}</text></view>
		    		<view class="info"><text class="title">蒸汽密度：</text> <text class="txt">{{wxInfoMaintainEntity.steamDensity}}</text></view>
		    		<view class="info"><text class="title">闭杯闪点：</text> <text class="txt">{{wxInfoMaintainEntity.closedcupFlashpoint}}</text></view>
		    		<view class="info"><text class="title">爆炸极限上限：</text> <text class="txt">{{wxInfoMaintainEntity.explosionLimitUpper}}</text></view>
		    		<view class="info"><text class="title">爆炸极限下限：</text> <text class="txt">{{wxInfoMaintainEntity.explosionLimitLower}}</text></view>
		    		<view class="info"><text class="title">自燃温度：</text> <text class="txt">{{wxInfoMaintainEntity.autoIgnitionTemp}}</text></view>
		    		<view class="info"><text class="title">分解温度：</text><text class="txt">{{wxInfoMaintainEntity.tonset}}</text></view>
		    		<view class="info"><text class="title">20℃时的粘度：</text> <text class="txt">{{wxInfoMaintainEntity.viscosity}}</text></view>
		    	</view>
		    </view>
		    <view class="danger-info-list" id="inToView03" >
		    	<view class="danger-title">反应性与稳定性</view>
		    	<view class="danger-info">
		    		<view class="info"><text class="title">化学稳定性：</text> <text class="txt">{{wxInfoMaintainEntity.chemicalStability}}</text></view>
		    		<view class="info"><text class="title">禁配物：</text> <text class="txt">{{wxInfoMaintainEntity.prohibitedSubstance}}</text></view>
		    		<view class="info"><text class="title">避免接触条件：</text> <text class="txt">{{wxInfoMaintainEntity.avoidContactCondi}}</text></view>
		    		<view class="info"><text class="title">聚合危险：</text> <text class="txt">{{wxInfoMaintainEntity.polymerizationHazard}}</text></view>
		    		<view class="info"><text class="title">危险的分解产物：</text> <text class="txt">{{wxInfoMaintainEntity.dangerDecomProducts}}</text></view>
		    	</view>
		    </view>
		    <view class="danger-info-list" id="inToView04" >
		    	<view class="danger-title">船舶运载条件</view>
		    	<view class="danger-info">
		    		<view class="info-title" :class="[brandFold ? 'cur' : '']" @click="toggleMore()" >国际海运危险货物规则(IMDG-CODE) </view>
		    		<view class="info-main" v-if="brandFold">
		    			<view class="info"><text class="title">货物名称（中文）：</text><text class="txt">1,2,3,6-四氢化苯甲醛</text></view>
		    			<view class="info"><text class="title">货物名称（英文）：</text><text class="txt">1,2,3,6-tetrahy</text></view>
		    			<view class="info"><text class="title">其他名称（中文）：</text><text class="txt">----</text></view>
		    			<view class="info"><text class="title">其他名称（英文）：</text><text class="txt">----</text></view>
		    		</view>
		    	</view>
		    </view>
			<view class="danger-info-list" id="inToView05" >
				<view class="danger-title">毒性和腐蚀性</view>
				<view class="danger-info">
					<!-- <view class="info-title" :class="[brandFold ? 'cur' : '']" @click="toggleMore()" >国际海运危险货物规则(IMDG-CODE) </view> -->
					<view class="info-main" v-if="brandFold">
						<view class="info"><text class="title">大鼠经口急性毒性：</text><text class="txt">{{wxInfoMaintainEntity.acuteToxOralRats}}</text></view>
						<view class="info"><text class="title">兔经皮急性毒性：</text><text class="txt">{{wxInfoMaintainEntity.acuteToxSkinRabbit}}</text></view>
						<view class="info"><text class="title">大鼠吸入急性毒性：</text><text class="txt">{{wxInfoMaintainEntity.acuteToxInhaledRats}}</text></view>
						<view class="info"><text class="title">皮肤腐蚀/刺激性：</text><text class="txt">{{wxInfoMaintainEntity.skinCorrosionThrill}}</text></view>
						<view class="info"><text class="title">严重眼损伤/刺激：</text><text class="txt">{{wxInfoMaintainEntity.seriousEysInjureIrritation}}</text></view>
						<view class="info"><text class="title">呼吸或皮肤敏化作用：</text><text class="txt">{{wxInfoMaintainEntity.breathOrSkinSensitization}}</text></view>
						<view class="info"><text class="title">生殖细胞致突变性：</text><text class="txt">{{wxInfoMaintainEntity.germCellMutagenicity}}</text></view>
						<view class="info"><text class="title">致癌性：</text><text class="txt">{{wxInfoMaintainEntity.carcinogenicity}}</text></view>
						<view class="info"><text class="title">生殖毒性：</text><text class="txt">{{wxInfoMaintainEntity.reproductiveToxicity}}</text></view>
					</view>
				</view>
			</view>
			<view class="danger-info-list" id="inToView10" >
				<view class="danger-title">水环境危害性</view>
				<view class="danger-info">
					<!-- <view class="info-title" :class="[brandFold ? 'cur' : '']" @click="toggleMore()" >国际海运危险货物规则(IMDG-CODE) </view> -->
					<view class="info-main" v-if="brandFold">
						<view class="info"><text class="title">鱼类96H急毒LC50：</text><text class="txt">{{wxInfoMaintainEntity.acuteFish96hLc50}}</text></view>
						<view class="info"><text class="title">甲壳类48H急毒NOEC：</text><text class="txt">{{wxInfoMaintainEntity.acuteToxCrustacens48h}}</text></view>
						<view class="info"><text class="title">藻类72/96H急毒ErC50：</text><text class="txt">{{wxInfoMaintainEntity.acuteToxAlga}}</text></view>
						<view class="info"><text class="title">鱼类慢毒NOEC：</text><text class="txt">{{wxInfoMaintainEntity.slowToxFishNoec}}</text></view>
						<view class="info"><text class="title">甲壳类慢毒NOEC：</text><text class="txt">{{wxInfoMaintainEntity.slowToxCrustacensNoec}}</text></view>
						<view class="info"><text class="title">藻类慢毒NOEC：</text><text class="txt">{{wxInfoMaintainEntity.slowToxAlgaNoec}}</text></view>
						<view class="info"><text class="title">生物降解(BOD5/COD)：</text><text class="txt">{{wxInfoMaintainEntity.biodegradation}}</text></view>
						<view class="info"><text class="title">生物积聚(BCF)：</text><text class="txt">{{wxInfoMaintainEntity.bioaccumulationBcf}}</text></view>
						<view class="info"><text class="title">生物积聚(辛醇/水分配系数)：</text><text class="txt">{{wxInfoMaintainEntity.bioaccumulationOctanol}}</text></view>
						<view class="info"><text class="title">EHS_NO：</text><text class="txt">{{wxInfoMaintainEntity.ehsNo}}</text></view>
						<view class="info"><text class="title"> 事故应急处理表号：</text><text class="txt">{{wxInfoMaintainEntity.accidentEmergTabNo}}</text></view>
						<view class="info"><text class="title">医疗急救指南：</text><text class="txt">{{wxInfoMaintainEntity.mfag}}</text></view>
						<view class="info"><text class="title">其他有害效应：</text><text class="txt">{{wxInfoMaintainEntity.otherHarmEffects}}</text></view>
					</view>
				</view>
			</view>
			<view class="danger-info-list" id="inToView06" >
				<view class="danger-title">GHS分类</view>
				<view class="danger-info">
					<view class="info-title" :class="[brandFold ? 'cur' : '']" @click="toggleMore()" >GHS危险性类别 </view>
					<view class="info-main" v-if="brandFold">
						<view class="danger-info">
							<view v-for="(item,index) in wxGhsDangerTypeList" :key="index">
							<view class="info" >
								<text>{{item.type}}</text>
								<text>{{item.composition}}</text>
							</view>
							</view>
						</view>
					</view>
				</view>
				<view class="danger-info">
					<view class="info-title" :class="[brandFold ? 'cur' : '']" @click="toggleMore()" >GHS标签 </view>
					<view class="info-main" v-if="brandFold">
						<view class="danger-info">
							<view v-for="(item,index) in wxGhsTabList" :key="index">
							<view class="info" >
								<text>{{item.tabName}}</text>
								<text>{{item.tabPath}}</text>
							</view>
							</view>
						</view>
					</view>
				</view>
				<view class="danger-info">
					<view class="info-title" :class="[brandFold ? 'cur' : '']" @click="toggleMore()" >危险代码和说明 </view>
					<view class="info-main" v-if="brandFold">
					<view class="danger-info">
						<view class="info">
							<text>H码</text>
							<text>说明</text>
						</view>
						<view v-for="(item,index) in wxDangerCodeInstrucList" :key="index">
						<view class="info" >
							<text>{{item.hcode}}</text>
							<text>{{item.instructions}}</text>
						</view>
						</view>
					</view>
					</view>
				</view>
				<view class="danger-info-list-01">
					<view class="info-title" :class="[brandFold ? 'cur' : '']" @click="toggleMore()" >防范代码和说明 </view>
					<view class="info-main" v-if="brandFold">
						<view class="danger-info">
							<view class="info">
								<text>类别</text>
								<text>P码:说明</text>
							</view>
							<view v-for="(item,index) in wxPreventCodeInstrucList" :key="index">
							<view class="info" >
								<text>{{item.type}}</text>
								<text>{{item.pcode}}</text>
							</view>
							</view>
						</view>
					</view>
				</view>
				
			</view>
			<view class="danger-info-list" id="inToView07" >
				<view class="danger-title">事故应急处置</view>
				<view class="danger-info">
					<view class="info-title" :class="[brandFold ? 'cur' : '']" @click="toggleMore()" >国际海运危险货物规则(IMDG-CODE) </view>
					<view class="info-main" v-if="brandFold">
						<view class="info"><text class="title">货物名称（中文）：</text>1,2,3,6-四氢化苯甲醛</view>
						<view class="info"><text class="title">货物名称（英文）：</text>1,2,3,6-tetrahy</view>
						<view class="info"><text class="title">其他名称（中文）：</text>----</view>
						<view class="info"><text class="title">其他名称（英文）：</text>----</view>
					</view>
				</view>
			</view>
			<view class="danger-info-list" id="inToView08" >
				<view class="danger-title">医疗急救指南</view>
				<view class="danger-info">
					<view class="info-title" :class="[brandFold ? 'cur' : '']" @click="toggleMore()" >国际海运危险货物规则(IMDG-CODE) </view>
					<view class="info-main" v-if="brandFold">
						<view class="info"><text class="title">货物名称（中文）：</text>1,2,3,6-四氢化苯甲醛</view>
						<view class="info"><text class="title">货物名称（英文）：</text>1,2,3,6-tetrahy</view>
						<view class="info"><text class="title">其他名称（中文）：</text>----</view>
						<view class="info"><text class="title">其他名称（英文）：</text>----</view>
					</view>
				</view>
			</view>
			<view class="danger-info-list" id="inToView09" >
				<view class="danger-title">相关名录比对</view>
				<view class="danger-info">
					<view class="info-title" :class="[brandFold ? 'cur' : '']" @click="toggleMore()" >国际海运危险货物规则(IMDG-CODE) </view>
					<view class="info-main" v-if="brandFold">
						<view class="info"><text class="title">货物名称（中文）：</text>1,2,3,6-四氢化苯甲醛</view>
						<view class="info"><text class="title">货物名称（英文）：</text>1,2,3,6-tetrahy</view>
						<view class="info"><text class="title">其他名称（中文）：</text>----</view>
						<view class="info"><text class="title">其他名称（英文）：</text>----</view>
					</view>
				</view>
			</view>
			
		</luBarTabNav>
	</view>
</template>

<script>
import luBarTabNav from "@/components/lu-bar-tab-nav/lu-bar-tab-nav";
export default {
  components:{ luBarTabNav },
	data() {
		return {
			brandFold: true, //判断brandFold是否展示
			transitionShow:'',
      barFixed: true,
      barHeight: "44",
      barTop: 0,
      iconShow: true,
      barId: "0",
      tabList: [{
          text: "基本信息",
          navTarget: "#inToView00"
      }, {
          text: "成分识别",
          navTarget: "#inToView01"
      }, {
          text: "物化特性和化学特性",
          navTarget: "#inToView02"
      }, {
          text: "反应性与稳定性",
          navTarget: "#inToView03"
      }, {
          text: "船舶运载条件",
          navTarget: "#inToView04"
      },{
          text: "毒性和腐蚀性",
          navTarget: "#inToView05"
      },{
          text: "水环境危害性",
          navTarget: "#inToView10"
      },{
          text: "GHS分类",
          navTarget: "#inToView06"
      },{
          text: "事故应急处置",
          navTarget: "#inToView07"
      },{
          text: "医疗急救指南",
          navTarget: "#inToView08"
      },{
          text: "相关名录比对",
          navTarget: "#inToView09"
      }],
	  wxInfoMaintainEntity:{},//基本信息
	  wxShipCarriageConditionsEntity:{},//船载运输条件
	  wxConstituentIdentifEntity:[],//成分识别表
	  wxDangerCodeInstrucList:[],//危险代码和说明
	  wxGhsDangerTypeList:[],//危险类别
	  wxPreventCodeInstrucList:[],//防范代码和说明
	  wxGhsTabList:[],//ghs标签
	  wxOtherHarmfulEffectsList:[],//其他有害效应
	  ghsTypeDTO:[]
	  };
	},
	onPageScroll: function(e) {
	    this.$refs.barTabNav._selectedTab(e.scrollTop);
	},
  mounted: function () {
   
  },
  onLoad(options){
	  this.goodsCode=options.goodsCode;
	  this.getWxHwxx(options.goodsCode);
  },
	methods: {
		toggleMore() {
		  this.brandFold = !this.brandFold;
		},
		getWxHwxx(goodsCode){
			//请求后台数据
			this.api.requestNoLoading('/dg/info/getinfodetails?goodsCode=16008',{},'GET')
			.then(res => {
				console.log('>>'+JSON.stringify(res));
				if(res.code!=200){
					uni.showToast({
						title: res.message,
						icon:'none'
					});
					return;
				}
				let result=res.result[0];
				this.wxInfoMaintainEntity = result.wxInfoMaintainEntity;
				this.wxShipCarriageConditionsEntity = result.wxShipCarriageConditionsEntity;
				this.wxConstituentIdentifEntity = result.wxConstituentIdentifEntity;
				this.wxDangerCodeInstrucList = result.ghsTypeDTO.wxDangerCodeInstrucList;
				this.wxGhsDangerTypeList = result.ghsTypeDTO.wxGhsDangerTypeList;
				this.wxPreventCodeInstrucList = result.ghsTypeDTO.wxPreventCodeInstrucList;
				this.wxGhsTabList = result.ghsTypeDTO.wxGhsTabList;
				this.ghsTypeDTO=result.ghsTypeDTO;
				this.wxOtherHarmfulEffectsList = result.wxOtherHarmfulEffectsList;
				
			});	
		}
	}
}
</script>

<style lang="scss">

.danger-info-header{padding: 30rpx 40rpx; position: sticky; width: 100%; background-color: #fff; top:80rpx; box-sizing: border-box; z-index: 10;
	.title{ font-size:36rpx; line-height: 48rpx; margin-bottom: 12rpx; font-weight: 400;
		&::before{ content:'危'; display: inline-block; color:#e23232; border-radius:100%; text-align: center; background-color: #fdeeee; font-size:30rpx; margin-right: 20rpx; width: 48rpx; height:48rpx; font-weight: normal;}
	}
	>text{ font-size:24rpx; color:#999; display:block; opacity: .6;}
}
.danger-info-list{ padding: 0 40rpx; font-size:32rpx; 
	
	.danger-title{ font-size:40rpx; font-weight: bold; margin: 60rpx 0;}
	.danger-info{ 
		.info{ display: flex; justify-content: space-between; padding-bottom: 36rpx; margin-bottom: 36rpx; border-bottom:1rpx solid #e5e5e5; font-size: 32rpx;
			.title{  opacity: .6;}
			.txt{ max-width: 380rpx; word-wrap : break-word }
		}
		.info-title{ @extend .info; position: relative; padding-left: 29rpx; line-height: 1; font-weight: 600; z-index: 1;
			&::before{ content:''; display: block; position: absolute; left:0; top:2rpx; width: 0; height: 0; border-width: 15rpx 10rpx 10rpx 9rpx; border-style: solid; border-color:#3882f9 transparent transparent #3882f9;}
			&::after{ content:''; display: block; width: 21rpx; height: 21rpx; border-color: #bbb; margin-right: 5rpx; border-style: solid; border-width: 0 1rpx 1rpx 0; transform: rotate(45deg); position: relative;}
			&.cur{
				&::after{ transform: rotate(225deg); top: 15rpx;}
			}
		}
	}
}
.danger-info-list-01{@extend .danger-info;
	.danger-info{
		.info{ 
			>text:last-child{ max-width: 400rpx; }
		}
	}
}
@media screen and (max-width: 320px) {
.danger-info-header{ top:105rpx;}
}
/* #ifdef  MP-WEIXIN */
.danger-info-header{ top:0rpx; }
/* #endif */
</style>
