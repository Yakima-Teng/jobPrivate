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
        <view class="tab-bar"></view>
      </view>
    </view>
    <view class="search-box">
      <view class="search-bg">
        <view class="icon-search">
          <image src="../../static/icon-search.png" />
        </view>
        <input class="uni-input" confirm-type="search" v-model="inputVal" placeholder="请输入关键字搜索" placeholder-class="place" @input="searchHandle" @confirm="searchContainer"/>
        <view class="icon-close" @click="closeInputVal" v-show="closeVisible">
          <image src="../../static/icon-close.png" />
        </view>
      </view>
			<view class="search-introduction">为您找到<text class="search-val">&#35;伟</text>相关结果<text class="search-number">1888</text>条</view>
    </view>
		<view class="search-list">
      <SearchHot v-show="hotVisible"></SearchHot>
      <SearchApproximate v-if="approximateVisible"></SearchApproximate>
      <SearchNull v-show="nullVisible"></SearchNull>
      <SearchContainer v-show="containerVisible" :infoTabIndex = "infoTabIndex"></SearchContainer>
		</view>
	</view>
</template>

<script>
import SearchHot from '../../components/search/search-hot.vue';
import SearchApproximate from '../../components/search/search-approximate.vue';
import SearchNull from '../../components/search/search-null.vue';
import SearchContainer from '../../components/search/search-container.vue';
export default {
components: {
  SearchHot,
  SearchApproximate,
  SearchNull,
  SearchContainer
},
data() {
  return {
    inputVal: "",
    tabIndex: 1,
    closeVisible: false,
    hotVisible: true,
    approximateVisible: false,
    nullVisible: false,
    containerVisible: false,
    isSearch: false,
		infoTabIndex:{}
  }
},
onLoad() {

},

methods: {
  tabCutHandle(index){
		this.tabIndex = index;
		this.infoTabIndex = index;
  },
  closeInputVal(){
    this.inputVal = "";
    this.approximateVisible = false;
    this.hotVisible = true;
    this.closeVisible = false;
    this.containerVisible = false;
  },
  searchContainer(event){
    let val = event.detail.value.trim();
    if(val.length){
      this.containerVisible = true;
      this.approximateVisible = false;
      this.closeVisible = true;
    }
		this.infoTabIndex = this.tabIndex;
  },
  searchHandle(event){
    let val = event.detail.value.trim();
    if(val.length){
      this.isSearch = true;
      this.approximateVisible = true;
      this.hotVisible = false;
      this.closeVisible = true;
			this.containerVisible = false;
    }else{
      this.isSearch = false;
      this.hotVisible = true;
      this.approximateVisible = false;
      this.closeVisible = false;
    }
  }
}
}
</script>

<style lang="scss">
.search-tab{ background-color: #3882f9; color:#fff; display: flex; justify-content: space-around; height: 107rpx; align-items:center; line-height: 1; position: fixed; width: 100%; top: 88rpx;
  .tab-bar{ display: none; height:5rpx; border-radius:3rpx; background-color: #fff; margin-top: 15rpx; position: absolute; width: 75rpx; left:50%; margin-left: -37.5rpx;}
  .tab{ width: 33.33%; text-align: center; position: relative; opacity: .8; font-size:32rpx;
    &:last-child>.tab-bar{ width: 150rpx; margin-left: -75rpx;}
    &.tab-cur{ opacity: 1;
      >.tab-bar{ display: block; }
    }
  }
}
.search-box{background-color: #3882f9; position: fixed;width: 100%; top: 106rpx + 88rpx;
  .search-bg{ background-color: #fff; border-radius:20rpx 20rpx 0 0; padding: 30rpx 40rpx; display: flex; align-items: center; box-shadow: 0 5rpx 10rpx rgba(#0a3752,.1); position: relative; z-index: 10;
    .uni-input{ background-color: #f0eff4; border-radius: 10rpx; height:56rpx; line-height:56rpx; padding-left: 80rpx; font-size: 28rpx; width: 100%;}
  }
  .icon-search{ position: absolute; margin-left: 20rpx;
		uni-image{ z-index: 1;}
    >image{ width: 32rpx; height:32rpx;}
  }
  .icon-close{ @extend .icon-search; margin-left: 0; right:0; margin-right: 12rpx + 40rpx; margin-top: 4rpx;}
	.search-introduction{ font-size:24rpx; color:#999; padding: 25rpx 0; background-color: #fff; padding:27rpx 40rpx;
	  >text{ margin:0 10rpx;}
	  .search-val{ color:#3882f9;}
	  .search-number{ color:#e23232;}
	}
}
.search-list{ margin-top: 200rpx + 106rpx;}
</style>
