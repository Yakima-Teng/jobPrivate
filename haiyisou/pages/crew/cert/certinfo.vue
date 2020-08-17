<template>
	<view class="page-crew-basic">
		<view class="info-title"></view><!-- 证书信息 -->
		<view class="info-list-box" v-if="type==6">
			<view class="info-list" >
				<text class="left">身份证号码</text>
				{{baseInfo.idCardNo}}
			</view>
			<view class="info-list" >
				<text class="left">性别 </text>
				{{baseInfo.sex}}
			</view>
			<view class="info-list" >
				<text class="left">姓名</text>
				{{baseInfo.name}}
			</view>
			<view class="info-list" >
				<text class="left">姓名拼音</text>
				{{baseInfo.nameSpell}}
			</view>
			<view class="info-list" >
				<text class="left">出生日期</text>
				{{baseInfo.birthDate}}
			</view>
			<view class="info-list" >
				<text class="left">证书号码</text>
				{{baseInfo.certNo}}
			</view>
			<view class="info-list" >
				<text class="left">项目名称</text>
				{{baseInfo.trainItemName}}
			</view>
			<view class="info-list" >
				<text class="left">适用范围</text>
				{{baseInfo.applScope}}
			</view>
			<view class="info-list" >
				<text class="left">申请形式</text>
				{{baseInfo.applForm}}
			</view>
			<view class="info-list" >
				<text class="left">作废原因</text>
				{{baseInfo.invareason}}
			</view>
			<view class="info-list" >
				<text class="left">无效原因</text>
				{{baseInfo.invaType}}
			</view>
			<view class="info-list" >
				<text class="left">合格证印刷号</text>
				{{baseInfo.qualcertPrintNo}}
			</view>
			<view class="info-list" >
				<text class="left">签发机关</text>
				{{baseInfo.issuOrgCode}}
			</view>
			<view class="info-list" >
				<text class="left">签发官员</text>
				{{baseInfo.issuOffiName}}
			</view>
			<view class="info-list" >
				<text class="left">签发日期</text>
				{{baseInfo.issuDate}}
			</view>
			<view class="info-list" >
				<text class="left">截止日期</text>
				{{baseInfo.expiryDate}}
			</view>
			<view class="info-list" >
				<text class="left">证书状态</text>
				{{baseInfo.certStatus}}
			</view>
		</view>
		<!--内河行驶证-->
		<view class="info-list-box" v-if="type==4">
			<view class="info-list" >
				<text class="left">身份证号码</text>
				{{baseInfo.idCardNo}}
			</view>
			<view class="info-list" >
				<text class="left">性别 </text>
				{{baseInfo.sex}}
			</view>
			<view class="info-list" >
				<text class="left">姓名</text>
				{{baseInfo.name}}
			</view>
			<view class="info-list" >
				<text class="left">姓名拼音</text>
				{{baseInfo.nameSpell}}
			</view>
			<view class="info-list" >
				<text class="left">出生日期</text>
				{{baseInfo.birthDate}}
			</view>
			<view class="info-list" >
				<text class="left">适用航线 </text>
				{{baseInfo.applRoute}}
			</view>
			<view class="info-list" >
				<text class="left">证书号码</text>
				{{baseInfo.certNo}}
			</view>
			<view class="info-list" >
				<text class="left">证书印刷号</text>
				{{baseInfo.certPrintNo}}
			</view>
			
			<view class="info-list" >
				<text class="left">项目名称</text>
				{{baseInfo.trainItemName}}
			</view>
			<view class="info-list" >
				<text class="left">适用范围</text>
				{{baseInfo.applScope}}
			</view>
			<view class="info-list" >
				<text class="left">申请形式</text>
				{{baseInfo.applForm}}
			</view>
			
			<view class="info-list" >
				<text class="left">合格证印刷号</text>
				{{baseInfo.qualcertPrintNo}}
			</view>
			<view class="info-list" >
				<text class="left">证书状态</text>
				{{baseInfo.certStatus}}
			</view>
			<view class="info-list" >
				<text class="left">签发机关</text>
				{{baseInfo.issuOrgCode}}
			</view>
			<view class="info-list" >
				<text class="left">签发官员</text>
				{{baseInfo.issuOffiName}}
			</view>
			<view class="info-list" >
				<text class="left">签发日期</text>
				{{baseInfo.issuDate}}
			</view>
			<view class="info-list" >
				<text class="left">是否无纸化</text>
				{{baseInfo.isPaperless}}
			</view>
			<view class="info-list" >
				<text class="left">现持适任种类</text>
				{{baseInfo.currCompType}}
			</view>
			<view class="info-list" >
				<text class="left">无效形式</text>
				{{baseInfo.invaForm}}
			</view>
			<view class="info-list" >
				<text class="left">无效原因</text>
				{{baseInfo.invaType}}
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
				<text class="left">截止日期</text>
				{{baseInfo.expiryDate}}
			</view>
			<view class="info-list" >
				<text class="left">作废原因</text>
				{{baseInfo.invareason}}
			</view>
			<view class="info-list" >
				<text class="left">备注</text>
				{{baseInfo.remark}}
			</view>
				 
		</view>
		<!--内河适认证-->
		<view class="info-list-box" v-if="type==7">
			<view class="info-list" >
				<text class="left">身份证号码</text>
				{{baseInfo.idCardNo}}
			</view>
			<view class="info-list" >
				<text class="left">性别 </text>
				{{baseInfo.sex}}
			</view>
			<view class="info-list" >
				<text class="left">姓名</text>
				{{baseInfo.name}}
			</view>
			<view class="info-list" >
				<text class="left">证书身份证号码</text>
				{{baseInfo.certIdcardNo}}
			</view>
			<view class="info-list" >
				<text class="left">证书号码 </text>
				{{baseInfo.certNo}}
			</view>
			<view class="info-list" >
				<text class="left">证书状态  </text>
				{{baseInfo.certStatus}}
			</view>
			<view class="info-list" >
				<text class="left">适任种类 </text>
				{{baseInfo.compTypeName}}
			</view>
			<view class="info-list" >
				<text class="left">适任专业 </text>
				{{baseInfo.applMajorName}}
			</view>
			
			<view class="info-list" >
				<text class="left">签发机关 </text>
				{{baseInfo.issuOrgCode}}
			</view>
			<view class="info-list" >
				<text class="left">签发官员姓名 </text>
				{{baseInfo.issuOffiName}}
			</view>
			<view class="info-list" >
				<text class="left">签发日期 </text>
				{{baseInfo.issuDate}}
			</view>
			
			<view class="info-list" >
				<text class="left">截止日期 </text>
				{{baseInfo.expiryDate}}
			</view>
			<view class="info-list" >
				<text class="left">无效形式 </text>
				{{baseInfo.invaForm}}
			</view>
			<view class="info-list" >
				<text class="left">无效原因 </text>
				{{baseInfo.invaType}}
			</view>
			<view class="info-list" >
				<text class="left">证书打印机关 </text>
				{{baseInfo.certPrintOrgCode}}
			</view>
			<view class="info-list" >
				<text class="left">证书打印日期 </text>
				{{baseInfo.certPrintDate}}
			</view>
			<view class="info-list" >
				<text class="left">适用限制 </text>
				{{baseInfo.applLimiCn}}
			</view>
		</view>
		<!--海船合格证-->
		<view class="info-list-box" v-if="type==1">
			<view class="info-list" >
				<text class="left">身份证号码</text>
				{{baseInfo.idCardNo}}
			</view>
			<view class="info-list" >
				<text class="left">性别 </text>
				{{baseInfo.sex}}
			</view>
			<view class="info-list" >
				<text class="left">姓名</text>
				{{baseInfo.name}}
			</view>
			<view class="info-list" >
				<text class="left">姓名拼音 </text>
				{{baseInfo.nameSpell}}
			</view>
			<view class="info-list" >
				<text class="left">出生日期  </text>
				{{baseInfo.birthDate}}
			</view>
			<view class="info-list" >
				<text class="left">国籍   </text>
				{{baseInfo.nationality}}
			</view>
			<view class="info-list" >
				<text class="left">证书号码  </text>
				{{baseInfo.certNo}}
			</view>
			<view class="info-list" >
				<text class="left">证书印刷号  </text>
				{{baseInfo.certPrintNo}}
			</view>
			
			<view class="info-list" >
				<text class="left">	证书状态  </text>
				{{baseInfo.certStatus}}
			</view>
			<view class="info-list" >
				<text class="left">签发机关  </text>
				{{baseInfo.issuOrgCode}}
			</view>
			<view class="info-list" >
				<text class="left">签发官员姓名  </text>
				{{baseInfo.issuOffiName}}
			</view>
			
			<view class="info-list" >
				<text class="left">签发日期  </text>
				{{baseInfo.issuDate}}
			</view>
			<view class="info-list" >
				<text class="left">无效形式 </text>
				{{baseInfo.invaForm}}
			</view>
			<view class="info-list" >
				<text class="left">无效原因 </text>
				{{baseInfo.invaType}}
			</view>
			<view class="info-list" >
				<text class="left">作废人姓名  </text>
				{{baseInfo.invamanName}}
			</view>
			<view class="info-list" >
				<text class="left">作废日期  </text>
				{{baseInfo.invaDate}}
			</view>
			<view class="info-list" >
				<text class="left">作废原因  </text>
				{{baseInfo.invareason}}
			</view>
			
			<view class="info-list" >
				<text class="left">备注  </text>
				{{baseInfo.remark}}
			</view>
			<view class="info-title">合格证项目</view>
				<view class="info info-exam-subject">
					<view class="main">
						<view class="subject-list" v-for="(item,index) in hgzxm" :key="index">
							<view class="subject-num">{{index+1}}</view>
							<view class="subject-info">
								<view class="text">项目代码：{{item.trainItemCode}}</view>
								<view class="text">项目名称：{{item.trainItemName}}</view>
								<view class="text">签发机关：{{item.issuOrgCode}}</view>
								<view class="text">适用范围：{{item.applScope}}</view>
								<view class="text">签发日期：{{item.issuDate}}</view>
								<view class="text">有效期至：{{item.expiryDate}}</view>
								<view class="text">当前状态：{{item.certStatus}}</view>
							</view>
						</view>
				</view>
			</view>
		</view>
		<!--海船适任证 海船非自航适任证-->
		<view class="info-list-box" v-if="type==3||type==2">
			<view class="info-list" >
				<text class="left">身份证号码</text>
				{{baseInfo.idCardNo}}
			</view>
			<view class="info-list" >
				<text class="left">性别 </text>
				{{baseInfo.sex}}
			</view>
			<view class="info-list" >
				<text class="left">姓名</text>
				{{baseInfo.name}}
			</view>
			<view class="info-list" >
				<text class="left">适任证种类 </text>
				{{baseInfo.compTypeName}}
			</view>
			<view class="info-list" >
				<text class="left">出生日期  </text>
				{{baseInfo.birthDate}}
			</view>
			<view class="info-list" >
				<text class="left">国籍   </text>
				{{baseInfo.nationality}}
			</view>
			<view class="info-list" >
				<text class="left">证书号码  </text>
				{{baseInfo.certPrintNo}}
			</view>
			<view class="info-list" >
				<text class="left">签发机关  </text>
				{{baseInfo.issuOrgCode}}
			</view>
			
			<view class="info-list" >
				<text class="left">签发日期  </text>
				{{baseInfo.issuDate}}
			</view>
			<view class="info-list" >
				<text class="left">截止日期  </text>
				{{baseInfo.expiryDate}}
			</view>
			<view class="info-list" >
				<text class="left">签发官员  </text>
				{{baseInfo.issuOffiName}}
			</view>
			
			<view class="info-list" >
				<text class="left">适任专业  </text>
				{{baseInfo.applMajorName}}
			</view>
			<view class="info-list" >
				<text class="left">适任类别  </text>
				{{baseInfo.certCateName}}
			</view>
			<view class="info-list" >
				<text class="left">适任等级  </text>
				{{baseInfo.certLevelName}}
			</view>
			<view class="info-list" >
				<text class="left">适任职务  </text>
				{{baseInfo.certPosiName}}
			</view>
			<view class="info-list" >
				<text class="left">是否无纸化  </text>
				{{baseInfo.isPaperless}}
			</view>
			<view class="info-list" >
				<text class="left">证书印刷号  </text>
				{{baseInfo.certPrintNo}}
			</view>
			<view class="info-list" >
				<text class="left">申请形式   </text>
				{{baseInfo.applForm}}
			</view>
			<view class="info-list" >
				<text class="left">申考形式</text>
				{{baseInfo.applexamForm}}
			</view>
			<view class="info-list" >
				<text class="left">单位名称</text>
				{{baseInfo.compName}}
			</view>
			<view class="info-list" >
				<text class="left">适用范围</text>
				{{baseInfo.applScope}}
			</view>
			<view class="info-list" >
				<text class="left">适用船舶种类</text>
				{{baseInfo.applShipType}}
			</view>
			<view class="info-list" >
				<text class="left">主机种类 </text>
				{{baseInfo.hostFrametypelist}}
			</view>
			<view class="info-list" >
				<text class="left">适用限制中文</text>
				{{baseInfo.applLimiCn}}
			</view>
			<view class="info-list" >
				<text class="left">适用限制英文</text>
				{{baseInfo.applLimiEn}}
			</view>
			<view class="info-list" >
				<text class="left">是否办理G证</text>
				{{baseInfo.isHandleGCert}}
			</view>
			<view class="info-list" >
				<text class="left">G证证书种类</text>
				{{baseInfo.certtypeG}}
			</view>
			<view class="info-list" >
				<text class="left">是否适用港澳 </text>
				{{baseInfo.applHkAndMacaoSign}}
			</view>
			<view class="info-list" >
				<text class="left">是否适用电子海图</text>
				{{baseInfo.elecChart}}
			</view>
			<view class="info-list" >
				<text class="left">是否适用自动雷达</text>
				{{baseInfo.autoRadar}}
			</view>
			<view class="info-list" >
				<text class="left">证书打印日期 </text>
				{{baseInfo.certPrintDate}}
			</view>
			<view class="info-list" >
				<text class="left">证书打印机关  </text>
				{{baseInfo.certPrintOrgCode}}
			</view>
			<view class="info-list" >
				<text class="left">条款中文</text>
				{{baseInfo.applClauCn}}
			</view>
			<view class="info-list" >
				<text class="left">条款英文</text>
				{{baseInfo.applClauEn}}
			</view>
			<view class="info-list" >
				<text class="left">公约中文</text>
				{{baseInfo.convCn}}
			</view>
			<view class="info-list" >
				<text class="left">公约英文 </text>
				{{baseInfo.convEn}}
			</view>
			<view class="info-list" >
				<text class="left">	证书状态</text>
				{{baseInfo.certStatus}}
			</view>
			<view class="info-list" >
				<text class="left">	签注内容</text>
				{{baseInfo.visaContent}}
			</view>
			<view class="info-list" >
				<text class="left">无效形式</text>
				{{baseInfo.invaForm}}
			</view>
			<view class="info-list" >
				<text class="left">作废原因 </text>
				{{baseInfo.invareason}}
			</view>
			<view class="info-list" >
				<text class="left">修改原因  </text>
				{{baseInfo.invaType}}
			</view>
			<view class="info-list" >
				<text class="left">备注</text>
				{{baseInfo.remark}}
			</view>
		</view>
		<!--游艇驾驶证-->
		<view class="info-list-box" v-if="type==5">
			<view class="info-list" >
				<text class="left">身份证号码</text>
				{{baseInfo.idCardNo}}
			</view>
			<view class="info-list" >
				<text class="left">性别 </text>
				{{baseInfo.sex}}
			</view>
			<view class="info-list" >
				<text class="left">姓名</text>
				{{baseInfo.name}}
			</view>
			<view class="info-list" >
				<text class="left">姓名拼音</text>
				{{baseInfo.nameSpell}}
			</view>
			<view class="info-list" >
				<text class="left">出生日期</text>
				{{baseInfo.birthDate}}
			</view>
			<view class="info-list" >
				<text class="left">	国籍  </text>
				{{baseInfo.nationality}}
			</view>
			<view class="info-list" >
				<text class="left">证书号码 </text>
				{{baseInfo.certNo}}
			</view>
			<view class="info-list" >
				<text class="left">证书印刷号</text>
				{{baseInfo.certPrintNo}}
			</view>
			
			<view class="info-list" >
				<text class="left">	证书状态 </text>
				{{baseInfo.certStatus}}
			</view>
			<view class="info-list" >
				<text class="left">签发机关 </text>
				{{baseInfo.issuOrgCode}}
			</view>
			<view class="info-list" >
				<text class="left">签发官员姓名 </text>
				{{baseInfo.issuOffiName}}
			</view>
			
			<view class="info-list" >
				<text class="left">是否无纸化  </text>
				{{baseInfo.isPaperless}}
			</view>
			<view class="info-list" >
				<text class="left">申请形式</text>
				{{baseInfo.applForm}}
			</view>
			<view class="info-list" >
				<text class="left">无效形式 </text>
				{{baseInfo.invaForm}}
			</view>
			<view class="info-list" >
				<text class="left">无效原因  </text>
				{{baseInfo.invaType}}
			</view>
			<view class="info-list" >
				<text class="left">作废人姓名 </text>
				{{baseInfo.invamanName}}
			</view>
			<view class="info-list" >
				<text class="left">作废日期 </text>
				{{baseInfo.invaDate}}
			</view>
			<view class="info-list" >
				<text class="left">作废原因 </text>
				{{baseInfo.invareason}}
			</view>
			<view class="info-list" >
				<text class="left">备注 </text>
				{{baseInfo.remark}}
			</view>
				 
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseInfo: {
					ship_reg_no:"船舶登记号",
					nation_version:"国籍版本号",
					temp_nation_flag:"是否临时国籍证书",
					language_type:"中英文类型",
					ship_operator_cn:"船舶经营人",
					ship_operator_addr_cn:"船舶经营人地址",
					operator_legal_person:"经营人法人代表",
					operator_contact_phone:"经营人联系电话",
					operator_postalcode:"经营人邮政编码",
					ship_manager_cn:"船舶管埋人",
					ship_manager_addr_cn:"船舶管理人地址",
					manager_legal_person:"管理人法人代表",
					manager_contact_phone:"管理人联系电话",
					manager_postalcode:"管理人邮政编码",
					ship_owner_cn:"船舶所有人",
					ship_owner_addr_cn:"船舶所有人地址",
					ship_operator_en:"英文船舶经营人",
					ship_operator_addr_en:"英文船舶经营人地址",
					ship_owner_en:"英文船舶所有人",
					ship_owner_addr_en:"英文船舶所有人地址",
					effective_date:"起始有效期",
					expire_date:"证书截止有效日期",
					cert_obtain_date:"取得日期",
					status_flag:"流转状态标志",
					print_flag:"打印标志",
					seal_flag:"印章标志",
					check_flag:"校核标志",
					issue_flag:"发放标志",
					org_code:"登记机构",
					cert_print_no:"证书印刷号",
					reg_deletion_no:"注诮登记号码",
					remark:"备注",
					creator_code:"创建员代码",
					create_time:"创建时间",
					operator_code:"操作员代码",
					operate_time:"操作时间",
					operate_flag:"操作标志",
					source_code:"源系统代码",
					data_org_code:"数据来源",
					create_date:"创建日期",
					creator:"创建记录的用户或进程",
					last_update_date:"最后更新日期",
					update_by:"最近更新的用户或进程",
					delete_flag:"删除标志1是0否",
					process_status:"landing 到 共享库的同步状态",
					pk_union:"联合主键拼装",
					import_time:"自动生成",
				},
				serial_no:'',
				type:'',
				hgzxm:[{}]
			}
		},
		onLoad(options) {
			uni.setNavigationBarTitle({
				title:options.name
			})
			this.serial_no=options.serial_no;
			this.type=options.type;
			console.log(this.serial_no);
			this.getBasesInfo();
		},
		methods: {
			getBasesInfo(){
				const that = this;
				that.api.requestNoLoading('/sea/q/detailNew?serial_no='+this.serial_no+'&type='+this.type)
					.then(res => {
						console.log('>>>'+JSON.stringify(res));
						if(res.code!=200){
							uni.showToast({
								title: res.message,
								icon:'none'
							});
							return;
						}
						that.baseInfo = res.result[0]; //变量名称参照更新后的文档
					});
			}
		}
	}
</script>

<style lang="scss">
@import '@/static/css/common';
</style>
