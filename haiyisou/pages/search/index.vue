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
			<view class="search-bg">
				<view class="icon-search">
					<image src="../../static/icon-search.png" />
				</view>
				<input class="uni-input" confirm-type="search" v-model="inputVal" placeholder="请输入关键字搜索" placeholder-class="place"
				 @input="searchHandle" @confirm="searchConfirm" />
				<view class="icon-close" @click="closeInputVal" v-show="closeVisible">
					<image src="../../static/icon-close.png" />
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
	</view>
</template>

<script>
	import SearchHot from '@/components/search/search-hot.vue';
	import SearchApproximate from '@/components/search/search-approximate.vue';
	import SearchNull from '@/components/search/search-null.vue';
	import SearchContainer from '@/components/search/search-container.vue';
	export default {
		components: {
			SearchHot,
			SearchApproximate,
			SearchNull,
			SearchContainer
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
				length:5,
				start:0
			}
		},
		onLoad(options) {
			this.tabIndex = options.searchType;
		},
		methods: {
			onReachScollBottom(){
				this.page=this.page+1;
				this.start=this.start+5;
				console.log(">>>>>触底了");
				this.search();
				
			},
			tabCutHandle(index) {
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
				this.page=1;
				this.start=0;
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
				let val = event.detail.value.trim();
				if (val.length) {
					this.isSearch = true;
					this.approximateVisible = true;
					this.hotVisible = false;
					this.closeVisible = true;
					this.nullVisible = false;
				} else {
					this.isSearch = false;
					this.introductionVisible = false;
					this.hotVisible = true;
					this.approximateVisible = false;
					this.closeVisible = false;
					this.containerVisible = false;
				}
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
				that.api.requestNoLoading('/sea/crewList?keyword=' + this.searchKey + '&page='+this.page+'&length='+this.length+'&start='+this.start, {}, "get")
					.then(res => {
						// console.log(JSON.stringify(res.result));
						if(res.code!=200){
							uni.showToast({
								title: res.msg,
								icon:'none'
							});
							return;
						}
						if(res.result[0].crewList.length>0){
							that.resultList = res.result[0].crewList; //变量名称参照更新后的文档
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
				that.api.requestNoLoading('/sea/shipList?keyword=' + this.searchKey + '&page='+this.page+'&length='+this.length+'&start='+this.start, {}, "get")
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
				that.api.requestNoLoading('/dg/query/goods?keyword=' + this.searchKey + '&page='+this.page+'&length='+this.length+'&start='+this.start, {}, "get")
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
							that.resultList = res.result; //变量名称参照更新后的文档
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
			
		}
	}
</script>

<style lang="scss">
	.search-tab {
		background-color: #3882f9;
		color: #fff;
		display: flex;
		justify-content: space-around;
		height: 107rpx;
		align-items: center;
		line-height: 1;
		position: fixed;
		width: 100%;
		padding: 80rpx 0 20rpx;
		top: 0;
		z-index: 9;

		.tab-bar {
			display: none;
			height: 5rpx;
			border-radius: 3rpx;
			background-color: #fff;
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
			opacity: .8;
			font-size: 32rpx;

			&:last-child>.tab-bar {
				width: 150rpx;
				margin-left: -75rpx;
			}

			&.tab-cur {
				opacity: 1;

				>.tab-bar {
					display: block;
				}
			}
		}
	}

	.search-box {
		background-color: #3882f9;
		position: fixed;
		width: 100%;
		z-index: 10;
		top: 0;
		margin-top: 106rpx + 80rpx;

		.search-bg {
			background-color: #fff;
			border-radius: 20rpx 20rpx 0 0;
			padding: 30rpx 40rpx;
			display: flex;
			align-items: center;
			box-shadow: 0 5rpx 10rpx rgba(#0a3752, .1);
			position: relative;
			z-index: 10;

			.uni-input {
				background-color: #f0eff4;
				border-radius: 10rpx;
				height: 56rpx;
				line-height: 56rpx;
				padding-left: 80rpx;
				font-size: 28rpx;
				width: 100%;
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
		margin-top: 106rpx + 126rpx;
		height: calc(100vh);
	}

	@media screen and (max-width: 320px) {
		.search-tab {
			padding-top: 100rpx;
		}

		.search-box {
			margin-top: 106rpx + 100rpx;
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
