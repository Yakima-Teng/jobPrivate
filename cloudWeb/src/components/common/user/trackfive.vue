<template>
 <div class="container">
     <!-- <div class="track clearfix">
       <div >
           <p class="sub suS"> <i class="sus"></i> </p>
           <p>订单提交</p>
           <p>2018-08-03   22:15:30</p>
       </div>
       <div >
           <p class="pay"> <i></i> </p>
           <p>付款成功</p>
           <p>2018-08-03   22:15:30</p>
       </div>
       <div >
           <p class="acc"> <i></i> </p>
           <p class="ing">订单受理</p>
           <p class="ing">2018-08-03   22:15:30</p>
       </div>
       <div >
           <p class="subm"> <i></i> </p>
           <p>资料递交官方单位</p>
           <p>2018-08-03   22:15:30</p>
       </div>
       <div>
           <p class="final"> <i></i> </p>
           <p >完成</p>
           <p>2018-08-03   22:15:30</p>
       </div>
    </div> -->
    <div class="track clearfix">
        <div  v-for="(item, index) in dataD" :key="index">
            <p :class="[{suS:item.schedule_type==1},{ing:item.schedule_type==2},{final:dataD.length==index+1},{sub:index==0},{pay:index==1},{acc:index==2},{subm:index==3}]"> <i :class="{sus:item.schedule_type==1}"></i> </p>
            <p :class="{ing:item.schedule_type==2}">{{item.schedule_name}}</p>
            <p :class="{ing:item.schedule_type==2}">{{item.schedule_time}}</p>
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
                    background-position:-41px -79px ;
                }
                &.pay{
                    background-position:-99px -79px ;
                }
                &.acc{
                    background-position:-177px -79px ;
                    position: relative;
                    top:7px;
                    i{
                       top:7px;
                    }
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
