<template>
<div>
  <div v-show="showType > 0" class="cloud"></div>
  <div v-show="showType == 1 || showType == 10" class="piliang-change ">
      <h3>{{ showType == 1 ? '批量' : ''}}修改</h3>
      <p v-show="showType == 1" class="yigouxuan">已勾选专利 <em>{{listSize}}件</em></p>
      <div class="select-wrap">
          <select v-model="patentType" >
              <option value="95" >在售</option>
              <option value="96">停售</option>
              <option value="97">已售</option>
          </select>
      </div>
      <a href="javascript:void(0);" @click="editFn()" class="qr">确认操作</a>
      <a href="javascript:void(0);" @click="layerCloseFn" class="close icon-cuohao"></a>
  </div>

  <div v-show="showType == 2" class="caozuo-suc ">
      <div class="suc-img"></div>
      <div class="suc-title">
          <p>操作成功</p>
          <p>成功修改专利5件</p>
      </div>
      <a href="javascript:void(0);" @click="layerCloseFn" class="close icon-cuohao"></a>
  </div>

</div>

</template>

<script>

import { api } from '@/assets/js/util.js'
const Api = api();


export default {
  props: ['patentList', , 'patentId'],
  data () {
    return {
      showType: 0,
      patentType: 95
    }
  },
  computed: {
    listSize () {
      return this.patentList.length
    }
  },
  methods: {
    showTypeFn (data) {
      this.showType = data
    },
    layerCloseFn () {
      this.showType = 0
    },
    editFn () {
      let that = this;
      this.patentList.forEach( el => {
        el.sale_status = that.patentType
      })
      console.log(this.patentList)

      const url = `/user/patent/edit?token=${this.$store.state.token}`
      Api.post(url, {'ids':this.patentList}).then( res => {
        console.log(res.data);
        if (res.data.code == 200) {
          this.showType = 0;
        }
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.piliang-change{ width: 400px; position: fixed; top:50%; left:50%;  background-color: #fff; padding:30px;  transform: translate(-50%, -70%); box-sizing: border-box; z-index:200; }
.piliang-change h3{font-size: 18px;color: #333;line-height: 30px;}
.piliang-change .yigouxuan{font-size: 14px;color:#333;line-height: 30px;margin-top: 20px;}
.piliang-change .yigouxuan em{color: #cc0000;padding-left: 5px;}
.piliang-change .select-wrap{width: 150px;height: 40px;box-sizing: border-box;margin-top: 10px;}
.piliang-change .select-wrap select{width: 150px;height: 40px;background-color: #fff;border: 1px solid #dddddd;border-radius: 5px;color: #999;}
.piliang-change .select-wrap select option{color: #333;}
.piliang-change .qr{display: block;width: 180px;height: 40px;border-radius: 5px;background-color: #cc0000;font-size: 14px;color: #fff;line-height: 40px;text-align: center;margin-top: 20px;}
.close{position: absolute;right: 20px;top: 20px;width: 16px;height: 16px;  color:#ccc; font-size: 20px; }

.cloud{
  position: fixed;
  top:0; left:0; width: 100%; height: 100%; z-index:100;
  background-color: rgba(0, 0, 0, 0.6);
}

.caozuo-suc{ width: 420px;height: 100px;padding-left: 17px;padding-top: 25px; position: fixed; top:50%; left:50%;  transform: translate(-50%, -70%); box-sizing: border-box; z-index:200; background-color: #fff;}
.suc-img{float: left; width: 50px;height: 50px;background:url("../../assets/images/member/patent-icon-01.png") no-repeat 0 0 #cccccc;border-radius: 50%;margin-right: 15px; }
.caozuo-suc .suc-title{float: left; }
.caozuo-suc .suc-title p{font-size: 18px;color: #333;}
.caozuo-suc .suc-title p:nth-child(2){font-size: 14px;margin-top: 10px;}

</style>

