<template>
	<view class="page-crew-seniority">
    <HeaderSearch></HeaderSearch>
    <view class="seniority-container">
      <SunuiGrand></SunuiGrand>
      <SunuiGrand></SunuiGrand>
    </view>
	</view>
</template>

<script>
import HeaderSearch from '@/components/crew/header-search';
import SunuiGrand from '@/components/crew/sunui-grand';

export default {
  components: {
    HeaderSearch,
    SunuiGrand
  },
  data() {
    return {
      
    }
  },

  methods: {
   
  }
}
</script>

<style lang="scss">
@import '@/pages/crew/info';
</style>
