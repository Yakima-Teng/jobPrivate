<template>
	<view class="page-crew-seniority">
		<HeaderSearch></HeaderSearch>
		<view class="seniority-container">
			<SunuiGrand v-for="(item,index) in senList" :key="index" :baseInfo="item" :sTime="item.offiOperTime+'-'+item.dismOperTime" :proList="properties"/>
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
	data(){
		return {
			properties:[
				{
					message:'适任证号码',
					property:'compCertNo'
				},{
					message:'任职英文船名',
					property:'offiShipNameEn'
				},{
					message:'任职中文文船名',
					property:'offiShipNameCn'
				},{
					message:'任职职务',
					property:'offiDuty'
				},{
					message:'任职地点',
					property:'offiLocationName'
				},{
					message:'任职日期',
					property:'offiDate'
				},{
					message:'任职资历来源',
					property:'offiSources'
				},{
					message:'解职地点',
					property:'dismissPlace'
				},{
					message:'解职日期',
					property:'dismissDate'
				},{
					message:'解职资历来源',
					property:'dismissSources'
				},{
					message:'船舶等级',
					property:'shipRank'
				},{
					message:'船舶类型',
					property:'shipClassCode'
				},{
					message:'航区',
					property:'naviArea'
				},{
					message:'有效状态',
					property:'validFlag'
				},
			],
			senList:[],//资历列表
		}
	},
	onLoad(options) {
		this.loadData(options.idCardNo);
	},
	methods: {
		loadData(idcard){
			let url = "/sea/q/s?id_card_no="+idcard;
			this.api.request(url,{},'get')
			.then(res=>{
				console.log('>>>'+JSON.stringify(res));
				if(res.code!=200){
					uni.showToast({
						title: res.message,
						icon:'none'
					});
					return;
				}
				this.senList = res.result;
			});
		},
	}
}
</script>

<style lang="scss">
@import '@/pages/crew/info';
</style>
