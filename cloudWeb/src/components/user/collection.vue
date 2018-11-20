<template>
 <div class="container">
     <p class="collection-head">收藏的商品</p>
     <div class="contacts-body" :class="{marbody:total<16}">
        <div class="clearfix">
            <div v-show="!collectionNone" v-for="(item,index) in collection" :key="index">
                <div @click="to(item.product_id)"   class="collectionBox"   v-if="item.sku_info!=''">
                    <div><img :src="item.product_img" alt=""></div>
                    <p>{{item.product_name}}</p>
                    <span :title="item.product_desc">{{item.product_desc}}</span>
                    <em v-if="item.sku_info.sku_buy_status == 1">￥{{item.sku_info.sku_price}}</em>
                    <a v-if="item.sku_info.sku_buy_status != 1" class="advisory" @click.stop="openzxFn">立即咨询<i class="icon icon-right"></i></a>
                    <var @click.stop="del(item.product_id)">取消收藏</var>
                </div>
                <!-- <div @click="to(item.product_id)"   class="collectionBox" v-else>
                    <div><img :src="item.product_img" alt=""></div>
                    <p>{{item.product_name}}</p>
                    <span :title="item.product_desc">{{item.product_desc}}</span>
                    <span class="sku_info">已下架</span>
                    <var @click="del(item.product_id)">取消收藏</var>
                </div> -->
            </div>
            
            <!-- <div class="collectionBox" v-show="!collectionNone">
                <div><img src="../../static/images/user/logo.png" alt=""></div>
                <p>提供注册商标使用证据（商标撤三答辩）</p>
                <span>为国内人申请人提供包括商标</span>
                <em>￥1590.00</em>
                <var>取消收藏</var>
            </div> -->
            <!-- <div class="collectionBox" v-show="!collectionNone">
                <div><img src="../../static/images/user/logo.png" alt=""></div>
                <p>提供注册商标使用证据（商标撤三答辩）</p>
                <span>为国内人申请人提供包括商标</span>
                <em>￥1590.00</em>
                <var>取消收藏</var>
            </div>
            <div class="collectionBox" v-show="!collectionNone">
                <div><img src="../../static/images/user/logo.png" alt=""></div>
                <p>提供注册商标使用证据（商标撤三答辩）</p>
                <span>为国内人申请人提供包括商标</span>
                <em>￥1590.00</em>
                <var>取消收藏</var>
            </div>
            <div class="collectionBox" v-show="!collectionNone">
                <div><img src="../../static/images/user/logo.png" alt=""></div>
                <p>提供注册商标使用证据（商标撤三答辩）</p>
                <span>为国内人申请人提供包括商标</span>
                <em>￥1590.00</em>
                <var>取消收藏</var>
            </div>
            <div class="collectionBox" v-show="!collectionNone">
                <div><img src="../../static/images/user/logo.png" alt=""></div>
                <p>提供注册商标使用证据（商标撤三答辩）</p>
                <span>为国内人申请人提供包括商标</span>
                <em>￥1590.00</em>
                <var>取消收藏</var>
            </div>
            <div class="collectionBox" v-show="!collectionNone">
                <div><img src="../../static/images/user/logo.png" alt=""></div>
                <p>提供注册商标使用证据（商标撤三答辩）</p>
                <span>为国内人申请人提供包括商标</span>
                <em>￥1590.00</em>
                <var>取消收藏</var>
            </div>
            <div class="collectionBox" v-show="!collectionNone">
                <div><img src="../../static/images/user/logo.png" alt=""></div>
                <p>提供注册商标使用证据（商标撤三答辩）</p>
                <span>为国内人申请人提供包括商标</span>
                <em>￥1590.00</em>
                <var>取消收藏</var>
            </div>
            <div class="collectionBox" v-show="!collectionNone">
                <div><img src="../../static/images/user/logo.png" alt=""></div>
                <p>提供注册商标使用证据（商标撤三答辩）</p>
                <span>为国内人申请人提供包括商标</span>
                <em>￥1590.00</em>
                <var>取消收藏</var>
            </div> -->
        </div>
        <div class="collectionNone" v-if="collectionNone">
            <p><img src="../../static/images/user/collection/collectionNone.png" alt=""></p>
            <span>您目前还没有收藏商品哦~</span>
            <div>
                <router-link to="/" class="button">再逛逛</router-link>
            </div>
        </div>
    </div>
    <div class="pagination-body" v-show="!collectionNone" v-if="total>16"><pagination @changePagesInfo="changePagesInfo"></pagination></div>
</div>
</template>

<script>
import pagination from '../common/pagination.vue';
import Api from '../../static/js/api.js'
import {postFn,openzx} from '../../static/js/util.js'
import {mapState} from 'vuex'
export default {
metaInfo () {
    return {
        title: '收藏夹-创新科技服务云平台',
    }
},
 data() {
  return {
      collectionNone:true,
      collectionDataId:" ",//商品id
      collection:'',//商品
      total:0//总数
  }
 },
 created() {
     if(this.isLogin){
		this.getCollect();
	}else{
        this.userView=this.$route.query.userView;
		this.$router.push({path:'/login',query:{userView:this.userView}})
	}
     
 },
 computed: {
     ...mapState(['isLogin'])
},
 components: {
     'pagination':pagination
 },
 methods: {
     openzxFn(){
         //打开商务通
         openzx();
     },
     getCollect(){
         //获取收藏
         Api.getCollect().then(res=>{
             console.log(res.data.data,"num");
             var data=[]
             if(res.data.code==200){
                 this.collectionDataId=res.data.data;
                 var last_page=Math.ceil(this.collectionDataId.total/16);
                this.total=this.collectionDataId.total;
                this.$store.dispatch("getLastPage", last_page);
                 var product_ids=[];
                 this.collectionDataId.list.forEach(element => {
                     product_ids.push(element.collect_id);
                 });
                 var data={
                     product_ids :product_ids + '',
                     want_array:1,
                 };
                 var that=this;
                 postFn("/product/product/infos",data,function(res){
                     console.log(res);
                     if(res.data.code==200){
                         if(res.data.data.length!=0&&res.data.data_2.valid_sku_num>0){
                            that.collectionNone=false;
                        }else{
                             that.collectionNone=true;
                        }
                      console.log(res.data.data,"详情");
                      that.collection=res.data.data
                     }
                 })
             }
         })
     },
     del(id){
         //取消收藏
         Api.delCollect(id).then(res=>{
             if(res.data.code==200){
                  this.getCollect();
             }
            
         })
     },
     changePagesInfo: function(type,curPage){ // 页码更改操作
        var page = curPage;
        if(type == 'add'){
            page = curPage + 1;
        }else if(type == 'less'){
            page = curPage - 1;
        }
        this.dataFun(page);
    },
    dataFun: function(curPage){
        Api.getCollect(curPage).then(res=>{
            if(res.data.code==200){
                this.collectionDataId=res.data.data;
                var last_page=Math.ceil(this.collectionDataId.total/16);
                this.total=this.collectionDataId.total;
                this.$store.dispatch("getLastPage", last_page);
                this.$store.dispatch("jumpAction", {page: curPage});
                var product_ids=[];
                this.collectionDataId.list.forEach(element => {
                     product_ids.push(element.collect_id);
                 });
                 var data={
                     product_ids :product_ids + ''
                 };
                 var that=this;
                 postFn("/product/product/infos",data,function(res){
                     if(res.data.code==200){
                         if(res.data.data.length!=0&&res.data.data_2.valid_sku_num>0){
                            that.collectionNone=false;
                        }else{
                            that.collectionNone=true;
                        }
                      that.collection=res.data.data
                      window.scrollTo(0, 0);
                     }
                 })

            }
        })

    },
    to(id){
        window.open(window.location.origin +'/'+id)
    }
 }
}
</script>

<style scoped lang="scss">
    .advisory{
        position: relative;
        display: block;
        width: 100px;
        text-align: center;
        height: 18px;
        color: #4685c3;
        margin: 14px auto 0;
        cursor: pointer;
        z-index: 1;
        .icon{
            font-size: 16px;
            color: inherit;
            font-weight: bold;
            // vertical-align: text-bottom;
        }
        &:hover{
            color: #e52e3a;
        }
        .icon-right{
            position: relative;
            top:1px;
        }
    }
    .collection-head{
        font-size: 16px;
        color: #333333;
        font-weight: bold;
        padding: 28px 0 14px 42px;
        border-bottom: 1px solid #eeeeee;
        background: white;
        width: 1040px;
        box-sizing: border-box; 
        margin-top: 10px;
    }
    .contacts-body{
        min-height: 600px;
        padding: 10px 40px 10px 26px;
        &.marbody{
            margin-bottom: 80px;
        }
        background: white;
        width: 1040px;
        box-sizing: border-box;  
        position: relative;
        .collection-content{
            text-align: center;
            height: 339px;
            p{
                background:url(../../static/images/user/xbt.png) no-repeat -216px -202px;
                width: 43px;
                height: 42px;
                margin: 90px auto 0;
            }
            span{
                display: inline-block;
                margin-top: 28px;
                color: #a1a1a1;
                font-size: 14px;
            }
        }
        .collectionBox{
            padding: 0 20px 22px;
            text-align: center;
            width: 230px;
            margin-left: 13px;
            box-sizing: border-box;
            float: left;
            cursor: pointer;
            margin-top: 10px;
            background: #fafafa;
            position: relative;
            height: 230px;
            &:hover{
                top:-4px;
                var{
                    display: block;
                }
                p{
                    color: #e52e3a;
                }
            }
            var{
                position: absolute;
                background:#cccccc;
                width: 60px;
                height: 20px;
                top:0;
                right: 0;
                line-height: 20px;
                text-align: center;
                color: white;
                font-size: 12px;
                &:hover{
                    color: #999999;
                }
                display: none;
            }
            div{
                padding-top: 10px;
                img{
                    width: 92px;
                    height: 92px;
                }
            }
            p{
                margin-top: 10px;
                font-size: 16px;
                line-height: 20px;
                color:#333333;
                height: 40px;
            }
            span{
                margin-top: 10px;
                display: block;
                font-size: 12px;
                color:#999999;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                word-break: break-all;
                &.sku_info{
                    font-size: 16px;
                }
            }
            em{
                margin-top: 15px;
                display: block;
                font-size: 16px;
                color: #e52e3a;
            }
        }
        .collectionNone{
            text-align: center;
            p{
                width: 130px;
                height: 102px;
                margin: 149px auto 53px;
            }
            span{
                font-size: 18px;
                color: #333333;
            }
            div{
                margin-top: 40px;
                .button{
                    display: inline-block;
                    width: 140px;
                    height: 38px;
                    line-height: 38px;
                    font-size: 16px;
                    outline: none;
                    border: none;
                    background: #e52e3a;
                    color: white;
                    cursor: pointer;
                    &:hover{
                        background: #ff3341;
                    }
                }
            }
        }
    }
    .pagination-body{
        overflow: hidden;
        padding-bottom: 40px;
        background: white;
        margin: 0 auto 80px;
    }
</style>
