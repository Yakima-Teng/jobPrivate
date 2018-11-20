<template>
 <div class="container">
     <div class="track">
       <!-- <div class="clearfix">
           <p> <i></i> </p>
           <p>订单提交</p>
       </div>
       <div class="clearfix">
           <p class="sus"> <i></i> </p>
           <p>付款成功</p>
       </div>
       <div class="clearfix">
           <p class="ing"> <i></i> </p>
           <p class="ing">订单受理</p>
       </div>
       <div class="clearfix">
           <p> <i></i> </p>
           <p>资料递交官方单位</p>
       </div>
       <div class="clearfix">
           <p class="final"> <i></i> </p>
           <p >完成</p>
       </div> -->
       
       <div v-if='type=="server"' v-for="(item, index) in dataT" :key="index">
           <p :class="[{sus:item.state==1},{ing:item.state==2},{final:dataT.length==index+1}]"> <i></i> </p>
           <p :class="{ing:item.state==2}"><em>{{item.name}}</em> <span v-if='item.recordUpdateTime!=0'>{{item.recordUpdateTime}}</span></p>
       </div>
       <div v-if='type=="schedule"' class="clearfix" v-for="(item, index) in dataT" :key="index">
           <p :class="[{sus:item.schedule_type==1},{ing:item.schedule_type==2},{final:dataT.length==index+1}]"> <i></i> </p>
           <p :class="{ing:item.schedule_type==2}"><em>{{item.schedule_name}}</em> <span>{{item.time}}</span></p>
       </div>
    </div>
 </div>
</template>

<script>
export default {
    props:['dataT','type'],
 data() {
  return {
    //   data:[{
    //       stu:3,
    //       name:"订单提交"
    //   },{
    //       stu:3,
    //       name:"付款成功"
    //   },{
    //       stu:2,
    //       name:"订单受理"
    //   },{
    //       stu:1,
    //       name:"资料递交官方单位"
    //   },{
    //       stu:1,
    //       name:"完成"
    //   },
    //   ]
  }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
    .track{
        div{
            padding-left: 24px;
            height: 40px;
            p{
                float: left;
                font-size: 14px;
                color: #999999;
                &.final{
                    i{
                        display: none;
                    }
                }
            }
            p:nth-child(1){
                width: 6px;
                height: 6px;
                background: url(../../../static/images/user/order/track.png) -9px 0 no-repeat;
                position: relative;
                top:4px;
                &.sus{
                    background-position-x: -29px;
                }
                &.ing{
                    width: 13px;
                    height: 13px;
                    background-position-x: -49px;
                    position: relative;
                    left:-3px;
                    i{
                        bottom:-25px;
                    }
                }
                i{
                    position: absolute;
                    left:50%;
                    transform: translateX(-50%);
                    bottom:-28px;
                    width: 1px;
                    height: 24px;
                    background: url(../../../static/images/user/order/track.png) 0 0 no-repeat;
                }
            }
            p:nth-child(2){
                margin-left: 15px;
                &.ing{
                    color: #333333;
                    margin-left: 9px;
                }
                em{
                    display: inline-block;
                    min-width: 90px;
                    vertical-align: middle;
                }
            }
        }
    }
</style>
