<template>
	<view class="page-search">
		
		<view class="search-tab">
			<view class="tab" :class="{'tab-cur' : tabIndex == 1}" @click="tabCutHandle(1)">
				<view class="tab-name">船舶</view>
				<view class="tab-bar"></view>
			</view>
			<view class="tab" :class="{'tab-cur' : tabIndex == 2}" @click="tabCutHandle(2)">
				<view class="tab-name">船员</view>
				<view class="tab-bar"></view>
			</view>
			<view class="tab" :class="{'tab-cur' : tabIndex == 3}" @click="tabCutHandle(3)">
				<view class="tab-name">危货属性</view>
				<view class="tab-bar">
				</view>
			</view>
		</view>
		<view class="search-box">
			<view class="search-bg" :class="{'search-bg-all':tabIndex!=1}">
				<view class="icon-search">
					<image src="../../static/icon-search.png" />
				</view>
				<input class="uni-input"  confirm-type="search" v-model="inputVal" placeholder="请输入关键字搜索" placeholder-class="place"
				 @input="searchHandle" @confirm="searchConfirm"/>
				<view class="icon-close" @click="closeInputVal" v-show="closeVisible">
					<image src="../../static/icon-close.png" />
				</view>
			</view>
			<view class="filter-btn" v-if="tabIndex==1" @click="headerFilterVisible = true, layerMakerVisible = false, searchTimeVisible = false">筛选
				<view class="icon-more-else">
					<image src="../../static/icon-filter.png" />
				</view>
			</view>
		</view>
		<scroll-view scroll-y="true"  @scrolltolower="onReachScollBottom" class="search-list">
			<!--暂时屏蔽热搜-->
			<!-- <SearchHot v-if="hotVisible"></SearchHot> -->
			<!-- <SearchApproximate v-if="approximateVisible"></SearchApproximate> -->
			<SearchNull v-if="nullVisible"></SearchNull>
			<SearchContainer v-if="containerVisible" :infoTabIndex="infoTabIndex" :searchKey="searchKey" :resultList="resultList"></SearchContainer>
		</scroll-view>
		<HeaderFilter  :shipTypeCode="shipTypeCode" :shipTypeList="shipTypeList"  v-show="headerFilterVisible" @toggleFilterHide="toggleFilterHide"></HeaderFilter>
		<LayerMaker v-if="layerMakerVisible"></LayerMaker>
	</view>
</template>

<script>
	import SearchTime from '@/components/crew/search-time';
	import LayerMaker from '@/components/layer-maker';
	import HeaderFilter from '@/components/crew/header-index';
	import SearchHot from '@/components/search/search-hot.vue';
	import SearchApproximate from '@/components/search/search-approximate.vue';
	import SearchNull from '@/components/search/search-null.vue';
	import SearchContainer from '@/components/search/search-container.vue';
	export default {
		components: {
			SearchHot,
			SearchApproximate,
			SearchNull,
			SearchContainer,
			SearchTime,
			LayerMaker,
			HeaderFilter
		},
		data() {
			return {
				scrolly:true,
				inputVal: "",
				tabIndex: 1, //当前检索ID
				closeVisible: false, //清空表单按钮是否展示
				hotVisible: true, //热门推荐模块展示
				approximateVisible: false, //搜索近似搜索框展示
				nullVisible: false, //无搜索信息模块展示
				containerVisible: false, //搜索列表模块展示
				isSearch: false, //
				infoTabIndex: {}, //当前搜索ID子模块传值
				resultList: [],
				searchKey: "",
				//分页
				page:1,
				length:10,
				start:0,
				searchTimeVisible: false,
				layerMakerVisible: false,
				headerFilterVisible: false,
				range:['',''],
				tchecked:'0',
				shipTypeList:[],
				shipTypeCode:''
			}
		},
		onLoad(options) {
			this.tabIndex = options.searchType;
			// if(this.tchecked=='0'){
			// 	this.range[0]=this.getTime(0);
			// 	this.range[1]='';
			// }
			this.getShipType();
			
		},
		methods: {
			getTime(day){
			　　var today = new Date();
			　　var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
			　　today.setTime(targetday_milliseconds); //注意，这行是关键代码
			　　var tYear = today.getFullYear();
			　　var tMonth = today.getMonth();
			　　var tDate = today.getDate();
			　　tMonth = this.doHandleMonth(tMonth + 1);
			　　tDate = this.doHandleMonth(tDate);
			　　return tYear+"/"+tMonth+"/"+tDate;
			},
			doHandleMonth(month){
			　　var m = month;
			　　if(month.toString().length == 1){
			　　　　m = "0" + month;
			　　}
			　　return m;
			},
			toggleFilterHide(e){
				console.log(">>"+e.range);
				this.range=e.range;
				this.shipTypeCode=e.shipTypeCode;
				this.headerFilterVisible = false;
				this.searchs();
			},
			onReachScollBottom(){
				this.page=this.page+1;
				console.log(">>>>>触底了");
				this.search();
				
			},
			tabCutHandle(index) {
				this.resultList=[];
				this.tabIndex = parseInt(index);
				this.infoTabIndex = parseInt(index);
			},
			closeInputVal() {
				this.inputVal = "";
				this.approximateVisible = false;
				this.hotVisible = true;
				this.closeVisible = false;
				this.containerVisible = false;
			},
			searchConfirm(event) {
				// this.page=1;
				// this.length=0;
				this.resultList=[];
				let val = event.detail.value.trim();
				this.searchKey = val;
				if (this.tabIndex == '1') {
					//船舶
					this.getcblist();
				} else if (this.tabIndex == '2') {
					//船员
					this.getcrlist();
				} else if (this.tabIndex == '3') {
					//危货
					this.getwhlist();
				}
				if (val.length) {
					this.containerVisible = true;
					this.approximateVisible = false;
					this.closeVisible = true;
					this.nullVisible = false;
				} else {
					this.hotVisible = false;
					this.nullVisible = true;
				}
				this.infoTabIndex = parseInt(this.tabIndex);
			},
			searchHandle(event) {
			this.resultList=[];
			let val = event.detail.value.trim();
			this.searchKey = val;
			if (this.tabIndex == '1') {
				//船舶
				this.getcblist();
			} else if (this.tabIndex == '2') {
				//船员
				this.getcrlist();
			} else if (this.tabIndex == '3') {
				//危货
				this.getwhlist();
			}
			if (val.length) {
				this.containerVisible = true;
				this.approximateVisible = false;
				this.closeVisible = true;
				this.nullVisible = false;
			} else {
				this.hotVisible = false;
				this.nullVisible = true;
			}
			this.infoTabIndex = parseInt(this.tabIndex);
			},
			//筛选回调
			searchs() {
			let val =this.searchKey;
			this.resultList=[];
			if (this.tabIndex == '1') {
				//船舶
				this.getcblist();
			} else if (this.tabIndex == '2') {
				//船员
				this.getcrlist();
			} else if (this.tabIndex == '3') {
				//危货
				this.getwhlist();
			}
			if (val.length) {
				this.containerVisible = true;
				this.approximateVisible = false;
				this.closeVisible = true;
				this.nullVisible = false;
			} else {
				this.hotVisible = false;
				this.nullVisible = true;
			}
			this.infoTabIndex = parseInt(this.tabIndex);
			},
			search() {
				let val =this.searchKey;
				if (this.tabIndex == '1') {
					//船舶
					this.getcblist();
				} else if (this.tabIndex == '2') {
					//船员
					this.getcrlist();
				} else if (this.tabIndex == '3') {
					//危货
					this.getwhlist();
				}
				if (val.length) {
					this.containerVisible = true;
					this.approximateVisible = false;
					this.closeVisible = true;
					this.nullVisible = false;
				} else {
					this.hotVisible = false;
					this.nullVisible = true;
				}
				this.infoTabIndex = parseInt(this.tabIndex);
			},
			getcrlist(){
				const that = this;
				//组装参数
				let params = {
					'parentId': ''
				};
				//请求后台数据
				that.api.request('/sea/crewList?keyword=' + this.searchKey + '&page='+this.page+'&length='+this.length, {}, "get")
					.then(res => {
						 console.log(JSON.stringify(res.result));
						if(res.code!=200){
							uni.showToast({
								title: res.msg,
								icon:'none'
							});
							return;
						}
						if(res.result[0].crewList.length>0){
							that.resultList=[...that.resultList, ...res.result[0].crewList];
						}else{
							uni.showToast({
								title: '没有更多数据了',
								icon:'none'
							});
						}
						if(that.resultList.length == 0){
							this.nullVisible = true;
							this.containerVisible = false;
						}else{
							this.nullVisible = false;
							this.containerVisible = true;
						}
					});
			},
			getcblist(){
				const that = this;
				//组装参数
				let params = {
					'parentId': ''
				};
				//请求后台数据
				that.api.request('/sea/shipList?keyword=' + this.searchKey + '&page='+this.page+'&length='+this.length+'&ship_type_code='+this.shipTypeCode+'&starttime='+this.range[0].replace("/", "-").replace("/", "-")+'&endtime='+this.range[1].replace("/", "-").replace("/", "-"), {}, "get")
					.then(res => {
						 // console.log(JSON.stringify(res));
						 //变量名称参照更新后的文档
						if(res.code!=200){
							uni.showToast({
								title: res.msg,
								icon:'none'
							});
							return;
						}
						if(res.result.length>0){
							that.resultList=[...that.resultList, ...res.result];
						}else{
							uni.showToast({
								title: '没有更多数据了',
								icon:'none'
							});
						}
						// that.baseInfo = res.result;//变量名称参照更新后的文档
						if(that.resultList.length == 0){
							this.nullVisible = true;
							this.containerVisible = false;
						}else{
							this.nullVisible = false;
							this.containerVisible = true;
						}
					});
			},
			getwhlist(){
				const that = this;
				//组装参数
				let params = {
					'parentId': ''
				};
				//请求后台数据
				that.api.request('/dg/query/goods?keyword=' + this.searchKey + '&page='+this.page+'&length='+this.length, {}, "get")
					.then(res => {
						// console.log('>>'+JSON.stringify(res));
						if(res.code!=200){
							uni.showToast({
								title: res.msg,
								icon:'none'
							});
							return;
						}
						if(res.result.length>0){
							that.resultList=[...that.resultList, ...res.result];
							// that.resultList = res.result; //变量名称参照更新后的文档
						}else{
							uni.showToast({
								title: '没有更多数据了',
								icon:'none'
							});
						}
						if(that.resultList.length == 0){
							this.nullVisible = true;
							this.containerVisible = false;
						}else{
							this.nullVisible = false;
							this.containerVisible = true;
						}
					});
			},
			getShipType(){
				const that = this;
				//组装参数
				let params = {
					'parentId': ''
				};
				//请求后台数据
				that.api.request('/sea/shipType', {}, "get")
					.then(res => {
						 console.log('>>'+JSON.stringify(res));
						if(res.code!=200){
							uni.showToast({
								title: res.msg,
								icon:'none'
							});
							return;
						}
						that.shipTypeList=res.result;
						
					});
			}
			
		}
	}
</script>

<style lang="scss">
	@import '@/static/css/common';
	
	.search-tab {
    background-color: #fff;
		color: #000000;
		display: flex;
		justify-content: space-around;
		height: 107rpx;
		align-items: center;
		line-height: 1;
		position: fixed;
		width: 100%;
		padding:20rpx 0;
		top: 0;
		z-index: 9;
		.tab-bar {
			display: none;
			height: 5rpx;
			border-radius: 3rpx;
			background-color: #3882F9;
			margin-top: 15rpx;
			position: absolute;
			width: 75rpx;
			left: 50%;
			margin-left: -37.5rpx;
		}

		.tab {
			width: 33.33%;
			text-align: center;
			position: relative;
			opacity: .7;
			font-size: 32rpx;
      font-weight: 400;
			&:last-child>.tab-bar {
				width: 150rpx;
				margin-left: -75rpx;
			}

			&.tab-cur {
				opacity: 1;
        font-size: 36rpx;
        color: #3882F9;
        font-weight: 600;
				>.tab-bar {
					display: block;
				}
			}
		}
	}

	.search-box {
	  border-top: 1rpx solid rgba(204,204,204,.6); background-color: #fff;	box-shadow:0px 8rpx 12rpx 0px rgba(10,55,82,0.1);padding: 30rpx 40rpx; box-sizing: border-box;
		position: fixed;
		display: flex;
		justify-content: space-between;	align-items: center; 
		width: 100%;
		z-index: 10;
		top: 0;
		margin-top: 106rpx + 4rpx;
    .filter-btn{ display: flex; align-items: center; border-left: 1rpx solid #ccc; margin-left: 30rpx; padding-left: 30rpx; font-size: 32rpx;
      .icon-more-else{ margin: 12rpx 0 0 14rpx;
        >image{width: 30rpx; height:30rpx;}
      }
    }
	
		.search-bg {
			width: calc( 100% - 180rpx );
			border-radius: 20rpx 20rpx 0 0;
			display: flex;
			align-items: center; position: relative;
			z-index: 10;
			.uni-input {
				background-color: #f0eff4;
				border-radius: 10rpx;
				height: 72rpx;
				line-height: 72rpx;
				padding-left: 80rpx;
				font-size: 28rpx;
				width: 100%;
        .uni-input-placeholder{ color:#aaa;}
			}
		}
		
		.search-bg-all {
			width: calc( 100%);
			border-radius: 20rpx 20rpx 0 0;
			display: flex;
			align-items: center; position: relative;
			z-index: 10;
			.uni-input {
				background-color: #f0eff4;
				border-radius: 10rpx;
				height: 72rpx;
				line-height: 72rpx;
				padding-left: 80rpx;
				font-size: 28rpx;
				width: 100%;
		.uni-input-placeholder{ color:#aaa;}
			}
		}
		
		.icon-search {
			position: absolute;
			margin-left: 20rpx;

			uni-image {
				z-index: 1;
			}

			>image {
				width: 32rpx;
				height: 32rpx;
			}
		}

		.icon-close {
			@extend .icon-search;
			margin-left: 0;
			right: 0;
			margin-right: 12rpx + 40rpx;
			margin-top: 4rpx;
		}
	}

	.search-list {
		margin-top: 106rpx + 136rpx;
		height: calc(100vh);
	}

	@media screen and (max-width: 320px) {
		.search-tab {
			padding-top: 40rpx;
		}

		.search-box {
			margin-top: 106rpx + 82rpx;
		}
	}

	/* #ifdef  MP-WEIXIN */
	.search-tab {
		padding: 0;
	}

	.search-box {
		margin-top: 106rpx;
	}

	/* #endif */
</style>
