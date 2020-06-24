<template>
<view class="page-header-search">
	<view class="header-search-box">
		<view class="search-time">
			<view class="search-btn" @click="toggleTime()">取得时间倒序</view>
		</view>
		<view class="search-else" @click="headerFilterVisible = true, layerMakerVisible = false, searchTimeVisible = false">
			<view class="icon-more-else">
				<image src="../../static/icon-more-02.png" />
			</view>
			<view class="filter-btn">筛选
				<view class="icon-more-else">
					<image src="../../static/icon-filter.png" />
				</view>
			</view>
		</view>
	</view>
	<HeaderFilter v-if="headerFilterVisible" @toggleFilterHide = "toggleFilterHide"></HeaderFilter>
	<SearchTime v-if="searchTimeVisible" @toggleTime="toggleTime"></SearchTime>
	<LayerMaker v-if="layerMakerVisible"></LayerMaker>
</view>
</template>

<script>
import SearchTime from './search-time';
import LayerMaker from '../layer-maker';
import HeaderFilter from './header-filter';
export default {
	components: {
	  SearchTime,
	  LayerMaker,
	  HeaderFilter
	},
	data() {
		return {
			searchTimeVisible: false,
			layerMakerVisible: false,
			headerFilterVisible: false
		}
	},
	methods: {
		toggleTime() {
			this.layerMakerVisible = !this.layerMakerVisible;
			this.searchTimeVisible = !this.searchTimeVisible;
		},
		toggleFilterHide(){
			this.headerFilterVisible = false;
		}
	}
}
</script>

<style lang="scss">
.page-header-search{ position: fixed; font-size:32rpx; width: 100%; box-sizing: border-box; z-index: 10;
	.header-search-box{ padding: 32rpx 40rpx; display: flex; background-color: #fff; justify-content: space-between; position: relative; box-shadow: 0 8rpx 12rpx rgba(#0a3752,.1); z-index:10;}
  .search-time{
    .search-btn{ color:#3882f9; display: flex; position: relative;
      &::after{content: ''; display: block; width: 0; height: 0; border: 6px solid transparent; border-top-color: #3882f9; position: absolute; right: -48rpx; top:18rpx;}
      &.cur{
        &::after{ top:0rpx; transform:rotate(180deg);}
      }
    }
  }
  .search-else{display: flex; line-height: 1;
    .icon-more-else{
      >image{ width: 40rpx; height:40rpx;}
    }
    .filter-btn{ display: flex; align-items: center; border-left: 1rpx solid #ccc; margin-left: 30rpx; padding-left: 30rpx;
      .icon-more-else{ margin: 12rpx 0 0 14rpx;
        >image{width: 30rpx; height:30rpx;}
      }
    }
  }
}
</style>
