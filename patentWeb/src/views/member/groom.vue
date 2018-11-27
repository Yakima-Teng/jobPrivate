<template>
<div class="groom">
  <div class="w1190">
    <router-link to='/member/groom/edit' target="_blank" class="red-btn">创建推荐函</router-link>
    <div class="table-box">
      <table>
        <tbody>
          <tr>
            <th>推荐函名称</th>
            <th>专利数</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
          <tr v-for="key in tableData" :key="key.rcmd_id" >
            <td>{{key.title}}</td>
            <td>{{key.pnum}}</td>
            <td>{{key.update_time}}</td>
            <td class="edit">
              <a target="_blank" :href="'http://patent.d.gbicom.cn/rcmd/download?id=' + key.rcmd_id">下载excel版</a>
              <router-link target="_blank" :to="key.url" >分享</router-link>
              <router-link target="_blank" tag="a" :to="{path: '/member/groom/edit', query:{'id': key.rcmd_id, 'p': ''}}" >编辑</router-link>
              <a @click="delFn(key.rcmd_id)" href="javascript:void(0);">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="page-box">
      <pages></pages>
    </div>
  </div>
</div>  
</template>

<script>
import cookies from 'js-cookie'
import pages from '@/components/pagination';

import { api } from '@/assets/js/util.js'
const Api = api();

import qs from 'qs'

export default {
  components: {
    pages
  },
  data () {
    return {
      ruleForm: {
        p: 1
      },
      tableData: []
    }
  },
  methods: {
    searchFn () {
      let query = qs.stringify(this.ruleForm);
      const url = `http://patent.d.gbicom.cn/user/rcmd/index?token=${cookies.get('token')}&${query}`;
      Api.get(url).then( res => {
        if (res.data.code == 200) {
          this.tableData = res.data.rcmd.list
          this.$store.commit('jumpHandle', res.data.rcmd.page);
          this.$store.commit('changeLastPage', res.data.rcmd.totalPage);
        }
      })
    },
    // 翻页
    pageChangeFn (type, size) {
      this.ruleForm.p = size;
      this.searchFn()
    },
    // 删除
    delFn (data) {
      const url = `/user/rcmd/delete?token=${cookies.get('token')}`
      let d = {
        id: data
      }
      Api.post(url, d).then( res => {
        // console.log(res)
        if (res.data.code == 200) {
          this.searchFn();
        }
      })
    },
    downFn (d) {
      let data = {
        id: d
      }
      // console.log(d);
      const url = `http://patent.d.gbicom.cn/user/rcmd/download?token=${cookies.get('token')}&id=${d}`;
      window.open(url);
      // Api.get(url).then( res => {
      //   console.log(res.data);
      // })

      
    }
  },
  mounted () {
    this.searchFn();
  }
}
</script>

<style lang="scss" scoped>
.groom{
  padding:30px 0;
  background-color: #f2f3f4;
  .w1190{
    margin:0 auto;
  }
  .red-btn{
    text-align: center;  cursor: pointer; border:none; display: block;
    width: 124px; height: 40px;   border-radius: 5px; font-size: 14px;  line-height: 40px;
    background-color: #cc0000; color: #fff;
  }
  .table-box{
    margin-top: 30px;
    width: 100%;
    background-color: #fff;
    table{
      width: 100%;
    }
    th{
      text-align: left;
      height: 50px;
      background-color: #f6f6f6; border-bottom: 1px solid #eeeeee;
      &:first-of-type{
        padding-left: 20px;
      }
      &:last-of-type{
        text-align: center;
      }
    }
    td{
      padding:6px 0;
      text-align: left;
      border-bottom: 1px solid #eeeeee;
      &:first-of-type{
        padding-left: 20px;
      }
      &:last-of-type{
        text-align: center;
      }
    }
    .edit{
      a {
        display: inline-block;
        padding:0 10px; height: 30px;box-sizing: border-box;border: 1px solid #cccccc;border-radius: 5px;margin-left: 10px;margin-top: 9px;text-align: center;line-height: 30px;font-size: 14px;color: #333;
      }
    }
  }
  .page-box{
    overflow: hidden;
  }
}
</style>


