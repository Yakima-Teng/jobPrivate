<template>
 <div class="container">
    <loginHead :headmsg="headmsg"></loginHead>
    <steps :activeStep="active"></steps>
    <div class="comp-f">
        <confirm v-if="active==0"  @next="next"></confirm>
        <security v-if="active==1" :tel="tel" @next="next"></security>
        <resetPassword v-if="active==2" :tel="tel" @next="next"></resetPassword>
        <resetSuccess v-if="active==4"  @next="next"></resetSuccess>
    </div>
    
    <p class="footBorder"></p>
    <loginFoot></loginFoot>
 </div>
</template>

<script>
import loginHead from '../common/login/loginHead.vue'
import loginFoot from '../common/login/loginFoot.vue'
import steps from '../common/login/steps.vue'
import confirm from '../common/login/confirm.vue'
import security from '../common/login/security.vue'
import resetPassword from '../common/login/resetPassword.vue'
import resetSuccess from '../common/login/resetSuccess.vue'
import Api from '../../static/js/api.js'
export default {
metaInfo () {
    return {
        title: '找回密码-创新科技服务云平台',
    }
},
 data() {
  return {
      active:0,
      headmsg:'找回密码',
      tel:''
  }
 },
 methods: {
    next(tel) {
        //下一步操作
        this.tel=tel
        if (this.active++ > 3){ 
            this.active = 0;
        }
        if(this.active==3){
            this.active=4;
        }
    },
 },
 components: {
    'loginHead':loginHead,
    'loginFoot':loginFoot,
    'steps':steps,
    'confirm':confirm,
    'security':security,
    'resetPassword':resetPassword,
    'resetSuccess':resetSuccess
 }
}
</script>

<style scoped lang="scss">
    // .btnBox{
    //     width: 490px;
    //     margin: 26px auto 238px;
    //     button{
    //         width: 76px;
    //         height: 28px;
    //         border: 1px solid #7abd54;
    //         outline: none;
    //         background: #f4ffee;
    //         font-size: 14px;
    //         cursor: pointer;
    //         &:hover{
    //             background:#7abd54;
    //             color: white;
    //         }
    //     }
    // }
    .comp-f{
        height: 400px;
    }
    .footBorder{
        width: 1200px;
        margin: 0 auto 59px;
        height: 2px;
        background: #dddddd;
    }
</style>
