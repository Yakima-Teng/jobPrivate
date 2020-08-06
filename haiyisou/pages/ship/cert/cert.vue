<template>
	<view class="page-crew-proxy">
		<!-- <HeaderSearch></HeaderSearch> -->
		<!-- <listNull v-if="resultNull"></listNull> -->
		<view class="cert-list">
			<view class="cert-item" v-for="(item, index) in gjList" :key="index" @click="toCertInfo('gj')">
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
			<view class="cert-item" v-for="(item, index) in syqList" :key="index" @click="toCertInfo('syq')">
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
			<view class="cert-item" v-for="(item, index) in gzcList" :key="index" @click="toCertInfo('gzc')">
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
			<view class="cert-item" v-for="(item, index) in gscList" :key="index" @click="toCertInfo('gsc')">
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
			<view class="cert-item" v-for="(item, index) in fgcList" :key="index" @click="toCertInfo('fgc')">
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
			<view class="cert-item" v-for="(item, index) in dyqList" :key="index" @click="toCertInfo('dyq')">
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
			<view class="cert-item" v-for="(item, index) in jyqList" :key="index" @click="toCertInfo('cbjy',index)">
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
	import HeaderSearch from '@/components/crew/header-search';
	import listNull from '@/components/search/list-null.vue';
	export default {
		components: {
			HeaderSearch,
			listNull
		},
		data() {
			return {
				gjList: [{
					title: '船舶国籍证书',
					isuse: true,
					certPrintNo: '32010219850526321X',
					orgCode: '山东海事局',
					expireDate: '2013/01/01-永久'
				}],
				syqList:[],
				gzcList:[],
				gscList:[],
				fgcList:[],
				dyqList:[],
				jyqList:[],
				shipRegNo:'',
				shipId:'',
				resultNull:false
			}
		},
		onLoad(options) {
			this.shipRegNo=options.shipRegNo;
			this.shipId=options.shipId;
			this.getZsList();
			this.getjyZsList();
		},
		methods: {
			getZsList(){
				this.api.request('/sea/s/c?ship_reg_no='+this.shipRegNo).then(res=>{
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
				this.api.request('/sea/cj/cjCertificated?ship_id='+this.shipId).then(res=>{
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
			toCertInfo(zstype,index) {
				// //缓存船舶校验详情
				// if(zstype==='cbjy'){
				// 	console.log('>>缓存'+JSON.stringify(this.jyqList[index]));
				// 	uni.setStorage('index',index);
				// 	wx.setStorageSync('index',index);
				// }
				uni.navigateTo({
					url: './certinfo?zstype='+zstype+'&shipRegNo='+this.shipRegNo+'&index='+index+'&ship_id='+this.shipId
				})
			}
		}
	}
</script>

<style lang="scss">
	.cert-list {
		padding-top: 130rpx;
		padding-left: 30rpx;
		padding-right: 30rpx;

		.cert-item {
			padding-bottom: 30rpx;
			border-bottom: 0.5px solid #ddd;

			.cert-title {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20rpx 0rpx;

				.cert-title-image {
					margin-right: 18rpx;
					border: 1rpx solid #519DEB;
					border-radius: 40rpx;
					background-color: #519DEB;
					width: 60rpx;
					height: 60rpx;
					font-size: 30rpx;
					text-align: center;
					line-height: 60rpx;
					color: #FFFFFF;
					flex-direction: row;
					justify-content: center;
					align-items: center;
				}

				.cert-title-title {
					display: flex;
					align-items: center;
					font-size: 38rpx;
					font-weight: bold;
				}

				.cert-title-icon {
					padding: 10rpx 30rpx;
					background-color: #E4EBFD;
					border-radius: 25rpx;
					color: #519DEB;
				}
			}

			.cert-content {
				display: flex;
				color: #666666;
				padding: 5rpx 0rpx;

				.cert-content-title {}

				.cert-content-content {}
			}
		}
	}
</style>
