<template>
<div class="patent-butler">
  <div class="w1190">
    <patent-nav  :navbox="navbox" ></patent-nav>
    <div class="show-main">
      <!-- <div class="top-list">
          <h2>我的专利库</h2>
          <div class="list-wrap">
              <div class="cur"><a href="javascript:void(0);">全部</a></div>
              <div><a href="javascript:void(0);">全部</a></div>
              <div><a href="javascript:void(0);">全部</a></div>
              <div><a href="javascript:void(0);">全部</a></div>
          </div>
      </div> -->
      <patent-header :navType="false" title="我的专利库" @patentTypeEmit="patentTypeFn" ></patent-header>
      <div class="input-wrap">
          <select  class="gjc" v-model="ruleForm.searchType" >
            <option value="keywords">关键词</option>
            <option value="reg_id">专利申请号</option>
          </select>
          <input @keyup.enter="searchFn" type="text">
          <a @click="searchFn" href="javascript:void(0);" class="find"></a>
      </div>
      <div class="list-box">
        <patent-table ref="tableBox" @emitDel="patentDelFn" :tableData="tableData" :edit="edit" @emitMoneyStatus="moneyStatusFn" @emitYear="getYearFn" @emitSale="saleTypeFn" ></patent-table>
        <div class="list-bottom">
          <div class="btm-f-l">
            <input @change="checkboxFn" type="checkbox" name="" id="">
            <a href="javascript:void(0);" @click="delFn(selectList.join(','))" class="pl">批量删除</a>
            <span>已勾选<em>{{selectSize}}</em></span>
          </div>
          <div class="page-box">
            <page-module></page-module>
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
import patentTable from '@/components/member/patentTable'
import layerBox from '@/components/member/patentLayer';
import patentHeader from '@/components/member/patentHead'

import { api } from '@/assets/js/util.js'
const Api = api();

import cookies from 'js-cookie'
import Qs from 'qs';


export default {
  components: {
    patentNav,
    pageModule,
    patentTable,
    layerBox,
    patentHeader
  },
  data () {
    return {
      navbox: 'patent',
      edit: false,
      patentList: [],
      patentId: '',

      token: '',
      ruleForm: {
        token:　'',
        type: '',
        searchType: 'keywords',
        search: '',
        p: 1,
        status: '',
        year: '',
        sale_status: ''
      },
      tableData: []
    }
  },
  methods: {
    // 获取搜索相关数据
    patentTypeFn(data) {
      console.log(data);
      this.ruleForm.type = data;
      this.searchFn();
    },
    moneyStatusFn(size) {
      this.ruleForm.status = size;
      this.searchFn()
    },
    pageChangeFn (type, size) {
      this.ruleForm.p = size;
      this.searchFn()
    },
    getYearFn(data) {
      this.ruleForm.year = data;
      this.searchFn()
    },
    saleTypeFn (data) {
      this.ruleForm.sale_status = data;
      this.searchFn()
    },
    // 搜索
    searchFn () {
      let e = Qs.stringify(this.ruleForm);
      console.log(e)
      let url = `/user/patent/collect?${e}`;
      Api.get(url).then (res => {
        console.log(res.data);
        res.data.patent.list.forEach( function (el) {
          el.edit = true
        })
        this.tableData = res.data.patent.list
        // console.log(this.tableData);
        this.$store.commit('jumpHandle', res.data.patent.page);
        this.$store.commit('changeLastPage', res.data.patent.totalPage);
      })
    },
    // 批量操作相关
    checkboxFn (el) {
      this.$refs.tableBox.checkboxFn(el);
    },
    delFn(data) {
      let url = `/user/index/care?token=${this.$store.state.token}&type=cp&action=uncare&id=${data}`
      console.log(url);
      Api.get(url).then( res => {
        console.log(res.data);
        if (res.data.code == 200) {
          this.searchFn();
        }
      })
    },
    patentDelFn (data) {
      this.delFn(data)
    },
    // 获取
    getDataFn () {
      this.ruleForm.token = cookies.get('token');
      this.ruleForm.token = '4940a8406b76f8111808819abe8f041f'
      console.log(this.token)
      this.searchFn();
    },
    
  },
  mounted () {
    this.getDataFn();
  },
  computed: {
    selectSize () {
      return this.$store.state.memberPatent.selectSize
    },
    selectList () {
      return this.$store.state.memberPatent.selectList
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
    .list-wrap div em{ margin-left: 10px; display: inline-block; padding:0 10px;  line-height: 1.4; box-sizing: border-box; background-color: #bdc4cc;font-size: #fff;text-align: center;line-height: 18px;border-radius: 10px;color: #fff;margin-top: 10px;font-size: 12px;}
    .list-wrap div.cur{border-bottom: 2px solid #cc0000;}
    .list-wrap div.cur a{color: #cc0000;}
    .list-wrap div.cur em{background-color: #cc0000;}
    }
  .input-wrap{
    position: relative; margin-top: 20px; background-color: #fff;box-sizing: border-box;
    .gjc{ position: relative;box-sizing:  border-box; padding-left: 10px;float: left;width: 101px;height: 38px;font-size: 14px;color: #666666;line-height: 40px; cursor: pointer;z-index: 20;background-color: #fff;border: 1px solid #dddddd;border-top-left-radius:5px;border-bottom-left-radius: 5px;}
    .gjc .xl1{display: none; position: absolute;top: 38px;left: -1px; width: 102px;height: 82px;border: 1px solid #dddddd;background-color: #fff;z-index: 10;box-sizing: border-box;}
    .gjc .xl1 .a1{box-sizing: border-box; display: block;padding-left: 10px;color: #cc0000;width:100px;height: 40px; background-color: #fff;font-size: 14px;text-align: left;line-height: 40px;}
    .gjc .xl1 .a2{box-sizing: border-box; display: block;padding-left: 10px;color: #333333;width: 100px;height: 40px; background-color: #fff;font-size: 14px;text-align: left;line-height: 40px;}
    .gjc:hover .xl1{display: block;}
    input{  border: 1px solid #dddddd; border-left:none; width: 217px;height: 38px; box-sizing: border-box;padding-left: 10px;border-radius: 5px; border-top-left-radius:0;border-bottom-left-radius: 0;}
    a.find{position: absolute; width: 22px;height: 22px; margin-top: 6px; margin-left: -30px;  background: url("../../assets/images/member/find.png") no-repeat 0 0;}
    .daochu{float: right; width: 140px; height: 40px; border-radius: 5px;font-size: 14px;color: #fff;box-sizing: border-box;padding-left: 40px;background: url("../../assets/images/member/daochu.png") no-repeat 10px 10px #009999;line-height: 40px;background-size: 20px 20px;}
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
        a{float: left;width: 97px;height: 30px;text-align: center;line-height: 30px;margin-left: 14px;border: 1px solid #cccccc;border-radius: 5px;margin-top: 20px;color: #666666;}
        .cj{width: 139px;margin-left: 10px;}
        span{float: left;margin-top: 20px;color: #666666;font-size: 14px;line-height: 30px;margin-left: 10px;}
        em{padding-left: 4px;}
        
        }

    }
  }
}
</style>
