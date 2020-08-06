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
			<view v-if="szyt">
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
					<text class="left"> 货物种类 </text>
					{{baseInfo.liquidGoodsType}}
				</view>
				<view class="info-list" >
					<text class="left"> 货物种类ID </text>
					{{baseInfo.goodsId}}
				</view>
				<view class="info-list" >
					<text class="left"> UNNO </text>
					{{baseInfo.unno}}
				</view>
				<view class="info-list" >
					<text class="left"> 正确运输名称中文 </text>
					{{baseInfo.goodsNameCn}}
				</view>
				<view class="info-list" >
					<text class="left"> 正确运输名称英文	 </text>
					{{baseInfo.goodsNameEn}}
				</view>
				<view class="info-list" >
					<text class="left"> 正确运输名称中文补充说明 </text>
					{{baseInfo.goodsNameCnExtra}}
				</view>
				<view class="info-list" >
					<text class="left"> 正确运输名称英文补充说明 </text>
					{{baseInfo.goodsNameEnExtra}}
				</view>
				<view class="info-list" >
					<text class="left"> 危险类别 </text>
					{{baseInfo.goodsClass}}
				</view>
				<view class="info-list" >
					<text class="left"> 污染类别 </text>
					{{baseInfo.chemicalCategory}}
				</view>
				<view class="info-list" >
					<text class="left"> 液化气性质 </text>
					{{baseInfo.gasCategory}}
				</view>
				<view class="info-list" >
					<text class="left"> 油类性质 </text>
					{{baseInfo.oilCategory}}
				</view>
				<view class="info-list" >
					<text class="left"> 成品油分类	 </text>
					{{baseInfo.oilGroup}}
				</view>
				<view class="info-list" >
					<text class="left"> 持久性标志	 </text>
					{{baseInfo.persistenceFlag}}
				</view>
				<view class="info-list" >
					<text class="left"> 闪点（闭杯）	 </text>
					{{baseInfo.flashPoint}}
				</view>
				<view class="info-list" >
					<text class="left"> 闪点值	 </text>
					{{baseInfo.flashPointValue}}
				</view>
				<view class="info-list" >
					<text class="left"> 自然温度 </text>
					{{baseInfo.combustibleUpperLimit}}
				</view>
				<view class="info-list" >
					<text class="left"> 作业温度 </text>
					{{baseInfo.workTemperature}}
				</view>
				<view class="info-list" >
					<text class="left"> 可燃上限 </text>
					{{baseInfo.combustibleLowerLimit}}
				</view>
				<view class="info-list" >
					<text class="left"> 可燃下限 </text>
					{{baseInfo.combustibleUemperature}}
				</view>
				<view class="info-list" >
					<text class="left"> 沸点 </text>
					{{baseInfo.boillingPoint}}
				</view>
				<view class="info-list" >
					<text class="left"> 液体相对密度 </text>
					{{baseInfo.liquidDensity}}
				</view><view class="info-list" >
					<text class="left"> 蒸汽密度 </text>
					{{baseInfo.steamDensity}}
				</view>
				<view class="info-list" >
					<text class="left"> 蒸汽压力	 </text>
					{{baseInfo.steamPressure}}
				</view>
				<view class="info-list" >
					<text class="left"> 水中溶解度 </text>
					{{baseInfo.solubility}}
				</view>
				<view class="info-list" >
					<text class="left">粘度</text>
					{{baseInfo.viscosity}}
				</view>
				<view class="info-list" >
					<text class="left">溶点</text>
					{{baseInfo.meltingPoint}}
				</view>
				<view class="info-list" >
					<text class="left">酸度</text>
					{{baseInfo.acidiry}}
				</view>
				<view class="info-list" >
					<text class="left">TLV（PPM）</text>
					{{baseInfo.tlv}}
				</view>
				<view class="info-list" >
					<text class="left">LC50吸入</text>
					{{baseInfo.lc50Inhale}}
				</view>
				<view class="info-list" >
					<text class="left">LD50口服</text>
					{{baseInfo.ld50Oral}}
				</view>
				<view class="info-list" >
					<text class="left">LD50皮触</text>
					{{baseInfo.ld50Skin}}
				</view>
				<view class="info-list" >
					<text class="left">导电率(ps/m)</text>
					{{baseInfo.conductivity}}
				</view>
				<view class="info-list" >
					<text class="left">液化湿度与压力气</text>
					{{baseInfo.ltp}}
				</view>
				<view class="info-list" >
					<text class="left">货物反应性</text>
					{{baseInfo.goodsReactivity}}
				</view>
				<view class="info-list" >
					<text class="left">人员防护</text>
					{{baseInfo.personnelProtection}}
				</view>
				<view class="info-list" >
					<text class="left">应急措施</text>
					{{baseInfo.emergencyMeasure}}
				</view>
				<view class="info-list" >
					<text class="left">是否强制预洗</text>
					{{baseInfo.forcePrewashFlag}}
				</view>
				<view class="info-list" >
					<text class="left">强制预习说明</text>
					{{baseInfo.forcePrewashDesc}}
				</view>
				<view class="info-list" >
					<text class="left">总重量（数量）</text>
					{{baseInfo.totalWeight}}
				</view>
				<view class="info-list" >
					<text class="left">是否过驳</text>
					{{baseInfo.lighteringFlag}}
				</view>
				<view class="info-list" >
					<text class="left">货物流向</text>
					{{baseInfo.goodsDirection}}
				</view>
				<view class="info-list" >
					<text class="left">起运港</text>
					{{baseInfo.departurePort}}
				</view>
				<view class="info-list" >
					<text class="left">装货港</text>
					{{baseInfo.loadingPort}}
				</view>
				<view class="info-list" >
					<text class="left">卸货港</text>
					{{baseInfo.dischargePort}}
				</view>
				<view class="info-list" >
					<text class="left">目的港</text>
					{{baseInfo.destinationPort}}
				</view>
				<view class="info-list" >
					<text class="left">发货人</text>
					{{baseInfo.consignor}}
				</view>
				<view class="info-list" >
					<text class="left">托运人</text>
					{{baseInfo.shipper}}
				</view>
				<view class="info-list" >
					<text class="left">承运人</text>
					{{baseInfo.carrier}}
				</view>
				<view class="info-list" >
					<text class="left">收货人</text>
					{{baseInfo.consignee}}
				</view>
				<view class="info-list" >
					<text class="left">货主</text>
					{{baseInfo.owner}}
				</view>
				<view class="info-list" >
					<text class="left">提货单号</text>
					{{baseInfo.extractNo}}
				</view>
				<view class="info-list" >
					<text class="left">联系人姓名</text>
					{{baseInfo.contactPerson}}
				</view>
				<view class="info-list" >
					<text class="left">联系方式</text>
					{{baseInfo.contactPhone}}
				</view>
				<view class="info-list" >
					<text class="left">申报员编号</text>
					{{baseInfo.declarerId}}
				</view>
				<view class="info-list" >
					<text class="left">申报员姓名</text>
					{{baseInfo.declarerName}}
				</view>
				<view class="info-list" >
					<text class="left">申报员证书编号</text>
					{{baseInfo.declarerCertNo}}
				</view>
				<view class="info-list" >
					<text class="left">申报单位编号</text>
					{{baseInfo.companyId}}
				</view>
				<view class="info-list" >
					<text class="left">申报单位名称</text>
					{{baseInfo.companyName}}
				</view>
				<view class="info-list" >
					<text class="left">申报时间</text>
					{{baseInfo.declareTime}}
				</view>
				<view class="info-list" >
					<text class="left">申报状态</text>
					{{baseInfo.declareStatus}}
				</view>
				<view class="info-list" >
					<text class="left">申报方式</text>
					{{baseInfo.declareWay}}
				</view>
				<view class="info-list" >
					<text class="left">申报账号</text>
					{{baseInfo.declareAccount}}
				</view>
				<view class="info-list" >
					<text class="left">备注</text>
					{{baseInfo.remark}}
				</view>
			</view>
			<view v-if="bzhw">
				<view class="info-list" >
				        <text class="left">航次</text>
				        {{baseInfo.voyageNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">进出港</text>
				        {{baseInfo.portFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">内外贸</text>
				        {{baseInfo.tradeFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">靠泊港口</text>
				        {{baseInfo.adPort}}
				</view>
				
				<view class="info-list" >
				        <text class="left">抵离港时间</text>
				        {{baseInfo.adTime}}
				</view>
				
				<view class="info-list" >
				        <text class="left">靠泊泊位</text>
				        {{baseInfo.adBerth}}
				</view>
				
				<view class="info-list" >
				        <text class="left">开始作业时间</text>
				        {{baseInfo.workTimeBegin}}
				</view>
				
				<view class="info-list" >
				        <text class="left">结束作业时间</text>
				        {{baseInfo.workTimeEnd}}
				</view>
				
				<view class="info-list" >
				        <text class="left">上一港（进港时必录）</text>
				        {{baseInfo.prevPort}}
				</view>
				
				<view class="info-list" >
				        <text class="left">下一港（出港时必录）</text>
				        {{baseInfo.nextPort}}
				</view>
				
				<view class="info-list" >
				        <text class="left">GOODS_ID</text>
				        {{baseInfo.goodsId}}
				</view>
				
				<view class="info-list" >
				        <text class="left">UNNO</text>
				        {{baseInfo.unno}}
				</view>
				
				<view class="info-list" >
				        <text class="left">正确运输名称中文</text>
				        {{baseInfo.goodsNameCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">正确运输名称英文</text>
				        {{baseInfo.goodsNameEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">正确运输名称中文补充说明</text>
				        {{baseInfo.goodsNameCnExtra}}
				</view>
				
				<view class="info-list" >
				        <text class="left">正确运输名称英文补充说明</text>
				        {{baseInfo.goodsNameEnExtra}}
				</view>
				
				<view class="info-list" >
				        <text class="left">危险类别</text>
				        {{baseInfo.goodsClass}}
				</view>
				
				<view class="info-list" >
				        <text class="left">副危险1</text>
				        {{baseInfo.subsidiaryRiskFirst}}
				</view>
				
				<view class="info-list" >
				        <text class="left">副危险2</text>
				        {{baseInfo.subsidiaryRiskSecond}}
				</view>
				
				<view class="info-list" >
				        <text class="left">包装类</text>
				        {{baseInfo.packGroup}}
				</view>
				
				<view class="info-list" >
				        <text class="left">海洋污染物</text>
				        {{baseInfo.oceanPollutant}}
				</view>
				
				<view class="info-list" >
				        <text class="left">是否限量</text>
				        {{baseInfo.limitQuantityFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">是否可免除量</text>
				        {{baseInfo.exemptionQuantityFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">应急措施表号</text>
				        {{baseInfo.emsNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">闪点（闪杯）</text>
				        {{baseInfo.flashPoint}}
				</view>
				
				<view class="info-list" >
				        <text class="left">控制温度</text>
				        {{baseInfo.controlTemperature}}
				</view>
				
				<view class="info-list" >
				        <text class="left">应急温度</text>
				        {{baseInfo.emergencyTemperature}}
				</view>
				
				<view class="info-list" >
				        <text class="left">总重量（千克）</text>
				        {{baseInfo.totalWeight}}
				</view>
				
				<view class="info-list" >
				        <text class="left">净重量（千克）</text>
				        {{baseInfo.netWeight}}
				</view>
				
				<view class="info-list" >
				        <text class="left">货物装运形式</text>
				        {{baseInfo.shipmentType}}
				</view>
				
				<view class="info-list" >
				        <text class="left">组件类型</text>
				        {{baseInfo.containerType}}
				</view>
				
				<view class="info-list" >
				        <text class="left">是否开敞</text>
				        {{baseInfo.containerOpenFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">包装容器标记及批号</text>
				        {{baseInfo.packMark}}
				</view>
				
				<view class="info-list" >
				        <text class="left">包件种类</text>
				        {{baseInfo.packType}}
				</view>
				
				<view class="info-list" >
				        <text class="left">包件材料</text>
				        {{baseInfo.packMaterial}}
				</view>
				
				<view class="info-list" >
				        <text class="left">包件数量</text>
				        {{baseInfo.packQuantity}}
				</view>
				
				<view class="info-list" >
				        <text class="left">包件或组件内是否含废弃物</text>
				        {{baseInfo.containWasteFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">包件或组件内是否未清洁含残余物-上一次盛装物</text>
				        {{baseInfo.emptyNotclearFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">货物流向</text>
				        {{baseInfo.goodsDirection}}
				</view>
				
				<view class="info-list" >
				        <text class="left">起运港</text>
				        {{baseInfo.departurePort}}
				</view>
				
				<view class="info-list" >
				        <text class="left">装货港</text>
				        {{baseInfo.loadingPort}}
				</view>
				
				<view class="info-list" >
				        <text class="left">卸货港</text>
				        {{baseInfo.dischargePort}}
				</view>
				
				<view class="info-list" >
				        <text class="left">目的港</text>
				        {{baseInfo.destinationPort}}
				</view>
				
				<view class="info-list" >
				        <text class="left">发货人</text>
				        {{baseInfo.consignor}}
				</view>
				
				<view class="info-list" >
				        <text class="left">托运人</text>
				        {{baseInfo.shipper}}
				</view>
				
				<view class="info-list" >
				        <text class="left">承运人</text>
				        {{baseInfo.carrier}}
				</view>
				
				<view class="info-list" >
				        <text class="left">收货人</text>
				        {{baseInfo.consignee}}
				</view>
				
				<view class="info-list" >
				        <text class="left">货主</text>
				        {{baseInfo.owner}}
				</view>
				
				<view class="info-list" >
				        <text class="left">提货单号</text>
				        {{baseInfo.extractNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">联系人姓名</text>
				        {{baseInfo.contactPerson}}
				</view>
				
				<view class="info-list" >
				        <text class="left">联系方式</text>
				        {{baseInfo.contactPhone}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申报员编号</text>
				        {{baseInfo.declarerId}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申报员姓名</text>
				        {{baseInfo.declarerName}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申报员证书编号</text>
				        {{baseInfo.declarerCertNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申报单位编号</text>
				        {{baseInfo.companyId}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申报单位名称</text>
				        {{baseInfo.companyName}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申报时间</text>
				        {{baseInfo.declareTime}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申报状态</text>
				        {{baseInfo.declareStatus}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申报方式</text>
				        {{baseInfo.declareWay}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申报账号</text>
				        {{baseInfo.declareAccount}}
				</view>
				
				<view class="info-list" >
				        <text class="left">备注</text>
				        {{baseInfo.remark}}
				</view>
			</view>
			<view v-if="gtsz">
				<view class="info-list" >
				        <text class="left">航次</text>
				        {{baseInfo.voyageNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">进出港</text>
				        {{baseInfo.portFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">内外贸</text>
				        {{baseInfo.tradeFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">靠泊港口</text>
				        {{baseInfo.adPort}}
				</view>
				
				<view class="info-list" >
				        <text class="left">抵离港时间</text>
				        {{baseInfo.adTime}}
				</view>
				
				<view class="info-list" >
				        <text class="left">靠泊泊位</text>
				        {{baseInfo.adBerth}}
				</view>
				
				<view class="info-list" >
				        <text class="left">开始作业时间</text>
				        {{baseInfo.workTimeBegin}}
				</view>
				
				<view class="info-list" >
				        <text class="left">结束作业时间</text>
				        {{baseInfo.workTimeEnd}}
				</view>
				
				<view class="info-list" >
				        <text class="left">上一港（进港时必录）</text>
				        {{baseInfo.prevPort}}
				</view>
				
				<view class="info-list" >
				        <text class="left">下一港（出港时必录）</text>
				        {{baseInfo.nextPort}}
				</view>
				
				<view class="info-list" >
				        <text class="left">GOODS_ID</text>
				        {{baseInfo.goodsId}}
				</view>
				
				<view class="info-list" >
				        <text class="left">UNNO</text>
				        {{baseInfo.unno}}
				</view>
				
				<view class="info-list" >
				        <text class="left">散装货物运输名称中文</text>
				        {{baseInfo.goodsNameCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">散装货物运输名称英文</text>
				        {{baseInfo.goodsNameEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">散装货物运输名称中文补充说明</text>
				        {{baseInfo.goodsNameCnExtra}}
				</view>
				
				<view class="info-list" >
				        <text class="left">散装货物运输名称英文补充说明</text>
				        {{baseInfo.goodsNameEnExtra}}
				</view>
				
				<view class="info-list" >
				        <text class="left">危险类别</text>
				        {{baseInfo.goodsClass}}
				</view>
				
				<view class="info-list" >
				        <text class="left">副危险</text>
				        {{baseInfo.subsidiaryRisk}}
				</view>
				
				<view class="info-list" >
				        <text class="left">MHB</text>
				        {{baseInfo.mhb}}
				</view>
				
				<view class="info-list" >
				        <text class="left">组别</text>
				        {{baseInfo.solidGroup}}
				</view>
				
				<view class="info-list" >
				        <text class="left">是否对海洋环境有害</text>
				        {{baseInfo.oceanPollutant}}
				</view>
				
				<view class="info-list" >
				        <text class="left">一般描述</text>
				        {{baseInfo.description}}
				</view>
				
				<view class="info-list" >
				        <text class="left">静止角</text>
				        {{baseInfo.reposeAngle}}
				</view>
				
				<view class="info-list" >
				        <text class="left">积载因数（m3/t）</text>
				        {{baseInfo.stowageFactor}}
				</view>
				
				<view class="info-list" >
				        <text class="left">特殊性质</text>
				        {{baseInfo.specialProperty}}
				</view>
				
				<view class="info-list" >
				        <text class="left">指南或其他事项</text>
				        {{baseInfo.handbook}}
				</view>
				
				<view class="info-list" >
				        <text class="left">平舱程序</text>
				        {{baseInfo.trimmingProcedure}}
				</view>
				
				<view class="info-list" >
				        <text class="left">适运水份极限</text>
				        {{baseInfo.moistureLimit}}
				</view>
				
				<view class="info-list" >
				        <text class="left">运输水分含量</text>
				        {{baseInfo.moistureContent}}
				</view>
				
				<view class="info-list" >
				        <text class="left">货物流向</text>
				        {{baseInfo.goodsDirection}}
				</view>
				
				<view class="info-list" >
				        <text class="left">起运港</text>
				        {{baseInfo.departurePort}}
				</view>
				
				<view class="info-list" >
				        <text class="left">装货港</text>
				        {{baseInfo.loadingPort}}
				</view>
				
				<view class="info-list" >
				        <text class="left">卸货港</text>
				        {{baseInfo.dischargePort}}
				</view>
				
				<view class="info-list" >
				        <text class="left">目的港</text>
				        {{baseInfo.destinationPort}}
				</view>
				
				<view class="info-list" >
				        <text class="left">发货人</text>
				        {{baseInfo.consignor}}
				</view>
				
				<view class="info-list" >
				        <text class="left">托运人</text>
				        {{baseInfo.shipper}}
				</view>
				
				<view class="info-list" >
				        <text class="left">承运人</text>
				        {{baseInfo.carrier}}
				</view>
				
				<view class="info-list" >
				        <text class="left">收货人</text>
				        {{baseInfo.consignee}}
				</view>
				
				<view class="info-list" >
				        <text class="left">货主</text>
				        {{baseInfo.owner}}
				</view>
				
				<view class="info-list" >
				        <text class="left">提货单号</text>
				        {{baseInfo.extractNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">总重量（数量）</text>
				        {{baseInfo.totalWeight}}
				</view>
				
				<view class="info-list" >
				        <text class="left">联系人姓名</text>
				        {{baseInfo.contactPerson}}
				</view>
				
				<view class="info-list" >
				        <text class="left">联系方式</text>
				        {{baseInfo.contactPhone}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申报员编号</text>
				        {{baseInfo.declarerId}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申报员姓名</text>
				        {{baseInfo.declarerName}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申报员证书编号</text>
				        {{baseInfo.declarerCertNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申报单位编号</text>
				        {{baseInfo.companyId}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申报单位名称</text>
				        {{baseInfo.companyName}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申报时间</text>
				        {{baseInfo.declareTime}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申报状态</text>
				        {{baseInfo.declareStatus}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申报方式</text>
				        {{baseInfo.declareWay}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申报账号</text>
				        {{baseInfo.declareAccount}}
				</view>
				
				<view class="info-list" >
				        <text class="left">备注</text>
				        {{baseInfo.remark}}
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
</template>

<script>
export default {
	data() {
		return {
			baseInfo: {},
			declareId:'',
			type:'',
			szyt:false,
			bzhw:false,
			gtsz:false,
			zjxx:[]
		};
	},
	onLoad(options){
		console.log(options.declareId)
		this.declareId=options.declareId;
		this.type=options.type;
		this.getWhXQByType(options.type,options.declareId);
		this.getHwzjxx(options.type,options.declareId);
	},
	methods:{
		getWhXQByType(str,declareId){
			this.api.request('/sea/view/getGoodsDeclarationTraffic?type='+declareId,{},'GET').then(res=>{
				console.log('>>>>>'+JSON.stringify(res));
				if(res.code!=200){
					uni.showToast({
						title: res.message,
						icon:'none'
					});
					return;
				}
				if(str==='szythy'){
					console.log(res.result[0].szyt);
					this.baseInfo=res.result[0].szyt;
					this.szyt=true;
				}
				if(str==='bzhwhy'){
					this.baseInfo=res.result[0].bzhw;
					this.bzhw=true;
				}
				if(str==='gtszhy'){
					this.baseInfo=res.result[0].gtsz;
					this.gtsz=true;
				}
			})
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
