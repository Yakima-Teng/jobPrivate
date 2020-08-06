<template>
	<view class="page-crew-basic">
		<view class="info-title">证书信息</view>
		<view v-if="gj">
			<view class="info-list-box">
				<view class="info-list" >
				        <text class="left">船舶登记号</text>
				        {{baseInfo.shipRegNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">国籍版本号</text>
				        {{baseInfo.nationVersion}}
				</view>
				
				<view class="info-list" >
				        <text class="left">是否临时国籍证书</text>
				        {{baseInfo.tempNationFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">中英文类型</text>
				        {{baseInfo.languageType}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶经营人</text>
				        {{baseInfo.shipOperatorCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶经营人地址</text>
				        {{baseInfo.shipOperatorAddrCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">经营人法人代表</text>
				        {{baseInfo.operatorLegalPerson}}
				</view>
				
				<view class="info-list" >
				        <text class="left">经营人联系电话</text>
				        {{baseInfo.operatorContactPhone}}
				</view>
				
				<view class="info-list" >
				        <text class="left">经营人邮政编码</text>
				        {{baseInfo.operatorPostalcode}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶管埋人</text>
				        {{baseInfo.shipManagerCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶管理人地址</text>
				        {{baseInfo.shipManagerAddrCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">管理人法人代表</text>
				        {{baseInfo.managerLegalPerson}}
				</view>
				
				<view class="info-list" >
				        <text class="left">管理人联系电话</text>
				        {{baseInfo.managerContactPhone}}
				</view>
				
				<view class="info-list" >
				        <text class="left">管理人邮政编码</text>
				        {{baseInfo.managerPostalcode}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶所有人</text>
				        {{baseInfo.shipOwnerCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶所有人地址</text>
				        {{baseInfo.shipOwnerAddrCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">英文船舶经营人</text>
				        {{baseInfo.shipOperatorEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">英文船舶经营人地址</text>
				        {{baseInfo.shipOperatorAddrEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">英文船舶所有人</text>
				        {{baseInfo.shipOwnerEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">英文船舶所有人地址</text>
				        {{baseInfo.shipOwnerAddrEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">起始有效期</text>
				        {{baseInfo.effectiveDate}}
				</view>
				
				<view class="info-list" >
				        <text class="left">证书截止有效日期</text>
				        {{baseInfo.expireDate}}
				</view>
				
				<view class="info-list" >
				        <text class="left">取得日期</text>
				        {{baseInfo.certObtainDate}}
				</view>
				
				<view class="info-list" >
				        <text class="left">流转状态标志</text>
				        {{baseInfo.statusFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">打印标志</text>
				        {{baseInfo.printFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">印章标志</text>
				        {{baseInfo.sealFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">校核标志</text>
				        {{baseInfo.checkFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">发放标志</text>
				        {{baseInfo.issueFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">登记机构</text>
				        {{baseInfo.orgCode}}
				</view>
				
				<view class="info-list" >
				        <text class="left">证书印刷号</text>
				        {{baseInfo.certPrintNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">注诮登记号码</text>
				        {{baseInfo.regDeletionNo}}
				</view>
			</view>
		</view>
		<view v-if="syq">
			<view class="info-list-box">
				<view class="info-list" >
				        <text class="left">船舶登记号</text>
				        {{baseInfo.shipRegNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶所有人</text>
				        {{baseInfo.shipOwnerCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶所有人地址</text>
				        {{baseInfo.shipOwnerAddrCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">英文船舶所有人</text>
				        {{baseInfo.shipOwnerEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">英文船舶所有人地址</text>
				        {{baseInfo.shipOwnerAddrEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">所有人法人代表</text>
				        {{baseInfo.ownerLegalPerson}}
				</view>
				
				<view class="info-list" >
				        <text class="left">所有人联系电话</text>
				        {{baseInfo.ownerContactPhone}}
				</view>
				
				<view class="info-list" >
				        <text class="left">所有人邮政编码</text>
				        {{baseInfo.ownerPostalcode}}
				</view>
				
				<view class="info-list" >
				        <text class="left">所有权取得日期</text>
				        {{baseInfo.certObtainDate}}
				</view>
				
				<view class="info-list" >
				        <text class="left">所有权取得方式</text>
				        {{baseInfo.shipObtainWayCode}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶共有情况</text>
				        {{baseInfo.shipShareSituation}}
				</view>
				
				<view class="info-list" >
				        <text class="left">流转状态标志</text>
				        {{baseInfo.statusFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">打印标志</text>
				        {{baseInfo.printFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">印章标志</text>
				        {{baseInfo.sealFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">校核标志</text>
				        {{baseInfo.checkFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">发放标志</text>
				        {{baseInfo.issueFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">登记机关</text>
				        {{baseInfo.orgCode}}
				</view>
				
				<view class="info-list" >
				        <text class="left">证书印刷号</text>
				        {{baseInfo.certPrintNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">注诮登记号码</text>
				        {{baseInfo.regDeletionNo}}
				</view>
			</view>
		</view>
		<view v-if="gzc">
			<view class="info-list-box">
				<view class="info-list" >
				        <text class="left">船舶登记号</text>
				        {{baseInfo.shipRegNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">光船租赁登记号码</text>
				        {{baseInfo.bareboatCharterRegNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶出租人名称</text>
				        {{baseInfo.shipLenderCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶出租人英文名称</text>
				        {{baseInfo.shipLenderEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶出租人地址</text>
				        {{baseInfo.shipLenderAddr}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶承租人</text>
				        {{baseInfo.shipChartererCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶承租人英文名称</text>
				        {{baseInfo.shipChartererEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶承租人地址</text>
				        {{baseInfo.shipChartererAddr}}
				</view>
				
				<view class="info-list" >
				        <text class="left">流转状态标志</text>
				        {{baseInfo.statusFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">注销登记号码</text>
				        {{baseInfo.regDeletionNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">登记机构</text>
				        {{baseInfo.orgCode}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申请单位</text>
				        {{baseInfo.applyUnit}}
				</view>
				
				<view class="info-list" >
				        <text class="left">是否转租</text>
				        {{baseInfo.subleaseFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">租金</text>
				        {{baseInfo.charterRateCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">英文租金</text>
				        {{baseInfo.charterRateEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">租期</text>
				        {{baseInfo.charterPeriodCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">英文租期</text>
				        {{baseInfo.charterPeriodEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">租赁契约号</text>
				        {{baseInfo.charterContractNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">证书印刷号</text>
				        {{baseInfo.certPrintNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">中文备注</text>
				        {{baseInfo.remarkCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">英文备注</text>
				        {{baseInfo.remarkEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">起始有效期</text>
				        {{baseInfo.effectiveDate}}
				</view>
				
				<view class="info-list" >
				        <text class="left">截至有效期</text>
				        {{baseInfo.expireDate}}
				</view>
			</view>
		</view>
		<view v-if="fgc">
			<view class="info-list-box">
				<view class="info-list" >
				        <text class="left">废钢船登记号码</text>
				        {{baseInfo.scrapshipRegNo}}
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
				        <text class="left">船舶登记号</text>
				        {{baseInfo.shipRegNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶呼号</text>
				        {{baseInfo.shipCallsign}}
				</view>
				
				<view class="info-list" >
				        <text class="left">IMO编号</text>
				        {{baseInfo.shipImo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船籍港代码</text>
				        {{baseInfo.regportCode}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶种类代码</text>
				        {{baseInfo.shipTypeCode}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船体材料代码</text>
				        {{baseInfo.shipHullMaterialCode}}
				</view>
				
				<view class="info-list" >
				        <text class="left">造船地点</text>
				        {{baseInfo.shipBuiltAddr}}
				</view>
				
				<view class="info-list" >
				        <text class="left">建成日期</text>
				        {{baseInfo.shipBuiltDate}}
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
				        <text class="left">轻吨</text>
				        {{baseInfo.shipLdt}}
				</view>
				
				<view class="info-list" >
				        <text class="left">主机种类代码</text>
				        {{baseInfo.shipEngineTypeCode}}
				</view>
				
				<view class="info-list" >
				        <text class="left">主机数量</text>
				        {{baseInfo.shipEngineNum}}
				</view>
				
				<view class="info-list" >
				        <text class="left">主机功率</text>
				        {{baseInfo.shipEnginePower}}
				</view>
				
				<view class="info-list" >
				        <text class="left">推进器种类代码</text>
				        {{baseInfo.shipPropellerKindCode}}
				</view>
				
				<view class="info-list" >
				        <text class="left">推进器数量</text>
				        {{baseInfo.shipPropellerNum}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申请单位</text>
				        {{baseInfo.applyUnit}}
				</view>
				
				<view class="info-list" >
				        <text class="left">所有人联系电话</text>
				        {{baseInfo.ownerContactPhone}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶拆解地点</text>
				        {{baseInfo.dismantleAddr}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶所有人</text>
				        {{baseInfo.shipOwnerCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶所有人地址</text>
				        {{baseInfo.shipOwnerAddr}}
				</view>
				
				<view class="info-list" >
				        <text class="left">取得所有权日期</text>
				        {{baseInfo.obtainOwnershipDate}}
				</view>
				
				<view class="info-list" >
				        <text class="left">拆解标志</text>
				        {{baseInfo.dismantleFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">拆解单位</text>
				        {{baseInfo.dismantleUnit}}
				</view>
				
				<view class="info-list" >
				        <text class="left">改建地点</text>
				        {{baseInfo.shipRebuiltAddr}}
				</view>
				
				<view class="info-list" >
				        <text class="left">改建日期</text>
				        {{baseInfo.shipRebuiltDate}}
				</view>
				
				<view class="info-list" >
				        <text class="left">证书印刷号</text>
				        {{baseInfo.certPrintNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">截至有效期</text>
				        {{baseInfo.expireDate}}
				</view>
				
				<view class="info-list" >
				        <text class="left">登记机构</text>
				        {{baseInfo.orgCode}}
				</view>
			</view>
		</view>
		<view v-if="gsc">
			<view class="info-list-box">
				<view class="info-list" >
				        <text class="left">船舶识别号</text>
				        {{baseInfo.shipId}}
				</view>
				
				<view class="info-list" >
				        <text class="left">高速船登记号</text>
				        {{baseInfo.hspsRegNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶登记号</text>
				        {{baseInfo.shipRegNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">证书印刷号</text>
				        {{baseInfo.certPrintNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">国籍版本号</text>
				        {{baseInfo.nationVersion}}
				</view>
				
				<view class="info-list" >
				        <text class="left">截至有效期</text>
				        {{baseInfo.expireDate}}
				</view>
				
				<view class="info-list" >
				        <text class="left">建造型号</text>
				        {{baseInfo.shipManufacturerModel}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船体编号</text>
				        {{baseInfo.shipHullNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">基地港</text>
				        {{baseInfo.basePortCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">英文基地港</text>
				        {{baseInfo.basePortEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">至避难处所的最大距离</text>
				        {{baseInfo.maximumDistanceToRefuge}}
				</view>
				
				<view class="info-list" >
				        <text class="left">距离单位</text>
				        {{baseInfo.distanceUnit}}
				</view>
				
				<view class="info-list" >
				        <text class="left">最大核准载客人数</text>
				        {{baseInfo.passengersMaximumNum}}
				</view>
				
				<view class="info-list" >
				        <text class="left">要求配备的船员数</text>
				        {{baseInfo.requiredCrewNum}}
				</view>
				
				<view class="info-list" >
				        <text class="left">最坏设想条件</text>
				        {{baseInfo.worstCaseCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">英文最坏设想条件</text>
				        {{baseInfo.worstCaseEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">其他营运限制</text>
				        {{baseInfo.otherOperateLimitsCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">英文其他营运限制</text>
				        {{baseInfo.otherOperateLimitsEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">营运航区或航线</text>
				        {{baseInfo.operateRouteCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">英文营运航区或航线</text>
				        {{baseInfo.operateRouteEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">签发地点</text>
				        {{baseInfo.issueAddrCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">英文签发地点</text>
				        {{baseInfo.issueAddrEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">流转状态标志</text>
				        {{baseInfo.statusFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">登记机构</text>
				        {{baseInfo.orgCode}}
				</view>
				
				<view class="info-list" >
				        <text class="left">备注</text>
				        {{baseInfo.remark}}
				</view>
				
				<view class="info-list" >
				        <text class="left">注销登记号码</text>
				        {{baseInfo.regDeletionNo}}
				</view>
			</view>
		</view>
		<view v-if="dyq">
			<view class="info-list-box">
				<view class="info-list" >
				        <text class="left">抵押权登记号码</text>
				        {{baseInfo.mortgageRegNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶登记号</text>
				        {{baseInfo.shipRegNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶抵押权人名称</text>
				        {{baseInfo.shipMortgageeCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶抵押权人英文名称</text>
				        {{baseInfo.shipMortgageeEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶抵押权人地址</text>
				        {{baseInfo.shipMortgageeAddr}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶抵押人名称</text>
				        {{baseInfo.shipMortgagorCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶抵押人英文名称</text>
				        {{baseInfo.shipMortgagorEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">担保债权数额</text>
				        {{baseInfo.debtAmount}}
				</view>
				
				<view class="info-list" >
				        <text class="left">债权货币代码</text>
				        {{baseInfo.claimCurrencyCode}}
				</view>
				
				<view class="info-list" >
				        <text class="left">最高债权标志</text>
				        {{baseInfo.maximumClaimFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">抵押金额</text>
				        {{baseInfo.mortgageAmount}}
				</view>
				
				<view class="info-list" >
				        <text class="left">抵押货币代码</text>
				        {{baseInfo.mortgageCurrencyCode}}
				</view>
				
				<view class="info-list" >
				        <text class="left">利率</text>
				        {{baseInfo.interestRateCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">英文利率</text>
				        {{baseInfo.interestRateEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">受偿起始日期</text>
				        {{baseInfo.payoffBeginDate}}
				</view>
				
				<view class="info-list" >
				        <text class="left">受偿终止日期</text>
				        {{baseInfo.payoffEndDate}}
				</view>
				
				<view class="info-list" >
				        <text class="left">原有抵押情况</text>
				        {{baseInfo.origMortgageSituation}}
				</view>
				
				<view class="info-list" >
				        <text class="left">申请单位</text>
				        {{baseInfo.applyUnit}}
				</view>
				
				<view class="info-list" >
				        <text class="left">登记机构</text>
				        {{baseInfo.orgCode}}
				</view>
				
				<view class="info-list" >
				        <text class="left">流转状态标志</text>
				        {{baseInfo.statusFlag}}
				</view>
				
				<view class="info-list" >
				        <text class="left">证书印刷号</text>
				        {{baseInfo.certPrintNo}}
				</view>
				
				<view class="info-list" >
				        <text class="left">中文备注</text>
				        {{baseInfo.remarkCn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">英文备注</text>
				        {{baseInfo.remarkEn}}
				</view>
				
				<view class="info-list" >
				        <text class="left">船舶抵押人地址</text>
				        {{baseInfo.shipMortgagorAddr}}
				</view>
				
				<view class="info-list" >
				        <text class="left">注销登记号码</text>
				        {{baseInfo.regDeletionNo}}
				</view>
			</view>
		</view>
		<view v-if="cbjy">
			<view class="info-list-box">
				<view class="info-list" >
				        <text class="left">证书编号</text>
				        {{baseInfo.certId}}
				</view>
				<view class="info-list" >
				        <text class="left">主任验船师</text>
				        {{baseInfo.principalUrveyor}}
				</view>
				<view class="info-list" >
				        <text class="left">船舶识别号</text>
				        {{baseInfo.shipId}}
				</view>
				<view class="info-list" >
				        <text class="left">船舶检验编号</text>
				        {{baseInfo.shipSurveyNo}}
				</view>
				<view class="info-list" >
				        <text class="left">检验种类名称</text>
				        {{baseInfo.shipSurveyItemName}}
				</view>
				<view class="info-list" >
				        <text class="left">航线类型名称</text>
				        {{baseInfo.routeTypeName}}
				</view>
				<view class="info-list" >
				        <text class="left">发证日期</text>
				        {{baseInfo.certIssueddate}}
				</view>
				<view class="info-list" >
				        <text class="left">到期日期</text>
				        {{baseInfo.certDuedate}}
				</view>
				<view class="info-list" >
				        <text class="left">发证单位</text>
				        {{baseInfo.certIssuedOrg}}
				</view>
				<view class="info-list" >
				        <text class="left">发证地点</text>
				        {{baseInfo.certIssuedplace}}
				</view>
				<view class="info-list" >
				        <text class="left">发证方式</text>
				        {{baseInfo.insCertIssueWay}}
				</view>
				<view class="info-list" >
				        <text class="left">证书防伪码</text>
				        {{baseInfo.certSecurityCode}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				zstype:'',
				gj:false,
				syq:false,
				gzc:false,
				fgc:false,
				gsc:false,
				dyq:false,
				cbjy:false,
				baseInfo: {}
			}
		},
		onLoad(options){
			this.zstype=options.zstype;
			this.getCreatDetails(options.zstype,options.shipRegNo,options.index,options.ship_id);
		},
		methods: {
			getCreatDetails(zstype,shipRegNo,index,shipId){
				this.api.request('/sea/s/c?ship_reg_no='+shipRegNo).then(res=>{
					// console.log('>>>'+JSON.stringify(res.result));
					if(res.code!=200){
						uni.showToast({
							title: res.message,
							icon:'none'
						});
						return;
					}
					if(zstype==='gj'){
						//高速船
						this.baseInfo=res.result[0].gjList[0]
						this.gj=true;
					}
					if(zstype==='syq'){
						//所有权
						this.baseInfo=res.result[0].syqList[0]
						this.syq=true;
					}
					if(zstype==='gzc'){
						//公租船
						this.baseInfo=res.result[0].gzcList[0]
						this.gzc=true;
					}
					if(zstype==='gsc'){
						//高速船
						this.baseInfo=res.result[0].gscList[0]
						this.gsc=true;
					}
					if(zstype==='fgc'){
						//废钢船
						this.baseInfo=res.result[0].fgcList[0]
						this.fgc=true;
						
					}
					if(zstype==='dyq'){
						//抵押权
						this.baseInfo=res.result[0].dyqList[0]
						this.dyq=true;
					}
					if(zstype==='cbjy'){
						//船舶校验
						console.log('获取证书缓存》》'+index);
						this.baseInfo=uni.getStorage('cbjyxq');
						this.api.request('/sea/cj/cjCertificated?ship_id='+shipId).then(res=>{
							console.log('>>>>>'+JSON.stringify(res.result));
							if(res.code!=200){
								uni.showToast({
									title: res.message,
									icon:'none'
								});
								return;
							}
						    this.baseInfo=res.result[index];
							this.cbjy=true;
						})

						
					}
				})
				
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
</style>
