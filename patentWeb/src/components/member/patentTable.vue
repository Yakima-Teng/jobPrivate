<template>
<div class="table-box">
  <table>
    <tbody>
      <tr>
        <th width="30">
          <label><input @change="checkboxFn" type="checkbox" name="" id=""></label>
        </th>
        <th  width="400">
          <span>专利信息</span>
        </th>
        <th >
          <!-- <span href="" >下证状态<i class="icon_arrow"></i></span> -->
          <select  v-model="moneyStatus" id="">
            <option value="">不限</option>
            <option value="98">已下证</option>
            <option value="99">未缴费</option>
          </select>
        </th>
        <th class="time-scope" >
          <select name="" id="" @change="patentYearFn" >
            <option value="">申请日期</option>
            <option v-for="key in yearList" :value="key" :key="key" >{{key}}</option>
          </select>
          <!-- <date-picker class="date-inp" field="startTime"  placeholder="申请日期"  v-model="startTime"  format="yyyy/mm/dd"  > </date-picker>
          <date-picker class="date-inp" field="endTime" placeholder="申请日期"   v-model="endTime"   format="yyyy/mm/dd"  ></date-picker> -->
          <!-- <div class="date-time">
            <input type="date" placeholder="申请日期" >--<input type="date"  placeholder="申请日期">
          </div> -->
        </th>
        <th >
          <!-- <span href="" >出售状态<i class="icon_arrow"></i></span> -->
          <select @change="saleTypeFn" name="" id="">
            <option value="">不限</option>
            <option value="95">在售</option>
            <option value="96">停售</option>
            <option value="97">已售</option>
          </select>
        </th>
        <th >
          <span class="jg">价格</span>
        </th>
        <th>
          操作
        </th>
      </tr>
      <tr v-for="(key, index) in tableData" :key="index" class="list">
        <td>
          <input @change="checkAloneFn" :data-pid='key._source.p_id' :data-paid='key._source.attrs.pa_id' type="checkbox" name="" id="">
        </td>
        <td>
          <div class="box_bg" :class="{'fm':key._source.type == 105, 'wg':key._source.type == 107,}" >{{key._source.type_str ? key._source.type_str.substr(0, 2) : ''}}</div>
          <div class="slzl-box">
              <p class="p1 cur">{{key._source.name}}</p>
              <p class="p2">申请号：{{key._source.reg_id}}</p>
          </div>
        </td>
        <td>
          <span >{{key._source.attrs.status_str ? key._source.attrs.status_str : '不限'}}</span>
        </td>
        <td>
          <span >{{key._source.reg_date_str}}</span>
        </td>
        <td>
          <span >{{key._source.attrs.sale_status_str}}</span>
        </td>
        <td>
          <span class="money" v-if="parseInt(key._source.attrs.price) > 0">￥{{key._source.attrs.price}}</span><span v-else class="money">面议</span>
        </td>
        <td>
          <a v-if="key._source.attrs.is_show == 1 && r == 1" :data-id='key._source.p_id' @click="editFn(index)" href="javascript:void(0);" class="edit-btn">修改</a>
          <div v-else-if="key._source.attrs.is_show == 2 && r == 1"  class="none">
              已无效<em class="icon"></em>
              <div class="xl1">
                <h3>【此专利已无效，无法再出售】</h3>
                <p>如信息有误，请立即联系<a href="javascript:void(0);">在线客服</a></p>
              </div>
          </div>
          <a v-else :data-id='key._source.p_id' @click="delFn" href="javascript:void(0);" class="edit-btn">删除</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>


import { SELECT_LIST, SELECT_SIZE } from '@/components/member/patent'

export default {
  props: ['tableData', 'r'],
  data () {
    return {
      startTime: '',
      endTime: '',
      moneyStatus: '',

      yearList: [],
      selectList: [],
      selectLength: 0
    }
  },
  computed: {
    size () {
      return this.selectList.length
    }
  },
  methods: {
    checkAloneFn (el) {
      let that = this;
      let pid = el.target.getAttribute('data-pid');
      let paid = el.target.getAttribute('data-paid');
      let obj = {'p_id': pid, 'pa_id': paid}
      if (el.target.checked && pid && paid) {
        this.selectList.push(obj)
      } else {
        this.selectList.splice(this.selectList.indexOf(obj), 1);
      }
      let checkbox = document.querySelector('.list-box').querySelectorAll('input');
      if(this.selectList.length < (checkbox.length - 2)){
        checkbox.forEach(function(el, index){
          if(index == 0 || index == (checkbox.length - 1)){
            el.checked = false;
          }
        });
      }else{
        [].forEach.call(checkbox, function (el) {
          el.checked = true;
        })
      }
      this.$store.dispatch(SELECT_SIZE, this.selectList.length);
      this.$store.dispatch(SELECT_LIST, this.selectList);
    },
    checkboxFn (el) {
      let that = this;
      let e = el.target
      let checkbox = document.querySelector('.list-box').querySelectorAll('input');
      [].forEach.call(checkbox, function (el) {
        el.checked = e.checked
      })
      if (e.checked) {
        this.tableData.forEach(function (el) {
          let pid = el._source.attrs.p_id;
          let paid = el._source.attrs.pa_id;
          let obj = {'p_id': pid, 'pa_id': paid}
          that.selectList.push(obj)
        })
      } else {
        this.selectList = []
      }
      this.$store.dispatch(SELECT_SIZE, this.selectList.length);
      this.$store.dispatch(SELECT_LIST, this.selectList);
    },
    getYearListFn () {
      var date=new Date;
      var year=date.getFullYear(); 
      for (let i = year; i >= 1980; i--) {
        this.yearList.push(i);
      }
    },
    saleTypeFn (el) {
      this.$emit('emitSale', el.target.value);
    },
    patentYearFn (el) {
      this.$emit('emitYear', el.target.value);
    },
    editFn (i) {
      let pid = this.tableData[i]._source.attrs.p_id;
      let paid = this.tableData[i]._source.attrs.pa_id;
      let obj = {'p_id': pid, 'pa_id': paid}
      let list = [obj]
      this.$emit('emitEdit', list)
    },
    delFn (e) {
      let i = e.target.getAttribute('data-id');
      this.$emit('emitDel', i)
    }
  },
  mounted () {
    this.getYearListFn();
  },
  watch: {
    moneyStatus: function () {
      this.$emit('emitMoneyStatus', this.moneyStatus)
    },
    startTime: function () {
      this.$emit('emitStartTime', this.startTime)
    },
    endTime: function () {
      this.$emit('emitEndTime', this.endTime)
    },
  }
}
</script>


<style lang="scss" scoped>
.table-box{
    margin-top: 20px; width: 100%;
    table{
      width: 100%;
    }
    th{
      line-height: 40px; font-size: 14px;
      background-color:#f2f3f4;  color:#666;
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
      border-bottom: 1px solid #dddddd; padding:20px 0; font-size: 14px;
      color:#666;
      &:first-of-type{
        text-align: left;
        padding-left: 20px;
      }
      &:nth-of-type(2){
        text-align: left;
      }
      .box_bg{
        float: left; width: 50px;height: 50px;background-color: #80CCCC;font-size: 13px;color: #fff;text-align: center;line-height: 50px;border-radius: 5px;margin-left: 20px;
        &.wg{
          background-color: #99cce6
        }
        &.fm{
          background-color: #f0b3b3;
        }
      }
      .slzl-box{float: left; width: 292px; padding-left: 20px;}
      p{ font-size: 14px; line-height: 20px;
        &.p1{color: #333333;}
        &.p2{color: #999999;margin-top: 10px;}
      }
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
    .time-scope{
      .date-inp{
        display: inline-block;
        width: 90px;
      }
    }
    .none{
      box-sizing: border-box; display: block;padding-left: 10px;color: #cc0000;width:100px;height: 40px; background-color: #fff;font-size: 14px;text-align: left;line-height: 40px;
       em.icon{
          display: inline-block;
          width: 14px; height: 14px; border-radius: 50%; margin-left: 10px;
          background: #ccc url('../../assets/images/member/wenhao.png') no-repeat center;
        }
      .xl1{
        position: absolute; display: none;  width: 220px; border: 1px solid #dddddd;background-color: #fff;z-index: 10;box-sizing: border-box; font-size: 12px; box-shadow: 0px 0px 5px #dcdcdc; padding:10px; margin-left: -100px; margin-top: -10px;
          h3, p{
            color:#666;
          }
          a{
            color:#c00
          }
        }
      &:hover{
        .xl1{
          display: block;
        }
      }
    }
    select{
      width: 90px; height:30px; line-height: 30px; padding-left: 10px;
      border:1px solid #ccc; color:#666; background-color: #f2f3f4; 
    }
    .icon_arrow{
      display: inline-block;
      width: 8px; height: 5px; margin-left: 5px;
      background: url('../../assets/images/u301.png') no-repeat;
    }
    input[type="date"]::-webkit-clear-button{
      display:none;
    } 
    input[type=date]::-webkit-inner-spin-button{visibility: hidden;}
  }
</style>
