<template>
<div class="patent-search">
    <div class="content_ctt">
        <div class="input-wrap">
            <div class="gjc">
                {{current}}
                <div class="xl1">
                    <a href="javascript:void(0);" class="a1" @click="dropDownPatent('关键词')">关键词</a>
                    <a href="javascript:void(0);" class="a2" @click="dropDownPatent('专利申请号')">专利申请号</a>
                </div>
            </div>
            <input type="text" :placeholder="place" v-model="inp">
            <a href="javascript:void(0)" class="find" @click="resultUpdate"></a>
        </div>
        <div class="btn-wrap">
            <a href="javascript:void(0);" class="btn-cs">出售专利</a>
        </div>
        <div class="select-wrap">
            <select v-model="patentType">
                <option value="">专利类型：不限</option>
                <option value="105">专利类型：发明</option>
                <option value="106">专利类型：实用新型</option>
                <option value="107">专利类型：外观</option>
            </select>
            <select v-model="patentStatus">
                <option value="">下证状态：不限</option>
                <option value="98">下证状态：已下证</option>
                <option value="99">下证状态：未缴费</option>
            </select>
            <select v-model="price">
                <option value="">价格：不限</option>
                <option value="0">价格：面议</option>
                <option value="1,2000">价格：2000以下</option>
                <option value="1,5000">价格：5000以下</option>
                <option value="5000,10000">价格：5000-1万</option>
                <option value="10000,20000">价格：1-2万</option>
                <option value="20000,30000">价格：2-3万</option>
                <option value="50000,100000">价格：5-10万</option>
                <option value="100000">价格：10万以上</option>
            </select>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'PatentSearch',
  props: ['searchType','patentCurrent', 'patentPlace', 'search', 'status', 'type'],
  data () {
    return {
      current: this.patentCurrent,
      place: this.patentPlace,
      inp: this.search,
      searchKey: this.searchType,
      patentType: this.type,
      patentStatus: this.status.length && this.status.indexOf(',') == -1 ? this.status : '',
      price: ''
    }
  },
  methods: {
      dropDownPatent: function(current){
          this.current = current;
          if(current == '关键词'){
              this.place = '专利关键词（多个词请用小写;隔开）';
              this.searchKey = 'keywods';
          }else{
              this.place = '专利申请号';
              this.searchKey = 'reg_id';
          }
      },
      resultUpdate: function(){
          
      }
  }
}
</script>

<style lang="scss" scoped>
$main: #333;
$border01: #ccc;
$border02: #ddd;
$red: #cc0000;
.patent-search{width: 100%;height: 159px; margin:0 auto;background: url("../../assets/images/patent/zlzy.png") no-repeat 0 0;background-size: 100%;
    .content_ctt{width: 1190px;height: 100%;overflow: hidden;margin: 0 auto;
        .input-wrap{float: left; position: relative; width: 720px;height: 40px;margin: 30px auto 0;border-radius: 5px; background-color: #fff;border: 1px solid #fff;
            .gjc{ position: relative;box-sizing: border-box;padding-left: 10px;float: left;width: 130px;height: 40px;font-size: 14px;color: lighten($main, 20%);line-height: 40px;background: url(../../assets/images/xiasanjiao2.png) no-repeat 100px 16px;cursor: pointer;z-index: 20;background-color: #fff;
                .xl1{display: none; position: absolute;top: 40px;left: -1px; width: 130px;height: 81px;border: 1px solid $border02;background-color: #fff;z-index: 10;overflow: hidden;
                    a{box-sizing: border-box; display: block;padding-left: 10px;color: $main;width:130px;height: 40px; background-color: #fff;font-size: 14px;padding-left: 20px;text-align: left;overflow: hidden;line-height: 40px;
                        &:hover{color: $red;}
                    }
                }
                &:hover .xl1{ display: block; }
            }
            input{ float: left; padding-left: 10px; width: 589px;height: 40px;border: none;border-left: 1px solid $border01; box-sizing: border-box;}
            a.find{position: absolute; width: 22px;height: 22px;right: 10px;top: 10px; background: url("../../assets/images/patent/gjc-sousuo.png") no-repeat 0 0;}
        }
    }
    .btn-wrap{float: right; width: 160px;height: 40px;overflow: hidden;margin-top: 30px;
        .btn-cs{display: block;box-sizing: border-box;width: 100%;height: 100%;border: 1px solid #fff;border-radius: 5px;text-align: center;line-height: 40px;color: #fff;}
    }
    .select-wrap{clear: both;width: 620px;height: 40px;padding-top: 20px;
        select{float: left; width: 200px;height: 40px;background-color: #fff;border-radius: 5px;margin-right: 10px; font-size: 14px;color: lighten($main, 20%);
            &:nth-child(3){margin-right: 0px;}
        }

    }
}
</style>
