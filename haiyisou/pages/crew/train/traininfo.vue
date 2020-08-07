<template>
	<view class="page-crew-basic">
		<view class="info-title">简介信息</view>
		<view class="info-list-box">
			<view class="info-list" >
				<text class="left">船舶登记号</text>
				{{baseInfo.ship_reg_no}}
			</view>
			<view class="info-list" >
				<text class="left">国籍版本号</text>
				{{baseInfo.nation_version}}
			</view>
			<view class="info-list" >
				<text class="left">是否临时国籍证书</text>
				{{baseInfo.temp_nation_flag}}
			</view>
			<view class="info-list" >
				<text class="left">中英文类型</text>
				{{baseInfo.language_type}}
			</view>
			<view class="info-list" >
				<text class="left">船舶经营人</text>
				{{baseInfo.ship_operator_cn}}
			</view>
			<view class="info-list" >
				<text class="left">船舶经营人地址</text>
				{{baseInfo.ship_operator_addr_cn}}
			</view>
			<view class="info-list" >
				<text class="left">经营人法人代表</text>
				{{baseInfo.operator_legal_person}}
			</view>
			<view class="info-list" >
				<text class="left">经营人联系电话</text>
				{{baseInfo.operator_contact_phone}}
			</view>
			<view class="info-list" >
				<text class="left">经营人邮政编码</text>
				{{baseInfo.operator_postalcode}}
			</view>
			<view class="info-list" >
				<text class="left">船舶管埋人</text>
				{{baseInfo.ship_manager_cn}}
			</view>
			<view class="info-list" >
				<text class="left">船舶管理人地址</text>
				{{baseInfo.ship_manager_addr_cn}}
			</view>
			<view class="info-list" >
				<text class="left">管理人法人代表</text>
				{{baseInfo.manager_legal_person}}
			</view>
			<view class="info-list" >
				<text class="left">管理人联系电话</text>
				{{baseInfo.manager_contact_phone}}
			</view>
			<view class="info-list" >
				<text class="left">管理人邮政编码</text>
				{{baseInfo.manager_postalcode}}
			</view>
			<view class="info-list" >
				<text class="left">船舶所有人</text>
				{{baseInfo.ship_owner_cn}}
			</view>
			<view class="info-list" >
				<text class="left">船舶所有人地址</text>
				{{baseInfo.ship_owner_addr_cn}}
			</view>
			<view class="info-list" >
				<text class="left">英文船舶经营人</text>
				{{baseInfo.ship_operator_en}}
			</view>
			<view class="info-list" >
				<text class="left">英文船舶经营人地址</text>
				{{baseInfo.ship_operator_addr_en}}
			</view>
			<view class="info-list" >
				<text class="left">英文船舶所有人</text>
				{{baseInfo.ship_owner_en}}
			</view>
			<view class="info-list" >
				<text class="left">英文船舶所有人地址</text>
				{{baseInfo.ship_owner_addr_en}}
			</view>
			<view class="info-list" >
				<text class="left">起始有效期</text>
				{{baseInfo.effective_date}}
			</view>
			<view class="info-list" >
				<text class="left">证书截止有效日期</text>
				{{baseInfo.expire_date}}
			</view>
			<view class="info-list" >
				<text class="left">取得日期</text>
				{{baseInfo.cert_obtain_date}}
			</view>
			<view class="info-list" >
				<text class="left">流转状态标志</text>
				{{baseInfo.status_flag}}
			</view>
			<view class="info-list" >
				<text class="left">打印标志</text>
				{{baseInfo.print_flag}}
			</view>
			<view class="info-list" >
				<text class="left">印章标志</text>
				{{baseInfo.seal_flag}}
			</view>
			<view class="info-list" >
				<text class="left">校核标志</text>
				{{baseInfo.check_flag}}
			</view>
			<view class="info-list" >
				<text class="left">发放标志</text>
				{{baseInfo.issue_flag}}
			</view>
			<view class="info-list" >
				<text class="left">登记机构</text>
				{{baseInfo.org_code}}
			</view>
			<view class="info-list" >
				<text class="left">证书印刷号</text>
				{{baseInfo.cert_print_no}}
			</view>
			<view class="info-list" >
				<text class="left">注诮登记号码</text>
				{{baseInfo.reg_deletion_no}}
			</view>
			<view class="info-list" >
				<text class="left">备注</text>
				{{baseInfo.remark}}
			</view>
			<view class="info-list" >
				<text class="left">创建员代码</text>
				{{baseInfo.creator_code}}
			</view>
			<view class="info-list" >
				<text class="left">创建时间</text>
				{{baseInfo.create_time}}
			</view>
			<view class="info-list" >
				<text class="left">操作员代码</text>
				{{baseInfo.operator_code}}
			</view>
			<view class="info-list" >
				<text class="left">操作时间</text>
				{{baseInfo.operate_time}}
			</view>
			<view class="info-list" >
				<text class="left">操作标志</text>
				{{baseInfo.operate_flag}}
			</view>
			<view class="info-list" >
				<text class="left">源系统代码</text>
				{{baseInfo.source_code}}
			</view>
			<view class="info-list" >
				<text class="left">数据来源</text>
				{{baseInfo.data_org_code}}
			</view>
			<view class="info-list" >
				<text class="left">创建日期</text>
				{{baseInfo.create_date}}
			</view>
			<view class="info-list" >
				<text class="left">创建记录的用户或进程</text>
				{{baseInfo.creator}}
			</view>
			<view class="info-list" >
				<text class="left">最后更新日期</text>
				{{baseInfo.last_update_date}}
			</view>
			<view class="info-list" >
				<text class="left">最近更新的用户或进程</text>
				{{baseInfo.update_by}}
			</view>
			<view class="info-list" >
				<text class="left">删除标志1是0否</text>
				{{baseInfo.delete_flag}}
			</view>
			<view class="info-list" >
				<text class="left">landing 到 共享库的同步状态</text>
				{{baseInfo.process_status}}
			</view>
			<view class="info-list" >
				<text class="left">联合主键拼装</text>
				{{baseInfo.pk_union}}
			</view>
			<view class="info-list" >
				<text class="left">自动生成</text>
				{{baseInfo.import_time}}
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
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
@import '@/static/css/common';
</style>
