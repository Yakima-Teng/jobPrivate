<template>
	<view class="uni-searchbar" >
		<view :style="{borderRadius:radius+'px',backgroundColor: bgColor+';'}" class="uni-searchbar__box" @click="searchClick">
			<!-- #ifdef MP-ALIPAY -->
			<view class="uni-searchbar__box-icon-search">
				<uni-icons color="#ccc" size="18" type="search" />
			</view> 
			<!-- #endif -->
			<!-- #ifndef MP-ALIPAY -->
			<uni-icons color="#ccc" class="uni-searchbar__box-icon-search" size="18" type="search" />
			<!-- #endif -->
			<input :disabled="isDisable==true" v-if="show" :focus="showSync" ref="searchInput" :placeholder="placeholder" :maxlength="maxlength" @confirm="confirm" class="uni-searchbar__box-search-input" confirm-type="search" type="text" v-model="searchVal" />
			<text v-else class="uni-searchbar__text-placeholder">{{ placeholder }}</text>
			<view v-if="show && (clearButton==='always'||clearButton==='auto'&&searchVal!=='')" class="uni-searchbar__box-icon-clear" @click="clear">
				<uni-icons color="#999999" class="" size="24" type="clear" />
			</view>
		</view>
		<text @click="cancel" class="uni-searchbar__cancel" v-if="cancelButton ==='always' || show && cancelButton ==='auto'">{{cancelText}}</text>
		<text @click="confirm" class=".search-label" v-if="searchButton ==='always' || show && searchButton ==='auto'">{{searchText}}</text>
	</view>
</template>

<script>
	import uniIcons from "../uni-icons/uni-icons.vue";

	/**
	 * SearchBar 搜索栏
	 * @description 评分组件
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=866
	 * @property {Number} radius 搜索栏圆角
	 * @property {Number} maxlength 输入最大长度
	 * @property {String} placeholder 搜索栏Placeholder
	 * @property {String} clearButton = [always|auto|none] 是否显示清除按钮
	 * 	@value always 一直显示
	 * 	@value auto 输入框不为空时显示
	 * 	@value none 一直不显示
	 * @property {String} cancelButton = [always|auto|none] 是否显示取消按钮
	 * 	@value always 一直显示
	 * 	@value auto 输入框不为空时显示
	 * 	@value none 一直不显示
	 * @property {String} cancelText 取消按钮的文字
	 * @property {String} bgColor 输入框背景颜色
	 * @event {Function} confirm uniSearchBar 的输入框 confirm 事件，返回参数为uniSearchBar的value，e={value:Number}
	 * @event {Function} input uniSearchBar 的 value 改变时触发事件，返回参数为uniSearchBar的value，e={value:Number}
	 * @event {Function} cancel 点击取消按钮时触发事件，返回参数为uniSearchBar的value，e={value:Number}
	 */

	export default {
		name: "UniSearchBar",
		components: {
			uniIcons
		},
		props: {
			placeholder: {
				type: String,
				default: "请输入搜索内容"
			},
			radius: {
				type: [Number, String],
				default: 5
			},
			clearButton: {
				type: String,
				default: "auto"
			},
			cancelButton: {
				type: String,
				default: "auto"
			},
			cancelText: {
				type: String,
				default: '取消'
			},
			searchButton: {
				type: String,
				default: "none"
			},
			searchText: {
				type: String,
				default: '搜索'
			},
			bgColor: {
				type: String,
				default: "#F8F8F8"
			},
			boxShadow: {
				type: String,
				default: "1px 5px 5px #ccc"
			},
			maxlength: {
				type: [Number, String],
				default: 100
			},
			isDisable: {
				type: String,
				default: "false"
			}
		},
		data() {
			return {
				show: false,
				showSync: false,
				searchVal: ""
			}
		},
		watch: {
			searchVal() {
				this.$emit("input", {
					value: this.searchVal
				})
			}
		},
		methods: {
			searchClick() {
				if (this.show) {
					return
				}
				this.searchVal = ""
				this.show = true;
				this.$nextTick(() => {
					this.showSync = true;
				})
			},
			clear() {
				this.searchVal = ""
			},
			cancel() {
				this.$emit("cancel", {
					value: this.searchVal
				});
				this.searchVal = ""
				this.show = false
				this.showSync = false
				// #ifndef APP-PLUS
				uni.hideKeyboard()
				// #endif
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
			},
			confirm() {
				// #ifndef APP-PLUS
				uni.hideKeyboard();
				// #endif
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
				this.$emit("confirm", {
					value: this.searchVal
				})
			}
		}
	};
</script>

<style scoped>
	.uni-searchbar {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		position: relative;
		
		/* background-color: #ffffff; */
	}

	.uni-searchbar__box {
		/* #ifndef APP-NVUE */
		display: flex;
		box-sizing: border-box;
		/* #endif */
		overflow: hidden;
		position: relative;
		flex: 1;
		flex-direction: row;
		align-items: center;
		height: 88rpx;
		padding: 5px 8px 5px 0px;
		border-width: 0.5px;
		/* border: 1rpx solid #e5e5e5; */
		border-radius: 15rpx;
    padding-left: 10rpx;
	}

	.uni-searchbar__box-icon-search {
    
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		width: 32px;
		justify-content: center;
		align-items: center;
		color: #808080;
	}

	.uni-searchbar__box-search-input {
		flex: 1;
		font-size: 28rpx;
		color: #333;
	}

	.uni-searchbar__box-icon-clear {
		align-items: center;
		line-height: 24px;
		padding-left: 5px;
	}

	.uni-searchbar__text-placeholder {
		font-size: 28rpx;
		color:rgba(153,153,153,1);
		margin-left: 0px;
    font-weight:400;
    opacity: .6;
	}

	.uni-searchbar__cancel {
		padding-left: 10px;
		line-height: 36px;
		font-size: 14px;
		color: #333;
	}
	
	.search-label{
		color: #015cb7;
		font-weight: bold;
		line-height: 100rpx;
		margin-left: 10rpx;
		line-height: 70rpx;
	}
</style>