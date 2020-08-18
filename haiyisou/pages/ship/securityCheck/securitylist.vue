<template>
  <view class="page-securitylist">
    <view class="crew-exam-aq-title">
      <!-- 当前页签直接在 page-crew-exam 上添加cur即可-->
      <view :class="tabsType == item.type?'page-crew-exam cur':'page-crew-exam'"  v-for="(item, index) in goodsList" :key="index" @click="getList(item.type)" >
        <view class="title">{{item.goodsTitle}}</view>
      </view>
    </view>
    <view class="securitylist-filter-box">
      <text>安全检查列表</text>
      <view class="filter-btn">筛选
        <view class="icon-more-else">
          <image src="../../../static/icon-filter.png" />
        </view>
      </view>
    </view>

    <view class="securitylist-module">
		<view class="securitylist" v-for="(item, index) in tableTilefsc" :key="index" @click="examInfo(item.domesticSecurityNumber,type)">
			<view class="security-title">
			  <view class="icon-num">{{index+1}}</view>
			  <view class="name">检查港口：{{item.portCode}}</view>
			</view>
			<view class="security-main">
			  <view class="info">缺陷数：
			    <view class="txt">{{item.numberOfDefects}} </view>
			  </view>
			  <view class="info">是否滞留：
			    <view class="txt">{{item.detentionMark}} </view>
			  </view>
			  <view class="info">初查复查标志：
			    <view class="txt green">{{item.preliminaryReviewSign}} </view>
			  </view>
			  <view class="info">检查日期：
			    <view class="txt">{{item.inspectDate}}</view>
			  </view>
			</view>
		</view>
		<view class="securitylist" v-for="(item, index) in tableTile" :key="index" @click="examInfo(item.inspectNo,type)">
			<view class="security-title">
			  <view class="icon-num">{{index+1}}</view>
			  <view class="name">检查港口：{{item.inspectOrg}}</view>
			</view>
			<view class="security-main">
			  <view class="info">缺陷数：
			    <view class="txt">{{item.numberOfDefects}} </view>
			  </view>
			  <view class="info">是否滞留：
			    <view class="txt">{{item.detentionMark}} </view>
			  </view>
			  <view class="info">初查复查标志：
			    <view class="txt green">{{item.preliminaryReviewSign}} </view>
			  </view>
			  <view class="info">检查日期：
			    <view class="txt">{{item.inspectDate}}</view>
			  </view>
			</view>
		</view>
      <!-- <view class="securitylist">
        <view class="security-title">
          <view class="icon-num">01</view>
          <view class="name">检查港口：漳州</view>
        </view>
        <view class="security-main">
          <view class="info">缺陷数：
            <view class="txt">1 </view>
          </view>
         
          <view class="info">是否滞留：
            <view class="txt">否 </view>
          </view>
          <view class="info">初查复查标志：
            <view class="txt green">初查 </view>
          </view>
          <view class="info">检查日期：
            <view class="txt">2017-01-11</view>
          </view>
        </view>
      </view>
      <view class="securitylist">
        <view class="security-title">
          <view class="icon-num">02</view>
          <view class="name">检查港口：漳州</view>
        </view>
        <view class="security-main">
          <view class="info">缺陷数：
            <view class="txt">1 </view>
          </view>
          <view class="info">是否滞留：
            <view class="txt">否 </view>
          </view>
          <view class="info">初查复查标志：
            <view class="txt blue">复查 </view>
          </view>
          <view class="info">检查日期：
            <view class="txt">2017-01-11</view>
          </view>
        </view>
      </view> -->
    </view>
  </view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList:[{
					goodsTitle:"船旗国安全检查（FSC）",
					type:'fsc'
				},{
					goodsTitle:"检现场监督检查",
					type:'xcjc'
					
				}],
				shipId:'',
				tabsType:'fsc',
				tableTile:[],
				tableTilefsc:[],
				
			};
			}
		,
		onLoad(options){
			this.shipId=options.shipId;
			this.getList(this.tabsType);
		},
		methods: {
			examInfo(id,type) {
				// console.log(declareId);
				type=this.tabsType;
				let url='';
				if(type==='fsc'){
					console.log('船舶fsc');
					url='/pages/ship/securityCheck/securityInfo?type='+type+'&id='+id+'&title=船旗国安全检查'
				}else{
					url='/pages/ship/securityCheck/securityInfo?type='+type+'&id='+id+'&title=现场监督检查'
				}
				uni.navigateTo({
					//url:'wh-info'
					url: url
				});
			},
			getList(type){
				this.tabsType=type;
				if(type==='fsc'){
					this.api.request('/sea/Secure/ShipflagState?shipId='+this.shipId,{},'GET').then(res=>{
						 console.log('>>'+JSON.stringify(res));
						console.log('>>'+JSON.stringify(res.result));
						this.tableTilefsc=res.result;
						
					})
				}else{
					this.api.request('/sea/Secure/getSiteSupervision?shipId='+this.shipId,{},'GET').then(res=>{
						// console.log('>>'+JSON.stringify(res));
						console.log('>>'+JSON.stringify(res.result));
						this.tableTilefsc=[];
						this.tableTile=res.result;
						
					})
				}
				
			}
			// goToExamList(type) {
			// 	uni.navigateTo({
			// 	     url:'/pages/ship/securityCheck/securityDeallist?shipId='+this.shipId+'&type='+type,
			// 		 fail:function(){
			// 			 console.info("跳转失败")
			// 		 }
			// 	});
			// }
		}
	}
</script>

<style lang="scss">
.page-securitylist{
  .sep{height:20rpx;background:rgba(240,239,244,1);}
}
.crew-exam-aq-title{ padding: 30rpx 40rpx; font-size: 28rpx; display: flex; justify-content: space-between; align-items: center; background-color: #F0EFF4;
  .page-crew-exam{ height: 70rpx; line-height: 70rpx; border:1px solid rgba(136,136,136,.6); border-radius:8px 0px 0px 8px; color:#191919; width: 50%; float: left; text-align: center;
    &:first-child{ border-right: 0;}
    &:last-child{ background-color:rgba(255,255,255,1); border:1px solid rgba(136,136,136,.6); border-left: 0; border-radius:0px 8px 8px 0px;}
    &.cur{ background-color: #3882F9; color:#fff; border-color: #3882F9;}
  }
}
.securitylist{ border-bottom: 10rpx solid rgba(240,239,244,1); padding: 30rpx 40rpx;
  .security-title{ border-bottom: 1rpx solid rgba(229,229,229,1); overflow: hidden; padding-bottom: 20rpx; margin-bottom: 26rpx;
    .icon-num{ float: left; height:48rpx; line-height:48rpx; text-align: center; width: 48rpx; background-color: rgba($color: #3882F9, $alpha: 0.1); border-radius:8px; font-size:24rpx; color:rgba(56,130,249,1); margin-right: 20rpx;}
    .name{font-size:36rpx; line-height: 48rpx;}
  }
  .security-main{ display: flex; flex-wrap: wrap;
    .info{ width: 50%; font-size: 28rpx; color:#666; display: flex; flex-wrap: wrap;line-height:1.5; opacity: .6; box-sizing: border-box;
      .green{ color:#30ADB5;}
      .blue{ color:#3882F9;}
      &:nth-child(odd){ border-right: 1rpx solid #E5E5E5;}
      &:nth-child(even){ padding-left: 22rpx;}
    }
  }
}
.securitylist-filter-box{ background-color: #F0EFF4; padding: 8rpx 40rpx 30rpx; display: flex; justify-content: space-between; font-size: 28rpx; color:#999; align-items: center;
  .filter-btn{ display: flex; align-items: center; font-size: 32rpx; color:#000;
    .icon-more-else{ width:28rpx;height:30rpx; margin-left: 15rpx; position: relative; z-index: 1;
      >image{ width: 100%; height:100%;}
    }
  }
}
</style>