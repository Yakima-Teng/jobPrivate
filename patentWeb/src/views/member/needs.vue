<template>
<div class="patent-butler">
  <div class="w1190">
    <patent-nav  :navbox="navbox" ></patent-nav>
    <div class="show-main">
      <div class="top-list">
          <h2>我发布的需求</h2>
          <div class="list-wrap">
              <div :class="{'cur': tabIndex == 0}" @click="tabCutFun(0)"><a href="javascript:void(0);">全部</a><em>{{totalNum}}</em></div>
              <div :class="{'cur': tabIndex == 2}" @click="tabCutFun(2)"><a href="javascript:void(0);">加急</a></div>
              <div :class="{'cur': tabIndex == 3}" @click="tabCutFun(3)"><a href="javascript:void(0);">过期</a></div>
          </div>
      </div>
      <div class="input-wrap">
        <input type="text" placeholder="需求关键词" v-model="search">
        <a href="javascript:void(0);" class="find" @click="searchResult"></a>
      </div>
      <div class="list-box">
        <needs-list type="needs" :newsList="newsList" :sortType="sort" :status="status" @searchBytypeOrStatus="searchBytypeOrStatus" @checkedNum="checkedNum" @deleteNeedsById="deleteNeedsById"></needs-list>
        <div class="list-bottom">
          <div class="btm-f-l">
            <input class="checkboxFn" type="checkbox" :checked="newsList.length && checkedList.length == newsList.length">
            <a href="javascript:void(0);" class="pl">批量分享需求</a>
            <span>已勾选<em>{{checkedList.length}}</em></span>
          </div>
          <div class="page-box">
            <page-module v-if="$store.state.last_page > 1" @changePagesInfo="changePagesInfo"></page-module>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>
</template>

<script>

import patentNav from '@/components/member/memberNav'
import pageModule from '@/components/pagination'
import needsList from '@/components/member/needsList'

import { api } from '@/assets/js/util.js'

export default {
  name: 'Needs',
  components: {
    patentNav,
    pageModule,
    needsList
  },
  data () {
    return {
      navbox: 'needs',
      search: '',
      totalNum: 0,
      newsList: [],
      checkedList: [],
      sort: '',
      status: '',
      tabIndex: 0,
      token: this.$store.state.token
    }
  },
  created(){
    var url = '/user/needs/index?token='+this.token;
    this.dataFun(url);
  },
  methods: {
    dataFun(url){
      var Api = api();
      var _this = this;
      Api.get(url).then(res => {
        if(res.data.code == 200){
          _this.totalNum = res.data.needs.total;
          _this.newsList = res.data.needs.list;
          _this.$store.commit('jumpHandle', res.data.needs.page);
          _this.$store.commit('changeLastPage', res.data.needs.totalPage);
        }
      });
    },
    tabCutFun: function(index){
      this.tabIndex = index;
      var url = '/user/needs/index?p=1&token='+this.token;
      if(index == 1){
        url += '&offer=1';
      }else if(index == 2){
        url += '&urgent=1';
      }else if(index == 3){
        url += '&expire=1';
      }
      this.dataFun(url);
    },
    searchBytypeOrStatus: function(type, status){ // 类别搜索
      this.sort = type;
      this.status = status;
      var url = '/user/needs/index?p=1&token='+this.token;
      if(this.search != ''){
        url += '&search=' + this.search;
      }
      if(type != '' && type != '0'){
        url += '&type='+ type;
      }
      if(status != '' && status != '0'){
        url += '&status='+ status;
      }
      this.dataFun(url);
    },
    searchResult: function(){ // 关键字搜索
      var url = '/user/needs/index?p=1&token='+this.token
      if(this.search != ''){
        url += '&search=' + this.search;
      }
      this.sort = '';
      this.status = '';
      this.dataFun(url);
    },
    checkedNum: function(list){ // 选中数量
      this.checkedList = list;
    },
    deleteNeedsById: function(id){
      var Api = api();
      var _this = this;
      var p = this.$store.state.current_page;
      Api.post('/user/needs/delete?token='+this.token, {'id':id}).then(res => {
        if(res.data.code == 200){
          var url = '/user/needs/index?p='+p+'&token='+this.token;
          if(_this.search != ''){
            url += '&search=' + _this.search;
          }
          if(_this.type != '' && _this.type != '0'){
            url += '&type='+ _this.type;
          }
          if(_this.status != '' && _this.status != '0'){
            url += '&status='+ _this.status;
          }
          _this.dataFun(url);
        }
      });
    },
    changePagesInfo: function(type,curPage){ // 页码更改操作
        var page = curPage;
        var _this = this;
        if(type == 'add'){
            page = curPage + 1;
        }else if(type == 'less'){
            page = curPage - 1;
        }
        var url = '/user/needs/index?p='+page+'&token='+this.token;
        if(_this.search != ''){
          url += '&search=' + _this.search;
        }
        if(_this.type != '' && _this.type != '0'){
          url += '&type='+ _this.type;
        }
        if(_this.status != '' && _this.status != '0'){
          url += '&status='+ _this.status;
        }
        _this.dataFun(url);
    }
  }
}
</script>


<style lang="scss" scoped>
$white: #fff;
$main: #333;
$red: #cc0000;
$green: #37b8cf;
$border01: #ccc;
$border02: #ddd;


.patent-butler{
  padding:30px 0;
  background-color: #f2f3f4;
  .w1190{
    overflow: hidden;
  }
}
.show-main{
  background-color: $white;
  padding:20px; margin-left: 180px;
  .top-list{
    width: 100%;overflow: hidden;
    h2{float: left; font-size: 18px;color: #333333;line-height: 40px;text-align: center;margin-right: 30px;}
    .list-wrap{width: 524px; float: left;overflow: hidden;}
    .list-wrap div{float: left;box-sizing: border-box;padding-left: 10px; height: 40px;line-height: 40px;margin-right: 20px;}
    .list-wrap div:last-of-type{margin-right: 0px;}
    .list-wrap div a{color:#666666;font-size: 14px; }
    .list-wrap div em{ margin-left: 10px; display: inline-block; padding:0 6px; box-sizing: border-box; background-color: #bdc4cc;text-align: center;line-height: 18px;border-radius: 10px;color: #fff;margin-top: 10px;font-size: 12px;}
    .list-wrap div.cur{border-bottom: 2px solid #cc0000;}
    .list-wrap div.cur a{color: #cc0000;}
    .list-wrap div.cur em{background-color: #cc0000;}
    }
    .input-wrap{ position: relative; width: 320px;height: 40px; margin-top: 20px; border-radius: 5px; background-color: #fff;border: 1px solid #dddddd;box-sizing: border-box;
      input{ float: left; width: 318px;height: 38px;border: none;box-sizing: border-box;padding-left: 10px;border-radius: 5px;}
      .find{position: absolute; width: 22px;height: 22px;right: 10px;top: 10px; background: url("../../assets/images/member/find.png") no-repeat 0 0;}
    }
    .list-box{
     .list-bottom{
      overflow: hidden;
      .page-box{
        overflow: hidden;
      }
      .btm-f-l{
        float: left;
        width: 50%;
        input[type=checkbox]{float: left;margin-top: 27px;}
        a{float: left;width: 97px;height: 30px;text-align: center;font-size: 14px;line-height: 30px;margin-left: 14px;border: 1px solid #cccccc;border-radius: 5px;margin-top: 20px;color: #666666;}
        .cj{width: 139px;margin-left: 10px;}
        span{float: left;margin-top: 20px;color: #666666;font-size: 14px;line-height: 30px;margin-left: 10px;}
        em{padding-left: 4px;}
        
        }

    }
  }
}
</style>
