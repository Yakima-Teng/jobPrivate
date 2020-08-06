<template>
	<view class="page-crew-proxy">
    <HeaderSearch></HeaderSearch>
    <view class="seniority-container">
      <view class="seniority-list" v-for="(item,index) in items" :key='index'>
        <view class="seniority-time">{{((item.effectiveDate).substring(0,10)).replace('-','年').replace('-','月')+'日'}}-{{(item.expiryDate).substring(4,10)}}11月03日<text>{{item.validFlag}}</text></view>
        <view class="seniority-content">
          <view class="info">代办单位：<text>{{item.signcontCorpName}}</text></view>
          <view class="info">证书种类：<text>{{item.certType}}</text></view>
          <view class="info">当前状态：<text>{{item.currStatu}}</text></view>
          <view class="info">是否自有船员：<text>{{item.isOwn}}</text></view>
          <view class="info">截止日期：<text>{{(item.expiryDate).substring(0,10)}}</text></view>
          <view class="info">终止日期：<text>{{(item.termiTime).substring(0,10)}}</text></view>
        </view>
      </view>
    </view>
	</view>
</template>
<script>
import HeaderSearch from '@/components/crew/header-search';
export default {
  components: {
    HeaderSearch
  },
  data() {
    return {
      items:[{
        message:'代办单位',
        info:'青岛远航源丰润国际劳务有限公司'
      },{
        message:'证书种类',
        info:'合格证,适任证,服务簿,外派报备'
      },{
        message:'当前状态',
        info:'确认同意'
      },{
        message:'是否自有船员',
        info:'是'
      },{
        message:'截止日期',
        info:'2019/9/14'
      },{
        message:'终止日期',
        info:'1900/1/1'
      }]
    }
  },
  onLoad() {
  	this.getWtdb()
  },
  methods: {
    getWtdb(){
		this.api.request('/sea/q/l?id_card_no=520102199502022400').then(res=>{
			console.log(res);
			this.items=res;
		})
	},
	toWtDbxq(contractCode){
		console.log(contractCode)
		uni.navigateTo({
			url:'/pages/crew/info-handle?contractCode='+contractCode
		})
	}
  }
}
</script>

<style lang="scss">
@import '@/pages/crew/info';
.seniority-time{ display: flex; justify-content: space-between; align-items: center;
  text{ width: 110rpx; height:48rpx; border-radius:20rpx; background-color: #ebf2fe; color:#3882f9; line-height:48rpx; text-align: center; font-size:24rpx;
    &.null{ background-color: #c4c4c4; color:#fff;}
  }
}
.seniority-content{ padding-bottom: 26rpx;}
</style>
