<template>
  <div class="needs-list" v-if="type=='needs'">
    <div class="bottom-title">
      <label><input type="checkbox" v-model="allCheck" @change="allCheckedChange"><span>需求信息</span></label>
      <div class="cszt">
        <select v-model="sort" @change="searchBytype">
          <option value="">类型要求</option>
          <option value="0">不限</option>
          <option value="105">发明</option>
          <option value="107">外观</option>
          <option value="106">实用</option>
        </select>
      </div>
      <div class="cszt">
        <select v-model="moneyStatus" @change="searchBytype">
          <option value="">下证要求</option>
          <option value="0">不限</option>
          <option value="98">已下证</option>
          <option value="99">未缴费</option>
        </select>
      </div>
      <div class="jg">发布时间</div>
    </div>
    <ul>
        <li v-for="(list, index) in newsList" :key="index">
            <input type="checkbox" v-model="checkList" :value="list.needs_id" @change="checkedChange">
            <div class="slzl-box">
                <p class="p1">{{list.content}}</p>
                <div class="p2"><p v-if="list.expire">有效期{{list.expire}}</p><p v-else>已过期</p><h4 v-if="list.urgent == 1">加急</h4></div>
            </div>
            <span class="span2">{{list.type ? list.type : '不限'}}</span>
            <span class="span3">{{list.money_status ? list.money_status : '不限'}}</span>
            <span class="span4">{{list.create_time}}</span>
            <a href="javascript:void(0);" class="a1" @click="deleteNeeds(list.needs_id)">删除</a>
        </li>
    </ul>
  </div>
  <div class="collect-list" v-else-if="type=='collect'">
    <div class="bottom-title">
      <span class="xqxx">需求信息</span>
      <div class="cszt">
        <select v-model="sort" @change="searchBytype">
          <option value="">类型要求</option>
          <option value="0">不限</option>
          <option value="105">发明</option>
          <option value="107">外观</option>
          <option value="106">实用</option>
        </select>
      </div>
      <div class="cszt">
        <select v-model="moneyStatus" @change="searchBytype">
          <option value="">下证要求</option>
          <option value="0">不限</option>
          <option value="98">已下证</option>
          <option value="99">未缴费</option>
        </select>
      </div>
    </div>
    <ul>
        <li v-for="(list, index) in newsList" :key="index">
            <div class="slzl-box">
                <div class="p1"><p>{{list.content}}</p><em v-if="list.is_offer" class="quoted">已报价</em><em v-else>还未报价</em></div>
                <div class="p2"><p v-if="list.expire">有效期{{list.expire}}</p><p v-else>已过期</p><h4 v-if="list.urgent == 1">加急</h4></div>
            </div>
            <span class="span2">{{list.type ? list.type : '不限'}}</span>
            <span class="span3">{{list.money_status ? list.money_status : '不限'}}</span>
            <a href="javascript:void(0);" v-if="list.is_offer == 0" class="a1" @click="sendPatent(list)">立即报价</a>
            <a href="javascript:void(0);" class="a1 delet" @click="deleteNeeds(list.needs_id)">删除</a>
        </li>
    </ul>
  </div>
  <div class="quote-list" v-else-if="type=='quote'">
    <div class="bottom-title">
      <span class="xqxx">需求信息</span>
      <div class="cszt">
        <select v-model="sort" @change="searchBytype">
          <option value="">类型要求</option>
          <option value="0">不限</option>
          <option value="105">发明</option>
          <option value="107">外观</option>
          <option value="106">实用</option>
        </select>
      </div>
      <div class="cszt">
        <select v-model="moneyStatus" @change="searchBytype">
          <option value="">下证要求</option>
          <option value="0">不限</option>
          <option value="98">已下证</option>
          <option value="99">未缴费</option>
        </select>
      </div>
      <div class="jg">报价时间</div>
    </div>
    <ul>
      <li v-for="(list, index) in newsList" :key="index">
          <div class="slzl-box">
              <div class="p1"><p>{{list.content}}</p><em v-if="list.is_offer" class="quoted">已报价</em><em v-else>还未报价</em></div>
              <div class="p2"><p v-if="list.expire">有效期{{list.expire}}</p><p v-else>已过期</p><h4 v-if="list.urgent == 1">加急</h4></div>
          </div>
          <span class="span2">{{list.type ? list.type : '不限'}}</span>
          <span class="span3">{{list.money_status ? list.money_status : '不限'}}</span>
          <span class="span4">{{list.create_time}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['type','newsList', 'sortType', 'status'],
  data(){
      return {
          allCheck: false,
          sort: this.sortType,
          moneyStatus: this.status,
          checkList: []
      }
  },
  watch: {
    sortType: function(newVal, oldVal){
      this.sort = newVal;
    },
    status: function(newVal, oldVal){
      this.moneyStatus = newVal;
    }
  },
  methods: {
      searchBytype: function(){
          this.$emit('searchBytypeOrStatus', this.sort, this.moneyStatus);
      },
      allCheckedChange: function(){
          var arr = [];
          if(this.allCheck){
              this.newsList.forEach(element => {
                  arr.push(element.needs_id);
              });
          }
          this.checkList = arr;
          this.$emit('checkedNum', this.checkList);
      },
      checkedChange: function(item){
          if(this.checkList.length <  this.newsList.length || this.newsList.length == 0){
              this.allCheck = false;
          }else{
              this.allCheck = true;
          }
          this.$emit('checkedNum', this.checkList);
      },
      deleteNeeds: function(id){
        this.$emit('deleteNeedsById', id);
      },
      sendPatent: function(info){
        this.$emit('sendPatent', info);
      }
  }
}
</script>


<style lang="scss" scoped>
.needs-list{width: 100%;clear: both;
  .bottom-title{width: 100%;height: 40px;background-color:#f2f3f4;margin-top: 20px;
    label{float: left; margin-left: 10px; font-size: 14px;color: #999999;line-height: 40px;
      span{display: inline-block; padding-left: 14px;width: 280px;}
    }
    div{float: left;display: block; width: 90px;height: 40px;line-height: 40px;font-size: 14px;color: #999999;margin-right: 20px;
    }
    .xzzt{margin-left: 20px;width: 110px;}
    select{ border: 0 none; height: 24px; background-color: #f2f3f4; color: #999999; }
  }
  ul{width: 100%;clear: both;
    li{width: 100%;border-bottom: 1px solid #dddddd; padding: 20px 0; overflow: hidden;
      input[type=checkbox]{float: left;margin-left:10px;}
      .slzl-box{float: left; width: 280px;padding-left: 14px;
        .p1{ font-size: 14px;line-height:20px;color: #333333;}
        .p2{ font-size: 12px;color: #999999;margin-top: 10px;padding-left: 20px;background: url("../../assets/images/member/yxq.png") no-repeat 0 2px;overflow: hidden;
          p{float: left;line-height: 20px;}
          h4{ float: left;width: 55px;height: 20px;color: #FF9966;line-height: 17px;border: 1px solid #FF9966;border-radius: 5px;background: url("../../assets/images/member/jiaji.png") no-repeat 9px 2px;margin-left: 10px;box-sizing: border-box;padding-left: 20px;}
        }
      }
      span{float:left; width: 110px;height: 30px; font-size: 14px;color: #666666;line-height: 30px;padding-left: 20px;
        &.span2,&.span3, &.span4{width: 90px;}
        &.span4{width: 160px;}
        &.span1 i{color: #009999;margin-left: 10px;}
      }
      .a1{float:left;box-sizing: border-box; width: 80px;height: 30px;font-size: 14px;color: #666666;text-align: center; line-height: 30px;border:1px solid #cccccc;border-radius: 5px;margin-left: 20px;}
      
    }
  }
}
.collect-list{
  @extend .needs-list;
  .bottom-title .xqxx {float: left;padding-left: 10px; width: 300px;font-size: 14px;color: #999999;line-height: 40px;margin-right: 255px;}
  ul li{
    .slzl-box{ width: 380px; padding-left: 10px;
      .p1{ overflow: hidden;
        p, em{ float: left; line-height: 20px;}
        p{ max-width: 300px;}
        em {width: 69px;height: 20px;font-size: 12px; color: #fff;text-align: center;background-color: #bdc4cc;border-radius: 10px;margin-left: 10px;
          &.quoted{ width: 57px; background-color: #009999; }
        }
      }
    }
    span.span2 {padding-left: 182px;}
    a.delet {float:right; margin-right: 10px;margin-left: 0;}
  }
}
.quote-list{
  @extend .collect-list;
}
</style>
