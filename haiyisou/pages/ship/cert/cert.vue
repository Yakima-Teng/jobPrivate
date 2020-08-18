<template>
	<view class="page-crew-proxy">
		<HeaderSearch @getparams="getparams"></HeaderSearch>
		<!-- <listNull v-if="resultNull"></listNull> -->
		<view class="cert-list" style="padding: 110rpx 40rpx 40rpx;">
			<view class="cert-item" v-for="(item, index) in gjList" :key="index" @click="toCertInfo('gj',item.certName)">
				<view class="cert-title">
					<view class="cert-title-title">
						<view class="cert-title-image">证</view>
						{{item.certName}}
					</view>
					<view class="cert-title-icon">{{item.statusFlag}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">证书编号：</view>
					<view class="cert-content-content">{{item.certPrintNo}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">发放单位：</view>
					<view class="cert-content-content">{{item.orgCode}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">有效时间：</view>
					<view class="cert-content-content">{{(item.expireDate)==null ? '--':(item.expireDate).substring(0,10)}}</view>
				</view>
			</view>
			<view class="cert-item" v-for="(item, index) in syqList" :key="index" @click="toCertInfo('syq',item.certName)">
				<view class="cert-title">
					<view class="cert-title-title">
						<view class="cert-title-image">证</view>
						{{item.certName}}
					</view>
					<view class="cert-title-icon">{{item.statusFlag}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">证书编号：</view>
					<view class="cert-content-content">{{item.certPrintNo}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">发放单位：</view>
					<view class="cert-content-content">{{item.orgCode}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">有效时间：</view>
					<view class="cert-content-content">{{item.expireDate==null ? '--':(item.expireDate).substring(0,10)}}</view>
				</view>
			</view>
			<view class="cert-item" v-for="(item, index) in gzcList" :key="index" @click="toCertInfo('gzc',item.certName)">
				<view class="cert-title">
					<view class="cert-title-title">
						<view class="cert-title-image">证</view>
						{{item.certName}}
					</view>
					<view class="cert-title-icon">{{item.statusFlag}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">证书编号：</view>
					<view class="cert-content-content">{{item.certPrintNo}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">发放单位：</view>
					<view class="cert-content-content">{{item.orgCode}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">有效时间：</view>
					<view class="cert-content-content">{{item.expireDate==null ? '--':(item.expireDate).substring(0,10)}}</view>
				</view>
			</view>
			<view class="cert-item" v-for="(item, index) in gscList" :key="index" @click="toCertInfo('gsc',item.certName)">
				<view class="cert-title">
					<view class="cert-title-title">
						<view class="cert-title-image">证</view>
						{{item.certName}}
					</view>
					<view class="cert-title-icon">{{item.statusFlag}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">证书编号：</view>
					<view class="cert-content-content">{{item.certPrintNo}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">发放单位：</view>
					<view class="cert-content-content">{{item.orgCode}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">有效时间：</view>
					<view class="cert-content-content">{{item.expireDate==null ? '--':(item.expireDate).substring(0,10)}}</view>
				</view>
			</view>
			<view class="cert-item" v-for="(item, index) in fgcList" :key="index" @click="toCertInfo('fgc',item.certName)">
				<view class="cert-title">
					<view class="cert-title-title">
						<view class="cert-title-image">证</view>
						{{item.certName}}
					</view>
					<view class="cert-title-icon">{{item.statusFlag}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">证书编号：</view>
					<view class="cert-content-content">{{item.certPrintNo}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">发放单位：</view>
					<view class="cert-content-content">{{item.orgCode}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">有效时间：</view>
					<view class="cert-content-content">{{item.expireDate==null ? '--':(item.expireDate).substring(0,10)}}</view>
				</view>
			</view>
			<view class="cert-item" v-for="(item, index) in dyqList" :key="index" @click="toCertInfo('dyq',item.certName)">
				<view class="cert-title">
					<view class="cert-title-title">
						<view class="cert-title-image">证</view>
						{{item.certName}}
					</view>
					<view class="cert-title-icon">{{item.statusFlag}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">证书编号：</view>
					<view class="cert-content-content">{{item.certPrintNo}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">发放单位：</view>
					<view class="cert-content-content">{{item.orgCode}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">有效时间：</view>
					<view class="cert-content-content">{{item.expireDate==null ? '--':(item.expireDate).substring(0,10)}}</view>
				</view>
			</view>
			<view class="cert-item" v-for="(item, index) in jyqList" :key="index" @click="toCertInfo('cbjy',item.certName,index)">
				<view class="cert-title">
					<view class="cert-title-title">
						<view class="cert-title-image">证</view>
						{{item.certName}}
					</view>
					<view class="cert-title-icon">{{item.statusFlag}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">证书编号：</view>
					<view class="cert-content-content">{{item.certId}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">发放单位：</view>
					<view class="cert-content-content">{{item.certIssuedOrg}}</view>
				</view>
				<view class="cert-content">
					<view class="cert-content-title">有效时间：</view>
					<view class="cert-content-content">{{item.certDuedate==null ? '--':(item.certDuedate).substring(0,10)}}</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import HeaderSearch from '@/components/crew/header-cert';
	import listNull from '@/components/search/list-null.vue';
	export default {
		components: {
			HeaderSearch,
			listNull
		},
		data() {
			return {
				gjList: [],
				syqList:[],
				gzcList:[],
				gscList:[],
				fgcList:[],
				dyqList:[],
				jyqList:[],
				shipRegNo:'',
				shipId:'',
				resultNull:false,
				certStatus:''
			}
		},
		onLoad(options) {
			this.shipRegNo=options.shipRegNo;
			this.shipId=options.shipId;
			this.getZsList();
			this.getjyZsList();
		},
		methods: {
			getparams(e){
				console.log('>>??'+e.zszt);
				this.certStatus=e.zszt;
				this.getZsList();
				this.getjyZsList()
			},
			getZsList(){
				this.api.request('/sea/s/c?ship_reg_no='+this.shipRegNo+'&certStatus='+this.certStatus).then(res=>{
					if(res.code!=200){
						uni.showToast({
							title: res.message,
							icon:'none'
						});
						return;
					}
				    this.gjList=res.result[0].gjList;
					this.syqList=res.result[0].syqList;
					this.gzcList=res.result[0].gzcList;
					this.gscList=res.result[0].gscList;
					this.fgcList=res.result[0].fgcList;
					this.dyqList=res.result[0].dyqList;
					// this.resultNull=true;
				})
			},
			getjyZsList(){
				this.api.request('/sea/cj/cjCertificated?ship_id='+this.shipId+'&cert_status='+this.certStatus).then(res=>{
					console.log(JSON.stringify(res.result));
					if(res.code!=200){
						uni.showToast({
							title: res.message,
							icon:'none'
						});
						return;
					}
				    this.jyqList=res.result;
				})
			},
			toCertInfo(zstype,name,index) {
				// //缓存船舶校验详情
				// if(zstype==='cbjy'){
				// 	console.log('>>缓存'+JSON.stringify(this.jyqList[index]));
				// 	uni.setStorage('index',index);
				// 	wx.setStorageSync('index',index);
				// }
				uni.navigateTo({
					url: './certinfo?zstype='+zstype+'&shipRegNo='+this.shipRegNo+'&index='+index+'&ship_id='+this.shipId+'&name='+name
				})
			}
		}
	}
</script>

<style lang="scss">
@import '@/static/css/common';
</style>
