<template>
	<view >
		<uni-nav-bar backgroundColor="#FFFFFF" fixed="false" color="#000000" status-bar="true" title="连云港微海事" />

		<view style="margin-top: -10px;">
			<image src="../../static/images/index/header.jpg" mode="widthFix" style="width: 100%;" alt="" class="back-image"></image>
		</view>
		
		<view class='index__container'>
			<view class="scrolltabs">
			    <scroll-view class="tabs" id="tab-bar" style="-webkit-flex-wrap: nowrap;flex-wrap: nowrap;" :scroll-x="true" :show-scrollbar="false" :scroll-into-view="scrollInto">
          <view class="font-title-box">
            <view v-for="(item, index) in itemTabs" :key="index" :class="tabsType == index?'font-title-crude':'font-title'" :data-index='index' @click="ontabtap" >
              {{item.title}}
            </view>
          </view>
			    </scroll-view>
				<swiper :current="tabsType" class="swiper-box" style="flex: 1;" :duration="300" @change="ontabchange">
				    <swiper-item class="swiper-item">
						<view class="access-box" @click="toSearch(1)" >
							<uni-search-bar isDisable="true" class="search-bar" bgColor="#FFFFFF" boxShadow="1px 5px 5px #ccc" searchButton="none" radius="15" placeholder="请输入关键词查询" clearButton="auto" cancelButton="none" @confirm="search" />
						</view>
					</swiper-item>
					<swiper-item class="swiper-item">
						<view class="access-box" @click="toSearch(2)" >
							<uni-search-bar isDisable="true" class="search-bar" bgColor="#FFFFFF" boxShadow="1px 5px 5px #ccc" searchButton="none" radius="15" placeholder="请输入关键词查询" clearButton="auto" cancelButton="none" @confirm="search" />
						</view>
					</swiper-item>
					<swiper-item class="swiper-item">
						<view class="access-box" @click="toSearch(3)" >
							<uni-search-bar isDisable="true" class="search-bar" style="width: 90%;" bgColor="#FFFFFF" boxShadow="1px 5px 5px #ccc" searchButton="none" radius="15" placeholder="请输入关键词查询" clearButton="auto" cancelButton="none" @confirm="search" />
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="data-total">
				<view class="flex-row-between">
					<view class="data-total-title">数据总览</view>
					<view class="data-total-time">截止：2020-02-26 14:30</view>
				</view>
				<view class="flex-column" style="margin-top: 20rpx;padding: 0rpx 10rpx;">
					<view class="flex-row" style="margin-top: 10rpx;">
						<view class="flex-row-section section-rightborder">
							<view class="section-title">入港船舶/艘</view>
							<view class="section-content font-red">52</view>
							<view class="section-remark">较昨日<text class="font-red" >+24</text></view>
						</view>
						<view class="flex-row-section section-rightborder">
							<view class="section-title">出港船舶/艘</view>
							<view class="section-content font-orange">31</view>
							<view class="section-remark">较昨日<text class="font-orange" >+2</text></view>
						</view>
						<view class="flex-row-section">
							<view class="section-title">到达货物/吨</view>
							<view class="section-content font-violet">35502</view>
							<view class="section-remark">较昨日<text class="font-violet" >+2</text></view>
						</view>
					</view>
					<view class="flex-row" style="margin-top: 10rpx;">
						<view class="flex-row-section section-rightborder">
							<view class="section-title">发送货物/吨</view>
							<view class="section-content font-blue">24828</view>
							<view class="section-remark">较昨日<text class="font-blue" >+24</text></view>
						</view>
						<view class="flex-row-section section-rightborder">
							<view class="section-title">到达旅客/人</view>
							<view class="section-content font-green">8256</view>
							<view class="section-remark">较昨日<text class="font-green" >+262</text></view>
						</view>
						<view class="flex-row-section">
							<view class="section-title">发送旅客/吨</view>
							<view class="section-content font-pink">7256</view>
							<view class="section-remark">较昨日<text class="font-pink" >+162</text></view>
						</view>
					</view>
				</view>
			</view>
			<view>
				<image mode="aspectFit" src="../../static/images/index/index-rotation.png" style="width: 100%;height: 250rpx;"></image>
			</view>
			<view class="data-stats">
				<view class="flex-row-between">
					<view class="data-stats-title">数据统计</view>
					<view class="data-stats-time"></view>
				</view>
				<view class="flex-column" >
					<view class="flex-row-between section-item" >
						<view class="section-twenty">
							<image mode="aspectFit" src="../../static/images/index/index-icon-01.png" style="width: 80rpx;height: 80rpx;margin: 30rpx;"></image>
						</view>
						<view class="flex-column section-tighty">
							<view class="section-item-title">进出港业务分析</view>
							<view class="section-item-content">我是业务分析描述，我是业务分析描述，我是业务分析描述，我是业务分析描述</view>
						</view>
					</view>
					<view class="flex-row-between section-item">
						<view class="section-twenty">
							<image mode="aspectFit" src="../../static/images/index/index-icon-02.png" style="width: 80rpx;height: 80rpx;margin: 30rpx;"></image>
						</view>
						<view class="flex-column section-tighty">
							<view class="section-item-title">危防业务分析</view>
							<view class="section-item-content">我是业务分析描述，我是业务分析描述，我是业务分析描述，我是业务分析描述</view>
						</view>
					</view>
					<view class="flex-row-between section-item">
						<view class="section-twenty">
							<image mode="aspectFit" src="../../static/images/index/index-icon-03.png" style="width: 80rpx;height: 80rpx;margin: 30rpx;"></image>
						</view>
						<view class="flex-column section-tighty">
							<view class="section-item-title">船旗国安全检查分析</view>
							<view class="section-item-content">我是业务分析描述，我是业务分析描述，我是业务分析描述，我是业务分析描述</view>
						</view>
					</view>
					<view class="flex-row-between section-item">
						<view class="section-twenty">
							<image mode="aspectFit" src="../../static/images/index/index-icon-04.png" style="width: 80rpx;height: 80rpx;margin: 30rpx;"></image>
						</view>
						<view class="flex-column section-tighty">
							<view class="section-item-title">行政处罚管理</view>
							<view class="section-item-content">我是业务分析描述，我是业务分析描述，我是业务分析描述，我是业务分析描述</view>
						</view>
					</view>
				</view>
			</view>
		</view>	
		
		<uni-footer sponsor="连云港微海事"></uni-footer>
	</view>
</template>

<!-- <g-footer sponsor='德州民政局主办'></g-footer> -->

<script> 
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import uniFooter from '@/components/uni-footer/uni-footer.vue'
	
	export default {
		components:{
			uniNavBar,
			uniSearchBar,
			uniFooter
		},
	     data() {
			return {
				type: 'popup',
				//控制页面滚动动画效果的显示隐藏图
				isShowBg: true,
				value: '',
				//办理业务默认展示分类和选择展示分类 默认展示 我要办理
				tabsType: '0',
				scrollInto: '',
				itemTabs: [{
					val: "a0",
					title: "船舶",
				},{
					val: "a1",
					title: "船员",
				},{
					val: "a2",
					title: "危货属性",
				}],
				//待办任务数量
				taskNum:0,
			}
	    },	
	    //监听页面滑动事件
	    onPageScroll(e) {
			
	    },
	    onLoad(options) {
			console.log('App Show Index.VUE');
			// const _this = this;
			// wx.showLoading({
			// 	title: '正在加载...' // 数据请求前loading
			// })
			// //获取选择区域
			// //获取token
			// Promise.all([ 
				
			// ]).then(res=>{
							
			// }).then(res=>{
			// 	wx.hideLoading();
			// })
	    },
		methods: {
			ontabtap(e) {
			    let index = e.target.dataset.index || e.currentTarget.dataset.index;
			    this.switchTab(index);
			},
			ontabchange(e) {
			    let index = e.target.current || e.detail.current;
			    this.switchTab(index);
			},
			switchTab(index) {
			    if (this.tabsType === index) {
			        return;
			    }
		
				this.tabsType = index;
				this.scrollInto = this.itemTabs[index].val;
			},
			toSearch(searchType){
				let url = '';
				if(searchType == '1'){
					url = "/pages/search/index?searchType=1"
				}else if(searchType == '2'){
					url = "/pages/search/index?searchType=2"
				}else if(searchType == '3'){
					url = "/pages/search/index?searchType=3"
				}
				console.log(url);
				uni.navigateTo({
					url: url
				})
			},
			getZLXX(){
				const that = this;
				//组装参数
				let params = {'parentId': ''};
				//请求后台数据
				that.api.requestNoLoading('/sea/s/b?ship_reg_no='+ship_reg_no)
				.then(res => {
					console.log('>>'+JSON.stringify(res));
					if(res.code!=200){
						uni.showToast({
							title: res.message,
							icon:'none'
						});
						return;
					}
					that.baseInfo = res.result[0];
				});	
			}
		}
	}
</script>

<style lang="scss">
	swiper-item {
		display: block;
		overflow: hidden;
		will-change: transform;
		border-radius: 5px;
	}
	
	.index__container {
		position: relative;
		margin-top: -180rpx;
		padding-right: 40rpx;
		padding-left: 40rpx;
	}
	
	.access-box {
		margin: 20rpx 0rpx;
	}
	
	swiper {
		display: block;
		height: 130rpx;
	}
	
	.swiper-box {
		flex: 1;
	}
	
	.swiper-item {
		flex: 1;
		flex-direction: row;
	}
	
	.access-box {
		display: flex;
		background: #ffffff;
		box-shadow: 0 12rpx 18rpx 0 rgba(10, 55, 82, 0.1);
		border-radius: 10rpx;
		margin: 20rpx 3rpx 3rpx;
	}
.font-title-box{display: flex; justify-content: space-around; align-items:center; padding: 0 50rpx; color: #fffFFF; text-align: center;
  .font-title {	font-size: 32rpx;  padding-bottom: 12px; }
  .font-title-crude { position: relative; font-size: 36rpx; padding-bottom: 12rpx;
    &::after {
      content: ''; display: block; position: absolute; bottom: 0; margin-top: 12rpx; height: 5rpx; width: 48rpx; background-color: #FFFFFF;border-radius: 3rpx; left: 50%; margin-left: -25rpx;
    }
  }
}

	
	

	
	.data-total {
		margin-top: 50rpx;
	}
	
	.data-total-title {
		font-size: 40rpx;
		font-weight: bold;
	}
	
	.data-total-time {
		font-size: 22rpx;
		color: #707070;
	}
	
	.data-stats {}
	
	.data-stats-title {
		font-size: 40rpx;
		font-weight: bold;
		height: 100rpx;
	}
	
	/**************布局样式设置***********************/
	.flex-row {
		display: flex;
	}
	
	.flex-row-between {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.flex-row-section {
		-webkit-flex: 1;
		flex: 1;
		text-align: center;
	}
	
	.flex-column {
		display: flex;
		flex-direction: column;
	}
	
	.section-title {
		font-weight: 28rpx;
		color: #000000;
		margin: 14rpx 0rpx;
	}
	
	.section-rightborder::after {
		content: '';
		position: absolute;
		top: auto;
		height: 80rpx;
		width: 4rpx;
		background-color: #e5e5e5;
		margin-left: 110rpx;
		margin-top: -140rpx;
	}
	
	.section-content {
		font-weight: 30rpx;
		margin: 14rpx 0rpx;
	}
	
	.section-remark {
		font-size: 22rpx;
		color: #8f8f8f;
		margin: 14rpx 0rpx;
	}
	
	.section-twenty {
		width: 20%;
	}
	
	.section-eighty {
		width: 80%;
		text-align: left;
	}
	
	.section-item {
		height: 200rpx;
		border: 1rpx solid #f2f2f2;
		box-shadow: #ccc 1px 5px 5px 0rpx;
		border-radius: 15rpx;
		margin: 5rpx;
		align-items: flex-start;
		margin-bottom: 20px;
	}
	
	.section-item-title {
		font-size: 32rpx;
		font-weight: bold;
		margin: 16rpx 0rpx;
		margin-top: 40rpx;
	}
	
	.section-item-content {
		font-size: 25rpx;
		color: #b8b8b8;
	}
	
	/**************字体颜色设置***********************/
	.font-red {
		color: #cd2c2c;
	}
	
	.font-orange {
		color: #d9831f;
	}
	
	.font-violet {
		color: #5a5af1;
	}
	
	.font-blue {
		color: #3882f9;
	}
	
	.font-green {
		color: #389c86;
	}
	
	.font-pink {
		color: #ff6969;
	}
	
</style>
