<template>
<view class="seniority-list">
  <view class="seniority-time">{{sTime}}</view>
  <view class="seniority-content">
    <view class="info" v-for="(proitem,pindex) in itemInfo" :key='pindex'>{{proitem.message}}：<text>{{baseInfo[proitem.property]}}</text></view>
    <view class ="btn-more" :class="[brandFold ? 'cur' : '']" v-if="proList.length > 3" @click="toggleMore()">{{brandFold?'展开':'收起'}}<text class="icon"></text></view>
  </view>
</view>
</template>

<script>
  var _self;
	export default {
		props:{
			baseInfo:Object,
			proList:Array,
			sTime:String,
			showNum:6
		},
		data() {
		  return {
		    brandFold: true,
		  }
		},
		computed: {
		  itemInfo: {
		    get: function () {
		      if (this.brandFold) {
		        if (this.proList.length < this.showNum) {
		          return this.proList
		        }
		        let newArr = []
		        for (var i = 0; i < 8; i++) {
		          let item = this.proList[i]
		          newArr.push(item)
		        }
		        return newArr
		      }
		      return this.proList
		    },
		    set: function (val) {
		      this.showdetailList = val
		    }
		  }
		},
		created() {
			_self = this;
		},
		methods: {
		  toggleMore() {
			let _this = this;
			_this.brandFold = !_this.brandFold;
		  }
		}
	}
</script>

<style lang="scss">
@import '@/pages/crew/info';
</style>
