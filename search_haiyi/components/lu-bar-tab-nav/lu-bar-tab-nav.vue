<template>
	<view :id="'luBarTabNav'+barId" class="lu-bar-tab-nav">
		<view class="lu-tab-box">
			<view v-if="!!barFixed" id="luTabFixed" class="lu-bar-tab lu-bar-tab-fixed" :style="{ top: barTopStyles,height:barHeightStyles,display:barShowStyles }">
				<view class="lu-tab-item" v-for="(item,index) in tabList" :key="index" :class="[selectedIndex==index? 'lu-active' : '',!!iconShow? 'lu-icon-show' : '']"
				 :style="selectedIndex==index?tabActiveStyles:tabStyles" @tap="_scrollToTarget(index)">
					<view v-if="!!iconShow" class="lu-tab-icon" :class="selectedIndex==index?item.selectedIconClass:item.iconClass"
					 :style="selectedIndex==index?(!!item.selectedIconImage?'backgroundImage:url('+item.selectedIconImage+')':''):(!!item.iconImage?'backgroundImage:url('+item.iconImage+')':'')">
					</view>
					<view class="lu-tab-text">{{item.text}}</view>
				</view>
			</view>
		</view>
		<view class="lu-tab-box">
		<view id="luTabStatic" class="lu-bar-tab lu-bar-tab-static" :style="{height:barHeightStyles}">
			<view class="lu-tab-item" v-for="(item,index) in tabList" :key="index" :class="[selectedIndex==index? 'lu-active' : '',!!iconShow? 'lu-icon-show' : '']"
			 :style="selectedIndex==index?tabActiveStyles:tabStyles" @tap="_scrollToTarget(index)">
				<view v-if="!!iconShow" class="lu-tab-icon" :class="selectedIndex==index?item.selectedIconClass:item.iconClass"
				 :style="selectedIndex==index?(!!item.selectedIconImage?'backgroundImage:url('+item.selectedIconImage+')':''):(!!item.iconImage?'backgroundImage:url('+item.iconImage+')':'')">
				</view>
				<view class="lu-tab-text">{{item.text}}</view>
			</view>
		</view>
		</view>
		<view class="lu-tab-content">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'lu-bar-tab-nav',
		props: {
			barFixed: {
				type: Boolean,
				default: true
			},
			iconShow: {
				type: Boolean,
				default: false
			},
			transitionShow: {
				type: Boolean,
				default: false
			},
			barHeight: {
				type: [String, Number],
				default: 44
			},
			barTop: {
				type: [String, Number],
				default: 0
			},
			barId: {
				type: [String, Number],
				default: 0
			},
			tabList: {
				type: Array,
				default: function() {
					return [{
						//text:"text",
						//navTarget:"#item1",
						// iconClass:"iconClass",
						// iconImage:"iconImage",
						// selectedIconClass:"selectedIconClass",
						//selectedIconImage:"selectedIconImage"
					}]
				}
			}

		},
		data() {
			return {
				barShow: false,
				selectedIndex: 0,
			};
		},
		computed: {
			tabStyles: function() {
				return (!!this.color ? 'color:' + this.color + ';' : '') + (!!this.backgroundColor ? 'backgroundColor:' + this.backgroundColor +
					';' : '');
			},
			tabActiveStyles: function() {
				return (!!this.selectedColor ? 'color:' + this.selectedColor + ';' : '') + (!!this.selectedBackgroundColor ?
					'backgroundColor:' + this.selectedBackgroundColor + ';' : '');
			},
			barTopStyles: function() {
				// #ifndef H5
				return 'calc(' + this.barTop + 'px);';
				// #endif
				// #ifdef H5
				return 'calc(' + this.barTop + 'px + var(--window-top));';
				// #endif
			},
			barHeightStyles: function() {
				return this.barHeight ? this.barHeight + 'px' : '44px';
			},
			barShowStyles: function() {
				return !this.barShow ? 'none' : '';
			},
		},
		methods: {
			_barInit: async function(index) {
				let navTargetTop = [];
				let duration = 0;
				let viewScrollTop = 0;
				let viewHeight = 0;
				for (let i = 0, len = this.tabList.length; i < len; i++) {
					navTargetTop[i] = await this._queryMultipleNodes(this.tabList[i]["navTarget"]).then(res => {
						let navTarget = res[0],
							viewPort = res[1];
						viewHeight = viewPort.height;
						viewScrollTop = viewPort.scrollTop;
            const scrollTop = parseInt(navTarget.top) + viewPort.scrollTop - this.barTop - this.barHeight - 110;
						return scrollTop;
					});
				}
				if (!!this.transitionShow) {
					duration = 200;
				}
				return {
					navTargetTop: navTargetTop,
					duration: duration,
					viewHeight: viewHeight,
					viewScrollTop: viewScrollTop
				};
       
			},
			_pageScroll: async function(i) {
				const elment = await this._barInit(i);
				let scrollTop = elment["navTargetTop"][i];
				let duration = elment["duration"];
				let viewHeight = elment["viewHeight"];
				let viewScrollTop = elment["viewScrollTop"];
				if (Math.abs(scrollTop - viewScrollTop) > viewHeight) {
					if (scrollTop > viewScrollTop) {
						await uni.pageScrollTo({
							scrollTop: (scrollTop - viewHeight),
							duration: 0
						});
						
					} else {
						await uni.pageScrollTo({
							scrollTop: (scrollTop + viewHeight),
							duration: 0
						});
					}
				}
				await uni.pageScrollTo({
					scrollTop: (scrollTop + 1),
					duration: duration
				});
				
				// #ifndef H5
				const view = await this._queryMultipleNodes();
				viewScrollTop = view[0].scrollTop;
				if (scrollTop > viewScrollTop && duration !== 0) {
					uni.pageScrollTo({
						scrollTop: (scrollTop + 1 ),
						duration: 0
					})
					
				}
				// #endif
			},
			_scrollToTarget: function(i) {
				this._pageScroll(i);
			},
			_queryMultipleNodes: function(e, notThis) {
				return new Promise((resolve, reject) => {
					let view = uni.createSelectorQuery();
					if (!!notThis) {
						view.in(this);
					}
					if (!!e) {
						view.select(e).boundingClientRect();
					}
					view.selectViewport().fields({
						size: true,
						scrollOffset: true
					});
					view.exec(function(res) {
						resolve(res);
					});
				});
			},
			_showBarFixed: function() {
				this._queryMultipleNodes("#luTabStatic", true).then(res => {
					let tabNav = res[0];
					if (tabNav.top <= this.barTop) {
						this.barShow = true;
					} else {
						this.barShow = false;
					}
				});
			},
			_selectedTab: function(y) {
				this._barInit().then((res) => {
					let itemIndex = 0;
					for (let i = 0, len = res["navTargetTop"].length; i < len; i++) {
						if (y >= res["navTargetTop"][i]) {
							itemIndex = i;
						}
					}
					this.selectedIndex = itemIndex;
          
				});
				if (!!this.barFixed) {
					this._showBarFixed();
				}
			}
		}
	};
</script>

<style lang="scss">
.lu-bar-tab-nav {	position: relative; width: 100%; background-color: #fff;
	.lu-tab-box { background-color: #ebf2fe; font-size:32rpx; padding:0 40rpx;  position: sticky; width: 100%; top:80rpx + 180rpx; box-sizing: border-box; }
	.lu-bar-tab { overflow-x: scroll; display:flex; height:auto!important;
		.lu-tab-item { display: inline-block; margin-right:40rpx; white-space:nowrap; position: relative; height:98rpx; line-height:98rpx; font-size:32rpx; 
			&::after{content: ''; position: absolute; bottom: 0; left: 50%; margin-left: -24rpx; width: 48rpx; height:5rpx; border-radius:3rpx; background-color: #3882f9; display: none;}
			// 选中状态
			&.lu-active {	color:#3882f9;
				&::after{display: block;}
			}
			&:last-child{ margin: 0;}
		}
	}
}
@media screen and (max-width: 320px) {
.lu-bar-tab-nav {	
	.lu-tab-box { top:80rpx + 216rpx; }
  }
}
/* #ifdef  MP-WEIXIN */
.lu-bar-tab-nav {	
  .lu-tab-box { top:184rpx; }
}
/* #endif */
</style>
