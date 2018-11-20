<template>
 <div class="container">
     <!-- <div class="track clearfix">
       <div >
           <p class="sub suS"> <i class="sus"></i> </p>
           <p>订单提交</p>
           <p>2018-08-03   22:15:30</p>
       </div>
       <div >
           <p class="cancel"> <i class="sus"></i> </p>
           <p>已取消</p>
           <p>2018-08-03   22:15:30</p>
       </div>
       <div>
           <p class="final suS"> <i></i> </p>
           <p >完成</p>
           <p>2018-08-03   22:15:30</p>
       </div>
    </div> -->
    <div class="track clearfix">
        <div  v-for="(item, index) in dataD" :key="index">
            <p :class="[{suS:index!=1},{final:dataD.length==index+1},{sub:index==0},{cancel:index==1}]"> <i class="sus"></i> </p>
            <p >{{item.schedule_name}}</p>
            <p >{{item.schedule_time}}</p>
        </div> 
    </div>
 </div>
</template>

<script>
export default {
    props:['dataD'],
 data() {
  return {
    //   data:[{
    //       stu:3,
    //       name:"订单提交",
    //       time:'2018-08-03   22:15:3',
    //   },{
    //       stu:3,
    //       name:"付款成功",
    //       time:'2018-08-03   22:15:3',
    //   },{
    //       stu:2,
    //       name:"订单受理",
    //       time:'2018-08-03   22:15:3',
    //   },{
    //       stu:1,
    //       name:"资料递交官方单位",
    //       time:'2018-08-03   22:15:3',
    //   },{
    //       stu:1,
    //       name:"完成",
    //       time:'2018-08-03   22:15:3',
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
            float: left;
            margin-left: 45px;
            text-align: center;
            width: 123px;
            p{
                font-size: 16px;
                color: #999999;
                &.final{
                    i{
                        display: none;
                    }
                }
            }
            p:nth-child(1){
                width: 32px;
                height: 30px;
                background: url(../../../static/images/user/order/detxbt.png)  no-repeat;
                position: relative;
                top:4px;
                margin: 0 auto;
                i{
                    position: absolute;
                    left:35px;
                    top:10px;
                    width: 114px;
                    height: 10px;
                    background: url(../../../static/images/user/order/detxbt.png) -385px -88px no-repeat;
                    &.sus{
                        background-position-y: -41px;
                    }
                }
                &.sub{
                    background-position:-41px -79px;
                }
                &.cancel{
                    background: url(../../../static/images/user/order/cancel.png) 0px 0px no-repeat;
                }
                &.subm{
                    background-position:-250px -79px ;
                }
                &.final{
                    background-position:-313px -79px ;
                }
                &.suS{
                    background-position-y:-36px ;
                }
                &.ing{
                    background-position-y:-36px ;
                }
            }
            p:nth-child(2){
                margin-top: 25px;
                &.ing{
                    color: #333333;
                }
            }
            p:nth-child(3){
                font-size: 12px;
                margin-top: 10px;
                &.ing{
                    color: #333333;
                }
            }
        }
    }
</style>
