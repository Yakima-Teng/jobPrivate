<template>
	<view class="page-crew-proxy">
		<HeaderSearch @getparams="getparams"></HeaderSearch>
		<view class="cert-list">
			<!-- block v-for="(cItem, cIndex) in Object.keys(certList)" :key="cIndex" -->
				<view class="cert-item" v-for="(item, index) in newzsList" :key="index" @click="toCertInfo(item.serialNo,item.certType,item.name)">
					<view class="cert-title">
						<view class="cert-title-title">
							<view class="cert-title-image" >证</view>
							{{item.name}}
						</view>
						<view class="cert-title-icon"  :class="{'cert-title-icon-disabled':(item.certStatus=='无效')}" >{{item.certStatus}}</view>
					</view>
					<view class="cert-content">
						<view class="cert-content-title">证书编号：</view>
						<view class="cert-content-content">{{item.serialNo}}</view>
					</view>
					<view class="cert-content">
						<view class="cert-content-title">发放单位：</view>
						<view class="cert-content-content">{{item.issuOrgCode}}</view>
					</view>
					<view class="cert-content">
						<view class="cert-content-title">有效时间：</view>
						<view class="cert-content-content">
						{{item.issuDate.substring(0, 10)}}
						—
						{{item.invaDate==null?'永久':item.invaDate.substring(0, 10)}}
						</view>
					</view>
				</view>
			<!-- </block> -->
		</view>
	</view>
</template>
<script>
	import HeaderSearch from '@/components/crew/header-cert';
	export default {
		components: {
			HeaderSearch
		},
		data() {
			return {
				certList: {
					fwbList: [],
					hgzList: [],
					hgzitemList: [],
					gsbayList: [],
					hyzList: [],
					srzList: [],
					fzhsrzList: [],
					xhcsrzList: [],
					yhysrzList: [],
					nhxszgzList: [],
					ytjszList: [],
					jszgzList: [],
					nhgzList: [],
					nsrzList: [],
				},
				newzsList:[],
				idCardNo:'',
				cert_status:'',
			}
		},
		onLoad(options) {
			this.idCardNo=options.idCardNo;
			this.getBaseInfo();
		},
		methods: {
			getparams(e){
				this.cert_status=e.zszt;
				this.getBaseInfo()
			},
			toggleFilterHide(){
				this.headerFilterVisible = false;
			},
			toCertInfo(serial_no,type,name) {
				uni.navigateTo({
					url: './certinfo?serial_no='+serial_no+'&type='+type+'&name='+name
				})
			},
			/**
			 * @param {Object} idCard 		身份证号
			 * @param {Object} orderType	排序
			 * @param {Object} statusType	证书状态
			 * @param {Object} issuOrg		签发机构
			 */
			getBaseInfo(idCard, orderType, statusType, issuOrg){
				//请求后台数据
				const that = this;
				that.api.requestNoLoading('/sea/q/cNew?id_card_no=' + this.idCardNo+'&cert_status='+this.cert_status)
					.then(res => {
						console.log('>>>'+JSON.stringify(res));
						if(res.code!=200){
							uni.showToast({
								title: res.message,
								icon:'none'
							});
							return;
						}
						that.newzsList = res.result; //变量名称参照更新后的文档
					
						// that.baseInfo = res.result;//变量名称参照更新后的文档
				
					});
				/*const that = this;
				 //组装参数  改接口了
				let params = {'parentId': ''};
				let url ='/sea/q/c?id_card_no='+idCard+'&certType=0';
				if(orderType!=null){
					url += '&orderBy='+orderType
				}
				if(statusType != null){
					url += '&status='+statusType
				}
				if(issuOrg != null){
					url += '&issuOrg='+issuOrg
				}
				//请求后台数据
				that.api.requestNoLoading(url)
				.then(res => {
					// console.log(JSON.stringify(res));
					if(res.code!=200){
						uni.showToast({
							title: res.message,
							icon:'none'
						});
						return;
					}
					// that.baseInfo = res.result;//变量名称参照更新后的文档
					
					let result = res.result[0];
						
					that.certList.fwbList = result.fwbList;
					that.certList.hgzList = result.hgzList;
					that.certList.hgzitemList = result.hgzitemList;
					that.certList.gsbayList = result.gsbayList;
					that.certList.hyzList = result.hyzList;
					that.certList.srzList = result.srzList;
					that.certList.fzhsrzList = result.fzhsrzList;
					that.certList.xhcsrzList = result.xhcsrzList;
					that.certList.yhysrzList = result.yhysrzList;
					that.certList.nhxszgzList = result.nhxszgzList;
					that.certList.ytjszList = result.ytjszList;
					that.certList.jszgzList = result.jszgzList;
					that.certList.nhgzList = result.nhgzList;
					that.certList.nsrzList = result.nsrzList;
				});	 */
			},
			getTitle(type){
				// fwbList	服务簿
				// hgzList	海船合格证
				// hgzitemList	海船合格证项目
				// gsbayList	海船公司保安员证
				// hyzList	海员证
				// srzList	海船适任证
				// fzhsrzList	海船非自航适任证
				// xhcsrzList	小海船适任证
				// yhysrzList	引航员适任证
				// nhxszgzList	内河行驶资格证
				// ytjszList	游艇驾驶证
				// jszgzList	技术资格证
				// nhgzList	内河合格证
				// nsrzList	内河适任证
				if(type.indexOf('fwbList')>=0){
					return '服务簿';
				}else if(type.indexOf('hgzList')>=0){
					return '海船合格证';
				}else if(type.indexOf('hgzitemList')>=0){
					return '海船合格证项目';
				}else if(type.indexOf('gsbayList')>=0){
					return '海船公司保安员证';
				}else if(type.indexOf('hyzList')>=0){
					return '海员证';
				}else if(type.indexOf('srzList')>=0){
					return '海船适任证';
				}else if(type.indexOf('fzhsrzList')>=0){
					return '海船非自航适任证';
				}else if(type.indexOf('xhcsrzList')>=0){
					return '小海船适任证';
				}else if(type.indexOf('yhysrzList')>=0){
					return '引航员适任证';
				}else if(type.indexOf('nhxszgzList')>=0){
					return '内河行驶资格证';
				}else if(type.indexOf('ytjszList')>=0){
					return '游艇驾驶证';
				}else if(type.indexOf('jszgzList')>=0){
					return '技术资格证';
				}else if(type.indexOf('nhgzList')>=0){
					return '内河合格证';
				}else if(type.indexOf('nsrzList')>=0){
					return '内河适任证';
				}
			},
			toggleTimeSubset(index) {
				console.log("111111111111111111"+index);
				
				this.tabIndex = index;
				this.$emit('toggleTime');
			}
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/common';
	.cert-list {
		padding-top: 130rpx;


		}
		
</style>
