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
		    		<view class="info"><text class="title">货物名称（中文）：</text>{{wxInfoMaintainEntity.goodsNameCn}}</view>
		    		<view class="info"><text class="title">货物名称（英文）：</text>{{wxInfoMaintainEntity.goodsNameEn}}</view>
		    		<view class="info"><text class="title">其他名称（中文）：</text>{{wxInfoMaintainEntity.otherNameCn}}</view>
		    		<view class="info"><text class="title">其他名称（英文）：</text>{{wxInfoMaintainEntity.otherNameEn}}</view>
		    		<view class="info"><text class="title">CAS No：</text>{{wxInfoMaintainEntity.casNo}}</view>
		    		<view class="info"><text class="title">EC No：</text>{{wxInfoMaintainEntity.ecNo}}</view>
		    		<view class="info"><text class="title">分子式：</text>{{wxInfoMaintainEntity.molecularFormula}}</view>
		    		<view class="info"><text class="title">分子量：</text> {{wxInfoMaintainEntity.molecularWeight}}</view>
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
		    		<view class="info"><text class="title">物理形态：</text>{{wxInfoMaintainEntity.physicalForm}}</view>
		    		<view class="info"><text class="title">熔点：</text>{{wxInfoMaintainEntity.meltingPoint}}</view>
		    		<view class="info"><text class="title">沸点：</text>{{wxInfoMaintainEntity.boilingPoint}}</view>
		    		<view class="info"><text class="title">20℃时的密度：</text>{{wxInfoMaintainEntity.density}}</view>
		    		<view class="info"><text class="title">水中溶解度：</text>{{wxInfoMaintainEntity.solubility}}</view>
		    		<view class="info"><text class="title">PH值：</text>{{wxInfoMaintainEntity.phValue}}</view>
		    		<view class="info"><text class="title">PH值(1%水溶液)：</text>{{wxInfoMaintainEntity.aqueousSolutionPh}}</view>
		    		<view class="info"><text class="title">20℃时的蒸汽压：</text>{{wxInfoMaintainEntity.vaporPressure}}</view>
		    		<view class="info"><text class="title">挥发性成分：</text> {{wxInfoMaintainEntity.volatileConstituents}}</view>
		    		<view class="info"><text class="title">挥发性：</text> {{wxInfoMaintainEntity.volatility}}</view>
		    		<view class="info"><text class="title">蒸汽密度：</text> {{wxInfoMaintainEntity.steamDensity}}</view>
		    		<view class="info"><text class="title">闭杯闪点：</text> {{wxInfoMaintainEntity.closedcupFlashpoint}}</view>
		    		<view class="info"><text class="title">爆炸极限上限：</text> {{wxInfoMaintainEntity.explosionLimitUpper}}</view>
		    		<view class="info"><text class="title">爆炸极限下限：</text> {{wxInfoMaintainEntity.explosionLimitLower}}</view>
		    		<view class="info"><text class="title">自燃温度：</text> {{wxInfoMaintainEntity.autoIgnitionTemp}}</view>
		    		<view class="info"><text class="title">分解温度：</text>{{wxInfoMaintainEntity.tonset}}</view>
		    		<view class="info"><text class="title">20℃时的粘度：</text> {{wxInfoMaintainEntity.viscosity}}</view>
		    	</view>
		    </view>
		    <view class="danger-info-list" id="inToView03" >
		    	<view class="danger-title">反应性与稳定性</view>
		    	<view class="danger-info">
		    		<view class="info"><text class="title">化学稳定性：</text> {{wxInfoMaintainEntity.chemicalStability}}</view>
		    		<view class="info"><text class="title">禁配物：</text> {{wxInfoMaintainEntity.prohibitedSubstance}}</view>
		    		<view class="info"><text class="title">避免接触条件：</text> {{wxInfoMaintainEntity.avoidContactCondi}}</view>
		    		<view class="info"><text class="title">聚合危险：</text> {{wxInfoMaintainEntity.polymerizationHazard}}</view>
		    		<view class="info"><text class="title">危险的分解产物：</text> {{wxInfoMaintainEntity.dangerDecomProducts}}</view>
		    	</view>
		    </view>
		    <view class="danger-info-list" id="inToView04" >
		    	<view class="danger-title">船舶运载条件</view>
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
			<view class="danger-info-list" id="inToView05" >
				<view class="danger-title">毒性和腐蚀性</view>
				<view class="danger-info">
					<!-- <view class="info-title" :class="[brandFold ? 'cur' : '']" @click="toggleMore()" >国际海运危险货物规则(IMDG-CODE) </view> -->
					<view class="info-main" v-if="brandFold">
						<view class="info"><text class="title">大鼠经口急性毒性：</text>{{wxInfoMaintainEntity.acuteToxOralRats}}</view>
						<view class="info"><text class="title">兔经皮急性毒性：</text>{{wxInfoMaintainEntity.acuteToxSkinRabbit}}</view>
						<view class="info"><text class="title">大鼠吸入急性毒性：</text>{{wxInfoMaintainEntity.acuteToxInhaledRats}}</view>
						<view class="info"><text class="title">皮肤腐蚀/刺激性：</text>{{wxInfoMaintainEntity.skinCorrosionThrill}}</view>
						<view class="info"><text class="title">严重眼损伤/刺激：</text>{{wxInfoMaintainEntity.seriousEysInjureIrritation}}</view>
						<view class="info"><text class="title">呼吸或皮肤敏化作用：</text>{{wxInfoMaintainEntity.breathOrSkinSensitization}}</view>
						<view class="info"><text class="title">生殖细胞致突变性：</text>{{wxInfoMaintainEntity.germCellMutagenicity}}</view>
						<view class="info"><text class="title">致癌性：</text>{{wxInfoMaintainEntity.carcinogenicity}}</view>
						<view class="info"><text class="title">生殖毒性：</text>{{wxInfoMaintainEntity.reproductiveToxicity}}</view>
					</view>
				</view>
			</view>
			<view class="danger-info-list" id="inToView10" >
				<view class="danger-title">水环境危害性</view>
				<view class="danger-info">
					<!-- <view class="info-title" :class="[brandFold ? 'cur' : '']" @click="toggleMore()" >国际海运危险货物规则(IMDG-CODE) </view> -->
					<view class="info-main" v-if="brandFold">
						<view class="info"><text class="title">鱼类96H急毒LC50：</text>{{wxInfoMaintainEntity.acuteFish96hLc50}}</view>
						<view class="info"><text class="title">甲壳类48H急毒NOEC：</text>{{wxInfoMaintainEntity.acuteToxCrustacens48h}}</view>
						<view class="info"><text class="title">藻类72/96H急毒ErC50：</text>{{wxInfoMaintainEntity.acuteToxAlga}}</view>
						<view class="info"><text class="title">鱼类慢毒NOEC：</text>{{wxInfoMaintainEntity.slowToxFishNoec}}</view>
						<view class="info"><text class="title">甲壳类慢毒NOEC：</text>{{wxInfoMaintainEntity.slowToxCrustacensNoec}}</view>
						<view class="info"><text class="title">藻类慢毒NOEC：</text>{{wxInfoMaintainEntity.slowToxAlgaNoec}}</view>
						<view class="info"><text class="title">生物降解(BOD5/COD)：</text>{{wxInfoMaintainEntity.biodegradation}}</view>
						<view class="info"><text class="title">生物积聚(BCF)：</text>{{wxInfoMaintainEntity.bioaccumulationBcf}}</view>
						<view class="info"><text class="title">生物积聚(辛醇/水分配系数)：</text>{{wxInfoMaintainEntity.bioaccumulationOctanol}}</view>
						<view class="info"><text class="title">EHS_NO：</text>{{wxInfoMaintainEntity.ehsNo}}</view>
						<view class="info"><text class="title"> 事故应急处理表号：</text>{{wxInfoMaintainEntity.accidentEmergTabNo}}</view>
						<view class="info"><text class="title">医疗急救指南：</text>{{wxInfoMaintainEntity.mfag}}</view>
						<view class="info"><text class="title">其他有害效应：</text>{{wxInfoMaintainEntity.otherHarmEffects}}</view>
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
				<view class="danger-info">
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
	.title{ font-size:36rpx; line-height: 48rpx; margin-bottom: 12rpx; font-weight: 600;
		&::before{ content:'危'; display: inline-block; color:#e23232; border-radius:100%; text-align: center; background-color: #fdeeee; font-size:30rpx; margin-right: 20rpx; width: 48rpx; height:48rpx; font-weight: normal;}
	}
	>text{ font-size:24rpx; color:#999; display:block;}
}
.danger-info-list{ padding: 0 40rpx; font-size:32rpx; 
	
	.danger-title{ font-size:40rpx; font-weight: bold; margin: 60rpx 0;}
	.danger-info{ 
		.info{ display: flex; justify-content: space-between; padding-bottom: 36rpx; margin-bottom: 36rpx; border-bottom:1rpx solid #e5e5e5;
			.title{ width: 200rpx;}
		}
		.info-title{ @extend .info; position: relative; padding-left: 29rpx; line-height: 1; font-weight: 600;
			&::before{ content:''; display: block; position: absolute; left:0; top:2rpx; width: 0; height: 0; border-width: 15rpx 10rpx 10rpx 9rpx; border-style: solid; border-color:#3882f9 transparent transparent #3882f9;}
			&::after{ content:''; display: block; width: 21rpx; height: 21rpx; border-color: #bbb; margin-right: 5rpx; border-style: solid; border-width: 0 1rpx 1rpx 0; transform: rotate(45deg); position: relative;}
			&.cur{
				&::after{ transform: rotate(225deg); top: 15rpx;}
			}
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
