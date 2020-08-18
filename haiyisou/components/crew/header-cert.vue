<template>
<view class="page-header-search">
	<view class="header-search-box">
		<view class="search-time">
			<!-- <view class="search-btn" @click="toggleTime()">取得时间倒序</view> -->
		</view>
		<view class="search-else">
			<!--按时间切换显示该图标-->
			<view class="icon-more-else time">
				<!-- <image src="../../static/icon-time-01.png" /> -->
			</view>
			<!--按类型切换显示该图标-->
			<view class="icon-more-else type">
				<!-- <image src="../../static/icon-more-02.png" /> -->
			</view>
			<view class="filter-btn" @click="headerFilterVisible = true, layerMakerVisible = false, searchTimeVisible = false">筛选
				<view class="icon-more-else">
					<image src="../../static/icon-filter.png" />
				</view>
			</view>
		</view>
	</view>
	<HeaderFilter v-show="headerFilterVisible" @toggleFilterHide="toggleFilterHide"></HeaderFilter>
	<!-- <SearchTime v-if="searchTimeVisible" @toggleTime="toggleTime"></SearchTime> -->
	<LayerMaker v-if="layerMakerVisible"></LayerMaker>
</view>
</template>

<script>
import SearchTime from '@/components/crew/search-time';
import LayerMaker from '@/components/layer-maker';
import HeaderFilter from '@/components/crew/header-certfilter';
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
			headerFilterVisible: false,
			zszt:''
		}
	},
	methods: {
		toggleTime() {
			this.layerMakerVisible = !this.layerMakerVisible;
			this.searchTimeVisible = !this.searchTimeVisible;
		},
		toggleFilterHide(e){
			console.log('><><><>'+e.zszt);
			this.zszt=e.zszt;
			this.headerFilterVisible = false;
			this.$emit('getparams',this);
		}
	}
}
</script>

<style lang="scss">
@import '@/static/css/common';

</style>
