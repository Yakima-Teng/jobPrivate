<template>
 <div class="container">
     <div class="step">
        <el-steps :active="activeStep" align-center finish-status="success">
            <el-step title="确认身份"></el-step>
            <el-step title="安全验证"></el-step>
            <el-step title="重置密码"></el-step>
            <el-step title="完成" ></el-step>
        </el-steps>
     </div>
 </div>
</template>

<script>
export default {
 data() {
  return {
    //   activeStep:'',
  }
 },
 mounted (){
     this.isIe9();
 },
 methods: {
     //ie9特殊样式处理
     isIe9:function(){
         if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0") { 
            var step=document.querySelectorAll('.el-step__icon');
            [].forEach.call(step, function(el){　
            　　el.style.left="130px"; 　　　　　
            });
            
        } 
     }
 },
 props:['activeStep'],
}
</script>

<style scoped lang="scss">
    .step{
        width: 1200px;
        margin: 100px auto 73px;
    }
</style>

<style>
.el-steps{
    overflow: hidden;
}
.el-step{
    width: 25%;
    float: left;
}
.el-step__head.is-success{
    color:#caecb6;
    border-color: #caecb6;
}
.el-step__title.is-success{
    color:#caecb6;
}
.el-step__head.is-process{
    color:#67c23a;
    border-color: #67c23a;
}
.el-step__title.is-process{
    color: #67c23a;
}
</style>
