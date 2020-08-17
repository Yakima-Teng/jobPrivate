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
		    		<view class="info-title" :class="[brandFold1 ? 'cur' : '']" @click="toggleMore1()" >国际海运危险货物规则(IMDG-CODE) </view>
		    		<view class="info-main" v-if="brandFold1">
		    			<view class="info"><text class="title">属性标识：</text><text class="txt">{{wxShipCarriageConditionsEntity.attributeIdentifier}}</text></view>
		    			<view class="info"><text class="title">类型标识：</text><text class="txt">{{wxShipCarriageConditionsEntity.typeIdentifier}}</text></view>
		    			<view class="info"><text class="title">联合国编号：</text><text class="txt">{{wxShipCarriageConditionsEntity.unno}}</text></view>
		    			<view class="info"><text class="title">类型标记：</text>
						<view  v-for="(item,index) in imgUrls">
							<image style="z-index:1;width: 30px;height: 30px;" :src="item" />
						</view>
						</view>
		    			<view class="info"><text class="title">正确运输名称(中文)：</text><text class="txt">{{wxShipCarriageConditionsEntity.correctTransportNameCn}}</text></view>
		    			<view class="info"><text class="title">正确运输名称(英文)：</text><text class="txt">{{wxShipCarriageConditionsEntity.correctTransportNameEn}}</text></view>
		    			<view class="info"><text class="title">正确运输名称补充说明(中文)：</text><text class="txt">{{wxShipCarriageConditionsEntity.correctTransportNameSupply}}</text></view>
		    			<view class="info"><text class="title">类别：</text><text class="txt">{{wxShipCarriageConditionsEntity.category}}</text></view>
		    			<view class="info"><text class="title">副危险：</text><text class="txt">{{wxShipCarriageConditionsEntity.subsidiaryRisks}}</text></view>
		    			<view class="info"><text class="title">包装类：</text><text class="txt">{{wxShipCarriageConditionsEntity.packagingClass}}</text></view>
		    			<view class="info"><text class="title">特殊规定：</text><text class="txt">{{wxShipCarriageConditionsEntity.specialRules}}</text></view>
		    			<view class="info"><text class="title">限量：</text><text class="txt">{{wxShipCarriageConditionsEntity.limitQuantity}}</text></view>
		    			<view class="info"><text class="title">可免除量：</text><text class="txt">{{wxShipCarriageConditionsEntity.exemptionsQuantity}}</text></view>
		    			<view class="info"><text class="title">包装导则：</text><text class="txt">{{wxShipCarriageConditionsEntity.packagingGuidelines}}</text></view>
		    			<view class="info"><text class="title">包装规定：</text><text class="txt">{{wxShipCarriageConditionsEntity.packagingRegulations}}</text></view>
		    			<view class="info"><text class="title">中型散装容器导则：</text><text class="txt">{{wxShipCarriageConditionsEntity.mediumBulkContainGuide}}</text></view>
		    			<view class="info"><text class="title">中型散装容器特殊规定：</text><text class="txt">{{wxShipCarriageConditionsEntity.mediumBulkContainSpeRules}}</text></view>
		    			<view class="info"><text class="title">罐柜导则：</text><text class="txt">{{wxShipCarriageConditionsEntity.tankGuide}}</text></view>
		    			<view class="info"><text class="title">火灾应急措施表：</text><text class="txt" style="color: #007AFF;" @click="queryHz(wxShipCarriageConditionsEntity.tankSpecialFix)">{{wxShipCarriageConditionsEntity.tankSpecialFix}}</text></view>
		    			<view class="info"><text class="title">溢漏应急措施表：</text><text class="txt" style="color: #007AFF;" @click="querylsyj(wxShipCarriageConditionsEntity.fireEmeMeasureNo)">{{wxShipCarriageConditionsEntity.fireEmeMeasureNo}}</text></view>
		    			<view class="info"><text class="title">积载类：</text><text class="txt" style="color: #007AFF;" @click="queryjzl(wxShipCarriageConditionsEntity.stowClass)">{{wxShipCarriageConditionsEntity.stowClass}}</text></view>
		    			<view class="info"><text class="title">积载代码：</text><text class="txt">{{wxShipCarriageConditionsEntity.stowCode}}</text></view>
		    			<view class="info"><text class="title">操作代码：</text><text class="txt">{{wxShipCarriageConditionsEntity.opreateCode}}</text></view>
		    			<view class="info"><text class="title">隔离代码：</text><text class="txt">{{wxShipCarriageConditionsEntity.isolationCode}}</text></view>
		    			<view class="info"><text class="title">特征与注意事项：</text><text class="txt">{{wxShipCarriageConditionsEntity.particularityNote}}</text></view>
		    			<view class="info"><text class="title">自反应物质货物名称(中文)：</text><text class="txt">{{wxShipCarriageConditionsEntity.reactiveSubNameCn}}</text></view>
		    			<view class="info"><text class="title">自反应物质货物名称(英文)：</text><text class="txt">{{wxShipCarriageConditionsEntity.reactiveSubNameEn}}</text></view>
		    			<view class="info"><text class="title">自反应物质浓度(%)：</text><text class="txt">{{wxShipCarriageConditionsEntity.reactiveSubPotency}}</text></view>
		    			<view class="info"><text class="title">自反应物质包装方法：</text><text class="txt">{{wxShipCarriageConditionsEntity.reactiveSubPackWay}}</text></view>
		    			<view class="info"><text class="title">自反应物质控制温度(°C)：</text><text class="txt">{{wxShipCarriageConditionsEntity.reactiveSubCtrlTemp}}</text></view>
		    			<view class="info"><text class="title">自反应物质应急温度(°C)：</text><text class="txt">{{wxShipCarriageConditionsEntity.reactiveSubEmerTemp}}</text></view>
		    			<view class="info"><text class="title">自反应物质备注：</text><text class="txt">{{wxShipCarriageConditionsEntity.reactiveSubRemarks}}</text></view>
		    			<view class="info"><text class="title">主管机关批准：</text><text class="txt">{{wxShipCarriageConditionsEntity.deptApprove}}</text></view>
		    		</view>
		    	</view>
				<view class="danger-info">
					<view class="info-title" :class="[brandFold9 ? 'cur' : '']" @click="toggleMore9()" >国际散装运输化学品船舶设备与构造规则(IBC-CODE) </view>
					<view class="info-main" v-if="brandFold9">
						<view class="info"><text class="title">散装有毒液体物质名称(中文)：</text><text class="txt">{{wxShipCarriageConditionsEntity.shipsCarriedNlsNameCn}}</text></view>
						<view class="info"><text class="title">散装有毒液体物质名称(英文)：</text><text class="txt">{{wxShipCarriageConditionsEntity.shipsCarriedNlsNameEn}}</text></view>
						<view class="info"><text class="title">EHS No：</text><text class="txt">{{wxShipCarriageConditionsEntity.ehsNoCarry}}</text></view>
						<view class="info"><text class="title">CAS No：</text><text class="txt">{{wxShipCarriageConditionsEntity.casNoCarry}}</text></view>
						<view class="info"><text class="title">污染类别：</text><text class="txt">{{wxShipCarriageConditionsEntity.pollutionCategory}}</text></view>
						<view class="info"><text class="title">危险性：</text><text class="txt">{{wxShipCarriageConditionsEntity.danger}}</text></view>
						<view class="info"><text class="title">船舶类型：</text><text class="txt">{{wxShipCarriageConditionsEntity.shipType}}</text></view>
						<view class="info"><text class="title">液货类型：</text><text class="txt">{{wxShipCarriageConditionsEntity.tankType}}</text></view>
						<view class="info"><text class="title">液货舱透气：</text><text class="txt">{{wxShipCarriageConditionsEntity.cargoTankVenting}}</text></view>
						<view class="info"><text class="title">液货舱环境控制：</text><text class="txt">{{wxShipCarriageConditionsEntity.cargoTankEnvCtrl}}</text></view>
						<view class="info"><text class="title">电器设备-温度等级：</text><text class="txt">{{wxShipCarriageConditionsEntity.eaTempRatings}}</text></view>
						<view class="info"><text class="title">电器设备-设备分类：</text><text class="txt">{{wxShipCarriageConditionsEntity.eaEqpClassification}}</text></view>
						<view class="info"><text class="title">电器设备-闪点：</text><text class="txt">{{wxShipCarriageConditionsEntity.eaFlashPoints}}</text></view>
						<view class="info"><text class="title">测量：</text><text class="txt">{{wxShipCarriageConditionsEntity.measure}}</text></view>
						<view class="info"><text class="title">蒸汽探测：</text><text class="txt">{{wxShipCarriageConditionsEntity.vaporDetection}}</text></view>
						<view class="info"><text class="title">防火：</text><text class="txt">{{wxShipCarriageConditionsEntity.firePrevention}}</text></view>
						<view class="info"><text class="title">应急设备：</text><text class="txt">{{wxShipCarriageConditionsEntity.panicEquipment}}</text></view>
						<view class="info"><text class="title">特殊和操作要求：</text><text class="txt">{{wxShipCarriageConditionsEntity.specialOpreationAsk}}</text></view>

					</view>
				</view>
				<view class="danger-info">
					<view class="info-title" :class="[brandFold10 ? 'cur' : '']" @click="toggleMore10()" >国际海运固体散装货物规则(IMSBC-CODE) </view>
					<view class="info-main" v-if="brandFold10">
						<view class="info"><text class="title">散装固体货物名称(中文)：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcGoodsCn}}</text></view>
						<view class="info"><text class="title">散装固体货物名称(英文)：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcGoodsEn}}</text></view>
						<view class="info"><text class="title">UN No：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcUnno}}</text></view>
						<view class="info"><text class="title">描述：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcDesc}}</text></view>
						<view class="info"><text class="title">静止角：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcLoll}}</text></view>
						<view class="info"><text class="title">散货密度(kg/m3)：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcDensity}}</text></view>
						<view class="info"><text class="title">积载因子：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcStowage}}</text></view>
						<view class="info"><text class="title">尺寸：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcSize}}</text></view>
						<view class="info"><text class="title">副危险：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcViceDanger}}</text></view>
						<view class="info"><text class="title">类别：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcClass}}</text></view>
						<view class="info"><text class="title">组别：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcTranches}}</text></view>
						<view class="info"><text class="title">危险性：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcDanger}}</text></view>
						<view class="info"><text class="title">积载与隔离：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcStowSepara}}</text></view>
						<view class="info"><text class="title">货舱清洗程度：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcHoldClean}}</text></view>
						<view class="info"><text class="title">天气注意事项：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcWeathAnnouncement}}</text></view>
						<view class="info"><text class="title">装载：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcLoading}}</text></view>
						<view class="info"><text class="title">注意事项：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcAnnouncement}}</text></view>
						<view class="info"><text class="title">通风：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcVent}}</text></view>
						<view class="info"><text class="title">载运：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcTransport}}</text></view>
						<view class="info"><text class="title">卸货：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcUnloading}}</text></view>
						<view class="info"><text class="title">清扫：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcSweeping}}</text></view>
						<view class="info"><text class="title">应急程序：</text><text class="txt">{{wxShipCarriageConditionsEntity.imsbcProcedure}}</text></view>
					</view>
				</view>
				<view class="danger-info">
					<view class="info-title" :class="[brandFold11 ? 'cur' : '']" @click="toggleMore11()" >国际海运散装液化气规则(IGC-CODE) </view>
					<view class="info-main" v-if="brandFold11">
						<view class="info"><text class="title">散装液化气名称(中文)：</text><text class="txt">{{wxShipCarriageConditionsEntity.lngNameCn}}</text></view>
						<view class="info"><text class="title">散装液化气名称(英文)：</text><text class="txt">{{wxShipCarriageConditionsEntity.lngNameEn}}</text></view>
						<view class="info"><text class="title">要求C形独立液货舱：</text><text class="txt">{{wxShipCarriageConditionsEntity.ctypeCargoTank}}</text></view>
						<view class="info"><text class="title">液货舱蒸气空间的控制：</text><text class="txt">{{wxShipCarriageConditionsEntity.cargoTankControl}}</text></view>
						<view class="info"><text class="title">蒸气探测：</text><text class="txt">{{wxShipCarriageConditionsEntity.steamDetection}}</text></view>
						<view class="info"><text class="title">测量：</text><text class="txt">{{wxShipCarriageConditionsEntity.measurement}}</text></view>
						<view class="info"><text class="title">特殊要求：</text><text class="txt">{{wxShipCarriageConditionsEntity.specialRequest}}</text></view>
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
					<view class="info-title" :class="[brandFold2 ? 'cur' : '']" @click="toggleMore2()" >GHS危险性类别 </view>
					<view class="info-main" v-if="brandFold2">
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
					<view class="info-title" :class="[brandFold3 ? 'cur' : '']" @click="toggleMore3()" >GHS标签 </view>
					<view class="info-main" v-if="brandFold3">
						<view class="danger-info">
							<view v-for="(item,index) in wxGhsTabList" :key="index">
							<view class="info" >
								<text>{{item.tabName}}</text>
								<image style="z-index:1;width: 30px;height: 30px;" :src="getImgUrl(item.tabPath)" />
								<!-- <text>{{item.tabPath}}</text> -->
							</view>
							</view>
						</view>
					</view>
				</view>
				<view class="danger-info">
					<view class="info-title" :class="[brandFold4 ? 'cur' : '']" @click="toggleMore4()" >危险代码和说明 </view>
					<view class="info-main" v-if="brandFold4">
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
					<view class="info-title" :class="[brandFold5 ? 'cur' : '']" @click="toggleMore5()" >防范代码和说明 </view>
					<view class="info-main" v-if="brandFold5">
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
					<view class="info-title" :class="[brandFold12 ? 'cur' : '']" @click="toggleMore12()" >事故应急处置列表 </view>
					<view class="info-main" v-if="brandFold12">
					<view class="danger-info">
						<view class="info">
							<text>事故编号</text>
							<text>事故名称</text>
							<text>操作</text>
						</view>
						<view v-for="(item,index) in yjsgList" :key="index">
						<view class="info" >
							<text>{{item.accidentNo}}</text>
							<text style="width: 350rpx;text-overflow: ellipsis;overflow: hidden;">{{item.accidentName}}</text>
							<text @click="query(item.accidentNo)" style="color: #007AFF;">查看</text>
						</view>
					</view>
					</view>
				
					</view>
				</view>
			</view>
			<view class="danger-info-list" id="inToView08" >
				<view class="danger-title">医疗急救指南</view>
				<view class="danger-info">
					<view class="info-title" :class="[brandFold7 ? 'cur' : '']" @click="toggleMore7()" >医疗急救指南列表 </view>
					<view class="info-main" v-if="brandFold7">
						<view class="danger-info">
							<view class="info">
								<text class="title">指南编号</text>
								<text class="title" style="width: 330rpx;">指南名称</text>
								<text class="title">操作</text>
							</view>
							<view v-for="(item,index) in ylList" :key="index">
							<view class="info" >
								<text>{{item.guideCode}}</text>
								<text style="width: 330rpx;text-overflow: ellipsis;overflow: hidden;">{{item.guideName}}</text>
								<text @click="queryYl(item.guideCode,item.guideName,item.valid)" style="color: #007AFF;">查看</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			</view>
			<view class="danger-info-list" id="inToView09" >
				<view class="danger-title">相关名录比对</view>
				<view class="danger-info">
					<view class="info-title" :class="[brandFold8 ? 'cur' : '']" @click="toggleMore8()" >相关名录比对列表</view>
					<view class="info-main" v-if="brandFold8">
						<view class="info">
							<text class="title" style="width:150rpx;">名录名称</text>
							<text class="title" style="width:150rpx;">是否收录</text>
							<text class="title" style="width:300rpx;">配套相关法律法规</text>
							<text class="title">操作</text>
						</view>
						<view v-for="(item,index) in xgmlList" :key="index">
						<view class="info" >
							<text style="width:150rpx; ellipsis;overflow: hidden;">{{item.name}}</text>
							<text style="text-overflow: ellipsis;overflow: hidden;">{{item.isNo}}</text>
							<text style="width: 300rpx;text-overflow: ellipsis;overflow: hidden;">{{item.content}}</text>
							<text @click="queryml(item.type)" style="color: #007AFF;">查看</text>
						</view>
						</view>
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
			brandFold1: true, //判断brandFold是否展示
			brandFold2: true, //判断brandFold是否展示
			brandFold3: true, //判断brandFold是否展示
			brandFold4: true, //判断brandFold是否展示
			brandFold5: true, //判断brandFold是否展示
			brandFold6: true, //判断brandFold是否展示
			brandFold7: true, //判断brandFold是否展示
			brandFold8: true, //判断brandFold是否展示
			brandFold9: true, //判断brandFold是否展示
			brandFold10: true, //判断brandFold是否展示
			brandFold11: true, //判断brandFold是否展示
			brandFold12: true, //判断brandFold是否展示
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
	  ghsTypeDTO:[],
	  yjsgList:[],
	  ylList:[],
	  xgmlList:[],
	  imgUrls:[]
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
	  this.getSgyjList();
	  this.getmlList();
	  this.getylyjList();
  },
	methods: {
		queryHz(code){
			console.log(code);
			uni.navigateTo({
				url:'./info-hz?code='+code
			})
		},
		querylsyj(code){
			uni.navigateTo({
				url:'./info-hz?code='+code+'&lb=1'
			})
		},
		queryjzl(code){
			uni.navigateTo({
				url:'./info-hz?code='+code+'&lb=2'
			})
		},
		toggleMore() {
		  this.brandFold = !this.brandFold;
		},
		toggleMore1() {
		  this.brandFold1 = !this.brandFold1;
		},
		toggleMore2() {
		  this.brandFold2 = !this.brandFold2;
		},
		toggleMore3() {
		  this.brandFold3 = !this.brandFold3;
		},
		toggleMore4() {
		  this.brandFold4 = !this.brandFold4;
		},
		toggleMore5() {
		  this.brandFold5 = !this.brandFold5;
		},
		toggleMore6() {
		  this.brandFold6 = !this.brandFold6;
		},
		toggleMore7() {
		  this.brandFold7 = !this.brandFold7;
		},
		toggleMore8() {
		  this.brandFold8 = !this.brandFold8;
		},
		toggleMore9() {
		  this.brandFold9 = !this.brandFold9;
		},
		toggleMore10() {
		  this.brandFold10 = !this.brandFold10;
		},
		toggleMore11() {
		  this.brandFold11 = !this.brandFold11;
		},
		toggleMore12() {
		  this.brandFold12 = !this.brandFold12;
		},
		getImgUrl(filename){
			console.log('>>>'+this.api.baseUrlImg+filename);
			return this.api.baseUrlImg+filename
		},
		queryml(type){
			uni.navigateTo({
				url:'./info-ml?type='+type+'&chemicalName='+this.wxInfoMaintainEntity.goodsNameCn+'&casNo='+this.wxInfoMaintainEntity.casNo+'&unno='+this.wxShipCarriageConditionsEntity.unno+'&goodsNameEn='+this.wxShipCarriageConditionsEntity.goodsNameEn
			})
		},
		query(code){
			uni.navigateTo({
				url:'./info-yj?code='+code
			})
		},
		queryYl(guideCode,guideName,valid){
			uni.navigateTo({
				url:'./info-yl?guideCode='+guideCode+'&guideName='+guideName+'&valid='+valid+'&yl=1'
			})
		},
		////获取相对名录
		getmlList(){
			//请求后台数据
			this.api.requestNoLoading('/dg/info/inDict?unno=&goodsNameCn=&goodsNameEn=&casNo=',{},'GET')
			.then(res => {
				 // console.log('>>'+JSON.stringify(res.result));
				if(res.code!=200){
					uni.showToast({
						title: res.message,
						icon:'none'
					});
					return;
				}
				this.xgmlList=res.result;
				
			});	
		},
		//应急处置列表
		getSgyjList(){
			//请求后台数据
			this.api.requestNoLoading('/dg/accEme/getAccEmeList?code=&name=&status=',{},'GET')
			.then(res => {
				 // console.log('yj>>'+JSON.stringify(res));
				if(res.code!=200){
					uni.showToast({
						title: res.message,
						icon:'none'
					});
					return;
				}
				this.yjsgList=res.result;
				
			});	
		},
		//获取相对名录
		getylyjList(){
			//请求后台数据
			this.api.requestNoLoading('/dg/file/aidfirst',{guideCode:'',guideName:'',valid:''},'post')
			.then(res => {
				 // console.log('yl>>'+JSON.stringify(res));
				if(res.code!=200){
					uni.showToast({
						title: res.message,
						icon:'none'
					});
					return;
				}
				this.ylList=res.result;
			});	
		},
		getWxHwxx(goodsCode){
			//请求后台数据
			this.api.request('/dg/info/getinfodetails?goodsCode='+goodsCode,{},'GET')
			.then(res => {
				 // console.log('>>'+JSON.stringify(res));
				if(res.code!=200){
					uni.showToast({
						title: res.message,
						icon:'none'
					});
					return;
				}
				let result=res.result[0];
				// console.log('>>'+JSON.stringify(result));
				this.wxInfoMaintainEntity = result.wxInfoMaintainEntity;
				// console.log('>>'+JSON.stringify(this.wxInfoMaintainEntity));
				this.wxShipCarriageConditionsEntity = result.wxShipCarriageConditionsEntity;
				this.wxConstituentIdentifEntity = result.wxConstituentIdentifEntity;
				this.wxDangerCodeInstrucList = result.ghsTypeDTO.wxDangerCodeInstrucList;
				this.wxGhsDangerTypeList = result.ghsTypeDTO.wxGhsDangerTypeList;
				this.wxPreventCodeInstrucList = result.ghsTypeDTO.wxPreventCodeInstrucList;
				this.wxGhsTabList = result.ghsTypeDTO.wxGhsTabList;
				this.ghsTypeDTO=result.ghsTypeDTO;
				this.wxOtherHarmfulEffectsList = result.wxOtherHarmfulEffectsList;
				let paths=this.wxShipCarriageConditionsEntity.markType;
				console.log(">>>>>>"+paths);
				if(paths!=''&&typeof(paths)!='undefined'){
					 let imgs=paths.split(':');
					 for(var i=0;i<imgs.length;i++){
						 this.imgUrls.push(this.api.baseUrlImg+imgs[i])
					 }
					console.log('图片》'+this.imgUrls);
				} 
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
	>text{ font-size:28rpx; color:#999; display:block; opacity: .6; line-height: 38rpx;}
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

.image {
	/* z-index: -1; */
	width: 30px;
	height: 30px;
	margin-bottom: 0px;
}

@media screen and (max-width: 320px) {
.danger-info-header{ top:105rpx;}
}
/* #ifdef  MP-WEIXIN */
.danger-info-header{ top:0rpx; }
/* #endif */
</style>
