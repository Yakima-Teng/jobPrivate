<template>
  <div class="xq-right" v-if="type == 'needs'">
      <div class="box" v-if="process != 'end'">
        <h3>8项匹配<span class="span2">优质需求近在咫尺</span></h3>
        <div class="jindu">
            <div class="tiao">
                <i :class="{'cur01': curIndex > 0}"></i>
                <i :class="{'cur01': curIndex > 1}"></i>
                <i :class="{'cur01': curIndex > 2}"></i>
                <i :class="{'cur01': curIndex > 3}"></i>
                <i :class="{'cur01': curIndex > 4}"></i>
                <i :class="{'cur01': curIndex > 5}"></i>
                <i :class="{'cur01': curIndex > 6}"></i>
                <i :class="{'cur01': curIndex > 7}"></i>
            </div>
            <p><em>{{curIndex}}</em>/8</p>
        </div>
        <div class="jindu_ctt">
            <div class="list loading" v-if="process == 'processing' && curIndex == 0">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/load.gif" alt="">
                <span>专利类型过滤</span>
            </div>
            <div class="list finish" v-else-if="curIndex">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/finish.png" alt="">
                <span>专利类型过滤</span>
            </div>
            <div class="list" v-else>
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/weijiazai.png" alt="">
                <span>专利类型过滤</span>
            </div>

            <div class="list loading" v-if="process == 'processing' && curIndex == 1">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/load.gif" alt="">
                <span>关键词匹配</span>
            </div>
            <div class="list finish" v-else-if="curIndex > 1">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/finish.png" alt="">
                <span>关键词匹配</span>
            </div>
            <div class="list" v-else>
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/weijiazai.png" alt="">
                <span>关键词匹配</span>
            </div>

            <div class="list loading" v-if="process == 'processing' && curIndex == 2">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/load.gif" alt="">
                <span>专利摘要匹配</span>
            </div>
            <div class="list finish" v-else-if="curIndex > 2">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/finish.png" alt="">
                <span>专利摘要匹配</span>
            </div>
            <div class="list" v-else>
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/weijiazai.png" alt="">
                <span>专利摘要匹配</span>
            </div>

            <div class="list loading" v-if="process == 'processing' && curIndex == 3">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/load.gif" alt="">
                <span>服务/产品/商品延展匹配</span>
            </div>
            <div class="list finish" v-else-if="curIndex > 3">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/finish.png" alt="">
                <span>服务/产品/商品延展匹配</span>
            </div>
            <div class="list" v-else>
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/weijiazai.png" alt="">
                <span>服务/产品/商品延展匹配</span>
            </div>

            <div class="list loading" v-if="process == 'processing' && curIndex == 4">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/load.gif" alt="">
                <span>需求有效性过滤</span>
            </div>
            <div class="list finish" v-else-if="curIndex > 4">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/finish.png" alt="">
                <span>需求有效性过滤</span>
            </div>
            <div class="list" v-else>
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/weijiazai.png" alt="">
                <span>需求有效性过滤</span>
            </div>

            <div class="list loading" v-if="process == 'processing' && curIndex == 5">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/load.gif" alt="">
                <span>需求成交几率计算</span>
            </div>
            <div class="list finish" v-else-if="curIndex > 5">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/finish.png" alt="">
                <span>需求成交几率计算</span>
            </div>
            <div class="list" v-else>
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/weijiazai.png" alt="">
                <span>需求成交几率计算</span>
            </div>

            <div class="list loading" v-if="process == 'processing' && curIndex == 6">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/load.gif" alt="">
                <span>需求竞争风险计算</span>
            </div>
            <div class="list finish" v-else-if="curIndex > 6">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/finish.png" alt="">
                <span>需求竞争风险计算</span>
            </div>
            <div class="list" v-else>
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/weijiazai.png" alt="">
                <span>需求竞争风险计算</span>
            </div>

            <div class="list loading" v-if="process == 'processing' && curIndex == 7">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/load.gif" alt="">
                <span>过滤已报价过专利</span>
            </div>
            <div class="list finish" v-else-if="curIndex > 7">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/finish.png" alt="">
                <span>过滤已报价过专利</span>
            </div>
            <div class="list" v-else>
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/weijiazai.png" alt="">
                <span>过滤已报价过专利</span>
            </div>
        </div>
      </div>
      <div class="box" v-else>
        <h3>匹配结果</h3>
        <p class="result-des">找到结果<em>{{needs.total}}</em>条</p>
        <div class="list-box">
            <ul>
                <li v-for="(item, index) in needs.list" :key="index">
                    <div class="img-box"><img v-if="item.head_img != ''" :src="item.head_img" alt=""><img v-else src="../../assets/images/u26.jpg" alt=""></div>
                    <div class="slzl-box">
                        <p class="p1">{{item.content}}</p>
                        <p class="p3">要求：<span v-for="(tag, j) in item.tags" :key="j">{{tag}}</span></p>
                    </div>
                    <a href="javascript:void(0);" class="a1" v-if="collect.indexOf(item.needs_id) == -1" @click="careHandle('care', item)">收藏</a>
                    <a href="javascript:void(0);" class="a3" v-else @click="careHandle('uncare', item)">已收藏</a>
                    <a href="javascript:void(0);" class="a2" @click="sendPatent(item)" v-if="item.is_offer">给TA发专利</a>
                    <a href="javascript:void(0);" class="a4" v-else>已发过专利</a>
                </li>
            </ul>
            <a v-show="isLoad" class="btn-load" href="javascript:void(0)">加载中</a>
        </div>
      </div>
  </div>
  <div class="xq-right" v-else>
      <div class="box" v-if="process != 'end'">
        <h3>8项匹配<span class="span2">包括精准度、适配范围、安全风险等</span></h3>
        <div class="jindu">
            <div class="tiao">
                <i :class="{'cur01': curIndex > 0}"></i>
                <i :class="{'cur01': curIndex > 1}"></i>
                <i :class="{'cur01': curIndex > 2}"></i>
                <i :class="{'cur01': curIndex > 3}"></i>
                <i :class="{'cur01': curIndex > 4}"></i>
                <i :class="{'cur01': curIndex > 5}"></i>
                <i :class="{'cur01': curIndex > 6}"></i>
                <i :class="{'cur01': curIndex > 7}"></i>
            </div>
            <p><em>{{curIndex}}</em>/8</p>
        </div>
        <div class="jindu_ctt">
            <div class="list loading" v-if="process == 'processing' && curIndex == 0">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/load.gif" alt="">
                <span>核心关键词匹配</span>
            </div>
            <div class="list finish" v-else-if="curIndex">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/finish.png" alt="">
                <span>核心关键词匹配</span>
            </div>
            <div class="list" v-else>
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/weijiazai.png" alt="">
                <span>核心关键词匹配</span>
            </div>
            <div class="list loading" v-if="process == 'processing' && curIndex == 1">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/load.gif" alt="">
                <span>专利类型过滤</span>
            </div>
            <div class="list finish" v-else-if="curIndex > 1">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/finish.png" alt="">
                <span>专利类型过滤</span>
            </div>
            <div class="list" v-else>
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/weijiazai.png" alt="">
                <span>专利类型过滤</span>
            </div>
            <div class="list loading" v-if="process == 'processing' && curIndex == 2">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/load.gif" alt="">
                <span>专利下证状态提取验证</span>
            </div>
            <div class="list finish" v-else-if="curIndex > 2">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/finish.png" alt="">
                <span>专利下证状态提取验证</span>
            </div>
            <div class="list" v-else>
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/weijiazai.png" alt="">
                <span>专利下证状态提取验证</span>
            </div>
            <div class="list loading" v-if="process == 'processing' && curIndex == 3">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/load.gif" alt="">
                <span>专利分类行业分析</span>
            </div>
            <div class="list finish" v-else-if="curIndex > 3">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/finish.png" alt="">
                <span>专利分类行业分析</span>
            </div>
            <div class="list" v-else>
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/weijiazai.png" alt="">
                <span>专利分类行业分析</span>
            </div>
            <div class="list loading" v-if="process == 'processing' && curIndex == 4">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/load.gif" alt="">
                <span>服务/产品/商品适用范围查询</span>
            </div>
            <div class="list finish" v-else-if="curIndex > 4">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/finish.png" alt="">
                <span>服务/产品/商品适用范围查询</span>
            </div>
            <div class="list" v-else>
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/weijiazai.png" alt="">
                <span>服务/产品/商品适用范围查询</span>
            </div>

            <div class="list loading" v-if="process == 'processing' && curIndex == 5">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/load.gif" alt="">
                <span>产品/商品关联延展查询</span>
            </div>
            <div class="list finish" v-else-if="curIndex > 5">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/finish.png" alt="">
                <span>产品/商品关联延展查询</span>
            </div>
            <div class="list" v-else>
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/weijiazai.png" alt="">
                <span>产品/商品关联延展查询</span>
            </div>

            <div class="list loading" v-if="process == 'processing' && curIndex == 6">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/load.gif" alt="">
                <span>专利有效性过滤</span>
            </div>
            <div class="list finish" v-else-if="curIndex > 6">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/finish.png" alt="">
                <span>专利有效性过滤</span>
            </div>
            <div class="list" v-else>
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/weijiazai.png" alt="">
                <span>专利有效性过滤</span>
            </div>

            <div class="list loading" v-if="process == 'processing' && curIndex == 7">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/load.gif" alt="">
                <span>专利风险监测</span>
            </div>
            <div class="list finish" v-else-if="curIndex > 7">
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/finish.png" alt="">
                <span>专利风险监测</span>
            </div>
            <div class="list" v-else>
                <i class="ok"></i>
                <img class="img1" src="../../assets/images/match/weijiazai.png" alt="">
                <span>专利风险监测</span>
            </div>
        </div>
      </div>
      <div class="box" v-else>
          <h3>匹配结果</h3>
        <p class="result-des">找到结果<em>{{patent.total}}</em>条</p>
        <div class="list-box">
            <ul>
                <li v-for="(item, index) in patent.list" :key="index">
                    <div class="box_bg pract" v-if="item._source.type == 106">实用</div>
                    <div class="box_bg outward" v-else-if="item._source.type == 107">外观</div>
                    <div class="box_bg invent" v-else>发明</div>
                    <div class="slzl-box">
                        <p class="p1">{{item._source.name}}</p>
                        <p class="p3">申请号：{{item._source.reg_id}}</p>
                    </div>
                    <span class="span1">{{item._source.attrs.status_str}}</span>
                    <span class="span2" v-if="parseFloat(item._source.attrs.price) > 0">{{item._source.attrs.price}}</span>
                    <span class="span2" v-else>面议</span>
                </li>
            </ul>
            <a v-show="isLoad" class="btn-load" href="javascript:void(0)">加载中</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Matching',
  props: ['type', 'process'],
  data () {
    return {
      curIndex: 0,
      isLoad: false
    }
  },
  watch: {
      process: function(newVal, oldVal){
        var _this = this;
        if(newVal == 'start'){
            this.curIndex = 0;
        }else if(newVal == 'processing'){
            var t = setInterval(function(){
                _this.curIndex += 1;
                if(_this.curIndex == 8){
                    clearInterval(t);
                    _this.$emit('processChange', 'end');
                }
            }, 1000);
        }else{
            this.curIndex = 0;
            setTimeout(function(){
                var box = $('.list-box');
                var boxHeight = box.height();
                var doc = box.find('ul');
                box.scroll(function(){
                    if(!_this.isLoad && $(this).scrollTop() >= doc.height()-boxHeight){
                        _this.isLoad = true;
                        // 加载数据
                        setTimeout(function(){
                            _this.$emit('changePagesInfo');
                            _this.isLoad = false;
                        },100);
                    }
                });
            }, 1);
        }
      }
  },
  computed: {
    patent(){
        var patent = this.$store.state.patent.patent;
        return patent != null ? patent.patent : null;
    },
    needs(){
        var needs = this.$store.state.patent.needs;
        return needs != null ? needs.needs : null;
    },
    collect(){
        var needs = this.$store.state.patent.needs;
        return needs != null ? needs.collect : [];
    }
  },
  methods: {
      careHandle: function(type, info){
          this.$emit('careHandle', type, info);
      },
      sendPatent: function(info){
        this.$emit('sendPatent', info);
      }
  }
}
</script>

<style lang="scss" scoped>
$main: #333;
$red: #cc0000;
$bg-red: #f0b3b3;
$bg-green: #80cccc;
$bg-blue: #99cce6;
.xq-right{ width: 670px; background-color: #fff; padding: 30px 30px 40px; box-sizing: border-box;}
.xq-right h3{font-size: 28px;color: $main;
  .span2{margin-left:14px;font-size: 18px;color: lighten($main,20%);}
}
.xq-right .jindu{width: 100%;margin-top: 20px; overflow: hidden;}
.xq-right .jindu .tiao{float: left;border-radius: 5px;overflow: hidden;}
.jindu .tiao i{float: left;width: 71px;height: 10px;background-color: #eeeeee;}
.jindu .tiao .cur01{background-color: #107ad7;}
.jindu .tiao .cur02{background-color: #2d8ee3;}
.jindu .tiao .cur03{background-color: #56abf6;}
.jindu .tiao .cur04{background-color: #56cbf6;}
.jindu .tiao .cur05{background-color: #56daf6;}
.jindu .tiao .cur06{background-color: #56e9f6;}
.jindu .tiao .cur07{background-color: #67fbef;}
.jindu .tiao .cur08{background-color: #b0ffea;}
.xq-right .jindu p{float: left;font-size: 15px;color: lighten($main,40%);margin-left: 10px;margin-top: -2px;}
.xq-right .jindu_ctt{margin-top: 10px;}
.jindu_ctt .list{border-bottom: 1px solid #eeeeee;width: 100%; padding: 20px 0; line-height: 20px;
  .ok{display:none;float: right; margin-right: 10px; width: 17px; height: 17px; background: url(../../assets/images/match/ok.png) center no-repeat;}
  .img1,span{display:inline-block;margin-left: 10px;}
  .img1{vertical-align: top;}
  span{ line-height: 20px;}
  &.finish{.ok{display: block;}}
  &.loading{background-color: #f3fdfe;}
}
.xq-right .result-des{ margin-top: 15px; margin-bottom: 17px; font-size: 14px; color: lighten($main, 40%); line-height: 20px;
    em{ color: $main;}
}
.xq-right {
    .list-box{ width: 100%; height: 546px; overflow-y: scroll;
        ul{ border-top: 1px solid #ddd; overflow: hidden;}
        li{ display: flex; flex-direction: row; border-bottom: 1px solid #ddd; padding: 19px 12px 19px 0; font-size: 14px;
            .img-box{display: block; margin-right: 10px; justify-content: center; align-content: center; width: 40px; height: 40px; border-radius: 50%; border: 1px solid #ebebeb; box-sizing: border-box; overflow: hidden;
                img{display: block;max-width: 40px; max-height:40px;}
            }
            .slzl-box{ width: 280px;overflow: hidden;
                .p1{ font-size: 14px; line-height: 20px; color: #1E1E1E;}
                .p3{ margin-top: 10px; font-size: 12px; color: lighten($main, 40%);
                    span{ display: inline-block; margin-left: 10px; border: 1px solid #ddd; padding: 0 4px; line-height: 22px; border-radius: 5px;}
                }
            }
            a{ height: 30px; padding-right: 10px; line-height: 30px; border-radius: 5px; box-sizing: border-box;}
            .a3{width: 86px; margin-left: 27px; padding-left: 34px;color: #fff;background: url("../../assets/images/u287.png") 10px 8px no-repeat $red;}
            .a1{width: 86px; margin-left: 42px;padding-left:32px;color:lighten($main, 20%);background: url("../../assets/images/u278.png") no-repeat 10px 8px;}
            .a2{margin-left:10px; width: 120px; border: 1px solid #009999;background:url("../../assets/images/hall/give.png") no-repeat 8px 4px; padding-left: 32px; color: #009999; text-align: center;}
            .a4{
                @extend .a2;
                background-color: #f2f3f4;
                border: 0 none;
                color: #999;
                background-image: url("../../assets/images/hall/give02.png");
            }
            .box_bg{ margin-right: 20px; width: 50px; height: 50px; line-height: 50px;color: #fff; text-align: center; border-radius: 5px;
                &.pract{background-color: $bg-green;}
                &.outward{background-color: $bg-blue;}
                &.invent{background-color: $bg-red;}
            }
            span{ line-height: 42px; margin-left: 60px;
                &.span1{ width: 42px; }
                &.span2{ width: 68px; text-align: right; color: $red;}
            }
        }
    }
    .btn-load{ display: block; margin: 20px auto 0; width: 140px; height: 40px; font-size: 14px; line-height: 38px; border: 1px solid #ddd; border-radius: 5px; color: lighten($main, 40%); text-align: center; box-sizing: border-box;}
}
</style>
