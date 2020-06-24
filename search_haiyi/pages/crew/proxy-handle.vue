<template>
	<view class="page-crew-proxy">
    <HeaderSearch></HeaderSearch>
    <view class="seniority-container">
      <view class="seniority-list">
        <view class="seniority-time">2013年06月02日-11月03日<text>有效</text></view>
        <view class="seniority-content">
          <view class="info" v-for="item in items" :key='item.message'>{{item.message}}：<text>{{item.info}}</text></view>
        </view>
      </view>
      <view class="seniority-list">
        <view class="seniority-time">2013年06月02日-11月03日<text class="null">无效</text></view>
        <view class="seniority-content">
          <view class="info" v-for="item in items" :key='item.message'>{{item.message}}：<text>{{item.info}}</text></view>
        </view>
      </view>
      <view class="seniority-list">
        <view class="seniority-time">2013年06月02日-11月03日<text class="null">无效</text></view>
        <view class="seniority-content">
          <view class="info" v-for="item in items" :key='item.message'>{{item.message}}：<text>{{item.info}}</text></view>
        </view>
      </view>
    </view>
	</view>
</template>
<script>
import HeaderSearch from '../../components/crew/header-search.vue';
export default {
  components: {
    HeaderSearch
  },
  data() {
    return {
      brandFold: true,
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
  methods: {
    
  }
}
</script>

<style lang="scss">
@import './info.scss';
.seniority-time{ display: flex; justify-content: space-between; align-items: center;
  text{ width: 110rpx; height:48rpx; border-radius:20rpx; background-color: #ebf2fe; color:#3882f9; line-height:48rpx; text-align: center; font-size:24rpx;
    &.null{ background-color: #c4c4c4; color:#fff;}
  }
}
.seniority-content{ padding-bottom: 26rpx;}
</style>
