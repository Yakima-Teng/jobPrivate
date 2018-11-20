<template>
<div class="patent-butler">
  <div class="w1190">
    <patent-nav  :navbox="navbox" ></patent-nav>
    <div class="show-main">
      <pagent-head :navType="true" title="待发布专利" @patentTypeEmit="patentTypeFn" ></pagent-head>
      <div class="input-wrap">
          <div class="gjc">
            <select v-model="keySelect">
              <option value="1">关键词</option>
              <option value="2">专利申请号</option>
            </select>
            
          </div>
          <input type="text" @keyup.enter="searchFn" v-model="keyText" >
          <a @click="searchFn" href="javascript:void(0);" class="find"></a>
      </div>
      <div class="list-box">
        <table>
          <tbody>
            <tr>
              <!-- <th width="30">
                <label><input @change="checkboxFn" type="checkbox" name="" id=""></label>
              </th> -->
              <th >
                <span>专利信息</span>
              </th>
              <th>
                <select v-model="ruleForm.status" @change="searchFn" >
                  <option value="">不限</option>
                  <option value="98" >已下证</option>
                  <option value="99">未缴费</option>
                </select>
              </th>
              <th >
                <span href="" >价格</span>
              </th>
              <th >
                <span href="" >发布时间</span>
              </th>
              <th >
                <span href="" >当前状态</span>
              </th>
              <!-- <th>
                操作
              </th> -->
            </tr>
            <tr v-for="key in tableData" :key="key.sp_id" class="list">
              <!-- <td>
                <input data-id="key.sp_id" type="checkbox" name="" id="">
              </td> -->
              <td>
                <span >{{key.reg_id}}</span>
              </td>
              <td>
                <span >{{key.money_status}}</span>
              </td>
              <td>
                 <span class="money">{{key.price}}.00</span>
              </td>
              <td>
               <span>{{key.create_time}}</span>
              </td>
              <td>
                <span>审核中</span>
              </td>
              <!-- <td>
                <a href="javascript:void(0);" class="edit-btn">修改</a>
              </td> -->
            </tr>
          </tbody>
        </table>
        <div class="list-bottom">
          <!-- <div class="btm-f-l">
            <input @change="checkboxFn"  type="checkbox" name="" id="">
            <a href="javascript:void(0);"  @click="checkEditFn"  class="pl">批量修改</a>
            <span>已勾选<em>0</em></span>
          </div> -->
          <div class="page-box">
            <page-module @changePagesInfo="pageChangeFn" ></page-module>
          </div>
        </div>
      </div>
    </div>
  <layer-box ref="layerBox" :patentList="patentList" :patentId="patentId" ></layer-box>
    
  </div>
</div>
</template>

<script>

import patentNav from '@/components/member/memberNav'
import pagentHead from '@/components/member/patentHead'
import pageModule from '@/components/pagination'
import layerBox from '@/components/member/patentLayer';


import { api } from '@/assets/js/util.js'
const Api = api();

import Qs from 'qs';

export default {
  components: {
    patentNav,
    pageModule,
    pagentHead,
    layerBox
  },
  data () {
    return {
      navbox: 'patent',
      keySelect: 1,
      keyText: '',
      tableData: [],
      patentList: [],
      patentId: '',

      ruleForm: {
        p: 1,
        searchType: 'keywords',
        search: '',
        money_status: '',
        status: ''
      }
    }
  },
  methods: {
    searchFn () {
      let e = Qs.stringify(this.ruleForm);
      // const url = `/user/patent/sales?token=${this.$store.state.token}&${e}`;
      const url = `/user/patent/sales?token=4940a8406b76f8111808819abe8f041f&${e}`;
      console.log(e);
      Api.get(url).then( res => {
        console.log(res.data);
        this.tableData = res.data.list
        this.$store.commit('jumpHandle', res.data.page);
        this.$store.commit('changeLastPage', res.data.totalPage);
      })
    },
    patentTypeFn(data) {
      this.ruleForm.status = data;
      this.searchFn();
    },
    pageChangeFn (type, num) {
      this.ruleForm.p = num
    }
  },
  mounted () {
    this.searchFn();
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
  
  .input-wrap{
    position: relative; margin-top: 20px; background-color: #fff;box-sizing: border-box;
    .gjc select{ position: relative;box-sizing:  border-box; padding-left: 10px;float: left;width: 101px;height: 38px;font-size: 14px;color: #666666;line-height: 40px; z-index: 20;background-color: #fff;border: 1px solid #dddddd;border-top-left-radius:5px;border-bottom-left-radius: 5px;}
    .gjc .xl1{display: none; position: absolute;top: 38px;left: -1px; width: 102px;height: 82px;border: 1px solid #dddddd;background-color: #fff;z-index: 10;box-sizing: border-box;}
    .gjc .xl1 .a1{box-sizing: border-box; display: block;padding-left: 10px;color: #cc0000;width:100px;height: 40px; background-color: #fff;font-size: 14px;text-align: left;line-height: 40px;}
    .gjc .xl1 .a2{box-sizing: border-box; display: block;padding-left: 10px;color: #333333;width: 100px;height: 40px; background-color: #fff;font-size: 14px;text-align: left;line-height: 40px;}
    .gjc:hover .xl1{display: block;}
    input{  border: 1px solid #dddddd; border-left:none; width: 217px;height: 38px; box-sizing: border-box;padding-left: 10px;border-radius: 5px; border-top-left-radius:0;border-bottom-left-radius: 0;}
    a.find{position: absolute; width: 22px;height: 22px; margin-top: 6px; margin-left: -30px;  background: url("../../assets/images/member/find.png") no-repeat 0 0;}
    .daochu{float: right; width: 140px; height: 40px; border-radius: 5px;font-size: 14px;color: #fff;box-sizing: border-box;padding-left: 40px;background: url("../../assets/images/member/daochu.png") no-repeat 10px 10px #009999;line-height: 40px;background-size: 20px 20px;}
  }
  .list-box{
    margin-top: 20px; width: 100%;
    table{
      width: 100%;
    }
    th{
      line-height: 40px; font-size: 14px;
      background-color:#f2f3f4; color:#999;
      &:first-of-type{
        text-align: left;
        padding-left: 20px;
      }
      &:nth-of-type(2){
        text-align: left;
        padding-left: 20px;
      }
    }
    td{
      text-align: center;
      border-bottom: 1px solid #dddddd; padding:20px 0; font-size: 14px; color:#666;
      &:first-of-type{
        text-align: left;
        padding-left: 20px; 
        
      }
      &:nth-of-type(2){
        text-align: left; 
        color:#999;
      }
      .box_bg{float: left; width: 50px;height: 50px;background-color: #80CCCC;font-size: 13px;color: #fff;text-align: center;line-height: 50px;border-radius: 5px;margin-left: 20px;}
      .slzl-box{float: left; width: 292px; padding-left: 20px;}
      .p1{ font-size: 13px;color: #333333;}
      .p2{ font-size: 13px;color: #999999;margin-top: 10px;}
      .money{
        color:#cc0000;
      }
      .edit-btn{
        display: inline-block;
        box-sizing: border-box;
        width: 80px;
        height: 30px;
        font-size: 13px;
        color: #666666;
        text-align: center;
        line-height: 30px;
        border: 1px solid #cccccc;
        border-radius: 5px;
      }
    }
    tr.list:hover{
      box-shadow: 0 0 5px #dddddd;
    }
    .icon_arrow{
      display: inline-block;
      width: 8px; height: 5px; margin-left: 5px;
      background: url('../../assets/images/u301.png') no-repeat;
    }
    .list-bottom{
      overflow: hidden;
      .pl{
        font-size: 14px;
      }
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
