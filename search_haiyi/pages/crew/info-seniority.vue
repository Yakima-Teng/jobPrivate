<template>
	<view class="page-crew-seniority">
    <HeaderSearch></HeaderSearch>
    <view class="seniority-container">
      <view class="seniority-list">
        <view class="seniority-time">2013年06月02日-11月03日</view>
        <view class="seniority-content">
          <view class="info" v-for="item in itemInfo" :key='item.message'>{{item.message}}：<text>{{item.info}}</text></view>
          <view class="btn-more" :class="[brandFold ? 'cur' : '']" v-if="items.length > 3" @click="toggleMore()">{{brandFold?'展开':'收起'}}<text class="icon"></text></view>
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
        message:'航船',
        info:'苏浙货201901'
      },{
        message:'航程',
        info:'青岛港 – 汕头港 – 青岛港  5000海里'
      },{
        message:'航龄',
        info:'150天'
      },{
        message:'适任证号码',
        info:'AEA213201900491'
      },{
        message:'任职船名',
        info:'公爵/OCEAN DUKE'
      },{
        message:'任职职务',
        info:'二管轮'
      }]
    }
  },
  computed: {
    itemInfo: {
      get: function () {
        if (this.brandFold) {
          if (this.items.length < 3) {
            return this.items
          }
          let newArr = []
          for (var i = 0; i < 3; i++) {
            let item = this.items[i]
            newArr.push(item)
          }
          return newArr
        }
        return this.items
      },
      set: function (val) {
        this.showdetailList = val
      }
    }
  },
  methods: {
    toggleMore() {
      this.brandFold = !this.brandFold;
    }
  }
}
</script>

<style lang="scss">
@import './info.scss';
</style>
